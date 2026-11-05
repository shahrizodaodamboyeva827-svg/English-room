// So‘z darslarini tekshirish: har bir so‘z maqolada bormi, maydonlar to‘liqmi
const { LESSONS } = require('./texts.js');
const norm = s => String(s || '').toLowerCase().replace(/[’‘`]/g, "'").replace(/[.!?,;:]+$/g, '').replace(/\s+/g, ' ').trim();
const only = process.argv[2] ? process.argv[2].split(',').map(Number) : null;
let bad = 0, words = 0;
for (const l of LESSONS) {
  if (!l.V || (only && !only.includes(l.n))) continue;
  const P = [], lem = new Set(), seen = new Set();
  l.v.forEach(w => {
    words++;
    if (w.length < 6) P.push('fields<6: ' + w[0]);
    if (!/^\/.+\/$/.test(w[1] || '')) P.push('ipa: ' + w[0] + ' ' + w[1]);
    if (!w[3] || !w[3].includes('*')) P.push('example *: ' + w[0]);
    if (!w[4]) P.push('exUz: ' + w[0]);
    if (seen.has(norm(w[0]))) P.push('dup: ' + w[0]); seen.add(norm(w[0]));
  });
  (l.A || []).forEach((A, ai) => {
    A.p.forEach(p => { for (const m of p[0].matchAll(/\[([^\]|]+)(?:\|([^\]]+))?\]/g)) { const k = norm(m[2] || m[1]); lem.add(k); if (!seen.has(k)) P.push(`A${ai} unknown mark: ${m[0]}`); } if (!p[1]) P.push(`A${ai} no uz paragraph`); if (/\[[^\]]*$/.test(p[0])) P.push(`A${ai} unclosed [`); });
    (A.q || []).forEach((q, qi) => { if (!(q[2] >= 0 && q[2] < q[1].length)) P.push(`A${ai} q${qi} answer idx`); });
  });
  const miss = l.v.filter(w => !lem.has(norm(w[0]))).map(w => w[0]);
  if (!l.A || !l.A.length) P.push('NO ARTICLE');
  if (miss.length) P.push('NOT IN ARTICLE (' + miss.length + '): ' + miss.join(', '));
  const artW = (l.A || []).reduce((a, A) => a + A.p.reduce((b, p) => b + p[0].split(/\s+/).length, 0), 0);
  console.log(`${l.kind === 'vocab' ? 'V' : 'L'}${l.n} ${l.lvl} ${l.t.slice(0, 34).padEnd(34)} words ${l.v.length} groups ${l.vg.length} article ${artW}w ${P.length ? '✗ ' + P.length : '✓'}`);
  P.forEach(x => console.log('    ' + x)); if (P.length) bad++;
}
console.log('lessons with problems:', bad, 'total words:', words);

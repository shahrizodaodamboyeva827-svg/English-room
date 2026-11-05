/* =====================================================================
   VOCABULARY — so‘z guruhlari, maqola (reading), son o‘quvchi, so‘z testi
   Grammatika darsida: Vocabulary bo‘limi = «So‘zlar | Maqola» tablari.
   Mavzu (vocab) darsida: Words → Reading → Test.
   ===================================================================== */
const normWord = s => String(s || '').toLowerCase().replace(/[’‘`]/g, "'").replace(/[.!?,;:]+$/g, '').replace(/\s+/g, ' ').trim();
const artText = p => String(p || '').replace(/\[([^\]|]+)(?:\|[^\]]+)?\]/g, '$1');
let vTab = 'words', vTabN = 0;

/* ---------- sonlar: yozilishi va o‘qilishi ---------- */
const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const n99 = n => (n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : ''));
function numParts(n) {                       // har bir bo‘lak — oldindan yozilgan ovoz
  if (n === 0) return ['zero'];
  const P = [], m = Math.floor(n / 1e6), th = Math.floor(n / 1000) % 1000, r = n % 1000;
  const chunk = (x, lead) => { const h = Math.floor(x / 100), t = x % 100; if (h) P.push(ONES[h] + ' hundred'); if (t) { if (h || lead) P.push('and'); P.push(n99(t)); } };
  if (m) { chunk(m, false); P.push('million'); }
  if (th) { chunk(th, false); P.push('thousand'); }
  if (r) chunk(r, (m || th) && r < 100);
  return P;
}
function yearParts(y) {
  if (y < 1000 || y > 2999) return numParts(y);
  const hi = Math.floor(y / 100), lo = y % 100;
  if (y >= 2000 && y < 2010) return numParts(y);
  if (lo === 0) return [n99(hi), 'hundred'];
  if (lo < 10) return [n99(hi), 'oh', ONES[lo]];
  return [n99(hi), n99(lo)];
}
const partsText = P => P.map((p, i) => ((p === 'thousand' || p === 'million') && P[i + 1] && P[i + 1] !== 'and' ? p + ',' : p)).join(' ');
function numBreak(n) {
  if (n < 20) return [[String(n), ONES[n]]];
  if (n < 100) return n % 10 ? [[String(n - n % 10), TENS[Math.floor(n / 10)]], [String(n % 10), ONES[n % 10]]] : [[String(n), TENS[n / 10]]];
  const out = [], m = Math.floor(n / 1e6), th = Math.floor(n / 1000) % 1000, r = n % 1000, f = x => x.toLocaleString('en-US');
  const chunk = (x, mult, name) => { const h = Math.floor(x / 100), t = x % 100; if (h) out.push([f(h * 100 * mult), ONES[h] + ' hundred' + (t || !name ? '' : ' ' + name)]); if (t) out.push([f(t * mult), (h ? 'and ' : '') + n99(t) + (name ? ' ' + name : '')]); };
  if (m) chunk(m, 1e6, 'million');
  if (th) chunk(th, 1000, 'thousand');
  if (r) { const h = Math.floor(r / 100), t = r % 100; if (h) out.push([f(h * 100), ONES[h] + ' hundred']); if (t) out.push([f(t), ((h || m || th) ? 'and ' : '') + n99(t)]); }
  return out;
}
let numMode = 'n';
function numberLabHtml() {
  return `<section class="numlab" id="numlab">
    <div class="nl-head"><div><p class="rule-k">Mashq</p><h3>Istalgan sonni yozing — qanday yozilishi va o‘qilishini ko‘rasiz</h3></div>
      <div class="seg" role="group" aria-label="Turi"><button type="button" data-act="num-mode" data-m="n" aria-pressed="${numMode === 'n'}">Son</button><button type="button" data-act="num-mode" data-m="y" aria-pressed="${numMode === 'y'}">Yil</button></div></div>
    <div class="nl-in"><input id="numIn" class="input" inputmode="numeric" maxlength="9" value="${numMode === 'y' ? '2009' : '45'}" aria-label="Son"><button type="button" class="btn btn-primary" data-act="num-play">${ICON.sound}<span>Tinglash</span></button></div>
    <p class="nl-out" id="numOut"></p>
    <div class="nl-parts" id="numParts"></div>
    <p class="nl-try">Sinab ko‘ring: ${(numMode === 'y' ? [1998, 2009, 2025, 1905] : [13, 30, 45, 99, 115, 2026, 45000]).map(x => `<button type="button" data-act="num-set" data-v="${x}">${x.toLocaleString('en-US')}</button>`).join('')}</p>
  </section>`;
}
function paintNum() {
  const i = $('#numIn'); if (!i) return;
  const raw = i.value.replace(/[^\d]/g, ''), n = raw === '' ? null : Math.min(+raw, 999999999);
  if (n === null) { $('#numOut').textContent = ''; $('#numParts').innerHTML = ''; return; }
  const P = numMode === 'y' ? yearParts(n) : numParts(n);
  $('#numOut').textContent = partsText(P);
  if (numMode === 'y') {
    const y = n, hi = Math.floor(y / 100), lo = y % 100;
    $('#numParts').innerHTML = y >= 2000 && y < 2010 ? `<span class="nlp"><b>${y}</b>2000–2009 yillar oddiy son kabi o‘qiladi</span>`
      : y >= 1000 && y <= 2999 ? `<span class="nlp"><b>${hi}</b>${n99(hi)}</span><span class="nl-plus">+</span><span class="nlp"><b>${String(lo).padStart(2, '0')}</b>${lo === 0 ? 'hundred' : lo < 10 ? 'oh ' + ONES[lo] : n99(lo)}</span><span class="nl-note">Yil ikki xonadan bo‘lib o‘qiladi</span>` : '';
  } else {
    const B = numBreak(n);
    $('#numParts').innerHTML = B.map(([d, w]) => `<span class="nlp"><b>${d}</b>${w}</span>`).join('<span class="nl-plus">+</span>') +
      (n >= 21 && n < 100 && n % 10 ? '<span class="nl-note">O‘nlik va birlik orasiga chiziqcha qo‘yiladi</span>' : n >= 100 && n % 100 ? '<span class="nl-note">Yuzlikdan keyin «and» qo‘shiladi (UK)</span>' : '');
  }
}
function playNum() {
  const i = $('#numIn'); if (!i || !i.value.replace(/\D/g, '')) return;
  const n = Math.min(+i.value.replace(/\D/g, ''), 999999999);
  Voice.seq((numMode === 'y' ? yearParts(n) : numParts(n)).map(p => [p, 'f']), { gap: 20 });
}

/* ---------- so‘z kartalari ---------- */
const wordCard = (Ls, w, i) => {
  const o = pic(Ls.n, 'v', i);
  return `<li class="wc${o ? '' : ' no-pic'}" data-wi="${i}">${o ? scene(o, Ls.n * 3 + i, 'scn-w', w[0] + ' ' + (w[3] || '')) : ''}
    <div class="wc-b">
      <div class="wc-top"><div class="wc-w"><b class="vw">${esc(w[0])}</b><span class="vipa">${esc(w[1])}</span></div>${playBtn(w[0])}</div>
      <p class="vuz">${esc(w[2])}</p>
      ${w[3] ? `<p class="vex">${playBtn(w[3], 'f', 'sm')}<span>${hl(w[3])}${w[4] ? `<i>${esc(w[4])}</i>` : ''}</span></p>` : ''}
      ${w[6] ? `<p class="vuse"><b>Ishlatish:</b> ${hl(w[6])}</p>` : ''}
    </div></li>`;
};
function vocabRulesHtml(Ls) {
  return (Ls.vr || []).map((r, i) => `<article class="rule vrule" id="vr-${i}">
    <header class="rule-h"><span class="rn">${ICON.bulb}</span><div><p class="rule-k">Qoida</p><h3>${r.h}</h3></div></header>
    <div class="rule-body">${r.f ? formulaHtml(r.f) : ''}<div class="rule-x">${points(r.x)}</div>${tableHtml(r.tb)}
      ${r.e && r.e.length ? `<ul class="exs">${r.e.map(e => exItem(e)).join('')}</ul>` : ''}</div></article>`).join('');
}
function groupsHtml(Ls) {
  const G = Ls.vg && Ls.vg.length ? Ls.vg : [{ id: 'all', t: 'So‘zlar', s: 0, c: Ls.v.length }];
  return G.map(g => `<section class="vgrp" id="g-${g.id}">
    <div class="vg-h"><h3>${esc(g.t)}</h3><span class="vg-c">${g.c} ta</span><button type="button" class="pp" data-act="g-all" data-n="${Ls.n}" data-g="${g.id}">${ICON.sound}<span>Guruhni tinglash</span></button></div>
    <ul class="wgrid">${Ls.v.slice(g.s, g.s + g.c).map((w, k) => wordCard(Ls, w, g.s + k)).join('')}</ul></section>`).join('');
}
function paintVocab(Ls) {
  const b = $('#vbody'); if (!b) return;
  if (vMode === 'list') {
    b.innerHTML = `${vocabRulesHtml(Ls)}${Ls.x === 'numbers' ? numberLabHtml() : ''}${groupsHtml(Ls)}`;
    paintNum();
  } else {
    vIdx = Math.min(vIdx, Ls.v.length - 1); const w = Ls.v[vIdx], o = pic(Ls.n, 'v', vIdx);
    b.innerHTML = `<div class="cards-wrap">
      <button type="button" class="fcard${vFlip ? ' is-back' : ''}" data-act="v-flip" aria-label="Kartani aylantirish">
        ${o ? scene(o, Ls.n * 3 + vIdx, 'scn-f', w[0] + ' ' + (w[3] || '')) : ''}
        ${vFlip ? `<span class="fb"><span class="fw sm">${esc(w[0])}</span><span class="fu">${esc(w[2])}</span>${w[3] ? `<span class="fe">${hl(w[3])}</span>` : ''}${w[4] ? `<span class="fe"><i>${esc(w[4])}</i></span>` : ''}</span>`
                : `<span><span class="fw">${esc(w[0])}</span><span class="fi">${esc(w[1])}</span></span>`}
      </button>
      <div class="fcard-nav"><button type="button" class="icon-btn" data-act="v-prev" aria-label="Oldingi">${ICON.left}</button>${playBtn(w[0])}<span class="num">${vIdx + 1} / ${Ls.v.length}</span><button type="button" class="icon-btn" data-act="v-next" aria-label="Keyingi">${ICON.right}</button></div>
      <p class="small muted">Kartani bosing: tarjimasi chiqadi. Avval o‘zingiz eslab ko‘ring.</p>
    </div>`;
  }
}
const vocabTools = () => `<div class="v-tools">
    <div class="seg" role="group" aria-label="Ko‘rinish"><button type="button" data-act="v-mode" data-m="list" aria-pressed="${vMode === 'list'}">Hammasi</button><button type="button" data-act="v-mode" data-m="cards" aria-pressed="${vMode === 'cards'}">Kartochkalar</button></div>
    <button type="button" class="btn btn-ghost btn-sm play-all" data-act="v-all">${ICON.sound}<span>Hammasini tinglash</span></button>
  </div>`;
const srsBox = Ls => {
  const done = Ls.v.length && Ls.v.every(w => S.P.srs[w[0]] && S.P.srs[w[0]].m);
  return `<div class="v-note srs-learn" id="srsBox">${done
    ? `<p><b>✓ Yodladim deb belgilandi.</b> Bu so‘zlar 3 kundan keyin, keyin 7 kundan keyin takrorlashga chiqadi.</p><button type="button" class="btn btn-ghost" data-act="srs-learn" data-n="${Ls.n}" data-on="0">Bekor qilish</button>`
    : `<p>So‘zlarni yaxshilab o‘rganib bo‘lgach, tugmani bosing. Faqat belgilangan bo‘limlarning so‘zlari takrorlashga chiqadi: 3 kundan, keyin 7 kundan keyin.</p><button type="button" class="btn btn-primary" data-act="srs-learn" data-n="${Ls.n}" data-on="1">✓ Bu so‘zlarni yodladim</button>`}</div>`;
};
function setLearned(n, on) {
  const Ls = lessonByN(n); if (!Ls) return;
  if (on) { const k = SRS.add(Ls.v, Ls.n); toast(`${k} ta so‘z 3 kundan keyin takrorlashga chiqadi.`); } else SRS.remove(Ls.v);
  const box = $('#srsBox'); if (box) box.outerHTML = srsBox(Ls);
}

/* grammatika darsidagi Vocabulary: So‘zlar | Maqola */
RENDER.vocabulary = (Ls) => {
  if (vTabN !== Ls.n) { vTab = 'words'; vTabN = Ls.n; }
  const hasA = Ls.A && Ls.A.length, hasT = !!Ls.vt;
  $('#sec').classList.add('wide');
  $('#sec').innerHTML = `
    <div class="sec-h"><h2>Vocabulary</h2><span class="muted">${Ls.v.length} ta so‘z${hasA ? ` · ${Ls.A.length} ta maqola` : ''}</span></div>
    ${Ls.vi ? `<p class="lead">${Ls.vi}</p>` : ''}
    ${hasA ? `<div class="vtabs" role="tablist"><button type="button" role="tab" data-act="v-tab" data-t="words" aria-selected="${vTab === 'words'}">${ICON.cards}<span>So‘zlar</span><small>${Ls.v.length}</small></button><button type="button" role="tab" data-act="v-tab" data-t="read" aria-selected="${vTab === 'read'}">${ICON.list}<span>Maqola</span><small>o‘qish</small></button>${hasT ? `<button type="button" role="tab" data-act="v-tab" data-t="types" aria-selected="${vTab === 'types'}">${ICON.bulb}<span>So‘z turlari</span><small>mashq</small></button>` : ''}</div>` : ''}
    <div id="vpane"></div>
    ${nextBar(Ls, 'vocabulary', 'So‘zlarni tinglab, maqolani o‘qib chiqdingizmi? Endi gapirishni mashq qilamiz.')}`;
  paintVPane(Ls);
};
function paintVPane(Ls) {
  const p = $('#vpane'); if (!p) return;
  if (vTab === 'read' && Ls.A && Ls.A.length) { p.innerHTML = articlesHtml(Ls); return; }
  if (vTab === 'types' && Ls.vt) { p.innerHTML = vtHtml(Ls); return; }
  p.innerHTML = `${srsBox(Ls)}${vocabTools()}<div id="vbody"></div>${Ls.A && Ls.A.length ? `<div class="to-read"><p>So‘zlarni ko‘rib chiqdingizmi? Endi ular ishlatilgan maqolani o‘qing.</p><button type="button" class="btn btn-lv" data-act="v-tab" data-t="read">${ICON.list}<span>Maqolani o‘qish</span></button>${Ls.vt ? `<button type="button" class="btn btn-ghost" data-act="v-tab" data-t="types">${ICON.bulb}<span>So‘z turlari mashqi</span></button>` : ''}</div>` : ''}`;
  paintVocab(Ls);
}
/* mavzu darsi: Words / Reading */
RENDER.words = (Ls) => {
  $('#sec').classList.add('wide');
  $('#sec').innerHTML = `
    <div class="sec-h"><h2>Words</h2><span class="muted">${Ls.v.length} ta so‘z · ${Ls.vg.length} ta guruh</span></div>
    ${Ls.vi ? `<p class="lead">${Ls.vi}</p>` : ''}
    <nav class="rule-toc" aria-label="Guruhlar">${Ls.vg.map((g, i) => `<button type="button" data-act="jump" data-id="g-${g.id}"><b>${String(i + 1).padStart(2, '0')}</b>${esc(g.t)}</button>`).join('')}</nav>
    ${srsBox(Ls)}${vocabTools()}<div id="vbody"></div>
    ${nextBar(Ls, 'words', 'So‘zlarni tinglab, takrorlab chiqdingizmi? Endi ular ishlatilgan maqolani o‘qiymiz.')}`;
  paintVocab(Ls);
};
RENDER.reading = (Ls) => {
  $('#sec').classList.add('wide');
  $('#sec').innerHTML = `<div class="sec-h"><h2>Reading</h2><span class="muted">${Ls.A.length} ta maqola</span></div>
    ${articlesHtml(Ls)}
    ${nextBar(Ls, 'reading', 'Maqolani o‘qib, savollarga javob berdingizmi? Endi so‘zlar bo‘yicha test.')}`;
};

/* ---------- maqola ---------- */
function wordIndex(Ls, lemma) { const k = normWord(lemma); return Ls.v.findIndex(w => normWord(w[0]) === k); }
function markWords(Ls, text) {
  return esc(text).replace(/\[([^\]|]+)(?:\|([^\]]+))?\]/g, (m, d, lem) => {
    const i = wordIndex(Ls, lem || d);
    return i < 0 ? d : `<button type="button" class="aw" data-act="aw" data-n="${Ls.n}" data-i="${i}">${d}</button>`;
  });
}
function articlesHtml(Ls) {
  const lp = LP(Ls.n), rd = lp.read || {};
  return `<p class="a-help">${ICON.spark}<span>Belgilangan so‘zlar shu darsdan. Ustiga bosing: tarjimasi va talaffuzi chiqadi.</span></p>` + (Ls.A || []).map((A, ai) => `
    <article class="art" id="art-${ai}">
      <header class="art-h">${A.k ? `<p class="art-k">${esc(A.k)}</p>` : ''}<h3>${esc(A.t)}</h3>${A.s ? `<p class="art-s">${esc(A.s)}</p>` : ''}
        <div class="art-tools"><button type="button" class="pp" data-act="a-all" data-n="${Ls.n}" data-a="${ai}">${ICON.sound}<span>Butun maqolani tinglash</span></button><button type="button" class="pp pp-slow" data-act="a-tr" data-a="${ai}" aria-pressed="false">${ICON.list}<span>O‘zbekcha tarjima</span></button></div></header>
      <div class="art-body">${A.p.map((p, pi) => `<div class="ap" data-pi="${pi}">${playBtn(artText(p[0]), 'f', 'sm')}<div><p class="ap-en">${markWords(Ls, p[0])}</p>${p[1] ? `<p class="ap-uz">${esc(p[1])}</p>` : ''}</div></div>`).join('')}</div>
      ${A.q && A.q.length ? `<div class="art-q"><h4>Matnni tushundingizmi?</h4><ol class="qz">${A.q.map((q, qi) => { const ch = rd[ai + '.' + qi], d = ch !== undefined; return `<li class="${d ? (ch === q[2] ? 'right' : 'wrong') : ''}"><p class="q">${esc(q[0])}</p><div class="opts">${q[1].map((o, j) => `<button type="button" class="opt${d && j === q[2] ? ' right' : ''}${d && j === ch && ch !== q[2] ? ' wrong' : ''}" data-act="aq" data-n="${Ls.n}" data-a="${ai}" data-i="${qi}" data-o="${j}"${d ? ' disabled' : ''}>${esc(o)}</button>`).join('')}</div></li>`; }).join('')}</ol></div>` : ''}
    </article>`).join('');
}
function wordPop(btn) {
  const Ls = lessonByN(+btn.dataset.n), w = Ls && Ls.v[+btn.dataset.i]; if (!w) return;
  let p = $('#awPop'); if (!p) { p = document.createElement('div'); p.id = 'awPop'; p.className = 'aw-pop'; document.body.appendChild(p); }
  p.innerHTML = `<div class="awp-top"><b>${esc(w[0])}</b>${playBtn(w[0], 'f', 'sm')}</div><span class="vipa">${esc(w[1])}</span><p>${esc(w[2])}</p>`;
  const r = btn.getBoundingClientRect(); p.hidden = false;
  const left = Math.max(10, Math.min(window.innerWidth - p.offsetWidth - 10, r.left + r.width / 2 - p.offsetWidth / 2));
  p.style.left = left + 'px'; p.style.top = (r.bottom + window.scrollY + 8) + 'px';
  Voice.say(w[0]);
}

/* ---------- so‘z testi (avtomatik) ---------- */
function vocabTestItems(Ls) {
  const all = Ls.v.map((w, i) => ({ w, i, g: (Ls.vg.find(g => i >= g.s && i < g.s + g.c) || { id: 'all' }).id }));
  const byG = Ls.vg.map(g => shuffle(all.filter(x => x.g === g.id)));
  const N = Math.min(20, all.length), pick = [];
  while (pick.length < N) { let added = false; for (const arr of byG) if (arr.length && pick.length < N) { pick.push(arr.shift()); added = true; } if (!added) break; }
  const types = ['pic', 'uz2en', 'listen', 'en2uz', 'gap', 'spell'];
  const others = (x, key, n) => {
    const seen = new Set([normWord(key(x.w))]), out = [];
    shuffle(all.filter(y => y.g === x.g)).concat(shuffle(all.filter(y => y.g !== x.g))).forEach(y => { const v = key(y.w), k = normWord(v); if (out.length < n && !seen.has(k)) { seen.add(k); out.push(v); } });
    return out;
  };
  return pick.map((x, k) => {
    let t = types[k % types.length];
    const w = x.w, hasPic = !!pic(Ls.n, 'v', x.i), m = (w[3] || '').match(/\*([^*]+)\*/);
    if (t === 'pic' && !hasPic) t = 'uz2en';
    if (t === 'gap' && !(m && normWord(m[1]) === normWord(w[0]))) t = 'en2uz';
    const en = y => y[0], uz = y => y[2];
    const base = { rid: x.g, n: Ls.n, why: `${w[0]} — ${w[2]}`, type: t };
    if (t === 'pic') return Object.assign(base, { q: `Rasmda: ${w[2]}`, html: `<div class="tq-pic">${scene(pic(Ls.n, 'v', x.i), x.i, 'scn-t')}</div><p class="tq-t">Rasmdagi so‘zni tanlang</p>`, o: [w[0]].concat(others(x, en, 3)), a: 0 });
    if (t === 'uz2en') return Object.assign(base, { q: `«${w[2]}» — inglizchasi`, html: `<p class="tq-t">Inglizchasini tanlang</p><p class="tq-big">${esc(w[2])}</p>`, o: [w[0]].concat(others(x, en, 3)), a: 0 });
    if (t === 'en2uz') return Object.assign(base, { q: `${w[0]} — tarjimasi`, html: `<p class="tq-t">Tarjimasini tanlang</p><p class="tq-big">${esc(w[0])} ${playBtn(w[0])}</p>`, o: [w[2]].concat(others(x, uz, 3)), a: 0 });
    if (t === 'listen') return Object.assign(base, { q: `Eshitilgan so‘z: ${w[0]}`, say: w[0], html: `<p class="tq-t">Tinglang va eshitgan so‘zingizni tanlang</p><p class="tq-big">${playBtn(w[0], 'f', 'big')}</p>`, o: [w[0]].concat(others(x, en, 3)), a: 0 });
    if (t === 'gap') return Object.assign(base, { q: w[3].replace(/\*[^*]+\*/, '___'), o: [w[0]].concat(others(x, en, 3)), a: 0 });
    return Object.assign(base, { q: `Yozing: ${w[2]}`, ans: w[0], say: w[0], html: `${hasPic ? `<div class="tq-pic sm">${scene(pic(Ls.n, 'v', x.i), x.i, 'scn-t')}</div>` : ''}<p class="tq-t">Tinglang va inglizcha yozing</p><p class="tq-big">${esc(w[2])} ${playBtn(w[0])}</p>` });
  });
}

/* =====================================================================
   B1 qo‘shimchalari: qizil qoidalar, ko‘p misol, tarjima mashqlari,
   so‘z turlari, Speaking strukturalari, Writing imlo va suhbat,
   Storyline podcast + retelling + AI tekshiruv
   ===================================================================== */
const normEn = s => {
  let t = ' ' + String(s || '').toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?;:"“”()\-—]/g, ' ') + ' ';
  [[/ i'm /g, ' i am '], [/ (you|we|they)'re /g, ' $1 are '], [/ (he|she|it|that|there|who|what)'s /g, ' $1 is '], [/ let's /g, ' let us '],
   [/ won't /g, ' will not '], [/ can't /g, ' can not '], [/ cannot /g, ' can not '], [/ shan't /g, ' shall not '],
   [/n't /g, ' not '], [/'ll /g, ' will '], [/'ve /g, ' have '], [/'re /g, ' are '], [/'d /g, ' would ']].forEach(([a, b]) => { t = t.replace(a, b); });
  return t.replace(/\s+/g, ' ').trim();
};
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[n];
}
/* tarjima / bo‘sh joy mashqi (bitta element) */
const trItem = (prompt, ans, ph, cls = '') => `<li class="tri ${cls}" data-ans="${esc(ans)}"><p class="tr-uz">${prompt}</p><div class="tr-in"><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${ph || 'Inglizchasini yozing…'}" aria-label="Javob"><button type="button" class="btn btn-primary btn-sm" data-act="tr-check">Tekshirish</button><button type="button" class="btn btn-ghost btn-sm" data-act="tr-show">Javob</button></div><p class="tr-fb" aria-live="polite"></p></li>`;
function trCheck(li, reveal) {
  const inp = li.querySelector('input'), fb = li.querySelector('.tr-fb'), answers = li.dataset.ans.split('|').map(x => x.trim());
  const you = normEn(inp.value), shown = answers[0];
  if (reveal) { li.classList.remove('ok', 'bad'); fb.innerHTML = `Javob: <b>${esc(shown)}</b> ${playBtn(shown, 'f', 'sm')}`; return; }
  if (!you) { fb.textContent = 'Avval javobingizni yozing.'; return; }
  const best = answers.map(a => normEn(a)).reduce((m, a) => (lev(you, a) < lev(you, m) ? a : m));
  const d = lev(you, best);
  if (d === 0) { li.classList.add('ok'); li.classList.remove('bad'); fb.innerHTML = `✓ To‘g‘ri! ${playBtn(shown, 'f', 'sm')}`; li.dataset.done = '1'; }
  else if (d <= Math.max(2, Math.round(best.length * .1))) { li.classList.remove('ok'); li.classList.add('bad'); fb.innerHTML = `Deyarli to‘g‘ri — imlo yoki bitta so‘zni tekshiring. Javob: <b>${esc(shown)}</b>`; }
  else { li.classList.remove('ok'); li.classList.add('bad'); fb.innerHTML = `Hali emas. Qoidani qayta o‘qing va urinib ko‘ring, yoki «Javob»ni bosing.`; }
}
const B1_ACT = {
  'tr-check': t => trCheck(t.closest('.tri'), false),
  'tr-show': t => trCheck(t.closest('.tri'), true),
  'sp-pick': t => {
    const li = t.closest('.spi'); if (li.dataset.done) return; li.dataset.done = '1';
    const ok = t.dataset.ok === '1'; li.classList.add(ok ? 'ok' : 'bad');
    $$('button', li).forEach(b => { b.disabled = true; if (b.dataset.ok === '1') b.classList.add('right'); });
    li.querySelector('.sp-tip').hidden = false;
  },
  'rt-mic': () => rtToggle(),
  'rt-check': () => rtCheck()
};
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('.tr-in input')) { e.preventDefault(); trCheck(e.target.closest('.tri'), false); } });

/* ---------- Grammar: qizil «yodlang», ko‘p misol, tarjima ---------- */
const keyHtml = k => (k && k.length ? `<aside class="keyrule"><b class="kr-h">⚠ YODLANG!</b><ul>${k.map(x => `<li>${hl(x)}</li>`).join('')}</ul></aside>` : '');
const exRows = (Ls, r, k0) => `<ol class="exr-list">${r.e.map((e, i) => `<li class="exr"><span class="exr-n">${i + 1}</span><div class="exr-t"><p class="ex-en">${hl(e[0])}</p>${e[1] ? `<p class="ex-uz">${e[1]}</p>` : ''}</div><div class="exc-a">${sayPill(e[0])}</div></li>`).join('')}</ol>`;
const trBlock = r => (r.tr && r.tr.length ? `<div class="ex-h tr-h"><span>✍ Tarjima qiling</span><i></i><small>O‘zbekchadan inglizchaga yozing. Enter — tekshirish</small></div><ol class="trl">${r.tr.map(t => trItem(t[0], t[1])).join('')}</ol>` : '');

/* ---------- Vocabulary: so‘z turlari (word formation, collocations, phrasal verbs, usage, synonyms) ---------- */
function vtHtml(Ls) {
  const v = Ls.vt; if (!v) return '';
  const sec = (cls, ico, title, sub, body) => `<section class="vt ${cls}"><header><span class="vt-i">${ico}</span><div><h3>${title}</h3><p>${sub}</p></div></header>${body}</section>`;
  const say = t => playBtn(t, 'f', 'sm');
  let out = '';
  if (v.wf) out += sec('vt-wf', '🧩', 'Word formation', 'So‘zdan yangi so‘z yasash: happy → happiness → unhappy',
    `<div class="vt-grid">${v.wf.map(w => `<div class="vt-card"><b class="vt-base">${esc(w[0])}</b><ul>${w[1].map(f => `<li>${esc(f[0])} <small>${esc(f[1])}</small></li>`).join('')}</ul>${w[2] ? `<p class="vt-eg">${hl(w[2])}</p>` : ''}</div>`).join('')}</div>`);
  if (v.col) out += sec('vt-col', '🔗', 'Collocations', 'Birga ishlatiladigan so‘zlar: make a decision, take a break',
    `<div class="vt-list">${v.col.map(c => `<div class="vt-row"><b>${esc(c[0])}</b><span>${esc(c[1])}</span><em>${hl(c[2])}</em>${say(String(c[2]).replace(/\*/g, ''))}</div>`).join('')}</div>`);
  if (v.pv) out += sec('vt-pv', '🚀', 'Phrasal verbs', 'Fe’l + predlog: get up, look after, find out',
    `<div class="vt-list">${v.pv.map(c => `<div class="vt-row"><b>${esc(c[0])}</b><span>${esc(c[1])}</span><em>${hl(c[2])}</em>${say(String(c[2]).replace(/\*/g, ''))}</div>`).join('')}</div>`);
  if (v.use) out += sec('vt-use', '🎯', 'Word usage', 'So‘zni turli vaziyatda to‘g‘ri qo‘llash',
    `<div class="vt-grid">${v.use.map(u => `<div class="vt-card"><b class="vt-base">${esc(u[0])}</b><p class="vt-note">${u[1]}</p><ul class="vt-ex">${u[2].map(x => `<li>${hl(x)} ${say(String(x).replace(/\*/g, ''))}</li>`).join('')}</ul></div>`).join('')}</div>`);
  if (v.syn) out += sec('vt-syn', '⚖', 'Synonyms & antonyms', 'Ma’nodosh va qarama-qarshi so‘zlar: big / large, cheap / expensive',
    `<div class="vt-syn-grid">${v.syn.map(s => `<div class="vt-syn"><b>${esc(s[0])}</b><span class="syn">≈ ${esc(s[1])}</span><span class="ant">↔ ${esc(s[2])}</span></div>`).join('')}</div>`);
  if (v.ex) out += `<section class="vt vt-ex-sec"><header><span class="vt-i">✍</span><div><h3>Mashqlar</h3><p>Bo‘sh joyga mos so‘zni yozing. Enter — tekshirish.</p></div></header><ol class="trl">${v.ex.map(x => trItem(hl(x[0]).replace('___', '<span class="slot">___</span>'), x[1], 'So‘zni yozing…')).join('')}</ol></section>`;
  return `<div class="vt-wrap">${out}</div>`;
}

/* ---------- Speaking: strukturalar ---------- */
const stPat = t => String(t).replace(/\*([^*]+)\*/g, '<mark class="sp-k">$1</mark>').replace(/ \+ /g, ' <i>+</i> ');
const stHtml = s => (s && s.st ? `<h3 class="sub-h">Bugungi strukturalar</h3><p class="muted small">Qolipni ko‘ring, misolni tinglang va o‘zingiz haqingizda xuddi shunday gap ayting.</p><div class="st-grid">${s.st.map((x, i) => `<div class="st-card"><div class="st-top"><span class="st-n">${i + 1}</span><b>${esc(x[0])}</b></div><p class="st-pat">${stPat(x[1])}</p><div class="st-eg">${playBtn(String(x[2]).replace(/\*/g, ''))}<div><p class="ex-en">${hl(x[2])}</p><p class="ex-uz">${x[3] || ''}</p></div></div><p class="st-try">✎ Endi siz: shu qolipda o‘zingizdan bitta gap tuzing.</p></div>`).join('')}</div>` : '');

/* ---------- Writing: imlo + natural suhbat ---------- */
function wExtra(Ls) {
  const w = Ls.w; let o = '';
  if (w.sp) o += `<section class="wx"><h3 class="sub-h">Imlo ustida ishlaymiz</h3><p class="muted small">${w.sp.t || 'Qaysi yozilish to‘g‘ri? Bosing.'}</p><ol class="spl">${w.sp.i.map(x => {
    const opts = shuffle([[x[0], 1], [x[1], 0]]);
    return `<li class="spi"><div class="sp-o">${opts.map(([t, ok]) => `<button type="button" class="opt" data-act="sp-pick" data-ok="${ok}">${esc(t)}</button>`).join('')}</div><p class="sp-tip" hidden>✓ <b>${esc(x[0])}</b> — ${x[2]}</p></li>`;
  }).join('')}</ol></section>`;
  if (w.cv) o += `<section class="wx"><h3 class="sub-h">Odamlar bilan tabiiy suhbat</h3><p class="lead-s">${w.cv.sit}</p>
    <div class="cv-phr">${w.cv.phr.map(p => `<span class="cv-p">${playBtn(p[0], 'f', 'sm')}<b>${esc(p[0])}</b><small>${esc(p[1])}</small></span>`).join('')}</div>
    <div class="cv-dlg">${w.cv.dlg.map(d => `<div class="cv-l ${d[0] === 0 ? 'a' : 'b'}"><span>${d[0] === 0 ? (w.cv.who ? w.cv.who[0] : 'A') : (w.cv.who ? w.cv.who[1] : 'B')}</span><p>${hl(d[1])}</p>${playBtn(d[1].replace(/\*/g, ''), d[0] === 0 ? 'f' : 'm', 'sm')}</div>`).join('')}</div>
    <p class="task" style="margin-top:12px">${w.cv.task}</p></section>`;
  return o;
}

/* ---------- Listening: Storyline podcast + retelling + AI ---------- */
const RT = { rec: null, on: false, low: [] };
function renderStory(Ls, lp) {
  const p = Ls.pod; lp.listen = lp.listen || {}; const L = lp.listen; L.pre = L.pre || [];
  const pu = Ls.lvl === 'B1' ? pandaUrl(Ls.n) : '';
  const url = pu || 'https://www.youtube.com/@StorylineEnglishOfficial/search?query=' + encodeURIComponent(p.q);
  const chan = pu ? ['English Panda · YouTube', 'https://www.youtube.com/EnglishPandaLessons', PANDA[Ls.n]] : ['Storyline English · YouTube', 'https://www.youtube.com/@StorylineEnglishOfficial', p.q];
  const gen = ['Hikoyada kimlar bor? (Who are the main characters?)', 'Voqea qayerda va qachon bo‘ladi?', 'Asosiy muammo yoki voqea nima?', 'Hikoya qanday tugaydi?'].concat(p.pre || []);
  $('#sec').innerHTML = `
    <div class="sec-h"><h2>Listening · Podcast</h2></div>
    <p class="lead">${pu ? 'English Panda kanalidan shu grammatikaga mos video darsni ko‘ring.' : 'Storyline English kanalidan shu mavzuga mos podcastni tinglang.'} Keyin tushunganingizni o‘zingiz gapirib (yoki yozib) bering, AI xatolaringizni tuzatadi.</p>
    <a class="story-card" href="${url}" target="_blank" rel="noopener"><span class="story-ic">▶</span><div><p class="story-k">${chan[0]}</p><h3>«${esc(chan[2])}» mavzusidagi videolar</h3><p>${pu ? 'Kanaldan shu mavzu bo‘yicha videoni tanlang: avval tinglang, keyin misollarni takrorlang.' : 'Kanaldan shu mavzuga yaqin hikoyani tanlang va matnsiz tinglang. Qiyin bo‘lsa, ikkinchi marta subtitr bilan.'}</p></div><span class="story-go">Ochish ↗</span></a>
    <p class="small muted" style="margin:8px 4px 0"><a href="${chan[1]}" target="_blank" rel="noopener">Kanalning bosh sahifasi</a> · Tinglayotganda e’tibor bering: ${p.hint}</p>
    <h3 class="sub-h">1. Qisqa savol-javob</h3><p class="muted small">Tinglab bo‘lgach, har bir savolga 1–2 gap bilan inglizcha javob yozing.</p>
    <ol class="prel">${gen.map((q, i) => `<li><p class="q">${q}</p><textarea class="pre-in" data-i="${i}" rows="2" spellcheck="false" placeholder="Your answer…">${esc(L.pre[i] || '')}</textarea></li>`).join('')}</ol>
    <h3 class="sub-h">2. Retelling: o‘zingizcha gapirib bering</h3>
    <div class="rt-box"><p>Hikoyani o‘z so‘zlaringiz bilan qayta aytib bering (kamida 5–8 gap). Imkon bo‘lsa, <b>${esc(p.use)}</b> ishlating.</p>
      <div class="rt-tools"><button type="button" class="btn btn-lv" id="rtMic" data-act="rt-mic">${ICON.mic}<span>Gapirib yozish (mikrofon)</span></button><span class="small muted" id="rtSt">yoki pastga o‘zingiz yozing</span></div>
      <textarea id="rtText" rows="7" spellcheck="false" placeholder="Tell the story in your own words…">${esc(L.rt || '')}</textarea>
      <div class="w-act"><button type="button" class="btn btn-primary" id="rtGo" data-act="rt-check">AI tekshirsin</button><p class="small muted" id="rtSub"></p></div>
    </div>
    <div id="rtRes">${L.res ? rtResHtml(L.res) : ''}</div>
    ${nextBar(Ls, 'listening', 'Retellingni tekshirtirdingizmi? Endi yozish bo‘limi.')}`;
}
document.addEventListener('input', e => {
  const t = e.target; if (!S.view || !S.view.lesson) return;
  if (t.classList && t.classList.contains('pre-in')) { const lp = LP(S.view.lesson); lp.listen = lp.listen || {}; lp.listen.pre = lp.listen.pre || []; lp.listen.pre[+t.dataset.i] = t.value; saveP(); }
  if (t.id === 'spkText') { const lp = LP(S.view.lesson); lp.speak = lp.speak || { checks: [] }; lp.speak.text = t.value; saveP(); }
  if (t.id === 'rtText') { const lp = LP(S.view.lesson); lp.listen = lp.listen || {}; lp.listen.rt = t.value; saveP(); }
});
function rtToggle() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition, btn = $('#rtMic'), st = $('#rtSt');
  if (!SR) { toast('Brauzeringiz ovozni matnga o‘girmaydi. Chrome ishlating yoki yozib bering.'); return; }
  if (RT.on) { try { RT.rec.stop(); } catch (e) {} return; }
  const r = new SR(); r.lang = 'en-US'; r.continuous = true; r.interimResults = false; RT.rec = r; RT.low = RT.low || [];
  r.onresult = ev => { const ta = $('#rtText'); for (let i = ev.resultIndex; i < ev.results.length; i++) { const x = ev.results[i]; if (!x.isFinal) continue; const tx = x[0].transcript.trim(); if (tx) { ta.value += (ta.value && !/\s$/.test(ta.value) ? ' ' : '') + tx; if (x[0].confidence && x[0].confidence < .8) RT.low.push(tx); } } ta.dispatchEvent(new Event('input', { bubbles: true })); };
  r.onend = () => { RT.on = false; if (btn) btn.classList.remove('is-rec'); if (btn) btn.querySelector('span').textContent = 'Gapirib yozish (mikrofon)'; if (st) st.textContent = 'To‘xtadi. Matnni o‘qib chiqing, kerak bo‘lsa to‘g‘rilang.'; };
  r.onerror = () => { RT.on = false; if (st) st.textContent = 'Mikrofon ishlamadi. Ruxsat bering yoki yozib bering.'; };
  RT.on = true; btn.classList.add('is-rec'); btn.querySelector('span').textContent = 'To‘xtatish'; st.textContent = 'Eshityapman… inglizcha gapiring.'; r.start();
}
const DICT = { s: null };
function dictionary() {
  if (DICT.s) return DICT.s; const s = new Set();
  const add = t => String(t || '').toLowerCase().replace(/[’‘]/g, "'").replace(/\[([^\]|]+)(?:\|[^\]]+)?\]/g, '$1').match(/[a-z]+(?:'[a-z]+)?/g)?.forEach(w => s.add(w));
  LESSONS.forEach(l => { (l.v || []).forEach(w => { add(w[0]); add(w[3]); }); (l.g || []).forEach(r => (r.e || []).forEach(e => add(e[0]))); (l.A || []).forEach(a => a.p.forEach(p => add(p[0]))); });
  ['a', 'i', 'the', 'and', 'to', 'of', 'in', 'on', 'at', 'is', 'am', 'are', 'was', 'were', 'be', 'been', 'it', 'he', 'she', 'we', 'they', 'you', 'my', 'his', 'her', 'their', 'our', 'with', 'for', 'that', 'this', 'but', 'so', 'then', 'when', 'after', 'because', 'very', 'not', 'no', 'yes', 'had', 'have', 'has', 'did', 'do', 'does', 'will', 'would', 'could', 'should', 'story', 'man', 'woman', 'girl', 'boy', 'said', 'told', 'went', 'came', 'saw', 'found', 'took', 'made', 'one', 'day'].forEach(w => s.add(w));
  return (DICT.s = s);
}
function rtLocal(text) {
  const D = dictionary(), words = text.toLowerCase().replace(/[’‘]/g, "'").match(/[a-z]+(?:'[a-z]+)?/g) || [], spelling = [], seen = new Set();
  words.forEach(w => {
    if (D.has(w) || w.length < 4 || seen.has(w)) return; seen.add(w);
    let best = null, bd = 9; D.forEach(x => { if (Math.abs(x.length - w.length) <= 2) { const d = lev(w, x); if (d < bd) { bd = d; best = x; } } });
    const stem = w.replace(/(ing|ed|es|s|ly|er)$/, '');
    if (best && stem.length > 2 && D.has(stem)) return;
    if (best && bd <= (w.length > 7 ? 2 : 1)) spelling.push({ wrong: w, right: best });
  });
  const cnt = {}; words.forEach(w => { if (w.length > 3) cnt[w] = (cnt[w] || 0) + 1; });
  const rep = Object.entries(cnt).filter(([, n]) => n >= 4).map(([w]) => w);
  return { local: true, level: words.length >= 90 ? 'B1' : words.length >= 45 ? 'A2+' : 'A2', understood: `Siz ${words.length} ta so‘z ishlatdingiz. Server AI ulanmagan, shuning uchun faqat oddiy tekshiruv ishladi.`, spelling: spelling.slice(0, 8), words: rep.map(w => ({ wrong: w, right: 'sinonim toping', why: `«${w}» so‘zi ko‘p takrorlandi.` })), grammar: [], pronunciation: [], tip: 'To‘liq AI tekshiruv Cloudflare saytda ishlaydi: u grammatika va so‘z tanlashni ham tuzatadi.' };
}
const rtList = (title, items, f) => (items && items.length ? `<div class="rt-sec"><h4>${title}</h4><ul>${items.map(f).join('')}</ul></div>` : '');
function rtResHtml(r) {
  return `<div class="rt-res"><div class="rt-top"><span class="rt-lv">${esc(r.level || '—')}</span><div><b>Tushunish va til darajasi</b><p>${esc(r.understood || '')}</p></div></div>
    ${rtList('Imlo xatolari', r.spelling, x => `<li><s>${esc(x.wrong)}</s> → <b>${esc(x.right)}</b></li>`)}
    ${rtList('So‘z tanlash', r.words, x => `<li><s>${esc(x.wrong)}</s> → <b>${esc(x.right)}</b><small>${esc(x.why || '')}</small></li>`)}
    ${rtList('Grammatika', r.grammar, x => `<li><s>${esc(x.wrong)}</s> → <b>${esc(x.right)}</b><small>${esc(x.why || '')}</small></li>`)}
    ${rtList('Talaffuz (mikrofon aniq tushunmagan joylar)', r.pronunciation, x => `<li><b>${esc(x.word)}</b><small>${esc(x.tip || '')}</small>${x.word ? playBtn(x.word, 'f', 'sm') : ''}</li>`)}
    ${r.tip ? `<p class="rt-tip">💡 ${esc(r.tip)}</p>` : ''}</div>`;
}
async function rtCheck() {
  const Ls = lessonByN(S.view.lesson), lp = LP(Ls.n), ta = $('#rtText'), text = ta.value.trim(), box = $('#rtRes'), btn = $('#rtGo');
  if (text.split(/\s+/).length < 20) { $('#rtSub').textContent = 'Kamida 20 ta so‘z kerak: hikoyani batafsilroq aytib bering.'; return; }
  btn.disabled = true; $('#rtSub').textContent = 'AI tekshiryapti…';
  const low = (RT.low || []).slice(0, 8); let res = null;
  if (API.mode === 'server') {
    try { res = await API.call('POST', '/retell', { text, topic: Ls.pod.q, grammar: Ls.t, words: (Ls.v || []).slice(0, 14).map(w => w[0]), low }); } catch (e) { res = null; }
  }
  if (!res) res = rtLocal(text);
  if (!res.pronunciation || !res.pronunciation.length) res.pronunciation = low.map(t => ({ word: t.split(/\s+/).slice(0, 6).join(' '), tip: 'Mikrofon bu joyni aniq tushunmadi. Sekinroq va aniqroq ayting.' }));
  lp.listen.res = res; lp.listen.rtAt = Date.now(); box.innerHTML = rtResHtml(res); btn.disabled = false; $('#rtSub').textContent = ''; saveP();
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

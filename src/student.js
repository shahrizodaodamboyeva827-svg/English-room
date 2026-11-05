/* =====================================================================
   STUDENT UI — login, level picker, metro map, lessons, test, SRS, review, chat
   ===================================================================== */
const view = () => $('#view');
const setLv = l => { document.body.dataset.lv = l || ''; document.body.dataset.sec = ''; };
function go(h) { if (location.hash.slice(1) === h) route(); else location.hash = h; }
const lessonDone = n => !!(S.P.lessons['l' + n] && S.P.lessons['l' + n].sec && S.P.lessons['l' + n].sec.test);
const reviewDone = id => !!(S.P.reviews && S.P.reviews[id] && S.P.reviews[id].test);
const stationDone = s => (s.type === 'lesson' ? lessonDone(s.n) : reviewDone(s.id));
const stationHref = s => (s.type === 'lesson' ? `#lesson-${s.n}` : `#review-${s.n}`);
function nextStation() {
  const lv = S.student.level || 'A0';
  const startIdx = Math.max(0, STATIONS.findIndex(s => s.lvl === lv));
  for (let i = startIdx; i < STATIONS.length; i++) if (!stationDone(STATIONS[i])) return STATIONS[i];
  return STATIONS[STATIONS.length - 1];
}

/* ---------------- shell ---------------- */
function showLogin() {
  Voice.stop(); setLv('');
  $('#shell').hidden = true; $('#login').hidden = false;
}
function renderBar() {
  const s = S.student;
  $('#bar').innerHTML = `
    <div class="bar-l"><a class="wordmark" href="#">English Room</a></div>
    <div class="bar-r">
      <span class="chip-time" id="timeChip" title="Bugun darsda faol bo‘lgan vaqtingiz">${ICON.clock}<span id="timeTxt">0 daq</span></span>
      <button type="button" class="btn btn-chat" data-act="chat-open">${ICON.chat}<span class="hide-s">Savol berish</span><span class="badge" id="chatBadge" ${S.unread ? '' : 'hidden'}>${S.unread}</span></button>
      <button type="button" class="me-btn" data-act="menu" aria-label="Profil">${`<span class="avatar">${esc((s.name || '?').trim()[0] || '?').toUpperCase()}</span>`}</button>
    </div>
    <div class="menu" id="menu" hidden>
      <p><b>${esc(s.name)}</b><br>Daraja: ${s.level ? `${s.level} ${LEVELS[s.level].name}` : '—'}${s.group ? `, ${esc(s.group)}` : ''}</p>
      <button type="button" data-act="logout">${ICON.door}<span>Hisobdan chiqish</span></button>
    </div>`;
}
async function enterStudent() {
  const r = await API.call('GET', '/me');
  S.student = r.student; S.P = Object.assign(blankP(), r.progress || {}); S.P.reviews = S.P.reviews || {};
  S.unread = r.unread || 0;
  $('#login').hidden = true; $('#shell').hidden = false;
  renderBar(); route();
}

/* ---------------- level picker (only once) ---------------- */
function renderPicker() {
  S.view = { name: 'level' }; setLv('');
  view().innerHTML = `<div class="pick">
    <h1>Salom, ${esc(S.student.name.split(' ')[0])}! Qaysi darajadan boshlaymiz?</h1>
    <p>Bir marta tanlaysiz, keyingi safar sayt sizni to‘g‘ri darsingizga o‘zi olib boradi.</p>
    <div class="lv-opts">${Object.entries(LEVELS).map(([k, v]) => `
      <button type="button" class="lv-opt" style="--c:${v.c}" data-act="pick-level" data-lv="${k}">
        <span class="lv-code">${k}</span>
        <span><h3>${v.uz}</h3><p>${v.desc}</p><small>${STATIONS.filter(s => s.lvl === k && s.type === 'lesson').length} ta dars</small></span>
        <span class="lv-go">${ICON.right}</span>
      </button>`).join('')}</div>
    <p class="note">Ishonchingiz komil bo‘lmasa, A0 dan boshlang: oson darslarni tez o‘tib ketasiz.</p>
  </div>`;
}

/* ---------------- home: greeting + metro map ---------------- */
let mapLv = null, mapRO = null;
function renderHome() {
  S.view = { name: 'home' }; setLv(S.student.level); Voice.stop();
  const nx = nextStation(), due = SRS.dueCount();
  const doneN = LESSONS.filter(l => lessonDone(l.n)).length;
  const today = Math.floor((store.get('er_day_' + dayKey(), 0) || 0) / 60);
  mapLv = mapLv || S.student.level;
  const nxRef = nx.type === 'lesson' ? nx.ref : null;
  view().innerHTML = `<div class="page">
    <div class="home-top">
      <div class="hello">
        <h1>Salom, ${esc(S.student.name.split(' ')[0])}.</h1>
        <p class="sub">${S.student.level} ${LEVELS[S.student.level].name}. ${doneN ? `${doneN} ta dars tugatildi.` : 'Birinchi darsdan boshlaymiz.'}</p>
        <a class="continue" href="${stationHref(nx)}" style="--lv:${LEVELS[nx.lvl].c}">
          <span class="cn">${nx.type === 'lesson' ? (nx.v ? 'Aa' : String(nx.n).padStart(2, '0')) : 'R' + nx.n}</span>
          <span><small>${(nx.type === 'lesson' && S.P.lessons['l' + nx.n] && Object.keys(S.P.lessons['l' + nx.n].sec || {}).length) ? 'Davom ettirish' : 'Keyingi qadam'}</small><b>${esc(nx.t)}</b><small>${esc(nxRef ? nxRef.uz : nx.uz)}</small></span>
          <span class="go">${ICON.right}</span>
        </a>
      </div>
      <div class="side-cards">
        <div class="srs-card">
          <div><p class="srs-lab">So‘z takrorlash</p><span class="big">${due}</span><p>${due ? 'ta so‘z bugun takrorlanishi kerak' : Object.keys(S.P.srs).length ? 'Bugungi takrorlash tugadi. Ertaga yana!' : 'Darslardagi so‘zlar shu yerga yig‘iladi'}</p></div>
          ${due ? `<a class="btn btn-primary" href="#srs">Boshlash</a>` : ''}
        </div>
        <div class="stats">
          <div class="stat"><b>${today} daq</b><span>bugun</span></div>
          <div class="stat"><b>${(S.P.streak && S.P.streak.day && (S.P.streak.day === dayKey() || S.P.streak.day === dayKey(Date.now() - 864e5))) ? S.P.streak.n : 0} kun</b><span>ketma-ket</span></div>
          <div class="stat"><b>${Object.keys(S.P.srs).length}</b><span>so‘z yig‘ildi</span></div>
        </div>
      </div>
    </div>
    <div class="lv-tabs" role="tablist" aria-label="Darajalar">${Object.entries(LEVELS).map(([k, v]) => `<button type="button" class="lv-tab" role="tab" style="--c:${v.c}" data-act="map-lv" data-lv="${k}" aria-selected="${k === mapLv}"><i></i>${k}<small>${v.name}</small></button>`).join('')}</div>
    <div class="map-head"><h2>${mapLv} ${LEVELS[mapLv].name}</h2><p>${LEVELS[mapLv].desc}</p></div>
    <div class="metro" id="metro" style="--c:${LEVELS[mapLv].c}"></div>
    ${feedbackCard(mapLv)}
  </div>`;
  drawMetro();
  if (mapRO) mapRO.disconnect();
  mapRO = new ResizeObserver(() => drawMetro()); mapRO.observe($('#metro'));
}
function feedbackCard(lv) {
  const sts = STATIONS.filter(s => s.lvl === lv);
  if (!sts.length || !sts.every(stationDone)) return '';
  const fb = (S.P.feedback || {})[lv];
  if (fb) return `<section class="fb-card done"><h3>${lv} darajasi tugadi. Fikringiz yuborildi</h3><p class="fb-stars">${'★'.repeat(fb.rate)}${'☆'.repeat(5 - fb.rate)}</p>${fb.text ? `<p>${esc(fb.text)}</p>` : ''}</section>`;
  return `<section class="fb-card"><h3>${lv} darajasini tugatdingiz. Tabriklaymiz!</h3>
    <p>Darslar qanday bo‘ldi? Qaysi qismi yoqdi, qaysi biri qiyin yoki tushunarsiz edi? Fikringiz ustozga yuboriladi.</p>
    <form id="fbForm" data-lv="${lv}">
      <div class="fb-rate" role="group" aria-label="Baho">${[1, 2, 3, 4, 5].map(i => `<button type="button" data-act="fb-rate" data-v="${i}" aria-pressed="false">${i}</button>`).join('')}</div>
      <input type="hidden" name="rate" value="0">
      <textarea class="input" name="text" rows="4" maxlength="1500" placeholder="Darslar haqida fikringizni yozing…" required></textarea>
      <button class="btn btn-primary" type="submit">Ustozga yuborish</button>
    </form></section>`;
}
function drawMetro() {
  const wrap = $('#metro'); if (!wrap) return;
  const list = STATIONS.filter(s => s.lvl === mapLv), W = wrap.clientWidth; if (!W) return;
  const nx = nextStation(), vertical = W < 600, pts = [];
  let H, path = '', donePath = '', lastDone = -1;
  list.forEach((s, i) => { if (stationDone(s)) lastDone = i; });
  if (vertical) {
    wrap.classList.add('vertical'); wrap.style.height = '';
    wrap.innerHTML = `<ol class="vline">${list.map((s, i) => stationHtml(s, nx, i <= lastDone)).join('')}</ol>`;
    return;
  } else {
    const cols = Math.max(3, Math.min(5, Math.floor((W - 120) / 190) + 1)), pad = 95, colW = (W - 2 * pad) / (cols - 1), rowH = 170;
    list.forEach((s, i) => { const r = Math.floor(i / cols), c = i % cols; pts.push([pad + (r % 2 ? cols - 1 - c : c) * colW, 30 + r * rowH]); });
    const seg = (a, b) => (Math.abs(a[1] - b[1]) < 1 ? ` L${b[0]} ${b[1]}` : ` C${a[0] + (a[0] > W / 2 ? 1 : -1) * rowH * .75} ${a[1]} ${b[0] + (a[0] > W / 2 ? 1 : -1) * rowH * .75} ${b[1]} ${b[0]} ${b[1]}`);
    path = `M${pts[0][0]} ${pts[0][1]}`; for (let i = 1; i < pts.length; i++) path += seg(pts[i - 1], pts[i]);
    if (lastDone > 0) { donePath = `M${pts[0][0]} ${pts[0][1]}`; for (let i = 1; i <= lastDone; i++) donePath += seg(pts[i - 1], pts[i]); }
    H = pts[pts.length - 1][1] + 120;
    wrap.style.setProperty('--w', Math.min(colW - 12, 190) + 'px');
  }
  wrap.classList.remove('vertical');
  wrap.style.height = H + 'px';
  wrap.innerHTML = `<svg class="line" aria-hidden="true"><path class="base" d="${path}"/>${donePath ? `<path class="done" d="${donePath}"/>` : ''}</svg>` +
    list.map((s, i) => stationHtml(s, nx, false, pts[i])).join('');
}
function stationHtml(s, nx, lineDone, pt) {
  const done = stationDone(s), isNext = s.id === nx.id;
  const lp = s.type === 'lesson' ? S.P.lessons['l' + s.n] : null;
  const tst = lp && lp.test, perfect = tst && tst.best === tst.total;
  const rv = s.type === 'review' && S.P.reviews[s.id];
  const status = done ? (tst ? `Test ${Math.round(tst.best / tst.total * 100)}%` : rv && rv.test ? `Test ${Math.round(rv.test.best / rv.test.total * 100)}%` : 'Tugatildi') : esc(s.uz);
  const cls = `st${done ? ' is-done' : ''}${isNext ? ' is-next' : ''}${perfect ? ' is-perfect' : ''}${s.type === 'review' ? ' is-review' : ''}${s.v ? ' is-vocab' : ''}`;
  const inner = `<span class="st-dot">${done ? ICON.check : ''}</span>
    <span class="st-lab"><span class="st-no">${s.type === 'lesson' ? lessonNo(s.ref) : s.t}</span>${s.type === 'lesson' && !s.v ? `<b class="st-g">${esc(s.t)}</b>` : ''}<span class="st-s">${status}</span>${isNext ? '<span class="st-here">Siz shu yerdasiz</span>' : ''}</span>`;
  if (!pt) return `<li class="${lineDone ? 'ld' : ''}"><a class="${cls}" href="${stationHref(s)}">${inner}</a></li>`;
  return `<a class="${cls}" href="${stationHref(s)}" style="left:${pt[0]}px;top:${pt[1]}px">${inner}</a>`;
}

/* ---------------- lesson page ---------------- */
const RENDER = {};
function renderLesson(n, sec) {
  const Ls = lessonByN(n); if (!Ls) return go('');
  const lp = LP(n);
  if (S.test && !(S.test.kind === 'lesson' && S.test.n === n && sec === 'test')) { toast('Avval testni tugating.'); return go(`lesson-${S.test.n}-test`); }
  const SECS = secsOf(Ls);
  if (sec && !SECS.some(x => x.id === sec)) sec = null;
  sec = sec || (SECS.some(x => x.id === lp.lastSec) ? lp.lastSec : SECS[0].id);
  const changed = !S.view || S.view.lesson !== n || S.view.section !== sec;
  if (S.view && S.view.lesson && S.view.lesson !== n) Track.flush();
  S.view = { name: 'lesson', lesson: n, section: sec }; setLv(Ls.lvl); document.body.dataset.sec = sec;
  lp.lastSec = sec; S.P.last = { lesson: n, section: sec }; bumpStreak(); saveP();
  Voice.stop();
  const locked = !!S.test;
  view().innerHTML = `<div class="page">
    <a class="crumb" href="#">${ICON.left}<span>Darslar</span></a>
    <header class="l-head">
      <p class="l-kicker"><span class="lvchip">${Ls.lvl}</span><span>${isV(Ls) ? `Vocabulary · ${Ls.v.length} ta so‘z` : `Lesson ${dno(Ls)}`}</span>${Ls.book ? `<span>Grammarway 1, ${Ls.book}</span>` : ''}${Ls.topic ? `<span class="topic-tag">${esc(Ls.topic)}</span>` : ''}</p>
      <h1>${esc(Ls.t)}</h1><p class="uz">${esc(Ls.uz)}</p>
    </header>
    <nav class="steps" aria-label="Dars bo‘limlari">${SECS.map((s, i) => `<a class="stp${s.id === sec ? ' is-on' : ''}${lp.sec[s.id] ? ' is-done' : ''}${locked && s.id !== 'test' ? ' is-locked' : ''}${s.id === 'test' ? ' stp-test' : ''}" href="#lesson-${n}-${s.id}"${s.id === sec ? ' aria-current="page"' : ''}><span class="stp-n">${lp.sec[s.id] ? ICON.check : i + 1}</span>${s.en}</a>`).join('')}</nav>
    <section class="sec" id="sec"></section>
  </div>`;
  Media.preload(n);
  RENDER[sec](Ls, lp);
  if (changed && !S.scrollTo) window.scrollTo(0, 0);
  if (S.scrollTo) { const el = document.getElementById(S.scrollTo); S.scrollTo = null; if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60); }
}
function nextBar(Ls, cur, text) {
  const SECS = secsOf(Ls), i = SECS.findIndex(s => s.id === cur), nx = SECS[i + 1];
  return `<div class="next-bar"><p>${text}</p><button type="button" class="btn btn-primary" data-act="sec-done" data-n="${Ls.n}" data-sec="${cur}" data-next="${nx ? nx.id : ''}"><span>${nx ? `${nx.en} bo‘limiga o‘tish` : 'Darslarga qaytish'}</span>${ICON.right}</button></div>`;
}
function formulaHtml(f) {
  if (!f) return '';
  const lines = Array.isArray(f) ? f : [f];
  return `<div class="formula">${lines.map(line => {
    let lab = '', body = line;
    if (line.includes('::')) { [lab, body] = line.split('::').map(x => x.trim()); }
    const chips = body.split(' + ').map(c => {
      c = c.trim();
      if (/^\*.*\*$/.test(c)) return `<span class="f-chip key">${c.slice(1, -1)}</span>`;
      if (/^\(.*\)$/.test(c)) return `<span class="f-chip opt">${c.slice(1, -1)}</span>`;
      return `<span class="f-chip">${c.replace(/\*([^*]+)\*/g, '<b class="f-in">$1</b>')}</span>`;
    }).join('<span class="f-plus" aria-hidden="true">+</span>');
    return `<div class="f-line">${lab ? `<span class="f-lab">${lab.replace(/\*([^*]+)\*/g, '<b>$1</b>')}</span>` : ''}${chips}</div>`;
  }).join('')}</div>`;
}
const exItem = (e, v = 'f') => `<li class="ex">${playBtn(e[0], v)}<div><p class="ex-en">${hl(e[0])}</p>${e[1] ? `<p class="ex-uz">${e[1]}</p>` : ''}</div></li>`;
const sayPill = (text, v = 'f') => `<button type="button" class="pp" data-act="say" data-say="${esc(speakText(text))}" data-v="${v}">${ICON.sound}<span>Tinglash</span></button><button type="button" class="pp pp-slow" data-act="say" data-say="${esc(speakText(text))}" data-v="${v}" data-rate="0.72">${ICON.snail}<span>Sekin</span></button>`;
const exCard = (e, o, seed, why) => `<li class="exc">${scene(o, seed, '', e[0])}<div class="exc-t"><p class="ex-en">${hl(e[0])}</p>${e[1] ? `<p class="ex-uz">${e[1]}</p>` : ''}${why ? `<p class="ex-why">${hl(why)}</p>` : ''}<div class="exc-a">${sayPill(e[0])}</div></div></li>`;
function tableHtml(t) {
  if (!t) return '';
  return `<div class="tbl-wrap"><table class="tbl"><thead><tr>${t.h.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${t.r.map(r => `<tr>${r.map(c => `<td>${hl(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
const points = x => { x = String(x || '').trim(); if (!x) return ''; if (!/^<p>/.test(x)) x = `<p>${x}</p>`; return x.replace(/<p>/g, '<div class="pt"><span class="pt-m" aria-hidden="true"></span><p>').replace(/<\/p>/g, '</p></div>'); };

RENDER.grammar = (Ls) => {
  let k = 0; const nEx = Ls.g.reduce((a, r) => a + (r.e || []).length, 0);
  $('#sec').classList.add('wide');
  $('#sec').innerHTML = `
    <div class="sec-h"><h2>Grammar</h2><span class="muted">${Ls.g.length} ta qoida · ${nEx} ta misol</span></div>
    ${Ls.gi ? `<p class="lead">${Ls.gi}</p>` : ''}
    <nav class="rule-toc" aria-label="Qoidalar">${Ls.g.map((r, i) => `<button type="button" data-act="jump" data-id="r-${r.id}"><b>${String(i + 1).padStart(2, '0')}</b>${r.h}</button>`).join('')}</nav>
    ${Ls.g.map((r, i) => `<article class="rule" id="r-${r.id}">
      <header class="rule-h"><span class="rn">${String(i + 1).padStart(2, '0')}</span><div><p class="rule-k">Qoida</p><h3>${r.h}</h3></div></header>
      <div class="rule-body">
        ${formulaHtml(r.f)}
        <div class="rule-x">${points(r.x)}</div>
        ${tableHtml(r.tb)}
        ${keyHtml(r.key)}
        ${r.n ? `<aside class="tip">${ICON.bulb}<div><b>Eslab qoling</b><p>${r.n}</p></div></aside>` : ''}
      </div>
      ${r.e && r.e.length ? `<div class="ex-h"><span>${ICON.sound}Misollar · ${r.e.length} ta</span><i></i><small>Tinglang va ovoz chiqarib takrorlang</small></div>
        ${(Ls.lvl === 'B1' || Ls.lvl === 'B2') && !pic(Ls.n, 'e', 0) ? exRows(Ls, r) : `<ul class="exg">${r.e.map(e => { const i = k++; return exCard(e, pic(Ls.n, 'e', i), Ls.n + i, (NOTES[Ls.n] || {})[i]); }).join('')}</ul>`}` : ''}
      ${trBlock(r)}
    </article>`).join('')}
    ${Ls.m && Ls.m.length ? `<section class="mist"><div class="mist-h"><h3>Ko‘p uchraydigan xatolar</h3><p>O‘zbek o‘quvchilari aynan shu joylarda adashadi. Chap tomonda xato, o‘ngda to‘g‘ri variant.</p></div><ol>${Ls.m.map((m, i) => `
      <li class="mc"><span class="mc-n">${i + 1}</span>
        <div class="mc-row mc-bad">${ICON.x}<s>${m[0].replace(/\*/g, '')}</s></div>
        <div class="mc-row mc-good">${ICON.check}<span>${hl(m[1])}</span>${playBtn(m[1], 'f', 'sm')}</div>
        <p class="mwhy">${m[2]}</p></li>`).join('')}</ol></section>` : ''}
    ${nextBar(Ls, 'grammar', 'Qoidalarni o‘qib, misollarni tinglab chiqdingizmi? Endi so‘zlarga o‘tamiz. Test oxirida, alohida bo‘limda.')}`;
};

let vMode = 'list', vIdx = 0, vFlip = false;

const SPEAK_CHECK = ['Savollarga to‘liq gap bilan javob berdim', 'Darsdagi grammatikani ishlatdim', 'Kamida 5 ta yangi so‘z ishlatdim', '1 daqiqa to‘xtamasdan gapirdim', 'Yozuvimni tinglab, xatolarimni topdim'];
RENDER.speaking = (Ls, lp) => {
  const s = Ls.s || {}; lp.speak = lp.speak || { checks: [] };
  $('#sec').innerHTML = `
    <div class="sec-h"><h2>Speaking</h2></div>
    ${s.i ? `<p class="lead">${s.i}</p>` : ''}
    ${stHtml(s)}
    ${s.f ? `<h3 class="sub-h">Gap qoliplari</h3><p class="muted small">Bo‘sh joyga o‘zingiz haqingizdagi ma’lumotni qo‘yib, ovoz chiqarib ayting.</p>
      <ol class="frames">${s.f.map(f => `<li><span class="fk">${f[0]}</span><span class="ff">${f[1].replace(/___/g, '<span class="slot">___</span>')}</span>${playBtn(f[1].replace(/___/g, '…'))}</li>`).join('')}</ol>` : ''}
    ${s.a ? `<h3 class="sub-h">Namuna javoblar</h3><div class="samples">${s.a.map(a => `
      <div class="sample"><div class="sample-h"><b>${a[0]}</b>${playBtn(a[1])}</div><p>${hl(a[1])}</p>${a[2] ? `<p class="small muted">${a[2]}</p>` : ''}</div>`).join('')}</div>` : ''}
    ${s.q ? `<h3 class="sub-h">Ustoz beradigan savollar</h3><p class="muted small">Savolni tinglang va darhol javob bering.</p><ul class="qlist">${s.q.map(q => `<li>${playBtn(q, 'm')}<span>${q}</span></li>`).join('')}</ul>` : ''}
    <h3 class="sub-h">O‘zingizni yozib oling</h3>
    <div class="rec"><button type="button" class="rec-btn" id="recBtn" data-act="rec">${ICON.mic}<span>Yozishni boshlash</span></button><span class="rec-time" id="recTime">0:00</span><audio id="recAudio" controls hidden></audio></div>
    <p class="muted small" id="recMsg" style="margin-top:8px"></p>
    <div id="recFallback" hidden style="margin-top:10px"><p class="small muted" style="margin-bottom:6px">Mikrofon bu oynada ochilmadi. Fayl kerak emas: gapirmoqchi bo‘lgan javobingizni shu yerga yozing va ovoz chiqarib o‘qing.</p><textarea id="spkText" rows="5" spellcheck="false" placeholder="Write what you want to say…">${esc(lp.speak.text || '')}</textarea></div>
    <h3 class="sub-h">O‘zingizni baholang</h3>
    <ul class="checks">${SPEAK_CHECK.map((c, i) => `<li><label><input type="checkbox" data-check="${i}"${lp.speak.checks.includes(i) ? ' checked' : ''}><span>${c}</span></label></li>`).join('')}</ul>
    ${nextBar(Ls, 'speaking', 'Gapirib bo‘ldingizmi? Endi tinglab tushunishni mashq qilamiz.')}`;
};

const Pod = { n: null, idx: 0, playing: false, rate: 1, script: false };
RENDER.listening = (Ls, lp) => {
  if (Ls.pod) return renderStory(Ls, lp);
  const p = Ls.li; if (Pod.n !== Ls.n) Object.assign(Pod, { n: Ls.n, idx: 0, playing: false, script: false });
  lp.listen = lp.listen || {};
  const wave = t => t.split(/\s+/).map(w => `<i style="--h:${Math.min(100, 22 + w.replace(/\W/g, '').length * 11)}%"></i>`).join('');
  const ans = lp.listen;
  $('#sec').innerHTML = `
    <div class="sec-h"><h2>Listening</h2></div>
    <p class="lead">Avval matnsiz tinglang, keyin savollarga javob bering. Qiyin bo‘lsa, «Sekin»ni yoqing yoki matnni oching.</p>
    ${pandaUrl(Ls.n) ? `<a class="story-card" href="${pandaUrl(Ls.n)}" target="_blank" rel="noopener"><span class="story-ic">▶</span><div><p class="story-k">English Panda · YouTube</p><h3>«${esc(PANDA[Ls.n])}» bo‘yicha video dars</h3><p>Shu darsdagi grammatikani kanaldan ko‘ring va tinglang.</p></div><span class="story-go">Ochish ↗</span></a>` : ''}
    <div class="player">
      <div class="pl-top"><span class="pl-cover">${ICON.podcast}</span><div><p class="pl-show">${esc(p.show)}</p><h3>${esc(p.title)}</h3><p class="pl-about">${p.about}</p></div></div>
      <div class="wave" role="group" aria-label="Suhbat qismlari">${p.lines.map((l, i) => `<button type="button" class="wv s${l[0]}" data-act="pod-jump" data-i="${i}" style="flex-grow:${l[1].split(/\s+/).length}" aria-label="${i + 1}-gapdan tinglash">${wave(l[1])}</button>`).join('')}</div>
      <p class="pl-legend"><span><i></i><b>${p.who[0]}</b></span><span><i class="s1"></i><b>${p.who[1]}</b></span><span>Istalgan joyini bosib, o‘sha yerdan tinglash mumkin</span></p>
      <div class="pl-ctrl">
        <button type="button" class="btn btn-lv" id="podPlay" data-act="pod-play"></button>
        <button type="button" class="btn btn-ghost" data-act="pod-restart">${ICON.again}<span>Boshidan</span></button>
        <div class="seg" role="group" aria-label="Tezlik"><button type="button" data-act="pod-rate" data-r="0.8" aria-pressed="${Pod.rate < 1}">Sekin</button><button type="button" data-act="pod-rate" data-r="1" aria-pressed="${Pod.rate === 1}">Normal</button></div>
        <button type="button" class="btn btn-ghost" data-act="pod-script" aria-pressed="${Pod.script}"><span>${Pod.script ? 'Matnni yashirish' : 'Matnni ko‘rsatish'}</span></button>
      </div>
      <ol class="script"${Pod.script ? '' : ' hidden'}>${p.lines.map((l, i) => `<li data-line="${i}"><b>${p.who[l[0]]}</b><span>${esc(l[1])}</span></li>`).join('')}</ol>
    </div>
    <h3 class="sub-h">Savollar</h3>
    <ol class="qz">${p.q.map((q, i) => { const ch = ans[i], d = ch !== undefined; return `<li class="${d ? (ch === q[2] ? 'right' : 'wrong') : ''}"><p class="q">${q[0]}</p><div class="opts">${q[1].map((o, j) => `<button type="button" class="opt${d && j === q[2] ? ' right' : ''}${d && j === ch && ch !== q[2] ? ' wrong' : ''}" data-act="pq" data-n="${Ls.n}" data-i="${i}" data-o="${j}"${d ? ' disabled' : ''}>${esc(o)}</button>`).join('')}</div></li>`; }).join('')}</ol>
    ${nextBar(Ls, 'listening', 'Tinglab bo‘ldingizmi? Endi yozamiz.')}`;
  paintPod();
  Voice.prefetch(p.lines[0][1], podVoice(p, p.lines[0][0]));
};
function paintPod() {
  const b = $('#podPlay'); if (!b) return;
  const Ls = lessonByN(Pod.n), n = Ls.li.lines.length;
  $$('.wv').forEach((w, i) => { w.classList.toggle('past', i < Pod.idx); w.classList.toggle('now', i === Pod.idx && Pod.playing); });
  $$('.script li').forEach((li, i) => li.classList.toggle('now', i === Pod.idx && Pod.playing));
  b.innerHTML = Pod.playing ? `${ICON.pause}<span>Pauza</span>` : `${ICON.play}<span>${Pod.idx > 0 && Pod.idx < n ? 'Davom ettirish' : 'Tinglash'}</span>`;
}
async function podPlay(from) {
  const Ls = lessonByN(Pod.n); const p = Ls.li;
  if (Pod.playing && from === undefined) { Voice.stop(); Pod.playing = false; paintPod(); return; }
  if (from !== undefined) Pod.idx = from; if (Pod.idx >= p.lines.length) Pod.idx = 0;
  Pod.playing = true; paintPod();
  const lines = p.lines.map(l => [l[1], podVoice(p, l[0])]);
  const ok = await Voice.seq(lines, { rate: Pod.rate, from: Pod.idx, onLine: i => { Pod.idx = i; paintPod(); if (Pod.script) { const li = $(`.script li[data-line="${i}"]`); if (li) li.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } } });
  if (ok) { Pod.playing = false; Pod.idx = p.lines.length; paintPod(); }
}

RENDER.writing = (Ls, lp) => {
  const w = Ls.w; lp.writing = lp.writing || { draft: '', submitted: null };
  $('#sec').innerHTML = `
    <div class="sec-h"><h2>Writing</h2></div>
    <p class="task">${w.task}</p>
    <div class="w-prep">
      <div class="box"><h4>Reja</h4><ol class="plan">${w.plan.map(p => `<li>${p}</li>`).join('')}</ol></div>
      <div class="box"><h4>Namuna</h4><p class="model">${hl(w.model)}</p></div>
    </div>
    ${wExtra(Ls)}
    <h3 class="sub-h">Yozing</h3>
    <div class="editor">
      <div>
        <label class="sr" for="wText">Matningiz</label>
        <textarea id="wText" spellcheck="false" placeholder="Shu yerga yozing…">${esc(lp.writing.draft || '')}</textarea>
        <div class="w-act"><button type="button" class="btn btn-primary" id="wSubmit" data-act="w-submit" data-n="${Ls.n}">AI bilan tekshirish</button><p class="small muted" id="wStatus" role="status"></p></div>
      </div>
      <aside class="box w-check" aria-label="Tekshiruv"><h4>Tekshiruv</h4><ul class="wl" id="wList"></ul><div id="wIssues" aria-live="polite"></div></aside>
    </div>
    <div id="wAI" aria-live="polite" style="margin-top:14px"></div>
    ${nextBar(Ls, 'writing', 'Matnni AI bilan tekshirdingizmi? Oxirgi bo‘lim: test. Unda qaysi qoidani tushunganingiz aniqlanadi.')}`;
  paintWriting(Ls);
};
function paintWriting(Ls) {
  const ta = $('#wText'); if (!ta) return;
  const lp = LP(Ls.n), w = Ls.w, r = analyzeText(ta.value, Ls), min = w.min || 40;
  const items = [[r.words >= min, `So‘zlar: <b>${r.words}</b> (kamida ${min})`], [r.sents >= (w.sents || 5), `Gaplar: <b>${r.sents}</b> (kamida ${w.sents || 5})`]]
    .concat(r.checks.map(c => [c.ok, `${c.label}: <b>${c.n}</b> (kamida ${c.min})`]))
    .concat([[r.used.length >= 4, `Darsdagi so‘zlar: <b>${r.used.length}</b> (kamida 4)`], [r.capsOk, 'Gap katta harf bilan boshlanib, nuqta bilan tugaydi']]);
  $('#wList').innerHTML = items.map(([ok, t]) => `<li class="${ok ? 'ok' : ''}"><span class="tick">${ok ? ICON.check : ''}</span><span>${t}</span></li>`).join('');
  $('#wIssues').innerHTML = r.issues.length ? `<h4 style="margin-top:10px">Tekshirib ko‘ring</h4><ul class="issues">${r.issues.map(i => `<li>${i}</li>`).join('')}</ul><p class="small muted" style="margin-top:6px">Avtomatik tekshiruv adashishi mumkin.</p>` : '';
  $('#wSubmit').disabled = r.words < 3;
  $('#wStatus').textContent = r.words < 3 ? 'Matn yozing, keyin AI tekshiradi.' : 'Tayyor bo‘lsa, “AI bilan tekshirish” tugmasini bosing. Matn ustozga yuborilmaydi.';
}

/* ---------------- diagnostic test (separate, locks other sections) ---------------- */
RENDER.test = (Ls, lp) => {
  if (S.test && S.test.kind === 'lesson' && S.test.n === Ls.n) return paintTest();
  const last = lp.test && lp.test.attempts && lp.test.attempts[lp.test.attempts.length - 1];
  $('#sec').innerHTML = `
    <div class="sec-h"><h2>Test</h2></div>
    ${last ? resultHtml(Ls.t, last, Ls, true) : ''}
    <div class="t-intro" ${last ? 'style="margin-top:18px"' : ''}>
      <h3>${last ? 'Qayta topshirish' : 'Nimani tushundingiz? Tekshiramiz'}</h3>
      <ul>
        <li>${isV(Ls) ? `${Ls.vg.length} ta so‘z guruhi bo‘yicha ${Math.min(20, Ls.v.length)} ta savol: rasm, tinglash, tarjima va imlo.` : `${Ls.g.length} ta qoida bo‘yicha ${(Ls.tq || []).length} ta savol.`} Savollar va javoblar tartibi aralashtiriladi.</li>
        <li>Test davomida boshqa bo‘limlar yopiq bo‘ladi, ko‘chirib bo‘lmaydi.</li>
        <li>Saytdan chiqsangiz, bu ustozingizga ko‘rinadi.</li>
        <li>Oxirida ${isV(Ls) ? 'qaysi so‘zlar guruhini bilishingiz' : 'qaysi qoidani tushunganingiz'} va nimani qayta o‘qish kerakligi ko‘rsatiladi.</li>
      </ul>
      <button type="button" class="btn btn-primary" data-act="t-start" data-n="${Ls.n}">${last ? 'Testni qayta boshlash' : 'Testni boshlash'}</button>
    </div>`;
};
function startTest(kind, items, meta) {
  const qs = shuffle(items).map(it => { const order = shuffle((it.o || []).map((_, j) => j)); return Object.assign({}, it, { order }); });
  S.test = Object.assign({ kind, items: qs, i: 0, answers: [], leaves: 0, started: Date.now() }, meta);
  Track.inTest = true;
}
function testItemsLesson(Ls) { if (isV(Ls)) return vocabTestItems(Ls); return (Ls.tq || []).map(q => ({ rid: q[0], q: q[1], o: q[2], a: q[3], why: q[4] || '', n: Ls.n })); }
function paintTest() {
  const T = S.test, it = T.items[T.i];
  const host = $('#sec');
  host.innerHTML = `<div class="t-card">
    <div class="t-prog">${T.items.map((_, i) => `<i class="${i < T.i ? 'done' : i === T.i ? 'cur' : ''}"></i>`).join('')}</div>
    <p class="t-meta">${T.i + 1} / ${T.items.length}</p>
    ${it.html ? `<div class="t-q t-qh">${it.html}</div>` : `<p class="t-q">${hl(esc(it.q).replace(/___/g, '<span class="blank">&nbsp;</span>'))}</p>`}
    ${it.type === 'spell' ? `<form class="t-spell" id="tSpell" autocomplete="off"><input class="input" id="tSpellIn" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Inglizcha yozing…" aria-label="Javob"><button class="btn btn-primary" type="submit">Tekshirish</button></form>`
      : `<div class="t-opts">${it.order.map((j, k) => `<button type="button" class="t-opt" data-act="t-ans" data-o="${j}"><kbd>${'ABCD'[k]}</kbd><span>${esc(it.o[j])}</span></button>`).join('')}</div>`}
    <p class="t-lock">${ICON.lock}<span>Test tugaguncha boshqa bo‘limlar yopiq. Klaviaturada 1, 2, 3 tugmalarini bosish mumkin.</span></p>
  </div>`;
  if (it.type === 'spell') setTimeout(() => { const i = $('#tSpellIn'); if (i) i.focus(); }, 30);
  if (it.type === 'listen' || it.type === 'spell') setTimeout(() => Voice.say(it.say || it.ans), 250);
}
function answerTest(o) {
  const T = S.test; if (!T) return;
  T.answers.push(o); T.i++;
  if (T.i < T.items.length) return paintTest();
  finishTest();
}
function scoreTest(T) {
  const rules = {}; let score = 0;
  const okOf = (it, ans) => (it.type === 'spell' ? normWord(ans) === normWord(it.ans) : ans === it.a);
  T.items.forEach((it, i) => { const ok = okOf(it, T.answers[i]); if (ok) score++; const k = T.kind === 'review' ? 'l' + it.n : it.rid; rules[k] = rules[k] || [0, 0]; rules[k][1]++; if (ok) rules[k][0]++; });
  return { at: Date.now(), score, total: T.items.length, rules, leaves: T.leaves, wrong: T.items.map((it, i) => (okOf(it, T.answers[i]) ? null : { q: it.q, your: it.type === 'spell' ? String(T.answers[i] || '—') : it.o[T.answers[i]], right: it.type === 'spell' ? it.ans : it.o[it.a], why: it.why, rid: it.rid, n: it.n })).filter(Boolean) };
}
function finishTest() {
  const T = S.test, res = scoreTest(T);
  S.test = null; Track.inTest = false;
  if (T.kind === 'lesson') {
    const lp = LP(T.n);
    lp.test = lp.test || { attempts: [], best: 0, total: res.total };
    lp.test.attempts.push(Object.assign({}, res, { wrong: res.wrong.slice(0, 12) }));
    lp.test.attempts = lp.test.attempts.slice(-6);
    lp.test.best = Math.max(lp.test.best || 0, res.score); lp.test.total = res.total;
    if (!lp.test.first) lp.test.first = res.score;
    lp.sec.test = lp.sec.test || Date.now();
    if (res.score === res.total && !S.P.awards.includes('l' + T.n)) S.P.awards.push('l' + T.n);
    saveP(true); Track.flush();
    renderLesson(T.n, 'test');
    $('#sec').innerHTML = resultHtml(lessonByN(T.n).t, res, lessonByN(T.n)) + `<div class="next-bar"><p>Natija ustozingizga yuborildi.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-ghost" data-act="t-start" data-n="${T.n}">${ICON.again}<span>Qayta topshirish</span></button><a class="btn btn-primary" href="#">Darslarga qaytish</a></div></div>`;
  } else {
    S.P.reviews[T.rid] = S.P.reviews[T.rid] || {};
    const rv = S.P.reviews[T.rid];
    rv.test = { at: res.at, best: Math.max((rv.test && rv.test.best) || 0, res.score), total: res.total, last: Object.assign({}, res, { wrong: res.wrong.slice(0, 12) }) };
    saveP(true); Track.flush();
    renderReview(+T.rid.slice(1), 'test', res);
  }
  window.scrollTo(0, 0);
  if (res.score === res.total) setTimeout(party, 250);
}
function resultHtml(title, res, Ls, compact) {
  const pct = Math.round(res.score / res.total * 100), C = 2 * Math.PI * 54;
  const order = k => (Ls ? (isV(Ls) ? Ls.vg.findIndex(g => g.id === k) : Ls.g.findIndex(g => g.id === k)) : (lessonByN(+k.slice(1)) || {}).ord);
  const rows = Object.entries(res.rules || {}).sort((a, b) => order(a[0]) - order(b[0])).map(([rid, [r, t]]) => {
    let name = rid, href = '';
    if (Ls && isV(Ls)) { const g = Ls.vg.find(x => x.id === rid); name = g ? g.t : rid; href = `data-act="goto-group" data-n="${Ls.n}" data-g="${rid}"`; }
    else if (Ls) { const g = Ls.g.find(x => x.id === rid); name = g ? g.h : rid; href = `data-act="goto-rule" data-n="${Ls.n}" data-rid="${rid}"`; }
    else { const l = lessonByN(+rid.slice(1)); name = l ? lessonName(l) : rid; href = l ? `data-act="goto-lesson" data-n="${l.n}"` : ''; }
    const st = r === t ? ['p-ok', 'Tushundi'] : r === 0 ? ['p-bad', 'Tushunmadi'] : ['p-mid', 'Qisman'];
    return `<li><span class="rt"><b>${name}</b><span>${r} / ${t} to‘g‘ri</span></span><span class="rbar ${r / t < .5 ? 'bad' : ''}"><i style="width:${Math.round(r / t * 100)}%"></i></span>${r === t ? `<span class="pill ${st[0]}">${ICON.check}${st[1]}</span>` : `<button type="button" class="pill ${st[0]}" style="border:0;cursor:pointer" ${href}>${st[1]}: qayta o‘qish</button>`}</li>`;
  }).join('');
  return `<div class="res"><div class="ring"><svg viewBox="0 0 132 132"><circle class="bg" cx="66" cy="66" r="54"/><circle class="fg" cx="66" cy="66" r="54" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct / 100)}"/></svg><b>${pct}%</b></div>
    <div><h3>${pct === 100 ? 'Mukammal natija!' : pct >= 80 ? 'Juda yaxshi!' : pct >= 50 ? 'Yomon emas, lekin qayta ko‘rish kerak' : (Ls && isV(Ls) ? 'So‘zlarni yana bir takrorlang' : 'Qoidalarni yana bir o‘qib chiqing')}</h3>
    <p>${res.score} / ${res.total} to‘g‘ri${compact ? `, ${fmtWhen(res.at)}` : ''}.</p></div></div>
    <ul class="rules-res">${rows}</ul>
    ${!compact && res.wrong && res.wrong.length ? `<div class="wrongs"><h3 class="sub-h" style="margin-top:20px">Xatolar ustida ishlash</h3>${res.wrong.map(w => `<div class="box"><p>${hl(esc(w.q).replace(/___/g, '<b>' + esc(w.right) + '</b>'))}</p><p class="small muted">Siz: <s>${esc(w.your)}</s> → to‘g‘ri: <b>${esc(w.right)}</b>${w.why ? `. ${w.why}` : ''}</p></div>`).join('')}</div>` : ''}`;
}

/* ---------------- celebration 🎉 ---------------- */
function party() {
  const d = document.createElement('div'); d.className = 'party';
  const msgs = ['Hammasi to‘g‘ri!', '100%! Zo‘r!', 'Mukammal!', 'Ajoyib natija!'];
  d.innerHTML = `<canvas></canvas><div class="party-card" role="dialog" aria-label="Tabrik"><div class="party-emoji">🎉</div><h2>${msgs[Math.floor(Math.random() * msgs.length)]}</h2><p class="muted">Barcha savollarga to‘g‘ri javob berdingiz. Bu darsning bekati xaritada oltin halqa bilan belgilandi.</p><span class="stamp">PERFECT ✦ 100%</span><button type="button" class="btn btn-primary" data-act="party-close">Rahmat!</button></div>`;
  document.body.appendChild(d);
  try { const ac = new (window.AudioContext || window.webkitAudioContext)(); [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => { const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = f; o.type = 'triangle'; g.gain.setValueAtTime(.0001, ac.currentTime + i * .11); g.gain.exponentialRampToValueAtTime(.18, ac.currentTime + i * .11 + .02); g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime + i * .11 + .5); o.connect(g).connect(ac.destination); o.start(ac.currentTime + i * .11); o.stop(ac.currentTime + i * .11 + .55); }); } catch (e) {}
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = $('canvas', d), ctx = cv.getContext('2d'), W = cv.width = innerWidth, Hh = cv.height = innerHeight;
  const cols = ['#FF5C9E', '#2C5FD0', '#8C5CF0', '#F5B02E', '#C9327A', '#ffffff'];
  const ps = Array.from({ length: 180 }, () => ({ x: W / 2, y: Hh / 2.2, vx: (Math.random() - .5) * 16, vy: -Math.random() * 15 - 4, r: Math.random() * 6 + 4, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, s: Math.random() > .5 }));
  let f = 0;
  (function loop() {
    if (!d.isConnected || f++ > 260) return; ctx.clearRect(0, 0, W, Hh);
    ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += .15; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; if (p.s) ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); else { ctx.beginPath(); ctx.arc(0, 0, p.r / 2.2, 0, 7); ctx.fill(); } ctx.restore(); });
    requestAnimationFrame(loop);
  })();
}

/* ---------------- SRS review session ---------------- */
const Rev = { list: [], i: 0, flip: false, done: 0, filter: null, title: '' };
function startSRS(words, title) { Object.assign(Rev, { list: words, i: 0, flip: false, done: 0, title }); }
function renderSRS() {
  S.view = { name: 'srs' }; setLv(S.student.level);
  if (!Rev.list.length || Rev.i >= Rev.list.length && Rev.title !== 'all') startSRS(SRS.due().slice(0, 40), 'all');
  view().innerHTML = `<div class="page"><a class="crumb" href="#">${ICON.left}<span>Darslar</span></a><div class="srs" id="srs" style="margin-top:12px"></div></div>`;
  paintSRS('#');
}
function paintSRS(backHref) {
  const box = $('#srs'); if (!box) return;
  if (Rev.i >= Rev.list.length) {
    box.innerHTML = `<div class="srs-card-big"><div><div class="party-emoji" style="animation:none">${Rev.done ? '✨' : '🌙'}</div><h2 style="font-size:2rem;margin-top:8px">${Rev.done ? `${Rev.done} ta so‘z takrorlandi` : 'Hozircha takrorlash yo‘q'}</h2><p class="muted" style="margin-top:6px">${Rev.done ? 'Har bir so‘z o‘zining keyingi kunida yana chiqadi. Shunda u uzoq xotirada qoladi.' : 'Yangi darsdagi so‘zlar shu yerga avtomatik qo‘shiladi.'}</p></div><a class="btn btn-primary" href="${backHref || '#'}">Davom etish</a></div>`;
    return;
  }
  const w = WORDS[Rev.list[Rev.i]], c = S.P.srs[w.w] || { k: 0, ivl: 0, ef: 2.5, lap: 0, due: 0 };
  box.innerHTML = `
    <div class="srs-top"><b>Takrorlash</b><span class="muted num">${Rev.i + 1} / ${Rev.list.length}</span></div>
    <div class="srs-card-big">
      <div><div class="fw">${esc(w.w)}</div><div class="muted">${esc(w.ipa)}</div></div>
      <div style="display:flex;gap:8px;justify-content:center">${playBtn(w.w)}${w.ex ? playBtn(w.ex, 'f', '') : ''}</div>
      ${Rev.flip ? `<div class="back">${scene(pic(w.l, 'v', w.vi), w.l * 3 + w.vi, 'scn-f')}<span class="fu">${esc(w.uz)}</span>${w.ex ? `<span class="muted">${hl(w.ex)}</span>` : ''}${w.exUz ? `<span class="muted small"><i>${esc(w.exUz)}</i></span>` : ''}<span class="small muted">Lesson ${w.l}</span></div>` : `<button type="button" class="btn btn-primary" data-act="srs-flip">Javobni ko‘rish</button>`}
    </div>
    ${Rev.flip ? `<div class="rate">
      <button type="button" class="r0" data-act="srs-rate" data-q="0">Bilmadim<small>${SRS.label(c, 0)}</small></button>
      <button type="button" data-act="srs-rate" data-q="1">Qiyin<small>${SRS.label(c, 1)}</small></button>
      <button type="button" data-act="srs-rate" data-q="2">Bildim<small>${SRS.label(c, 2)}</small></button>
      <button type="button" class="r3" data-act="srs-rate" data-q="3">Oson<small>${SRS.label(c, 3)}</small></button>
    </div>` : '<p class="small muted" style="text-align:center">Avval o‘zingiz eslab ko‘ring: bu so‘z nimani anglatadi?</p>'}`;
  if (!Rev.flip) Voice.say(w.w);
  const nx = Rev.list[Rev.i + 1]; if (nx) Voice.prefetch(nx);
}

/* ---------------- review station ---------------- */
function renderReview(n, part, res) {
  const R = REVIEWS.find(r => r.n === n); if (!R) return go('');
  if (S.test && !(S.test.kind === 'review' && S.test.rid === R.id && part === 'test')) { toast('Avval testni tugating.'); return go(`review-${S.test.rid.slice(1)}-test`); }
  part = part || 'recall';
  S.view = { name: 'review', lesson: 0, section: 'review-' + part }; setLv(R.lvl); Voice.stop();
  const ls = (R.members || []).map(lessonByN).filter(Boolean);
  S.P.reviews[R.id] = S.P.reviews[R.id] || {};
  const rv = S.P.reviews[R.id];
  const tabs = [['recall', 'Formulalarni eslash'], ['words', 'So‘zlarni takrorlash'], ['test', 'Aralash test']];
  view().innerHTML = `<div class="page">
    <a class="crumb" href="#">${ICON.left}<span>Darslar</span></a>
    <header class="l-head"><p class="l-kicker"><span class="lvchip">${R.lvl}</span><span>${R.final ? 'Final review' : 'Review ' + R.n}</span></p><h1>${R.f || R.from}–${R.t || R.to}-darslarni takrorlash</h1><p class="uz">Eslash orqali takrorlash xotirani mustahkamlaydi: avval o‘zingiz eslang, keyin tekshiring.</p></header>
    <nav class="steps">${tabs.map(([k, t], i) => `<a class="stp${k === part ? ' is-on' : ''}${(k === 'test' && rv.test) || (k !== 'test' && rv[k]) ? ' is-done' : ''}${S.test && k !== 'test' ? ' is-locked' : ''}" href="#review-${n}-${k}"><span class="stp-n">${i + 1}</span>${t}</a>`).join('')}</nav>
    <section class="sec" id="sec"></section></div>`;
  const sec = $('#sec');
  if (part === 'recall') {
    sec.innerHTML = `<p class="lead">Har bir kartada qoida nomi bor. Formulasini xayolan ayting, keyin kartani bosib tekshiring.</p>
      ${ls.filter(l => !isV(l)).map(l => `<h3 class="sub-h">Lesson ${l.n}: ${esc(l.t)}</h3><div class="recall">${l.g.map(g => `<button type="button" class="rc" data-act="rc" aria-pressed="false"><small>Lesson ${l.n}</small><b>${g.h}</b><span class="rh">Formulani eslang, keyin bosing</span><span class="rf">${esc(Array.isArray(g.f) ? g.f.map(x => x.replace(/^.*::/, '').replace(/\*/g, '')).join(' / ') : String(g.f || '').replace(/\*/g, ''))}${g.e && g.e[0] ? `<br><i>${esc(speakText(g.e[0][0]))}</i>` : ''}</span></button>`).join('')}</div>`).join('')}
      <div class="next-bar"><p>Eslay olmagan qoidalaringizni darsdan qayta o‘qing.</p><button type="button" class="btn btn-primary" data-act="rv-done" data-n="${n}" data-part="recall" data-next="words">So‘zlarni takrorlash ${ICON.right}</button></div>`;
  } else if (part === 'words') {
    const all = ls.flatMap(l => (l.v || []).map(w => w[0])), marked = all.filter(w => S.P.srs[w] && S.P.srs[w].m), words = marked.length ? marked : all;
    if (Rev.title !== R.id) {
      const due = words.filter(w => S.P.srs[w] && S.P.srs[w].due <= Date.now());
      const weak = words.filter(w => S.P.srs[w] && S.P.srs[w].lap > 0 && !due.includes(w));
      startSRS(shuffle(due.concat(weak)).concat(shuffle(words.filter(w => !due.includes(w) && !weak.includes(w)))).slice(0, 25), R.id);
    }
    sec.innerHTML = `<p class="lead">${R.f || R.from}–${R.t || R.to}-darslardagi so‘zlardan 25 tasi: avval bugun takrorlanishi kerak bo‘lganlari, keyin qiyin bo‘lganlari.</p><div class="srs" id="srs"></div>`;
    paintSRS(`#review-${n}-test`);
    rv.words = rv.words || Date.now(); saveP();
  } else {
    if (S.test && S.test.kind === 'review') { sec.innerHTML = ''; return paintTest(); }
    sec.innerHTML = res ? resultHtml('', res, null) + `<div class="next-bar"><p>Natija ustozingizga yuborildi.</p><a class="btn btn-primary" href="#">Darslarga qaytish</a></div>`
      : `${rv.test && rv.test.last ? resultHtml('', rv.test.last, null, true) : ''}<div class="t-intro" style="margin-top:18px"><h3>Aralash test</h3><ul><li>Har bir darsdan 2 ta, oldingi darslardan ham bittadan savol.</li><li>Natijada qaysi darsni qayta ko‘rish kerakligi chiqadi.</li><li>Test davomida boshqa bo‘limlar yopiq.</li></ul><button type="button" class="btn btn-primary" data-act="rv-start" data-n="${n}">Testni boshlash</button></div>`;
  }
}
function reviewItems(R) {
  const items = [];
  const mem = (R.members || []).map(lessonByN).filter(Boolean), first = mem.length ? mem[0].ord : 0;
  mem.forEach(l => shuffle(testItemsLesson(l)).slice(0, 2).forEach(x => items.push(x)));
  shuffle(LESSONS.filter(l => l.ord < first)).slice(0, 5).forEach(l => { const x = shuffle(testItemsLesson(l))[0]; if (x) items.push(x); });
  return items;
}

/* ---------------- chat (student) ---------------- */
let chatImg = null, chatPoll = null;
async function openChat() {
  const c = $('#chat'); c.hidden = false; requestAnimationFrame(() => c.classList.add('open'));
  $('#chatQuick').innerHTML = ['Bu qoidani tushunmadim', 'Gapim to‘g‘rimi?', 'Daftarimni tekshiring'].map(q => `<button type="button" class="chip-btn" data-act="chat-quick" data-q="${q}">${q}</button>`).join('');
  await loadChat();
  clearInterval(chatPoll); chatPoll = setInterval(loadChat, 20000);
  setTimeout(() => $('#chatIn').focus(), 80);
}
function closeChat() { const c = $('#chat'); c.classList.remove('open'); clearInterval(chatPoll); setTimeout(() => { c.hidden = true; }, 230); }
async function loadChat() {
  try {
    const r = await API.call('GET', '/messages'); setUnread(0);
    const log = $('#chatLog');
    log.innerHTML = r.messages.length ? r.messages.map(m => msgHtml(m, m.sender === 'student')).join('') : '<p class="chat-empty">Uy vazifasida tushunmagan joyingizni yozing yoki daftaringizni rasmga olib yuboring. Ustoz javob beradi.</p>';
    log.scrollTop = log.scrollHeight;
  } catch (e) { $('#chatLog').innerHTML = `<p class="chat-empty">${esc(e.message)}</p>`; }
}
function msgHtml(m, mine, name) {
  return `<div class="msg ${mine ? 'm-me' : 'm-them'}">${m.image ? `<img src="${esc(m.image)}" alt="Yuborilgan rasm" data-act="zoom" loading="lazy">` : ''}${m.text ? `<div class="bub">${esc(m.text)}</div>` : ''}<span>${name || (mine ? 'Siz' : 'Ustoz')}, ${fmtWhen(m.at)}${m.lesson ? `, Lesson ${m.lesson}` : ''}</span></div>`;
}
function paintPreview(targetId) {
  const p = $(targetId); if (!p) return;
  p.hidden = !chatImg; p.innerHTML = chatImg ? `<img src="${chatImg}" alt=""><span>Rasm biriktirildi</span><button type="button" class="icon-btn" data-act="img-clear" aria-label="Rasmni olib tashlash">${ICON.x}</button>` : '';
}
async function sendChat() {
  const ta = $('#chatIn'), text = ta.value.trim(); if (!text && !chatImg) return;
  const btn = $('#chatSend'); btn.disabled = true;
  try { await API.call('POST', '/messages', { text, image: chatImg, lesson: (S.view && S.view.lesson) || null }); ta.value = ''; chatImg = null; paintPreview('#chatPrev'); await loadChat(); toast('Yuborildi. Ustoz javobi shu yerda chiqadi.'); }
  catch (e) { toast(e.message); }
  btn.disabled = false;
}

/* ---------------- recording ---------------- */
let rec = null, recStream = null, recTimer = null, recChunks = [];
async function toggleRec() {
  if (rec && rec.state === 'recording') { rec.stop(); return; }
  try { if (!navigator.mediaDevices || !window.MediaRecorder) throw 0; recStream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
  catch (e) { $('#recFallback').hidden = false; const m = $('#recMsg'); m.style.color = 'var(--rd)'; m.style.fontWeight = '700'; m.textContent = window.self !== window.top ? 'Mikrofon bu ko‘rish oynasida bloklanadi. Sayt o‘z manzilida (https) ochilganda mikrofon ishlaydi. Hozircha javobni pastga yozing.' : 'Mikrofonga ruxsat berilmadi. Brauzer manzil satridagi qulf belgisini bosib, Mikrofon → Ruxsat bering, so‘ng sahifani yangilang. Hozircha javobni pastga ham yozishingiz mumkin.'; toast('Mikrofon ochilmadi. Javobni pastga yozing.'); return; }
  rec = new MediaRecorder(recStream); recChunks = [];
  rec.ondataavailable = e => { if (e.data && e.data.size) recChunks.push(e.data); };
  rec.onstop = () => {
    recStream.getTracks().forEach(t => t.stop()); clearInterval(recTimer);
    const a = $('#recAudio'); if (a) { a.src = URL.createObjectURL(new Blob(recChunks, { type: rec.mimeType || 'audio/webm' })); a.hidden = false; }
    const b = $('#recBtn'); if (b) { b.classList.remove('is-on'); b.innerHTML = `${ICON.mic}<span>Qaytadan yozish</span>`; }
    const m = $('#recMsg'); if (m) m.textContent = 'Yozuv tayyor. Tinglab, o‘zingizni baholang.';
  };
  const t0 = Date.now(); rec.start();
  const b = $('#recBtn'); b.classList.add('is-on'); b.innerHTML = `${ICON.stop}<span>To‘xtatish</span>`;
  $('#recMsg').textContent = 'Yozilyapti… gapiring!';
  recTimer = setInterval(() => { const el = $('#recTime'); if (el) { const s = (Date.now() - t0) / 1000; el.textContent = `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`; } if (Date.now() - t0 > 180000) rec.stop(); }, 250);
}

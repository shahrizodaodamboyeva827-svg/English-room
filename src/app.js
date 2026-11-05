/* =====================================================================
   ROUTER + EVENTS + BOOT
   ===================================================================== */
function route() {
  const h = location.hash.slice(1);
  $('#menu') && ($('#menu').hidden = true);
  if (API.role === 'teacher' && API.token) return Teacher.route(h.startsWith('teacher') ? h : 'teacher');
  if (!S.student) return showLogin();
  if (h.startsWith('teacher')) { history.replaceState(null, '', location.pathname + location.search); }
  if (!S.student.level) return renderPicker();
  let m;
  if ((m = h.match(/^lesson-(\d+)(?:-(grammar|vocabulary|speaking|listening|writing|test|words|reading))?$/))) return renderLesson(+m[1], m[2]);
  if ((m = h.match(/^review-(\d)(?:-(recall|words|test))?$/))) return renderReview(+m[1], m[2]);
  if (S.test) { toast('Avval testni tugating.'); return go(S.test.kind === 'lesson' ? `lesson-${S.test.n}-test` : `review-${S.test.rid.slice(1)}-test`); }
  if (h === 'srs') return renderSRS();
  renderHome();
}
window.addEventListener('hashchange', () => { if (S.view && S.view.lesson) Track.flush(); route(); });

const ACT = {
  ...B1_ACT,
  'say': t => Voice.say(t.dataset.say, { btn: t, v: t.dataset.v || 'f', rate: (+t.dataset.rate || 1) * (S.view && S.view.lesson > 300 ? 0.9 : S.view && S.view.lesson > 200 ? 0.8 : 1) }),
  'srs-learn': t => setLearned(+t.dataset.n, t.dataset.on === '1'),
  'v-tab': t => { vTab = t.dataset.t; $$('[data-act="v-tab"][role="tab"]').forEach(b => b.setAttribute('aria-selected', b.dataset.t === vTab)); paintVPane(lessonByN(S.view.lesson)); const h = $('.vtabs'); if (h && t.closest('.to-read')) h.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
  'aw': t => wordPop(t),
  'a-tr': t => { const a = $('#art-' + t.dataset.a); const on = !a.classList.contains('show-tr'); a.classList.toggle('show-tr', on); t.setAttribute('aria-pressed', on); },
  'a-all': async t => {
    const Ls = lessonByN(+t.dataset.n), A = Ls.A[+t.dataset.a], art = $('#art-' + t.dataset.a);
    if (t.classList.contains('is-on')) { Voice.stop(); t.classList.remove('is-on'); return; }
    t.classList.add('is-on');
    await Voice.seq(A.p.map(p => [artText(p[0]), 'f']), { gap: 350, onLine: i => { $$('.ap', art).forEach((x, j) => x.classList.toggle('is-now', j === i)); const c = $$('.ap', art)[i]; if (c) c.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } });
    t.classList.remove('is-on'); $$('.ap', art).forEach(x => x.classList.remove('is-now'));
  },
  'aq': t => {
    const n = +t.dataset.n, lp = LP(n), k = t.dataset.a + '.' + t.dataset.i; lp.read = lp.read || {};
    if (lp.read[k] !== undefined) return;
    lp.read[k] = +t.dataset.o; saveP();
    const Ls = lessonByN(n), q = Ls.A[+t.dataset.a].q[+t.dataset.i], li = t.closest('li');
    li.classList.add(lp.read[k] === q[2] ? 'right' : 'wrong');
    $$('.opt', li).forEach((b, j) => { b.disabled = true; if (j === q[2]) b.classList.add('right'); else if (j === lp.read[k]) b.classList.add('wrong'); });
    const tot = Ls.A.reduce((x, A) => x + (A.q || []).length, 0);
    if (Object.keys(lp.read).length >= tot && isV(Ls)) { lp.sec.reading = lp.sec.reading || Date.now(); saveP(); }
  },
  'g-all': async t => {
    const Ls = lessonByN(+t.dataset.n), g = Ls.vg.find(x => x.id === t.dataset.g); if (!g) return;
    if (t.classList.contains('is-on')) { Voice.stop(); t.classList.remove('is-on'); return; }
    t.classList.add('is-on');
    const cards = $$('#g-' + g.id + ' .wc');
    await Voice.seq(Ls.v.slice(g.s, g.s + g.c).map(w => [w[0], 'f']), { gap: 420, onLine: i => cards.forEach((c, j) => { c.classList.toggle('is-on', j === i); if (j === i) c.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }) });
    t.classList.remove('is-on'); cards.forEach(c => c.classList.remove('is-on'));
  },
  'num-mode': t => { numMode = t.dataset.m; const L0 = lessonByN(S.view.lesson); paintVocab(L0); },
  'num-set': t => { const i = $('#numIn'); i.value = t.dataset.v; paintNum(); playNum(); },
  'num-play': () => playNum(),
  'goto-group': t => { const Ls = lessonByN(+t.dataset.n); S.scrollTo = 'g-' + t.dataset.g; if (!isV(Ls)) vTab = 'words'; go(`lesson-${t.dataset.n}-${isV(Ls) ? 'words' : 'vocabulary'}`); },
  'jump': t => { const el = document.getElementById(t.dataset.id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
  'menu': () => { const m = $('#menu'); m.hidden = !m.hidden; },
  'logout': () => { Track.flush(true); Voice.stop(); API.clearAuth(); S.student = null; S.P = null; S.test = null; Track.inTest = false; closeChat(); history.replaceState(null, '', location.pathname + location.search); showLogin(); },
  'teacher-open': () => { $('#tLogin').hidden = false; $('#tPass').value = ''; $('#tErr').textContent = ''; setTimeout(() => $('#tPass').focus(), 30); },
  'teacher-cancel': () => { $('#tLogin').hidden = true; },
  'pick-level': async t => {
    const lv = t.dataset.lv;
    try { await API.call('POST', '/level', { level: lv }); S.student.level = lv; mapLv = lv; renderBar(); toast(`${lv} ${LEVELS[lv].name} tanlandi. Keyingi safar shu yerdan davom etasiz.`); go(''); }
    catch (e) { toast(e.message); }
  },
  'map-lv': t => { mapLv = t.dataset.lv; renderHome(); },
  'sec-done': t => {
    const n = +t.dataset.n; markSection(n, t.dataset.sec);
    if (t.dataset.next) go(`lesson-${n}-${t.dataset.next}`); else go('');
  },
  'v-mode': t => { vMode = t.dataset.m; vFlip = false; $$('[data-act="v-mode"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.m === vMode)); paintVocab(lessonByN(S.view.lesson)); },
  'v-flip': () => { vFlip = !vFlip; paintVocab(lessonByN(S.view.lesson)); if (!vFlip) Voice.say(lessonByN(S.view.lesson).v[vIdx][0]); },
  'v-next': () => { const Ls = lessonByN(S.view.lesson); vIdx = (vIdx + 1) % Ls.v.length; vFlip = false; paintVocab(Ls); Voice.say(Ls.v[vIdx][0]); },
  'v-prev': () => { const Ls = lessonByN(S.view.lesson); vIdx = (vIdx - 1 + Ls.v.length) % Ls.v.length; vFlip = false; paintVocab(Ls); Voice.say(Ls.v[vIdx][0]); },
  'v-all': async t => {
    const Ls = lessonByN(S.view.lesson);
    if (t.classList.contains('is-on')) { Voice.stop(); t.classList.remove('is-on'); return; }
    t.classList.add('is-on');
    await Voice.seq(Ls.v.map(w => [w[0], 'f']), { gap: 420, onLine: i => { $$('.wc').forEach((r, j) => { r.classList.toggle('is-on', j === i); if (j === i) r.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }); } });
    t.classList.remove('is-on'); $$('.wc').forEach(r => r.classList.remove('is-on'));
  },
  'rec': () => toggleRec(),
  'pod-play': () => podPlay(),
  'pod-restart': () => { Voice.stop(); Pod.playing = false; podPlay(0); },
  'pod-jump': t => { Voice.stop(); Pod.playing = false; podPlay(+t.dataset.i); },
  'pod-rate': t => { Pod.rate = +t.dataset.r; $$('[data-act="pod-rate"]').forEach(b => b.setAttribute('aria-pressed', +b.dataset.r === Pod.rate)); if (Pod.playing) { Voice.stop(); Pod.playing = false; podPlay(Pod.idx); } },
  'pod-script': t => { Pod.script = !Pod.script; t.setAttribute('aria-pressed', Pod.script); t.querySelector('span').textContent = Pod.script ? 'Matnni yashirish' : 'Matnni ko‘rsatish'; $('.script').hidden = !Pod.script; paintPod(); },
  'pq': t => {
    const n = +t.dataset.n, lp = LP(n), i = +t.dataset.i; lp.listen = lp.listen || {};
    if (lp.listen[i] !== undefined) return;
    lp.listen[i] = +t.dataset.o;
    const Ls = lessonByN(n); if (Object.keys(lp.listen).length >= Ls.li.q.length) lp.sec.listening = lp.sec.listening || Date.now();
    saveP(); const keep = { idx: Pod.idx, playing: Pod.playing }; RENDER.listening(Ls, lp); Object.assign(Pod, keep); paintPod();
    t = null;
  },
  'w-submit': async t => {
    const n = +t.dataset.n, Ls = lessonByN(n), lp = LP(n), txt = $('#wText').value.trim(), r = analyzeText(txt, Ls);
    if (r.words < 3) return toast('Avval matn yozing.');
    lp.writing.draft = txt; lp.sec.writing = lp.sec.writing || Date.now(); saveP(true);
    const box = $('#wAI'); t.disabled = true; box.innerHTML = '<p class="small muted">AI tekshirmoqda…</p>';
    let res = null, local = false;
    try { res = await API.call('POST', '/writing-check', { text: txt, topic: Ls.t, grammar: Ls.t, task: (Ls.w && Ls.w.task) || '' }); } catch (e) { res = null; }
    if (!res || (!res.good && !res.mistakes)) { res = localWritingFeedback(txt, Ls); local = true; }
    t.disabled = false;
    const e2 = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    box.innerHTML = `<div class="box ai-fb"><h4>${local ? 'Tekshiruv natijasi' : 'AI fikri'}${res.score != null ? ` — <b>${res.score}/10</b>` : ''}</h4>
      ${res.good.length ? `<ul class="issues">${res.good.map(g => `<li>✓ ${e2(g)}</li>`).join('')}</ul>` : ''}
      ${res.mistakes.length ? `<h4 style="margin-top:10px">Xatolar va tavsiyalar</h4><ul class="issues">${res.mistakes.map(m => m.html ? `<li>${m.html}</li>` : `<li><s>${e2(m.wrong)}</s> → <b>${e2(m.right)}</b><br><span class="small muted">${e2(m.why)}</span></li>`).join('')}</ul>` : (res.score != null ? '<p class="small">Katta xato topilmadi. Barakalla!</p>' : '')}
      ${res.corrected ? `<h4 style="margin-top:10px">To‘g‘rilangan matn</h4><p class="model">${e2(res.corrected)}</p>` : ''}
      ${res.tip ? `<p class="small" style="margin-top:8px">💡 ${e2(res.tip)}</p>` : ''}
      <p class="small muted" style="margin-top:6px">${local ? 'Bu avtomatik qoidalar bilan tekshiruv (AI hozir ulanmagan). ' : 'AI adashishi mumkin. '}Matn ustozga yuborilmaydi.</p></div>`;
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },
  't-start': t => { const Ls = lessonByN(+t.dataset.n); startTest('lesson', testItemsLesson(Ls), { n: Ls.n }); renderLesson(Ls.n, 'test'); },
  't-ans': t => answerTest(+t.dataset.o),
  'goto-rule': t => { S.scrollTo = 'r-' + t.dataset.rid; go(`lesson-${t.dataset.n}-grammar`); },
  'goto-lesson': t => go(`lesson-${t.dataset.n}-grammar`),
  'party-close': t => t.closest('.party').remove(),
  'srs-flip': () => { Rev.flip = true; paintSRS(Rev.title === 'all' ? '#' : `#review-${Rev.title.slice(1)}-test`); },
  'srs-rate': t => { const w = Rev.list[Rev.i]; SRS.rate(w, +t.dataset.q); if (+t.dataset.q === 0 && Rev.list.length < 60) Rev.list.push(w); Rev.i++; Rev.done++; Rev.flip = false; paintSRS(Rev.title === 'all' ? '#' : `#review-${Rev.title.slice(1)}-test`); },
  'rc': t => t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') !== 'true'),
  'rv-done': t => { const R = REVIEWS.find(r => r.n === +t.dataset.n); S.P.reviews[R.id][t.dataset.part] = Date.now(); saveP(); go(`review-${R.n}-${t.dataset.next}`); },
  'rv-start': t => { const R = REVIEWS.find(r => r.n === +t.dataset.n); startTest('review', reviewItems(R), { rid: R.id }); renderReview(R.n, 'test'); },
  'chat-open': () => openChat(),
  'chat-close': () => closeChat(),
  'chat-quick': t => { $('#chatIn').value = t.dataset.q + ': '; $('#chatIn').focus(); },
  'img-clear': () => { chatImg = null; Teacher.img = null; paintPreview('#chatPrev'); paintPreview('#tPrev'); },
  'zoom': t => lightbox(t.src),
  /* teacher */
  'fb-rate': t => { const f = t.closest('form'); f.rate.value = t.dataset.v; f.querySelectorAll('[data-act="fb-rate"]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.v <= +t.dataset.v))); },
  't-logout': () => { API.clearAuth(); history.replaceState(null, '', location.pathname + location.search); showLogin(); },
  't-del-teacher': async t => { if (!confirm('Ustoz o‘chirilsinmi? O‘quvchilari Bosh ustozga o‘tadi.')) return; await API.call('DELETE', '/t/teachers/' + t.dataset.id); toast('O‘chirildi.'); Teacher.route('teacher-teachers'); },
  't-new-group': () => { const f = $('#newGroup'); if (f) { f.style.display = 'grid'; f.scrollIntoView({ behavior: 'smooth', block: 'center' }); const i = f.querySelector('input'); if (i) i.focus(); } },
  't-open-group': t => go('teacher-g-' + t.dataset.id),
  't-print': () => window.print(),
  't-group-edit': () => { const f = $('#editGroup'); if (f) f.style.display = f.style.display === 'none' ? 'grid' : 'none'; },
  't-del-group': async t => { if (!confirm('Guruh o‘chirilsinmi? O‘quvchilar o‘chmaydi.')) return; await API.call('DELETE', '/t/groups/' + t.dataset.id); toast('Guruh o‘chirildi.'); go('teacher-groups'); },
  't-pay': async t => { await API.call('POST', `/t/students/${t.dataset.id}/pay`, { ym: t.dataset.ym, paid: t.dataset.on === '1' }); Teacher.route(location.hash.slice(1)); },
  't-open': t => go('teacher-s-' + t.dataset.id),
  't-thread': t => { Teacher.thread = t.dataset.id; Teacher.route('teacher-inbox'); },
  't-copy': async t => { try { await navigator.clipboard.writeText(t.dataset.text); toast('Nusxalandi.'); } catch (e) { toast('Nusxalab bo‘lmadi. Kodni qo‘lda ko‘chiring.'); } },
  't-newcode': async t => {
    if (!confirmBox('Eski kod ishlamay qoladi. Yangi kod yaratilsinmi?', t)) return;
    const r = await API.call('POST', `/t/students/${t.dataset.id}/code`, {}); toast('Yangi kod: ' + r.code); Teacher.route(location.hash.slice(1));
  },
  't-edit-toggle': () => { const f = $('#editStudent'); f.hidden = !f.hidden; },
  't-delete': async t => {
    if (!confirmBox('O‘quvchi va uning barcha natijalari o‘chiriladi. Ishonchingiz komilmi?', t)) return;
    await API.call('DELETE', '/t/students/' + t.dataset.id); toast('O‘chirildi.'); go('teacher');
  }
};
/* two-tap confirm (alert/confirm are blocked in some frames) */
function confirmBox(msg, btn) {
  if (btn.dataset.armed === '1') { btn.dataset.armed = ''; return true; }
  btn.dataset.armed = '1'; const old = btn.innerHTML; btn.innerHTML = 'Yana bir bosing: tasdiqlash'; toast(msg);
  setTimeout(() => { if (btn.dataset.armed === '1') { btn.dataset.armed = ''; btn.innerHTML = old; } }, 4000);
  return false;
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]');
  if (!t) { const m = $('#menu'); if (m && !m.hidden && !e.target.closest('.me-btn')) m.hidden = true; return; }
  const fn = ACT[t.dataset.act]; if (!fn) return;
  if (t.tagName === 'A' && t.getAttribute('href')) return;
  if (t.tagName !== 'INPUT' && t.tagName !== 'LABEL') e.preventDefault();
  Promise.resolve(fn(t, e)).catch(err => toast(err.message || 'Xatolik'));
});
document.addEventListener('click', e => {
  const a = e.target.closest('a.stp.is-locked'); if (a) { e.preventDefault(); toast('Test tugaguncha boshqa bo‘limlar yopiq.'); }
  const pop = $('#awPop'); if (pop && !pop.hidden && !e.target.closest('.aw, #awPop')) pop.hidden = true;
}, true);
document.addEventListener('change', async e => {
  const c = e.target.closest('[data-check]');
  if (c && S.view && S.view.lesson) {
    const lp = LP(S.view.lesson); lp.speak = lp.speak || { checks: [] };
    const set = new Set(lp.speak.checks); c.checked ? set.add(+c.dataset.check) : set.delete(+c.dataset.check);
    lp.speak.checks = [...set].sort(); saveP();
  }
  if (e.target.id === 'audioFile' && e.target.files.length) { Teacher.uploadAudio([...e.target.files]); return; }
  if (e.target.id === 'recFile' && e.target.files[0]) { const a = $('#recAudio'); a.src = URL.createObjectURL(e.target.files[0]); a.hidden = false; Track.ignoreUntil = 0; }
  if (e.target.matches('input[data-img]') && e.target.files[0]) {
    try {
      const url = await compressImage(e.target.files[0]);
      if (e.target.dataset.img === 't') { Teacher.img = url; chatImg = null; const p = $('#tPrev'); if (p) { chatImg = url; paintPreview('#tPrev'); } }
      else { chatImg = url; paintPreview('#chatPrev'); }
    } catch (err) { toast('Rasmni o‘qib bo‘lmadi.'); }
    Track.ignoreUntil = 0; e.target.value = '';
  }
});
document.addEventListener('click', e => { if (e.target.closest('label.attach, label[for="recFile"]')) Track.ignoreUntil = Date.now() + 120000; }, true);
let draftT;
document.addEventListener('input', e => {
  if (e.target.id === 'wText' && S.view && S.view.lesson) {
    const Ls = lessonByN(S.view.lesson); paintWriting(Ls);
    clearTimeout(draftT); draftT = setTimeout(() => { LP(Ls.n).writing.draft = e.target.value; saveP(); }, 800);
  }
  if (e.target.id === 'tagInput') $('#loginErr').textContent = '';
  if (e.target.id === 'numIn') paintNum();
  if (e.target.id === 'tPass') { $('#tErr').textContent = ''; clearTimeout(tPassT); const v = e.target.value.trim(); if (/^[A-Za-z]\.[A-Za-z]+\d{3}$/.test(v)) tPassT = setTimeout(() => teacherLogin(true), 120); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (!$('#chat').hidden) closeChat(); if (!$('#tLogin').hidden) $('#tLogin').hidden = true; const lb = $('.lightbox'); if (lb) lb.remove(); const p = $('.party'); if (p) p.remove(); }
  if (S.test && /^[1-4]$/.test(e.key) && !e.target.closest('input,textarea')) { const b = $$('.t-opt')[+e.key - 1]; if (b) b.click(); }
  if (e.key === 'Enter' && !e.shiftKey && e.target.id === 'chatIn') { e.preventDefault(); sendChat(); }
});
document.addEventListener('submit', async e => {
  e.preventDefault(); const f = e.target;
  try {
    if (f.id === 'loginForm') {
      const name = $('#tagInput').value.trim().replace(/\s+/g, ' '), err = $('#loginErr');
      if (name.length < 3 || !name.includes(' ')) { err.textContent = 'Ism va familiyangni yoz (masalan: Ali Valiyev).'; $('#tagInput').focus(); return; }
      const btn = f.querySelector('button[type=submit]'); btn.disabled = true;
      const code = $('#codeInput').value.trim();
      if (!code) { err.textContent = 'Ustozingiz bergan kodni yozing.'; $('#codeInput').focus(); return; }
      try { await studentLogin(name, code); }
      catch (x) { err.textContent = x.message; }
      btn.disabled = false;
    } else if (f.id === 'tForm') { await teacherLogin(false); 
    } else if (f.id === 'chatForm') { await sendChat(); }
    else if (f.id === 'tSpell') { const v = $('#tSpellIn').value.trim(); if (!v) return; answerTest(v); }
    else if (f.id === 'fbForm') {
      const d = Object.fromEntries(new FormData(f).entries()), rate = +d.rate;
      if (!rate) { toast('Avval 1 dan 5 gacha baho tanlang.'); return; }
      S.P.feedback = S.P.feedback || {}; S.P.feedback[f.dataset.lv] = { rate, text: String(d.text || '').trim().slice(0, 1500), at: Date.now() };
      saveP(true); toast('Fikringiz ustozga yuborildi. Rahmat!'); renderHome();
    } else if (f.id === 'newTeacher') {
      const d = Object.fromEntries(new FormData(f).entries());
      await API.call('POST', '/t/teachers', d); Teacher.newT = { name: d.name, password: d.password }; Teacher.route('teacher-teachers');
    } else if (f.dataset.form === 't-pass') {
      const d = Object.fromEntries(new FormData(f).entries());
      await API.call('POST', '/t/teachers/' + f.dataset.id, d); toast('Parol almashtirildi.'); f.reset();
    } else if (f.id === 'newGroup') {
      const d = Object.fromEntries(new FormData(f).entries()), r = await API.call('POST', '/t/groups', d); toast(`Guruh yaratildi: ${r.students.length} ta o‘quvchi, kodlar tayyor.`); go('teacher-g-' + r.group.id);
    } else if (f.id === 'editGroup') {
      const d = Object.fromEntries(new FormData(f).entries()); d.apply_all = !!d.apply_all; await API.call('PATCH', '/t/groups/' + f.dataset.id, d); toast('Saqlandi.'); Teacher.route(location.hash.slice(1));
    } else if (f.id === 'addList') {
      const d = Object.fromEntries(new FormData(f).entries()), r = await API.call('PATCH', '/t/groups/' + f.dataset.id, { list: d.list }); toast(`${r.students.length} ta o‘quvchi qo‘shildi.`); Teacher.route(location.hash.slice(1));
    } else if (f.id === 'newStudent') {
      const d = Object.fromEntries(new FormData(f).entries());
      const r = await API.call('POST', '/t/students', d); toast('Qo‘shildi: ' + r.student.name); Teacher.route('teacher-codes');
    } else if (f.id === 'editStudent') {
      const d = Object.fromEntries(new FormData(f).entries());
      await API.call('PATCH', '/t/students/' + f.dataset.id, d); toast('Saqlandi.'); Teacher.route('teacher-s-' + f.dataset.id);
    } else if (f.dataset.form === 't-reply') {
      const ta = f.querySelector('textarea'), text = ta.value.trim(), img = Teacher.img || chatImg; if (!text && !img) return;
      await API.call('POST', `/t/students/${f.dataset.id}/messages`, { text, image: img }); Teacher.img = null; chatImg = null; toast('Javob yuborildi.'); Teacher.route(location.hash.slice(1) || 'teacher-inbox');
    }
  } catch (x) { toast(x.message || 'Xatolik'); }
});

mediaHooks.push(() => {
  const v = S.view || {};
  if (v.name === 'lesson' && (v.section === 'grammar' || v.section === 'vocabulary')) { const y = scrollY; RENDER[v.section](lessonByN(v.lesson), LP(v.lesson)); scrollTo(0, y); }
  if (v.name === 'lesson') Media.preload(v.lesson);
  if (v.name === 'srs' && Rev.flip) paintSRS('#');
});
let tPassT = 0, tBusy = false;
function localWritingFeedback(txt, Ls) {
  const r = analyzeText(txt, Ls), w = Ls.w || {}, min = w.min || 40, bad = [];
  (txt.match(/[A-Za-z’'-]+/g) || []).forEach(x => { const k = x.toLowerCase().replace(/[’'-]/g, ''); if (k.length > 2 && (!/[aeiouy]/.test(k) || /[^aeiouy]{5,}/.test(k) || /(.)\1{3,}/.test(k) || k.length > 16) && !bad.includes(x)) bad.push(x); });
  const good = [], mistakes = [];
  if (r.words >= min) good.push(`So‘zlar soni yetarli: ${r.words}.`); else mistakes.push({ html: `Matn qisqa: <b>${r.words}</b> so‘z yozdingiz, kamida <b>${min}</b> kerak.` });
  if (r.sents >= (w.sents || 5)) good.push(`Gaplar soni yetarli: ${r.sents}.`); else mistakes.push({ html: `Gaplar kam: <b>${r.sents}</b> ta, kamida <b>${w.sents || 5}</b> ta bo‘lsin.` });
  if (r.capsOk) good.push('Gaplar katta harf bilan boshlanib, nuqta bilan tugagan.'); else mistakes.push({ html: 'Har bir gap <b>katta harf</b> bilan boshlanib, <b>nuqta</b> bilan tugashi kerak.' });
  r.checks.forEach(c => { if (c.ok) good.push(`${c.label}: ${c.n} ta, yaxshi.`); else mistakes.push({ html: `${c.label}: <b>${c.n}</b> ta, kamida <b>${c.min}</b> ta ishlating.` }); });
  if (r.used.length >= 4) good.push(`Darsdagi ${r.used.length} ta so‘zni ishlatdingiz.`); else mistakes.push({ html: `Darsdagi so‘zlardan kamida <b>4</b> tasini ishlating (hozir ${r.used.length}).` });
  bad.slice(0, 5).forEach(x => mistakes.unshift({ html: `«<b>${x.replace(/[<>&]/g, '')}</b>» ingliz so‘ziga o‘xshamaydi. Imloni tekshiring.` }));
  r.issues.forEach(i => mistakes.unshift({ html: i }));
  const score = Math.max(0, Math.min(10, Math.round(10 - bad.length * 2.5 - r.issues.length * 1.5 - mistakes.filter(m => !m.html.includes('o‘xshamaydi') && !r.issues.includes(m.html)).length * .8)));
  return { score, good, mistakes, corrected: '', tip: r.words < min ? 'Avval namunani o‘qib, reja bo‘yicha to‘liqroq yozing.' : 'Yozganingizni bir marta ovoz chiqarib o‘qib chiqing, xatolar ko‘zga tashlanadi.', local: true };
}
async function studentLogin(name, code) {
  const r = await API.call('POST', '/login', { name, code });
  API.setAuth(r.token, 'student'); $('#loginErr').textContent = ''; await enterStudent();
}
async function teacherLogin(auto) {      // parol to‘g‘ri yozilishi bilan avtomatik kiradi
  if (tBusy) return; tBusy = true;
  try { const r = await API.call('POST', '/teacher/login', { password: $('#tPass').value.trim() }); API.setAuth(r.token, 'teacher'); Teacher.me = r.role ? { role: r.role, name: r.name } : null; $('#tLogin').hidden = true; S.student = null; go('teacher'); }
  catch (x) { if (!auto) $('#tErr').textContent = x.message; }
  tBusy = false;
}
async function boot() {
  buildIndex();
  Track.start();
  await API.init();
  if (API.token && API.role === 'student') {
    try { await enterStudent(); } catch (e) { API.clearAuth(); showLogin(); }
  } else route();
  setInterval(() => { if (S.student && $('#chat').hidden) API.call('POST', '/beat', { sec: 0, leaves: [] }).then(r => r && setUnread(r.unread || 0)).catch(() => {}); }, 90000);
}
boot();

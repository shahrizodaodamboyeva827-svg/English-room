/* =====================================================================
   ENGLISH ROOM — core: utils, API (server or demo), voice, tracking, SRS
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hl = s => String(s || '').replace(/\*([^*]+)\*/g, '<b class="hl">$1</b>');
/*SPEAK*/const speakText = s => {
  let t = String(s || '').replace(/<[^>]+>/g, ' ').replace(/[*]/g, '');
  t = t.replace(/\s*\/[^/\s]*[ˈːəɪʃθðæɒʊʌɜŋʒɑɔɡ][^/]*\//g, '');                       // IPA
  t = t.replace(/«([a-z’']+)»/g, '').replace(/[«»]/g, '');                                       // «keyk»
  t = t.replace(/\(([^)]*)\)/g, (m, x) => { const y = x.replace(/\*/g, '').trim(); return y.length < 3 ? y : /^(years old|absent|that|which|not|of|laughs|went \/ ate \/ saw|three birthdays this week!)$/i.test(y) ? ' ' + y + ' ' : ''; });   // qavs ichidagi o‘zbekcha izohlar o‘qilmaydi
  t = t.replace(/\s*✗.*$/, '').replace(/[↗↘]/g, '').replace(/\s*→\s*/g, '. ').replace(/\s+=\s+/g, '. ').replace(/\s+[–]\s+/g, ', ');
  t = t.replace(/(\d)\s*%/g, '$1 percent').replace(/(\d)\s*°C/g, '$1 degrees Celsius').replace(/\$\s?([\d,.]+)/g, '$1 dollars').replace(/£\s?([\d,.]+)/g, '$1 pounds').replace(/km²/g, 'square kilometres');
  t = t.replace(/\s\/\s/g, ', ').replace(/([A-Za-z])\/([A-Za-z])/g, '$1 or $2').replace(/___+/g, '…');
  t = t.replace(/\s*—\s*/g, (m, i) => /[.?!…]$/.test(t.slice(0, i).trim()) ? ' ' : ', ');
  return t.replace(/\s+([.,?!])/g, '$1').replace(/\s+/g, ' ').replace(/[,\s]+$/, '').trim();
};/*/SPEAK*/
const sleep = ms => new Promise(r => setTimeout(r, ms));
const store = {
  get(k, d = null) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const dayKey = (t = Date.now()) => { const d = new Date(t); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
function fmtDur(sec) {
  sec = Math.round(sec || 0);
  if (sec < 60) return `${sec} son.`;
  const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60);
  return h ? `${h} soat ${m} daq` : `${m} daq`;
}
function fmtWhen(ts) {
  if (!ts) return '—';
  const d = new Date(ts), now = new Date();
  const hm = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  if (d.toDateString() === now.toDateString()) return `bugun ${hm}`;
  const y = new Date(now); y.setDate(now.getDate() - 1);
  if (d.toDateString() === y.toDateString()) return `kecha ${hm}`;
  return `${d.getDate()}-${['yan', 'fev', 'mar', 'apr', 'may', 'iyun', 'iyul', 'avg', 'sen', 'okt', 'noy', 'dek'][d.getMonth()]} ${hm}`;
}
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 3800); }

const I = (p, extra = '') => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" ${extra}>${p}</svg>`;
const ICON = {
  play: I('<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>'),
  pause: I('<rect x="6.5" y="5.5" width="4" height="13" rx="1" fill="currentColor"/><rect x="13.5" y="5.5" width="4" height="13" rx="1" fill="currentColor"/>'),
  sound: I('<path d="M4 9.5v5h3.5l4.5 4v-13l-4.5 4z" fill="currentColor"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.6 7.6 0 0 1 0 11" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>'),
  check: I('<path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'),
  bulb: I('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linejoin="round"/>'),
  snail: I('<path d="M3 17.5h13.5a4.5 4.5 0 0 0 4.5-4.5V7" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="11" cy="12" r="5" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M11 12a2 2 0 1 1 2-2" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M19.5 7l-1-2.5M21.5 7.2l.9-2.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
  x: I('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>'),
  chat: I('<path d="M4.5 5.5h15v10.5h-9.5l-5.5 4z" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linejoin="round"/>'),
  send: I('<path d="M4 12l16-7-6 15-2.5-6z" fill="currentColor"/>'),
  camera: I('<path d="M4 8h3l1.5-2.5h7L17 8h3v11H4z" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linejoin="round"/><circle cx="12" cy="13.2" r="3.4" stroke="currentColor" stroke-width="1.9" fill="none"/>'),
  again: I('<path d="M5 12a7 7 0 1 0 2.2-5.1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M5 4.5v4h4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'),
  mic: I('<rect x="9" y="3.5" width="6" height="11" rx="3" fill="currentColor"/><path d="M6 11a6 6 0 0 0 12 0M12 17v3.5" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round"/>'),
  stop: I('<rect x="6.5" y="6.5" width="11" height="11" rx="2" fill="currentColor"/>'),
  clock: I('<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.9" fill="none"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round"/>'),
  door: I('<path d="M13 4.5H6v15h7M10 12h10M17 8.5l3.5 3.5-3.5 3.5" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'),
  right: I('<path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'),
  left: I('<path d="M19 12H6M11 6.5L5.5 12l5.5 5.5" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'),
  lock: I('<rect x="5.5" y="10.5" width="13" height="9.5" rx="2" stroke="currentColor" stroke-width="1.9" fill="none"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" stroke="currentColor" stroke-width="1.9" fill="none"/>'),
  cards: I('<rect x="4" y="6" width="12" height="14" rx="2.5" stroke="currentColor" stroke-width="1.9" fill="none"/><path d="M8 4h9.5A2.5 2.5 0 0 1 20 6.5V17" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round"/>'),
  list: I('<path d="M9 7h11M9 12h11M9 17h11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="5" cy="7" r="1.3" fill="currentColor"/><circle cx="5" cy="12" r="1.3" fill="currentColor"/><circle cx="5" cy="17" r="1.3" fill="currentColor"/>'),
  users: I('<circle cx="9" cy="9" r="3.4" stroke="currentColor" stroke-width="1.9" fill="none"/><path d="M3.5 19c.8-3.2 3-5 5.5-5s4.7 1.8 5.5 5M15.5 6a3.2 3.2 0 0 1 0 6.2M17 14.4c1.9.6 3.1 2.2 3.5 4.6" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round"/>'),
  key: I('<circle cx="8" cy="12" r="3.6" stroke="currentColor" stroke-width="1.9" fill="none"/><path d="M11.6 12H20M17 12v3M20 12v2.5" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round"/>'),
  phone: I('<path d="M6.5 4h3l1.5 4-2 1.3a10 10 0 0 0 5.7 5.7L16 13l4 1.5v3A2.5 2.5 0 0 1 17.5 20 14.5 14.5 0 0 1 4 6.5 2.5 2.5 0 0 1 6.5 4z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/>'),
  copy: I('<rect x="8.5" y="8.5" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.9" fill="none"/><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5" stroke="currentColor" stroke-width="1.9" fill="none"/>'),
  podcast: I('<circle cx="12" cy="10" r="2.6" fill="currentColor"/><path d="M8 14.5a5.5 5.5 0 1 1 8 0M5.3 17.2a9.2 9.2 0 1 1 13.4 0" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round"/><path d="M11 15h2l.6 5.5h-3.2z" fill="currentColor"/>'),
  spark: I('<path d="M12 3.5l2.1 5.4 5.4 2.1-5.4 2.1L12 18.5l-2.1-5.4L4.5 11l5.4-2.1z" fill="currentColor"/>')
};

/* ---------- levels & map ---------- */
const LEVELS = {
  A0: { name: 'Starter', uz: 'Noldan boshlayman', desc: 'Alifbo, salomlashish, sonlar, to be. Ingliz tilini endi boshlayotganlar uchun.', c: 'var(--a0)' },
  A1: { name: 'Elementary', uz: 'Asoslarini bilaman', desc: 'Artikllar, this/that, Present Continuous, uy va kiyim so‘zlari.', c: 'var(--a1)' },
  A2: { name: 'Pre-intermediate', uz: 'Oddiy gaplashib olaman', desc: 'Present Simple, Past, Present Perfect, Future, modal fe’llar.', c: 'var(--a2)' },
  B1: { name: 'Intermediate', uz: 'Erkin gaplashishga tayyorman', desc: 'Barcha zamonlar, shart gaplar, majhul nisbat, ko‘chirma gap, phrasal verbs va so‘z yasash. Kuchli B1 uchun.', c: 'var(--b1)' },
  B2: { name: 'Upper-Intermediate', uz: 'Murakkab fikrlarni ayta olaman', desc: 'Destination B2 asosida: murakkab grammatika va mavzuli lug‘at, har bir so‘zni to‘g‘ri ishlatish qoidalari bilan. FCE / B2 uchun.', c: 'var(--b2)' }
};

/* ---------- English Panda: har dars mavzusiga mos video qidiruvi ---------- */
const PANDA = {
  7: 'articles a an the', 8: 'this that these those', 9: 'describing people appearance personality', 10: 'can ability', 11: 'possessive adjectives', 12: 'present continuous', 13: 'clothes vocabulary', 14: 'object pronouns imperative', 15: 'rooms in the house', 16: 'things in the house',
  17: 'there is there are', 18: 'much many a lot of', 19: 'present simple vs present continuous', 20: 'past simple', 21: 'present perfect vs past simple', 22: 'prepositions of time place', 23: 'future will going to', 24: 'comparatives superlatives', 25: 'adverbs of manner', 26: 'question tags', 27: 'because so although', 28: 'modal verbs', 29: 'infinitive gerund', 30: 'both neither all none',
  201: 'present simple present continuous', 202: 'adjectives ed ing', 203: 'past simple past continuous', 204: 'used to would', 205: 'past perfect', 206: 'present perfect', 207: 'present perfect continuous', 208: 'future forms will going to', 209: 'future continuous future perfect', 210: 'zero first conditional', 211: 'second conditional', 212: 'third conditional', 213: 'I wish if only', 214: 'must have to should', 215: 'can could be able to', 216: 'modals of deduction', 217: 'modals of deduction past should have', 218: 'passive voice', 219: 'passive have something done', 220: 'reported speech', 221: 'reported questions reporting verbs', 222: 'relative clauses', 223: 'non-defining relative clauses', 224: 'gerund infinitive', 225: 'reflexive pronouns each other', 226: 'articles', 227: 'quantifiers some any much many', 228: 'comparison as as', 229: 'linking words contrast', 230: 'linking words purpose reason result', 231: 'phrasal verbs', 234: 'dependent prepositions', 235: 'so such too enough', 236: 'used to be used to get used to'
};
const pandaUrl = n => PANDA[n] ? 'https://www.youtube.com/@EnglishPandaLessons/search?query=' + encodeURIComponent(PANDA[n]) : '';
const LESSONS = [];
function L(o) { LESSONS.push(o); }
const VOCS = [];
function VOC(n, o) { VOCS.push([n, o]); }   // grammatika darsining yangi so‘zlari va maqolasi
const REVIEWS = [
  { id: 'r1', n: 1, lvl: 'A0', after: 6, from: 1, to: 6 },
  { id: 'r2', n: 2, lvl: 'A1', after: 11, from: 7, to: 11 },
  { id: 'r3', n: 3, lvl: 'A1', after: 16, from: 12, to: 16 },
  { id: 'r4', n: 4, lvl: 'A2', after: 22, from: 17, to: 22 },
  { id: 'r5', n: 5, lvl: 'A2', after: 30, from: 23, to: 30 },
  { id: 'r6', n: 6, lvl: 'B1', after: 205, from: 201, to: 205, f: 1, t: 5 },
  { id: 'r7', n: 7, lvl: 'B1', after: 210, from: 206, to: 210, f: 6, t: 10 },
  { id: 'r8', n: 8, lvl: 'B1', after: 215, from: 211, to: 215, f: 11, t: 15 },
  { id: 'r9', n: 9, lvl: 'B1', after: 220, from: 216, to: 220, f: 16, t: 20 },
  { id: 'r10', n: 10, lvl: 'B1', after: 225, from: 221, to: 225, f: 21, t: 25 },
  { id: 'r11', n: 11, lvl: 'B1', after: 230, from: 226, to: 230, f: 26, t: 30 },
  { id: 'r12', n: 12, lvl: 'B1', after: 235, from: 231, to: 235, f: 31, t: 35 },
  { id: 'r13', n: 13, lvl: 'B1', after: 239, from: 236, to: 239, f: 36, t: 39, final: true }
];
const SECTIONS = [
  { id: 'grammar', en: 'Grammar' }, { id: 'vocabulary', en: 'Vocabulary' }, { id: 'speaking', en: 'Speaking' },
  { id: 'listening', en: 'Listening' }, { id: 'writing', en: 'Writing' }, { id: 'test', en: 'Test' }
];
const SECTIONS_V = [{ id: 'words', en: 'Words' }, { id: 'reading', en: 'Reading' }, { id: 'test', en: 'Test' }];
const isV = l => !!(l && l.kind === 'vocab');
const secsOf = l => (isV(l) ? SECTIONS_V : SECTIONS);
const dno = l => (l.n > 200 ? l.n % 100 : l.n);
const lessonNo = l => (isV(l) ? 'Vocabulary' : 'Lesson ' + String(dno(l)).padStart(2, '0'));
const lessonName = l => (isV(l) ? `Vocabulary: ${l.t}` : `Lesson ${dno(l)}: ${l.t}`);
let STATIONS = [], WORDS = {};
function buildIndex() {
  VOCS.forEach(([n, o]) => { const l = LESSONS.find(x => x.n === n); if (l) Object.assign(l, o); });
  // so‘zlar guruhlardan tekis ro‘yxatga: l.v (eski kod uchun) + l.vg (guruhlar)
  LESSONS.forEach(l => { if (l.V) { l.v = []; l.vg = []; l.V.forEach(g => { l.vg.push({ id: g.g, t: g.t, s: l.v.length, c: g.w.length }); g.w.forEach(w => l.v.push(w)); }); } });
  const gram = LESSONS.filter(l => !isV(l)).sort((a, b) => a.n - b.n), order = [];
  gram.forEach(l => { order.push(l); LESSONS.filter(x => isV(x) && x.after === l.n).sort((a, b) => a.n - b.n).forEach(x => order.push(x)); });
  LESSONS.splice(0, LESSONS.length, ...order);
  STATIONS = []; let since = [];
  LESSONS.forEach((l, k) => {
    l.id = 'l' + l.n; l.ord = k;
    STATIONS.push({ type: 'lesson', id: l.id, n: l.n, lvl: l.lvl, t: l.ts || l.t, uz: l.uz, ref: l, v: isV(l) });
    since.push(l.n);
    (l.v || []).forEach((w, i) => { WORDS[w[0]] = { w: w[0], ipa: w[1], uz: w[2], ex: w[3] || '', exUz: w[4] || '', l: l.n, vi: i }; });
    const nx = LESSONS[k + 1];
    const r = REVIEWS.find(x => x.after === (isV(l) ? l.after : l.n));
    if (r && !(nx && isV(nx) && nx.after === r.after)) {
      r.members = since; since = [];
      STATIONS.push({ type: 'review', id: r.id, n: r.n, lvl: r.lvl, t: r.final ? 'Final review' : `Review ${r.n}`, uz: `${r.f || r.from}–${r.t || r.to}-darslarni takrorlash`, ref: r });
    }
  });
}
const lessonByN = n => LESSONS.find(l => l.n === +n);

/* =====================================================================
   API — talks to the Cloudflare Worker; if there is no server (preview),
   falls back to a demo backend stored in this browser.
   ===================================================================== */
const API = {
  mode: 'local', token: null, role: null,
  async init() {
    this.token = store.get('er_tok'); this.role = store.get('er_role');
    try {
      const ctl = new AbortController(); setTimeout(() => ctl.abort(), 3500);
      const r = await fetch('/api/ping', { cache: 'no-store', signal: ctl.signal });
      const j = await r.json();
      if (j && j.app === 'english-room') this.mode = 'server';
    } catch (e) {}
    if (this.mode === 'local') Local.init();
  },
  setAuth(token, role) { this.token = token; this.role = role; store.set('er_tok', token); store.set('er_role', role); },
  clearAuth() { this.token = null; this.role = null; store.del('er_tok'); store.del('er_role'); },
  async call(method, path, body) {
    if (this.mode === 'local') {
      const res = Local.handle(method, path, body || {}, this.token);
      if (res && res.__error) { const e = new Error(res.__error); e.status = res.status || 400; throw e; }
      return JSON.parse(JSON.stringify(res));
    }
    const r = await fetch('/api' + path, {
      method, headers: Object.assign({ 'Content-Type': 'application/json' }, this.token ? { Authorization: 'Bearer ' + this.token } : {}),
      body: body ? JSON.stringify(body) : undefined
    });
    let j = null; try { j = await r.json(); } catch (e) {}
    if (!r.ok) { const e = new Error((j && j.error) || 'Server bilan aloqa bo‘lmadi'); e.status = r.status; throw e; }
    return j;
  },
  beacon(path, body) {
    if (this.mode === 'local') { try { this.call('POST', path, body); } catch (e) {} return; }
    try { navigator.sendBeacon('/api' + path, new Blob([JSON.stringify(Object.assign({ token: this.token }, body))], { type: 'application/json' })); } catch (e) {}
  }
};

/* ---------- demo backend (only used when no server) ---------- */
const Local = {
  db: null,
  init() {
    this.db = store.get('er_demo_v3');
    if (!this.db) { this.db = this.seed(); this.save(); }
  },
  save() { store.set('er_demo_v3', this.db); },
  code() { const W = ['olma','lola','bola','anor','gul','kiwi','bahor','quyosh','yulduz','dengiz','kitob','qalam','maktab','uzum','mushuk','quyon','panda','robot','raketa','musiqa','omad','orzu','nur','chiroq']; let c; do { c = W[Math.floor(Math.random() * W.length)] + (10 + Math.floor(Math.random() * 90)); } while (Object.values(this.db.students).some(s => String(s.code).toLowerCase() === c)); return c; },
  normName(n) { return String(n || '').toLowerCase().replace(/[‘’ʻʼ'`´]/g, '').replace(/\s+/g, ' ').trim().split(' ').sort().join(' '); },
  parseList(t) { return String(t || '').split(/\r?\n/).map(l => l.trim()).filter(Boolean).map(l => { const m = l.match(/^(.*?)[,;\t]\s*(\+?\d[\d\s()-]{6,})\s*$/); return { name: (m ? m[1] : l).replace(/^[\d.)\-\s]+(?=[A-Za-zА-Яа-я])/, '').trim().replace(/\s+/g, ' '), phone: m ? m[2].trim() : '' }; }).filter(x => x.name.length >= 3); },
  addList(gid, text, pd) { return this.parseList(text).map(it => { const s = this.newStudent({ name: it.name, parent_phone: it.phone, group: '', level: null, code: this.code() }); s.gid = gid; s.pay_day = pd; s.pay_start = pd ? Date.now() : 0; this.db.students[s.id] = s; return { id: s.id, name: s.name, code: s.code, parent_phone: s.parent_phone }; }); },
  newStudent(o) {
    return Object.assign({ id: 's' + Math.random().toString(36).slice(2, 9), name: '', code: '', parent_phone: '', group: '', level: null, created: Date.now(), last_seen: 0, active_sec: 0, sessions: 0, leaves: 0 }, o);
  },
  seed() {
    const now = Date.now(), H = 3600e3;
    const db = { students: {}, progress: {}, events: [], time: {}, messages: [], logins: [], tokens: {}, groups: [{ id: 'g1', name: '11-B kechki', pay_day: 22, created: now - 90 * 864e5 }, { id: 'g2', name: '10-A', pay_day: 5, created: now - 60 * 864e5 }], pay: {} };
    const a = this.newStudent({ id: 'sdemo', name: 'Madina Karimova', code: 'olma11', parent_phone: '+998 90 123 45 67', group: '', gid: 'g1', pay_day: 22, pay_start: Date.now() - 70 * 864e5 });
    const b = this.newStudent({ id: 'saziza', name: 'Aziza Rahimova', code: 'gul22', parent_phone: '+998 93 555 12 40', group: '', gid: 'g1', pay_day: 22, pay_start: Date.now() - 70 * 864e5, level: 'A1', last_seen: now - 5 * H, active_sec: 2830, sessions: 4, leaves: 2, created: now - 9 * 24 * H });
    const c = this.newStudent({ id: 'sjasur', name: 'Jasur Toshmatov', code: 'bola33', parent_phone: '+998 97 301 77 08', group: '', gid: 'g2', pay_day: 5, pay_start: Date.now() - 40 * 864e5, level: 'A0', last_seen: now - 50 * 60e3, active_sec: 1120, sessions: 1, leaves: 9, created: now - 2 * 24 * H });
    [a, b, c].forEach(s => { db.students[s.id] = s; });
    db.progress.saziza = {
      lessons: {
        l7: { sec: { grammar: now - 30 * H, vocabulary: now - 29 * H, speaking: now - 29 * H, listening: now - 28 * H, writing: now - 27 * H, test: now - 27 * H },
          test: { best: 7, total: 8, attempts: [{ at: now - 27 * H, score: 7, total: 8, rules: { aan: [3, 3], the: [2, 3], zero: [2, 2] }, leaves: 0 }] },
          writing: { submitted: { at: now - 27 * H, words: 58, text: 'I have a cat. The cat is white and very funny. I like apples and a orange. My mother buys the vegetables every Sunday. We eat an egg for breakfast.' } } },
        l8: { sec: { grammar: now - 6 * H } }
      }, srs: {}, last: { lesson: 8, section: 'grammar' }, awards: []
    };
    db.progress.sjasur = { lessons: { l1: { sec: { grammar: now - 2 * H }, test: { best: 4, total: 8, attempts: [{ at: now - H, score: 4, total: 8, rules: { abc: [2, 2], vowels: [1, 3], tion: [1, 3] }, leaves: 3 }] } } }, srs: {}, last: { lesson: 1, section: 'test' }, awards: [] };
    [5, 12, 19, 26, 31, 40, 52, 60, 71].forEach((m, i) => db.events.push({ sid: 'sjasur', type: 'leave', at: now - 2 * H + m * 60e3, value: [35, 120, 64, 210, 18, 95, 400, 51, 27][i], lesson: 1, section: i > 5 ? 'test' : 'grammar' }));
    db.events.push({ sid: 'saziza', type: 'leave', at: now - 28 * H, value: 42, lesson: 7, section: 'vocabulary' }, { sid: 'saziza', type: 'leave', at: now - 27.5 * H, value: 310, lesson: 7, section: 'writing' });
    db.time.saziza = { 'l7|grammar': 900, 'l7|vocabulary': 780, 'l7|speaking': 300, 'l7|listening': 420, 'l7|writing': 360, 'l7|test': 70 };
    db.time.sjasur = { 'l1|grammar': 640, 'l1|test': 480 };
    db.logins.push({ sid: 'saziza', at: now - 6 * H }, { sid: 'sjasur', at: now - 2 * H }, { sid: 'saziza', at: now - 30 * H });
    db.messages.push({ id: 1, sid: 'saziza', sender: 'student', text: 'Ustoz, uy vazifamni tekshirib bering. "a orange" to‘g‘rimi?', image: this.notebook(), lesson: 7, at: now - 5 * H, read: 0 });
    return db;
  },
  notebook() {
    try {
      const cv = document.createElement('canvas'); cv.width = 600; cv.height = 420; const x = cv.getContext('2d');
      x.fillStyle = '#FBFAF4'; x.fillRect(0, 0, 600, 420);
      x.strokeStyle = '#B9C8E8'; x.lineWidth = 1; for (let y = 70; y < 420; y += 34) { x.beginPath(); x.moveTo(0, y); x.lineTo(600, y); x.stroke(); }
      x.strokeStyle = '#E79AB0'; x.beginPath(); x.moveTo(70, 0); x.lineTo(70, 420); x.stroke();
      x.fillStyle = '#2A3B8F'; x.font = 'italic 24px Georgia, serif';
      ['Homework, Lesson 7', 'I have a cat. The cat is white.', 'I like apples and a orange.', 'My mother buys the vegetables', 'every Sunday. We eat an egg', 'for breakfast.'].forEach((t, i) => x.fillText(t, 84, 62 + i * 34));
      return cv.toDataURL('image/jpeg', .7);
    } catch (e) { return null; }
  },
  who(token) { return this.db.tokens[token] || null; },
  err(m, s = 400) { return { __error: m, status: s }; },
  summary(s) {
    const p = this.db.progress[s.id] || {}, ls = p.lessons || {};
    let done = 0, tests = [], last = p.last ? p.last.lesson : null;
    Object.values(ls).forEach(x => { if (x.sec && x.sec.test) done++; if (x.test && x.test.total) tests.push(x.test.best / x.test.total); });
    return { done, test: tests.length ? Math.round(tests.reduce((a, b) => a + b, 0) / tests.length * 100) : null, last, feedback: p.feedback || {} };
  },
  unreadFor(sid, sender) { return this.db.messages.filter(m => m.sid === sid && m.sender === sender && !m.read).length; },
  handle(method, path, body, token) {
    const db = this.db, me = this.who(token);
    const pub = s => ({ id: s.id, name: s.name, level: s.level, group: s.group });
    let m;
    if (path === '/login' && method === 'POST') {
      const nm = String(body.name || '').trim().replace(/\s+/g, ' '), code = String(body.code || '').trim().toLowerCase().replace(/\s+/g, '');
      if (nm.length < 3) return this.err('Ism va familiyani yozing.');
      if (!code) return this.err('Ustozingiz bergan kodni yozing.');
      const s = Object.values(db.students).find(x => String(x.code).toLowerCase() === code);
      if (!s || this.normName(s.name) !== this.normName(nm)) return this.err('Ism yoki kod noto‘g‘ri. Ustozingizdan so‘rang.', 401);
      const t = 't' + Math.random().toString(36).slice(2); db.tokens[t] = { role: 'student', sid: s.id };
      s.sessions++; s.last_seen = Date.now(); db.logins.push({ sid: s.id, at: Date.now() }); this.save();
      return { token: t, student: pub(s) };
    }
    if (path === '/teacher/login' && method === 'POST') {
      if (cyrb53('er|' + String(body.password || '').trim(), 7) !== '434uhcc8s6') return this.err('Parol noto‘g‘ri.', 401);
      const t = 'T' + Math.random().toString(36).slice(2); db.tokens[t] = { role: 'teacher' }; this.save();
      return { token: t };
    }
    if (!me) return this.err('Qaytadan kiring.', 401);
    if (me.role === 'student') {
      const s = db.students[me.sid]; if (!s) return this.err('Qaytadan kiring.', 401);
      if (path === '/me') return { student: pub(s), progress: db.progress[s.id] || {}, unread: this.unreadFor(s.id, 'teacher') };
      if (path === '/level') { s.level = body.level; this.save(); return { ok: true }; }
      if (path === '/progress') { db.progress[s.id] = body.progress; this.save(); return { ok: true }; }
      if (path === '/beat') {
        s.active_sec += Math.max(0, Math.min(900, body.sec | 0)); s.last_seen = Date.now();
        const k = `l${body.lesson || 0}|${body.section || 'home'}`; db.time[s.id] = db.time[s.id] || {}; db.time[s.id][k] = (db.time[s.id][k] || 0) + (body.sec | 0);
        (body.leaves || []).forEach(l => { s.leaves++; db.events.push({ sid: s.id, type: 'leave', at: l.at, value: l.away, lesson: l.lesson, section: l.section, test: l.test ? 1 : 0 }); });
        this.save(); return { ok: true, unread: this.unreadFor(s.id, 'teacher') };
      }
      if (path === '/messages' && method === 'GET') {
        db.messages.forEach(x => { if (x.sid === s.id && x.sender === 'teacher') x.read = 1; }); this.save();
        return { messages: db.messages.filter(x => x.sid === s.id) };
      }
      if (path === '/messages' && method === 'POST') {
        const msg = { id: Date.now(), sid: s.id, sender: 'student', text: String(body.text || '').slice(0, 2000), image: body.image || null, lesson: body.lesson || null, at: Date.now(), read: 0 };
        db.messages.push(msg); this.save(); return { message: msg };
      }
      return this.err('Topilmadi', 404);
    }
    /* teacher */
    if (path === '/t/me') return { role: 'admin', name: 'Bosh ustoz' };
    if (path === '/t/teachers') return method === 'GET' ? { teachers: [] } : this.err('Namuna rejimida ustoz qo‘shib bo‘lmaydi.');
    if (path === '/t/overview') {
      db.groups = db.groups || []; db.pay = db.pay || {};
      return { role: 'admin', students: Object.values(db.students).map(s => Object.assign({}, s, { paid: db.pay[s.id] || [], gname: (db.groups.find(g => g.id === s.gid) || {}).name || '', first_login: Math.min.apply(null, db.logins.filter(l => l.sid === s.id).map(l => l.at).concat([Infinity])) === Infinity ? 0 : Math.min.apply(null, db.logins.filter(l => l.sid === s.id).map(l => l.at)), unread: this.unreadFor(s.id, 'student'), summary: this.summary(s) })).sort((a, b) => b.last_seen - a.last_seen) };
    }
    if (path === '/t/students' && method === 'POST') {
      if (!String(body.name || '').trim()) return this.err('Ismni yozing.');
      const s = this.newStudent({ name: body.name.trim(), parent_phone: body.parent_phone || '', group: body.group || '', level: body.level || null, code: this.code() });
      s.gid = body.gid || ''; s.pay_day = +body.pay_day || 0; s.pay_start = s.pay_day ? Date.now() : 0;
      db.students[s.id] = s; this.save(); return { student: s };
    }
    if ((m = path.match(/^\/t\/students\/([\w-]+)$/))) {
      const s = db.students[m[1]]; if (!s) return this.err('O‘quvchi topilmadi', 404);
      if (method === 'PATCH') { ['name', 'parent_phone', 'group', 'level', 'gid'].forEach(k => { if (k in body) s[k] = body[k] || (k === 'level' ? null : ''); }); if ('pay_day' in body) { const pd = Math.max(0, Math.min(31, +body.pay_day || 0)); if (pd !== (s.pay_day || 0)) s.pay_start = pd ? Date.now() : 0; s.pay_day = pd; } this.save(); return { student: s }; }
      if (method === 'DELETE') { delete db.students[s.id]; delete db.progress[s.id]; db.messages = db.messages.filter(x => x.sid !== s.id); this.save(); return { ok: true }; }
      return {
        paid: (db.pay || {})[s.id] || [],
        student: Object.assign({}, s, { first_login: Math.min.apply(null, db.logins.filter(l => l.sid === s.id).map(l => l.at).concat([Date.now()])) }), progress: db.progress[s.id] || {}, leaves: db.events.filter(e => e.sid === s.id && e.type === 'leave').sort((a, b) => b.at - a.at).slice(0, 60),
        time: Object.entries(db.time[s.id] || {}).map(([k, v]) => { const [l, sec] = k.split('|'); return { lesson: +l.slice(1), section: sec, sec: v }; }),
        messages: db.messages.filter(x => x.sid === s.id), logins: db.logins.filter(x => x.sid === s.id).sort((a, b) => b.at - a.at).slice(0, 20)
      };
    }
    if ((m = path.match(/^\/t\/students\/([\w-]+)\/pay$/)) && method === 'POST') {
      db.pay = db.pay || {}; const a = db.pay[m[1]] = (db.pay[m[1]] || []).filter(x => x !== body.ym); if (body.paid) a.push(body.ym); this.save(); return { ok: true };
    }
    db.groups = db.groups || [];
    if (path === '/t/groups' && method === 'GET') return { groups: db.groups.map(g => Object.assign({}, g, { n: Object.values(db.students).filter(s => s.gid === g.id).length })), ungrouped: Object.values(db.students).filter(s => !s.gid).length };
    if (path === '/t/groups' && method === 'POST') {
      const name = String(body.name || '').trim(); if (!name) return this.err('Guruhga nom bering.');
      const g = { id: 'g' + Math.random().toString(36).slice(2, 8), name, pay_day: Math.max(0, Math.min(31, +body.pay_day || 0)), created: Date.now() };
      db.groups.push(g); const students = this.addList(g.id, body.list, g.pay_day); this.save(); return { group: g, students };
    }
    if ((m = path.match(/^\/t\/groups\/([\w-]+)$/))) {
      if (m[1] === 'none') return { group: { id: 'none', name: 'Guruhsiz o‘quvchilar', pay_day: 0 }, students: Object.values(db.students).filter(s => !s.gid).map(s => Object.assign({}, s, { paid: (db.pay || {})[s.id] || [] })) };
      const g = db.groups.find(x => x.id === m[1]); if (!g) return this.err('Guruh topilmadi', 404);
      if (method === 'DELETE') { db.groups = db.groups.filter(x => x !== g); Object.values(db.students).forEach(s => { if (s.gid === g.id) s.gid = ''; }); this.save(); return { ok: true }; }
      if (method === 'PATCH') {
        if (body.name != null && String(body.name).trim()) g.name = String(body.name).trim();
        if ('pay_day' in body) { g.pay_day = Math.max(0, Math.min(31, +body.pay_day || 0)); if (body.apply_all) Object.values(db.students).forEach(s => { if (s.gid === g.id) { s.pay_day = g.pay_day; s.pay_start = g.pay_day ? Date.now() : 0; } }); }
        const students = this.addList(g.id, body.list, g.pay_day); this.save(); return { ok: true, students };
      }
      return { group: g, students: Object.values(db.students).filter(s => s.gid === g.id).map(s => Object.assign({}, s, { paid: (db.pay || {})[s.id] || [] })) };
    }
    if ((m = path.match(/^\/t\/students\/([\w-]+)\/code$/))) { const s = db.students[m[1]]; if (!s) return this.err('Topilmadi', 404); s.code = this.code(); this.save(); return { code: s.code }; }
    if ((m = path.match(/^\/t\/students\/([\w-]+)\/messages$/))) {
      const s = db.students[m[1]]; if (!s) return this.err('Topilmadi', 404);
      if (method === 'GET') { db.messages.forEach(x => { if (x.sid === s.id && x.sender === 'student') x.read = 1; }); this.save(); return { messages: db.messages.filter(x => x.sid === s.id) }; }
      const msg = { id: Date.now(), sid: s.id, sender: 'teacher', text: String(body.text || '').slice(0, 2000), image: body.image || null, at: Date.now(), read: 0 };
      db.messages.push(msg); this.save(); return { message: msg };
    }
    if (path === '/t/inbox') {
      const map = {};
      db.messages.forEach(x => { const t = map[x.sid] = map[x.sid] || { sid: x.sid, last_at: 0, last_text: '', unread: 0 }; if (x.at > t.last_at) { t.last_at = x.at; t.last_text = x.text || (x.image ? '📷 Rasm' : ''); } if (x.sender === 'student' && !x.read) t.unread++; });
      return { threads: Object.values(map).map(t => Object.assign(t, { name: (db.students[t.sid] || {}).name || '—' })).sort((a, b) => b.last_at - a.last_at) };
    }
    if (path === '/t/logins') return { logins: db.logins.slice().sort((a, b) => b.at - a.at).slice(0, 60).map(l => Object.assign({}, l, { name: (db.students[l.sid] || {}).name || '—' })) };
    return this.err('Topilmadi', 404);
  }
};

/* =====================================================================
   VOICE — native neural voice from the server (Cloudflare Workers AI,
   cached once per sentence). Without a server: the best browser voice.
   ===================================================================== */
/* ---------------- media: rasmlar + oldindan yozilgan ovozlar (media.js) ---------------- */
const cyrb53 = (str, seed = 0) => { let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed; for (let i = 0, ch; i < str.length; i++) { ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); } h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909); h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909); return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36); };
const podVoice = (p, i) => p.v[i] + (i === 1 && p.v[0] === p.v[1] ? '2' : '');
const M = () => window.MEDIA || null;
const PAL = ['#ECE9FA', '#FCE7EF', '#FBEBDD', '#FDF0DB', '#E3ECFB', '#F2ECE3'];
const NEG = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#fff" stroke="#D92D4F" stroke-width="2.6"/><path d="M5.8 5.8l12.4 12.4" stroke="#D92D4F" stroke-width="2.6" stroke-linecap="round"/></svg>';
function ico(id) { const m = M(), d = m && m.i[id]; return d ? `<svg class="a-${d[2] || 'float'}" viewBox="0 0 ${d[0]} ${d[0]}" aria-hidden="true">${d[1]}</svg>` : ''; }
const pic = (n, kind, i) => { const m = M(); return m && m.l[n] && m.l[n][kind] ? m.l[n][kind][i] || null : null; };
const ACTS = [
  ['fight', /\b(fight|fights|fighting|fought|punch\w*|wrestl\w*|quarrel\w*|argu(e|es|ed|ing)|argument|kick\w*|slap\w*|box(es|ing)?|battle\w*|attack\w*)\b/i],
  ['hug', /\b(hug\w*|kiss\w*|meet|meets|meeting|met|greet\w*|welcome\w*|shake hands|handshake|marr(y|ied|iage)|wedding|together|each other|friends?)\b/i],
  ['cry', /\b(cry|cries|cried|crying|sad|tears?|sob\w*|upset|lonely|miss|missed)\b/i],
  ['laugh', /\b(laugh\w*|smil\w*|giggl\w*|joke\w*|funny|happy|glad|enjoy\w*|fun|excited|celebrat\w*|birthday|party|cheer\w*|win|wins|won|winning)\b/i],
  ['sleep', /\b(sleep\w*|asleep|nap|naps|tired|bed|dream\w*|snor\w*|yawn\w*|wake|woke|night)\b/i],
  ['eat', /\b(eat|eats|ate|eating|eaten|breakfast|lunch|dinner|supper|meal|cook\w*|drink\w*|drank|sip|hungry|thirsty|bake\w*|taste\w*|restaurant|café|cafe)\b/i],
  ['talk', /\b(talk\w*|speak\w*|spoke|say|says|said|tell\w*|told|chat\w*|call\w*|phone\w*|ask\w*|shout\w*|discuss\w*|explain\w*|answer\w*|question|interview|conversation)\b/i],
  ['dance', /\b(danc\w*|sing|sings|sang|singing|song|music|concert|guitar|piano|play the)\b/i],
  ['swim', /\b(swim\w*|swam|dive|diving|surf\w*|beach|sea|river|lake|pool|sail\w*|boat|fish|fishing|wave|waves)\b/i],
  ['run', /\b(run|runs|running|ran|race|racing|chase\w*|rush\w*|hurry|hurried|late|jog\w*|sprint\w*|fast|escape\w*)\b/i],
  ['play', /\b(play|plays|played|playing|game|games|football|soccer|tennis|basketball|ball|volleyball|chess|toy|toys|sport|sports|match|team)\b/i],
  ['read', /\b(read|reads|reading|write|writes|wrote|writing|written|study|studies|studied|studying|homework|book|books|letter|exam|test|essay|learn\w*|teach\w*|lesson|school|class|email|newspaper)\b/i],
  ['drive', /\b(drive|drives|drove|driving|driven|bus|train|car|taxi|bike|bicycle|ride|rode|riding|travel\w*|trip|journey|fly|flies|flew|flying|plane|flight|airport|station|road|traffic|ship|tram|metro)\b/i],
  ['jump', /\b(jump\w*|climb\w*|bounce\w*|hop|hops|hopped|skip\w*|fall|falls|fell|fallen|drop\w*|throw\w*|threw|catch|caught)\b/i],
  ['walk', /\b(walk\w*|stroll\w*|hike|hiking|go|goes|going|went|gone|come|comes|came|coming|move\w*|leave|left|arrive\w*|enter\w*|follow\w*|visit\w*|street)\b/i]
];
const actOf = t => { if (!t) return ''; const s = String(t).replace(/[*\[\]|]/g, ' '); for (const [k, re] of ACTS) if (re.test(s)) return k; return ''; };
function scene(o, seed = 0, cls = '', txt = '') {
  const bg = PAL[Math.abs(seed) % PAL.length];
  if (!o) return `<div class="scn ${cls} is-empty" style="--sbg:${bg}" aria-hidden="true"><i class="scn-blob"></i></div>`;
  let inner = '';
  const act0 = o.m && o.m.length && txt ? actOf(txt) : '';
  let ms = o.m ? o.m.slice() : [];
  if ((act0 === 'fight' || act0 === 'hug') && ms.length === 1) { const d = M() && M().i[ms[0]]; if (d && /^(walk|hop|run|joy|float)$/.test(d[2] || 'float')) ms.push(ms[0]); }   // bitta odam bo‘lsa, ikkinchisini qo‘shamiz
  if (ms.length) inner = `<span class="scn-m n${Math.min(ms.length, 5)}">${ms.map(ico).join('')}</span>`;
  else if (o.s) inner = `<span class="scn-sw" style="--sw:#${o.s}"></span>`;
  else if (o.l) inner = `<span class="scn-type ${o.l.length <= 3 ? 't-s' : o.l.length <= 6 ? 't-m' : 't-l'}">${esc(o.l)}</span>`;
  const lab = (o.m || o.s) && o.l ? `<span class="scn-lab">${esc(o.l)}</span>` : '';
  const badge = o.b ? `<span class="scn-b">${ico(o.b)}${o.n ? `<span class="scn-x">${NEG}</span>` : ''}</span>`
    : o.bs ? `<span class="scn-b"><i class="scn-dot" style="--sw:#${o.bs}"></i></span>` : o.n ? `<span class="scn-b scn-nb">${NEG}</span>` : '';
  const act = act0;
  return `<div class="scn ${cls}${act ? ' act-' + act : ''}" style="--sbg:${bg}" aria-hidden="true"><i class="scn-blob"></i>${inner}${badge}${lab}${o.q ? '<span class="scn-q">?</span>' : ''}</div>`;
}
const Media = {
  packs: new Map(), urls: new Map(),
  entry(text, v) { const m = M(); return m && m.a ? m.a.k[cyrb53(v + '|' + text)] || null : null; },
  pack(pi) {
    if (this.packs.has(pi)) return this.packs.get(pi);
    const id = M().a.p[pi];
    const p = (API.mode === 'server'
      ? fetch('/api/audio/' + id).then(r => r.ok ? r.text() : null).then(t => { if (!t) return null; const s = atob(t.trim()); const b = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return b.buffer; })
      : fetch('audio/' + id + '.mp3').then(r => r.ok ? r.arrayBuffer() : null)
    ).catch(() => null);
    this.packs.set(pi, p);
    p.then(b => { if (!b) setTimeout(() => this.packs.delete(pi), 60000); });
    return p;
  },
  async url(text, v) {
    const e = this.entry(text, v); if (!e) return null;
    const k = v + '|' + text; if (this.urls.has(k)) return this.urls.get(k);
    const buf = await this.pack(e[0]); if (!buf) return null;
    const u = URL.createObjectURL(new Blob([buf.slice(e[1], e[1] + e[2])], { type: 'audio/mpeg' }));
    this.urls.set(k, u); return u;
  },
  preload(n) { const m = M(); if (m && m.a && m.a.L[n]) m.a.L[n].forEach(pi => this.pack(pi)); }
};
let mediaHooks = [];
const toB64 = u8 => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1] || ''); r.onerror = rej; r.readAsDataURL(new Blob([u8])); });
async function unzip(file) {      // ZIP (stored yoki deflate) — markaziy katalog orqali
  const buf = new Uint8Array(await file.arrayBuffer()), dv = new DataView(buf.buffer), out = [];
  let e = buf.length - 22; while (e >= 0 && dv.getUint32(e, true) !== 0x06054b50) e--;
  if (e < 0) throw new Error('zip');
  const cnt = dv.getUint16(e + 10, true); let p = dv.getUint32(e + 16, true);
  for (let i = 0; i < cnt; i++) {
    if (dv.getUint32(p, true) !== 0x02014b50) break;
    const meth = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true), nl = dv.getUint16(p + 28, true), xl = dv.getUint16(p + 30, true), cl = dv.getUint16(p + 32, true), lo = dv.getUint32(p + 42, true);
    const name = new TextDecoder().decode(buf.subarray(p + 46, p + 46 + nl));
    const st = lo + 30 + dv.getUint16(lo + 26, true) + dv.getUint16(lo + 28, true);
    let data = buf.subarray(st, st + csize);
    if (meth === 8) data = new Uint8Array(await new Response(new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());
    if (meth === 0 || meth === 8) out.push({ name, data });
    p += 46 + nl + xl + cl;
  }
  return out;
}
window.mediaReady = () => { mediaHooks.forEach(f => { try { f(); } catch (e) {} }); };

const Voice = {
  urls: new Map(), audio: null, token: 0, serverDownUntil: 0,
  pickBrowser(v) {
    let list = []; try { list = speechSynthesis.getVoices().filter(x => /^en[-_]/i.test(x.lang)); } catch (e) {}
    if (!list.length) return null;
    const F = /aria|jenny|ava|emma|michelle|samantha|karen|moira|serena|allison|susan|zira|libby|sonia|female|victoria|kate|fiona/i;
    const MV = /guy|ryan|daniel|tom|alex|david|mark|george|christopher|eric|andrew|brian|male|arthur|oliver/i;
    const bad = /espeak|fred|zarvox|albert|bells|boing|bubbles|cellos|jester|organ|trinoids|whisper|wobble|superstar|grandma|grandpa|rocko|shelley|sandy|flo|eddy|reed|junior|ralph|bahh|hysterical/i;
    const score = x => (/natural|neural|online/i.test(x.name) ? 100 : 0) + (/google (us|uk) english/i.test(x.name) ? 60 : 0) + (/enhanced|premium/i.test(x.name) ? 40 : 0)
      + (/en[-_]US/i.test(x.lang) ? 12 : /en[-_]GB/i.test(x.lang) ? 9 : 0) + ((v[0] === 'm' ? MV : F).test(x.name) ? 25 : 0) - (bad.test(x.name) ? 200 : 0) + (x.localService ? 0 : 5);
    return list.slice().sort((a, b) => score(b) - score(a))[0];
  },
  async url(text, v) {
    const k = v + '|' + text;
    const rec = await Media.url(text, v); if (rec) return rec;
    if (this.urls.has(k)) return this.urls.get(k);
    if (API.mode !== 'server' || Date.now() < this.serverDownUntil || !API.token) return null;
    const p = fetch('/api/tts', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + API.token }, body: JSON.stringify({ text, voice: v }) })
      .then(r => { if (!r.ok) { if (r.status >= 500) this.serverDownUntil = Date.now() + 120000; return null; } return r.blob(); })
      .then(b => (b && b.size > 200 ? URL.createObjectURL(b) : null)).catch(() => null);
    this.urls.set(k, p);
    const u = await p; if (!u) this.urls.delete(k);
    return u;
  },
  prefetch(text, v = 'f') { this.url(speakText(text), v); },
  stop() {
    this.token++;
    if (this.audio) { try { this.audio.pause(); } catch (e) {} }
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
    $$('.play.is-on, .play.is-loading').forEach(b => b.classList.remove('is-on', 'is-loading'));
  },
  async play(text, v, rate, tk) {
    text = speakText(text); if (!text) return;
    const u = await this.url(text, v);
    if (tk !== this.token) return;
    $$('.play.is-loading').forEach(b => b.classList.remove('is-loading'));
    if (u) {
      const a = this.audio || (this.audio = new Audio());
      a.src = u; a.playbackRate = rate; try { a.preservesPitch = true; } catch (e) {}
      return new Promise(res => { a.onended = a.onerror = () => res(); a.play().catch(() => res()); });
    }
    if (!window.speechSynthesis) { toast('Bu brauzerda ovoz ishlamaydi. Chrome yoki Edge’da oching.'); return; }
    return new Promise(res => {
      const ut = new SpeechSynthesisUtterance(text);
      const bv = this.pickBrowser(v); if (bv) { ut.voice = bv; ut.lang = bv.lang; } else ut.lang = 'en-US';
      ut.rate = .9 * rate; ut.onend = ut.onerror = () => res();
      try { speechSynthesis.speak(ut); } catch (e) { res(); }
    });
  },
  async say(text, opts = {}) {
    const btn = opts.btn, was = btn && btn.classList.contains('is-on');
    this.stop(); if (was) return;
    const tk = this.token;
    if (btn) btn.classList.add('is-on', 'is-loading');
    await this.play(text, opts.v || 'f', opts.rate || 1, tk);
    if (btn && tk === this.token) btn.classList.remove('is-on', 'is-loading');
  },
  async seq(lines, { rate = 1, from = 0, onLine, gap = 260 } = {}) {
    this.stop(); const tk = this.token;
    for (let i = from; i < lines.length; i++) {
      if (tk !== this.token) return false;
      onLine && onLine(i);
      if (lines[i + 1]) this.url(speakText(lines[i + 1][0]), lines[i + 1][1]);
      await this.play(lines[i][0], lines[i][1], rate, tk);
      if (tk !== this.token) return false;
      if (gap) await sleep(gap);
    }
    onLine && onLine(lines.length);
    return true;
  }
};
try { if (window.speechSynthesis) speechSynthesis.getVoices(); } catch (e) {}
const playBtn = (text, v = 'f', cls = '') => `<button type="button" class="play ${cls}" data-act="say" data-say="${esc(speakText(text))}" data-v="${v}" aria-label="Tinglash">${ICON.sound}</button>`;

/* =====================================================================
   STATE + PROGRESS (saved to server, debounced)
   ===================================================================== */
const S = { student: null, P: null, unread: 0, view: null, test: null };
function blankP() { return { lessons: {}, srs: {}, last: null, awards: [], streak: { day: null, n: 0 } }; }
function LP(n) { const k = 'l' + n; S.P.lessons[k] = S.P.lessons[k] || { sec: {} }; return S.P.lessons[k]; }
let saveT;
function saveP(now) {
  clearTimeout(saveT);
  const go = () => API.call('PUT', '/progress', { progress: S.P }).catch(() => {});
  if (now) go(); else saveT = setTimeout(go, 2000);
}
function markSection(n, sec) {
  const lp = LP(n);
  if (!lp.sec[sec]) { lp.sec[sec] = Date.now(); saveP(); }
}
function bumpStreak() {
  const st = S.P.streak || (S.P.streak = { day: null, n: 0 }), today = dayKey();
  if (st.day === today) return;
  const y = dayKey(Date.now() - 864e5);
  st.n = st.day === y ? st.n + 1 : 1; st.day = today; saveP();
}

/* =====================================================================
   SRS — spaced repetition (SM-2 style, simplified)
   ===================================================================== */
const SRS = {
  add(words, n) {          // «Yodladim» bosilganda: 1-takrorlash 3 kundan keyin
    let added = 0; const now = Date.now();
    words.forEach(w => { if (!S.P.srs[w[0]]) { S.P.srs[w[0]] = { l: n, m: 1, due: now + 3 * 864e5, ivl: 3, ef: 2.5, k: 0, lap: 0 }; added++; } });
    if (added) saveP();
    return added;
  },
  remove(words) { let r = 0; words.forEach(w => { const c = S.P.srs[w[0]]; if (c && c.m && !c.k && !c.lap) { delete S.P.srs[w[0]]; r++; } }); if (r) saveP(); return r; },
  due(filter) {
    const now = Date.now();
    return Object.entries(S.P.srs).filter(([w, c]) => c.m && c.due <= now && WORDS[w] && (!filter || filter(c))).sort((a, b) => a[1].due - b[1].due).map(([w]) => w);
  },
  dueCount() { return this.due().length; },
  next(c, q) {
    const n = Object.assign({}, c), now = Date.now(), D = 864e5;
    if (q === 0) { n.k = 0; n.lap++; n.ivl = 0; n.ef = Math.max(1.3, n.ef - .2); n.due = now + 10 * 60e3; return n; }
    if (n.k === 0) n.ivl = n.lap ? 3 : 7;          // 3 kun → 7 kun → 14 kun → …
    else if (n.k === 1) n.ivl = q === 1 ? 10 : 14;
    else n.ivl = Math.max(n.ivl + 1, Math.round(n.ivl * (q === 1 ? 1.2 : q === 2 ? n.ef : n.ef * 1.35)));
    n.ef = Math.max(1.3, n.ef + (q === 1 ? -.15 : q === 3 ? .15 : 0));
    n.k++; n.due = now + n.ivl * D - 3 * 3600e3;
    return n;
  },
  label(c, q) { const n = this.next(c, q); return q === 0 ? '10 daq' : `${n.ivl} kun`; },
  rate(w, q) { if (!S.P.srs[w]) return; S.P.srs[w] = this.next(S.P.srs[w], q); saveP(); }
};

/* =====================================================================
   TRACKING — active time (tab visible + focused + not idle 2 min),
   every leave of the site, per lesson & section. Sent once a minute.
   ===================================================================== */
const Track = {
  pending: 0, leaves: [], awayAt: null, lastInput: Date.now(), ignoreUntil: 0, inTest: false,
  where() { const v = S.view || {}; return { lesson: v.lesson || 0, section: v.section || v.name || 'home' }; },
  start() {
    setInterval(() => this.tick(), 1000);
    setInterval(() => this.flush(), 60000);
    document.addEventListener('visibilitychange', () => (document.visibilityState === 'hidden' ? this.away() : this.back()));
    window.addEventListener('blur', () => this.away());
    window.addEventListener('focus', () => this.back());
    ['pointerdown', 'keydown', 'pointermove', 'touchstart', 'wheel', 'scroll'].forEach(ev => window.addEventListener(ev, () => {
      this.lastInput = Date.now();
      if (this.awayAt && document.visibilityState === 'visible' && document.hasFocus()) this.back();
    }, { passive: true }));
    window.addEventListener('pagehide', () => this.flush(true));
  },
  active() { return S.student && document.visibilityState === 'visible' && document.hasFocus() && Date.now() - this.lastInput < 120000 && !this.awayAt; },
  tick() {
    if (!S.student) return;
    const on = this.active();
    if (on) { this.pending++; const k = 'er_day_' + dayKey(); store.set(k, (store.get(k, 0) || 0) + 1); }
    const el = $('#timeTxt'); if (el) el.textContent = `${Math.floor((store.get('er_day_' + dayKey(), 0) || 0) / 60)} daq`;
    const c = $('#timeChip'); if (c) c.classList.toggle('is-idle', !on);
  },
  away() { if (!S.student || this.awayAt || Date.now() < this.ignoreUntil) return; this.awayAt = Date.now(); },
  back() { this.awayAt = null; },

  flush(final) {
    if (!S.student || (!this.pending && !this.leaves.length)) return;
    const w = this.where(), body = { sec: this.pending, lesson: w.lesson, section: w.section, leaves: this.leaves };
    this.pending = 0; this.leaves = [];
    if (final) { API.beacon('/beat', body); if (S.P) API.beacon('/progress', { progress: S.P }); return; }
    API.call('POST', '/beat', body).then(r => { if (r && typeof r.unread === 'number') setUnread(r.unread); }).catch(() => {});
  }
};
function setUnread(n) { S.unread = n; const b = $('#chatBadge'); if (b) { b.hidden = !n; b.textContent = n; } }

/* image → compressed JPEG data URL (for notebook photos) */
async function compressImage(file, max = 1400, q = .72) {
  const src = await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(file); });
  const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });
  const s = Math.min(1, max / Math.max(img.width, img.height));
  const cv = document.createElement('canvas'); cv.width = Math.round(img.width * s); cv.height = Math.round(img.height * s);
  cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
  return cv.toDataURL('image/jpeg', q);
}
function lightbox(src) {
  const d = document.createElement('div'); d.className = 'lightbox'; d.innerHTML = `<img src="${esc(src)}" alt="Rasm">`;
  d.addEventListener('click', () => d.remove()); document.body.appendChild(d);
}

/* =====================================================================
   WRITING CHECKER — common A0–A2 mistakes (hints, not grades)
   ===================================================================== */
function analyzeText(t, lesson) {
  const text = (t || '').trim();
  const words = (text.match(/[A-Za-z’'-]+/g) || []).length;
  const sents = text ? text.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean) : [];
  const capsOk = sents.length > 0 && sents.every(s => /^["“'(—–-]?\s*[A-Z0-9]/.test(s)) && /[.!?]["”’)]?$/.test(text);
  const used = lesson ? (lesson.v || []).filter(w => w[0].split(' / ').some(part => { const k = part.replace(/^the\s+/i, '').split(/[\s(]/)[0].replace(/[^a-z-]/gi, ''); return k.length > 1 && new RegExp('\\b' + k + '(s|es|ed|ing|d)?\\b', 'i').test(text); })).map(w => w[0]) : [];
  const checks = lesson && lesson.w && lesson.w.c ? lesson.w.c.map(([label, re, min]) => { const n = (text.match(new RegExp(re, 'gi')) || []).length; return { label, n, min, ok: n >= min }; }) : [];
  const JOBS = 'doctor|teacher|student|engineer|nurse|driver|pilot|dentist|lawyer|programmer|designer|farmer|singer|dancer|builder|manager|accountant|policeman|businessman|worker|artist|actor|journalist|scientist|vet|mechanic|cook|waiter|shop assistant';
  const FAM = 'mother|father|mum|mom|dad|sister|brother|grandmother|grandfather|aunt|uncle|cousin|friend|teacher';
  const ADJ = 'very|kind|funny|strict|friendly|tall|short|young|old|beautiful|happy|clever|smart|hungry|tired|busy|late|cold|hot';
  const rules = [
    [/\bI\s+have\s+(\d+|[a-z]+(?:-[a-z]+)?)\s+years?\b/i, m => `«${m[0]}» → <b>I am ${m[1]}</b>. Yosh to be bilan aytiladi.`],
    [new RegExp(`\\b(is|am)\\s+(${JOBS})\\b`, 'i'), m => `«${m[0]}» → <b>${m[1]} ${/^[aeiou]/i.test(m[2]) ? 'an' : 'a'} ${m[2]}</b>. Kasbdan oldin a / an.`],
    [/\ba\s+(aunt|uncle|engineer|English|old|only|apple|orange|egg|hour|umbrella|elephant|actor|artist|island|ice|interesting|ugly|onion)\b/i, m => `«${m[0]}» → <b>an ${m[1]}</b>. Unli tovushdan oldin an.`],
    [/\ban\s+(doctor|teacher|student|brother|sister|big|nurse|good|small|university|uniform|cat|dog|house|little|young|beautiful|banana|car|book|pen|year|European)\b/i, m => `«${m[0]}» → <b>a ${m[1]}</b>. Undosh tovushdan oldin a.`],
    [new RegExp(`(?<!\\b(?:is|are|am|was|were)\\s+)\\b(my (?:${FAM})|he|she)\\s+(${ADJ}|a|an)\\b`, 'i'), m => `«${m[0]}» → <b>${m[1]} is ${m[2]}</b>. To be tushib qolgan.`],
    [new RegExp(`\\b(he|she|it|my (?:${FAM}))\\s+(are|am)\\b`, 'i'), m => `«${m[0]}» → <b>${m[1]} is</b>. Birlikda is.`],
    [/\b(we|they|you|my parents|my friends|my brothers|my sisters)\s+(is|am)\b/i, m => `«${m[0]}» → <b>${m[1]} are</b>. Ko‘plikda are.`],
    [/\bI\s+(is|are)\b/, () => `«I is / I are» → <b>I am</b>.`],
    [/\b(he|she|it)\s+(have|do|go|like|live|work|play|want|watch|read)\b(?!\s+(?:to|got))/i, m => `«${m[0]}» → <b>${m[1]} ${({ have: 'has', do: 'does', go: 'goes', watch: 'watches' })[m[2].toLowerCase()] || m[2] + 's'}</b>. He / she / it bilan fe’lga -s qo‘shiladi.`],
    [/\b(he|she|it)\s+don[’']t\b/i, m => `«${m[0]}» → <b>${m[1]} doesn’t</b>.`],
    [/\b(did|didn[’']t)\s+(went|saw|ate|came|had|was|bought|made|took|got|played|watched|visited)\b/i, m => `«${m[0]}» → did dan keyin fe’lning 1-shakli: <b>${m[1]} ${({ went: 'go', saw: 'see', ate: 'eat', came: 'come', had: 'have', was: 'be', bought: 'buy', made: 'make', took: 'take', got: 'get' })[m[2].toLowerCase()] || m[2].replace(/ed$/, '')}</b>.`],
    [/\b(can|must|should|will|could|may)\s+to\s+\w+/i, m => `«${m[0]}» → modal fe’ldan keyin <b>to</b> qo‘yilmaydi.`],
    [/\b(more)\s+(\w+er)\b/i, m => `«${m[0]}» → <b>${m[2]}</b>. -er va more birga ishlatilmaydi.`],
    [/(^|[\s.!?(])i(?=[\s’',.!?]|$)/, () => `Kichik «i» → <b>I</b>. «Men» har doim katta harf bilan yoziladi.`]
  ];
  const issues = [];
  rules.forEach(([re, fn]) => { const m = text.match(re); if (m) issues.push(fn(m)); });
  return { words, sents: sents.length, capsOk, used, checks, issues };
}

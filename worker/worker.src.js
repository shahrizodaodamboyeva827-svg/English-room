/* =====================================================================
   ENGLISH ROOM — Cloudflare Worker (bitta fayl)
   Kerakli sozlamalar (Cloudflare → Workers → Settings → Bindings):
     DB  — D1 database (jadvallar avtomatik yaratiladi)
     AI  — Workers AI (native ovoz uchun)
   Variables:
     TEACHER_PASSWORD — Teacher panel paroli
   ===================================================================== */
const HTML = "__HTML__";
const MEDIA_JS = "__MEDIA__";   // rasmlar va ovoz indeksi
const VOICES = { f: 'thalia', m: 'apollo' };   // Deepgram Aura-2: aniq Amerika talaffuzi
const DEFAULT_PASS = 'e.room123';   // TEACHER_PASSWORD o‘rnatilsa, o‘sha ishlaydi
let schemaReady = false;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    try {
      if (url.pathname.startsWith('/api/')) return await api(request, env, ctx, url);
      if (url.pathname === '/media.js') return new Response(MEDIA_JS, { headers: { 'content-type': 'application/javascript; charset=utf-8', 'cache-control': 'public, max-age=31536000, immutable' } });
      return new Response(HTML, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache', 'permissions-policy': 'microphone=(self)' } });
    } catch (e) {
      return json({ error: 'Server xatosi: ' + ((e && e.message) || e) }, 500);
    }
  }
};

/* ---------------- helpers ---------------- */
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
const err = (msg, status = 400) => json({ error: msg }, status);
const now = () => Date.now();
function rid(n = 24) { const a = new Uint8Array(n); crypto.getRandomValues(a); return Array.from(a, b => (b % 36).toString(36)).join(''); }
const CODE_WORDS = ['olma','lola','bola','nok','anor','gul','kiwi','mango','bahor','quyosh','oy','yulduz','dengiz','tog','bulut','shamol','kuz','qor','yoz','kitob','qalam','daftar','maktab','stol','non','sut','choy','asal','uzum','behi','shahar','bog','kapalak','qush','baliq','mushuk','quyon','fil','sher','ayiq','tulki','panda','robot','raketa','velo','koptok','musiqa','rasm','tabassum','omad','orzu','nur','chiroq','kema','poyezd','samolyot','uy','eshik','soat','kalit'];
function newCode(len = 2) { const a = new Uint8Array(3); crypto.getRandomValues(a); const w = CODE_WORDS[a[0] % CODE_WORDS.length]; return w + String(a[1] % (len === 3 ? 900 : 90) + (len === 3 ? 100 : 10)); }
async function uniqueCode(db) { for (let i = 0; i < 40; i++) { const c = newCode(i < 12 ? 2 : 3); if (!(await db.prepare('SELECT id FROM students WHERE lower(code) = ?').bind(c).first())) return c; } return newCode(3) + rid(2); }
const normName = n => String(n || '').toLowerCase().replace(/[\u2018\u2019\u02bb\u02bc'`´]/g, '').replace(/\s+/g, ' ').trim().split(' ').sort().join(' ');
function parseList(text) { return String(text || '').split(/\r?\n/).map(l => l.trim()).filter(Boolean).slice(0, 200).map(l => { const m = l.match(/^(.*?)[,;\t]\s*(\+?[\d][\d\s()-]{6,})\s*$/); const name = (m ? m[1] : l).replace(/^[\d.)\-\s]+(?=\p{L})/u, '').trim().replace(/\s+/g, ' ').slice(0, 60); return { name, phone: m ? m[2].trim().slice(0, 40) : '' }; }).filter(x => x.name.length >= 3); }
async function sha(s) { const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)); return Array.from(new Uint8Array(d), b => b.toString(16).padStart(2, '0')).join(''); }
function b64enc(bytes) { let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(s); }
function b64dec(str) { const s = atob(str); const b = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return b; }
const pub = s => ({ id: s.id, name: s.name, level: s.level || null, group: s.grp || '' });
const fullStudent = s => ({ pay_day: s.pay_day || 0, pay_start: s.pay_start || 0, gid: s.gid || '', tid: s.tid || '', first_login: s.first_login || 0, id: s.id, name: s.name, code: s.code, parent_phone: s.parent_phone || '', group: s.grp || '', level: s.level || null, created: s.created, last_seen: s.last_seen || 0, active_sec: s.active_sec || 0, sessions: s.sessions || 0, leaves: s.leaves || 0 });

async function ensureSchema(db) {
  if (schemaReady) return;
  const q = [
    `CREATE TABLE IF NOT EXISTS students (id TEXT PRIMARY KEY, name TEXT NOT NULL, code TEXT UNIQUE NOT NULL, parent_phone TEXT DEFAULT '', grp TEXT DEFAULT '', level TEXT, created INTEGER, last_seen INTEGER DEFAULT 0, active_sec INTEGER DEFAULT 0, sessions INTEGER DEFAULT 0, leaves INTEGER DEFAULT 0, progress TEXT DEFAULT '{}')`,
    `CREATE TABLE IF NOT EXISTS tokens (token TEXT PRIMARY KEY, role TEXT NOT NULL, sid TEXT, created INTEGER)`,
    `CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, sid TEXT, type TEXT, at INTEGER, value INTEGER, lesson INTEGER, section TEXT, test INTEGER DEFAULT 0)`,
    `CREATE INDEX IF NOT EXISTS ev_sid ON events (sid, at)`,
    `CREATE TABLE IF NOT EXISTS timelog (sid TEXT, lesson INTEGER, section TEXT, sec INTEGER DEFAULT 0, PRIMARY KEY (sid, lesson, section))`,
    `CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, sid TEXT, sender TEXT, text TEXT, image TEXT, lesson INTEGER, at INTEGER, read INTEGER DEFAULT 0)`,
    `CREATE INDEX IF NOT EXISTS msg_sid ON messages (sid, at)`,
    `CREATE TABLE IF NOT EXISTS logins (id INTEGER PRIMARY KEY AUTOINCREMENT, sid TEXT, at INTEGER)`,
    `CREATE TABLE IF NOT EXISTS tts (k TEXT PRIMARY KEY, audio TEXT, model TEXT, created INTEGER)`,
    `CREATE TABLE IF NOT EXISTS audio (id TEXT PRIMARY KEY, data TEXT, size INTEGER, created INTEGER)`,
    `CREATE TABLE IF NOT EXISTS fails (ip TEXT, at INTEGER)`,
    `CREATE TABLE IF NOT EXISTS groups (id TEXT PRIMARY KEY, tid TEXT DEFAULT '', name TEXT NOT NULL, pay_day INTEGER DEFAULT 0, created INTEGER)`,
    `CREATE TABLE IF NOT EXISTS payments (sid TEXT, ym TEXT, at INTEGER, PRIMARY KEY (sid, ym))`,
    `CREATE TABLE IF NOT EXISTS teachers (id TEXT PRIMARY KEY, name TEXT NOT NULL, pass TEXT UNIQUE NOT NULL, created INTEGER)`
  ];
  await db.batch(q.map(s => db.prepare(s)));
  try { await db.prepare(`ALTER TABLE students ADD COLUMN tid TEXT DEFAULT ''`).run(); } catch (e) {}
  for (const c of ["gid TEXT DEFAULT ''", 'pay_day INTEGER DEFAULT 0', 'pay_start INTEGER DEFAULT 0']) { try { await db.prepare('ALTER TABLE students ADD COLUMN ' + c).run(); } catch (e) {} }
  try { await db.prepare('CREATE INDEX IF NOT EXISTS st_tid ON students (tid)').run(); } catch (e) {}
  schemaReady = true;
}
async function auth(request, env, body) {
  let token = '';
  const h = request.headers.get('authorization') || '';
  if (h.startsWith('Bearer ')) token = h.slice(7).trim();
  if (!token && body && body.token) token = String(body.token);
  if (!token) return null;
  return await env.DB.prepare('SELECT token, role, sid, created FROM tokens WHERE token = ?').bind(token).first();
}
function summary(progressText) {
  let p = {}; try { p = JSON.parse(progressText || '{}'); } catch (e) {}
  const ls = p.lessons || {}; let done = 0; const tests = [];
  Object.values(ls).forEach(x => { if (x && x.sec && x.sec.test) done++; if (x && x.test && x.test.total) tests.push(x.test.best / x.test.total); });
  return { done, test: tests.length ? Math.round(tests.reduce((a, b) => a + b, 0) / tests.length * 100) : null, last: p.last ? p.last.lesson : null, feedback: p.feedback || {} };
}

/* ---------------- API ---------------- */
async function api(request, env, ctx, url) {
  const path = url.pathname.slice(4); // after /api
  const method = request.method;
  if (path === '/ping') return json({ app: 'english-room', ok: true, db: !!env.DB, ai: !!env.AI });
  if (!env.DB) return err('Server sozlanmagan: D1 bazasi ulanmagan (binding nomi DB bo‘lishi kerak).', 500);
  const db = env.DB;
  await ensureSchema(db);
  /* --- oldindan yozilgan ovoz paketlari (Teacher panel orqali bir marta yuklanadi) --- */
  if (path.startsWith('/audio/') && method === 'GET') {
    const id = path.slice(7).replace(/[^a-z0-9-]/gi, '');
    const ck = new Request(url.origin + '/api/audio/' + id);
    let r = await caches.default.match(ck); if (r) return r;
    const row = await db.prepare('SELECT data FROM audio WHERE id = ?').bind(id).first();
    if (!row) return new Response('', { status: 404, headers: { 'cache-control': 'no-store' } });
    r = new Response(row.data, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=31536000, immutable' } });
    ctx.waitUntil(caches.default.put(ck, r.clone()));
    return r;
  }
  let body = {};
  if (method !== 'GET') { try { body = await request.json(); } catch (e) { body = {}; } }

  /* --- login --- */
  if (path === '/login' && method === 'POST') {
    const nm = String(body.name || '').trim().replace(/\s+/g, ' ').slice(0, 60), code = String(body.code || '').trim().toLowerCase().replace(/\s+/g, '');
    if (nm.length < 3) return err('Ism va familiyani yozing.');
    if (!code) return err('Ustozingiz bergan kodni yozing.');
    const ip = request.headers.get('cf-connecting-ip') || 'x', since = now() - 15 * 60000;
    const f = await db.prepare('SELECT COUNT(*) AS n FROM fails WHERE ip = ? AND at > ?').bind(ip, since).first();
    if (f && f.n >= 30) return err('Juda ko‘p urinish. 15 daqiqadan keyin qayta urinib ko‘ring.', 429);
    const s = await db.prepare('SELECT * FROM students WHERE lower(code) = ?').bind(code).first();
    if (!s || normName(s.name) !== normName(nm)) { await db.prepare('INSERT INTO fails (ip, at) VALUES (?, ?)').bind(ip, now()).run(); return err('Ism yoki kod noto‘g‘ri. Ustozingizdan so‘rang.', 401); }
    const token = rid(32), t = now();
    await db.batch([
      db.prepare('INSERT INTO tokens (token, role, sid, created) VALUES (?, ?, ?, ?)').bind(token, 'student', s.id, t),
      db.prepare('UPDATE students SET sessions = sessions + 1, last_seen = ? WHERE id = ?').bind(t, s.id),
      db.prepare('INSERT INTO logins (sid, at) VALUES (?, ?)').bind(s.id, t)
    ]);
    return json({ token, student: pub(s) });
  }
  if (path === '/teacher/login' && method === 'POST') {
    const pass = env.TEACHER_PASSWORD || DEFAULT_PASS;
    const ip = request.headers.get('cf-connecting-ip') || 'x', since = now() - 15 * 60000;
    const f = await db.prepare('SELECT COUNT(*) AS n FROM fails WHERE ip = ? AND at > ?').bind(ip, since).first();
    if (f && f.n >= 30) return err('Juda ko‘p urinish. 15 daqiqadan keyin qayta urinib ko‘ring.', 429);
    const given = String(body.password || '').trim(), token = rid(32);
    if (given === pass) {
      await db.prepare('INSERT INTO tokens (token, role, sid, created) VALUES (?, ?, NULL, ?)').bind(token, 'admin', now()).run();
      return json({ token, role: 'admin', name: 'Bosh ustoz' });
    }
    const t = given ? await db.prepare('SELECT id, name FROM teachers WHERE pass = ?').bind(await sha('tp|' + given)).first() : null;
    if (!t) { await db.prepare('INSERT INTO fails (ip, at) VALUES (?, ?)').bind(ip, now()).run(); return err('Parol noto‘g‘ri.', 401); }
    await db.prepare('INSERT INTO tokens (token, role, sid, created) VALUES (?, ?, ?, ?)').bind(token, 'teacher', t.id, now()).run();
    return json({ token, role: 'teacher', name: t.name });
  }

  const me = await auth(request, env, body);
  if (!me) return err('Qaytadan kiring.', 401);

  /* --- voice (both roles) --- */
  if (path === '/tts' && method === 'POST') return tts(env, ctx, body.text, body.voice);

  /* --- student --- */
  if (me.role === 'student') {
    const sid = me.sid;
    if (path === '/me') {
      const s = await db.prepare('SELECT * FROM students WHERE id = ?').bind(sid).first();
      if (!s) return err('Qaytadan kiring.', 401);
      const u = await db.prepare(`SELECT COUNT(*) AS c FROM messages WHERE sid = ? AND sender = 'teacher' AND read = 0`).bind(sid).first();
      let progress = {}; try { progress = JSON.parse(s.progress || '{}'); } catch (e) {}
      return json({ student: pub(s), progress, unread: (u && u.c) || 0 });
    }
    if (path === '/retell' && method === 'POST') return retell(env, body);
    if (path === '/writing-check' && method === 'POST') return writingCheck(env, body);
    if (path === '/level' && method === 'POST') {
      const lv = ['A0', 'A1', 'A2', 'B1', 'B2'].includes(body.level) ? body.level : null;
      if (!lv) return err('Daraja noto‘g‘ri.');
      await db.prepare('UPDATE students SET level = ? WHERE id = ?').bind(lv, sid).run();
      return json({ ok: true });
    }
    if (path === '/progress' && (method === 'PUT' || method === 'POST')) {
      const txt = JSON.stringify(body.progress || {});
      if (txt.length > 900000) return err('Ma’lumot juda katta.');
      await db.prepare('UPDATE students SET progress = ? WHERE id = ?').bind(txt, sid).run();
      return json({ ok: true });
    }
    if (path === '/beat' && method === 'POST') {
      const sec = Math.max(0, Math.min(900, parseInt(body.sec, 10) || 0));
      const leaves = Array.isArray(body.leaves) ? body.leaves.slice(0, 50) : [];
      const lesson = parseInt(body.lesson, 10) || 0, section = String(body.section || 'home').slice(0, 30);
      if (sec || leaves.length) {
        const st = [db.prepare('UPDATE students SET active_sec = active_sec + ?, leaves = leaves + ?, last_seen = ? WHERE id = ?').bind(sec, leaves.length, now(), sid)];
        if (sec) st.push(db.prepare('INSERT INTO timelog (sid, lesson, section, sec) VALUES (?, ?, ?, ?) ON CONFLICT (sid, lesson, section) DO UPDATE SET sec = sec + excluded.sec').bind(sid, lesson, section, sec));
        leaves.forEach(l => st.push(db.prepare(`INSERT INTO events (sid, type, at, value, lesson, section, test) VALUES (?, 'leave', ?, ?, ?, ?, ?)`).bind(sid, parseInt(l.at, 10) || now(), Math.max(0, parseInt(l.away, 10) || 0), parseInt(l.lesson, 10) || 0, String(l.section || '').slice(0, 30), l.test ? 1 : 0)));
        await db.batch(st);
      }
      const u = await db.prepare(`SELECT COUNT(*) AS c FROM messages WHERE sid = ? AND sender = 'teacher' AND read = 0`).bind(sid).first();
      return json({ ok: true, unread: (u && u.c) || 0 });
    }
    if (path === '/messages' && method === 'GET') {
      const r = await db.prepare('SELECT * FROM (SELECT id, sender, text, image, lesson, at FROM messages WHERE sid = ? ORDER BY at DESC LIMIT 60) ORDER BY at ASC').bind(sid).all();
      await db.prepare(`UPDATE messages SET read = 1 WHERE sid = ? AND sender = 'teacher' AND read = 0`).bind(sid).run();
      return json({ messages: r.results || [] });
    }
    if (path === '/messages' && method === 'POST') return postMessage(db, sid, 'student', body);
    return err('Topilmadi', 404);
  }

  /* --- teacher --- */
  const admin = me.role === 'admin' || (me.role === 'teacher' && !me.sid);
  if (!admin && me.role !== 'teacher') return err('Ruxsat yo‘q.', 403);
  const myTid = admin ? null : me.sid;
  const getOwn = async id => { const r = await db.prepare('SELECT * FROM students WHERE id = ?').bind(id).first(); return r && (admin || (r.tid || '') === myTid) ? r : null; };
  const ownGroup = async gid => { if (!gid) return ''; const g = await db.prepare('SELECT tid FROM groups WHERE id = ?').bind(gid).first(); return g && (admin || (g.tid || '') === myTid) ? gid : ''; };
  let m;
  if (path === '/t/me') {
    const t = admin ? null : await db.prepare('SELECT name FROM teachers WHERE id = ?').bind(myTid).first();
    if (!admin && !t) return err('Qaytadan kiring.', 401);
    return json({ role: admin ? 'admin' : 'teacher', name: admin ? 'Bosh ustoz' : t.name });
  }
  if (path === '/t/teachers' && method === 'GET') {
    if (!admin) return err('Ruxsat yo‘q.', 403);
    const r = await db.prepare(`SELECT t.id, t.name, t.created, (SELECT COUNT(*) FROM students s WHERE s.tid = t.id) AS n FROM teachers t ORDER BY t.created`).all();
    return json({ teachers: r.results || [] });
  }
  if (path === '/t/teachers' && method === 'POST') {
    if (!admin) return err('Ruxsat yo‘q.', 403);
    const name = String(body.name || '').trim().slice(0, 60), pw = String(body.password || '').trim();
    if (name.length < 2) return err('Ustoz ismini yozing.');
    if (pw.length < 6) return err('Parol kamida 6 belgi bo‘lsin.');
    if (pw === (env.TEACHER_PASSWORD || DEFAULT_PASS)) return err('Bu parol band. Boshqasini tanlang.');
    const h = await sha('tp|' + pw);
    if (await db.prepare('SELECT id FROM teachers WHERE pass = ?').bind(h).first()) return err('Bu parol band. Boshqasini tanlang.');
    const id = 'u' + rid(8);
    await db.prepare('INSERT INTO teachers (id, name, pass, created) VALUES (?, ?, ?, ?)').bind(id, name, h, now()).run();
    return json({ teacher: { id, name } });
  }
  if ((m = path.match(/^\/t\/teachers\/([\w-]+)$/))) {
    if (!admin) return err('Ruxsat yo‘q.', 403);
    const id = m[1];
    if (method === 'DELETE') {
      await db.batch([db.prepare(`UPDATE students SET tid = '' WHERE tid = ?`).bind(id), db.prepare(`UPDATE groups SET tid = '' WHERE tid = ?`).bind(id), db.prepare('DELETE FROM tokens WHERE role = ? AND sid = ?').bind('teacher', id), db.prepare('DELETE FROM teachers WHERE id = ?').bind(id)]);
      return json({ ok: true });
    }
    if (method === 'POST') {
      const pw = String(body.password || '').trim();
      if (pw.length < 6) return err('Parol kamida 6 belgi bo‘lsin.');
      if (pw === (env.TEACHER_PASSWORD || DEFAULT_PASS)) return err('Bu parol band. Boshqasini tanlang.');
      const h = await sha('tp|' + pw), ex = await db.prepare('SELECT id FROM teachers WHERE pass = ?').bind(h).first();
      if (ex && ex.id !== id) return err('Bu parol band. Boshqasini tanlang.');
      await db.batch([db.prepare('UPDATE teachers SET pass = ? WHERE id = ?').bind(h, id), db.prepare('DELETE FROM tokens WHERE role = ? AND sid = ?').bind('teacher', id)]);
      return json({ ok: true });
    }
  }
  if (path === '/t/overview') {
    const base = `SELECT s.*, (SELECT MIN(at) FROM logins WHERE sid = s.id) AS first_login FROM students s`;
    const rs = admin ? await db.prepare(base + ' ORDER BY s.last_seen DESC, s.created DESC').all() : await db.prepare(base + ' WHERE s.tid = ? ORDER BY s.last_seen DESC, s.created DESC').bind(myTid).all();
    const un = await db.prepare(`SELECT sid, COUNT(*) AS c FROM messages WHERE sender = 'student' AND read = 0 GROUP BY sid`).all();
    const pr = admin ? await db.prepare('SELECT sid, ym FROM payments').all() : await db.prepare('SELECT p.sid AS sid, p.ym AS ym FROM payments p JOIN students s ON s.id = p.sid WHERE s.tid = ?').bind(myTid).all();
    const pmap = {}; (pr.results || []).forEach(x => { (pmap[x.sid] = pmap[x.sid] || []).push(x.ym); });
    const gr = admin ? await db.prepare('SELECT id, name FROM groups').all() : await db.prepare('SELECT id, name FROM groups WHERE tid = ?').bind(myTid).all();
    const gmap = {}; (gr.results || []).forEach(g => { gmap[g.id] = g.name; });
    const tn = {}; if (admin) { tn[''] = 'Bosh ustoz'; ((await db.prepare('SELECT id, name FROM teachers').all()).results || []).forEach(t => { tn[t.id] = t.name; }); }
    const umap = {}; (un.results || []).forEach(r => { umap[r.sid] = r.c; });
    return json({ role: admin ? 'admin' : 'teacher', defaultPassword: admin && !env.TEACHER_PASSWORD, students: (rs.results || []).map(s => Object.assign(fullStudent(s), { paid: pmap[s.id] || [], gname: gmap[s.gid || ''] || '', teacher: admin ? (tn[s.tid || ''] || '—') : '', unread: umap[s.id] || 0, summary: summary(s.progress) })) });
  }
  if (path === '/t/students' && method === 'POST') {
    const name = String(body.name || '').trim().slice(0, 80);
    if (!name) return err('Ismni yozing.');
    const lv = ['A0', 'A1', 'A2', 'B1', 'B2'].includes(body.level) ? body.level : null;
    const tid = admin ? String(body.tid || '') : myTid;
    const gid = await ownGroup(String(body.gid || ''));
    const pd = Math.max(0, Math.min(31, parseInt(body.pay_day, 10) || 0));
    const code = await uniqueCode(db);
    const s = { id: 's' + rid(10), name, code, parent_phone: String(body.parent_phone || '').slice(0, 40), grp: String(body.group || '').slice(0, 40), level: lv, created: now(), tid, gid, pay_day: pd, pay_start: pd ? now() : 0 };
    await db.prepare('INSERT INTO students (id, name, code, parent_phone, grp, level, created, tid, gid, pay_day, pay_start) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(s.id, s.name, s.code, s.parent_phone, s.grp, s.level, s.created, s.tid, s.gid, s.pay_day, s.pay_start).run();
    return json({ student: fullStudent(s) });
  }
  if ((m = path.match(/^\/t\/students\/([\w-]+)$/))) {
    const id = m[1];
    const s = await getOwn(id);
    if (!s) return err('O‘quvchi topilmadi', 404);
    if (method === 'PATCH') {
      const name = body.name != null ? String(body.name).trim().slice(0, 80) || s.name : s.name;
      const lv = 'level' in body ? (['A0', 'A1', 'A2', 'B1', 'B2'].includes(body.level) ? body.level : null) : s.level;
      const pd = 'pay_day' in body ? Math.max(0, Math.min(31, parseInt(body.pay_day, 10) || 0)) : (s.pay_day || 0);
      const ps = pd && pd !== (s.pay_day || 0) ? now() : (pd ? s.pay_start || 0 : 0);
      const gid = 'gid' in body ? await ownGroup(String(body.gid || '')) : (s.gid || '');
      await db.prepare('UPDATE students SET name = ?, parent_phone = ?, grp = ?, level = ?, pay_day = ?, pay_start = ?, gid = ? WHERE id = ?')
        .bind(name, body.parent_phone != null ? String(body.parent_phone).slice(0, 40) : s.parent_phone, body.group != null ? String(body.group).slice(0, 40) : s.grp, lv, pd, ps, gid, id).run();
      return json({ ok: true });
    }
    if (method === 'DELETE') {
      await db.batch(['students WHERE id', 'payments WHERE sid', 'tokens WHERE sid', 'events WHERE sid', 'timelog WHERE sid', 'messages WHERE sid', 'logins WHERE sid'].map(t => db.prepare(`DELETE FROM ${t} = ?`).bind(id)));
      return json({ ok: true });
    }
    const [lv, tl, ms, lg] = await db.batch([
      db.prepare(`SELECT at, value, lesson, section, test FROM events WHERE sid = ? AND type = 'leave' ORDER BY at DESC LIMIT 60`).bind(id),
      db.prepare('SELECT lesson, section, sec FROM timelog WHERE sid = ?').bind(id),
      db.prepare('SELECT * FROM (SELECT id, sender, text, image, lesson, at FROM messages WHERE sid = ? ORDER BY at DESC LIMIT 60) ORDER BY at ASC').bind(id),
      db.prepare('SELECT at FROM logins WHERE sid = ? ORDER BY at DESC LIMIT 20').bind(id)
    ]);
    let progress = {}; try { progress = JSON.parse(s.progress || '{}'); } catch (e) {}
    s.first_login = ((await db.prepare('SELECT MIN(at) AS a FROM logins WHERE sid = ?').bind(id).first()) || {}).a || 0;
    const pays = ((await db.prepare('SELECT ym FROM payments WHERE sid = ?').bind(id).all()).results || []).map(x => x.ym);
    return json({ paid: pays, student: fullStudent(s), progress, leaves: lv.results || [], time: tl.results || [], messages: ms.results || [], logins: lg.results || [] });
  }
  if ((m = path.match(/^\/t\/students\/([\w-]+)\/code$/)) && method === 'POST') {
    if (!(await getOwn(m[1]))) return err('O‘quvchi topilmadi', 404);
    const code = await uniqueCode(db);
    await db.batch([db.prepare('UPDATE students SET code = ? WHERE id = ?').bind(code, m[1]), db.prepare('DELETE FROM tokens WHERE sid = ?').bind(m[1])]);
    return json({ code });
  }
  if ((m = path.match(/^\/t\/students\/([\w-]+)\/messages$/))) {
    if (!(await getOwn(m[1]))) return err('O‘quvchi topilmadi', 404);
    if (method === 'GET') {
      const r = await db.prepare('SELECT * FROM (SELECT id, sender, text, image, lesson, at FROM messages WHERE sid = ? ORDER BY at DESC LIMIT 80) ORDER BY at ASC').bind(m[1]).all();
      await db.prepare(`UPDATE messages SET read = 1 WHERE sid = ? AND sender = 'student' AND read = 0`).bind(m[1]).run();
      return json({ messages: r.results || [] });
    }
    return postMessage(db, m[1], 'teacher', body);
  }
  if ((m = path.match(/^\/t\/students\/([\w-]+)\/pay$/)) && method === 'POST') {
    if (!(await getOwn(m[1]))) return err('O‘quvchi topilmadi', 404);
    const ym = String(body.ym || '');
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(ym)) return err('Oy noto‘g‘ri.');
    if (body.paid) await db.prepare('INSERT OR REPLACE INTO payments (sid, ym, at) VALUES (?, ?, ?)').bind(m[1], ym, now()).run();
    else await db.prepare('DELETE FROM payments WHERE sid = ? AND ym = ?').bind(m[1], ym).run();
    return json({ ok: true });
  }
  if (path === '/t/groups' && method === 'GET') {
    const r = await db.prepare(`SELECT g.id, g.name, g.pay_day, g.created, g.tid, (SELECT COUNT(*) FROM students s WHERE s.gid = g.id) AS n FROM groups g ${admin ? '' : 'WHERE g.tid = ?'} ORDER BY g.created DESC`).bind(...(admin ? [] : [myTid])).all();
    const un = await db.prepare(`SELECT COUNT(*) AS n FROM students WHERE (gid = '' OR gid IS NULL) ${admin ? '' : 'AND tid = ?'}`).bind(...(admin ? [] : [myTid])).first();
    return json({ groups: r.results || [], ungrouped: (un && un.n) || 0 });
  }
  const addList = async (gid, tid, text, pd) => {
    const out = [];
    for (const it of parseList(text)) {
      const code = await uniqueCode(db), id = 's' + rid(10), t = now();
      await db.prepare('INSERT INTO students (id, name, code, parent_phone, grp, level, created, tid, gid, pay_day, pay_start) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(id, it.name, code, it.phone, '', null, t, tid, gid, pd, pd ? t : 0).run();
      out.push({ id, name: it.name, code, parent_phone: it.phone });
    }
    return out;
  };
  if (path === '/t/groups' && method === 'POST') {
    const name = String(body.name || '').trim().slice(0, 40);
    if (!name) return err('Guruhga nom bering.');
    const pd = Math.max(0, Math.min(31, parseInt(body.pay_day, 10) || 0)), tid = admin ? String(body.tid || '') : myTid, id = 'g' + rid(8);
    await db.prepare('INSERT INTO groups (id, tid, name, pay_day, created) VALUES (?, ?, ?, ?, ?)').bind(id, tid, name, pd, now()).run();
    const students = await addList(id, tid, body.list, pd);
    return json({ group: { id, name, pay_day: pd }, students });
  }
  if ((m = path.match(/^\/t\/groups\/([\w-]+)$/))) {
    const gid = m[1];
    if (gid === 'none') {
      if (method !== 'GET') return err('Topilmadi', 404);
      const rs = await db.prepare(`SELECT * FROM students WHERE (gid = '' OR gid IS NULL) ${admin ? '' : 'AND tid = ?'} ORDER BY name`).bind(...(admin ? [] : [myTid])).all();
      return json({ group: { id: 'none', name: 'Guruhsiz o‘quvchilar', pay_day: 0 }, students: (rs.results || []).map(fullStudent) });
    }
    const g = await db.prepare('SELECT * FROM groups WHERE id = ?').bind(gid).first();
    if (!g || (!admin && (g.tid || '') !== myTid)) return err('Guruh topilmadi', 404);
    if (method === 'DELETE') { await db.batch([db.prepare(`UPDATE students SET gid = '' WHERE gid = ?`).bind(gid), db.prepare('DELETE FROM groups WHERE id = ?').bind(gid)]); return json({ ok: true }); }
    if (method === 'PATCH') {
      const name = body.name != null ? String(body.name).trim().slice(0, 40) || g.name : g.name;
      const pd = 'pay_day' in body ? Math.max(0, Math.min(31, parseInt(body.pay_day, 10) || 0)) : g.pay_day;
      await db.prepare('UPDATE groups SET name = ?, pay_day = ? WHERE id = ?').bind(name, pd, gid).run();
      if ('pay_day' in body && body.apply_all) await db.prepare('UPDATE students SET pay_day = ?, pay_start = ? WHERE gid = ?').bind(pd, pd ? now() : 0, gid).run();
      const students = await addList(gid, g.tid || '', body.list, pd);
      return json({ ok: true, students });
    }
    const rs = await db.prepare('SELECT * FROM students WHERE gid = ? ORDER BY name').bind(gid).all();
    const pr = await db.prepare('SELECT p.sid AS sid, p.ym AS ym FROM payments p JOIN students s ON s.id = p.sid WHERE s.gid = ?').bind(gid).all();
    const pmap = {}; (pr.results || []).forEach(x => { (pmap[x.sid] = pmap[x.sid] || []).push(x.ym); });
    return json({ group: { id: g.id, name: g.name, pay_day: g.pay_day }, students: (rs.results || []).map(x => Object.assign(fullStudent(x), { paid: pmap[x.id] || [] })) });
  }
  if (path === '/t/inbox') {
    const r = await db.prepare(`SELECT m.sid AS sid, s.name AS name, MAX(m.at) AS last_at,
        SUM(CASE WHEN m.sender = 'student' AND m.read = 0 THEN 1 ELSE 0 END) AS unread,
        (SELECT COALESCE(NULLIF(x.text, ''), '📷 Rasm') FROM messages x WHERE x.sid = m.sid ORDER BY x.at DESC LIMIT 1) AS last_text
      FROM messages m JOIN students s ON s.id = m.sid ${admin ? '' : 'WHERE s.tid = ?'} GROUP BY m.sid ORDER BY last_at DESC`).bind(...(admin ? [] : [myTid])).all();
    return json({ threads: r.results || [] });
  }
  if (path.startsWith('/t/audio') && !admin) return err('Ruxsat yo‘q.', 403);
  if (path === '/t/audio' && method === 'GET') {
    const r = await db.prepare('SELECT id, size FROM audio').all();
    return json({ packs: r.results || [] });
  }
  if (path === '/t/audio' && method === 'POST') {
    const id = String(body.id || ''), data = String(body.data || '');
    if (!/^l\d\d[a-h]-[0-9a-f]{6}$/.test(id)) return err('Fayl nomi noto‘g‘ri.');
    if (!/^[A-Za-z0-9+/=]+$/.test(data) || data.length > 1900000) return err('Fayl buzilgan.');
    await db.prepare('INSERT OR REPLACE INTO audio (id, data, size, created) VALUES (?, ?, ?, ?)').bind(id, data, Math.round(data.length * 3 / 4), now()).run();
    return json({ ok: true });
  }
  if (path === '/t/logins') {
    const r = await db.prepare('SELECT l.sid AS sid, l.at AS at, COALESCE(s.name, \'—\') AS name FROM logins l LEFT JOIN students s ON s.id = l.sid ' + (admin ? '' : 'WHERE s.tid = ? ') + 'ORDER BY l.at DESC LIMIT 60').bind(...(admin ? [] : [myTid])).all();
    return json({ logins: r.results || [] });
  }
  return err('Topilmadi', 404);
}

async function postMessage(db, sid, sender, body) {
  const text = String(body.text || '').slice(0, 2000).trim();
  let image = body.image ? String(body.image) : null;
  if (image && (!/^data:image\/(jpeg|png|webp);base64,/.test(image) || image.length > 1500000)) return err('Rasm juda katta yoki noto‘g‘ri formatda.');
  if (!text && !image) return err('Xabar bo‘sh.');
  const at = now(), lesson = parseInt(body.lesson, 10) || null;
  const r = await db.prepare('INSERT INTO messages (sid, sender, text, image, lesson, at, read) VALUES (?, ?, ?, ?, ?, ?, 0)').bind(sid, sender, text, image, lesson, at).run();
  return json({ message: { id: r.meta && r.meta.last_row_id, sender, text, image, lesson, at } });
}

/* ---------------- native voice (Workers AI) with permanent cache ---------------- */
async function toBytes(r) {
  if (!r) return null;
  if (r instanceof Response) { if (!r.ok) return null; const ct = r.headers.get('content-type') || ''; if (ct.includes('json')) { const j = await r.json().catch(() => null); return j && j.audio ? b64dec(j.audio) : null; } return new Uint8Array(await r.arrayBuffer()); }
  if (r instanceof ReadableStream) return new Uint8Array(await new Response(r).arrayBuffer());
  if (r instanceof ArrayBuffer) return new Uint8Array(r);
  if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  if (typeof r === 'object' && r.audio) return typeof r.audio === 'string' ? b64dec(r.audio) : await toBytes(r.audio);
  return null;
}
const audioResp = bytes => new Response(bytes, { headers: { 'content-type': 'audio/mpeg', 'cache-control': 'private, max-age=31536000' } });
async function tts(env, ctx, text, voice) {
  text = String(text || '').replace(/\s+/g, ' ').trim().slice(0, 600);
  if (!text) return err('Matn bo‘sh.');
  const v = String(voice || '')[0] === 'm' ? 'm' : 'f';
  const key = await sha('v2|' + v + '|' + text);
  const cache = caches.default, ck = new Request('https://tts.english-room/' + key);
  const hit = await cache.match(ck); if (hit) return hit;
  const row = await env.DB.prepare('SELECT audio FROM tts WHERE k = ?').bind(key).first();
  if (row && row.audio) { const res = audioResp(b64dec(row.audio)); ctx.waitUntil(cache.put(ck, res.clone())); return res; }
  if (!env.AI) return err('Workers AI ulanmagan (binding nomi AI).', 501);
  let bytes = null, model = 'aura-2';
  try { bytes = await toBytes(await env.AI.run('@cf/deepgram/aura-2-en', { text, speaker: VOICES[v], encoding: 'mp3' }, { returnRawResponse: true })); } catch (e) { bytes = null; }
  if (!bytes || bytes.length < 400) {
    model = 'melotts';
    try { bytes = await toBytes(await env.AI.run('@cf/myshell-ai/melotts', { prompt: text, lang: 'en' })); } catch (e) { bytes = null; }
  }
  if (!bytes || bytes.length < 400) return err('Ovoz yaratilmadi. Birozdan keyin qayta urinib ko‘ring.', 503);
  const res = audioResp(bytes);
  ctx.waitUntil(Promise.all([
    cache.put(ck, res.clone()),
    model === 'aura-2' ? env.DB.prepare('INSERT OR REPLACE INTO tts (k, audio, model, created) VALUES (?, ?, ?, ?)').bind(key, b64enc(bytes), model, now()).run() : Promise.resolve()
  ]));
  return res;
}

/* ---- Retelling: AI imlo, so‘z tanlash, grammatika tekshiruvi ---- */
async function writingCheck(env, body) {
  const text = String(body.text || '').slice(0, 3000);
  if (text.split(/\s+/).filter(Boolean).length < 3) return err('Matn juda qisqa.');
  if (!env.AI) return err('Workers AI ulanmagan (binding nomi AI).', 501);
  const sys = 'You are a kind English teacher for Uzbek-speaking students. The student wrote a short text. Lesson topic: ' + String(body.topic || '').slice(0, 100) + '. Target grammar: ' + String(body.grammar || '').slice(0, 100) + '. Task: ' + String(body.task || '').slice(0, 200) + '. Check the text. Reply ONLY with JSON: {"score":0-10,"good":["what is good, in Uzbek"],"mistakes":[{"wrong":"student phrase","right":"corrected phrase","why":"short explanation in Uzbek"}],"corrected":"the full corrected text in English","tip":"one short advice in Uzbek"}. Max 6 mistakes. Do not invent mistakes; if the text is correct, leave mistakes empty.';
  let out = '';
  try {
    const r = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', { messages: [{ role: 'system', content: sys }, { role: 'user', content: text }], max_tokens: 1000, temperature: 0.2 });
    out = String((r && (r.response || r.result)) || '');
  } catch (e) { return err('AI hozir javob bermadi. Birozdan keyin urinib ko‘ring.', 502); }
  const m = out.match(/\{[\s\S]*\}/);
  let j = null; try { j = m ? JSON.parse(m[0]) : null; } catch (e) { j = null; }
  if (!j) return json({ score: null, good: [], mistakes: [], corrected: '', tip: out.slice(0, 500) });
  const sa = x => (Array.isArray(x) ? x.slice(0, 6).map(v => String(v).slice(0, 200)) : []);
  const mis = Array.isArray(j.mistakes) ? j.mistakes.slice(0, 6).map(o => ({ wrong: String((o && o.wrong) || '').slice(0, 200), right: String((o && o.right) || '').slice(0, 200), why: String((o && o.why) || '').slice(0, 300) })) : [];
  const sc = Number(j.score);
  return json({ score: isFinite(sc) ? Math.max(0, Math.min(10, Math.round(sc))) : null, good: sa(j.good), mistakes: mis, corrected: String(j.corrected || '').slice(0, 3000), tip: String(j.tip || '').slice(0, 400) });
}

async function retell(env, body) {
  const text = String(body.text || '').slice(0, 3500);
  if (text.split(/\s+/).length < 15) return err('Matn juda qisqa.');
  if (!env.AI) return err('Workers AI ulanmagan (binding nomi AI).', 501);
  const low = Array.isArray(body.low) ? body.low.slice(0, 8).join(' | ') : '';
  const sys = 'You are a kind English teacher for Uzbek-speaking students at B1 level. The student listened to a podcast story (topic: ' + String(body.topic || '').slice(0, 80) + ') and retold it in their own words. The lesson grammar is: ' + String(body.grammar || '').slice(0, 80) + '. Target words: ' + (Array.isArray(body.words) ? body.words.slice(0, 14).join(', ') : '') + '. Return ONLY valid JSON, no other text, in this shape: {"level":"A2 or B1 or B2","understood":"1-2 sentences in UZBEK saying how well the student seems to have understood and retold the story","spelling":[{"wrong":"","right":""}],"words":[{"wrong":"","right":"","why":"short reason in Uzbek"}],"grammar":[{"wrong":"","right":"","why":"short reason in Uzbek"}],"pronunciation":[{"word":"","tip":"short tip in Uzbek"}],"tip":"one encouraging tip in Uzbek"}. "spelling" = misspelled words. "words" = wrong or unnatural word choice or collocation. "grammar" = grammar mistakes. Max 6 items per list; use empty lists if none. Never invent mistakes that are not in the text. pronunciation: only use these phrases the speech recognizer was unsure about: [' + low + ']; otherwise an empty list.';
  let out = '';
  try {
    const r = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', { messages: [{ role: 'system', content: sys }, { role: 'user', content: text }], max_tokens: 900, temperature: 0.2 });
    out = String((r && (r.response || r.result)) || '');
  } catch (e) { return err('AI hozir javob bermadi. Birozdan keyin urinib ko‘ring.', 502); }
  const m = out.match(/\{[\s\S]*\}/);
  let j = null; try { j = m ? JSON.parse(m[0]) : null; } catch (e) { j = null; }
  if (!j) return json({ level: '—', understood: out.slice(0, 400), spelling: [], words: [], grammar: [], pronunciation: [], tip: '' });
  const arr = x => (Array.isArray(x) ? x.slice(0, 6) : []);
  return json({ level: String(j.level || '—').slice(0, 6), understood: String(j.understood || '').slice(0, 500), spelling: arr(j.spelling), words: arr(j.words), grammar: arr(j.grammar), pronunciation: arr(j.pronunciation), tip: String(j.tip || '').slice(0, 300) });
}

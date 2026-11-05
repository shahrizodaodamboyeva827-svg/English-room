/* =====================================================================
   TEACHER PANEL — students, codes & logins, parents' phones, inbox
   ===================================================================== */
const MON = ['yan', 'fev', 'mar', 'apr', 'may', 'iyun', 'iyul', 'avg', 'sen', 'okt', 'noy', 'dek'];
function payInfo(s, today = new Date()) {
  const d = +s.pay_day || 0; if (!d) return { none: true, months: [] };
  const paid = new Set(s.paid || []), st = new Date(s.pay_start || s.created || Date.now());
  let y = st.getFullYear(), m = st.getMonth(); if (st.getDate() > d) m++;
  if (m > 11) { y++; m = 0; }
  const cy = today.getFullYear(), cm = today.getMonth(), months = [], due = (yy, mm) => new Date(yy, mm, Math.min(d, new Date(yy, mm + 1, 0).getDate()), 23, 59, 59);
  while (y < cy || (y === cy && m <= cm)) {
    const ym = y + '-' + String(m + 1).padStart(2, '0'), du = due(y, m), p = paid.has(ym);
    months.push({ ym, label: MON[m], day: du.getDate(), paid: p, overdue: !p && today > du, pending: !p && today <= du });
    m++; if (m > 11) { m = 0; y++; }
  }
  return { none: false, months, next: months.length ? null : { day: due(y, m).getDate(), label: MON[m] }, overdue: months.filter(x => x.overdue) };
}
function payBadge(s) {
  const i = payInfo(s); if (i.none) return '<span class="muted">—</span>';
  if (i.overdue.length) return `<span class="pill p-bad" title="To‘lov muddati o‘tgan">⚠ ${i.overdue.length > 1 ? i.overdue.length + ' oy to‘lanmagan' : i.overdue[0].label + ' to‘lanmagan'}</span>`;
  if (!i.months.length) return `<span class="pill p-none">⏳ ${i.next.day}-${i.next.label}</span>`;
  const last = i.months[i.months.length - 1], prev = i.months[i.months.length - 2];
  if (last.paid) return `<span class="pill p-ok">✅ ${last.label}</span>`;
  return `${prev && prev.paid ? `<span class="pill p-ok">✅ ${prev.label}</span> ` : ''}<span class="pill p-none">⏳ ${last.day}-${last.label} gacha</span>`;
}
function payChips(s) {
  const i = payInfo(s); if (i.none) return '<p class="muted small">To‘lov kuni belgilanmagan. «Tahrirlash» orqali oyning nechanchi kuni to‘lashini kiriting.</p>';
  if (!i.months.length) return `<p class="muted small">Birinchi to‘lov muddati: ${i.next.day}-${i.next.label}. Hozircha qarz yo‘q.</p>`;
  return `<div class="pay-chips">${i.months.slice(-8).map(x => `<button type="button" class="pay-chip ${x.paid ? 'ok' : x.overdue ? 'bad' : ''}" data-act="t-pay" data-id="${s.id}" data-ym="${x.ym}" data-on="${x.paid ? 0 : 1}" title="${x.paid ? 'Bekor qilish' : 'To‘landi deb belgilash'}">${x.paid ? '✅' : x.overdue ? '⚠' : '⏳'} ${x.label}</button>`).join('')}</div><p class="small muted" style="margin-top:6px">Har oyning ${s.pay_day}-kuni. Oy ustiga bosing: to‘landi / bekor qilish.</p>`;
}
const Teacher = {
  last: null, newCode: null, thread: null, img: null, me: null,
  isAdmin() { return !!this.me && this.me.role === 'admin'; },
  fmtStart(ts) { if (!ts) return '<span class="muted">hali kirmagan</span>'; const d = new Date(ts), z = n => String(n).padStart(2, '0'), days = Math.floor((Date.now() - ts) / 864e5); return `${z(d.getDate())}.${z(d.getMonth() + 1)}.${d.getFullYear()}<small class="muted" style="display:block">${days <= 0 ? 'bugun' : days + ' kun oldin'}</small>`; },
  bar() {
    $('#bar').innerHTML = `<div class="bar-l"><a class="wordmark" href="#teacher">English Room</a><span class="hide-s" style="font-weight:700;color:var(--ink-2)">Teacher panel${this.me && this.me.name ? ' · ' + esc(this.me.name) : ''}</span></div>
      <div class="bar-r"><button type="button" class="btn btn-ghost btn-sm" data-act="t-logout">${ICON.door}<span>Chiqish</span></button></div>`;
  },
  async route(h) {
    $('#login').hidden = true; $('#shell').hidden = false; setLv(''); Voice.stop();
    if (!this.me) { try { this.me = await API.call('GET', '/t/me'); } catch (e) { if (e.status === 401) return this.out(); this.me = { role: 'admin', name: '' }; } }
    this.bar(); S.view = { name: 'teacher' };
    const m = h.match(/^teacher-s-([\w-]+)$/);
    const gm = h.match(/^teacher-g-([\w-]+)$/);
    const tab = gm ? 'group' : h === 'teacher-groups' ? 'groups' : h === 'teacher-codes' ? 'codes' : h === 'teacher-inbox' ? 'inbox' : h === 'teacher-feedback' ? 'feedback' : h === 'teacher-teachers' ? 'teachers' : m ? 'student' : 'students';
    let unread = 0; try { const ib = await API.call('GET', '/t/inbox'); unread = ib.threads.reduce((a, t) => a + t.unread, 0); this.threads = ib.threads; } catch (e) { if (e.status === 401) return this.out(); }
    view().innerHTML = `<div class="t-wrap">
      <nav class="t-nav" aria-label="Teacher panel">
        <a href="#teacher" ${tab === 'students' || tab === 'student' || tab === 'groups' || tab === 'group' ? 'aria-current="page"' : ''}>${ICON.users}<span>Guruhlar</span></a>
        <a href="#teacher-codes" ${tab === 'codes' ? 'aria-current="page"' : ''}>${ICON.chat}<span>Jurnal${this.isAdmin() ? ' va ovozlar' : ''}</span></a>
        ${this.isAdmin() ? `<a href="#teacher-teachers" ${tab === 'teachers' ? 'aria-current="page"' : ''}>${ICON.users}<span>Ustozlar</span></a>` : ''}
        <a href="#teacher-feedback" ${tab === 'feedback' ? 'aria-current="page"' : ''}>${ICON.chat}<span>Fikrlar</span></a>
        <a href="#teacher-inbox" ${tab === 'inbox' ? 'aria-current="page"' : ''}>${ICON.chat}<span>Xabarlar</span>${unread ? `<span class="badge">${unread}</span>` : ''}</a>
      </nav>
      <main class="t-main" id="tmain"><p class="muted">Yuklanmoqda…</p></main></div>`;
    try {
      if (tab === 'students' || tab === 'groups') await this.groups();
      else if (tab === 'codes') await this.codes();
      else if (tab === 'group') await this.group(gm[1]);
      else if (tab === 'inbox') await this.inbox();
      else if (tab === 'feedback') await this.feedback();
      else if (tab === 'teachers') await this.teachers();
      else await this.student(m[1]);
    } catch (e) { if (e.status === 401) return this.out(); $('#tmain').innerHTML = `<p class="err">${esc(e.message)}</p>`; }
  },
  out() { this.me = null; API.clearAuth(); showLogin(); },
  demo() { return API.mode === 'local' ? `<p class="demo-note"><b>Namuna rejimi.</b> Server ulanmagan, ma’lumotlar faqat shu brauzerda. Cloudflare’ga joylaganingizdan keyin hammasi serverda saqlanadi va barcha qurilmalarda ko‘rinadi.</p>` : ''; },
  fbHtml(fb, who) {
    return Object.entries(fb || {}).sort((a, b) => b[1].at - a[1].at).map(([lv, x]) => `<div class="fb-item"><p class="small muted">${who ? `<b>${esc(who)}</b>, ` : ''}<span class="lvchip" style="background:${LEVELS[lv] ? LEVELS[lv].c : '#888'}">${esc(lv)}</span> ${fmtWhen(x.at)}, baho: <b>${x.rate}/5</b></p><p style="background:var(--surface-2);border-radius:14px;padding:12px 14px;margin:6px 0 14px">${esc(x.text || '—')}</p></div>`).join('');
  },
  async feedback() {
    const r = await API.call('GET', '/t/overview');
    const all = []; r.students.forEach(s => Object.entries((s.summary && s.summary.feedback) || {}).forEach(([lv, x]) => all.push({ name: s.name, lv, x })));
    all.sort((a, b) => b.x.at - a.x.at);
    $('#tmain').innerHTML = `${this.demo()}<div class="t-title"><div><h1>Fikrlar</h1><p>O‘quvchilar daraja tugatgach darslar haqida yozgan fikrlari.</p></div></div>
      ${all.map(a => this.fbHtml({ [a.lv]: a.x }, a.name)).join('') || '<p class="muted">Hali hech kim daraja tugatmagan.</p>'}`;
  },
  async groups() {
    const [r, ov] = await Promise.all([API.call('GET', '/t/groups'), API.call('GET', '/t/overview')]);
    const list = ov.students, today = dayKey(), od = s => { const i = payInfo(s); return i.overdue && i.overdue.length; };
    const unread = list.reduce((a, s) => a + (s.unread || 0), 0), act = list.filter(s => s.last_seen && dayKey(s.last_seen) === today).length, bad = list.filter(od).length;
    const card = (id, name, pd, arr) => { const a = arr.filter(s => s.last_seen && dayKey(s.last_seen) === today).length, b = arr.filter(od).length, u = arr.reduce((x, s) => x + (s.unread || 0), 0);
      return `<a class="gcard" href="#teacher-g-${id}"><h3>${esc(name)}</h3><p class="gn"><b>${arr.length}</b> o‘quvchi</p>
        <div class="gmeta">${pd ? `<span class="pill p-none">to‘lov: ${pd}-kun</span>` : ''}${a ? `<span class="pill p-ok">bugun ${a} ta kirgan</span>` : ''}${b ? `<span class="pill p-bad">⚠ ${b} ta to‘lov muddati o‘tgan</span>` : ''}${u ? `<span class="pill p-bad">${u} yangi xabar</span>` : ''}</div></a>`; };
    const none = list.filter(s => !s.gid);
    $('#tmain').innerHTML = `${this.demo()}
      <div class="t-title"><div><h1>Guruhlar</h1><p>Guruhni bosing: o‘quvchilar, kodlar va to‘lovlar shu yerda ochiladi.</p></div></div>
      <div class="tiles">
        <div class="tile"><b>${r.groups.length}</b><span>guruh</span></div>
        <div class="tile"><b>${list.length}</b><span>o‘quvchi</span></div>
        <div class="tile"><b>${act}</b><span>bugun kirgan</span></div>
        <div class="tile${unread ? ' alert' : ''}"><b>${unread}</b><span>javobsiz xabar</span></div>
        <div class="tile${bad ? ' alert' : ''}"><b>${bad}</b><span>to‘lov muddati o‘tgan</span></div>
      </div>
      <div class="gcards">${r.groups.map(g => card(g.id, g.name, g.pay_day, list.filter(s => s.gid === g.id))).join('')}${none.length ? card('none', 'Guruhsiz o‘quvchilar', 0, none) : ''}
        <button type="button" class="gcard gnew" data-act="t-new-group"><b>＋</b><span>Yangi guruh</span></button></div>
      <form class="box" id="newGroup" hidden style="display:none;gap:10px;margin-top:22px">
        <h3>Yangi guruh</h3>
        <div class="form-2"><label class="field"><span>Guruh nomi</span><input class="input" name="name" required maxlength="40" placeholder="Masalan: 11-B kechki"></label>
        <label class="field"><span>Oylik to‘lov kuni (1-31)</span><input class="input" name="pay_day" type="number" min="1" max="31" placeholder="22"></label></div>
        <label class="field"><span>O‘quvchilar ro‘yxati (har qatorda bittadan: Ism Familiya; xohlasangiz vergul bilan ota-ona telefoni)</span><textarea class="input" name="list" rows="6" placeholder="Madina Karimova, +998 90 123 45 67&#10;Ali Valiyev&#10;Aziza Rahimova"></textarea></label>
        <p class="small muted">Har bir o‘quvchiga oson kod avtomatik beriladi. O‘quvchi ism-familiya + kod bilan kiradi.</p>
        <div><button class="btn btn-primary" type="submit">Guruh yaratish va kodlar berish</button></div>
      </form>`;
  },
  async group(id) {
    const [gr, ov] = await Promise.all([API.call('GET', '/t/groups'), API.call('GET', '/t/overview')]);
    const none = id === 'none', g = none ? { id: 'none', name: 'Guruhsiz o‘quvchilar', pay_day: 0 } : gr.groups.find(x => x.id === id);
    if (!g) { $('#tmain').innerHTML = '<p class="err">Guruh topilmadi.</p>'; return; }
    const list = ov.students.filter(s => none ? !s.gid : s.gid === id);
    const txt = list.map(s => `${s.name} — ${s.code}`).join('\n');
    $('#tmain').innerHTML = `${this.demo()}
      <a class="crumb" href="#teacher">${ICON.left}<span>Guruhlar</span></a>
      <div class="t-title"><div><h1>${esc(g.name)}</h1><p>${list.length} ta o‘quvchi${g.pay_day ? `, to‘lov kuni: har oyning ${g.pay_day}-kuni` : ''}. Kodni o‘quvchiga bering: u ism-familiya + kod bilan kiradi.</p></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn btn-ghost btn-sm" data-act="t-copy" data-text="${esc(txt)}">Kodlarni nusxalash</button><button type="button" class="btn btn-ghost btn-sm" data-act="t-print">Chop etish</button>${none ? '' : `<button type="button" class="btn btn-ghost btn-sm" data-act="t-group-edit">Guruhni tahrirlash</button>`}</div></div>
      ${none ? '' : `<form class="box" id="editGroup" data-id="${g.id}" hidden style="display:none;gap:10px;margin-bottom:16px">
        <div class="form-2"><label class="field"><span>Guruh nomi</span><input class="input" name="name" value="${esc(g.name)}" maxlength="40"></label>
        <label class="field"><span>Oylik to‘lov kuni (1-31)</span><input class="input" name="pay_day" type="number" min="1" max="31" value="${g.pay_day || ''}"></label></div>
        <label style="display:flex;gap:8px;align-items:center"><input type="checkbox" name="apply_all" value="1"> <span class="small">Shu kunni guruhdagi hamma o‘quvchiga qo‘llash</span></label>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary" type="submit">Saqlash</button><button type="button" class="btn btn-danger btn-sm" data-act="t-del-group" data-id="${g.id}">Guruhni o‘chirish</button></div>
        <p class="small muted">Guruh o‘chirilsa, o‘quvchilar o‘chmaydi, «Guruhsiz» bo‘limiga o‘tadi.</p></form>`}
      <div class="tw"><table class="tt"><thead><tr><th>O‘quvchi</th><th>Kod</th><th>To‘lov</th><th>Boshlagan</th><th>Daraja</th><th>Faol vaqt</th><th>Tugatgan darslar</th><th>Test o‘rtacha</th><th>Xabarlar</th><th>Oxirgi faollik</th></tr></thead><tbody>
      ${list.map(s => `<tr class="clickable" data-act="t-open" data-id="${s.id}">
        <td class="who"><b>${esc(s.name)}</b><small>${s.parent_phone ? esc(s.parent_phone) : '—'}${this.isAdmin() && s.teacher ? ' · ' + esc(s.teacher) : ''}</small></td>
        <td><b style="font-size:1.1rem;user-select:all">${esc(s.code)}</b></td>
        <td>${payBadge(s)}</td>
        <td class="num">${this.fmtStart(s.first_login || 0)}</td>
        <td>${s.level ? `<span class="lvchip" style="background:${LEVELS[s.level].c}">${s.level}</span>` : '<span class="pill p-none">tanlamagan</span>'}</td>
        <td class="num">${fmtDur(s.active_sec)}</td>
        <td class="num">${s.summary.done} / ${LESSONS.length}</td>
        <td class="num">${s.summary.test == null ? '—' : `<span class="pill ${s.summary.test >= 80 ? 'p-ok' : s.summary.test >= 50 ? 'p-mid' : 'p-bad'}">${s.summary.test}%</span>`}</td>
        <td>${s.unread ? `<span class="pill p-bad">${s.unread} yangi</span>` : '<span class="muted">—</span>'}</td>
        <td class="num">${s.last_seen ? fmtWhen(s.last_seen) : '<span class="muted">kirmagan</span>'}</td></tr>`).join('') || '<tr><td colspan="10" class="muted">Bu guruhda hali o‘quvchi yo‘q.</td></tr>'}</tbody></table></div>
      ${none ? '' : `<form class="box" id="addList" data-id="${g.id}" style="display:grid;gap:10px;margin-top:20px">
        <label class="field"><span>Yangi o‘quvchilar qo‘shish (har qatorda bittadan, xohlasangiz vergul bilan telefon)</span><textarea class="input" name="list" rows="4" required placeholder="Ism Familiya, +998 90 123 45 67"></textarea></label>
        <div><button class="btn btn-primary" type="submit">Qo‘shish va kod berish</button></div></form>`}`;
  },
  async teachers() {
    if (!this.isAdmin()) { $('#tmain').innerHTML = '<p class="err">Ruxsat yo‘q.</p>'; return; }
    const r = await API.call('GET', '/t/teachers'), sug = () => 't.' + Math.random().toString(36).slice(2, 7) + String(100 + Math.floor(Math.random() * 900));
    const fresh = this.newT; this.newT = null;
    $('#tmain').innerHTML = `${this.demo()}
      <div class="t-title"><div><h1>Ustozlar</h1><p>Har ustozning o‘z paroli va o‘z o‘quvchilari bor. Ustoz faqat o‘z o‘quvchilarini ko‘radi. Siz (Bosh ustoz) hammasini ko‘rasiz.</p></div></div>
      ${fresh ? `<div class="box" style="margin-bottom:16px"><h4>${esc(fresh.name)} qo‘shildi</h4><p>Parol: <b style="font-size:1.2rem;user-select:all">${esc(fresh.password)}</b></p><p class="small muted">Parolni ustozga bering. Keyin ko‘rsatilmaydi, lekin almashtirish mumkin.</p></div>` : ''}
      <form class="form-row" id="newTeacher">
        <label class="field"><span>Ustoz ismi</span><input class="input" name="name" required placeholder="Kamola Karimova"></label>
        <label class="field"><span>Parol (kamida 6 belgi)</span><input class="input" name="password" required minlength="6" value="${sug()}"></label>
        <button class="btn btn-primary" type="submit">Ustoz qo‘shish</button>
      </form>
      <div class="tw"><table class="tt"><thead><tr><th>Ustoz</th><th>O‘quvchilar</th><th>Qo‘shilgan</th><th>Yangi parol</th><th></th></tr></thead><tbody>
      ${r.teachers.map(t => `<tr><td class="who"><b>${esc(t.name)}</b></td><td class="num">${t.n}</td><td class="num">${fmtWhen(t.created)}</td>
        <td><form data-form="t-pass" data-id="${t.id}" style="display:flex;gap:6px"><input class="input" name="password" minlength="6" placeholder="yangi parol" required style="min-width:130px"><button class="btn btn-ghost btn-sm" type="submit">Almashtirish</button></form></td>
        <td><button type="button" class="btn btn-danger btn-sm" data-act="t-del-teacher" data-id="${t.id}">O‘chirish</button></td></tr>`).join('') || '<tr><td colspan="5" class="muted">Hali ustoz yo‘q. Yuqoridan qo‘shing.</td></tr>'}</tbody></table></div>
      <p class="small muted" style="margin-top:10px">Ustoz o‘chirilsa, uning o‘quvchilari o‘chmaydi, «Bosh ustoz»ga o‘tadi.</p>`;
  },
  async codes() {
    const lg = await API.call('GET', '/t/logins');
    $('#tmain').innerHTML = `${this.demo()}
      <div class="t-title"><div><h1>Jurnal${this.isAdmin() ? ' va ovozlar' : ''}</h1><p>O‘quvchilarning oxirgi kirishlari.</p></div></div>
      <h2 class="t-sec-h">Kirishlar jurnali</h2>
      <div class="tw"><table class="tt" style="min-width:420px"><thead><tr><th>O‘quvchi</th><th>Vaqt</th></tr></thead><tbody>${lg.logins.map(l => `<tr><td>${esc(l.name)}</td><td class="num">${fmtWhen(l.at)}</td></tr>`).join('') || '<tr><td colspan="2" class="muted">Hali hech kim kirmagan.</td></tr>'}</tbody></table></div>
      ${this.isAdmin() ? `<h2 class="t-sec-h">Ovozlar</h2>
      <div class="audio-box" id="audioBox">${await this.audioBox()}</div>` : ''}`;
  },
  async audioBox() {
    const m = M(), total = m && m.a ? m.a.p.length : 0;
    if (API.mode !== 'server') return `<p><b>Namuna rejimi:</b> native ovozlar allaqachon ulangan. Haqiqiy saytda bu yerda «english-room-ovozlar.zip» faylini bir marta yuklaysiz.</p>`;
    if (!total) return '<p class="muted">Ovozlar ro‘yxati yuklanmadi. Sahifani yangilang.</p>';
    let have = [];
    try { have = (await API.call('GET', '/t/audio')).packs.map(x => x.id); } catch (e) {}
    const ok = m.a.p.filter(id => have.includes(id)).length;
    return `<div class="ab-top"><div><b class="ab-n">${ok} / ${total}</b><span>ovoz paketi yuklangan</span></div>${ok >= total ? '<span class="pill p-ok">Hammasi tayyor</span>' : ''}</div>
      <p>${ok >= total ? 'Barcha darslardagi gap va so‘zlar native ovozda eshitiladi.' : 'Barcha gap va so‘zlarning native ovozi tayyor turibdi. <b>english-room-ovozlar.zip</b> faylini shu yerga bir marta yuklang (internet tezligiga qarab 1–3 daqiqa). Yuklanmagan paketlar o‘rniga vaqtincha Cloudflare ovozi ishlaydi.'}</p>
      <label class="btn ${ok >= total ? 'btn-ghost' : 'btn-primary'}"><input type="file" id="audioFile" accept=".zip,.mp3,.bin" multiple class="sr"><span>${ok >= total ? 'Qayta yuklash' : 'Ovozlar faylini tanlash'}</span></label>
      <div class="ab-bar" id="abBar" hidden><i></i></div><p class="small muted" id="abMsg"></p>`;
  },
  async uploadAudio(files) {
    const m = M(); if (!m || !m.a) return;
    const want = new Set(m.a.p), items = [];
    for (const f of files) {
      if (/\.zip$/i.test(f.name)) { try { (await unzip(f)).forEach(x => items.push(x)); } catch (e) { toast('ZIP faylni o‘qib bo‘lmadi.'); return; } }
      else if (/\.(mp3|bin)$/i.test(f.name)) items.push({ name: f.name, data: new Uint8Array(await f.arrayBuffer()) });
    }
    const list = items.map(x => ({ id: x.name.split('/').pop().replace(/\.(mp3|bin)$/i, ''), data: x.data })).filter(x => want.has(x.id));
    if (!list.length) { toast('Bu faylda ovoz paketlari topilmadi. «english-room-ovozlar.zip» ni tanlang.'); return; }
    const bar = $('#abBar'), msg = $('#abMsg'); bar.hidden = false; let done = 0, fail = 0;
    for (const x of list) {
      try { await API.call('POST', '/t/audio', { id: x.id, data: await toB64(x.data) }); done++; } catch (e) { fail++; }
      bar.firstElementChild.style.width = Math.round((done + fail) / list.length * 100) + '%';
      msg.textContent = `${done + fail} / ${list.length} paket…`;
    }
    toast(fail ? `${done} ta yuklandi, ${fail} ta xato. Qayta urinib ko‘ring.` : 'Ovozlar yuklandi. Endi hammasi native ovozda.');
    $('#audioBox').innerHTML = await this.audioBox();
  },
  async student(id) {
    const r = await API.call('GET', '/t/students/' + id), s = r.student, P = r.progress || {}, ls = P.lessons || {};
    s.paid = r.paid || [];
    let gl = []; try { gl = (await API.call('GET', '/t/groups')).groups; } catch (e) {}
    const gname = (gl.find(x => x.id === s.gid) || {}).name || s.group || 'Guruhsiz';
    const tests = Object.values(ls).filter(x => x.test && x.test.total).map(x => x.test.best / x.test.total);
    const srs = Object.entries(P.srs || {}), now = Date.now();
    const timeBy = {}; (r.time || []).forEach(t => { if (t.lesson) timeBy[t.lesson] = (timeBy[t.lesson] || 0) + t.sec; });
    const rows = LESSONS.filter(l => { const x = ls['l' + l.n]; return (x && (Object.keys(x.sec || {}).length || x.test)) || timeBy[l.n] > 30; }).map(l => {
      const x = ls['l' + l.n] || { sec: {} }, t = x.test, last = t && t.attempts && t.attempts[t.attempts.length - 1];
      const weak = last ? Object.entries(last.rules).filter(([, [a, b]]) => a < b).map(([rid]) => { const g = isV(l) ? l.vg.find(z => z.id === rid) : l.g.find(z => z.id === rid); return g ? (g.h || g.t) : rid; }) : [];
      return `<tr><td>${isV(l) ? `<b>Vocab.</b> ${esc(l.t)}` : `<b>${l.n}.</b> ${esc(l.t)}`}</td><td><span class="dots" style="display:inline-flex;gap:3px">${secsOf(l).map(sc => `<i title="${sc.en}" style="width:11px;height:11px;border-radius:50%;display:inline-block;background:${x.sec && x.sec[sc.id] ? 'var(--ok)' : 'var(--line)'}"></i>`).join('')}</span></td>
        <td class="num">${t ? `<span class="pill ${t.best === t.total ? 'p-ok' : t.best / t.total >= .6 ? 'p-mid' : 'p-bad'}">eng yaxshi ${t.best}/${t.total}</span><br><span class="small muted">${t.attempts.length} urinish, oxirgisi ${last.score}/${last.total}</span>` : '—'}</td>
        <td>${weak.length ? `<span class="weak">${weak.map(w => `<span class="pill p-bad">${esc(w)}</span>`).join('')}</span>` : (t ? '<span class="pill p-ok">hammasini tushungan</span>' : '—')}</td>
        <td class="num">${fmtDur(timeBy[l.n] || 0)}</td></tr>`;
    }).join('');
    const writings = LESSONS.map(l => ({ l, w: ls['l' + l.n] && ls['l' + l.n].writing && ls['l' + l.n].writing.submitted })).filter(x => x.w).reverse();
    const lv = s.level;
    $('#tmain').innerHTML = `${this.demo()}
      <a class="crumb" href="#teacher-g-${s.gid || 'none'}">${ICON.left}<span>${esc(gname)}</span></a>
      <div class="t-title"><div><h1>${esc(s.name)}</h1><p>${esc(gname)}${s.parent_phone ? `, ota-ona: <a href="tel:${esc(s.parent_phone.replace(/[^\d+]/g, ''))}">${ICON.phone} ${esc(s.parent_phone)}</a>` : ''}</p></div>
        <button type="button" class="btn btn-ghost btn-sm" data-act="t-edit-toggle">Tahrirlash</button></div>
      <form class="form-row" id="editStudent" data-id="${s.id}" hidden>
        <label class="field"><span>Ism familiya</span><input class="input" name="name" value="${esc(s.name)}"></label>
        <label class="field"><span>Ota-ona telefoni</span><input class="input" name="parent_phone" value="${esc(s.parent_phone || '')}"></label>
        <label class="field"><span>Guruh</span><select name="gid"><option value="">Guruhsiz</option>${gl.map(x => `<option value="${x.id}" ${x.id === s.gid ? 'selected' : ''}>${esc(x.name)}</option>`).join('')}</select></label>
        <label class="field"><span>To‘lov kuni (1-31)</span><input class="input" name="pay_day" type="number" min="0" max="31" value="${s.pay_day || ''}"></label>
        <label class="field"><span>Daraja</span><select name="level"><option value="" ${!lv ? 'selected' : ''}>O‘quvchi o‘zi tanlaydi</option>${['A0', 'A1', 'A2', 'B1', 'B2'].map(k => `<option ${lv === k ? 'selected' : ''}>${k}</option>`).join('')}</select></label>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary" type="submit">Saqlash</button><button type="button" class="btn btn-danger btn-sm" data-act="t-delete" data-id="${s.id}">O‘chirish</button></div>
      </form>
      <div class="tiles">
        <div class="tile"><b>${fmtDur(s.active_sec)}</b><span>jami faol vaqt</span></div>
        <div class="tile"><b style="font-size:1.25rem">${s.first_login ? this.fmtStart(s.first_login) : '—'}</b><span>darsni boshlagan sana</span></div>
        <div class="tile"><b>${s.sessions || 0}</b><span>marta kirgan</span></div>
        <div class="tile"><b>${tests.length ? Math.round(tests.reduce((a, b) => a + b, 0) / tests.length * 100) + '%' : '—'}</b><span>test o‘rtacha</span></div>
      </div>
      <div class="td-grid">
        <div class="td-box"><h3>Kirish kodi</h3><p style="margin:6px 0"><b style="font-size:1.6rem;user-select:all">${esc(s.code)}</b></p><p class="small muted">O‘quvchi ism-familiya + shu kod bilan kiradi.</p><button type="button" class="btn btn-ghost btn-sm" data-act="t-newcode" data-id="${s.id}">Yangi kod berish</button></div>
        <div class="td-box"><h3>Oylik to‘lov</h3>${payChips(s)}</div>
        <div class="td-box wide"><h3>Darslar bo‘yicha: nimani tushundi, nimani tushunmadi</h3>
          ${rows ? `<div class="tw" style="border:0"><table class="tt" style="min-width:640px"><thead><tr><th>Dars</th><th>Bo‘limlar</th><th>Test</th><th>Oxirgi testda tushunmagan qoidalar</th><th>Vaqt</th></tr></thead><tbody>${rows}</tbody></table></div>` : '<p class="muted">Hali dars boshlamagan.</p>'}
        </div>
        <div class="td-box"><h3>So‘zlar (takrorlash)</h3><ul class="kv">
          <li><span>Yig‘ilgan so‘zlar</span><b>${srs.length}</b></li>
          <li><span>Bugun takrorlashi kerak</span><b>${srs.filter(([, c]) => c.due <= now).length}</b></li>
          <li><span>Yaxshi o‘zlashtirgan</span><b>${srs.filter(([, c]) => c.ivl >= 14).length}</b></li>
          <li><span>Qiyin so‘zlar</span><b>${srs.filter(([, c]) => c.lap >= 2).map(([w]) => w).slice(0, 6).join(', ') || '—'}</b></li></ul></div>
        <div class="td-box"><h3>Kirishlar</h3>${r.logins.length ? `<ul class="kv">${r.logins.slice(0, 8).map(l => `<li><span>Kirdi</span><b>${fmtWhen(l.at)}</b></li>`).join('')}</ul>` : '<p class="muted">Hali kirmagan.</p>'}</div>
        <div class="td-box wide"><h3>Daraja tugagach fikri</h3>${this.fbHtml(P.feedback) || '<p class="muted">Hali daraja tugatmagan.</p>'}</div>
        ${writings.length ? `<div class="td-box wide"><h3>Writing (eski)</h3>${writings.map(({ l, w }) => { const a = analyzeText(w.text, l); return `<div style="margin-bottom:14px"><p class="small muted">Lesson ${l.n}, ${fmtWhen(w.at)}, ${w.words} so‘z</p><p style="background:var(--surface-2);border-radius:14px;padding:12px 14px;margin:6px 0">${esc(w.text)}</p>${a.issues.length ? `<ul class="issues">${a.issues.map(i => `<li>${i}</li>`).join('')}</ul>` : '<p class="small muted">Avtomatik tekshiruv xato topmadi.</p>'}</div>`; }).join('')}</div>` : ''}
        <div class="td-box wide"><h3>Xabarlar</h3><div class="chat-log" style="max-height:420px;background:var(--bg);border-radius:14px">${r.messages.length ? r.messages.map(m => msgHtml(m, m.sender === 'teacher', m.sender === 'teacher' ? 'Siz' : esc(s.name.split(' ')[0]))).join('') : '<p class="chat-empty">Xabar yo‘q.</p>'}</div>
          ${this.replyForm(s.id)}</div>
      </div>`;
  },
  replyForm(id) {
    return `<div class="chat-foot" style="border:0;padding:10px 0 0"><div class="preview" id="tPrev" hidden></div><form class="chat-form" data-form="t-reply" data-id="${id}">
      <label class="attach" title="Rasm biriktirish">${ICON.camera}<input type="file" accept="image/*" class="sr" data-img="t"></label>
      <label class="sr" for="tReply">Javob</label><textarea id="tReply" rows="2" placeholder="Javobingizni yozing"></textarea>
      <button class="btn btn-primary send" type="submit" aria-label="Yuborish">${ICON.send}</button></form></div>`;
  },
  async inbox() {
    const th = this.threads || [];
    if (!this.thread && th[0]) this.thread = th[0].sid;
    let conv = '<p class="chat-empty">Xabarlar yo‘q.</p>', t = th.find(x => x.sid === this.thread);
    if (t) {
      const r = await API.call('GET', `/t/students/${t.sid}/messages`);
      conv = `<div class="conv-h"><b>${esc(t.name)}</b><a class="btn btn-ghost btn-sm" href="#teacher-s-${t.sid}">Profil</a></div>
        <div class="chat-log" id="tLog">${r.messages.map(m => msgHtml(m, m.sender === 'teacher', m.sender === 'teacher' ? 'Siz' : esc(t.name.split(' ')[0]))).join('')}</div>
        <div style="padding:0 14px 12px">${this.replyForm(t.sid)}</div>`;
      t.unread = 0;
    }
    $('#tmain').innerHTML = `${this.demo()}<div class="t-title"><div><h1>Xabarlar</h1><p>O‘quvchilar savollari va daftar rasmlari. Rasmni bossangiz kattalashadi.</p></div></div>
      <div class="inbox"><div class="threads">${th.map(x => `<button type="button" class="thread${x.sid === this.thread ? ' on' : ''}" data-act="t-thread" data-id="${x.sid}"><span><b>${esc(x.name)}</b><small>${esc(x.last_text || '')}</small></span>${x.unread ? `<span class="badge" style="position:static">${x.unread}</span>` : `<span class="small" style="opacity:.6">${fmtWhen(x.last_at)}</span>`}</button>`).join('') || '<p class="muted small" style="padding:10px">Hali xabar yo‘q.</p>'}</div>
      <div class="conv">${conv}</div></div>`;
    const lg = $('#tLog'); if (lg) lg.scrollTop = lg.scrollHeight;
  }
};

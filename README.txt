ENGLISH ROOM — O‘RNATISH (Cloudflare, 10–15 daqiqa)
=====================================================

Sizga 2 ta fayl kerak:
  • worker.js                  — butun sayt (dizayn, 30 dars, rasmlar, test, chat, Teacher panel)
  • english-room-ovozlar.zip   — barcha gap va so‘zlarning tayyor native ovozi (ochmang, shundayligicha qoladi)

1) D1 BAZA YARATISH
   dash.cloudflare.com → Storage & Databases → D1 SQL Database → Create
   Nomi: english-room → Create.
   (Jadvallarni yaratish shart emas: sayt ularni o‘zi yaratadi.)

2) WORKER YARATISH
   Workers & Pages → Create → Start with Hello World → nomi: english-room → Deploy.
   Diqqat: JavaScript kursingiz workeriga TEGMANG, yangi worker oching.

3) KODNI QO‘YISH
   Yangi worker → Edit code → chapdagi worker.js ichidagi hamma narsani o‘chiring
   → bizning worker.js faylidagi hamma matnni nusxalab joylang → Deploy.

4) BAZA VA OVOZNI ULASH
   Worker → Settings → Bindings → Add binding:
     • D1 database → Variable name: DB → Database: english-room → Add
     • Workers AI   → Variable name: AI → Add   (zaxira ovoz uchun, ixtiyoriy)
   (Nomlar aynan katta harf bilan DB va AI bo‘lishi shart.)

5) TEACHER PANEL PAROLI
   Worker → Settings → Variables and Secrets → Add
     Type: Secret, Name: TEACHER_PASSWORD, Value: o‘zingizning parolingiz → Deploy.
   (O‘rnatmasangiz parol: e.room123 — shu kodni yozishingiz bilan panel avtomatik ochiladi.)

6) OVOZLARNI YUKLASH (bir marta)
   Sayt manzilini oching → «Teacher panel» → parol → «O‘quvchi qo‘shish»
   → sahifa pastidagi «Ovozlar» → «Ovozlar faylini tanlash» → english-room-ovozlar.zip
   → «… / … ovoz paketi yuklangan» yozuvi to‘lguncha kuting (1–3 daqiqa).
   Kompyuter zip faylni o‘zi ochib yuborgan bo‘lsa: papka ichidagi hamma .mp3 fayllarni
   birdaniga belgilab tanlang — bu ham ishlaydi.

7) O‘QUVCHILAR
   Endi KOD KERAK EMAS: o‘quvchi saytga kirib faqat ISMI va FAMILIYASINI yozadi (masalan: Ali Valiyev).
   Yangi ism avtomatik ro‘yxatga qo‘shiladi, qaytib kirganda xuddi shu ism bilan davom etadi.
   Ota-ona telefoni va guruhni «Teacher panel» → o‘quvchi kartasida keyin qo‘shasiz.
   Eski kodlar ham ishlashda davom etadi (Teacher panelda ko‘rinadi).

OVOZ HAQIDA
   Barcha ~12 000 ta gap, so‘z va podkast satri oldindan native Amerika talaffuzida
   (ayol va erkak ovozi) yozib qo‘yilgan. Internet sekin bo‘lsa ham ovoz darhol chiqadi,
   kuniga limit yo‘q, pul to‘lanmaydi. 6-qadamni qilmagan bo‘lsangiz, sayt vaqtincha
   Cloudflare AI ovozidan, u ham bo‘lmasa brauzer ovozidan foydalanadi.

KONTENTNI O‘ZGARTIRISH (ixtiyoriy, dasturchi uchun)
   src/content/*.js — darslar; src/pics/*.txt — rasmlar; src/notes/*.txt — misol izohlari.
   python3 build.py → dist/worker.js va dist/index.html qayta yig‘iladi.

TARKIB (yangilangan)
   A0, A1, A2 (51 dars), B1 (39 dars + 8 takrorlash) va B2 (14 dars). B1 da har bir darsda: grammatika (rasmli, animatsiyali
   misollar, tarjima mashqlari, qizil YODLANG qoidalar), lug‘at (~40 yangi so‘z, maqola, so‘z turlari), speaking
   (strukturalar), listening (English Panda grammatika videosi + retelling + AI tekshiruv), writing (imlo + suhbat), test.
   B1 retelling AI tekshiruvi faqat Cloudflare’da (Workers AI, binding nomi AI) ishlaydi.

YANGILANISH (4-noyabr)
   • Kirish: ism + familiya (kod olib tashlandi).
   • Listening: A1, A2 va B1 darslarda English Panda kanalidan dars mavzusiga mos video qidiruv havolasi;
     B2 darslarida Storyline English havolasi.
   • B1+ ovoz 20% sekinlashtirilgan.
   • Yangi B1 darslar (Murphy asosida): 239-dars. B2 (Destination B2 asosida): 301–314, 14 ta grammar+vocabulary juftligi tayyor — har bir so‘z uchun «Ishlatish» qoidasi, ilmiy maqola, Storyline English listening, sekinroq tabiiy ovoz.

YANGILANISH (4-noyabr, kechqurun)
   • Metro xaritada har bir dars raqami ostida grammar mavzusi qalin shriftda.
   • Orqa fondagi stikerlar (Aa, abc, ?) olib tashlandi.
   • Writing: shartlar (so‘z/gap soni va h.k.) faqat yo‘l-yo‘riq; shart bajarilmasa ham matn yuboriladi.
   • Mikrofon: sayt O‘Z manzilida (https://…) ochilganda brauzer ruxsat so‘raydi. Ko‘rish oynasi/iframe ichida
     bloklanadi. Ruxsat berilmasa: manzil satridagi qulf → Mikrofon → Ruxsat → sahifani yangilang.
   • Daraja tugagach o‘quvchi fikr yozadi → Teacher panel → «Fikrlar».

FAYLLAR RO‘YXATI (hammasi shu zipda: english-room-server.zip)
   worker.js        — Cloudflare Worker (sayt + server, ASOSIY fayl; CSS/HTML/JS ichida)
   index.html       — saytning o‘zi (CSS va JS ichida), statik hostingga qo‘yish uchun
   media.js         — rasm/animatsiya ma’lumotlari (index.html bilan yonma-yon turishi shart)
   _headers         — Netlify/Cloudflare Pages uchun: mikrofonga ruxsat sarlavhasi
   english-room-ovozlar.zip — ovozlar (alohida yuboriladi, 143 MB)
   Diqqat: o‘quvchilar ma’lumoti, Teacher panel va fikrlar SERVER (worker.js + D1 baza) talab qiladi.
   Faqat statik hostingda (index.html) sayt ishlaydi, lekin ma’lumot faqat o‘quvchining brauzerida qoladi.


NETLIFY / STATIK HOSTING (ixtiyoriy)
   Papka: site/  — index.html + style.css + app.js + media.js + _headers (+ netlify.toml)
   1) Netlify → Add new site → Deploy manually → site papkasini sudrab tashlang.
   2) Server qismi (o‘quvchilar, Teacher panel, fikrlar) Cloudflare worker.js + D1 da turadi.
      Netlify saytiga ulash: site/netlify.toml ichidagi YOUR-WORKER manzilini o‘z workeringiz bilan almashtiring
      (masalan https://english-room.ismingiz.workers.dev). Shunda Netlify manzilidagi /api/* so‘rovlari workerga boradi.
   3) Ovozlarni Teacher paneldan bir marta yuklang (README 6-qadam) — Netlify manzilida ham ishlaydi.
   Mikrofon: sayt https manzilda ochilganda ishlaydi (Netlify va Cloudflare ikkalasida ham).


YANGILANISH (4-noyabr, kech)
   • Ovoz: ~3 500 ta so‘z avtomatik tinglab tekshirildi, noto‘g‘ri/tushunarsiz aytilgan ~300 tasi qayta yozildi;
     gap oxiridagi o‘zbekcha izohlar, o‘q belgilari (→, =, ✗) endi ovozda o‘qilmaydi. Ovoz fayllari yangilandi:
     english-room-ovozlar.zip ni Teacher paneldan QAYTA yuklang (README 6-qadam).
   • Xaritada dars raqami ostida grammar mavzusi qalin shriftda; orqa fondagi stikerlar olib tashlandi.
   • Rasmlar gapdagi fe’lga qarab harakatlanadi (urishish, yugurish, yig‘lash, ovqatlanish, gaplashish…).
   • Writing: shartlar faqat yo‘l-yo‘riq, bajarilmasa ham matn yuboriladi.
   • Daraja tugagach o‘quvchi fikr yozadi → Teacher panel → «Fikrlar».


KO‘P USTOZLI TIZIM (5-noyabr)
- Bosh ustoz paroli: e.room123 (Cloudflare'da TEACHER_PASSWORD secret bo‘lsa, o‘sha ishlaydi). Bosh ustoz hamma o‘quvchilarni ko‘radi.
- Teacher panel → «Ustozlar» bo‘limida boshqa ustozlarni qo‘shing (ism + parol). Har ustoz o‘z paroli bilan kiradi va faqat o‘z o‘quvchilarini ko‘radi.
- O‘quvchi ism-familiya bilan kiradi. Birinchi marta kirganda ustozini tanlaydi. Bir xil ism bir nechta ustozda bo‘lsa, kirishda ustozni tanlaydi.
- O‘quvchi qo‘shishni ustoz o‘z panelidan qiladi, u avtomatik shu ustozga biriktiriladi.
- Panelda «Boshlagan» ustuni: o‘quvchi birinchi marta qaysi kuni kirgani.
- Eski o‘quvchilar «Bosh ustoz»ga biriktirilgan. Ovoz paketlarini faqat Bosh ustoz yuklaydi.


GURUHLAR, KOD VA OYLIK TO‘LOV (5-noyabr, kech)
- O‘quvchi endi ism-familiya + KOD bilan kiradi (kodsiz kira olmaydi). Kod oson: masalan olma47, robot35.
- Teacher panel → «Guruhlar»: guruhga nom bering, o‘quvchilar ro‘yxatini qatorma-qator yozing (xohlasangiz vergul bilan ota-ona telefoni). Har o‘quvchiga avtomatik kod beriladi. Guruh sahifasida «Kodlarni nusxalash» va «Chop etish» tugmalari bor.
- Eski o‘quvchilar kodlarini «Guruhlar → Guruhsiz o‘quvchilar» yoki o‘quvchi profilidan ko‘rasiz. Kerak bo‘lsa «Yangi kod berish» tugmasi bor.
- Oylik to‘lov: guruh yoki o‘quvchi profilida to‘lov kunini (masalan 22) kiriting. Oy chipiga bossangiz ✅ (to‘landi) bo‘ladi. «To‘lanmagan» faqat to‘lov kuni o‘tib ketgandan keyin chiqadi.
- Worker yangilanganda jadvallar o‘zi yangilanadi.

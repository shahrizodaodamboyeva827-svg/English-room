/* =====================================================================
   A0 — STARTER (Lessons 1–6). Qoidalar Grammarway 1 asosida (Unit 1, 2, 4).
   Format:
   g: qoidalar [{id, h: sarlavha, f: formula, x: tushuntirish, tb: jadval, e: [[EN, UZ]], n: eslatma}]
   m: xatolar [[xato, to‘g‘ri, nega]]
   v: so‘zlar [[so‘z, IPA, tarjima, misol, misol tarjimasi]]
   s: speaking {f: qoliplar, a: namunalar, q: savollar}
   li: listening {show, title, about, who, v: ovozlar f/m, lines: [[0|1, gap]], q: [[savol, [variantlar], to‘g‘ri]]}
   w: writing {task, plan, model, c: [[nom, regex, min]], min}
   tq: test [[qoida id, savol, [variantlar], to‘g‘ri, izoh]]
   ===================================================================== */

L({
  n: 1, lvl: 'A0', t: 'Alphabet & Reading Rules', uz: 'Alifbo, o‘xshash harflar va o‘qish qoidalari', topic: 'Sounds & letters',
  gi: 'Ingliz tilida harfning nomi va tovushi ko‘pincha har xil. Shuning uchun so‘zni harfma-harf emas, qoidalar bilan o‘qiymiz. Bu darsda eng kerakli 5 ta qoidani o‘rganasiz.',
  g: [
    { id: 'abc', h: 'Alifbo: 26 harf', f: '26 harf + *5 unli: a, e, i, o, u* + 21 undosh',
      x: '<p>Ingliz alifbosida 26 ta harf bor. Ulardan 5 tasi unli: <b>a, e, i, o, u</b>. Qolgani undosh. <b>y</b> ba’zan unli vazifasida keladi (my, happy).</p><p>Harflarning <b>nomi</b> o‘zbekchadan farq qiladi: A — «ey», E — «iy», I — «ay». Ismingizni harflab aytganda shu nomlar ishlatiladi.</p>',
      tb: { h: ['Harf', 'Nomi', 'Esda tutish'], r: [['A a', '/eɪ/ «ey»', 'name, cake'], ['E e', '/iː/ «iy»', 'he, me'], ['I i', '/aɪ/ «ay»', 'I, nice'], ['G g', '/dʒiː/ «jiy»', 'J bilan adashtirmang'], ['J j', '/dʒeɪ/ «jey»', 'G bilan adashtirmang'], ['H h', '/eɪtʃ/ «eych»', '«ash» emas'], ['R r', '/ɑː/ «a:»', 'so‘z oxirida ko‘pincha o‘qilmaydi (UK)'], ['W w', '/ˈdʌbljuː/ «dabl-yu»', 'ikkita u'], ['Y y', '/waɪ/ «uay»', ''], ['Q q', '/kjuː/ «kyu»', 'doim qu: queen'], ['X x', '/eks/ «eks»', ''], ['Z z', '/zed/ (UK), /ziː/ (US)', '']] },
      e: [['A, E, I, O, U', 'Unli harflar'], ['My name is *Aziz*. *A-Z-I-Z*.', 'Ismim Aziz. A-Z-I-Z.'], ['How do you *spell* it?', 'Bu qanday harflab yoziladi?']] },
    { id: 'similar', h: 'O‘xshash harflar va tovushlar', f: ['*b ≠ d*, *p ≠ q* (yozuvda)', '*v* /v/ + *w* /w/ (lab bilan)', '*th* /θ/ think + *th* /ð/ this'],
      x: '<p>Yozuvda <b>b–d</b> va <b>p–q</b> ko‘zgudagidek o‘xshash: <b>bed</b> so‘zida b va d qarama-qarshi turadi. Talaffuzda o‘zbek o‘quvchisi uchun eng qiyin uch juftlik: <b>v / w</b>, <b>th</b> ning ikki turi va <b>qisqa i / uzun ee</b>.</p><p><b>w</b> aytishda lablarni «u» kabi dumaloq qilasiz, tishlar labga tegmaydi: <b>west, water</b>. <b>v</b> da yuqori tishlar pastki labga tegadi: <b>very, van</b>. <b>th</b> da til uchi tishlar orasiga chiqadi: ovozsiz <b>think</b>, ovozli <b>this</b>.</p>',
      e: [['*very* — *west*', 'juda — g‘arb'], ['*think* — *this*', 'o‘ylamoq — bu'], ['*ship* — *sheep*', 'kema — qo‘y (qisqa i va uzun ee)'], ['*bed* — *dad*', 'karavot — dada']],
      n: 'th ni «s» yoki «d» deb aytmang: <b>think</b> «sink» emas, <b>this</b> «dis» emas.' },
    { id: 'vowels', h: 'Sehrli e: qisqa va uzun unli', f: ['undosh + unli + undosh :: *qisqa* + cap, pin, hop, cut', '… + *e* :: *uzun, e o‘qilmaydi* + cape, pine, hope, cute'],
      x: '<p>So‘z <b>undosh + unli + undosh</b> bilan tugasa, unli qisqa o‘qiladi: <b>cap</b> /kæp/, <b>pin</b> /pɪn/.</p><p>Oxiriga <b>e</b> qo‘shilsa, bu «sehrli e»: o‘zi o‘qilmaydi, lekin oldingi unlini uzun qiladi — harfning nomidek o‘qiladi: <b>cape</b> /keɪp/, <b>pine</b> /paɪn/, <b>hope</b> /həʊp/, <b>cute</b> /kjuːt/.</p>',
      tb: { h: ['Qisqa', 'Uzun (+e)'], r: [['cap /kæp/', 'cape /keɪp/'], ['pin /pɪn/', 'pine /paɪn/'], ['hop /hɒp/', 'hope /həʊp/'], ['cut /kʌt/', 'cute /kjuːt/'], ['not /nɒt/', 'note /nəʊt/']] },
      e: [['I have a *cap*.', 'Mening kepkam bor.'], ['I *hope* so.', 'Shunday deb umid qilaman.'], ['The cat is *cute*.', 'Mushuk yoqimtoy.']] },
    { id: 'pairs', h: 'Harf juftliklari: bitta tovush', f: '*sh* /ʃ/ + *ch* /tʃ/ + *ph* /f/ + *ck* /k/ + *ee* /iː/ + *oo* /uː/',
      x: '<p>Ikki harf birga kelib, <b>bitta tovush</b> beradi. Ularni alohida o‘qimang.</p>',
      tb: { h: ['Juftlik', 'Tovush', 'Misol'], r: [['sh', '/ʃ/ «sh»', 'ship, fish'], ['ch', '/tʃ/ «ch»', 'chair, lunch'], ['th', '/θ/ yoki /ð/', 'three, mother'], ['ph', '/f/', 'phone, photo'], ['ck', '/k/', 'back, black'], ['wh', '/w/', 'what, white'], ['ee / ea', '/iː/ uzun «i:»', 'see, tea'], ['oo', '/uː/ yoki /ʊ/', 'food, book'], ['ng', '/ŋ/ (g eshitilmaydi)', 'sing, long']] },
      e: [['*Ph*one', 'Telefon («fon»)'], ['*Wh*ite *sh*eep', 'Oq qo‘y'], ['Si*ng* a so*ng*', 'Qo‘shiq ayt']] },
    { id: 'tion', h: '-tion va -sion qo‘shimchalari', f: ['*-tion* :: «shn» /ʃən/ + station, information', '*-sion* :: «jn» /ʒən/ + television, decision', 'l, n, s dan keyin *-sion* :: «shn» /ʃən/ + mission, tension'],
      x: '<p><b>-tion</b> doim <b>/ʃən/</b> «shn» o‘qiladi: <b>station</b> /ˈsteɪʃən/. «Stat-si-on» emas!</p><p><b>-sion</b> unlidan keyin <b>/ʒən/</b> (television, decision), <b>l, n, s</b> dan keyin <b>/ʃən/</b> (mission, tension).</p><p>Urg‘u <b>-tion / -sion dan oldingi bo‘g‘inga</b> tushadi: infor<b>MA</b>tion, tele<b>VI</b>sion.</p>',
      e: [['The *station* is near.', 'Bekat yaqinda.'], ['I need some *information*.', 'Menga ma’lumot kerak.'], ['We watch *television*.', 'Biz televizor ko‘ramiz.'], ['Good *question*!', 'Yaxshi savol!']],
      n: '<b>question</b> /ˈkwestʃən/ — bu yerda t oldidan s bor, shuning uchun «kvesch(ə)n».' }
  ],
  m: [
    ['station — «stat-si-on»', 'station — /ˈsteɪʃən/ «steyshn»', '-tion har doim «shn» o‘qiladi.'],
    ['think — «sink»', 'think — /θɪŋk/ (til tishlar orasida)', 'th tovushi «s» emas.'],
    ['cake — «kake»', 'cake — /keɪk/ «keyk»', 'Oxirgi e o‘qilmaydi, a uzun «ey» bo‘ladi.']
  ],
  v: [
    ['name', '/neɪm/', 'ism', 'My *name* is Lola.', 'Ismim Lola.'],
    ['spell', '/spel/', 'harflab aytmoq', 'Can you *spell* your name?', 'Ismingizni harflab ayta olasizmi?'],
    ['letter', '/ˈletə/', 'harf; xat', 'A is the first *letter*.', 'A — birinchi harf.'],
    ['word', '/wɜːd/', 'so‘z', 'This *word* is new.', 'Bu so‘z yangi.'],
    ['cake', '/keɪk/', 'tort, keks', 'I like chocolate *cake*.', 'Shokoladli tortni yaxshi ko‘raman.'],
    ['bike', '/baɪk/', 'velosiped', 'My *bike* is red.', 'Velosipedim qizil.'],
    ['home', '/həʊm/', 'uy (oila maskani)', 'I am at *home*.', 'Men uydaman.'],
    ['ship', '/ʃɪp/', 'kema', 'The *ship* is big.', 'Kema katta.'],
    ['sheep', '/ʃiːp/', 'qo‘y', 'The *sheep* is white.', 'Qo‘y oq.'],
    ['three', '/θriː/', 'uch', 'I have *three* books.', 'Menda uchta kitob bor.'],
    ['this', '/ðɪs/', 'bu', '*This* is my phone.', 'Bu mening telefonim.'],
    ['phone', '/fəʊn/', 'telefon', 'Where is my *phone*?', 'Telefonim qayerda?'],
    ['very', '/ˈveri/', 'juda', 'It is *very* good.', 'Bu juda yaxshi.'],
    ['water', '/ˈwɔːtə/', 'suv', 'I want *water*.', 'Suv xohlayman.'],
    ['station', '/ˈsteɪʃən/', 'bekat, stansiya', 'The bus *station* is here.', 'Avtobus bekati shu yerda.'],
    ['information', '/ˌɪnfəˈmeɪʃən/', 'ma’lumot', 'Thanks for the *information*.', 'Ma’lumot uchun rahmat.'],
    ['television', '/ˈtelɪvɪʒən/', 'televizor', 'The *television* is on.', 'Televizor yoniq.'],
    ['question', '/ˈkwestʃən/', 'savol', 'I have a *question*.', 'Savolim bor.']
  ],
  s: {
    i: 'Ismingizni harflab aytish — eng ko‘p kerak bo‘ladigan ko‘nikma: telefonda, mehmonxonada, imtihonda.',
    f: [['Savol', 'What’s your name?'], ['Javob', 'My name is ___.'], ['Savol', 'How do you spell it?'], ['Javob', 'It’s ___ - ___ - ___.'], ['So‘rash', 'Can you say that again, please?']],
    a: [['Namuna', 'Hi! My name is Madina. M-A-D-I-N-A. My surname is Karimova. K-A-R-I-M-O-V-A.'], ['Namuna 2', 'My name is Bekzod. B-E-K-Z-O-D. B like book, E like egg.']],
    q: ['What’s your name?', 'How do you spell your name?', 'How do you spell your surname?', 'Can you spell the word station?']
  },
  li: {
    show: 'Game Night', title: 'What’s your gamer tag?', about: 'Boshlovchi o‘yinchilardan nik (gamer tag) larini harflab aytishni so‘raydi.', who: ['Sara', 'Tim'], v: ['f', 'm'],
    lines: [[0, 'Hi! Welcome to Game Night. I’m Sara.'], [1, 'Hi, Sara! I’m Tim.'], [0, 'Tim, what’s your gamer tag?'], [1, 'It’s Fox Seven.'], [0, 'How do you spell it?'], [1, 'F-O-X, then S-E-V-E-N.'], [0, 'F-O-X, S-E-V-E-N. Great!'], [1, 'And my friend is Max. M-A-X.'], [0, 'Thank you, Tim. Good luck!']],
    q: [['What is Tim’s gamer tag?', ['Fox Seven', 'Box Seven', 'Fox Eleven'], 0], ['How do you spell the friend’s name?', ['M-A-K-S', 'M-A-X', 'M-E-X'], 1], ['Who is the host?', ['Tim', 'Max', 'Sara'], 2]]
  },
  w: {
    task: 'Ismingiz va familiyangizni harflab yozing. Keyin oilangizdagi 3 kishining ismini ham harflab yozing.', min: 20, sents: 4,
    plan: ['My name is … (harflab)', 'My surname is … (harflab)', 'My mother’s name is …', 'My friend’s name is …'],
    model: 'My name is Aziz. It’s A-Z-I-Z. My surname is Rahimov. It’s R-A-H-I-M-O-V. My mother’s name is Dilnoza. It’s D-I-L-N-O-Z-A. My friend’s name is Sam. It’s S-A-M.',
    c: [['Harflab yozilgan ismlar (A-Z-I-Z)', '\\b([A-Z]-){2,}[A-Z]\\b', 3]]
  },
  tq: [
    ['abc', 'How many letters are there in the English alphabet?', ['24', '26', '33'], 1, 'Ingliz alifbosida 26 ta harf bor.'],
    ['abc', 'Which group has only vowels?', ['a, e, i, o, u', 'a, b, c, d, e', 'k, l, m, n, o'], 0, 'Unlilar: a, e, i, o, u.'],
    ['abc', 'The letter I is pronounced…', ['/iː/ «iy»', '/aɪ/ «ay»', '/eɪ/ «ey»'], 1, 'I harfining nomi /aɪ/.'],
    ['similar', 'Which word starts with /w/, not /v/?', ['very', 'west', 'van'], 1, 'west — lablar dumaloq, tish labga tegmaydi.'],
    ['similar', 'In the word «think», th sounds like…', ['/θ/ — til tishlar orasida', '/s/', '/d/'], 0, 'think — ovozsiz th /θ/.'],
    ['vowels', 'How do you read «cute»?', ['/kʌt/', '/kjuːt/', '/ˈkjuːte/'], 1, 'Sehrli e: oxirgi e o‘qilmaydi, u uzun bo‘ladi.'],
    ['vowels', 'Which word has a short vowel?', ['hope', 'pine', 'cap'], 2, 'cap: undosh + unli + undosh, oxirida e yo‘q.'],
    ['pairs', '«ph» in «phone» sounds like…', ['/p/', '/f/', '/ph/'], 1, 'ph = /f/.'],
    ['tion', 'How do you read «station»?', ['/ˈstætsɪɒn/', '/ˈsteɪʃən/', '/ˈsteɪʒən/'], 1, '-tion = /ʃən/ «shn».'],
    ['tion', 'Where is the stress in «information»?', ['IN-for-ma-tion', 'in-FOR-ma-tion', 'in-for-MA-tion'], 2, 'Urg‘u -tion dan oldingi bo‘g‘inda.']
  ]
});

L({
  n: 2, lvl: 'A0', t: 'Greetings', uz: 'Salomlashish, tanishish va xayrlashish', topic: 'Greetings & first meetings',
  gi: 'Ingliz tilida salomlashish kunning vaqtiga va kim bilan gaplashayotganingizga bog‘liq. Bu darsdagi iboralarni bir marta yodlasangiz, har kuni ishlatasiz.',
  g: [
    { id: 'hello', h: 'Kun vaqtiga qarab salomlashish', f: ['ertalab (12:00 gacha) :: *Good morning*', 'kunduzi (12:00–18:00) :: *Good afternoon*', 'kechqurun :: *Good evening*', 'har doim :: *Hello* + *Hi* (norasmiy)'],
      x: '<p><b>Good morning / afternoon / evening</b> — rasmiyroq, ustoz va kattalar bilan. <b>Hi</b> va <b>Hello</b> — do‘stlar bilan, kunning istalgan vaqtida.</p><p><b>Good night</b> salom emas! U faqat xayrlashishda yoki uxlashdan oldin aytiladi.</p>',
      e: [['*Good morning*, Mrs Brown!', 'Xayrli tong, Braun xonim!'], ['*Hi*, Lola! How are you?', 'Salom, Lola! Qalaysan?'], ['*Good evening*, everyone.', 'Hammaga xayrli kech.'], ['*Good night*, Mum. See you tomorrow.', 'Xayrli tun, oyi. Ertaga ko‘rishamiz.']] },
    { id: 'howareyou', h: 'How are you? va javoblar', f: ['How are you? → I’m + *fine / good / OK* + , thanks. + (And you?)', 'Norasmiy :: *How’s it going?* + *Not bad!*'],
      x: '<p>«How are you?» ga qisqa va ijobiy javob beriladi, keyin savol qaytariladi: <b>And you?</b> Ingliz tilida bu savol ko‘pincha shunchaki salomlashish, uzun hikoya kutilmaydi.</p>',
      tb: { h: ['Javob', 'Ma’nosi'], r: [['I’m great!', 'Zo‘r!'], ['I’m fine, thanks.', 'Yaxshi, rahmat.'], ['Not bad.', 'Yomon emas.'], ['I’m OK.', 'Yaxshi / normal.'], ['I’m tired.', 'Charchadim.']] },
      e: [['How are you? — *I’m fine, thanks. And you?*', 'Qalaysiz? — Yaxshi, rahmat. O‘zingiz-chi?'], ['How’s it going? — *Not bad!*', 'Ishlar qalay? — Yomon emas!']] },
    { id: 'meet', h: 'Tanishish va tanishtirish', f: ['O‘zingiz :: My name is + ism + . / I’m + ism', 'Boshqa odam :: *This is* + ism / my friend', 'Javob :: *Nice to meet you.* → *Nice to meet you, too.*'],
      x: '<p>Birinchi marta ko‘rishganda <b>Nice to meet you</b> deymiz. Javob: <b>Nice to meet you, too</b> (<b>too</b> — «ham»). Kimnidir tanishtirganda <b>This is…</b> ishlatiladi, «He is…» emas.</p>',
      e: [['Hi, I’m Bekzod. — *Nice to meet you*, Bekzod. I’m Kamila.', 'Salom, men Bekzodman. — Tanishganimdan xursandman, Bekzod. Men Kamilaman.'], ['*This is* my friend, Jasur.', 'Bu mening do‘stim Jasur.'], ['*Nice to meet you, too.*', 'Men ham tanishganimdan xursandman.']] },
    { id: 'bye', h: 'Xayrlashish', f: '*Goodbye* + *Bye* + *See you later / tomorrow / on Monday* + *Have a nice day!*',
      x: '<p><b>Goodbye</b> — rasmiyroq, <b>Bye</b> — norasmiy. <b>See you…</b> — «ko‘rishguncha». Javob sifatida <b>You too!</b> («sizga ham») deyish mumkin.</p>',
      e: [['*Bye*, Aziz! *See you tomorrow.*', 'Xayr, Aziz! Ertaga ko‘rishamiz.'], ['*Have a nice day!* — *You too!*', 'Kuningiz yaxshi o‘tsin! — Sizga ham!']] },
    { id: 'polite', h: 'Odob so‘zlari va murojaat', f: ['*Please* + *Thank you / Thanks* + *Sorry* + *Excuse me*', 'Ustozga :: *Mr / Mrs / Ms* + familiya'],
      x: '<p><b>Excuse me</b> — e’tiborni tortish yoki yo‘l so‘rash uchun (gapdan oldin). <b>Sorry</b> — kechirim so‘rash uchun (ishdan keyin).</p><p>Ustozga «teacher!» deb murojaat qilinmaydi. Ingliz tilida <b>Mr</b> (erkak), <b>Mrs</b> (turmushga chiqqan ayol), <b>Ms</b> (ayol, umumiy) + familiya ishlatiladi: <b>Good morning, Ms Smith.</b></p>',
      e: [['*Excuse me*, where is room 5?', 'Kechirasiz, 5-xona qayerda?'], ['*Sorry*, I’m late.', 'Kechirasiz, kechikdim.'], ['*Thank you*, Mr Brown.', 'Rahmat, Braun janoblari.']] }
  ],
  m: [
    ['(kechqurun kelib) Good night!', '(kechqurun kelib) *Good evening!*', 'Good night faqat xayrlashganda yoki uxlashdan oldin.'],
    ['Hello, teacher!', 'Hello, Mrs Smith! / Good morning, Mr Brown!', 'Ingliz tilida ustozga familiyasi bilan murojaat qilinadi.'],
    ['Nice to meet you. — Me too.', 'Nice to meet you. — Nice to meet you, too.', 'To‘liq javob qaytariladi, oxirida too.']
  ],
  v: [
    ['hello', '/həˈləʊ/', 'salom', '*Hello*, everyone!', 'Hammaga salom!'],
    ['goodbye', '/ɡʊdˈbaɪ/', 'xayr', '*Goodbye*, Mr Brown.', 'Xayr, Braun janoblari.'],
    ['morning', '/ˈmɔːnɪŋ/', 'ertalab, tong', 'Good *morning*!', 'Xayrli tong!'],
    ['afternoon', '/ˌɑːftəˈnuːn/', 'kunduz (tushdan keyin)', 'Good *afternoon*, class.', 'Xayrli kun, sinf.'],
    ['evening', '/ˈiːvnɪŋ/', 'kechqurun', 'Good *evening*!', 'Xayrli kech!'],
    ['night', '/naɪt/', 'tun', 'Good *night*, Dad.', 'Xayrli tun, dada.'],
    ['friend', '/frend/', 'do‘st', 'This is my *friend*.', 'Bu mening do‘stim.'],
    ['meet', '/miːt/', 'tanishmoq, uchrashmoq', 'Nice to *meet* you.', 'Tanishganimdan xursandman.'],
    ['nice', '/naɪs/', 'yoqimli, yaxshi', 'Have a *nice* day!', 'Kuningiz yaxshi o‘tsin!'],
    ['fine', '/faɪn/', 'yaxshi', 'I’m *fine*, thanks.', 'Yaxshi, rahmat.'],
    ['thanks', '/θæŋks/', 'rahmat', '*Thanks* a lot!', 'Katta rahmat!'],
    ['please', '/pliːz/', 'iltimos', 'Sit down, *please*.', 'O‘tiring, iltimos.'],
    ['sorry', '/ˈsɒri/', 'kechirasiz (uzr)', '*Sorry*, I’m late.', 'Kechirasiz, kechikdim.'],
    ['excuse me', '/ɪkˈskjuːz miː/', 'kechirasiz (murojaat)', '*Excuse me*, is this seat free?', 'Kechirasiz, bu joy bo‘shmi?'],
    ['tired', '/ˈtaɪəd/', 'charchagan', 'I’m a bit *tired*.', 'Biroz charchadim.'],
    ['later', '/ˈleɪtə/', 'keyinroq', 'See you *later*!', 'Keyinroq ko‘rishamiz!']
  ],
  s: {
    f: [['Salom', 'Hi! I’m ___.'], ['Holat', 'How are you?'], ['Javob', 'I’m ___, thanks. And you?'], ['Tanishtirish', 'This is my friend, ___.'], ['Tanishuv', 'Nice to meet you.'], ['Xayr', 'Bye! See you ___!']],
    a: [['Do‘st bilan', 'Hi, Lola! How are you? — I’m fine, thanks. And you? — Not bad! Lola, this is my friend, Aziz. — Hi, Aziz! Nice to meet you. — Nice to meet you, too.'], ['Ustoz bilan', 'Good morning, Ms Smith! — Good morning, Bekzod. How are you today? — I’m very well, thank you.']],
    q: ['Good morning! How are you?', 'What’s your name?', 'Nice to meet you!', 'Who is this?', 'See you tomorrow!']
  },
  li: {
    show: 'Camp Radio', title: 'First day at summer camp', about: 'Xalqaro yozgi lagerning birinchi kuni: ikki o‘smir tanishadi.', who: ['Emma', 'Jasur'], v: ['f', 'm'],
    lines: [[0, 'Hi! Is this seat free?'], [1, 'Yes, it is. Hello!'], [0, 'Thanks. I’m Emma. I’m from London.'], [1, 'Nice to meet you, Emma. I’m Jasur. I’m from Tashkent.'], [0, 'Nice to meet you, too! How are you?'], [1, 'I’m a bit tired. And you?'], [0, 'I’m great! Oh, this is my friend, Mia.'], [1, 'Hi, Mia! Good morning.'], [0, 'OK, the teacher is here. See you later, Jasur!'], [1, 'Bye! See you later.']],
    q: [['Where is Emma from?', ['Tashkent', 'London', 'Seoul'], 1], ['How is Jasur?', ['great', 'a bit tired', 'sad'], 1], ['Who is Mia?', ['Emma’s friend', 'the teacher', 'Jasur’s sister'], 0]]
  },
  w: {
    task: 'Yangi sinfdosh bilan birinchi suhbatni yozing: salom, holat so‘rash, tanishish, do‘stni tanishtirish, xayrlashish (kamida 8 qator).', min: 35, sents: 8,
    plan: ['Salom (kun vaqtiga qarab)', 'Ism va tanishish', 'How are you? va javob', 'Do‘stni tanishtirish', 'Xayrlashish'],
    model: 'A: Good morning! I’m Kamila. B: Hi, Kamila! I’m Bobur. Nice to meet you. A: Nice to meet you, too. How are you? B: I’m fine, thanks. And you? A: Not bad. This is my friend, Nodira. B: Hello, Nodira! A: Oh, the lesson starts. See you later! B: Bye!',
    c: [['Salomlashish (Hello, Hi, Good …)', '\\b(hello|hi|good (morning|afternoon|evening))\\b', 1], ['Nice to meet you', 'nice to meet you', 1], ['Xayrlashish (bye, see you)', '\\b(bye|goodbye|see you)\\b', 1]]
  },
  tq: [
    ['hello', 'It’s 9 a.m. You meet your teacher. You say:', ['Good evening!', 'Good morning!', 'Good night!'], 1, 'Ertalab — Good morning.'],
    ['hello', 'It’s 8 p.m. You arrive at a party. You say:', ['Good night!', 'Good evening!', 'Good afternoon!'], 1, 'Good night — faqat xayrlashganda.'],
    ['howareyou', 'How are you? — ___', ['I’m fine, thanks. And you?', 'I’m 15.', 'My name is Ali.'], 0, 'Holat so‘raldi: I’m fine, thanks.'],
    ['howareyou', 'How’s it going? — ___', ['Nice to meet you.', 'Not bad!', 'Goodbye.'], 1, 'Norasmiy savolga norasmiy javob: Not bad!'],
    ['meet', 'Nice to meet you. — ___', ['Me too.', 'Nice to meet you, too.', 'Thank you.'], 1, 'Javob: Nice to meet you, too.'],
    ['meet', 'You introduce your friend: «___ my friend, Aziz.»', ['He is', 'This is', 'I am'], 1, 'Tanishtirishda This is…'],
    ['bye', 'Have a nice day! — ___', ['You too!', 'Me too!', 'Good morning!'], 0, 'Javob: You too!'],
    ['polite', 'You want to ask a stranger the way. You start with:', ['Sorry,', 'Excuse me,', 'Thanks,'], 1, 'E’tiborni tortish uchun Excuse me.'],
    ['polite', 'How do you greet your teacher, Ann Smith?', ['Hello, teacher!', 'Good morning, Ms Smith!', 'Hi, Ann!'], 1, 'Ms/Mr/Mrs + familiya.']
  ]
});

L({
  n: 3, lvl: 'A0', t: 'Numbers, Colours & Plurals', uz: 'Sonlar, ranglar, ko‘plik; sanaladigan va sanalmaydigan otlar', book: 'Unit 1', topic: 'Numbers & colours',
  g: [
    { id: 'numbers', h: 'Sonlar 1–100', f: ['13–19 :: *-teen* + urg‘u oxirida: thir*TEEN*', '20–90 :: *-ty* + urg‘u boshida: *THIR*ty', '21–99 :: twenty + *-* + one'],
      x: '<p>1–12 sonlarini yodlash kerak. 13–19 <b>-teen</b> bilan, o‘nliklar <b>-ty</b> bilan tugaydi. Ularni talaffuzda adashtirmaslik uchun urg‘uga e’tibor bering: thir<b>TEEN</b> (13) va <b>THIR</b>ty (30).</p><p>21–99 orasida chiziqcha qo‘yiladi: <b>twenty-one, forty-five</b>. 100 — <b>a hundred / one hundred</b>.</p>',
      tb: { h: ['Son', 'So‘z', 'Diqqat'], r: [['3 / 13 / 30', 'three / thirteen / thirty', 'thir- (th!)'], ['4 / 14 / 40', 'four / fourteen / forty', '40 da u yo‘q: forty'], ['5 / 15 / 50', 'five / fifteen / fifty', 'fif-'], ['8 / 18 / 80', 'eight / eighteen / eighty', 'bitta t'], ['9 / 19 / 90', 'nine / nineteen / ninety', 'e saqlanadi'], ['11 / 12', 'eleven / twelve', 'yodlang']] },
      e: [['I’m *fifteen*.', 'Men 15 yoshdaman.'], ['It costs *forty* thousand.', 'Bu 40 ming turadi.'], ['My flat is number *twenty-three*.', 'Kvartiram 23-raqam.']] },
    { id: 'colours', h: 'Ranglar', f: ['*a* + rang + ot :: a + *red* + car', 'What colour is it? → It’s + *blue*'],
      x: '<p>Rang — sifat. U otdan <b>oldin</b> turadi va <b>hech qachon -s olmaydi</b>: <b>red cars</b>, «reds cars» emas. Rangni so‘rash: <b>What colour is it?</b></p>',
      e: [['I have a *black* bag.', 'Mening qora sumkam bor.'], ['What colour is your phone? — It’s *white*.', 'Telefoningiz qanday rangda? — Oq.'], ['I like *green* apples.', 'Yashil olmalarni yoqtiraman.']] },
    { id: 'plural', h: 'Ko‘plik: qo‘shimchalar', f: ['ko‘p so‘zlar :: + *-s* + book → books', '-s, -ss, -sh, -ch, -x, -o :: + *-es* + box → boxes', 'undosh + y :: *-ies* + baby → babies', '-f / -fe :: *-ves* + knife → knives'],
      x: '<p>Ko‘plik odatda <b>-s</b> bilan yasaladi. <b>-s, -ss, -sh, -ch, -x</b> va ko‘p <b>-o</b> bilan tugaganlar <b>-es</b> oladi: bus–buses, dish–dishes, tomato–tomatoes. Lekin: photo–photos, radio–radios, piano–pianos.</p><p><b>Undosh + y</b> → <b>-ies</b> (cherry–cherries), <b>unli + y</b> → <b>-s</b> (boy–boys, key–keys). <b>-f / -fe</b> → <b>-ves</b> (leaf–leaves, wife–wives), lekin roof–roofs, cliff–cliffs.</p>',
      tb: { h: ['Qoida', 'Birlik → Ko‘plik'], r: [['+ s', 'pen → pens, apple → apples'], ['+ es', 'bus → buses, watch → watches, fox → foxes'], ['y → ies', 'city → cities, lady → ladies'], ['unli + y → s', 'toy → toys, day → days'], ['f/fe → ves', 'leaf → leaves, knife → knives']] },
      e: [['two *buses*', 'ikkita avtobus'], ['three *babies*', 'uchta chaqaloq'], ['two *knives*', 'ikkita pichoq']] },
    { id: 'irregular', h: 'Noto‘g‘ri ko‘plik', f: ['man → *men* + woman → *women* + child → *children* + person → *people*', 'foot → *feet* + tooth → *teeth* + mouse → *mice*', 'bir xil :: sheep, fish, deer'],
      x: '<p>Ba’zi so‘zlar qoidaga bo‘ysunmaydi, ularni yodlash kerak. <b>sheep, fish, deer</b> ko‘plikda ham o‘zgarmaydi: one sheep — ten sheep.</p>',
      tb: { h: ['Birlik', 'Ko‘plik'], r: [['man', 'men'], ['woman /ˈwʊmən/', 'women /ˈwɪmɪn/'], ['child', 'children'], ['person', 'people'], ['foot', 'feet'], ['tooth', 'teeth'], ['mouse', 'mice'], ['goose', 'geese'], ['ox', 'oxen'], ['sheep / fish / deer', 'sheep / fish / deer']] },
      e: [['Two *women* and three *children*.', 'Ikki ayol va uch bola.'], ['Brush your *teeth*!', 'Tishlaringizni yuving!'], ['There are ten *sheep*.', 'O‘nta qo‘y bor.']] },
    { id: 'pron', h: '-s / -es qanday o‘qiladi', f: ['/p t k f θ/ dan keyin :: */s/* + books, cats', '/s z ʃ tʃ dʒ/ dan keyin :: */ɪz/* + buses, boxes, bridges', 'boshqa tovushlardan keyin :: */z/* + pens, boys, apples'],
      x: '<p>Ko‘plik qo‘shimchasi uch xil o‘qiladi. Eng muhimi: <b>-es</b> qo‘shilgan so‘zlarda qo‘shimcha alohida bo‘g‘in bo‘ladi: <b>bus-es</b> /ˈbʌsɪz/, <b>box-es</b> /ˈbɒksɪz/.</p>',
      e: [['cats /kæts/', 'mushuklar — /s/'], ['dogs /dɒɡz/', 'itlar — /z/'], ['watches /ˈwɒtʃɪz/', 'soatlar — /ɪz/']] },
    { id: 'count', h: 'Sanaladigan va sanalmaydigan otlar', f: ['sanaladigan :: *a / an* + birlik + yoki + son + ko‘plik', 'sanalmaydigan :: *a/an yo‘q* + *ko‘plik yo‘q* + some water'],
      x: '<p><b>Sanaladigan</b> otlarni sanash mumkin: an apple, two apples. <b>Sanalmaydigan</b> otlar odatda ko‘plikda bo‘lmaydi va a/an olmaydi.</p><p>Sanalmaydiganlar: <b>ovqat</b> (bread, cheese, meat, butter, rice, sugar, salt), <b>suyuqlik</b> (water, milk, tea, coffee, juice), <b>material</b> (gold, paper, wood), <b>mavhum</b> (love, happiness) va <b>boshqalar</b>: <b>money, news, hair, furniture, weather, advice, homework</b>.</p><p>Ular bilan <b>some</b> ishlatiladi: <b>some water</b>. Sanash uchun idish so‘zi kerak: <b>a glass of water, a piece of cake</b>.</p>',
      e: [['*an* egg — *two* eggs', 'bitta tuxum — ikkita tuxum'], ['*some* bread — *a loaf of* bread', 'biroz non — bitta buxanka non'], ['I need *some* advice.', 'Menga maslahat kerak.']],
      n: 'O‘zbekchada «pullar», «maslahatlar» deyish mumkin, lekin ingliz tilida <b>money</b> va <b>advice</b> hech qachon -s olmaydi.' }
  ],
  m: [
    ['two reds apples', 'two red apples', 'Sifat (rang) -s olmaydi.'],
    ['three childs', 'three children', 'child — noto‘g‘ri ko‘plik.'],
    ['an advice / two moneys', 'some advice / some money', 'advice va money sanalmaydi.']
  ],
  v: [
    ['twelve', '/twelv/', 'o‘n ikki', 'I have *twelve* lessons a week.', 'Haftada 12 ta darsim bor.'],
    ['thirteen', '/ˌθɜːˈtiːn/', 'o‘n uch', 'My brother is *thirteen*.', 'Ukam 13 yoshda.'],
    ['thirty', '/ˈθɜːti/', 'o‘ttiz', 'There are *thirty* students.', '30 ta o‘quvchi bor.'],
    ['forty', '/ˈfɔːti/', 'qirq', '*Forty* minutes.', 'Qirq daqiqa.'],
    ['hundred', '/ˈhʌndrəd/', 'yuz', 'a *hundred* dollars', 'yuz dollar'],
    ['red', '/red/', 'qizil', 'a *red* car', 'qizil mashina'],
    ['blue', '/bluː/', 'ko‘k', 'The sky is *blue*.', 'Osmon ko‘k.'],
    ['green', '/ɡriːn/', 'yashil', 'a *green* apple', 'yashil olma'],
    ['yellow', '/ˈjeləʊ/', 'sariq', 'a *yellow* taxi', 'sariq taksi'],
    ['brown', '/braʊn/', 'jigarrang', '*brown* eyes', 'jigarrang ko‘zlar'],
    ['purple', '/ˈpɜːpl/', 'binafsha', 'a *purple* hoodie', 'binafsha xudi'],
    ['grey', '/ɡreɪ/', 'kulrang', 'a *grey* cat', 'kulrang mushuk'],
    ['orange', '/ˈɒrɪndʒ/', 'to‘q sariq; apelsin', 'an *orange* T-shirt', 'to‘q sariq futbolka'],
    ['child', '/tʃaɪld/', 'bola (ko‘plik: children)', 'one *child*, two children', 'bitta bola, ikkita bola'],
    ['people', '/ˈpiːpl/', 'odamlar', 'Five *people* are here.', 'Bu yerda besh kishi bor.'],
    ['money', '/ˈmʌni/', 'pul (sanalmaydi)', 'I have some *money*.', 'Menda biroz pul bor.'],
    ['bread', '/bred/', 'non (sanalmaydi)', 'Buy some *bread*, please.', 'Iltimos, non olib keling.']
  ],
  s: {
    f: [['Son', 'My phone number is ___.'], ['Yosh', 'I am ___ years old.'], ['Rang', 'My favourite colour is ___.'], ['Narsalar', 'I have ___ (son) ___ (rang) ___ (narsa)s.'], ['Savol', 'What colour is your ___?']],
    a: [['Namuna', 'I’m sixteen. My favourite colour is blue. I have two blue notebooks, three black pens and a white phone. My bag is grey.']],
    q: ['How old are you?', 'What’s your favourite colour?', 'What colour is your bag?', 'How many pens have you got in your bag?']
  },
  li: {
    show: 'Sneaker Talk', title: 'The new drop', about: 'Ikki do‘st yangi krossovkalarning rangi va narxi haqida gaplashadi.', who: ['Lola', 'Max'], v: ['f', 'm'],
    lines: [[0, 'Max, look! New sneakers!'], [1, 'Wow! What colour are they?'], [0, 'They’re white and green.'], [1, 'Nice! How much are they?'], [0, 'Ninety dollars.'], [1, 'Ninety? Not nineteen?'], [0, 'No, ninety. Nine, zero.'], [1, 'That’s a lot of money! My sneakers are black. They’re forty dollars.'], [0, 'I like black too. But green is my favourite colour.']],
    q: [['What colour are Lola’s new sneakers?', ['black', 'white and green', 'red'], 1], ['How much are they?', ['$19', '$90', '$40'], 1], ['What colour are Max’s sneakers?', ['black', 'green', 'white'], 0]]
  },
  w: {
    task: 'Sumkangiz va xonangizdagi narsalarni yozing: nechta, qanday rangda. Kamida 6 gap. Ko‘plik shakllariga e’tibor bering.', min: 35, sents: 6,
    plan: ['I have … (son + rang + narsa)', 'My … is … (rang)', 'Noto‘g‘ri ko‘plik ishlating (children, people…)', 'Sanalmaydigan so‘z: some money / some water'],
    model: 'I have a black bag. In my bag, I have three blue pens, two notebooks and a white phone. I also have some money and some water. My room has two windows. My favourite colour is green.',
    c: [['Sonlar (two, three…)', '\\b(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\\w+teen|\\w+ty)\\b', 3], ['Ranglar', '\\b(red|blue|green|yellow|black|white|brown|purple|grey|gray|orange|pink)\\b', 3], ['some + sanalmaydigan', '\\bsome\\s+(water|money|bread|milk|tea|coffee|juice|rice|sugar|advice|cheese|paper)\\b', 1]]
  },
  tq: [
    ['numbers', 'How do you write 40?', ['fourty', 'forty', 'fourteen'], 1, '40 — forty (u yo‘q).'],
    ['numbers', 'Where is the stress in 13?', ['THIR-teen', 'thir-TEEN', 'both'], 1, '-teen sonlarda urg‘u oxirida.'],
    ['colours', 'Choose the correct phrase.', ['two reds cars', 'two red cars', 'two cars reds'], 1, 'Rang -s olmaydi va otdan oldin turadi.'],
    ['plural', 'The plural of «box» is…', ['boxs', 'boxes', 'boxies'], 1, '-x → -es.'],
    ['plural', 'The plural of «city» is…', ['citys', 'cityes', 'cities'], 2, 'undosh + y → ies.'],
    ['plural', 'The plural of «knife» is…', ['knifes', 'knives', 'knifs'], 1, '-fe → -ves.'],
    ['irregular', 'The plural of «child» is…', ['childs', 'childrens', 'children'], 2, 'child → children.'],
    ['irregular', 'One sheep, two ___.', ['sheeps', 'sheep', 'sheepes'], 1, 'sheep ko‘plikda o‘zgarmaydi.'],
    ['pron', 'In which word is -es pronounced /ɪz/?', ['buses', 'pens', 'cats'], 0, 's tovushidan keyin /ɪz/.'],
    ['count', 'Choose the correct sentence.', ['I need an advice.', 'I need some advice.', 'I need advices.'], 1, 'advice sanalmaydi.'],
    ['count', 'Which noun is uncountable?', ['apple', 'money', 'pen'], 1, 'money sanalmaydi.']
  ]
});

L({
  n: 4, lvl: 'A0', t: 'Pronouns & the Verb «To be»', uz: 'Kishilik olmoshlari va to be fe’li', book: 'Unit 2', topic: 'Countries & nationalities',
  gi: 'O‘zbekchada «Men o‘quvchi<b>man</b>» deymiz: «-man» gapni tugatadi. Ingliz tilida bu ishni alohida fe’l bajaradi: <b>am / is / are</b>. Bu — ingliz tilining eng muhim fe’li.',
  g: [
    { id: 'subj', h: 'Kishilik olmoshlari', f: 'I + you + he + she + it + we + you + they',
      x: '<p>Olmosh fe’ldan oldin otning o‘rnida keladi. O‘zbekchada bitta «<b>u</b>» bor, inglizchada uchta: <b>he</b> — erkak/o‘g‘il bola, <b>she</b> — ayol/qiz bola, <b>it</b> — narsa yoki hayvon.</p><p>Uy hayvoningizning jinsini bilsangiz, <b>he</b> yoki <b>she</b> deyish mumkin. Ko‘plikda odam ham, narsa ham — <b>they</b>. <b>I</b> doim katta harf bilan yoziladi.</p>',
      tb: { h: ['O‘zbekcha', 'Inglizcha', 'Misol'], r: [['men', 'I', 'I am Ali.'], ['sen / siz', 'you', 'You are kind.'], ['u (erkak)', 'he', 'Tony → he'], ['u (ayol)', 'she', 'Mary → she'], ['u (narsa, hayvon)', 'it', 'a car → it'], ['biz', 'we', 'Ali and I → we'], ['sizlar', 'you', 'You are friends.'], ['ular', 'they', 'books, people → they']] },
      e: [['Tony is my friend. *He* is 16.', 'Toni mening do‘stim. U 16 yoshda.'], ['My phone is new. *It* is black.', 'Telefonim yangi. U qora.'], ['Lola and I are students. *We* are in 10-A.', 'Lola va men o‘quvchimiz. Biz 10-A damiz.']] },
    { id: 'pos', h: 'To be: darak gap', f: ['I + *am* + …', 'he / she / it + *is* + …', 'we / you / they + *are* + …'],
      x: '<p>Ega kim bo‘lsa, fe’l shunga qarab tanlanadi. Og‘zaki nutqda qisqartma ishlatiladi: <b>I’m, you’re, he’s, she’s, it’s, we’re, they’re</b>.</p><p>To be ism, yosh, kasb, joy, holat va xususiyatni aytish uchun ishlatiladi: I’m Aziz. I’m 16. I’m a student. I’m at home. I’m happy.</p>',
      tb: { h: ['To‘liq', 'Qisqa'], r: [['I am', 'I’m'], ['you are', 'you’re'], ['he / she / it is', 'he’s / she’s / it’s'], ['we / they are', 'we’re / they’re']] },
      e: [['I *am* a student.', 'Men o‘quvchiman.'], ['She*’s* my sister.', 'U mening opam.'], ['They *are* from Korea.', 'Ular Koreyadan.']] },
    { id: 'neg', h: 'To be: inkor gap', f: ['I + *am not* + (I’m not)', 'he / she / it + *is not* + (isn’t)', 'we / you / they + *are not* + (aren’t)'],
      x: '<p>Inkor uchun fe’ldan keyin <b>not</b> qo‘yiladi. Diqqat: «I amn’t» degan shakl yo‘q, faqat <b>I’m not</b>.</p>',
      e: [['I*’m not* tired.', 'Men charchamaganman.'], ['He *isn’t* at home.', 'U uyda emas.'], ['We *aren’t* from Russia.', 'Biz Rossiyadan emasmiz.']] },
    { id: 'q', h: 'To be: so‘roq va qisqa javob', f: ['*Am* + I + …?', '*Is* + he / she / it + …?', '*Are* + you / we / they + …?', 'Yes, I *am*. + No, I*’m not*.'],
      x: '<p>So‘roq gapda fe’l <b>egadan oldinga</b> chiqadi: She is → <b>Is she…?</b></p><p>Qisqa javobda butun savol takrorlanmaydi: faqat <b>Yes/No + olmosh + fe’l</b>. Ijobiy qisqa javobda qisqartma ishlatilmaydi: <b>Yes, I am.</b> («Yes, I’m.» deyilmaydi).</p>',
      tb: { h: ['Savol', 'Ha', 'Yo‘q'], r: [['Are you a student?', 'Yes, I am.', 'No, I’m not.'], ['Is he Uzbek?', 'Yes, he is.', 'No, he isn’t.'], ['Are they friends?', 'Yes, they are.', 'No, they aren’t.']] },
      e: [['*Are* you from Tashkent? — Yes, I *am*.', 'Toshkentdanmisiz? — Ha.'], ['*Is* she your sister? — No, she *isn’t*.', 'U singlingmi? — Yo‘q.']] },
    { id: 'whq', h: 'Wh- savollar to be bilan', f: 'So‘roq so‘zi + *am / is / are* + ega + ?',
      x: '<p>So‘roq so‘zi gap boshida, keyin to be, keyin ega: <b>Where are you from?</b></p>',
      tb: { h: ['Savol', 'Javob'], r: [['What’s your name?', 'My name’s Aziz.'], ['Where are you from?', 'I’m from Uzbekistan.'], ['How old are you?', 'I’m 16.'], ['Who is she?', 'She’s my cousin.'], ['How are you?', 'I’m fine.']] },
      e: [['*Where are* you from?', 'Qayerdansiz?'], ['*How old is* your brother?', 'Ukangiz necha yoshda?'], ['*Who are* they?', 'Ular kim?']] },
    { id: 'nat', h: 'Mamlakat va millat', f: ['joy :: I’m from + *mamlakat*', 'millat :: I’m + *millat*', 'Uzbekistan → *Uzbek* + Korea → *Korean* + Japan → *Japanese*'],
      x: '<p>Mamlakat, millat va til nomlari <b>doim katta harf</b> bilan yoziladi: <b>Uzbek, English, Korean</b>.</p><p>Millat so‘zi ko‘pincha <b>-an, -ian, -ish, -ese</b> bilan tugaydi: Korean, Brazilian, Turkish, Chinese. <b>I’m from</b> + mamlakat, <b>I’m</b> + millat.</p>',
      e: [['I’m *from Uzbekistan*. I’m *Uzbek*.', 'Men O‘zbekistondanman. Men o‘zbekman.'], ['Jiwoo is from Korea. She’s *Korean*.', 'Jivu Koreyadan. U koreys.'], ['Do you speak *English*?', 'Inglizcha gapirasizmi?']] }
  ],
  m: [
    ['She my sister.', 'She *is* my sister.', 'O‘zbekchada fe’l kerak emas, inglizchada har gapda fe’l bo‘lishi shart.'],
    ['Are you student? — Yes, I’m.', 'Are you a student? — Yes, I am.', 'Ijobiy qisqa javobda qisqartma yo‘q, kasbdan oldin a.'],
    ['I’m from uzbekistan. I’m uzbek.', 'I’m from Uzbekistan. I’m Uzbek.', 'Mamlakat va millat katta harf bilan.']
  ],
  v: [
    ['Uzbekistan / Uzbek', '/ʊzˌbekɪˈstɑːn/ /ˈʊzbek/', 'O‘zbekiston / o‘zbek', 'I’m from *Uzbekistan*. I’m *Uzbek*.', 'Men O‘zbekistondanman. O‘zbekman.'],
    ['Kazakhstan / Kazakh', '/ˌkæzækˈstɑːn/ /kəˈzæk/', 'Qozog‘iston / qozoq', 'Asel is *Kazakh*.', 'Asel qozoq.'],
    ['Russia / Russian', '/ˈrʌʃə/ /ˈrʌʃən/', 'Rossiya / rus', 'He speaks *Russian*.', 'U ruscha gapiradi.'],
    ['Turkey / Turkish', '/ˈtɜːki/ /ˈtɜːkɪʃ/', 'Turkiya / turk', '*Turkish* food is great.', 'Turk taomlari zo‘r.'],
    ['Korea / Korean', '/kəˈriːə/ /kəˈriːən/', 'Koreya / koreys', 'K-pop is *Korean* music.', 'K-pop — koreys musiqasi.'],
    ['Japan / Japanese', '/dʒəˈpæn/ /ˌdʒæpəˈniːz/', 'Yaponiya / yapon', 'Anime is *Japanese*.', 'Anime — yapon multfilmi.'],
    ['China / Chinese', '/ˈtʃaɪnə/ /ˌtʃaɪˈniːz/', 'Xitoy / xitoy', 'My phone is *Chinese*.', 'Telefonim xitoyniki.'],
    ['the USA / American', '/ðə ˌjuː es ˈeɪ/ /əˈmerɪkən/', 'AQSh / amerikalik', 'Tom is *American*.', 'Tom amerikalik.'],
    ['the UK / British', '/ðə ˌjuː ˈkeɪ/ /ˈbrɪtɪʃ/', 'Buyuk Britaniya / britaniyalik', 'Emma is *British*.', 'Emma britaniyalik.'],
    ['Germany / German', '/ˈdʒɜːməni/ /ˈdʒɜːmən/', 'Germaniya / nemis', 'Is your car *German*?', 'Mashinangiz nemis mashinasimi?'],
    ['France / French', '/frɑːns/ /frentʃ/', 'Fransiya / fransuz', 'Paris is in *France*.', 'Parij Fransiyada.'],
    ['Spain / Spanish', '/speɪn/ /ˈspænɪʃ/', 'Ispaniya / ispan', 'Real Madrid is a *Spanish* team.', 'Real Madrid — ispan jamoasi.'],
    ['Italy / Italian', '/ˈɪtəli/ /ɪˈtæliən/', 'Italiya / italyan', 'Pizza is *Italian*.', 'Pitsa — italyan taomi.'],
    ['Brazil / Brazilian', '/brəˈzɪl/ /brəˈzɪliən/', 'Braziliya / braziliyalik', 'Ana is *Brazilian*.', 'Ana braziliyalik.'],
    ['India / Indian', '/ˈɪndiə/ /ˈɪndiən/', 'Hindiston / hind', 'I like *Indian* films.', 'Hind filmlarini yoqtiraman.'],
    ['country', '/ˈkʌntri/', 'mamlakat', 'Which *country* are you from?', 'Qaysi mamlakatdansiz?'],
    ['language', '/ˈlæŋɡwɪdʒ/', 'til', 'English is an international *language*.', 'Ingliz tili — xalqaro til.']
  ],
  s: {
    f: [['Ism', 'I’m ___.'], ['Joy', 'I’m from ___. I’m ___ (millat).'], ['Yosh', 'I’m ___ years old.'], ['Inkor', 'I’m not ___.'], ['Savol', 'Where are you from? / Are you ___?']],
    a: [['Namuna', 'Hi! I’m Kamila. I’m sixteen. I’m from Uzbekistan, so I’m Uzbek. I’m not from Tashkent, I’m from Bukhara. My best friend is Korean. She’s from Busan.']],
    q: ['Where are you from?', 'Are you Uzbek?', 'How old are you?', 'Is your best friend from your city?', 'Who is your favourite singer? Where is he or she from?']
  },
  li: {
    show: 'K-Pop Corner', title: 'Fans from five countries', about: 'Seuldagi muxlislar uchrashuvida turli mamlakatlardan kelgan yoshlar tanishadi.', who: ['Mina', 'Ana'], v: ['f', 'f'],
    lines: [[0, 'Hello, everyone! I’m Mina. I’m Korean. Welcome to the fan meeting!'], [1, 'Hi, Mina! I’m Ana. I’m from Brazil.'], [0, 'Wow, Brazil! Are you a big fan?'], [1, 'Yes, I am! And this is my friend, Nilufar.'], [0, 'Hi, Nilufar! Are you Brazilian too?'], [1, 'No, she isn’t. She’s Uzbek. She’s from Tashkent.'], [0, 'Great! And who are they?'], [1, 'They’re Kenji and Yui. They’re Japanese.'], [0, 'Fans from Brazil, Uzbekistan and Japan! Amazing!']],
    q: [['Where is Ana from?', ['Korea', 'Brazil', 'Japan'], 1], ['Is Nilufar Brazilian?', ['Yes, she is.', 'No, she isn’t.'], 1], ['Kenji and Yui are…', ['Korean', 'Japanese', 'Uzbek'], 1]]
  },
  w: {
    task: '5 ta odam haqida yozing (do‘stlaringiz yoki mashhur odamlar): ular kim, qayerdan, qaysi millat, qaysi millat emas. To be ning uchala shaklidan foydalaning.', min: 40, sents: 7,
    plan: ['Men: I’m …', 'Do‘stim: He’s / She’s from …', 'Mashhur odam: … is … (millat)', 'Inkor: … isn’t / aren’t …', 'Savol: Are they …?'],
    model: 'I’m Bobur. I’m from Samarkand. I’m Uzbek. My best friend is Asel. She isn’t Uzbek, she’s Kazakh. Messi is a footballer. He’s from Argentina. He isn’t Spanish. BTS are a K-pop band. They’re Korean.',
    c: [['am / is / are', '\\b(am|is|are)\\b|[’\']m\\b|[’\'](s|re)\\b', 5], ['Inkor (isn’t, aren’t, ’m not)', '\\b(isn[’\']t|aren[’\']t|am not|is not|are not)\\b|[’\']m not', 2], ['from', '\\bfrom\\b', 3]]
  },
  tq: [
    ['subj', 'My phone is new. ___ is black.', ['He', 'It', 'She'], 1, 'Narsa — it.'],
    ['subj', 'Lola and I are friends. ___ are in 10-B.', ['They', 'We', 'You'], 1, 'Lola va men — we.'],
    ['pos', 'My parents ___ teachers.', ['is', 'am', 'are'], 2, 'parents = they → are.'],
    ['pos', 'I ___ sixteen.', ['am', 'is', 'are'], 0, 'I → am.'],
    ['neg', 'He ___ at home. He is at school.', ['isn’t', 'aren’t', 'not'], 0, 'he → isn’t.'],
    ['neg', 'Choose the correct sentence.', ['I amn’t tired.', 'I’m not tired.', 'I not tired.'], 1, 'Faqat I’m not.'],
    ['q', '___ you from Bukhara?', ['Is', 'Am', 'Are'], 2, 'So‘roqda be oldinda: Are you…?'],
    ['q', 'Is she Korean? — Yes, ___.', ['she’s', 'she is', 'is she'], 1, 'Ijobiy qisqa javobda qisqartma yo‘q.'],
    ['whq', '___ are you from? — I’m from Andijan.', ['What', 'Where', 'Who'], 1, 'Joy — where.'],
    ['nat', 'Jiwoo is from Korea. She is ___.', ['Korea', 'Korean', 'korean'], 1, 'Millat katta harf bilan: Korean.']
  ]
});

L({
  n: 5, lvl: 'A0', t: '«It»: Time, Weather & Dates', uz: 'It bilan vaqt, ob-havo, kun va sanani aytish', book: 'Unit 2', topic: 'Days, months & seasons',
  gi: 'O‘zbekchada «Sovuq.», «Soat besh.» deymiz — gapda ega yo‘q. Ingliz tilida esa har bir gapda ega bo‘lishi shart. Shuning uchun vaqt, ob-havo va sana haqida gapirganda «bo‘sh» ega <b>It</b> ishlatiladi.',
  g: [
    { id: 'it', h: '«Bo‘sh» ega It', f: '*It* + *is* + vaqt / ob-havo / kun / masofa',
      x: '<p><b>It</b> bu yerda hech narsani bildirmaydi, u faqat ega o‘rnini to‘ldiradi. Tarjimada u yo‘qoladi: <b>It’s cold.</b> — Sovuq.</p>',
      e: [['*It’s* five o’clock.', 'Soat besh.'], ['*It’s* cold today.', 'Bugun sovuq.'], ['*It’s* Monday.', 'Bugun dushanba.'], ['*It’s* ten kilometres to the city.', 'Shahargacha o‘n kilometr.']] },
    { id: 'time', h: 'Soatni aytish', f: ['What time is it? → It’s + soat + *o’clock*', 'It’s + *half past* + soat (:30)', 'It’s + *quarter past / to* + soat (:15 / :45)', 'Oddiy usul :: It’s + *seven fifteen*'],
      x: '<p><b>past</b> — «o‘tdi» (soatning birinchi yarmi), <b>to</b> — «qoldi» (ikkinchi yarmi). <b>half past seven</b> = 7:30, <b>quarter to eight</b> = 7:45.</p><p>Eng oson usul — raqamlarni ketma-ket aytish: 7:45 → <b>seven forty-five</b>. Vaqt oldidan <b>at</b> qo‘yiladi: <b>at 8 o’clock</b>.</p>',
      tb: { h: ['Vaqt', 'Aytilishi'], r: [['8:00', 'eight o’clock'], ['8:15', 'quarter past eight / eight fifteen'], ['8:30', 'half past eight / eight thirty'], ['8:45', 'quarter to nine / eight forty-five'], ['8:10', 'ten past eight'], ['8:50', 'ten to nine']] },
      e: [['What time is it? — *It’s half past three.*', 'Soat necha bo‘ldi? — Uch yarim.'], ['The lesson starts *at nine o’clock*.', 'Dars soat to‘qqizda boshlanadi.'], ['It’s *quarter to six*.', 'Oltiga chorak kam.']] },
    { id: 'weather', h: 'Ob-havo', f: ['What’s the weather like? → It’s + *sunny / cloudy / rainy*', 'ot + *-y* = sifat :: sun → sunny, rain → rainy'],
      x: '<p>Ob-havo sifatlarining ko‘pi otga <b>-y</b> qo‘shib yasaladi: sun → <b>sunny</b> (u ikkilanadi), cloud → <b>cloudy</b>, wind → <b>windy</b>, snow → <b>snowy</b>, rain → <b>rainy</b>. Harorat: <b>hot, warm, cool, cold</b>.</p><p>Hozir yomg‘ir yog‘ayotgan bo‘lsa, <b>It’s raining</b> deyiladi (buni 12-darsda batafsil o‘rganamiz).</p>',
      e: [['*It’s sunny* and *hot* in Termez.', 'Termizda quyoshli va issiq.'], ['What’s the weather like? — *It’s windy.*', 'Ob-havo qanday? — Shamol.'], ['*It’s raining.* Take an umbrella.', 'Yomg‘ir yog‘yapti. Soyabon oling.']] },
    { id: 'dates', h: 'Kunlar, oylar, fasllar', f: ['kun :: *on* + Monday', 'oy, fasl :: *in* + May / summer', 'soat :: *at* + 7 o’clock', 'sana :: It’s + *the first of May* / May 1st'],
      x: '<p>Hafta kunlari va oylar <b>katta harf</b> bilan yoziladi: Monday, January. Fasllar kichik harf bilan: spring, summer, autumn, winter.</p><p>Sana tartib son bilan aytiladi: 1st <b>first</b>, 2nd <b>second</b>, 3rd <b>third</b>, 4th <b>fourth</b>, 21st <b>twenty-first</b>. «Bugun nechanchi sana?» — <b>What’s the date today?</b></p>',
      e: [['*It’s Friday* today!', 'Bugun juma!'], ['My birthday is *in March*.', 'Tug‘ilgan kunim martda.'], ['Navruz is *on the twenty-first of March*.', 'Navro‘z 21-martda.'], ['I love *summer*.', 'Yozni yaxshi ko‘raman.']],
      n: '<b>this, next, last, every</b> dan oldin predlog qo‘yilmaydi: <b>next Monday</b> («on next Monday» emas).' }
  ],
  m: [
    ['Is cold today.', '*It* is cold today.', 'Inglizcha gapda ega shart: It.'],
    ['It’s five hours.', 'It’s five o’clock.', 'Soat «o’clock» bilan aytiladi, «hours» emas.'],
    ['in monday, on march', 'on Monday, in March', 'kun — on, oy — in; ikkalasi ham katta harf.']
  ],
  v: [
    ['o’clock', '/əˈklɒk/', 'soat (aniq)', 'It’s six *o’clock*.', 'Soat olti.'],
    ['half past', '/hɑːf pɑːst/', '… yarim', 'It’s *half past* two.', 'Ikki yarim.'],
    ['quarter', '/ˈkwɔːtə/', 'chorak (15 daqiqa)', 'It’s *quarter* to nine.', 'To‘qqizga chorak kam.'],
    ['Monday', '/ˈmʌndeɪ/', 'dushanba', 'See you on *Monday*.', 'Dushanba kuni ko‘rishamiz.'],
    ['Wednesday', '/ˈwenzdeɪ/', 'chorshanba (d o‘qilmaydi)', 'I have English on *Wednesday*.', 'Chorshanba kuni ingliz tili darsim bor.'],
    ['weekend', '/ˌwiːkˈend/', 'dam olish kunlari', 'What do you do at the *weekend*?', 'Dam olish kunlari nima qilasiz?'],
    ['month', '/mʌnθ/', 'oy', 'January is the first *month*.', 'Yanvar — birinchi oy.'],
    ['February', '/ˈfebruəri/', 'fevral', 'It’s cold in *February*.', 'Fevralda sovuq.'],
    ['spring', '/sprɪŋ/', 'bahor', 'Navruz is in *spring*.', 'Navro‘z bahorda.'],
    ['summer', '/ˈsʌmə/', 'yoz', 'It’s very hot in *summer*.', 'Yozda juda issiq.'],
    ['autumn', '/ˈɔːtəm/', 'kuz (n o‘qilmaydi)', 'School starts in *autumn*.', 'Maktab kuzda boshlanadi.'],
    ['winter', '/ˈwɪntə/', 'qish', 'It snows in *winter*.', 'Qishda qor yog‘adi.'],
    ['sunny', '/ˈsʌni/', 'quyoshli', 'It’s *sunny* today.', 'Bugun quyoshli.'],
    ['cloudy', '/ˈklaʊdi/', 'bulutli', 'It’s *cloudy* and cold.', 'Bulutli va sovuq.'],
    ['rainy', '/ˈreɪni/', 'yomg‘irli', 'a *rainy* day', 'yomg‘irli kun'],
    ['windy', '/ˈwɪndi/', 'shamolli', 'It’s very *windy*.', 'Juda shamol.'],
    ['snowy', '/ˈsnəʊi/', 'qorli', 'a *snowy* morning', 'qorli tong'],
    ['warm', '/wɔːm/', 'iliq', 'It’s *warm* in May.', 'Mayda iliq.'],
    ['date', '/deɪt/', 'sana', 'What’s the *date* today?', 'Bugun nechanchi sana?']
  ],
  s: {
    f: [['Kun', 'It’s ___ today.'], ['Sana', 'It’s the ___ of ___.'], ['Vaqt', 'It’s ___ o’clock. / It’s half past ___.'], ['Ob-havo', 'It’s ___ and ___.'], ['Fasl', 'My favourite season is ___.']],
    a: [['Namuna', 'It’s Saturday today. It’s the fifteenth of October. It’s half past ten. It’s sunny but cool. My favourite season is spring, because it’s warm and green.']],
    q: ['What day is it today?', 'What’s the date today?', 'What time is it now?', 'What’s the weather like today?', 'What’s your favourite season?']
  },
  li: {
    show: 'Pitch Talk', title: 'Match day weather', about: 'Futbol radiosi: o‘yin kuni, soati va ob-havo.', who: ['Dan', 'Kate'], v: ['m', 'f'],
    lines: [[0, 'Good afternoon! It’s Saturday, the fourth of May. I’m Dan.'], [1, 'And I’m Kate. Dan, what time is the match?'], [0, 'It’s at half past five.'], [1, 'And what time is it now?'], [0, 'It’s quarter to four.'], [1, 'What’s the weather like at the stadium?'], [0, 'It’s cloudy and windy. It isn’t very warm.'], [1, 'Is it rainy?'], [0, 'No, it isn’t. Not now!'], [1, 'Great. See you at the match!']],
    q: [['What day is it?', ['Friday', 'Saturday', 'Sunday'], 1], ['What time is the match?', ['4:45', '5:30', '3:45'], 1], ['What’s the weather like?', ['sunny and hot', 'cloudy and windy', 'rainy'], 1]]
  },
  w: {
    task: '«Bugungi kunim» haqida yozing: kun, sana, soat, ob-havo, fasl. Kamida 6 gap, har birida It ishlating.', min: 35, sents: 6,
    plan: ['It’s … (kun)', 'It’s the … of … (sana)', 'It’s … o’clock now.', 'It’s … and … (ob-havo)', 'It’s … (fasl). My favourite season is …'],
    model: 'It’s Tuesday today. It’s the twelfth of November. It’s seven o’clock in the evening. It’s cold and rainy in Tashkent. It’s autumn now. My favourite season is summer, because it’s hot and sunny.',
    c: [['It’s / It is', '\\bit[’\']s\\b|\\bit is\\b', 5], ['Ob-havo so‘zlari', '\\b(sunny|cloudy|rainy|windy|snowy|hot|cold|warm|cool|raining|snowing)\\b', 2], ['Kun yoki oy nomi', '\\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|January|February|March|April|May|June|July|August|September|October|November|December)\\b', 2]]
  },
  tq: [
    ['it', 'Choose the correct sentence.', ['Is hot today.', 'It’s hot today.', 'Hot is today.'], 1, 'Ega kerak: It.'],
    ['it', '___ ten kilometres to the airport.', ['It’s', 'There', 'They’re'], 0, 'Masofa — It’s.'],
    ['time', '7:30 is…', ['half past seven', 'half to seven', 'seven half'], 0, ':30 — half past.'],
    ['time', '8:45 is…', ['quarter past eight', 'quarter to nine', 'quarter to eight'], 1, ':45 — quarter to + keyingi soat.'],
    ['time', 'The lesson starts ___ 9 o’clock.', ['in', 'on', 'at'], 2, 'Soat — at.'],
    ['weather', 'There is a lot of sun. It’s ___.', ['suny', 'sunny', 'sun'], 1, 'sun → sunny (n ikkilanadi).'],
    ['weather', 'What’s the weather like? — ___', ['It’s cloudy.', 'It’s Monday.', 'It’s 5 o’clock.'], 0, 'Ob-havo: It’s cloudy.'],
    ['dates', 'My birthday is ___ June.', ['on', 'in', 'at'], 1, 'Oy — in.'],
    ['dates', 'See you ___ Friday!', ['in', 'at', 'on'], 2, 'Kun — on.'],
    ['dates', 'Which is written correctly?', ['monday', 'Monday', 'MONDAY'], 1, 'Kun nomi katta harf bilan.']
  ]
});

L({
  n: 6, lvl: 'A0', t: 'Family & Self-Introduction', uz: 'Oila, o‘zini tanishtirish va have got', book: 'Unit 2, Unit 4', topic: 'Family',
  gi: 'Bu dars A0 ning yakuni: ism, yosh, joy va oila haqida ravon gapirishni o‘rganasiz. Yangi grammatika — <b>have got</b> (bor, ega).',
  g: [
    { id: 'intro', h: 'O‘zini tanishtirish', f: ['Ism :: My name is + … / *I’m* + …', 'Yosh :: *I’m* + 16 + (years old)', 'Joy :: I’m from + … + / I live in + …'],
      x: '<p>Yosh <b>to be</b> bilan aytiladi: <b>I’m 16.</b> «I have 16 years» — xato (bu rus tilidan so‘zma-so‘z tarjima).</p><p><b>I’m from</b> — tug‘ilgan joy yoki millat, <b>I live in</b> — hozir yashaydigan joy.</p>',
      e: [['*I’m* Madina and *I’m* fifteen.', 'Men Madinaman, 15 yoshdaman.'], ['I’m from Namangan, but I *live in* Tashkent.', 'Men Namangandanman, lekin Toshkentda yashayman.'], ['My brother *is* twelve years old.', 'Ukam 12 yoshda.']] },
    { id: 'havegot', h: 'Have got / has got: darak gap', f: ['I / you / we / they + *have got* + (’ve got)', 'he / she / it + *has got* + (’s got)'],
      x: '<p><b>have got</b> — «bor, egaman» ma’nosida: oila, narsa, tashqi ko‘rinish, kasallik. «Menda aka bor» → <b>I’ve got a brother.</b></p><p>Diqqat: <b>’s</b> ikki ma’noda: <b>He’s got</b> = He <b>has</b> got; <b>He’s tall</b> = He <b>is</b> tall.</p>',
      e: [['I*’ve got* two sisters.', 'Mening ikkita opam bor.'], ['She*’s got* long black hair.', 'Uning uzun qora sochi bor.'], ['We *have got* a cat.', 'Bizning mushugimiz bor.']] },
    { id: 'hgneg', h: 'Have got: inkor va so‘roq', f: ['Inkor :: I + *haven’t got* + … + he / she + *hasn’t got*', 'So‘roq :: *Have* + you + got + …? + *Has* + he + got + …?', 'Yes, I *have*. + No, he *hasn’t*.'],
      x: '<p>So‘roqda <b>have / has</b> egadan oldinga chiqadi, <b>got</b> o‘z joyida qoladi. Qisqa javobda got takrorlanmaydi: <b>Yes, I have.</b></p>',
      e: [['*Have* you *got* any brothers? — No, I *haven’t*.', 'Akangiz yoki ukangiz bormi? — Yo‘q.'], ['He *hasn’t got* a phone.', 'Uning telefoni yo‘q.'], ['*How many* cousins *have* you *got*?', 'Nechta amakivachchangiz bor?']] },
    { id: 'family', h: 'Oila haqida gapirish', f: ['There are + son + *people* + in my family', 'I’m + *an only child* / the oldest / the youngest', 'My mother is + *a / an* + kasb'],
      x: '<p>Ingliz tilida aka-uka bitta so‘z: <b>brother</b>. Kerak bo‘lsa aniqlanadi: <b>older brother</b> (aka), <b>younger brother</b> (uka). Xola ham, amma ham — <b>aunt</b>; tog‘a ham, amaki ham — <b>uncle</b>. Barcha amakivachchalar — <b>cousin</b>.</p><p>Kasbdan oldin <b>a / an</b> majburiy: <b>My father is a driver.</b> Ko‘plikda yo‘q: <b>My parents are teachers.</b></p>',
      e: [['*There are five people* in my family.', 'Oilamiz besh kishidan iborat.'], ['I’m *the youngest*.', 'Men eng kichigiman.'], ['My mum is *an* engineer.', 'Oyim muhandis.']] }
  ],
  m: [
    ['I have 15 years.', 'I’m 15 (years old).', 'Yosh to be bilan aytiladi.'],
    ['He have got a sister.', 'He *has* got a sister.', 'he / she / it bilan has.'],
    ['My father is driver.', 'My father is *a* driver.', 'Bitta odamning kasbidan oldin a / an.']
  ],
  v: [
    ['parents', '/ˈpeərənts/', 'ota-ona', 'My *parents* are doctors.', 'Ota-onam shifokor.'],
    ['mother', '/ˈmʌðə/', 'ona, oyi', 'My *mother* is kind.', 'Oyim mehribon.'],
    ['father', '/ˈfɑːðə/', 'ota, dada', 'My *father* is a driver.', 'Dadam haydovchi.'],
    ['brother', '/ˈbrʌðə/', 'aka, uka', 'I’ve got an older *brother*.', 'Mening akam bor.'],
    ['sister', '/ˈsɪstə/', 'opa, singil', 'My little *sister* is five.', 'Singlim besh yoshda.'],
    ['grandmother', '/ˈɡrænmʌðə/', 'buvi', 'My *grandmother* cooks plov.', 'Buvim palov pishiradilar.'],
    ['grandfather', '/ˈɡrænfɑːðə/', 'bobo', 'My *grandfather* is 70.', 'Bobom 70 yoshda.'],
    ['aunt', '/ɑːnt/', 'xola, amma', 'My *aunt* lives in Bukhara.', 'Xolam Buxoroda yashaydi.'],
    ['uncle', '/ˈʌŋkl/', 'tog‘a, amaki', 'My *uncle* is an engineer.', 'Tog‘am muhandis.'],
    ['cousin', '/ˈkʌzn/', 'amakivachcha, xolavachcha…', 'My *cousin* is my best friend.', 'Xolavachcham — eng yaqin do‘stim.'],
    ['son', '/sʌn/', 'o‘g‘il', 'They have got a *son*.', 'Ularning o‘g‘li bor.'],
    ['daughter', '/ˈdɔːtə/', 'qiz (farzand)', 'Their *daughter* is a student.', 'Ularning qizi talaba.'],
    ['husband', '/ˈhʌzbənd/', 'er', 'Her *husband* is a pilot.', 'Uning eri uchuvchi.'],
    ['wife', '/waɪf/', 'xotin, rafiqa', 'His *wife* is a nurse.', 'Uning rafiqasi hamshira.'],
    ['only child', '/ˈəʊnli tʃaɪld/', 'yolg‘iz farzand', 'I’m an *only child*.', 'Men yolg‘iz farzandman.'],
    ['twins', '/twɪnz/', 'egizaklar', 'My brothers are *twins*.', 'Akalarim egizak.'],
    ['live', '/lɪv/', 'yashamoq', 'We *live* in Fergana.', 'Biz Farg‘onada yashaymiz.'],
    ['surname', '/ˈsɜːneɪm/', 'familiya', 'What’s your *surname*?', 'Familiyangiz nima?']
  ],
  s: {
    f: [['Ism', 'My name is ___. I’m ___ years old.'], ['Joy', 'I’m from ___. I live in ___.'], ['Oila', 'There are ___ people in my family.'], ['Have got', 'I’ve got ___ brother(s) and ___ sister(s).'], ['Kasb', 'My father is a/an ___. My mother is a/an ___.'], ['Yakun', 'I love my family!']],
    a: [['Starter', 'Hello! My name is Madina. I’m fifteen. I’m from Uzbekistan. I live in Samarkand. There are five people in my family. I’ve got a brother and a sister. My father is a doctor. My mother is a teacher.'], ['Step up', 'Hi, everyone! I’m Bekzod Karimov. I’m sixteen and I live in Namangan. I’ve got a big family: my parents, two older brothers and my grandmother. My brothers are twins. My dad is an engineer and my mum is a nurse. I haven’t got any sisters, but I’ve got a lot of cousins.']],
    q: ['Can you introduce yourself?', 'How many people are there in your family?', 'Have you got any brothers or sisters?', 'What does your father do?', 'Have you got a pet?']
  },
  li: {
    show: 'Game Time', title: 'Player two is my dad', about: 'Tim 14 yoshda, Londondan. Uning eng yaxshi o‘yin sherigi — dadasi.', who: ['Sara', 'Tim'], v: ['f', 'm'],
    lines: [[0, 'Hi and welcome to Game Time! I’m Sara. My guest today is Tim. Hello, Tim!'], [1, 'Hello, Sara! I’m Tim. I’m fourteen and I’m from London.'], [0, 'Tim, are you a big gamer?'], [1, 'Yes, I am! But my favourite gaming partner isn’t my friend. It’s my dad!'], [0, 'Your dad? Really?'], [1, 'Yes. My dad is a computer engineer. He’s very funny.'], [0, 'Have you got any brothers or sisters?'], [1, 'I haven’t got a brother, but I’ve got a little sister. She’s six.'], [0, 'Has she got a favourite game?'], [1, 'Yes, she has. It’s a game about cats!'], [0, 'A family of gamers! Thank you, Tim.']],
    q: [['How old is Tim?', ['twelve', 'fourteen', 'sixteen'], 1], ['What is his dad’s job?', ['a teacher', 'a computer engineer', 'a doctor'], 1], ['Has Tim got a brother?', ['Yes, he has.', 'No, he hasn’t.'], 1]]
  },
  w: {
    task: 'O‘zingiz va oilangiz haqida 60–100 so‘zli matn yozing: ism, yosh, joy, oila a’zolari, ularning kasbi va xarakteri.', min: 50, sents: 7,
    plan: ['Ism va yosh (I’m …)', 'Qayerdan, qayerda yashaysiz', 'Oilada necha kishi', 'have got bilan aka-uka, opa-singil', 'Kasblar (a / an!)', 'Yakuniy gap'],
    model: 'My name is Aziz. I’m fourteen years old. I’m from Khiva, but I live in Tashkent. There are five people in my family. I’ve got an older sister and a younger brother. My father is a driver. He’s very hard-working. My mother is a nurse. She’s kind and funny. My sister has got long hair. I love my family!',
    c: [['have got / has got', '\\b(have|has|haven[’\']t|hasn[’\']t)\\s+got\\b|[’\'](ve|s)\\s+got\\b', 2], ['am / is / are', '\\b(am|is|are)\\b|[’\']m\\b|[’\'](s|re)\\b', 5], ['a / an + kasb', '\\b(a|an)\\s+(doctor|teacher|student|engineer|nurse|driver|pilot|dentist|lawyer|programmer|designer|farmer|cook|builder|manager|accountant|vet|mechanic|police officer|businessman|businesswoman|shop assistant|waiter)\\b', 1]]
  },
  tq: [
    ['intro', 'Choose the correct sentence.', ['I have 16 years.', 'I’m 16.', 'I’m 16 years.'], 1, 'Yosh: I’m 16 (years old).'],
    ['intro', 'I’m from Khiva, but I ___ in Tashkent.', ['am', 'live', 'from'], 1, 'Yashash joyi: I live in.'],
    ['havegot', 'My sister ___ long hair.', ['have got', 'has got', 'is got'], 1, 'she → has got.'],
    ['havegot', 'In «He’s got a car», ’s means…', ['is', 'has', 'his'], 1, 'He’s got = He has got.'],
    ['hgneg', '___ you got any cousins?', ['Do', 'Has', 'Have'], 2, 'you → Have … got?'],
    ['hgneg', 'Has he got a bike? — No, he ___.', ['hasn’t', 'haven’t', 'isn’t'], 0, 'he → hasn’t.'],
    ['hgneg', 'I ___ a pet.', ['haven’t got', 'hasn’t got', 'not have got'], 0, 'I → haven’t got.'],
    ['family', 'My mother is ___ engineer.', ['a', 'an', '—'], 1, 'engineer unli tovush bilan → an.'],
    ['family', 'My parents ___ teachers.', ['is', 'are', 'are a'], 1, 'Ko‘plik → are, a yo‘q.'],
    ['family', 'Your mother’s brother is your…', ['cousin', 'uncle', 'aunt'], 1, 'tog‘a — uncle.']
  ]
});

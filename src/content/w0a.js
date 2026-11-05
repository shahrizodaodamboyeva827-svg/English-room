/* =====================================================================
   A0 — 1–3-darslar uchun YANGI so‘zlar va maqolalar (reja bo‘yicha).
   Format: V: [{g: guruh id, t: guruh nomi, w: [[so‘z, IPA, tarjima, misol (*so‘z*), misol tarjimasi, rasm]]}]
           A: [{k: rukn, t: sarlavha, s: izoh, p: [[inglizcha abzats ([so‘z] yoki [ko‘rinish|so‘z]), o‘zbekcha]], q: [[savol, [variantlar], to‘g‘ri]]}]
   ===================================================================== */

/* ---------------- 1: Alphabet & reading rules ---------------- */
VOC(1, {
  vi: 'Ingliz alifbosidagi 26 harfning nomi va o‘qish qoidalarini mashq qiladigan so‘zlar. Har bir harf va so‘zni tinglab, ovoz chiqarib takrorlang.',
  V: [
    { g: 'terms', t: 'Alifbo haqida asosiy so‘zlar', w: [
      ['letter', '/ˈletə/', 'harf (alifbo harfi)', 'A *letter* of the alphabet.', 'Alifbo harfi.', '#A_B_C'],
      ['capital letter', '/ˌkæpɪtl ˈletə/', 'bosh harf (katta harf)', 'Names start with a *capital letter*: Bobur.', 'Ismlar bosh harf bilan boshlanadi: Bobur.', '#A_B_C'],
      ['small letter', '/ˌsmɔːl ˈletə/', 'kichik harf (lowercase letter)', 'The word “book” has four *small letters*.', '«book» so‘zi to‘rtta kichik harfdan iborat.', '#a_b_c'],
      ['vowel', '/ˈvaʊəl/', 'unli harf', 'A, E, I, O and U are *vowels*.', 'A, E, I, O va U — unli harflar.', '#A_E_I_O_U'],
      ['consonant', '/ˈkɒnsənənt/', 'undosh harf', 'B, C and D are *consonants*.', 'B, C va D — undosh harflar.', '#B_C_D']
    ] },
    { g: 'abc', t: 'Alifbo: harflarning nomi', w: [
      ['A', '/eɪ/', 'A harfi — «ey»', '*A* is for apple.', 'A — apple (olma).', 'red-apple #Aa'],
      ['B', '/biː/', 'B harfi — «biy»', '*B* is for book.', 'B — book (kitob).', 'blue-book #Bb'],
      ['C', '/siː/', 'C harfi — «siy»', '*C* is for cat.', 'C — cat (mushuk).', 'cat #Cc'],
      ['D', '/diː/', 'D harfi — «diy»', '*D* is for dog.', 'D — dog (it).', 'dog #Dd'],
      ['E', '/iː/', 'E harfi — «iy»', '*E* is for egg.', 'E — egg (tuxum).', 'egg #Ee'],
      ['F', '/ef/', 'F harfi — «ef»', '*F* is for fish.', 'F — fish (baliq).', 'fish #Ff'],
      ['G', '/dʒiː/', 'G harfi — «jiy»', '*G* is for game.', 'G — game (o‘yin).', 'video-game #Gg'],
      ['H', '/eɪtʃ/', 'H harfi — «eych»', '*H* is for house.', 'H — house (uy).', 'house #Hh'],
      ['I', '/aɪ/', 'I harfi — «ay»', '*I* is for ice cream.', 'I — ice cream (muzqaymoq).', 'ice-cream #Ii'],
      ['J', '/dʒeɪ/', 'J harfi — «jey»', '*J* is for juice.', 'J — juice (sharbat).', 'beverage-box #Jj'],
      ['K', '/keɪ/', 'K harfi — «key»', '*K* is for key.', 'K — key (kalit).', 'key #Kk'],
      ['L', '/el/', 'L harfi — «el»', '*L* is for lemon.', 'L — lemon (limon).', 'lemon #Ll'],
      ['M', '/em/', 'M harfi — «em»', '*M* is for milk.', 'M — milk (sut).', 'glass-of-milk #Mm'],
      ['N', '/en/', 'N harfi — «en»', '*N* is for nose.', 'N — nose (burun).', 'nose #Nn'],
      ['O', '/əʊ/', 'O harfi — «ou»', '*O* is for orange.', 'O — orange (apelsin).', 'tangerine #Oo'],
      ['P', '/piː/', 'P harfi — «piy»', '*P* is for pen.', 'P — pen (ruchka).', 'pen #Pp'],
      ['Q', '/kjuː/', 'Q harfi — «kyu»', '*Q* is for queen.', 'Q — queen (qirolicha).', 'crown #Qq'],
      ['R', '/ɑː/', 'R harfi — «a:»', '*R* is for rain.', 'R — rain (yomg‘ir).', 'cloud-with-rain #Rr'],
      ['S', '/es/', 'S harfi — «es»', '*S* is for sun.', 'S — sun (quyosh).', 'sun #Ss'],
      ['T', '/tiː/', 'T harfi — «tiy»', '*T* is for tea.', 'T — tea (choy).', 'hot-beverage #Tt'],
      ['U', '/juː/', 'U harfi — «yu»', '*U* is for umbrella.', 'U — umbrella (soyabon).', 'umbrella #Uu'],
      ['V', '/viː/', 'V harfi — «viy»', '*V* is for violin.', 'V — violin (skripka).', 'violin #Vv'],
      ['W', '/ˈdʌbljuː/', 'W harfi — «dabl-yu»', '*W* is for water.', 'W — water (suv).', 'droplet #Ww'],
      ['X', '/eks/', 'X harfi — «eks»', '*X* is for X-ray.', 'X — X-ray (rentgen).', 'x-ray #Xx'],
      ['Y', '/waɪ/', 'Y harfi — «uay»', '*Y* is for yellow.', 'Y — yellow (sariq).', 'sw:F7C531 #Yy'],
      ['Z', '/zed/', 'Z harfi — «zed» (AQShda «ziy»)', '*Z* is for zebra.', 'Z — zebra (zebra).', 'zebra #Zz']
    ] },
    { g: 'similar', t: 'O‘xshash harflar: b/d, q, v/w, th', w: [
      ['bed', '/bed/', 'karavot', 'I go to *bed* at ten.', 'Soat o‘nda yotaman.', 'bed'],
      ['dad', '/dæd/', 'dada', 'My *dad* is tall.', 'Dadam baland bo‘yli.', 'man'],
      ['queen', '/kwiːn/', 'qirolicha', 'The *queen* lives in a castle.', 'Qirolicha qasrda yashaydi.', 'castle crown'],
      ['very', '/ˈveri/', 'juda', 'It’s *very* cold today.', 'Bugun juda sovuq.', 'hundred-points'],
      ['van', '/væn/', 'furgon', 'The *van* is white.', 'Furgon oq.', 'delivery-truck'],
      ['wet', '/wet/', 'ho‘l', 'My hair is *wet*.', 'Sochim ho‘l.', 'droplet+droplet'],
      ['west', '/west/', 'g‘arb', 'The sun goes down in the *west*.', 'Quyosh g‘arbda botadi.', 'sunset compass'],
      ['think', '/θɪŋk/', 'o‘ylamoq', 'I *think* it’s easy.', 'Menimcha, bu oson.', 'thought-balloon'],
      ['three', '/θriː/', 'uch', 'I have *three* books.', 'Mening uchta kitobim bor.', 'books #3'],
      ['this', '/ðɪs/', 'bu', '*This* is my phone.', 'Bu mening telefonim.', 'mobile-phone backhand-index-pointing-left'],
      ['mother', '/ˈmʌðə/', 'ona', 'My *mother* is kind.', 'Onam mehribon.', 'woman'],
      ['brother', '/ˈbrʌðə/', 'aka, uka', 'My *brother* is ten.', 'Ukam o‘n yoshda.', 'boy']
    ] },
    { g: 'magic', t: 'Sehrli e: qisqa va uzun unli', w: [
      ['cap', '/kæp/', 'kepka', 'He has a red *cap*.', 'Uning qizil kepkasi bor.', 'billed-cap'],
      ['cape', '/keɪp/', 'plash (yelkaga tashlanadigan)', 'The hero wears a *cape*.', 'Qahramon plash kiygan.', 'man-superhero'],
      ['pin', '/pɪn/', 'to‘g‘nog‘ich', 'I need a *pin*.', 'Menga to‘g‘nog‘ich kerak.', 'pushpin'],
      ['pine', '/paɪn/', 'qarag‘ay', 'A *pine* tree is always green.', 'Qarag‘ay doim yashil.', 'evergreen-tree'],
      ['hop', '/hɒp/', 'sakramoq', 'Rabbits *hop*.', 'Quyonlar sakraydi.', 'rabbit'],
      ['hope', '/həʊp/', 'umid qilmoq', 'I *hope* you are well.', 'Umid qilamanki, yaxshisiz.', 'crossed-fingers'],
      ['cut', '/kʌt/', 'kesmoq', '*Cut* the bread, please.', 'Nonni kesing, iltimos.', 'kitchen-knife bread'],
      ['cute', '/kjuːt/', 'yoqimtoy', 'The baby is *cute*.', 'Chaqaloq yoqimtoy.', 'baby'],
      ['not', '/nɒt/', 'emas', 'I am *not* tired.', 'Men charchamaganman.', 'cross-mark'],
      ['note', '/nəʊt/', 'qisqa xat, yozuv', 'Write a *note* for Mum.', 'Oyim uchun qisqa xat yozing.', 'memo']
    ] },
    { g: 'pairs', t: 'Ikki harf — bitta tovush', w: [
      ['ship', '/ʃɪp/', 'kema', 'The *ship* is big.', 'Kema katta.', 'ship'],
      ['fish', '/fɪʃ/', 'baliq', 'I like *fish*.', 'Baliqni yoqtiraman.', 'fish'],
      ['chair', '/tʃeə/', 'stul', 'Sit on the *chair*.', 'Stulga o‘tiring.', 'chair'],
      ['lunch', '/lʌntʃ/', 'tushlik', '*Lunch* is at one.', 'Tushlik soat birda.', 'fork-and-knife-with-plate one-oclock'],
      ['phone', '/fəʊn/', 'telefon', 'Where is my *phone*?', 'Telefonim qayerda?', 'mobile-phone'],
      ['photo', '/ˈfəʊtəʊ/', 'surat', 'Look at this *photo*!', 'Bu suratga qarang!', 'framed-picture'],
      ['back', '/bæk/', 'orqaga; orqa', 'Come *back* soon!', 'Tez qaytib keling!', 'back-arrow'],
      ['black', '/blæk/', 'qora', 'My bag is *black*.', 'Sumkam qora.', 'backpack sw:1C1F3F'],
      ['white', '/waɪt/', 'oq', 'Snow is *white*.', 'Qor oq.', 'snowflake sw:FFFFFF'],
      ['what', '/wɒt/', 'nima', '*What* is your name?', 'Ismingiz nima?', 'red-question-mark'],
      ['tea', '/tiː/', 'choy', 'I drink *tea* every day.', 'Har kuni choy ichaman.', 'teapot teacup-without-handle'],
      ['see', '/siː/', 'ko‘rmoq', 'I can *see* you.', 'Men sizni ko‘ryapman.', 'eyes'],
      ['food', '/fuːd/', 'ovqat', 'The *food* is hot.', 'Ovqat issiq.', 'pot-of-food'],
      ['book', '/bʊk/', 'kitob', 'This *book* is new.', 'Bu kitob yangi.', 'open-book'],
      ['sing', '/sɪŋ/', 'qo‘shiq aytmoq', 'Let’s *sing* a song.', 'Keling, qo‘shiq aytamiz.', 'microphone musical-notes'],
      ['long', '/lɒŋ/', 'uzun', 'Her hair is *long*.', 'Uning sochi uzun.', 'woman straight-ruler']
    ] },
    { g: 'tion', t: '-tion va -sion: «shn» va «jn»', w: [
      ['station', '/ˈsteɪʃn/', 'bekat, vokzal', 'The *station* is near my house.', 'Bekat uyimga yaqin.', 'station'],
      ['information', '/ˌɪnfəˈmeɪʃn/', 'ma’lumot', 'I need some *information*.', 'Menga biroz ma’lumot kerak.', 'information'],
      ['question', '/ˈkwestʃən/', 'savol', 'Can I ask a *question*?', 'Savol bersam bo‘ladimi?', 'person-raising-hand ?'],
      ['nation', '/ˈneɪʃn/', 'xalq, millat', 'Uzbekistan is a young *nation*.', 'O‘zbekiston — yosh davlat.', 'flag:uz'],
      ['action', '/ˈækʃn/', 'harakat; jangari (film)', 'I like *action* films.', 'Jangari filmlarni yoqtiraman.', 'movie-camera high-voltage'],
      ['television', '/ˈtelɪvɪʒn/', 'televizor', 'We watch *television* in the evening.', 'Kechqurun televizor ko‘ramiz.', 'television']
    ] }
  ],
  A: [{
    k: 'Hikoya', t: 'Spell It! The School Spelling Bee', s: '12-maktabdagi imlo musobaqasi: so‘zlar harfma-harf aytiladi',
    p: [
      ['Today is a big day at School 12 in Tashkent. It is the Spelling Bee! Students spell words letter by letter. The English alphabet has 26 [letters|letter], from [A] to [Z]. Five letters are [vowels|vowel]: [A], [E], [I], [O] and [U]. All the other letters are [consonants|consonant]. Names start with a [capital letter], but inside a word we use a [small letter].',
       'Bugun Toshkentdagi 12-maktabda katta kun. Bu — Spelling Bee, ya’ni imlo musobaqasi! O‘quvchilar so‘zlarni harfma-harf aytadi. Ingliz alifbosida A dan Z gacha 26 ta harf bor. Ulardan beshtasi unli: A, E, I, O va U. Qolgan hamma harflar undosh. Ismlar bosh harf bilan boshlanadi, so‘z ichida esa kichik harf ishlatamiz.'],
      ['First, the teacher says: “Spell your name, please.” A boy stands up: “My name is Bobur. [B]-O-B-U-[R].” A girl says: “I am Kamila. [K]-A-[M]-I-[L]-A.” Then Jasur: “[J]-A-[S]-U-R.” A good start!',
       'Avval ustoz: «Ismingizni harflab ayting», deydi. Bir bola o‘rnidan turadi: «Mening ismim Bobur. B-O-B-U-R.» Bir qiz aytadi: «Men Kamilaman. K-A-M-I-L-A.» Keyin Jasur: «J-A-S-U-R.» Yaxshi boshlanish!'],
      ['Round one: two letters, one sound. The first word is [ship]. “S-[H]-I-[P]!” The next words are [fish], [chair] and [lunch]. Then come [phone] and [photo]: P and H together sound like [F]. Easy? Not for everyone!',
       'Birinchi bosqich: ikki harf — bitta tovush. Birinchi so‘z — ship. «S-H-I-P!» Keyingi so‘zlar: fish, chair va lunch. Keyin phone va photo: P va H birga F kabi eshitiladi. Osonmi? Hammaga ham emas!'],
      ['Round two: similar letters. The teacher says [bed] and [dad]. [D] and B look the same, so be careful! Then [van], [very], [wet] and [west]. For [V], your top teeth touch your lip. For [W], your lips are round. Next: [think], [three], [this], [mother] and [brother]. For TH, put your tongue between your teeth.',
       'Ikkinchi bosqich: o‘xshash harflar. Ustoz bed va dad deydi. D va B bir-biriga o‘xshaydi, shuning uchun ehtiyot bo‘ling! Keyin van, very, wet va west. V da yuqori tishlaringiz labga tegadi. W da lablaringiz dumaloq bo‘ladi. Keyingisi: think, three, this, mother va brother. TH uchun tilingizni tishlaringiz orasiga qo‘ying.'],
      ['Round three: the magic [E]. [cap] — [cape]. [pin] — [pine]. [hop] — [hope]. [cut] — [cute]. [not] — [note]. The E at the end is silent, but it changes the vowel. Lola gets all ten words right!',
       'Uchinchi bosqich: sehrli E. cap — cape. pin — pine. hop — hope. cut — cute. not — note. Oxiridagi E o‘qilmaydi, lekin oldingi unlini o‘zgartiradi. Lola o‘nta so‘zning hammasini to‘g‘ri aytadi!'],
      ['Round four: [back], [black], [white], [what], [tea], [see], [food], [book], [sing] and [long]. Aziz spells long: “L-O-[N]-[G].” Then he spells [queen]: “[Q]-U-E-E-N.” Q and U are always together. [X] and [Y] are next: B-O-X, Y-E-S. [C] is for cat, and [T] is for tea.',
       'To‘rtinchi bosqich: back, black, white, what, tea, see, food, book, sing va long. Aziz long so‘zini harflaydi: «L-O-N-G.» Keyin queen: «Q-U-E-E-N.» Q va U doim birga keladi. Keyin X va Y: B-O-X, Y-E-S. C — cat (mushuk) uchun, T esa tea (choy) uchun.'],
      ['The final round has long words: [station], [information], [question], [nation], [action] and [television]. The ending -tion sounds like “shn”. Kamila spells television — T-E-L-E-V-I-S-I-O-N — and she wins! Her prize is a new English [book]. Can you spell your name? Try it now!',
       'Final bosqichda uzun so‘zlar: station, information, question, nation, action va television. -tion qo‘shimchasi «shn» kabi eshitiladi. Kamila television so‘zini harflaydi — T-E-L-E-V-I-S-I-O-N — va g‘olib bo‘ladi! Uning sovrini — yangi inglizcha kitob. Siz ismingizni harflay olasizmi? Hoziroq sinab ko‘ring!']
    ],
    q: [
      ['How many letters are there in the English alphabet?', ['24', '26', '33'], 1],
      ['Which letters are vowels?', ['B, C, D, F, G', 'A, E, I, O, U', 'Q, W, X, Y, Z'], 1],
      ['In “phone”, P and H together sound like…', ['/p/', '/h/', '/f/'], 2],
      ['The E at the end of “cape” is…', ['silent', 'loud', 'like /e/'], 0],
      ['Who wins the Spelling Bee?', ['Aziz', 'Lola', 'Kamila'], 2]
    ]
  }]
});

/* ---------------- 2: Greetings ---------------- */
VOC(2, {
  vi: 'Salomlashish, xayrlashish, odob so‘zlari va odamlarga murojaat. Bu iboralarni har kuni ishlatasiz.',
  V: [
    { g: 'hello', t: 'Salomlashish va hol so‘rash', w: [
      ['hello', '/həˈləʊ/', 'salom', '*Hello*, I’m Lola.', 'Salom, men Lolaman.', 'waving-hand'],
      ['hi', '/haɪ/', 'salom (norasmiy)', '*Hi*, Jasur!', 'Salom, Jasur!', 'boy waving-hand'],
      ['good morning', '/ɡʊd ˈmɔːnɪŋ/', 'xayrli tong', '*Good morning*, Mrs Brown!', 'Xayrli tong, Braun xonim!', 'sunrise'],
      ['good afternoon', '/ɡʊd ˌɑːftəˈnuːn/', 'xayrli kun (tushdan keyin)', '*Good afternoon*, class.', 'Xayrli kun, sinf.', 'sun'],
      ['good evening', '/ɡʊd ˈiːvnɪŋ/', 'xayrli kech', '*Good evening*, everyone.', 'Hammaga xayrli kech.', 'cityscape-at-dusk'],
      ['How are you?', '/haʊ ɑː juː/', 'Qalaysiz?', 'Hi, Lola! *How are you?*', 'Salom, Lola! Qalaysan?', 'speech-balloon ?'],
      ['I’m fine', '/aɪm faɪn/', 'yaxshiman', '*I’m fine*, thank you.', 'Yaxshiman, rahmat.', 'thumbs-up'],
      ['not bad', '/nɒt bæd/', 'yomon emas', 'How’s it going? — *Not bad*!', 'Ishlar qalay? — Yomon emas!', 'ok-hand'],
      ['How’s it going?', '/haʊz ɪt ˈɡəʊɪŋ/', 'Ishlar qalay?', 'Hey, Aziz! *How’s it going?*', 'Hey, Aziz! Ishlar qalay?', 'people-hugging ?'],
      ['Nice to meet you', '/naɪs tə miːt juː/', 'Tanishganimdan xursandman', 'I’m Kamila. *Nice to meet you*.', 'Men Kamilaman. Tanishganimdan xursandman.', 'handshake'],
      ['welcome', '/ˈwelkəm/', 'xush kelibsiz', '*Welcome* to our school!', 'Maktabimizga xush kelibsiz!', 'school sparkles']
    ] },
    { g: 'bye', t: 'Xayrlashish', w: [
      ['goodbye', '/ɡʊdˈbaɪ/', 'xayr', '*Goodbye*, Mr Karimov.', 'Xayr, Karimov janoblari.', 'door waving-hand'],
      ['bye', '/baɪ/', 'xayr (norasmiy)', '*Bye*! See you!', 'Xayr! Ko‘rishguncha!', 'waving-hand sparkles'],
      ['See you later', '/siː juː ˈleɪtə/', 'Keyinroq ko‘rishamiz', 'I’m going home. *See you later*!', 'Uyga ketyapman. Keyinroq ko‘rishamiz!', 'hourglass-not-done'],
      ['See you tomorrow', '/siː juː təˈmɒrəʊ/', 'Ertaga ko‘rishamiz', 'Bye, Aziz! *See you tomorrow*.', 'Xayr, Aziz! Ertaga ko‘rishamiz.', 'tear-off-calendar'],
      ['good night', '/ɡʊd naɪt/', 'xayrli tun', '*Good night*, Mum.', 'Xayrli tun, oyi.', 'night-with-stars bed'],
      ['Have a nice day!', '/hæv ə naɪs deɪ/', 'Kuningiz yaxshi o‘tsin!', 'Thank you! *Have a nice day!*', 'Rahmat! Kuningiz yaxshi o‘tsin!', 'sun sparkles'],
      ['Take care', '/teɪk keə/', 'O‘zingizni asrang', 'Bye, Grandma. *Take care*!', 'Xayr, buvi. O‘zingizni asrang!', 'heart-hands']
    ] },
    { g: 'polite', t: 'Odob so‘zlari', w: [
      ['please', '/pliːz/', 'iltimos', 'A cup of tea, *please*.', 'Bir piyola choy, iltimos.', 'palms-up-together'],
      ['thank you', '/ˈθæŋk juː/', 'rahmat', '*Thank you* for your help.', 'Yordamingiz uchun rahmat.', 'folded-hands'],
      ['thanks', '/θæŋks/', 'rahmat (norasmiy)', '*Thanks*, Lola!', 'Rahmat, Lola!', 'thumbs-up sparkles'],
      ['You’re welcome', '/jɔː ˈwelkəm/', 'Arzimaydi', 'Thank you! — *You’re welcome*.', 'Rahmat! — Arzimaydi.', 'open-hands'],
      ['sorry', '/ˈsɒri/', 'uzr, kechirasiz', '*Sorry*, I’m late.', 'Uzr, kechikdim.', 'person-bowing'],
      ['excuse me', '/ɪkˈskjuːz miː/', 'kechirasiz (murojaat)', '*Excuse me*, where is room 5?', 'Kechirasiz, 5-xona qayerda?', 'person-raising-hand'],
      ['Pardon?', '/ˈpɑːdn/', 'Qaytaring-chi? (eshitmadim)', '*Pardon?* Can you say it again?', 'Qaytaring-chi? Yana bir bor aytasizmi?', 'ear ?'],
      ['no problem', '/nəʊ ˈprɒbləm/', 'hechqisi yo‘q', 'Sorry! — *No problem*.', 'Uzr! — Hechqisi yo‘q.', 'ok-hand sparkles']
    ] },
    { g: 'people', t: 'Murojaat va tanishtirish', w: [
      ['Mr', '/ˈmɪstə/', 'janob (erkakka)', '*Mr* Brown is our teacher.', 'Janob Braun — ustozimiz.', 'man-office-worker'],
      ['Mrs', '/ˈmɪsɪz/', 'xonim (turmushga chiqqan ayolga)', 'Good morning, *Mrs* Smith!', 'Xayrli tong, Smit xonim!', 'woman-office-worker'],
      ['Ms', '/mɪz/', 'xonim (ayolga, umumiy)', '*Ms* Lee is from Korea.', 'Li xonim Koreyadan.', 'woman-teacher'],
      ['Miss', '/mɪs/', 'xonim (turmushga chiqmagan ayolga)', 'Thank you, *Miss* Rose.', 'Rahmat, Rouz xonim.', 'woman'],
      ['friend', '/frend/', 'do‘st', 'This is my *friend*, Jasur.', 'Bu mening do‘stim Jasur.', 'people-hugging'],
      ['classmate', '/ˈklɑːsmeɪt/', 'sinfdosh', 'Bekzod is my *classmate*.', 'Bekzod — sinfdoshim.', 'man-student+woman-student'],
      ['everyone', '/ˈevriwʌn/', 'hamma', 'Hello, *everyone*!', 'Hammaga salom!', 'busts-in-silhouette'],
      ['meet', '/miːt/', 'tanishmoq, uchrashmoq', 'Nice to *meet* you.', 'Tanishganimdan xursandman.', 'handshake sparkles']
    ] }
  ],
  A: [{
    k: 'Hikoya', t: 'First Day at a New School', s: 'Lolaning xalqaro maktabdagi birinchi kuni',
    p: [
      ['It’s Monday, eight o’clock. Lola is at a new school in Tashkent. Many students here are from other countries. “[Good morning|good morning], [everyone]!” says the teacher, [Mrs] Brown. “[Welcome] to our class!”',
       'Dushanba, soat sakkiz. Lola Toshkentdagi yangi maktabda. Bu yerdagi ko‘p o‘quvchilar boshqa davlatlardan. «Hammaga xayrli tong!» — deydi ustoz Braun xonim. — «Sinfimizga xush kelibsiz!»'],
      ['A boy says, “[Hi]! I’m Jiwoo. [How are you?]” Lola says, “[I’m fine], [thanks]. And you?” “[Not bad]!” Jiwoo smiles. “This is my [friend], Tom. He’s my [classmate] too.” “[Nice to meet you],” says Tom. “Nice to [meet] you too,” says Lola.',
       'Bir bola aytadi: «Salom! Men Jivuman. Qalaysan?» Lola aytadi: «Yaxshiman, rahmat. O‘zing-chi?» «Yomon emas!» — Jivu jilmayadi. — «Bu mening do‘stim Tom. U ham sinfdoshim.» «Tanishganimdan xursandman», — deydi Tom. «Men ham», — deydi Lola.'],
      ['At ten o’clock, a girl comes in. “[Sorry], I’m late!” “[No problem],” says Mrs Brown. Then Lola has a question: “[Excuse me], where is the library?” “[Pardon?]” “Where is the library, [please]?” “It’s on the first floor.” “[Thank you]!” “[You’re welcome].”',
       'Soat o‘nda bir qiz kiradi. «Uzr, kechikdim!» «Hechqisi yo‘q», — deydi Braun xonim. Keyin Lolada savol bor: «Kechirasiz, kutubxona qayerda?» «Qaytaring-chi?» «Kutubxona qayerda, iltimos?» «Birinchi qavatda.» «Rahmat!» «Arzimaydi.»'],
      ['In the afternoon, the director, [Mr] Karimov, visits the class. “[Good afternoon], children!” The English teacher, [Ms] Lee, and the music teacher, [Miss] Rose, come in and say [hello] too.',
       'Tushdan keyin direktor Karimov janoblari sinfga keladi. «Xayrli kun, bolalar!» Ingliz tili ustozi Li xonim va musiqa ustozi Rouz xonim ham kirib, salom berishadi.'],
      ['At three o’clock, the lessons finish. “[Goodbye], Mrs Brown!” “[Bye], Lola! [See you tomorrow]. [Have a nice day!]” Jiwoo asks, “[How’s it going?] Do you like it here?” “Yes, a lot! [See you later]!”',
       'Soat uchda darslar tugaydi. «Xayr, Braun xonim!» «Xayr, Lola! Ertaga ko‘rishamiz. Kuningiz yaxshi o‘tsin!» Jivu so‘raydi: «Ishlar qalay? Senga bu yer yoqyaptimi?» «Ha, juda! Keyinroq ko‘rishamiz!»'],
      ['In the evening, Lola is at home. Her grandma calls: “[Good evening], Lola! How is your new school?” “It’s great!” At ten, Lola says, “[Good night], Grandma. [Take care]!”',
       'Kechqurun Lola uyda. Buvisi qo‘ng‘iroq qiladi: «Xayrli kech, Lola! Yangi maktabing qanday?» «Zo‘r!» Soat o‘nda Lola aytadi: «Xayrli tun, buvi. O‘zingizni asrang!»']
    ],
    q: [
      ['Who is Lola’s class teacher?', ['Mr Karimov', 'Mrs Brown', 'Miss Rose'], 1],
      ['Who is Jiwoo’s friend?', ['Tom', 'Aziz', 'Bobur'], 0],
      ['Why does a girl say “Sorry”?', ['She is ill.', 'She is hungry.', 'She is late.'], 2],
      ['Where is the library?', ['next to the classroom', 'on the first floor', 'at home'], 1],
      ['What does Lola say to Grandma at ten?', ['Good morning', 'Welcome', 'Good night'], 2]
    ]
  }]
});

/* ---------------- 3: Numbers, colours, uncountable nouns ---------------- */
VOC(3, {
  x: 'numbers',
  vi: 'Sonlarni yozish va o‘qish qoidalari, 0 dan milliongacha sonlar, ranglar va sanalmaydigan otlar. Pastdagi oynaga istalgan sonni yozib, qanday o‘qilishini eshiting.',
  vr: [
    { h: '0–19: yod olinadigan sonlar va -teen', x: '<p><b>0–12</b> gacha sonlarni yod oling: zero, one, two … eleven, twelve.</p><p><b>13–19</b>: son + <b>-teen</b>. Imlosi o‘zgaradiganlari bor: three → <b>thir</b>teen, five → <b>fif</b>teen, eight → eigh<b>teen</b> (bitta t).</p><p>Urg‘u oxiriga tushadi: thir<b>TEEN</b>, four<b>TEEN</b>, fif<b>TEEN</b>.</p>',
      tb: { h: ['Son', 'Yozilishi', 'O‘qilishi'], r: [['13', 'thirteen', '/ˌθɜːˈtiːn/'], ['14', 'fourteen', '/ˌfɔːˈtiːn/'], ['15', 'fifteen', '/ˌfɪfˈtiːn/'], ['18', 'eighteen', '/ˌeɪˈtiːn/'], ['19', 'nineteen', '/ˌnaɪnˈtiːn/']] } },
    { h: 'O‘nliklar: -ty', x: '<p>20, 30 … 90 da <b>-ty</b> qo‘shiladi: twen<b>ty</b>, thir<b>ty</b>, <b>for</b>ty, <b>fif</b>ty, eigh<b>ty</b>, nine<b>ty</b>.</p><p><b>forty</b> — «u» harfisiz yoziladi: four, lekin <b>forty</b>!</p><p>Urg‘u boshida: <b>THIR</b>ty, <b>FOR</b>ty. Shuning uchun 13 va 30 ni farqlang.</p>',
      e: [['*thirteen* — *thirty*', '13 — 30'], ['*fourteen* — *forty*', '14 — 40'], ['*fifteen* — *fifty*', '15 — 50']] },
    { h: '21–99: chiziqcha bilan', f: 'o‘nlik + *-* + birlik', x: '<p>O‘nlik va birlik orasiga <b>chiziqcha</b> qo‘yiladi: 45 = <b>forty-five</b>, 21 = twenty-one, 99 = ninety-nine.</p><p>Xuddi o‘zbekchadagidek: qirq + besh = <b>forty-five</b>.</p>',
      e: [['*forty-five*', '45 — qirq besh'], ['*twenty-one*', '21 — yigirma bir'], ['*ninety-nine*', '99 — to‘qson to‘qqiz']] },
    { h: 'Yuzlar, minglar, millionlar', x: '<p><b>hundred, thousand, million</b> son bilan kelganda <b>-s olmaydi</b>: two hundred («two hundreds» emas), five thousand.</p><p>Britaniya inglizchasida yuzlikdan keyin <b>and</b> qo‘shiladi: 345 = three hundred <b>and</b> forty-five.</p><p>Katta sonlarda har uch xonadan keyin vergul yoziladi: 2,500 = two thousand, five hundred.</p>',
      tb: { h: ['Son', 'O‘qilishi'], r: [['100', 'a hundred / one hundred'], ['345', 'three hundred and forty-five'], ['1,000', 'a thousand / one thousand'], ['2,500', 'two thousand, five hundred'], ['45,000', 'forty-five thousand'], ['3,000,000', 'three million']] } },
    { h: 'Yillar, telefon raqamlari, narxlar', x: '<p><b>Yillar</b> ikki xonadan bo‘lib o‘qiladi: 1998 = nineteen ninety-eight, 2025 = twenty twenty-five. 2000–2009: two thousand and nine.</p><p><b>Telefon raqami</b> raqamma-raqam o‘qiladi: 0 — «oh», 55 — «double five».</p><p><b>Narx</b>: 15,000 soums = fifteen thousand soums.</p>',
      tb: { h: ['Yozuv', 'O‘qilishi'], r: [['1998', 'nineteen ninety-eight'], ['2009', 'two thousand and nine'], ['2025', 'twenty twenty-five'], ['90 123 45 55', 'nine oh, one two three, four five, double five'], ['15,000 soums', 'fifteen thousand soums']] } }
  ],
  V: [
    { g: 'n0', t: '0–12: yod olinadigan sonlar', w: [
      ['zero', '/ˈzɪərəʊ/', 'nol', 'It’s *zero* degrees today.', 'Bugun nol daraja.', '#0'],
      ['one', '/wʌn/', 'bir', 'I have *one* sister.', 'Mening bitta singlim bor.', '#1'],
      ['two', '/tuː/', 'ikki', 'I have *two* cats.', 'Mening ikkita mushugim bor.', '#2'],
      ['three', '/θriː/', 'uch', 'We have *three* lessons today.', 'Bugun uchta darsimiz bor.', '#3'],
      ['four', '/fɔː/', 'to‘rt', 'A car has *four* wheels.', 'Mashinaning to‘rtta g‘ildiragi bor.', '#4'],
      ['five', '/faɪv/', 'besh', 'There are *five* people in my family.', 'Oilamiz besh kishidan iborat.', '#5'],
      ['six', '/sɪks/', 'olti', 'I get up at *six*.', 'Soat oltida turaman.', '#6'],
      ['seven', '/ˈsevn/', 'yetti', 'A week has *seven* days.', 'Haftada yetti kun bor.', '#7'],
      ['eight', '/eɪt/', 'sakkiz', 'My brother is *eight*.', 'Ukam sakkiz yoshda.', '#8'],
      ['nine', '/naɪn/', 'to‘qqiz', 'The lesson starts at *nine*.', 'Dars soat to‘qqizda boshlanadi.', '#9'],
      ['ten', '/ten/', 'o‘n', 'I have *ten* fingers.', 'Mening o‘nta barmog‘im bor.', '#10'],
      ['eleven', '/ɪˈlevn/', 'o‘n bir', 'A football team has *eleven* players.', 'Futbol jamoasida o‘n bir o‘yinchi bor.', '#11'],
      ['twelve', '/twelv/', 'o‘n ikki', 'A year has *twelve* months.', 'Yilda o‘n ikki oy bor.', '#12']
    ] },
    { g: 'teen', t: '13–19: -teen', w: [
      ['thirteen', '/ˌθɜːˈtiːn/', 'o‘n uch', 'My sister is *thirteen*.', 'Singlim o‘n uch yoshda.', '#13'],
      ['fourteen', '/ˌfɔːˈtiːn/', 'o‘n to‘rt', 'There are *fourteen* girls in our class.', 'Sinfimizda o‘n to‘rtta qiz bor.', '#14'],
      ['fifteen', '/ˌfɪfˈtiːn/', 'o‘n besh', 'I’m *fifteen* years old.', 'Men o‘n besh yoshdaman.', '#15'],
      ['sixteen', '/ˌsɪksˈtiːn/', 'o‘n olti', 'Bus number *sixteen* goes to the centre.', '16-avtobus markazga boradi.', '#16'],
      ['seventeen', '/ˌsevnˈtiːn/', 'o‘n yetti', 'My cousin is *seventeen*.', 'Amakivachcham o‘n yetti yoshda.', '#17'],
      ['eighteen', '/ˌeɪˈtiːn/', 'o‘n sakkiz', 'You can drive at *eighteen*.', 'O‘n sakkiz yoshda mashina haydash mumkin.', '#18'],
      ['nineteen', '/ˌnaɪnˈtiːn/', 'o‘n to‘qqiz', 'The ticket costs *nineteen* dollars.', 'Chipta o‘n to‘qqiz dollar turadi.', '#19']
    ] },
    { g: 'ty', t: 'O‘nliklar: -ty', w: [
      ['twenty', '/ˈtwenti/', 'yigirma', 'There are *twenty* students in my class.', 'Sinfimda yigirma o‘quvchi bor.', '#20'],
      ['thirty', '/ˈθɜːti/', 'o‘ttiz', 'A month has about *thirty* days.', 'Bir oyda taxminan o‘ttiz kun bor.', '#30'],
      ['forty', '/ˈfɔːti/', 'qirq', 'My mum is *forty*.', 'Oyim qirq yoshda.', '#40'],
      ['fifty', '/ˈfɪfti/', 'ellik', 'The bus takes *fifty* minutes.', 'Avtobusda ellik daqiqa ketadi.', '#50'],
      ['sixty', '/ˈsɪksti/', 'oltmish', 'An hour has *sixty* minutes.', 'Bir soatda oltmish daqiqa bor.', '#60'],
      ['seventy', '/ˈsevnti/', 'yetmish', 'My grandpa is *seventy*.', 'Bobom yetmish yoshda.', '#70'],
      ['eighty', '/ˈeɪti/', 'sakson', 'This book has *eighty* pages.', 'Bu kitobda sakson bet bor.', '#80'],
      ['ninety', '/ˈnaɪnti/', 'to‘qson', 'The film is *ninety* minutes long.', 'Film to‘qson daqiqa davom etadi.', '#90']
    ] },
    { g: 'big', t: 'Katta sonlar', w: [
      ['hundred', '/ˈhʌndrəd/', 'yuz', 'Our school is a *hundred* years old.', 'Maktabimiz yuz yoshda.', 'hundred-points'],
      ['thousand', '/ˈθaʊznd/', 'ming', 'Five *thousand* people live in our village.', 'Qishlog‘imizda besh ming kishi yashaydi.', '#1,000'],
      ['million', '/ˈmɪljən/', 'million', 'Tashkent has about three *million* people.', 'Toshkentda taxminan uch million kishi yashaydi.', '#1,000,000'],
      ['number', '/ˈnʌmbə/', 'son, raqam', 'What’s your phone *number*?', 'Telefon raqamingiz nechchi?', 'input-numbers']
    ] },
    { g: 'col', t: 'Ranglar', w: [
      ['colour', '/ˈkʌlə/', 'rang', 'What *colour* is your bag?', 'Sumkangiz qanday rangda?', 'artist-palette'],
      ['red', '/red/', 'qizil', 'I have a *red* pen.', 'Mening qizil ruchkam bor.', 'sw:E53935'],
      ['blue', '/bluː/', 'ko‘k', 'The sky is *blue*.', 'Osmon ko‘k.', 'sw:1E6FE0'],
      ['green', '/ɡriːn/', 'yashil', 'Grass is *green*.', 'O‘t yashil.', 'sw:2E9E5B'],
      ['yellow', '/ˈjeləʊ/', 'sariq', 'Bananas are *yellow*.', 'Bananlar sariq.', 'sw:F7C531'],
      ['orange', '/ˈɒrɪndʒ/', 'to‘q sariq', 'Her T-shirt is *orange*.', 'Uning futbolkasi to‘q sariq.', 'sw:F57C00'],
      ['purple', '/ˈpɜːpl/', 'binafsha', '*Purple* is my favourite colour.', 'Binafsha — sevimli rangim.', 'sw:8E44C9'],
      ['pink', '/pɪŋk/', 'pushti', 'She has a *pink* phone.', 'Uning pushti telefoni bor.', 'sw:F48FB1'],
      ['brown', '/braʊn/', 'jigarrang', 'My eyes are *brown*.', 'Ko‘zlarim jigarrang.', 'sw:8A5A35'],
      ['black', '/blæk/', 'qora', 'He has *black* hair.', 'Uning sochi qora.', 'sw:1C1F3F'],
      ['white', '/waɪt/', 'oq', 'Milk is *white*.', 'Sut oq.', 'sw:FFFFFF'],
      ['grey', '/ɡreɪ/', 'kulrang', 'The sky is *grey* today.', 'Bugun osmon kulrang.', 'sw:9A9AA8'],
      ['gold', '/ɡəʊld/', 'tilla rang, oltin', 'She has a *gold* ring.', 'Uning tilla uzugi bor.', 'ring sw:D4A72C'],
      ['silver', '/ˈsɪlvə/', 'kumush rang, kumush', 'I have a *silver* watch.', 'Mening kumush soatim bor.', 'watch sw:B8BCC6'],
      ['light', '/laɪt/', 'och (rang)', 'I like *light* blue.', 'Men och ko‘k rangni yoqtiraman.', 'sw:9CC3FF'],
      ['dark', '/dɑːk/', 'to‘q (rang)', 'He has a *dark* green car.', 'Uning to‘q yashil mashinasi bor.', 'sw:1F5E3B']
    ] },
    { g: 'unc', t: 'Sanalmaydigan otlar', w: [
      ['water', '/ˈwɔːtə/', 'suv', 'Can I have some *water*?', 'Biroz suv olsam bo‘ladimi?', 'droplet'],
      ['milk', '/mɪlk/', 'sut', 'I drink *milk* every morning.', 'Har ertalab sut ichaman.', 'glass-of-milk'],
      ['bread', '/bred/', 'non', 'We need some *bread*.', 'Bizga biroz non kerak.', 'bread'],
      ['rice', '/raɪs/', 'guruch', 'Plov has a lot of *rice*.', 'Palovda guruch ko‘p.', 'cooked-rice'],
      ['money', '/ˈmʌni/', 'pul', 'I don’t have much *money*.', 'Pulim ko‘p emas.', 'dollar-banknote'],
      ['sugar', '/ˈʃʊɡə/', 'shakar', 'No *sugar* in my tea, please.', 'Choyimga shakar solmang, iltimos.', 'teacup-without-handle candy'],
      ['juice', '/dʒuːs/', 'sharbat', 'Orange *juice* is my favourite drink.', 'Apelsin sharbati — sevimli ichimligim.', 'beverage-box'],
      ['cheese', '/tʃiːz/', 'pishloq', 'I like bread and *cheese*.', 'Non va pishloqni yoqtiraman.', 'cheese-wedge'],
      ['homework', '/ˈhəʊmwɜːk/', 'uy vazifasi', 'We have a lot of *homework*.', 'Uy vazifamiz ko‘p.', 'notebook pencil'],
      ['advice', '/ədˈvaɪs/', 'maslahat', 'Can you give me some *advice*?', 'Menga maslahat bera olasizmi?', 'light-bulb speech-balloon']
    ] }
  ],
  A: [{
    k: 'Blog', t: 'My Day in Numbers and Colours', s: 'Malika, 15, Samarqand',
    p: [
      ['Hi! I’m Malika and I’m [fifteen]. I live in Samarkand, a city of about six [hundred] [thousand] people. I love numbers, so today I count everything in my day. My phone [number]? Sorry, that’s a secret!',
       'Salom! Men Malikaman, o‘n besh yoshdaman. Taxminan olti yuz ming kishi yashaydigan Samarqand shahrida yashayman. Sonlarni yaxshi ko‘raman, shuning uchun bugun kunimdagi hamma narsani sanayman. Telefon raqamim? Uzr, bu sir!'],
      ['I get up at [six]. Breakfast is [one] egg, [two] pieces of [bread] with [cheese] and a glass of [milk]. No [sugar] for me! My little brother is [eight]. He drinks [three] glasses of orange [juice]! Our [brown] cat sleeps on his chair.',
       'Soat oltida turaman. Nonushtam — bitta tuxum, pishloqli ikki bo‘lak non va bir stakan sut. Shakar yemayman! Ukam sakkiz yoshda. U uch stakan apelsin sharbati ichadi! Jigarrang mushugimiz uning stulida uxlaydi.'],
      ['School starts at half past [seven]. There are [twenty] students in my class: [eleven] boys and [nine] girls. Every lesson is [forty] minutes. In Maths, our teacher writes big numbers on the board: one [hundred], one [thousand], one [million]. “How do you read 45?” she asks. “[Forty|forty]-[five]!” says Bobur.',
       'Maktab soat yetti yarimda boshlanadi. Sinfimda yigirma o‘quvchi bor: o‘n bir o‘g‘il va to‘qqiz qiz. Har bir dars qirq daqiqa. Matematikada ustozimiz doskaga katta sonlarni yozadi: bir yuz, bir ming, bir million. «45 qanday o‘qiladi?» — deb so‘raydi u. «Forty-five!» — deydi Bobur.'],
      ['In Art, we paint a rainbow: [red], [orange], [yellow], [green], [blue] and two kinds of [purple]. My favourite [colour] is [light] blue. My friend Lola likes [dark] green. Her bag is [pink] and her pencil case is [grey].',
       'Rasm darsida kamalak chizamiz: qizil, to‘q sariq, sariq, yashil, ko‘k va ikki xil binafsha. Mening sevimli rangim — och ko‘k. Dugonam Lola to‘q yashilni yoqtiradi. Uning sumkasi pushti, qalamdoni esa kulrang.'],
      ['After school I go to the market with Mum. We need [rice], [water] and some fruit. Mum has [fifty] thousand soums. A kilo of apples is [twelve] thousand. The watermelons are huge: [thirteen], [fourteen], even [sixteen] kilos! “How much [money] do we have now?” Mum asks.',
       'Maktabdan keyin oyim bilan bozorga boraman. Bizga guruch, suv va biroz meva kerak. Oyimda ellik ming so‘m bor. Bir kilo olma o‘n ikki ming. Tarvuzlar juda katta: o‘n uch, o‘n to‘rt, hatto o‘n olti kilo! «Endi qancha pulimiz qoldi?» — deb so‘raydi oyim.'],
      ['At home, I do my [homework]. Grandpa is [seventy] and Grandma is [sixty]-[four]. Grandpa gives me some [advice]: “Count your money, not your problems!” He has a [gold] watch, and Grandma has a [silver] ring. My aunt is [thirty] and she is a Maths teacher too.',
       'Uyda uy vazifamni qilaman. Bobom yetmish yoshda, buvim esa oltmish to‘rtda. Bobom menga maslahat beradi: «Muammolaringni emas, pulingni sana!» Uning tilla soati, buvimning esa kumush uzugi bor. Xolam o‘ttiz yoshda, u ham matematika o‘qituvchisi.'],
      ['In the evening, we watch football. The score is [zero] – zero for [eighty] minutes. Then, after [ninety] minutes, our team scores! The players wear [white] shirts and [black] shorts. My cousins are [seventeen], [eighteen] and [nineteen], and they all shout. I go to bed at [ten]. Good night!',
       'Kechqurun futbol ko‘ramiz. Sakson daqiqa davomida hisob nol – nol. Keyin to‘qson daqiqadan so‘ng jamoamiz gol uradi! O‘yinchilar oq futbolka va qora shorti kiygan. Amakivachchalarim o‘n yetti, o‘n sakkiz va o‘n to‘qqiz yoshda, hammasi baqirib yuboradi. Soat o‘nda uxlashga yotaman. Xayrli tun!']
    ],
    q: [
      ['How old is Malika?', ['thirteen', 'fifteen', 'fifty'], 1],
      ['How many girls are there in her class?', ['nine', 'eleven', 'twenty'], 0],
      ['How do you read 45?', ['four-five', 'fourteen-five', 'forty-five'], 2],
      ['What is Malika’s favourite colour?', ['light blue', 'dark green', 'pink'], 0],
      ['What is Grandpa’s advice?', ['Drink more water!', 'Count your money, not your problems!', 'Do your homework!'], 1]
    ]
  }]
});

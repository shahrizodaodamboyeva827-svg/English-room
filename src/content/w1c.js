/* =====================================================================
   A1 — 15–16-darslar: uy, xonalar, uy buyumlari
   ===================================================================== */

/* ---------------- 15: My Home ---------------- */
VOC(15, {
  vi: 'Uy turlari, xonalar, uyning qismlari, qavatlar va uyni tasvirlovchi sifatlar. Xona ichidagi buyumlar keyingi darsda.',
  vr: [{ h: 'house, flat yoki home?', x: '<p><b>house</b> — alohida uy (hovli), <b>flat</b> — ko‘p qavatli binodagi kvartira, <b>home</b> — siz yashaydigan joy, qaysi turdagi bo‘lishidan qat’i nazar.</p><p>Diqqat: <b>at home</b> (uyda), <b>go home</b> (uyga bormoq) — predlogsiz va artiklsiz!</p><p>Britaniyada <b>ground floor</b> — birinchi (yer) qavat, <b>first floor</b> — undan bir qavat yuqori.</p>' }],
  V: [
    { g: 'type', t: 'Uy turlari', w: [
      ['house', '/haʊs/', 'uy, hovli', 'My grandparents live in a big *house*.', 'Bobom va buvim katta hovlida yashaydi.', 'house-with-garden'],
      ['flat', '/flæt/', 'kvartira (US: apartment)', 'We live in a *flat* in Chilanzar.', 'Biz Chilonzordagi kvartirada yashaymiz.', 'office-building #flat'],
      ['block of flats', '/ˌblɒk əv ˈflæts/', 'ko‘p qavatli uy', 'Our *block of flats* has got nine floors.', 'Bizning ko‘p qavatli uyimiz to‘qqiz qavatli.', 'office-building'],
      ['home', '/həʊm/', 'uy, xonadon', 'There’s no place like *home*.', 'Uyday joy yo‘q.', 'house red-heart'],
      ['neighbour', '/ˈneɪbə/', 'qo‘shni', 'Our *neighbour* is very friendly.', 'Qo‘shnimiz juda samimiy.', 'people-hugging house'],
      ['rent', '/rent/', 'ijaraga olmoq', 'Students often *rent* a flat.', 'Talabalar ko‘pincha kvartirani ijaraga oladi.', 'key dollar-banknote']
    ] },
    { g: 'room', t: 'Xonalar va joylar', w: [
      ['room', '/ruːm/', 'xona', 'How many *rooms* are there?', 'Nechta xona bor?', 'door'],
      ['living room', '/ˈlɪvɪŋ ruːm/', 'mehmonxona (xona)', 'We watch TV in the *living room*.', 'Mehmonxonada televizor ko‘ramiz.', 'couch-and-lamp'],
      ['bedroom', '/ˈbedruːm/', 'yotoqxona', 'My *bedroom* is small but cosy.', 'Yotoqxonam kichik, lekin shinam.', 'bed'],
      ['kitchen', '/ˈkɪtʃɪn/', 'oshxona', 'Mum is cooking in the *kitchen*.', 'Oyim oshxonada ovqat pishiryapti.', 'cooking'],
      ['bathroom', '/ˈbɑːθruːm/', 'hammom, vannaxona', 'The *bathroom* is next to my room.', 'Hammom xonam yonida.', 'bathtub'],
      ['toilet', '/ˈtɔɪlət/', 'hojatxona', 'Where’s the *toilet*, please?', 'Hojatxona qayerda, iltimos?', 'toilet'],
      ['hall', '/hɔːl/', 'dahliz', 'Leave your shoes in the *hall*.', 'Poyabzalni dahlizda qoldiring.', 'door mans-shoe'],
      ['dining room', '/ˈdaɪnɪŋ ruːm/', 'ovqatlanish xonasi', 'We have dinner in the *dining room*.', 'Kechki ovqatni ovqatlanish xonasida yeymiz.', 'fork-and-knife-with-plate chair'],
      ['garage', '/ˈɡærɑːʒ/', 'garaj', 'Dad’s car is in the *garage*.', 'Dadamning mashinasi garajda.', 'automobile house'],
      ['garden', '/ˈɡɑːdn/', 'bog‘ (uy yonidagi)', 'Grandma grows tomatoes in the *garden*.', 'Buvim bog‘da pomidor o‘stiradi.', 'potted-plant tomato'],
      ['yard', '/jɑːd/', 'hovli (ochiq maydon)', 'The children are playing in the *yard*.', 'Bolalar hovlida o‘ynayapti.', 'soccer-ball house'],
      ['balcony', '/ˈbælkəni/', 'balkon', 'There are flowers on the *balcony*.', 'Balkonda gullar bor.', 'potted-plant office-building']
    ] },
    { g: 'part', t: 'Uyning qismlari', w: [
      ['door', '/dɔː/', 'eshik', 'Close the *door*, please.', 'Eshikni yoping, iltimos.', 'door'],
      ['window', '/ˈwɪndəʊ/', 'deraza', 'Open the *window*. It’s hot.', 'Derazani oching. Issiq.', 'window'],
      ['wall', '/wɔːl/', 'devor', 'There’s a clock on the *wall*.', 'Devorda soat bor.', 'brick mantelpiece-clock'],
      ['floor', '/flɔː/', 'pol; qavat', 'The cat is sleeping on the *floor*.', 'Mushuk polda uxlayapti.', 'cat'],
      ['ceiling', '/ˈsiːlɪŋ/', 'shift', 'There’s a big lamp on the *ceiling*.', 'Shiftda katta chiroq bor.', 'light-bulb up-arrow'],
      ['roof', '/ruːf/', 'tom', 'Our house has a red *roof*.', 'Uyimizning tomi qizil.', 'house'],
      ['stairs', '/steəz/', 'zinapoya', 'Be careful on the *stairs*.', 'Zinada ehtiyot bo‘ling.', 'up-arrow person-walking'],
      ['lift', '/lɪft/', 'lift (US: elevator)', 'The *lift* isn’t working today.', 'Bugun lift ishlamayapti.', 'elevator'],
      ['gate', '/ɡeɪt/', 'darvoza', 'Please close the *gate*.', 'Iltimos, darvozani yoping.', '-']
    ] },
    { g: 'level', t: 'Qavatlar: yuqori va past', w: [
      ['upstairs', '/ˌʌpˈsteəz/', 'yuqorida, yuqori qavatda', 'My room is *upstairs*.', 'Xonam yuqori qavatda.', 'up-arrow house'],
      ['downstairs', '/ˌdaʊnˈsteəz/', 'pastda, pastki qavatda', 'Come *downstairs*! Dinner’s ready.', 'Pastga tushing! Kechki ovqat tayyor.', 'down-arrow house'],
      ['ground floor', '/ˌɡraʊnd ˈflɔː/', 'birinchi (yer) qavat', 'The shop is on the *ground floor*.', 'Do‘kon birinchi qavatda.', 'office-building down-arrow'],
      ['top floor', '/ˌtɒp ˈflɔː/', 'eng yuqori qavat', 'We live on the *top floor*.', 'Biz eng yuqori qavatda yashaymiz.', 'office-building up-arrow']
    ] },
    { g: 'adj', t: 'Uyni tasvirlash', w: [
      ['cosy', '/ˈkəʊzi/', 'shinam', 'Our kitchen is small but *cosy*.', 'Oshxonamiz kichik, lekin shinam.', 'couch-and-lamp candle'],
      ['bright', '/braɪt/', 'yorug‘', 'My room is *bright* because it has two windows.', 'Xonam yorug‘, chunki ikkita derazasi bor.', 'window sun'],
      ['modern', '/ˈmɒdn/', 'zamonaviy', 'They live in a *modern* flat.', 'Ular zamonaviy kvartirada yashaydi.', 'office-building sparkles'],
      ['comfortable', '/ˈkʌmftəbl/', 'qulay', 'This sofa is very *comfortable*.', 'Bu divan juda qulay.', 'couch-and-lamp'],
      ['noisy', '/ˈnɔɪzi/', 'shovqinli', 'Our street is *noisy*.', 'Bizning ko‘chamiz shovqinli.', 'loudspeaker'],
      ['spacious', '/ˈspeɪʃəs/', 'keng', 'The living room is *spacious*.', 'Mehmonxona keng.', 'couch-and-lamp left-right-arrow']
    ] }
  ],
  A: [{
    k: 'E’lon', t: 'Two Homes for Rent', s: 'Ikki xil uy e’loni: siz qaysi birini tanlaysiz?',
    p: [
      ['Aunt Dilnoza has a new job in Tashkent. She wants to [rent] a [home] for her family. Here are two adverts from a website. Which one is better for them?',
       'Dilnoza xola Toshkentda yangi ish topdi. U oilasi uchun uy ijaraga olmoqchi. Mana saytdagi ikki e’lon. Ular uchun qaysi biri yaxshiroq?'],
      ['Advert 1: A [modern] [flat] in a new [block of flats]. It’s on the [top floor] — the twelfth. The [lift] is fast and quiet. The flat has a [spacious] [living room], two [bedrooms|bedroom], a [kitchen], a [bathroom] and a separate [toilet]. There’s a big [balcony] with a great view of the city. The rooms are [bright] because the [windows|window] are very big.',
       '1-e’lon: Yangi ko‘p qavatli uydagi zamonaviy kvartira. U eng yuqori — o‘n ikkinchi qavatda. Lift tez va jim. Kvartirada keng mehmonxona, ikkita yotoqxona, oshxona, hammom va alohida hojatxona bor. Shahar manzarasi ko‘rinadigan katta balkon bor. Xonalar yorug‘, chunki derazalar juda katta.'],
      ['The street is a bit [noisy], but the shops and the metro are on the [ground floor] and next to the building. The [neighbours|neighbour] are young families.',
       'Ko‘cha biroz shovqinli, lekin do‘konlar va metro binoning birinchi qavatida va yonida. Qo‘shnilar — yosh oilalar.'],
      ['Advert 2: An old [house] with a [garden] and a [yard]. There’s a big green [gate] and a [garage] for one car. [Downstairs] there is a [hall], a [cosy] living room, a kitchen and a [dining room]. [Upstairs] there are three bedrooms and a bathroom. The [stairs] are wooden.',
       '2-e’lon: Bog‘i va hovlisi bor eski uy. Katta yashil darvoza va bitta mashinalik garaj bor. Pastki qavatda dahliz, shinam mehmonxona, oshxona va ovqatlanish xonasi joylashgan. Yuqori qavatda uchta yotoqxona va hammom bor. Zinapoya yog‘ochdan.'],
      ['The house is [comfortable] and quiet, but it needs some work. The [roof] is old, there’s a crack in one [wall], and the paint on the kitchen [ceiling] is coming off. The wooden [floor] is beautiful, and every [room] has a big old [door].',
       'Uy qulay va tinch, lekin biroz ta’mir kerak. Tomi eski, bir devorda yoriq bor, oshxona shiftidagi bo‘yoq ko‘chyapti. Yog‘och pol chiroyli, har bir xonada katta eski eshik bor.'],
      ['Aunt Dilnoza has three children and a dog. Her husband loves gardening. The children want a big yard to play football. What do you think? Which home is better for them — the flat or the house?',
       'Dilnoza xolaning uchta farzandi va iti bor. Eri bog‘dorchilikni yaxshi ko‘radi. Bolalar futbol o‘ynash uchun katta hovli xohlaydi. Siz nima deb o‘ylaysiz? Ular uchun qaysi uy yaxshiroq — kvartirami yoki hovlimi?']
    ],
    q: [
      ['Why does Aunt Dilnoza want to rent a home?', ['She has a new job in Tashkent.', 'Her house is old.', 'She wants a garden.'], 0],
      ['Which floor is the flat on?', ['the ground floor', 'the second floor', 'the top floor'], 2],
      ['Why are the rooms in the flat bright?', ['The windows are very big.', 'The walls are white.', 'It has a balcony.'], 0],
      ['Where are the bedrooms in the house?', ['downstairs', 'upstairs', 'next to the garage'], 1],
      ['What is the problem with the house?', ['It’s noisy.', 'It needs some work.', 'It hasn’t got a garden.'], 1]
    ]
  }]
});

/* ---------------- 16: Things in the Home ---------------- */
VOC(16, {
  vi: 'Har bir xonadagi buyumlar: oshxona, hammom, yotoqxona, mehmonxona. Oxirida sanalmaydigan narsalar uchun idish so‘zlari (a bottle of shampoo).',
  vr: [{ h: 'Qiyin ko‘pliklar va idish so‘zlari', x: '<p>Uy buyumlarida qiyin ko‘pliklar ko‘p: <b>knife → knives, shelf → shelves, glass → glasses, dish → dishes, toothbrush → toothbrushes</b>.</p><p>Sanalmaydigan narsa (shampoo, soap, toothpaste) idish so‘zi bilan sanaladi: <b>a bottle of shampoo, two bars of soap</b>.</p>' }],
  V: [
    { g: 'kitchen', t: 'Oshxonada', w: [
      ['fridge', '/frɪdʒ/', 'muzlatgich', 'The milk is in the *fridge*.', 'Sut muzlatgichda.', 'ice glass-of-milk'],
      ['cooker', '/ˈkʊkə/', 'gaz plita', 'The soup is on the *cooker*.', 'Sho‘rva plita ustida.', 'fire pot-of-food'],
      ['oven', '/ˈʌvn/', 'duxovka', 'Grandma is baking bread in the *oven*.', 'Buvim duxovkada non yopyapti.', 'bread fire'],
      ['microwave', '/ˈmaɪkrəweɪv/', 'mikroto‘lqinli pech', 'Heat your lunch in the *microwave*.', 'Tushligingizni mikroto‘lqinli pechda isiting.', 'timer-clock'],
      ['kettle', '/ˈketl/', 'choynak (elektr)', 'Can you turn on the *kettle*?', 'Choynakni yoqib yuborasizmi?', 'teapot'],
      ['sink', '/sɪŋk/', 'rakovina', 'The dirty plates are in the *sink*.', 'Kir likopchalar rakovinada.', 'potable-water fork-and-knife-with-plate'],
      ['cupboard', '/ˈkʌbəd/', 'shkaf (oshxona)', 'The cups are in the *cupboard*.', 'Piyolalar shkafda.', 'card-file-box teacup-without-handle'],
      ['plate', '/pleɪt/', 'likopcha, tarelka', 'Put the plov on a big *plate*.', 'Palovni katta likopchaga soling.', 'fork-and-knife-with-plate'],
      ['bowl', '/bəʊl/', 'kosa', 'I have a *bowl* of soup for lunch.', 'Tushlikka bir kosa sho‘rva ichaman.', 'bowl-with-spoon'],
      ['cup', '/kʌp/', 'chashka, piyola', 'Would you like a *cup* of tea?', 'Bir piyola choy ichasizmi?', 'hot-beverage'],
      ['glass', '/ɡlɑːs/', 'stakan', 'Can I have a *glass* of water?', 'Bir stakan suv olsam bo‘ladimi?', 'tumbler-glass'],
      ['knife', '/naɪf/', 'pichoq', 'Be careful! That *knife* is sharp.', 'Ehtiyot bo‘ling! U pichoq o‘tkir.', 'kitchen-knife'],
      ['fork', '/fɔːk/', 'sanchqi', 'We eat salad with a *fork*.', 'Salatni sanchqi bilan yeymiz.', 'fork-and-knife'],
      ['spoon', '/spuːn/', 'qoshiq', 'I need a *spoon* for my soup.', 'Sho‘rvam uchun qoshiq kerak.', 'spoon'],
      ['pan', '/pæn/', 'tova', 'Dad is frying eggs in a *pan*.', 'Dadam tovada tuxum qovuryapti.', 'shallow-pan-of-food'],
      ['pot', '/pɒt/', 'qozon, kastryul', 'The rice is in the big *pot*.', 'Guruch katta qozonda.', 'pot-of-food']
    ] },
    { g: 'bath', t: 'Hammomda', w: [
      ['bath', '/bɑːθ/', 'vanna', 'The baby is having a *bath*.', 'Chaqaloq vannada cho‘milyapti.', 'bathtub'],
      ['shower', '/ˈʃaʊə/', 'dush', 'I have a *shower* every morning.', 'Har ertalab dush qabul qilaman.', 'shower'],
      ['washbasin', '/ˈwɒʃbeɪsn/', 'qo‘l yuvgich', 'Wash your hands in the *washbasin*.', 'Qo‘lingizni qo‘l yuvgichda yuving.', 'soap potable-water'],
      ['mirror', '/ˈmɪrə/', 'oyna, ko‘zgu', 'She’s looking in the *mirror*.', 'U ko‘zguga qarayapti.', 'mirror'],
      ['towel', '/ˈtaʊəl/', 'sochiq', 'Can I have a clean *towel*?', 'Toza sochiq olsam bo‘ladimi?', '-'],
      ['soap', '/səʊp/', 'sovun', 'Wash your hands with *soap*.', 'Qo‘lingizni sovun bilan yuving.', 'soap'],
      ['shampoo', '/ʃæmˈpuː/', 'shampun', 'This *shampoo* smells nice.', 'Bu shampunning hidi yoqimli.', 'lotion-bottle'],
      ['toothbrush', '/ˈtuːθbrʌʃ/', 'tish cho‘tkasi', 'My *toothbrush* is blue.', 'Tish cho‘tkam ko‘k.', 'toothbrush'],
      ['toothpaste', '/ˈtuːθpeɪst/', 'tish pastasi', 'We need some *toothpaste*.', 'Bizga tish pastasi kerak.', 'toothbrush tooth'],
      ['hairdryer', '/ˈheədraɪə/', 'fen', 'Mum’s *hairdryer* is very loud.', 'Oyimning feni juda shovqinli.', 'dashing-away woman-getting-haircut'],
      ['comb', '/kəʊm/', 'taroq', 'Where’s my *comb*?', 'Tarog‘im qayerda?', '-']
    ] },
    { g: 'bed', t: 'Yotoqxonada', w: [
      ['bed', '/bed/', 'karavot', 'My *bed* is next to the window.', 'Karavotim deraza yonida.', 'bed'],
      ['pillow', '/ˈpɪləʊ/', 'yostiq', 'I like a soft *pillow*.', 'Yumshoq yostiqni yaxshi ko‘raman.', 'person-in-bed'],
      ['blanket', '/ˈblæŋkɪt/', 'adyol', 'It’s cold. Take this *blanket*.', 'Sovuq. Bu adyolni oling.', 'person-in-bed snowflake'],
      ['wardrobe', '/ˈwɔːdrəʊb/', 'kiyim javoni', 'My clothes are in the *wardrobe*.', 'Kiyimlarim kiyim javonida.', 'coat dress'],
      ['chest of drawers', '/ˌtʃest əv ˈdrɔːz/', 'tortmali javon', 'My socks are in the *chest of drawers*.', 'Paypoqlarim tortmali javonda.', 'card-file-box socks'],
      ['lamp', '/læmp/', 'chiroq (stol, tungi)', 'I read with a *lamp* at night.', 'Kechasi chiroq yoqib kitob o‘qiyman.', 'light-bulb'],
      ['alarm clock', '/əˈlɑːm klɒk/', 'budilnik', 'My *alarm clock* rings at seven.', 'Budilnigim yettida jiringlaydi.', 'alarm-clock'],
      ['curtains', '/ˈkɜːtnz/', 'pardalar', 'Open the *curtains*, please.', 'Pardalarni oching, iltimos.', 'window']
    ] },
    { g: 'living', t: 'Mehmonxonada', w: [
      ['sofa', '/ˈsəʊfə/', 'divan', 'Sit on the *sofa*.', 'Divanga o‘tiring.', 'couch-and-lamp'],
      ['armchair', '/ˈɑːmtʃeə/', 'kreslo', 'Grandpa is sleeping in his *armchair*.', 'Bobom kreslosida uxlayapti.', 'chair zzz'],
      ['TV', '/ˌtiː ˈviː/', 'televizor', 'Turn off the *TV*, please.', 'Televizorni o‘chiring, iltimos.', 'television'],
      ['remote control', '/rɪˌməʊt kənˈtrəʊl/', 'pult', 'Where’s the *remote control*?', 'Pult qayerda?', 'television ?'],
      ['carpet', '/ˈkɑːpɪt/', 'gilam', 'We have a big Uzbek *carpet*.', 'Bizda katta o‘zbek gilami bor.', '-'],
      ['bookcase', '/ˈbʊkkeɪs/', 'kitob javoni', 'Our *bookcase* is full of books.', 'Kitob javonimiz kitoblarga to‘la.', 'books'],
      ['shelf', '/ʃelf/', 'tokcha, javon (ko‘plik: shelves)', 'The photos are on the *shelf*.', 'Suratlar tokchada.', 'framed-picture'],
      ['coffee table', '/ˈkɒfi ˌteɪbl/', 'jurnal stolchasi', 'Put your cup on the *coffee table*.', 'Piyolangizni stolchaga qo‘ying.', 'hot-beverage'],
      ['cushion', '/ˈkʊʃn/', 'kichik yostiqcha (divan)', 'There are five *cushions* on the sofa.', 'Divanda beshta yostiqcha bor.', 'couch-and-lamp'],
      ['picture', '/ˈpɪktʃə/', 'rasm, surat', 'There’s a *picture* on the wall.', 'Devorda rasm bor.', 'framed-picture']
    ] },
    { g: 'cont', t: 'Idish so‘zlari', w: [
      ['a bottle of', '/ə ˈbɒtl əv/', 'bir shisha …', 'Buy *a bottle of* shampoo, please.', 'Iltimos, bir shisha shampun oling.', 'lotion-bottle'],
      ['a bar of', '/ə ˈbɑːr əv/', 'bir bo‘lak (taxtacha) …', 'There’s *a bar of* soap on the washbasin.', 'Qo‘l yuvgichda bir bo‘lak sovun bor.', 'soap'],
      ['a tube of', '/ə ˈtjuːb əv/', 'bir tyubik …', 'We need *a tube of* toothpaste.', 'Bizga bir tyubik tish pastasi kerak.', 'toothbrush'],
      ['a roll of', '/ə ˈrəʊl əv/', 'bir o‘ram …', 'Get *a roll of* toilet paper.', 'Bir o‘ram hojatxona qog‘ozi oling.', 'roll-of-paper'],
      ['a box of', '/ə ˈbɒks əv/', 'bir quti …', 'There’s *a box of* tissues on the table.', 'Stolda bir quti salfetka bor.', 'takeout-box'],
      ['a packet of', '/ə ˈpækɪt əv/', 'bir paket, bir qadoq …', 'Can you buy *a packet of* tea?', 'Bir qadoq choy olib kela olasizmi?', 'leafy-green hot-beverage']
    ] }
  ],
  A: [{
    k: 'Hazil hikoya', t: 'Grandma’s Inspection', s: 'Buvim kelyapti! Ikki aka-uka uyni bir soatda tartibga keltirishi kerak',
    p: [
      ['Our parents are away for the weekend. On Saturday morning, Grandma calls: “I’m coming in one hour!” My brother Timur and I look around. The flat is a disaster!',
       'Ota-onamiz dam olish kunlari uyda yo‘q. Shanba ertalab buvim qo‘ng‘iroq qiladi: «Bir soatdan keyin boraman!» Akam Temur va men atrofga qaraymiz. Kvartira — ostin-ustin!'],
      ['First, the kitchen. There are dirty [plates|plate], [bowls|bowl], [cups|cup] and [glasses|glass] in the [sink]. A [pan] with old eggs is on the [cooker], and a [pot] of rice is in the [oven] — why?! I wash everything. Timur puts the [knives|knife], [forks|fork] and [spoons|spoon] in the [cupboard]. The [fridge] is almost empty, so we put the pizza box in the [microwave] and turn on the [kettle].',
       'Avval oshxona. Rakovinada kir likopcha, kosa, piyola va stakanlar bor. Plita ustida eski tuxumli tova, duxovkada esa bir qozon guruch — nega?! Men hammasini yuvaman. Temur pichoq, sanchqi va qoshiqlarni shkafga soladi. Muzlatgich deyarli bo‘sh, shuning uchun pitsa qutisini mikroto‘lqinli pechga qo‘yib, choynakni yoqamiz.'],
      ['Next, the living room. Timur’s socks are on the [sofa], and my books are under the [armchair]. Where’s the [remote control]? It’s in a [cushion]! I put the books in the [bookcase] and the photos on the [shelf]. Timur cleans the [carpet], the [coffee table] and the [TV]. Our family [picture] is on the floor — I put it back on the wall.',
       'Keyin mehmonxona. Temurning paypoqlari divanda, mening kitoblarim kreslo ostida. Pult qayerda? U yostiqcha ichida ekan! Kitoblarni kitob javoniga, suratlarni tokchaga qo‘yaman. Temur gilam, stolcha va televizorni tozalaydi. Oilaviy suratimiz polda yotibdi — uni devorga qayta osaman.'],
      ['Then the bedroom. We make the [bed] and put the [pillows|pillow] and the [blanket] on it. Clothes go in the [wardrobe] and the [chest of drawers]. I open the [curtains] and turn off the [lamp]. Timur’s [alarm clock] is still ringing!',
       'Keyin yotoqxona. Karavotni yig‘ishtirib, yostiq va adyolni ustiga qo‘yamiz. Kiyimlar kiyim javoni va tortmali javonga ketadi. Pardalarni ochib, chiroqni o‘chiraman. Temurning budilnigi hali ham jiringlayapti!'],
      ['Last, the bathroom. The [mirror] is dirty, and there’s toothpaste in the [washbasin]. We clean the [bath] and the [shower]. We find a new [towel], [a bar of] [soap] and [a bottle of] [shampoo]. Timur puts our [toothbrushes|toothbrush], the [comb] and Mum’s [hairdryer] on the shelf. Oh no — there’s no [toothpaste]!',
       'Oxirida hammom. Ko‘zgu kir, qo‘l yuvgichda tish pastasi bor. Vanna va dushni tozalaymiz. Yangi sochiq, bir bo‘lak sovun va bir shisha shampun topamiz. Temur tish cho‘tkalarimiz, taroq va oyimning fenini tokchaga qo‘yadi. Voy — tish pastasi yo‘q-ku!'],
      ['The doorbell rings. Grandma comes in with two big bags. “I brought you some things,” she says: [a tube of] toothpaste, [a roll of] toilet paper, [a box of] biscuits and [a packet of] tea. She looks around. “Very good, boys! But why is there a pizza box in the microwave?”',
       'Eshik qo‘ng‘irog‘i jiringlaydi. Buvim ikkita katta sumka bilan kiradi. «Sizlarga bir narsalar olib keldim», — deydi u: bir tyubik tish pastasi, bir o‘ram hojatxona qog‘ozi, bir quti pechenye va bir qadoq choy. U atrofga qaraydi. «Juda yaxshi, bolalar! Lekin nega mikroto‘lqinli pechda pitsa qutisi turibdi?»']
    ],
    q: [
      ['Why do the boys clean the flat?', ['Their parents are coming.', 'Grandma is coming.', 'It’s a school task.'], 1],
      ['What is in the oven?', ['a pot of rice', 'a pizza box', 'a pan with eggs'], 0],
      ['Where is the remote control?', ['under the armchair', 'on the shelf', 'in a cushion'], 2],
      ['What is missing in the bathroom?', ['soap', 'toothpaste', 'a towel'], 1],
      ['What surprises Grandma?', ['the pizza box in the microwave', 'the dirty mirror', 'the alarm clock'], 0]
    ]
  }]
});

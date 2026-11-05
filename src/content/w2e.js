/* =====================================================================
   A2 — 24–25-darslar, 111 va 116-mavzu darslari
   ===================================================================== */

/* ---------------- 24: Comparisons ---------------- */
VOC(24, {
  vi: 'Taqqoslashda eng ko‘p ishlatiladigan sifatlar — qiyosiy daraja yasalish qoidasi bo‘yicha guruhlangan — va taqqoslash so‘zlari (than, as … as).',
  vr: [{ h: 'Qiyosiy va orttirma daraja', x: '<p>Qisqa sifat: <b>-er / the -est</b>: cheap → cheap<b>er</b> → the cheap<b>est</b>.</p><p>Oxiri <b>e</b>: faqat <b>-r / -st</b>: safe → safe<b>r</b>. Oxiri <b>y</b>: <b>-ier / -iest</b>: easy → eas<b>ier</b>.</p><p>Qisqa unli + undosh: undosh ikkilanadi: big → bi<b>gg</b>er.</p><p>Uzun sifat: <b>more / the most</b>: expensive → <b>more</b> expensive → <b>the most</b> expensive.</p><p>Noto‘g‘ri: good → <b>better</b> → <b>the best</b>; bad → <b>worse</b> → <b>the worst</b>; far → <b>further</b>.</p>',
    tb: { h: ['Sifat', 'Qiyosiy', 'Orttirma'], r: [['cheap', 'cheaper', 'the cheapest'], ['safe', 'safer', 'the safest'], ['big', 'bigger', 'the biggest'], ['easy', 'easier', 'the easiest'], ['popular', 'more popular', 'the most popular'], ['good', 'better', 'the best'], ['bad', 'worse', 'the worst']] } }],
  V: [
    { g: 'er', t: 'Qisqa sifatlar: -er, -est', w: [
      ['cheap', '/tʃiːp/', 'arzon', 'The bus is *cheaper* than a taxi.', 'Avtobus taksidan arzonroq.', 'coin'],
      ['fast', '/fɑːst/', 'tez', 'The cheetah is the *fastest* animal.', 'Gepard — eng tez hayvon.', 'rocket'],
      ['strong', '/strɒŋ/', 'kuchli', 'Elephants are *stronger* than horses.', 'Fillar otlardan kuchliroq.', 'flexed-biceps'],
      ['weak', '/wiːk/', 'kuchsiz, zaif', 'My phone signal is *weaker* here.', 'Bu yerda telefonim signali kuchsizroq.', 'antenna-bars'],
      ['high', '/haɪ/', 'baland', 'Everest is the *highest* mountain in the world.', 'Everest — dunyodagi eng baland tog‘.', 'snow-capped-mountain'],
      ['low', '/ləʊ/', 'past', 'Prices are *lower* at the market.', 'Bozorda narxlar pastroq.', 'chart-decreasing'],
      ['rich', '/rɪtʃ/', 'boy', 'He’s the *richest* man in the city.', 'U shahardagi eng boy odam.', 'money-bag'],
      ['poor', '/pɔː/', 'kambag‘al', 'Many people in the village are *poorer* than in the city.', 'Qishloqda ko‘p odamlar shahardagilardan kambag‘alroq.', 'coin !']
    ] },
    { g: 'r', t: 'Oxiri e: -r, -st', w: [
      ['safe', '/seɪf/', 'xavfsiz', 'The metro is *safer* than a motorbike.', 'Metro mototsikldan xavfsizroq.', 'shield'],
      ['wide', '/waɪd/', 'keng (eni)', 'The Amazon is the *widest* river.', 'Amazonka — eng keng daryo.', 'water-wave left-right-arrow'],
      ['close', '/kləʊs/', 'yaqin', 'Which shop is *closer* to your house?', 'Qaysi do‘kon uyingizga yaqinroq?', 'round-pushpin']
    ] },
    { g: 'ier', t: 'Oxiri y: -ier, -iest', w: [
      ['easy', '/ˈiːzi/', 'oson', 'This test is *easier* than the last one.', 'Bu test oldingisidan osonroq.', 'thumbs-up'],
      ['heavy', '/ˈhevi/', 'og‘ir', 'The blue whale is the *heaviest* animal.', 'Ko‘k kit — eng og‘ir hayvon.', 'whale'],
      ['healthy', '/ˈhelθi/', 'sog‘lom, foydali', 'Fruit is *healthier* than sweets.', 'Meva shirinlikdan foydaliroq.', 'red-apple'],
      ['lucky', '/ˈlʌki/', 'omadli', 'You’re *luckier* than me!', 'Sen mendan omadliroqsan!', 'four-leaf-clover']
    ] },
    { g: 'more', t: 'Uzun sifatlar: more, the most', w: [
      ['expensive', '/ɪkˈspensɪv/', 'qimmat', 'Gold is *more expensive* than silver.', 'Oltin kumushdan qimmatroq.', 'gem-stone'],
      ['dangerous', '/ˈdeɪndʒərəs/', 'xavfli', 'Which is *more dangerous*: a shark or a snake?', 'Qaysi biri xavfliroq: akulami yoki ilon?', 'shark'],
      ['difficult', '/ˈdɪfɪkəlt/', 'qiyin', 'Chinese is *more difficult* than English.', 'Xitoy tili ingliz tilidan qiyinroq.', 'face-with-spiral-eyes'],
      ['popular', '/ˈpɒpjələ/', 'mashhur, ommabop', 'Football is the *most popular* sport in the world.', 'Futbol — dunyodagi eng ommabop sport.', 'soccer-ball'],
      ['important', '/ɪmˈpɔːtnt/', 'muhim', 'Health is *more important* than money.', 'Sog‘liq puldan muhimroq.', 'anatomical-heart'],
      ['interesting', '/ˈɪntrəstɪŋ/', 'qiziqarli', 'This book is *more interesting* than the film.', 'Bu kitob filmdan qiziqarliroq.', 'open-book star-struck'],
      ['boring', '/ˈbɔːrɪŋ/', 'zerikarli', 'It was the *most boring* film ever!', 'Bu hayotimdagi eng zerikarli film edi!', 'yawning-face']
    ] },
    { g: 'irreg', t: 'Noto‘g‘ri shakllar', w: [
      ['better', '/ˈbetə/', 'yaxshiroq (good)', 'Your English is *better* now.', 'Ingliz tilingiz endi yaxshiroq.', 'thumbs-up up-arrow'],
      ['the best', '/ðə ˈbest/', 'eng yaxshi (good)', 'You’re *the best* friend in the world!', 'Sen dunyodagi eng yaxshi do‘stsan!', '1st-place-medal'],
      ['worse', '/wɜːs/', 'yomonroq (bad)', 'The traffic is *worse* today.', 'Bugun tirbandlik yomonroq.', 'thumbs-down down-arrow'],
      ['the worst', '/ðə ˈwɜːst/', 'eng yomon (bad)', 'That was *the worst* day of my life.', 'Bu hayotimdagi eng yomon kun edi.', 'face-with-head-bandage']
    ] },
    { g: 'cmp', t: 'Taqqoslash so‘zlari', w: [
      ['than', '/ðæn/', '…dan (ko‘ra)', 'Aziz is taller *than* his dad.', 'Aziz dadasidan baland.', 'left-right-arrow'],
      ['as … as', '/əz … əz/', '…dek, …chalik', 'She’s *as* tall *as* her sister.', 'U opasichalik baland.', 'heavy-equals-sign'],
      ['the same as', '/ðə ˈseɪm əz/', '…bilan bir xil', 'My phone is *the same as* yours.', 'Telefonim siznikiga o‘xshash, bir xil.', 'mobile-phone heavy-equals-sign'],
      ['different from', '/ˈdɪfrənt frəm/', '…dan farqli', 'British English is *different from* American English.', 'Britaniya ingliz tili Amerika ingliz tilidan farq qiladi.', 'flag:gb']
    ] }
  ],
  A: [{
    k: 'Rekordlar', t: 'The Biggest, the Fastest, the Most Dangerous', s: 'Hayvonlar, binolar va odamlar orasidagi rekordlar',
    p: [
      ['Which animal is [the best] runner? Which building is the [highest|high]? Let’s look at some amazing world records — and compare them with things in Uzbekistan!',
       'Qaysi hayvon eng yaxshi yuguruvchi? Qaysi bino eng baland? Keling, ajoyib jahon rekordlariga nazar tashlaymiz — va ularni O‘zbekistondagi narsalar bilan taqqoslaymiz!'],
      ['Animals first. The cheetah is the [fastest|fast] animal on land — it can run at 110 km/h, [faster|fast] [than] a car in the city! The blue whale is the biggest and [heaviest|heavy] animal: it’s [heavier|heavy] [than] 30 elephants. Elephants are [stronger|strong] than any other land animal, but they aren’t [as … as|as … as] fast as horses. A baby elephant is much [weaker|weak] than its mother, so it always stays [close] to her.',
       'Avval hayvonlar. Gepard — quruqlikdagi eng tez hayvon. U soatiga 110 km tezlikda yugura oladi — shahardagi mashinadan tezroq! Ko‘k kit — eng katta va eng og‘ir hayvon: u 30 ta fildan og‘irroq. Fillar boshqa barcha quruqlik hayvonlaridan kuchliroq, lekin otlarchalik tez emas. Fil bolasi onasidan ancha kuchsiz, shuning uchun doim unga yaqin yuradi.'],
      ['Which is [more dangerous|dangerous], a shark or a mosquito? Most people say a shark, but the answer is the mosquito — it’s the [most dangerous|dangerous] animal for people! Sharks are much [safer|safe] than you think.',
       'Qaysi biri xavfliroq: akulami yoki chivin? Ko‘pchilik akula deydi, lekin javob — chivin: u odamlar uchun eng xavfli hayvon! Akulalar siz o‘ylagandan ancha xavfsizroq.'],
      ['Now buildings. The Burj Khalifa in Dubai is 828 metres high. The Tashkent TV Tower is 375 metres — [lower|low], but it’s still one of the [highest|high] towers in Central Asia. Is it [more expensive|expensive] to go up the TV Tower or the Burj Khalifa? The TV Tower is much [cheaper|cheap]! Is the view [the same as] in Dubai? No — you can see mountains, not the sea, and for many people that’s even [better].',
       'Endi binolar. Dubaydagi Burj Xalifa 828 metr baland. Toshkent teleminorasi 375 metr — pastroq, lekin baribir Markaziy Osiyodagi eng baland minoralardan biri. Qaysi biriga chiqish qimmatroq: teleminoragami yoki Burj Xalifaga? Teleminora ancha arzon! Manzara Dubaydagi bilan bir xilmi? Yo‘q — dengiz emas, tog‘lar ko‘rinadi, ko‘pchilik uchun bu hatto yaxshiroq.'],
      ['Some records are [more interesting|interesting] than others. The [widest|wide] river in the world is the Amazon. The [richest|rich] people in the world are [richer|rich] than some countries! But are they [luckier|lucky] or happier than [poorer|poor] people? Scientists say money is not [as … as|as … as] [important] as friends and family.',
       'Ba’zi rekordlar boshqalaridan qiziqroq. Dunyodagi eng keng daryo — Amazonka. Dunyodagi eng boy odamlar ba’zi mamlakatlardan ham boyroq! Lekin ular kambag‘alroq odamlardan omadliroq yoki baxtliroqmi? Olimlarning aytishicha, pul do‘stlar va oilachalik muhim emas.'],
      ['And people? The [most popular|popular] sport is football. The [most difficult|difficult] language to learn? Maybe Chinese — but for Uzbek speakers, Turkish is [easier|easy] [than] English, because Uzbek is similar to Turkish but [different from] English. The [healthiest|healthy] people live in Japan. And the [worst|the worst] record? Someone sat in a bath of cold beans for 100 days. Maybe the most [boring] record ever! Is your life [worse] than that? Probably not!',
       'Odamlar-chi? Eng ommabop sport — futbol. Eng qiyin til? Balki xitoy tili — lekin o‘zbek tilida so‘zlashuvchilar uchun turk tili ingliz tilidan osonroq, chunki o‘zbek tili turk tiliga o‘xshaydi, ingliz tilidan esa farq qiladi. Eng sog‘lom odamlar Yaponiyada yashaydi. Eng yomon rekord-chi? Kimdir 100 kun sovuq loviyali vannada o‘tirgan. Balki bu eng zerikarli rekorddir! Hayotingiz bundan yomonroqmi? Yo‘q bo‘lsa kerak!']
    ],
    q: [
      ['How fast can a cheetah run?', ['70 km/h', '110 km/h', '150 km/h'], 1],
      ['Which is the most dangerous animal for people?', ['the shark', 'the mosquito', 'the elephant'], 1],
      ['How high is the Tashkent TV Tower?', ['375 metres', '828 metres', '1,000 metres'], 0],
      ['Why is Turkish easier for Uzbek speakers?', ['It is shorter.', 'Uzbek is similar to Turkish.', 'It has no grammar.'], 1],
      ['Where do the healthiest people live?', ['in Japan', 'in Uzbekistan', 'in Dubai'], 0]
    ]
  }]
});

/* ---------------- 111: Shopping & Money ---------------- */
L({
  n: 111, kind: 'vocab', after: 24, lvl: 'A2', t: 'Shopping & Money', uz: 'Xarid va pul', topic: 'Shopping and money',
  vi: 'Pul va to‘lov, xarid fe’llari, do‘kondagi so‘zlar va do‘konda kerak bo‘ladigan iboralar. cheap / expensive 24-darsda.',
  vr: [{ h: 'borrow va lend; spend va save', x: '<p><b>borrow</b> — qarzga <b>olmoq</b>: Can I <b>borrow</b> your pen? <b>lend</b> — qarzga <b>bermoq</b>: Can you <b>lend</b> me 10,000 som?</p><p><b>spend</b> money <b>on</b> something — biror narsaga pul sarflamoq. <b>save</b> money <b>for</b> something — biror narsa uchun pul yig‘moq.</p><p><b>afford</b> — pulga kuchi yetmoq: I can’t <b>afford</b> it.</p>' }],
  V: [
    { g: 'money', t: 'Pul va to‘lov', w: [
      ['cash', '/kæʃ/', 'naqd pul', 'Can I pay in *cash*?', 'Naqd pulda to‘lasam bo‘ladimi?', 'dollar-banknote'],
      ['card', '/kɑːd/', 'karta (bank)', 'I always pay by *card*.', 'Doim karta bilan to‘layman.', 'credit-card'],
      ['coin', '/kɔɪn/', 'tanga', 'I found an old *coin* in the garden.', 'Bog‘dan eski tanga topdim.', 'coin'],
      ['note', '/nəʊt/', 'qog‘oz pul (kupyura)', 'Have you got a 100,000-som *note*?', 'Sizda 100 000 so‘mlik kupyura bormi?', 'dollar-banknote'],
      ['change', '/tʃeɪndʒ/', 'qaytim; mayda pul', 'Here’s your *change*.', 'Mana qaytimingiz.', 'coin back-arrow'],
      ['price', '/praɪs/', 'narx', 'What’s the *price* of this jacket?', 'Bu kurtkaning narxi qancha?', 'label'],
      ['receipt', '/rɪˈsiːt/', 'chek, kvitansiya', 'Keep the *receipt*. You may need it.', 'Chekni saqlab qo‘ying. Kerak bo‘lishi mumkin.', 'receipt'],
      ['discount', '/ˈdɪskaʊnt/', 'chegirma', 'Students get a 10% *discount*.', 'Talabalarga 10% chegirma beriladi.', 'label #–10%'],
      ['sale', '/seɪl/', 'chegirmali savdo, sotuv', 'There’s a big *sale* at the shopping centre.', 'Savdo markazida katta chegirmali savdo bor.', 'shopping-bags #SALE'],
      ['bargain', '/ˈbɑːɡɪn/', 'arzon xarid; savdolashmoq', 'Only 50,000 som? What a *bargain*!', 'Atigi 50 000 so‘mmi? Juda arzon-ku!', 'money-mouth-face']
    ] },
    { g: 'verbs', t: 'Xarid fe’llari', w: [
      ['sell', '/sel/', 'sotmoq', 'They *sell* fresh fruit at the market.', 'Bozorda yangi meva sotishadi.', 'convenience-store'],
      ['pay', '/peɪ/', 'to‘lamoq', 'Where do I *pay*?', 'Qayerda to‘layman?', 'credit-card'],
      ['spend', '/spend/', 'sarflamoq', 'I *spend* too much money on snacks.', 'Tamaddiga juda ko‘p pul sarflayman.', 'money-with-wings'],
      ['save', '/seɪv/', 'yig‘moq, tejamoq', 'I’m *saving* for a new laptop.', 'Yangi noutbuk uchun pul yig‘yapman.', 'money-bag'],
      ['afford', '/əˈfɔːd/', 'pulga kuchi yetmoq', 'I can’t *afford* this phone.', 'Bu telefonga pulim yetmaydi.', 'mobile-phone !'],
      ['borrow', '/ˈbɒrəʊ/', 'qarzga olmoq', 'Can I *borrow* 20,000 som?', '20 000 so‘m qarz olsam bo‘ladimi?', 'dollar-banknote left-arrow'],
      ['lend', '/lend/', 'qarzga bermoq', 'I’ll *lend* you my bike.', 'Senga velosipedimni berib turaman.', 'bicycle right-arrow'],
      ['take back', '/ˌteɪk ˈbæk/', '(do‘konga) qaytarib bermoq', 'These shoes are too small. I’ll *take* them *back*.', 'Bu poyabzal kichik. Do‘konga qaytaraman.', 'mans-shoe back-arrow']
    ] },
    { g: 'shop', t: 'Do‘konda', w: [
      ['queue', '/kjuː/', 'navbat', 'There was a long *queue* at the checkout.', 'Kassada uzun navbat bor edi.', 'busts-in-silhouette'],
      ['checkout', '/ˈtʃekaʊt/', 'kassa (supermarket)', 'Please pay at the *checkout*.', 'Iltimos, kassada to‘lang.', 'shopping-cart receipt'],
      ['cashier', '/kæˈʃɪə/', 'kassir', 'The *cashier* gave me the wrong change.', 'Kassir menga noto‘g‘ri qaytim berdi.', 'woman-office-worker'],
      ['trolley', '/ˈtrɒli/', 'aravacha (do‘kon)', 'We need a *trolley*, not a basket.', 'Bizga savat emas, aravacha kerak.', 'shopping-cart'],
      ['basket', '/ˈbɑːskɪt/', 'savat', 'I only need a *basket*.', 'Menga faqat savat kerak.', 'basket'],
      ['changing room', '/ˈtʃeɪndʒɪŋ ruːm/', 'kiyinish xonasi', 'You can try it on in the *changing room*.', 'Kiyinish xonasida kiyib ko‘rishingiz mumkin.', 'door mirror'],
      ['online shopping', '/ˌɒnlaɪn ˈʃɒpɪŋ/', 'onlayn xarid', '*Online shopping* is fast and easy.', 'Onlayn xarid tez va oson.', 'laptop shopping-cart'],
      ['delivery', '/dɪˈlɪvəri/', 'yetkazib berish', 'Is *delivery* free?', 'Yetkazib berish bepulmi?', 'delivery-truck'],
      ['second-hand', '/ˌsekənd ˈhænd/', 'ishlatilgan (eski)', 'I bought a *second-hand* bike.', 'Ishlatilgan velosiped sotib oldim.', 'bicycle counterclockwise-arrows-button'],
      ['good value', '/ˌɡʊd ˈvæljuː/', 'narxiga arziydigan', 'This lunch is *good value* for money.', 'Bu tushlik narxiga arziydi.', 'thumbs-up coin']
    ] },
    { g: 'say', t: 'Do‘kon iboralari', w: [
      ['How much is it?', '/ˌhaʊ ˈmʌtʃ ɪz ɪt/', 'Bu qancha turadi?', '“*How much is it?*” “It’s 80,000 som.”', '«Bu qancha turadi?» «80 000 so‘m.»', 'label ?'],
      ['Can I pay by card?', '/kən aɪ ˌpeɪ baɪ ˈkɑːd/', 'Karta bilan to‘lasam bo‘ladimi?', '“*Can I pay by card?*” “Yes, of course.”', '«Karta bilan to‘lasam bo‘ladimi?» «Ha, albatta.»', 'credit-card ?'],
      ['I’m just looking.', '/aɪm ˌdʒʌst ˈlʊkɪŋ/', 'Shunchaki ko‘ryapman.', '“Can I help you?” “No, thanks. *I’m just looking.*”', '«Yordam bera olamanmi?» «Yo‘q, rahmat. Shunchaki ko‘ryapman.»', 'eyes'],
      ['Do you have this in…?', '/duː juː ˈhæv ðɪs ɪn/', 'Bunisi … da bormi? (o‘lcham, rang)', '*Do you have this in* blue?', 'Bunisi ko‘k rangda bormi?', 't-shirt ?']
    ] }
  ],
  A: [{
    k: 'Hikoya', t: 'Kamila’s 1,000,000-Som Challenge', s: 'Tug‘ilgan kun puli: o‘n besh yoshli qiz uni qanday sarfladi?',
    p: [
      ['For her 15th birthday, Kamila got 1,000,000 som in [cash] from her grandparents — not on a bank [card], but in an envelope. “You can [spend] it, or you can [save] it,” said Grandpa. “But think before you [pay]!” Kamila wanted new trainers, a phone case and a present for her mum. Could she [afford] everything?',
       'O‘n besh yoshga to‘lganda Kamila bobosi va buvisidan 1 000 000 so‘m naqd pul oldi — bank kartasida emas, konvertda. «Uni sarflashing ham, yig‘ishing ham mumkin, — dedi bobosi. — Lekin to‘lashdan oldin o‘yla!» Kamila yangi krossovka, telefon g‘ilofi va oyisiga sovg‘a olmoqchi edi. Hammasiga puli yetarmidi?'],
      ['First she went to a big sports shop. There was a [sale]: 30% [discount] on all trainers! A shop assistant came up. “Can I help you?” “No, thanks. [I’m just looking.]” Then she found a nice pair. “[Do you have this in…?|Do you have this in…?] size 38?” She tried them on in the [changing room]. Perfect! “[How much is it?]” “The [price] is 420,000, but with the discount it’s 294,000.”',
       'Avval katta sport do‘koniga bordi. U yerda chegirmali savdo bor ekan: barcha krossovkalarga 30% chegirma! Sotuvchi yoniga keldi. «Yordam bera olamanmi?» «Yo‘q, rahmat. Shunchaki ko‘ryapman.» Keyin u chiroyli bir juftini topdi. «Bunisi 38-o‘lchamda bormi?» Kiyinish xonasida kiyib ko‘rdi. Ayni muddao! «Bu qancha turadi?» «Narxi 420 000, lekin chegirma bilan 294 000.»'],
      ['There was a long [queue] at the [checkout]. “[Can I pay by card?|Can I pay by card?]” asked the man in front of her. Kamila paid in cash with three 100,000-som [notes|note]. The [cashier] gave her 6,000 som [change] — some [coins|coin] and a small note — and a [receipt]. “Keep it,” she said. “If they don’t fit, you can [take back|take back] the shoes within 14 days.”',
       'Kassada uzun navbat bor edi. Oldindagi kishi: «Karta bilan to‘lasam bo‘ladimi?» deb so‘radi. Kamila uchta 100 000 so‘mlik kupyura bilan naqd to‘ladi. Kassir unga 6000 so‘m qaytim — bir nechta tanga va kichik kupyura — hamda chek berdi. «Saqlab qo‘ying, — dedi u. — Poyabzal to‘g‘ri kelmasa, 14 kun ichida qaytarishingiz mumkin.»'],
      ['Next, the phone case. In the shop it cost 120,000. But [online shopping] was cheaper: 60,000 with free [delivery]. A real [bargain]! At Chorsu market, she found a beautiful [second-hand] silk scarf for Mum. The woman wanted to [sell] it for 150,000, but Kamila bargained, and she paid 100,000. Good [value|good value]!',
       'Keyin telefon g‘ilofi. Do‘konda u 120 000 turardi. Lekin onlayn xarid arzonroq ekan: bepul yetkazib berish bilan 60 000. Haqiqiy arzon xarid! Chorsu bozorida oyisi uchun chiroyli, ishlatilgan ipak ro‘mol topdi. Ayol uni 150 000 ga sotmoqchi edi, lekin Kamila savdolashib, 100 000 to‘ladi. Narxiga arziydi!'],
      ['In the supermarket, she took a [basket], not a [trolley] — she only needed flowers and a cake. At home, her brother asked, “Can you [lend] me 50,000? I want to [borrow] it till Friday.” Kamila laughed and gave him 20,000. In the end, she had 400,000 som left. She put it in her money box — she’s saving for a laptop. Grandpa was proud!',
       'Supermarketda u aravacha emas, savat oldi — unga faqat gul va tort kerak edi. Uyda ukasi so‘radi: «Menga 50 000 qarz bera olasanmi? Jumagacha olib turmoqchiman.» Kamila kulib, unga 20 000 berdi. Oxirida unda 400 000 so‘m qoldi. U pulni cho‘chqachaga soldi — noutbuk uchun yig‘yapti. Bobosi faxrlandi!']
    ],
    q: [
      ['How much money did Kamila get?', ['100,000 som', '1,000,000 som', '420,000 som'], 1],
      ['How much were the trainers with the discount?', ['294,000', '420,000', '300,000'], 0],
      ['Why did she buy the phone case online?', ['It was cheaper.', 'The shop was closed.', 'It was a different colour.'], 0],
      ['What did she buy for her mum at Chorsu?', ['a cake', 'a silk scarf', 'flowers'], 1],
      ['What is Kamila saving for?', ['a phone', 'a laptop', 'a bike'], 1]
    ]
  }]
});

/* ---------------- 25: Adverbs of Manner ---------------- */
VOC(25, {
  vi: 'Ish-harakat qanday bajarilishini bildiruvchi ravishlar: -ly bilan yasaladiganlar va noto‘g‘ri shakllar (well, hard, fast).',
  vr: [{ h: 'Sifat → ravish', x: '<p>Ko‘pincha sifatga <b>-ly</b> qo‘shiladi: quick → quick<b>ly</b>, careful → careful<b>ly</b>.</p><p>Oxiri <b>y</b>: <b>-ily</b>: easy → eas<b>ily</b>, happy → happ<b>ily</b>. Oxiri <b>-le</b>: e → y: gentle → gent<b>ly</b>.</p><p>Noto‘g‘ri: good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>. Diqqat: <b>hardly</b> = deyarli … emas!</p><p>Sifat <b>ot</b>ni, ravish <b>fe’l</b>ni tasvirlaydi: a <b>slow</b> driver — he drives <b>slowly</b>.</p>' }],
  V: [
    { g: 'ly', t: '-ly ravishlar', w: [
      ['quickly', '/ˈkwɪkli/', 'tez, tezda', 'She finished her test *quickly*.', 'U testni tez tugatdi.', 'rocket'],
      ['slowly', '/ˈsləʊli/', 'sekin', 'Please speak more *slowly*.', 'Iltimos, sekinroq gapiring.', 'snail'],
      ['carefully', '/ˈkeəfəli/', 'ehtiyotkorlik bilan', 'Drive *carefully*!', 'Ehtiyotkorlik bilan haydang!', 'warning automobile'],
      ['carelessly', '/ˈkeələsli/', 'beparvolik bilan', 'He writes *carelessly* and makes mistakes.', 'U beparvo yozadi va xato qiladi.', 'cross-mark pencil'],
      ['quietly', '/ˈkwaɪətli/', 'jimgina, past ovozda', 'Talk *quietly* in the library.', 'Kutubxonada past ovozda gaplashing.', 'muted-speaker'],
      ['loudly', '/ˈlaʊdli/', 'baland ovozda', 'Our neighbours play music *loudly*.', 'Qo‘shnilarimiz musiqani baland qo‘yishadi.', 'loudspeaker'],
      ['easily', '/ˈiːzəli/', 'osonlik bilan', 'She won the race *easily*.', 'U poygada osonlik bilan g‘alaba qozondi.', 'thumbs-up'],
      ['happily', '/ˈhæpɪli/', 'xursand holda', 'The children played *happily*.', 'Bolalar xursand holda o‘ynashdi.', 'grinning-face-with-smiling-eyes'],
      ['beautifully', '/ˈbjuːtɪfli/', 'chiroyli, go‘zal', 'She sings *beautifully*.', 'U chiroyli kuylaydi.', 'microphone sparkles'],
      ['perfectly', '/ˈpɜːfɪktli/', 'mukammal, a’lo darajada', 'He speaks English *perfectly*.', 'U ingliz tilida mukammal gapiradi.', 'hundred-points'],
      ['politely', '/pəˈlaɪtli/', 'xushmuomalalik bilan', 'Always answer *politely*.', 'Doim xushmuomalalik bilan javob bering.', 'person-bowing'],
      ['angrily', '/ˈæŋɡrəli/', 'jahl bilan', '“Stop it!” she shouted *angrily*.', '«Bas qil!» deb jahl bilan baqirdi u.', 'angry-face'],
      ['suddenly', '/ˈsʌdnli/', 'to‘satdan', '*Suddenly*, the lights went out.', 'To‘satdan chiroqlar o‘chib qoldi.', 'high-voltage'],
      ['clearly', '/ˈklɪəli/', 'aniq, ravshan', 'Please write *clearly*.', 'Iltimos, aniq yozing.', 'memo'],
      ['nervously', '/ˈnɜːvəsli/', 'hayajon bilan, asabiy', 'He waited *nervously* for his results.', 'U natijalarini hayajon bilan kutdi.', 'anxious-face-with-sweat'],
      ['calmly', '/ˈkɑːmli/', 'xotirjam', 'The pilot spoke *calmly*.', 'Uchuvchi xotirjam gapirdi.', 'person-in-lotus-position'],
      ['safely', '/ˈseɪfli/', 'xavfsiz, eson-omon', 'The plane landed *safely*.', 'Samolyot eson-omon qo‘ndi.', 'airplane-arrival shield']
    ] },
    { g: 'irr', t: 'Noto‘g‘ri ravishlar', w: [
      ['well', '/wel/', 'yaxshi (good)', 'You play chess very *well*.', 'Siz shaxmatni juda yaxshi o‘ynaysiz.', 'thumbs-up chess-pawn'],
      ['badly', '/ˈbædli/', 'yomon', 'I slept *badly* last night.', 'Kecha yomon uxladim.', 'thumbs-down'],
      ['hard', '/hɑːd/', 'qattiq, tirishib', 'She works *hard* every day.', 'U har kuni tirishib ishlaydi.', 'flexed-biceps'],
      ['fast', '/fɑːst/', 'tez (ravish)', 'Don’t drive so *fast*!', 'Bunchalik tez haydamang!', 'racing-car']
    ] }
  ],
  A: [{
    k: 'Ilhomlantiruvchi hikoya', t: 'Grandpa Runs a Marathon', s: '70 yoshli bobo birinchi marafonida',
    p: [
      ['My grandpa Bahodir is 70 years old. Last year he said [suddenly] at dinner, “I’m going to run the Tashkent Marathon.” We all laughed — [loudly]. Grandpa didn’t laugh. He looked at us [calmly] and said, “I’m serious.”',
       'Bobom Bahodir 70 yoshda. O‘tgan yili kechki ovqatda u to‘satdan: «Toshkent marafonida yuguraman», dedi. Hammamiz baland ovozda kuldik. Bobom kulmadi. U bizga xotirjam qarab: «Men jiddiy gapiryapman», dedi.'],
      ['He trained [hard] for six months. Every morning at 6 a.m. he went [quietly] out of the house so he didn’t wake us. At first he ran very [slowly] and very [badly] — he could only run one kilometre. But he never stopped. He ate [carefully], slept [well] and practised every day.',
       'U olti oy davomida tirishib mashq qildi. Har ertalab soat 6 da bizni uyg‘otmaslik uchun uydan jimgina chiqib ketardi. Avvaliga u juda sekin va juda yomon yugurardi — atigi bir kilometr yugura olardi. Lekin u hech qachon to‘xtamadi. U ehtiyotkorlik bilan ovqatlandi, yaxshi uxladi va har kuni mashq qildi.'],
      ['On the day of the marathon, Grandpa waited [nervously] at the start line with 5,000 runners. Young runners started very [fast|fast], but Grandpa started slowly. “It’s not a 100-metre race,” he said. A young man ran past him [carelessly] and pushed him. “Sorry!” he said [politely].',
       'Marafon kuni bobom 5000 nafar yuguruvchi bilan start chizig‘ida hayajon bilan kutdi. Yosh yuguruvchilar juda tez boshlashdi, bobom esa sekin boshladi. «Bu 100 metrlik yugurish emas», dedi u. Bir yigit beparvolik bilan yonidan yugurib o‘tib, uni turtib yubordi. «Kechirasiz!» dedi u xushmuomalalik bilan.'],
      ['After 30 kilometres, Grandpa’s legs hurt. A man shouted [angrily] at the volunteers: “Where’s the water?!” But Grandpa smiled. He drank his water [quickly] and continued. People on the street shouted his name, and a girl with a guitar sang [beautifully] for the runners.',
       '30 kilometrdan keyin bobomning oyoqlari og‘riy boshladi. Bir kishi ko‘ngillilarga jahl bilan baqirdi: «Suv qani?!» Lekin bobom jilmaydi. U suvini tez ichib, davom etdi. Ko‘chadagi odamlar uning ismini baqirishdi, gitarali bir qiz yuguruvchilar uchun chiroyli qo‘shiq kuyladi.'],
      ['After 5 hours and 40 minutes, Grandpa finished — [safely] and [happily]! He didn’t win, of course, but he finished the race [perfectly]. A TV reporter asked him, “What’s your secret?” He answered [clearly]: “Start slowly, never stop, and you can do anything [easily]!”',
       '5 soat 40 daqiqadan keyin bobom marraga yetdi — eson-omon va xursand! U, albatta, g‘olib bo‘lmadi, lekin poygani a’lo darajada tugatdi. Telemuxbir undan: «Siringiz nima?» deb so‘radi. U aniq javob berdi: «Sekin boshlang, hech qachon to‘xtamang — shunda hamma narsani osonlik bilan uddalaysiz!»']
    ],
    q: [
      ['How old is Grandpa Bahodir?', ['60', '70', '80'], 1],
      ['How long did he train?', ['six weeks', 'six months', 'one year'], 1],
      ['How did Grandpa start the race?', ['very fast', 'slowly', 'angrily'], 1],
      ['How long did Grandpa take to finish?', ['3 hours 40 minutes', '5 hours 40 minutes', '6 hours'], 1],
      ['What is Grandpa’s secret?', ['Run fast at the start.', 'Start slowly and never stop.', 'Drink a lot of water.'], 1]
    ]
  }]
});

/* ---------------- 116: Sports & Exercise ---------------- */
L({
  n: 116, kind: 'vocab', after: 25, lvl: 'A2', t: 'Sports & Exercise', uz: 'Sport va jismoniy mashqlar', topic: 'Sports and exercise',
  vi: 'Sport turlari, sportdagi odamlar va joylar, musobaqa so‘zlari, mashq qilish iboralari va sport fe’llari.',
  vr: [{ h: 'play, do yoki go — sport bilan', x: '<p><b>play</b> + to‘p bilan o‘ynaladigan sport: <b>play</b> football, basketball, tennis.</p><p><b>do</b> + kurash va yakkalik sportlari: <b>do</b> judo, boxing, gymnastics, athletics.</p><p><b>go</b> + <b>-ing</b>: <b>go</b> swimming, <b>go</b> cycling.</p><p>Natija: <b>win</b> a match (o‘yinda yutmoq), <b>beat</b> a team (jamoani yengmoq). Durang: The score was 2–2. It was a <b>draw</b>.</p>' }],
  V: [
    { g: 'sport', t: 'Sport turlari', w: [
      ['football', '/ˈfʊtbɔːl/', 'futbol', '*Football* is the most popular sport in Uzbekistan.', 'Futbol O‘zbekistondagi eng ommabop sport.', 'soccer-ball'],
      ['basketball', '/ˈbɑːskɪtbɔːl/', 'basketbol', 'He’s tall, so he plays *basketball*.', 'U baland bo‘yli, shuning uchun basketbol o‘ynaydi.', 'basketball'],
      ['volleyball', '/ˈvɒlibɔːl/', 'voleybol', 'We play *volleyball* on the beach.', 'Plyajda voleybol o‘ynaymiz.', 'volleyball'],
      ['tennis', '/ˈtenɪs/', 'tennis', 'Do you play *tennis*?', 'Tennis o‘ynaysizmi?', 'tennis'],
      ['table tennis', '/ˈteɪbl ˌtenɪs/', 'stol tennisi', 'There’s a *table tennis* table in the school gym.', 'Maktab sport zalida stol tennisi stoli bor.', 'ping-pong'],
      ['boxing', '/ˈbɒksɪŋ/', 'boks', 'Uzbek boxers are famous for *boxing*.', 'O‘zbek bokschilari boks bo‘yicha mashhur.', 'boxing-glove'],
      ['wrestling', '/ˈreslɪŋ/', 'kurash', 'Kurash is a kind of Uzbek *wrestling*.', 'Kurash — o‘zbek milliy kurashining bir turi.', 'person-wrestling'],
      ['judo', '/ˈdʒuːdəʊ/', 'dzyudo', 'My brother does *judo* three times a week.', 'Akam haftada uch marta dzyudo bilan shug‘ullanadi.', 'martial-arts-uniform'],
      ['gymnastics', '/dʒɪmˈnæstɪks/', 'gimnastika', 'She started *gymnastics* at the age of five.', 'U besh yoshida gimnastika bilan shug‘ullana boshlagan.', 'person-cartwheeling'],
      ['athletics', '/æθˈletɪks/', 'yengil atletika', 'Running and jumping are part of *athletics*.', 'Yugurish va sakrash yengil atletikaga kiradi.', 'person-running'],
      ['weightlifting', '/ˈweɪtlɪftɪŋ/', 'og‘ir atletika', 'You need to be very strong for *weightlifting*.', 'Og‘ir atletika uchun juda kuchli bo‘lish kerak.', 'person-lifting-weights']
    ] },
    { g: 'people', t: 'Odamlar va joylar', w: [
      ['player', '/ˈpleɪə/', 'o‘yinchi', 'There are eleven *players* in a football team.', 'Futbol jamoasida o‘n bitta o‘yinchi bor.', 'soccer-ball person-running'],
      ['team', '/tiːm/', 'jamoa', 'Which *team* do you support?', 'Qaysi jamoaga muxlislik qilasiz?', 'busts-in-silhouette'],
      ['coach', '/kəʊtʃ/', 'murabbiy', 'Our *coach* is very strict.', 'Murabbiyimiz juda talabchan.', 'man-gesturing-ok'],
      ['referee', '/ˌrefəˈriː/', 'hakam', 'The *referee* gave him a yellow card.', 'Hakam unga sariq kartochka ko‘rsatdi.', 'man-gesturing-no'],
      ['champion', '/ˈtʃæmpiən/', 'chempion', 'She’s the world *champion*.', 'U jahon chempioni.', 'trophy'],
      ['court', '/kɔːt/', 'maydon (tennis, basketbol)', 'The tennis *court* is behind the school.', 'Tennis maydoni maktab orqasida.', 'tennis'],
      ['pitch', '/pɪtʃ/', 'maydon (futbol)', 'The players are coming onto the *pitch*.', 'O‘yinchilar maydonga chiqyapti.', 'goal-net'],
      ['track', '/træk/', 'yugurish yo‘lagi', 'We run around the *track* four times.', 'Yo‘lakni to‘rt marta aylanib yuguramiz.', 'running-shoe']
    ] },
    { g: 'match', t: 'Musobaqa', w: [
      ['match', '/mætʃ/', 'o‘yin, uchrashuv', 'Did you watch the *match* last night?', 'Kecha o‘yinni ko‘rdingizmi?', 'stadium'],
      ['score', '/skɔː/', 'hisob; gol urmoq', 'What’s the *score*? — It’s 2–1.', 'Hisob qanday? — 2:1.', '#2–1'],
      ['goal', '/ɡəʊl/', 'gol; darvoza', 'He scored a fantastic *goal*!', 'U ajoyib gol urdi!', 'goal-net'],
      ['draw', '/drɔː/', 'durang', 'The match ended in a *draw*.', 'O‘yin durang bilan tugadi.', '#1–1'],
      ['competition', '/ˌkɒmpəˈtɪʃn/', 'musobaqa', 'She won a swimming *competition*.', 'U suzish musobaqasida g‘olib bo‘ldi.', 'sports-medal'],
      ['tournament', '/ˈtʊənəmənt/', 'turnir', 'Our school is hosting a chess *tournament*.', 'Maktabimiz shaxmat turnirini o‘tkazyapti.', 'chess-pawn trophy'],
      ['medal', '/ˈmedl/', 'medal', 'He won a gold *medal*.', 'U oltin medal qo‘lga kiritdi.', '1st-place-medal'],
      ['the Olympic Games', '/ði əˌlɪmpɪk ˈɡeɪmz/', 'Olimpiya o‘yinlari', '*The Olympic Games* take place every four years.', 'Olimpiya o‘yinlari har to‘rt yilda o‘tkaziladi.', 'sports-medal glowing-star']
    ] },
    { g: 'fit', t: 'Mashq qilish', w: [
      ['exercise', '/ˈeksəsaɪz/', 'jismoniy mashq; mashq qilmoq', 'Doctors say we need 30 minutes of *exercise* a day.', 'Shifokorlar kuniga 30 daqiqa jismoniy mashq kerak deyishadi.', 'person-cartwheeling'],
      ['warm up', '/ˌwɔːm ˈʌp/', 'qizishmoq (mashqdan oldin)', 'Always *warm up* before you run.', 'Yugurishdan oldin doim qizishib oling.', 'fire person-running'],
      ['stretch', '/stretʃ/', 'cho‘zilish mashqi qilmoq', '*Stretch* your legs after training.', 'Mashg‘ulotdan keyin oyoqlaringizni cho‘zing.', 'person-in-lotus-position'],
      ['train', '/treɪn/', 'mashq qilmoq, shug‘ullanmoq', 'The team *trains* every evening.', 'Jamoa har kech mashq qiladi.', 'stopwatch person-running'],
      ['keep fit', '/ˌkiːp ˈfɪt/', 'sog‘lom qomatni saqlamoq', 'I swim to *keep fit*.', 'Sog‘lom qomatni saqlash uchun suzaman.', 'flexed-biceps'],
      ['work out', '/ˌwɜːk ˈaʊt/', 'sport zalida shug‘ullanmoq', 'My dad *works out* at the gym.', 'Dadam sport zalida shug‘ullanadi.', 'person-lifting-weights']
    ] },
    { g: 'verbs', t: 'Sport fe’llari', w: [
      ['kick', '/kɪk/', 'tepmoq', '*Kick* the ball to me!', 'To‘pni menga tep!', 'soccer-ball'],
      ['throw', '/θrəʊ/', 'otmoq, tashlamoq', '*Throw* the ball into the basket.', 'To‘pni savatga oting.', 'basketball'],
      ['hit', '/hɪt/', 'urmoq', 'He *hit* the ball very hard.', 'U to‘pni juda qattiq urdi.', 'tennis'],
      ['jump', '/dʒʌmp/', 'sakramoq', 'How high can you *jump*?', 'Qanchalik baland sakray olasiz?', 'person-cartwheeling up-arrow'],
      ['beat', '/biːt/', 'yengmoq', 'Uzbekistan *beat* Iran 2–0.', 'O‘zbekiston Eronni 2:0 hisobida yengdi.', 'trophy']
    ] }
  ],
  A: [{
    k: 'Maktab yangiliklari', t: 'Sports Week at School 7: Who Won What?', s: 'Bir haftalik sport bayrami: natijalar va qahramonlar',
    p: [
      ['Last week was Sports Week at our school, and it was amazing! Every class had a [team], and there was a [competition] every day. Our PE teacher was the [coach] for everyone, and two Year 11 students were the [referees|referee].',
       'O‘tgan hafta maktabimizda Sport haftaligi bo‘ldi va u ajoyib o‘tdi! Har bir sinfning jamoasi bor edi, har kuni musobaqa o‘tkazildi. Jismoniy tarbiya ustozimiz hammaga murabbiy, ikki nafar 11-sinf o‘quvchisi esa hakam bo‘ldi.'],
      ['Every morning started the same way: we [warmed up|warm up] for ten minutes and [stretched|stretch]. “If you want to [keep fit|keep fit], you need [exercise] every day — not only in Sports Week!” the coach said. Some teachers even came to [work out|work out] with us.',
       'Har tong bir xil boshlandi: o‘n daqiqa qizishib, cho‘zilish mashqlarini qildik. «Sog‘lom qomatni saqlamoqchi bo‘lsangiz, har kuni jismoniy mashq kerak — faqat Sport haftaligida emas!» dedi murabbiy. Ba’zi ustozlar ham biz bilan shug‘ullangani kelishdi.'],
      ['Monday was [football]. The [match] between 9A and 9B was exciting. The [score] was 2–2 after 90 minutes, so it was a [draw]. Then Sardor [kicked|kick] the ball from the middle of the [pitch] — what a [goal]! The fans went crazy. On Tuesday, the girls played [volleyball] and [basketball] on the outdoor [court]. Malika can [throw] the ball and [jump] better than anyone!',
       'Dushanba kuni futbol bo‘ldi. 9A va 9B o‘rtasidagi o‘yin qiziqarli o‘tdi. 90 daqiqadan keyin hisob 2:2 edi, ya’ni durang. Keyin Sardor to‘pni maydon o‘rtasidan tepdi — qanday gol! Muxlislar telbalarcha quvonishdi. Seshanba kuni qizlar ochiq maydonda voleybol va basketbol o‘ynashdi. Malika to‘pni hammadan yaxshi otadi va sakraydi!'],
      ['On Wednesday, we had a [table tennis] [tournament] and [tennis] lessons. I [hit|hit] the ball into the next street — twice! Thursday was [athletics] day on the [track], and on Friday the gym was full for [boxing], [judo], [wrestling], [gymnastics] and [weightlifting] shows. Every [player] got a certificate.',
       'Chorshanba kuni stol tennisi turniri va tennis darslari bo‘ldi. Men to‘pni ikki marta qo‘shni ko‘chaga urib yubordim! Payshanba kuni yugurish yo‘lagida yengil atletika kuni o‘tdi, juma kuni esa sport zali boks, dzyudo, kurash, gimnastika va og‘ir atletika chiqishlari uchun odamga to‘la bo‘ldi. Har bir o‘yinchi sertifikat oldi.'],
      ['The special guest was a former student — a [champion] in boxing. She showed us the gold [medal] she won at the Asian Games. “My dream is [the Olympic Games],” she said. “I [train|train] six hours a day.” In the final, 11A [beat] the teachers 3–1 in football. The teachers want a rematch next year!',
       'Maxsus mehmon maktabimizning sobiq o‘quvchisi — boks bo‘yicha chempion bo‘ldi. U Osiyo o‘yinlarida qo‘lga kiritgan oltin medalini ko‘rsatdi. «Mening orzuim — Olimpiya o‘yinlari, — dedi u. — Kuniga olti soat mashq qilaman.» Finalda 11A futbolda ustozlarni 3:1 hisobida yengdi. Ustozlar kelasi yil qasos o‘yinini xohlashyapti!']
    ],
    q: [
      ['Who were the referees?', ['the teachers', 'two Year 11 students', 'the coach'], 1],
      ['What was the score after 90 minutes on Monday?', ['2–2', '3–1', '1–0'], 0],
      ['Who throws and jumps better than anyone?', ['Sardor', 'Malika', 'the writer'], 1],
      ['What did the special guest show the students?', ['a trophy', 'a gold medal', 'a video'], 1],
      ['Who won the final football match?', ['the teachers', '9A', '11A'], 2]
    ]
  }]
});

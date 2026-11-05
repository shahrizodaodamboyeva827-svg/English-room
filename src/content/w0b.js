/* =====================================================================
   A0 — 4–6-darslar uchun yangi so‘zlar va maqolalar
   ===================================================================== */

/* ---------------- 4: Pronouns & to be ---------------- */
VOC(4, {
  vi: 'Kishilik olmoshlari, to be shakllari va to be bilan aytiladigan holatlar: och, charchagan, band, tayyor… Mamlakat va millatlar alohida «Countries & Nationalities» darsida.',
  V: [
    { g: 'pron', t: 'Kishilik olmoshlari', w: [
      ['I', '/aɪ/', 'men', '*I* am a student.', 'Men o‘quvchiman.', 'person-raising-hand'],
      ['you', '/juː/', 'sen, siz, sizlar', 'Are *you* from Tashkent?', 'Toshkentdanmisiz?', 'index-pointing-at-the-viewer'],
      ['he', '/hiː/', 'u (erkak)', 'This is Tom. *He* is my friend.', 'Bu Tom. U mening do‘stim.', 'man'],
      ['she', '/ʃiː/', 'u (ayol)', 'This is Lola. *She* is ten.', 'Bu Lola. U o‘n yoshda.', 'woman'],
      ['it', '/ɪt/', 'u (narsa, hayvon)', 'My phone is new. *It* is black.', 'Telefonim yangi. U qora.', 'mobile-phone cat'],
      ['we', '/wiː/', 'biz', '*We* are classmates.', 'Biz sinfdoshmiz.', 'people-hugging'],
      ['they', '/ðeɪ/', 'ular', '*They* are from Korea.', 'Ular Koreyadan.', 'busts-in-silhouette']
    ] },
    { g: 'be', t: 'To be: am, is, are', w: [
      ['am', '/æm/', '…man (I bilan)', 'I *am* happy.', 'Men xursandman.', '#I_+_am'],
      ['is', '/ɪz/', '… (he, she, it bilan)', 'She *is* a doctor.', 'U shifokor.', '#she_+_is'],
      ['are', '/ɑː/', '… (we, you, they bilan)', 'We *are* at school.', 'Biz maktabdamiz.', '#we_+_are']
    ] },
    { g: 'state', t: 'To be + holat: och, charchagan, band…', w: [
      ['hungry', '/ˈhʌŋɡri/', 'och (qorni)', 'I’m *hungry*. Let’s eat!', 'Qornim och. Keling, ovqatlanamiz!', 'fork-and-knife-with-plate'],
      ['thirsty', '/ˈθɜːsti/', 'chanqagan', 'I’m *thirsty*. Can I have some water?', 'Chanqadim. Suv olsam bo‘ladimi?', 'cup-with-straw'],
      ['tired', '/ˈtaɪəd/', 'charchagan', 'She is *tired* after school.', 'U maktabdan keyin charchagan.', 'person-in-bed zzz'],
      ['hot', '/hɒt/', 'issiq (issiqlagan)', 'I’m *hot*. Open the window, please.', 'Issiqlab ketdim. Derazani oching, iltimos.', 'sun thermometer'],
      ['cold', '/kəʊld/', 'sovuq (sovqotgan)', 'Are you *cold*? Take my jacket.', 'Sovqotyapsizmi? Kurtkamni oling.', 'snowflake thermometer'],
      ['happy', '/ˈhæpi/', 'xursand', 'We are *happy* today.', 'Bugun xursandmiz.', 'smiling-face-with-smiling-eyes'],
      ['sad', '/sæd/', 'xafa, g‘amgin', 'Why are you *sad*?', 'Nega xafasiz?', 'slightly-frowning-face'],
      ['busy', '/ˈbɪzi/', 'band', 'Dad is *busy* now.', 'Dadam hozir band.', 'man-technologist hourglass-not-done'],
      ['free', '/friː/', 'bo‘sh (vaqti)', 'Are you *free* on Sunday?', 'Yakshanba kuni bo‘shmisiz?', 'couch-and-lamp'],
      ['late', '/leɪt/', 'kech, kechikkan', 'Sorry, I’m *late*!', 'Uzr, kechikdim!', 'person-running alarm-clock'],
      ['ready', '/ˈredi/', 'tayyor', 'Are you *ready*? Let’s go!', 'Tayyormisiz? Ketdik!', 'backpack check-mark-button'],
      ['ill', '/ɪl/', 'kasal', 'Aziz is *ill* today.', 'Aziz bugun kasal.', 'face-with-thermometer'],
      ['right', '/raɪt/', 'to‘g‘ri, haq', 'You are *right*!', 'Siz haqsiz!', 'check-mark-button'],
      ['wrong', '/rɒŋ/', 'noto‘g‘ri', 'Sorry, this answer is *wrong*.', 'Kechirasiz, bu javob noto‘g‘ri.', 'cross-mark']
    ] },
    { g: 'place', t: 'Qayerda? at + joy', w: [
      ['at home', '/ət həʊm/', 'uyda', 'Mum is *at home*.', 'Oyim uyda.', 'house-with-garden'],
      ['at school', '/ət skuːl/', 'maktabda', 'The children are *at school*.', 'Bolalar maktabda.', 'school'],
      ['at work', '/ət wɜːk/', 'ishda', 'Dad is *at work* now.', 'Dadam hozir ishda.', 'office-building briefcase']
    ] }
  ],
  A: [{
    k: 'Foto hikoya', t: 'Summer Camp Photo', s: 'Dilnoza yozgi lagerdagi do‘stlari haqida gapiradi',
    p: [
      ['Look at this photo! [I] [am] Dilnoza. [I]’m from Bukhara. In the photo, [we] [are] at a summer camp in the mountains. [It] [is] a beautiful place.',
       'Bu suratga qarang! Men Dilnozaman. Buxorodanman. Suratda biz tog‘dagi yozgi lagerdamiz. Bu chiroyli joy.'],
      ['The tall boy is Tom. [He] is from London. He is always [hungry]! The girl next to him is Jiwoo. [She] is from Seoul. She is [happy] here, but today she is [tired]. [They] are my new friends.',
       'Baland bo‘yli bola — Tom. U Londondan. Uning qorni doim och! Uning yonidagi qiz — Jivu. U Seuldan. U bu yerda xursand, lekin bugun charchagan. Ular — mening yangi do‘stlarim.'],
      ['It’s twelve o’clock and it’s [hot]. Tom says, “I’m [thirsty]! Can I have some water?” In the evening it’s [cold] in the mountains, so we sit near the fire.',
       'Soat o‘n ikki va issiq. Tom aytadi: «Chanqadim! Suv olsam bo‘ladimi?» Kechqurun tog‘da sovuq bo‘ladi, shuning uchun gulxan yonida o‘tiramiz.'],
      ['Our leader is Mr Sanjar. He is always [busy]. “Are [you] [ready]?” he asks every morning. “Yes, we are!” Jiwoo is never [late]. Tom is often late!',
       'Rahbarimiz — Sanjar aka. U doim band. «Tayyormisizlar?» — deb so‘raydi u har ertalab. «Ha, tayyormiz!» Jivu hech qachon kechikmaydi. Tom esa tez-tez kechikadi!'],
      ['On Sunday, Jiwoo is [ill]. She is [sad] because she can’t swim. “Are you OK?” I ask. “I’m OK. Are you [free] after lunch? Let’s play cards.”',
       'Yakshanba kuni Jivu kasal. U suza olmagani uchun xafa. «Yaxshimisan?» — deb so‘rayman. «Yaxshiman. Tushlikdan keyin bo‘shmisan? Keling, karta o‘ynaymiz.»'],
      ['Quiz time! Mr Sanjar asks, “Is London in France?” Tom says, “No, it isn’t. That’s [wrong]!” “You’re [right]!” says Mr Sanjar.',
       'Viktorina vaqti! Sanjar aka so‘raydi: «London Fransiyadami?» Tom aytadi: «Yo‘q. Bu noto‘g‘ri!» «To‘g‘ri aytding!» — deydi Sanjar aka.'],
      ['Now I’m [at home] again. Tom is [at school] in London, and Jiwoo’s mum is [at work] in Seoul. We are far away, but we [are] friends forever!',
       'Hozir yana uydaman. Tom Londonda maktabda, Jivuning oyisi esa Seulda ishda. Biz bir-birimizdan uzoqdamiz, lekin abadiy do‘stmiz!']
    ],
    q: [
      ['Where is Dilnoza from?', ['London', 'Bukhara', 'Seoul'], 1],
      ['Who is always hungry?', ['Tom', 'Jiwoo', 'Mr Sanjar'], 0],
      ['Why is Jiwoo sad on Sunday?', ['She is late.', 'It is cold.', 'She is ill and she can’t swim.'], 2],
      ['Is London in France?', ['Yes, it is.', 'No, it isn’t.'], 1],
      ['Where is Jiwoo’s mum now?', ['at work', 'at home', 'at school'], 0]
    ]
  }]
});

/* ---------------- 5: «It»: time & weather ---------------- */
VOC(5, {
  vi: 'Vaqt, kun qismlari va ob-havo so‘zlari. Hafta kunlari, oylar va fasllar alohida «Days, Months & Seasons» darsida.',
  V: [
    { g: 'time', t: 'Vaqt', w: [
      ['time', '/taɪm/', 'vaqt', 'What *time* is it?', 'Soat necha?', 'alarm-clock'],
      ['o’clock', '/əˈklɒk/', 'soat (aniq)', 'It’s five *o’clock*.', 'Soat besh.', 'five-oclock'],
      ['half past', '/hɑːf pɑːst/', '… yarim', 'It’s *half past* three.', 'Soat uch yarim.', 'three-thirty'],
      ['quarter past', '/ˈkwɔːtə pɑːst/', '…dan chorak o‘tdi', 'It’s *quarter past* nine.', 'Soat to‘qqizdan chorak o‘tdi.', 'mantelpiece-clock #9:15'],
      ['quarter to', '/ˈkwɔːtə tuː/', '…ga chorak kam', 'It’s *quarter to* six.', 'Oltiga chorak kam.', 'mantelpiece-clock #5:45'],
      ['minute', '/ˈmɪnɪt/', 'daqiqa', 'Wait a *minute*, please.', 'Bir daqiqa kuting, iltimos.', 'stopwatch'],
      ['hour', '/ˈaʊə/', 'soat (60 daqiqa)', 'The lesson is one *hour* long.', 'Dars bir soat davom etadi.', 'hourglass-not-done'],
      ['second', '/ˈsekənd/', 'soniya', 'Wait! Just a *second*.', 'Kuting! Bir soniya.', 'timer-clock'],
      ['early', '/ˈɜːli/', 'erta', 'I get up *early*.', 'Men erta turaman.', 'sunrise alarm-clock'],
      ['now', '/naʊ/', 'hozir', 'It’s ten o’clock *now*.', 'Hozir soat o‘n.', 'watch']
    ] },
    { g: 'day', t: 'Kun qismlari', w: [
      ['morning', '/ˈmɔːnɪŋ/', 'ertalab, tong', 'I drink tea in the *morning*.', 'Ertalab choy ichaman.', 'sunrise'],
      ['afternoon', '/ˌɑːftəˈnuːn/', 'tushdan keyin', 'It’s hot in the *afternoon*.', 'Tushdan keyin issiq.', 'sun'],
      ['evening', '/ˈiːvnɪŋ/', 'kechqurun', 'We watch TV in the *evening*.', 'Kechqurun televizor ko‘ramiz.', 'cityscape-at-dusk'],
      ['night', '/naɪt/', 'tun, kechasi', 'It’s cold at *night*.', 'Kechasi sovuq.', 'night-with-stars'],
      ['midday', '/ˌmɪdˈdeɪ/', 'peshin (soat 12)', 'We have lunch at *midday*.', 'Peshinda tushlik qilamiz.', 'twelve-oclock sun'],
      ['midnight', '/ˈmɪdnaɪt/', 'yarim tun', 'It’s *midnight*. Go to bed!', 'Yarim tun bo‘ldi. Yoting!', 'twelve-oclock crescent-moon'],
      ['today', '/təˈdeɪ/', 'bugun', 'It’s sunny *today*.', 'Bugun quyoshli.', 'tear-off-calendar'],
      ['tomorrow', '/təˈmɒrəʊ/', 'ertaga', 'It’s Sunday *tomorrow*.', 'Ertaga yakshanba.', 'spiral-calendar right-arrow'],
      ['yesterday', '/ˈjestədeɪ/', 'kecha (o‘tgan kun)', 'It was cold *yesterday*.', 'Kecha sovuq edi.', 'spiral-calendar left-arrow']
    ] },
    { g: 'weather', t: 'Ob-havo', w: [
      ['weather', '/ˈweðə/', 'ob-havo', 'What’s the *weather* like?', 'Ob-havo qanday?', 'sun-behind-rain-cloud'],
      ['sun', '/sʌn/', 'quyosh', 'The *sun* is very hot.', 'Quyosh juda issiq.', 'sun'],
      ['sunny', '/ˈsʌni/', 'quyoshli', 'It’s *sunny* in Termez.', 'Termizda quyoshli.', 'sun sunglasses'],
      ['cloud', '/klaʊd/', 'bulut', 'Look at that big *cloud*!', 'Anavi katta bulutga qarang!', 'cloud'],
      ['cloudy', '/ˈklaʊdi/', 'bulutli', 'It’s *cloudy* today.', 'Bugun bulutli.', 'sun-behind-large-cloud'],
      ['rain', '/reɪn/', 'yomg‘ir', 'I love the *rain*.', 'Yomg‘irni yaxshi ko‘raman.', 'umbrella-with-rain-drops'],
      ['rainy', '/ˈreɪni/', 'yomg‘irli', 'It’s a *rainy* day.', 'Bugun yomg‘irli kun.', 'cloud-with-rain'],
      ['wind', '/wɪnd/', 'shamol', 'The *wind* is strong today.', 'Bugun shamol kuchli.', 'wind-face'],
      ['windy', '/ˈwɪndi/', 'shamolli', 'It’s *windy* in autumn.', 'Kuzda shamolli bo‘ladi.', 'leaf-fluttering-in-wind'],
      ['snow', '/snəʊ/', 'qor', 'Children play in the *snow*.', 'Bolalar qorda o‘ynaydi.', 'snowflake'],
      ['snowy', '/ˈsnəʊi/', 'qorli', 'It’s *snowy* in the mountains.', 'Tog‘larda qor yog‘yapti.', 'snow-capped-mountain'],
      ['fog', '/fɒɡ/', 'tuman', 'There is *fog* on the road.', 'Yo‘lda tuman bor.', 'fog'],
      ['foggy', '/ˈfɒɡi/', 'tumanli', 'It’s *foggy* this morning.', 'Bugun ertalab tumanli.', 'foggy'],
      ['hot', '/hɒt/', 'issiq', 'Summer is *hot* in Uzbekistan.', 'O‘zbekistonda yoz issiq.', 'fire thermometer'],
      ['warm', '/wɔːm/', 'iliq', 'It’s *warm* in spring.', 'Bahorda havo iliq.', 'sun-behind-small-cloud'],
      ['cool', '/kuːl/', 'salqin', 'It’s *cool* in the evening.', 'Kechqurun salqin.', 'thermometer #18°'],
      ['cold', '/kəʊld/', 'sovuq', 'Winter is *cold*.', 'Qish sovuq.', 'snowflake thermometer'],
      ['degree', '/dɪˈɡriː/', 'daraja', 'It’s one *degree* today.', 'Bugun bir daraja.', '#30°'],
      ['temperature', '/ˈtemprətʃə/', 'harorat', 'The *temperature* is low today.', 'Bugun harorat past.', 'thermometer']
    ] }
  ],
  A: [{
    k: 'Televizion lavha', t: 'Good Morning, Uzbekistan!', s: 'Nigora ertalabki ob-havo ma’lumotini aytadi',
    p: [
      ['Good [morning], Uzbekistan! It’s seven [o’clock] [now], and I’m Nigora with the [weather]. Let’s look at the map.',
       'Xayrli tong, O‘zbekiston! Hozir soat yetti, men Nigora, ob-havo ma’lumoti bilan. Keling, xaritaga qaraymiz.'],
      ['In Tashkent, it’s [sunny] and [warm] [today]. The [sun] is out and the [temperature] is twenty-five [degrees|degree]. In the [afternoon], it’s [hot]: thirty-two degrees!',
       'Toshkentda bugun quyoshli va iliq. Quyosh chiqqan, harorat yigirma besh daraja. Tushdan keyin issiq bo‘ladi: o‘ttiz ikki daraja!'],
      ['In Samarkand, it’s [cloudy] in the morning. Big grey [clouds|cloud] come from the west. At [midday] there is some [rain], so take an umbrella! It’s a [rainy] afternoon.',
       'Samarqandda ertalab bulutli. G‘arbdan katta kulrang bulutlar keladi. Peshinda biroz yomg‘ir yog‘adi, shuning uchun soyabon oling! Tushdan keyin yomg‘irli.'],
      ['In Nukus, the [wind] is very strong. It’s [windy] all day. In the [evening] it’s [cool], only fifteen degrees.',
       'Nukusda shamol juda kuchli. Kun bo‘yi shamolli. Kechqurun salqin, bor-yo‘g‘i o‘n besh daraja.'],
      ['In the mountains near Chimgan, it’s [snowy]. There is [snow] on the roads, and it’s [cold] at [night]: minus five! In the Fergana Valley, it’s [foggy] in the [early] morning. There is thick [fog] on the roads, so drive slowly.',
       'Chimyon yaqinidagi tog‘larda qor yog‘yapti. Yo‘llarda qor bor, kechasi esa sovuq: minus besh! Farg‘ona vodiysida erta tongda tumanli. Yo‘llarda quyuq tuman bor, shuning uchun sekin yuring.'],
      ['[Yesterday|yesterday] it was rainy in Bukhara, but [tomorrow] it will be sunny. What [time] is it? It’s [half past] seven. The news is at [quarter past] eight, and the film is at [quarter to] ten.',
       'Kecha Buxoroda yomg‘irli edi, lekin ertaga quyoshli bo‘ladi. Soat necha? Yetti yarim. Yangiliklar soat sakkizdan chorak o‘tganda, film esa o‘nga chorak kamda.'],
      ['That’s all for now. Wait a [second] — one more thing! The next report is in one [hour]. Our last report is at [midnight]. See you in a [minute] after the ads!',
       'Hozircha shu. Bir soniya — yana bir narsa! Keyingi ma’lumot bir soatdan keyin. Oxirgi ma’lumotimiz yarim tunda. Reklamadan keyin bir daqiqada ko‘rishamiz!']
    ],
    q: [
      ['What’s the weather like in Tashkent today?', ['rainy', 'sunny and warm', 'snowy'], 1],
      ['When is there rain in Samarkand?', ['at midnight', 'in the evening', 'at midday'], 2],
      ['Where is it windy?', ['in Nukus', 'in Bukhara', 'in Tashkent'], 0],
      ['What is the temperature at night in the mountains?', ['fifteen degrees', 'minus five', 'twenty-five degrees'], 1],
      ['When is the film?', ['at quarter to ten', 'at half past seven', 'at quarter past eight'], 0]
    ]
  }]
});

/* ---------------- 6: Family & self-introduction ---------------- */
VOC(6, {
  vi: 'Oila a’zolari, katta oila va o‘zingizni tanishtirish uchun so‘zlar: ism, familiya, yosh, qayerdan ekanligingiz.',
  V: [
    { g: 'fam', t: 'Oila', w: [
      ['family', '/ˈfæməli/', 'oila', 'My *family* is big.', 'Oilam katta.', 'man+woman+girl+boy'],
      ['parents', '/ˈpeərənts/', 'ota-ona', 'My *parents* are teachers.', 'Ota-onam o‘qituvchi.', 'woman+man'],
      ['mother', '/ˈmʌðə/', 'ona', 'My *mother* is a doctor.', 'Onam shifokor.', 'woman'],
      ['mum', '/mʌm/', 'oyi (og‘zaki)', '*Mum*, where are my keys?', 'Oyi, kalitlarim qayerda?', 'woman red-heart'],
      ['father', '/ˈfɑːðə/', 'ota', 'My *father* is an engineer.', 'Otam muhandis.', 'man'],
      ['dad', '/dæd/', 'dada (og‘zaki)', 'My *dad* cooks plov on Fridays.', 'Dadam juma kunlari palov pishiradi.', 'man-cook'],
      ['brother', '/ˈbrʌðə/', 'aka, uka', 'My *brother* is twelve.', 'Ukam o‘n ikki yoshda.', 'boy'],
      ['sister', '/ˈsɪstə/', 'opa, singil', 'My *sister* is a student.', 'Opam talaba.', 'girl'],
      ['son', '/sʌn/', 'o‘g‘il', 'They have one *son*.', 'Ularning bitta o‘g‘li bor.', 'man+boy'],
      ['daughter', '/ˈdɔːtə/', 'qiz (farzand)', 'Their *daughter* is five.', 'Ularning qizi besh yoshda.', 'woman+girl'],
      ['child', '/tʃaɪld/', 'bola, farzand', 'Every *child* likes ice cream.', 'Har bir bola muzqaymoqni yoqtiradi.', 'child'],
      ['children', '/ˈtʃɪldrən/', 'bolalar, farzandlar', 'They have three *children*.', 'Ularning uchta farzandi bor.', 'child+child+child'],
      ['baby', '/ˈbeɪbi/', 'chaqaloq', 'My aunt has a new *baby*.', 'Xolamning yangi chaqalog‘i bor.', 'baby'],
      ['twins', '/twɪnz/', 'egizaklar', 'Ali and Vali are *twins*.', 'Ali va Vali egizak.', 'boy+boy'],
      ['only child', '/ˈəʊnli tʃaɪld/', 'yolg‘iz farzand', 'I have no brothers or sisters. I’m an *only child*.', 'Aka-uka, opa-singlim yo‘q. Men yolg‘iz farzandman.', 'child #1']
    ] },
    { g: 'big', t: 'Katta oila', w: [
      ['grandparents', '/ˈɡrænpeərənts/', 'bobo va buvi', 'My *grandparents* live in a village.', 'Bobo-buvim qishloqda yashaydi.', 'old-man+old-woman'],
      ['grandmother', '/ˈɡrænmʌðə/', 'buvi', 'My *grandmother* makes great somsa.', 'Buvim zo‘r somsa pishiradi.', 'old-woman'],
      ['grandma', '/ˈɡrænmɑː/', 'buvijon (og‘zaki)', '*Grandma*, can I help you?', 'Buvijon, yordam beraymi?', 'old-woman red-heart'],
      ['grandfather', '/ˈɡrænfɑːðə/', 'bobo', 'My *grandfather* is seventy.', 'Bobom yetmish yoshda.', 'old-man'],
      ['grandpa', '/ˈɡrænpɑː/', 'bobojon (og‘zaki)', '*Grandpa* tells funny stories.', 'Bobojonim qiziq hikoyalar aytib beradi.', 'old-man open-book'],
      ['grandson', '/ˈɡrænsʌn/', 'nevara (o‘g‘il)', 'Aziz is their *grandson*.', 'Aziz ularning nevarasi.', 'old-man boy'],
      ['granddaughter', '/ˈɡrændɔːtə/', 'nevara (qiz)', 'Lola is their *granddaughter*.', 'Lola ularning nevarasi.', 'old-woman girl'],
      ['aunt', '/ɑːnt/', 'xola, amma', 'My *aunt* lives in Tashkent.', 'Xolam Toshkentda yashaydi.', 'woman-curly-hair'],
      ['uncle', '/ˈʌŋkl/', 'amaki, tog‘a', 'My *uncle* is a driver.', 'Amakim haydovchi.', 'man-beard'],
      ['cousin', '/ˈkʌzn/', 'amakivachcha, xolavachcha', 'My *cousin* is my best friend.', 'Amakivachcham — eng yaqin do‘stim.', 'girl+boy'],
      ['nephew', '/ˈnefjuː/', 'jiyan (o‘g‘il)', 'My *nephew* is two years old.', 'Jiyanim ikki yoshda.', 'boy sparkles'],
      ['niece', '/niːs/', 'jiyan (qiz)', 'My *niece* goes to school.', 'Jiyanim maktabga boradi.', 'girl backpack'],
      ['husband', '/ˈhʌzbənd/', 'er', 'Her *husband* is a pilot.', 'Uning eri uchuvchi.', 'man ring'],
      ['wife', '/waɪf/', 'xotin, rafiqa', 'His *wife* is a nurse.', 'Uning rafiqasi hamshira.', 'woman ring'],
      ['relatives', '/ˈrelətɪvz/', 'qarindoshlar', 'All our *relatives* come for Navruz.', 'Navro‘zga barcha qarindoshlarimiz keladi.', 'old-man+woman+man+child']
    ] },
    { g: 'me', t: 'O‘zim haqimda', w: [
      ['name', '/neɪm/', 'ism', 'My *name* is Madina.', 'Mening ismim Madina.', 'bust-in-silhouette #Madina'],
      ['first name', '/ˈfɜːst neɪm/', 'ism (birinchi ism)', 'My *first name* is Aziz.', 'Ismim Aziz.', 'identification-card #Aziz'],
      ['surname', '/ˈsɜːneɪm/', 'familiya', 'My *surname* is Karimov.', 'Familiyam Karimov.', 'identification-card #Karimov'],
      ['age', '/eɪdʒ/', 'yosh', 'What’s your *age*? — Fifteen.', 'Yoshingiz nechada? — O‘n beshda.', 'birthday-cake #15'],
      ['years old', '/jɪəz əʊld/', '… yoshda', 'I’m sixteen *years old*.', 'Men o‘n olti yoshdaman.', 'birthday-cake'],
      ['live', '/lɪv/', 'yashamoq', 'I *live* in Andijan.', 'Men Andijonda yashayman.', 'house-with-garden'],
      ['from', '/frɒm/', '…dan (kelib chiqish)', 'I’m *from* Uzbekistan.', 'Men O‘zbekistondanman.', 'flag:uz'],
      ['born', '/bɔːn/', 'tug‘ilgan', 'I was *born* in 2010.', 'Men 2010-yilda tug‘ilganman.', 'baby #2010'],
      ['address', '/əˈdres/', 'manzil', 'What’s your *address*?', 'Manzilingiz qanday?', 'house round-pushpin'],
      ['phone number', '/fəʊn ˈnʌmbə/', 'telefon raqami', 'Can I have your *phone number*?', 'Telefon raqamingizni bera olasizmi?', 'mobile-phone input-numbers'],
      ['hometown', '/ˈhəʊmtaʊn/', 'tug‘ilgan shahar', 'My *hometown* is Kokand.', 'Tug‘ilgan shahrim — Qo‘qon.', 'cityscape red-heart'],
      ['introduce', '/ˌɪntrəˈdjuːs/', 'tanishtirmoq', 'Let me *introduce* myself.', 'O‘zimni tanishtiray.', 'handshake']
    ] }
  ],
  A: [{
    k: 'Blog', t: 'Hello from Kokand!', s: 'Shahzod til almashish saytida o‘zini va oilasini tanishtiradi',
    p: [
      ['Let me [introduce] myself. My [first name] is Shahzod and my [surname] is Karimov, so my full [name] is Shahzod Karimov. I’m fifteen [years old]. I was [born] in Kokand — it’s my [hometown] — but now I [live] in Tashkent. I’m [from] Uzbekistan, of course!',
       'O‘zimni tanishtiray. Ismim Shahzod, familiyam Karimov, demak to‘liq ismim — Shahzod Karimov. O‘n besh yoshdaman. Qo‘qonda tug‘ilganman — bu mening tug‘ilgan shahrim, lekin hozir Toshkentda yashayman. Albatta, O‘zbekistondanman!'],
      ['There are six people in my [family]. My [parents] are doctors. My [mother] works in a hospital and my [father] is a dentist. At home I call them [Mum|mum] and [Dad|dad].',
       'Oilamizda olti kishi bor. Ota-onam shifokor. Onam kasalxonada ishlaydi, otam esa tish shifokori. Uyda ularni oyi va dada deb chaqiraman.'],
      ['I have a [brother] and a [sister]. My sister is married. Her [husband], Jamshid, is a pilot and a great cook! They have [twins] — a [son] and a [daughter]. The twins are my [nephew] and my [niece]. So my parents are [grandparents] now!',
       'Mening akam va opam bor. Opam turmushga chiqqan. Uning eri Jamshid — uchuvchi va zo‘r oshpaz! Ularning egizaklari bor — bir o‘g‘il va bir qiz. Egizaklar mening jiyanlarim. Demak, ota-onam endi bobo-buvi!'],
      ['My [grandfather] and [grandmother] live in Kokand. [Grandpa|grandpa] is seventy-five and [Grandma|grandma] is seventy. They have nine grandchildren. I’m their oldest [grandson], and my little cousin Mohira is their youngest [granddaughter].',
       'Bobom va buvim Qo‘qonda yashaydi. Bobojonim yetmish beshda, buvijonim yetmishda. Ularning to‘qqizta nevarasi bor. Men ularning eng katta nevarasiman, kichkina amakivachcham Mohira esa eng kichik nevarasi.'],
      ['My [uncle] and [aunt] live in Samarkand. My uncle is a teacher, and his [wife], my aunt, is a nurse. They have three [children]: two boys and a [baby] girl — my [cousin] Mohira. Every [child] in our family loves her!',
       'Amakim va kelinoyim Samarqandda yashaydi. Amakim o‘qituvchi, uning rafiqasi — kelinoyim hamshira. Ularning uchta farzandi bor: ikki o‘g‘il va chaqaloq qiz — amakivachcham Mohira. Oilamizdagi har bir bola uni yaxshi ko‘radi!'],
      ['My best friend, Kamron, is an [only child]. He loves our big family. At Navruz, all our [relatives] come to Kokand — thirty people in one house!',
       'Eng yaqin do‘stim Kamron — yolg‘iz farzand. Unga bizning katta oilamiz yoqadi. Navro‘zda barcha qarindoshlarimiz Qo‘qonga keladi — bitta uyda o‘ttiz kishi!'],
      ['Do you want to write to me? My email [address] is on my profile, but my [phone number] is a secret. Tell me about your family! What’s your [age]? Where is your hometown?',
       'Menga yozmoqchimisiz? Elektron pochta manzilim profilimda, lekin telefon raqamim — sir. Menga oilangiz haqida aytib bering! Yoshingiz nechada? Tug‘ilgan shahringiz qayer?']
    ],
    q: [
      ['Where was Shahzod born?', ['in Tashkent', 'in Kokand', 'in Samarkand'], 1],
      ['What are his parents’ jobs?', ['They are teachers.', 'They are pilots.', 'They are doctors.'], 2],
      ['Who is Jamshid?', ['his sister’s husband', 'his uncle', 'his cousin'], 0],
      ['Who is an only child?', ['Mohira', 'Kamron', 'Shahzod'], 1],
      ['When do all the relatives come to Kokand?', ['at Navruz', 'every Sunday', 'in winter'], 0]
    ]
  }]
});

/* =====================================================================
   B1 — 20, 21, 22-darslar   (n = 220, 221, 222)
   ===================================================================== */

/* ---------------- B1 · 20: Reported speech (statements) ---------------- */
L({
  n: 220, lvl: 'B1', t: 'Reported speech (statements)', ts: 'He said that…', uz: 'say / tell + that + backshift', topic: 'Communication',
  gi: 'Boshqa odamning gapini <b>o‘z so‘zimiz bilan</b> aytib berish. Zamonlar bir pog‘ona <b>orqaga</b> suriladi: «Men charchadim» → U <b>charchagan edi</b> dedi. Kundalik suhbatda va xabarlarda juda ko‘p ishlatiladi.',
  g: [
    { id: 'back', h: 'Backshift: zamon bir pog‘ona orqaga', f: ['“I *work*”  →  he said (that) he *worked*', '“I *am working*”  →  he said he *was working*', '“I *have worked*”  →  he said he *had worked*'],
      x: '<p>Reported speech’da <b class="rd">said</b> (o‘tgan zamon) bo‘lgani uchun gapdagi fe’l <b class="rd">bir zamon orqaga</b> suriladi: <b>Present Simple → Past Simple</b>, <b>Present Continuous → Past Continuous</b>, <b>Present Perfect → Past Perfect</b>, <b>Past Simple → Past Perfect</b>.</p><p>«I <b>like</b> tea,» she said. → She said she <b>liked</b> tea.<br>«I <b>went</b> home,» he said. → He said he <b>had gone</b> home.</p><p><b>that</b> ixtiyoriy: She said <b>(that)</b> she was tired.</p>',
      key: ['*Present → Past → Past Perfect* (bir pog‘ona orqaga)', 'said (that) he *worked* / was *working* / had *gone*'],
      tb: { h: ['To‘g‘ri nutq', 'Ko‘chirma emas (reported)'], r: [['“I **work**”', 'he said he **worked**'], ['“I **am working**”', 'he said he **was working**'], ['“I **have worked**”', 'he said he **had worked**'], ['“I **worked**”', 'he said he **had worked**'], ['“I **will work**”', 'he said he **would work**'], ['“I **can** work”', 'he said he **could** work']] },
      e: [['“I *like* tea,” she said. → She said she *liked* tea.', '“Men choyni yoqtiraman,” dedi u. → U choyni yoqtirishini aytdi.', 'teacup-without-handle'], ['“I *am working*,” he said. → He said he *was working*.', 'U ishlayotganini aytdi.', 'laptop'], ['“I *have finished*,” she said. → She said she *had finished*.', 'U tugatganini aytdi.', 'check-mark-button'], ['“I *went* home,” he said. → He said he *had gone* home.', 'U uyga borganini aytdi.', 'house'], ['“I *will call* you,” she said. → She said she *would call* me.', 'U menga qo‘ng‘iroq qilishini aytdi.', 'telephone-receiver'], ['“I *can* swim,” he said. → He said he *could* swim.', 'U suza olishini aytdi.', 'person-swimming']],
      tr: [['U charchaganini aytdi.', 'He said he was tired.'], ['U ertaga qo‘ng‘iroq qilishini aytdi.', 'She said she would call tomorrow.'], ['Ular uyga borganini aytishdi.', 'They said they had gone home.']] },
    { id: 'change', h: 'Olmosh va vaqt so‘zlari o‘zgaradi', f: ['*I → he / she*   |   *my → his / her*', '*today → that day*   |   *tomorrow → the next day*', '*here → there*   |   *this → that*   |   *now → then*'],
      x: '<p>Faqat zamon emas, <b class="rd">olmosh</b> va <b class="rd">vaqt / joy so‘zlari</b> ham o‘zgaradi: «I’ll see you <b>tomorrow</b>,» he said. → He said he would see me <b>the next day</b>.</p><p>Jadval: <b>now → then</b>, <b>today → that day</b>, <b>yesterday → the day before</b>, <b>tomorrow → the next day</b>, <b>last week → the week before</b>, <b>next week → the following week</b>, <b>here → there</b>, <b>this → that</b>, <b>ago → before</b>.</p>',
      key: ['*tomorrow → the next day*   |   *yesterday → the day before*', '*here → there*   |   *this → that*   |   *now → then*'],
      e: [['“I’ll see you *tomorrow*,” he said. → He said he’d see me *the next day*.', 'U ertasi kuni meni ko‘rishini aytdi.', 'calendar'], ['“I was ill *yesterday*,” she said. → She said she’d been ill *the day before*.', 'U bir kun oldin kasal bo‘lganini aytdi.', 'face-with-thermometer'], ['“I live *here*,” he said. → He said he lived *there*.', 'U u yerda yashashini aytdi.', 'round-pushpin'], ['“I like *this* book,” she said. → She said she liked *that* book.', 'U o‘sha kitobni yoqtirishini aytdi.', 'books'], ['“I’m busy *now*,” he said. → He said he was busy *then*.', 'U o‘sha paytda band ekanini aytdi.', 'alarm-clock'], ['“I met him two years *ago*,” she said. → She said she’d met him two years *before*.', 'U uni ikki yil oldin uchratganini aytdi.', 'handshake']],
      tr: [['U ertaga kelishini aytdi.', 'She said she would come the next day.'], ['U kecha kasal bo‘lganini aytdi.', 'He said he had been ill the day before.'], ['U bu yerda yashashini aytdi.', 'He said he lived there.']] },
    { id: 'sayTell', h: 'say va tell: farqi', f: ['*said* + (that) + gap', '*told* + shaxs + (that) + gap', '*said to* + shaxs (kamdan-kam)'],
      x: '<p><b class="rd">tell</b> doim <b>kimga</b> deganini talab qiladi: «She <b>told me</b> she was tired.» <b class="rd">say</b> dan keyin odam kelmaydi: «She <b>said</b> she was tired.» (✗ She said me)</p><p>Agar <b>say</b> bilan kimga aytilganini bildirmoqchi bo‘lsak: «She <b>said to me</b> that…» (kamroq).</p><p>Shuningdek <b>tell</b> + <b>a lie / the truth / a story / a joke / the time</b> qotib qolgan birikmalarda ishlatiladi.</p>',
      key: ['*told* + SHAXS: She told *me* …   |   *said* (shaxssiz)', '✗ She said me   →   ✓ She *told* me'],
      e: [['She *told me* she was tired.', 'U menga charchaganini aytdi.', 'sleepy-face'], ['She *said* she was tired.', 'U charchaganini aytdi.', 'sleepy-face'], ['He *told us* the truth.', 'U bizga haqiqatni aytdi.', 'light-bulb'], ['He *said to me* that he was busy.', 'U menga band ekanini aytdi.', 'alarm-clock'], ['They *told her* a funny story.', 'Ular unga kulgili hikoya aytib berishdi.', 'grinning-face-with-smiling-eyes'], ['Don’t *tell lies*!', 'Yolg‘on aytmang!', 'zipper-mouth-face']],
      tr: [['U menga charchaganini aytdi.', 'She told me she was tired.'], ['U charchaganini aytdi.', 'She said she was tired.'], ['Ular bizga haqiqatni aytishdi.', 'They told us the truth.']] },
    { id: 'nob', h: 'Backshift bo‘lmaydigan holatlar', f: ['*hozir ham to‘g‘ri* bo‘lsa → ixtiyoriy', '*Past Perfect* → o‘zgarmaydi', '*would, could, should, might* → o‘zgarmaydi'],
      x: '<p>Zamon surilmaydigan hollar: <b class="rd">1)</b> gap hali ham haqiqat bo‘lsa: «The Earth <b>goes</b> round the sun,» he said → He said the Earth <b>goes</b> round the sun. <b class="rd">2)</b> <b>Past Perfect</b> o‘zgarmaydi. <b class="rd">3)</b> <b>would, could, should, might</b> o‘zgarmaydi.</p><p>Agar xabar beruvchi fe’l hozirgi zamonda bo‘lsa (<b>says, is saying</b>), zamon surilmaydi: «She <b>says</b> she <b>is</b> tired.»</p>',
      key: ['Fakt / hozir ham haqiqat → ixtiyoriy', '*would / could / should / might* o‘zgarmaydi'],
      e: [['He said the Earth *goes* round the sun.', 'U Yer Quyosh atrofida aylanishini aytdi.', 'sun'], ['She *says* she *is* tired. (hozirgi xabar)', 'U charchaganini aytyapti.', 'sleepy-face'], ['“I *should* go,” he said. → He said he *should* go.', 'U ketishi kerakligini aytdi.', 'door'], ['“I *might* come,” she said. → She said she *might* come.', 'U kelishi mumkinligini aytdi.', 'person-walking'], ['“I *had finished*,” he said. → He said he *had finished*.', 'U tugatgan edi, dedi.', 'check-mark-button'], ['“Water *boils* at 100°C,” the teacher said.', 'O‘qituvchi suv 100°C da qaynashini aytdi.', 'hot-springs']],
      tr: [['U Yer aylanishini aytdi.', 'He said the Earth goes round the sun.'], ['U kelishi mumkinligini aytdi.', 'She said she might come.'], ['U uyga ketishi kerakligini aytdi.', 'He said he should go home.']] }
  ],
  m: [
    ['She said me she was tired.', 'She *told me* she was tired.', 'tell + shaxs.'],
    ['He said he is tired. (o‘tmish xabar)', 'He said he *was* tired.', 'Backshift.'],
    ['She said she will come tomorrow.', 'She said she *would* come *the next day*.', 'will → would, tomorrow → the next day.'],
    ['He told that he was busy.', 'He *said* that he was busy.', 'told + kimga.'],
    ['They said they have gone.', 'They said they *had gone*.', 'Present Perfect → Past Perfect.']
  ],
  s: {
    i: 'Bugun suhbatlardagi gaplarni boshqa odamlarga yetkazishni mashq qilasiz: kim nima dedi, nima va’da qildi.',
    st: [
      ['Aytib berish', 'She *said (that)* + Past', 'She said she was tired and had gone home.', 'U charchaganini va uyga ketganini aytdi.'],
      ['Kimga', 'He *told me / us* + (that) …', 'He told us that he would call the next day.', 'U ertasi kuni qo‘ng‘iroq qilishini bizga aytdi.'],
      ['Vaqt o‘zgarishi', '… *the next day / the day before*', 'She said she had seen him the day before.', 'U uni bir kun oldin ko‘rganini aytdi.'],
      ['Xabar', 'My friend *says* + hozirgi', 'My friend says that she is busy at the moment.', 'Do‘stim hozir band ekanini aytyapti.']
    ],
    f: [['Aytib berish', 'She said (that) ___.'], ['Kimga', 'He told me (that) ___.'], ['Vaqt', '… the next day / the day before.'], ['Xabar', 'My friend says ___.']],
    a: [['Namuna', 'Yesterday my friend Lola called me. She said that she was very busy at work. She told me she had finished a big project the day before and she would have a holiday the following week. She said she could not meet me, but she promised that she would call me soon.']],
    q: ['What did your friend say to you yesterday?', 'What did your teacher tell you last lesson?', 'What did your parents say when you were a child?', 'What promise did someone make to you recently?']
  },
  pod: { q: 'communication', hint: 'qahramonlar bir-biriga nima dedi (said that / told me)', use: 'Reported speech', pre: ['Kim nima dedi? Bitta «She said that …» gap yozing.'] },
  w: {
    task: 'Do‘stingiz bilan qilgan suhbatni boshqa odamga yetkazib yozing (90+ so‘z): said / told + backshift, vaqt so‘zlarining o‘zgarishi bilan.', min: 90, sents: 9,
    plan: ['Kim bilan suhbat bo‘ldi', 'U nima dedi (said that)', 'U menga nima aytdi (told me)', 'Vaqt: the day before / the next day', 'Xulosa'],
    model: 'Yesterday I met my friend Dilnoza. She said that she was very happy because she had passed her exam the day before. She told me she would start a new course the following week. She said she could not come to my party, but she promised that she would visit me soon. I told her that I was proud of her.',
    c: [['said/told', '\\b(said|told|says|tells)\\b', 2], ['backshift', '\\b(was|were|had|would|could|might)\\b', 3], ['time change', '\\b(the day before|the next day|the following|that day|there|then)\\b', 1]],
    sp: { t: 'Imlo: muloqot so‘zlari.', i: [['conversation', 'conversetion', 'con-ver-sa-tion.'], ['communicate', 'comunicate', 'com-mu-ni-cate: ikkita m.'], ['whisper', 'wisper', 'whis-per: h.'], ['suggestion', 'sugestion', 'sug-ges-tion: ikkita g.'], ['argument', 'arguement', 'ar-gu-ment: e yo‘q.'], ['pronunciation', 'pronounciation', 'pro-nun-ci-a-tion: o yo‘q.']] },
    cv: { sit: 'Do‘stingiz sizga uchinchi odam aytganini yetkazadi. Nima haqida ekanini aniqlaysiz.', who: ['Siz', 'Do‘st'],
      phr: [['Guess what!', 'Taxmin qiling!'], ['Apparently…', 'Ko‘rinishidan…'], ['She told me that…', 'U menga … deb aytdi.'], ['Are you serious?', 'Jiddiymisiz?']],
      dlg: [[1, '*Guess what!* I saw Madina yesterday.'], [0, 'And? What did she say?'], [1, '*She told me that* she was moving to Samarkand next month.'], [0, '*Are you serious?* She said she loved this city!'], [1, '*Apparently* she got a new job there. She said she would call us.'], [0, 'Wow. I hope she keeps her promise.']],
      task: 'Endi o‘zingiz shunday suhbat yozing (6–8 replika), said / told bilan.' }
  },
  tq: [
    ['back', '“I like tea,” she said. → She said she ___ tea.', ['likes', 'liked', 'had liked'], 1, 'Present → Past.'],
    ['back', '“I have finished,” he said. → He said he ___ .', ['has finished', 'had finished', 'finished'], 1, 'Present Perfect → Past Perfect.'],
    ['back', '“I will call,” she said. → She said she ___ call.', ['will', 'would', 'wills'], 1, 'will → would.'],
    ['change', '“I’ll come tomorrow.” → He said he would come ___ .', ['tomorrow', 'the next day', 'the day before'], 1, 'tomorrow → the next day.'],
    ['change', '“I live here.” → She said she lived ___ .', ['here', 'there', 'where'], 1, 'here → there.'],
    ['change', '“I was ill yesterday.” → He said he had been ill ___ .', ['yesterday', 'the day before', 'tomorrow'], 1, 'yesterday → the day before.'],
    ['sayTell', 'She ___ me she was tired.', ['said', 'told', 'tell'], 1, 'told me.'],
    ['sayTell', 'He ___ that he was busy.', ['said', 'told', 'tells'], 0, 'said that.'],
    ['sayTell', 'Don’t ___ lies!', ['say', 'tell', 'talk'], 1, 'tell lies.'],
    ['nob', 'The teacher said that water ___ at 100°C.', ['boils', 'boiled', 'had boiled'], 0, 'Fakt — o‘zgarmaydi.'],
    ['nob', '“I might come,” she said. → She said she ___ come.', ['might', 'will', 'may be'], 0, 'might o‘zgarmaydi.'],
    ['nob', 'She ___ she is tired. (hozirgi xabar)', ['says', 'said', 'said me'], 0, 'says + Present.']
  ]
});
VOC(220, {
  vi: 'Muloqot: B1 darajasidagi so‘zlar — gapirish usullari, til va tushunish, bahs va ishontirish. Oldingi darslardagi so‘zlar takrorlanmagan.',
  V: [
    { g: 'say', t: 'Gapirish usullari', w: [
      ['whisper', '/ˈwɪspə/', 'pichirlamoq', 'She *whispered* the secret.', 'U sirni pichirlab aytdi.', 'shushing-face'],
      ['mumble', '/ˈmʌmbl/', 'duduqlanib gapirmoq', 'He *mumbled* something.', 'U nimadir deb duduqlandi.', 'face-with-open-mouth'],
      ['murmur', '/ˈmɜːmə/', 'shivirlamoq', 'They *murmured* during the film.', 'Ular film paytida shivirlashdi.', 'speech-balloon'],
      ['yell', '/jel/', 'baqirmoq', 'Don’t *yell* at me!', 'Menga baqirmang!', 'loudspeaker'],
      ['scream', '/skriːm/', 'qichqirmoq', 'She *screamed* with fear.', 'U qo‘rquvdan qichqirdi.', 'face-screaming-in-fear'],
      ['announce', '/əˈnaʊns/', 'e’lon qilmoq', 'They *announced* the winner.', 'Ular g‘olibni e’lon qilishdi.', 'megaphone'],
      ['claim', '/kleɪm/', 'da’vo qilmoq', 'He *claims* to know the answer.', 'U javobni bilaman deb da’vo qiladi.', 'raised-hand'],
      ['mention', '/ˈmenʃn/', 'tilga olmoq', 'She *mentioned* her new job.', 'U yangi ishini tilga oldi.', 'speech-balloon'],
      ['remind', '/rɪˈmaɪnd/', 'eslatmoq', 'Please *remind* me to call him.', 'Iltimos, unga qo‘ng‘iroq qilishni eslating.', 'bell']
    ] },
    { g: 'lang', t: 'Til va tushunish', w: [
      ['accent', '/ˈæksent/', 'urg‘u, talaffuz tarzi', 'She has a British *accent*.', 'Uning britaniya aksenti bor.', 'speaking-head'],
      ['slang', '/slæŋ/', 'jargon', 'Teenagers use a lot of *slang*.', 'O‘smirlar ko‘p jargon ishlatadi.', 'speech-balloon'],
      ['dialect', '/ˈdaɪəlekt/', 'sheva', 'The northern *dialect* is different.', 'Shimoliy sheva boshqacha.', 'world-map'],
      ['vocabulary', '/vəˈkæbjələri/', 'lug‘at boyligi', 'Reading improves your *vocabulary*.', 'Kitob o‘qish lug‘at boyligini oshiradi.', 'books'],
      ['fluent', '/ˈfluːənt/', 'ravon', 'He speaks *fluent* English.', 'U ravon ingliz tilida gapiradi.', 'speaking-head'],
      ['bilingual', '/baɪˈlɪŋɡwəl/', 'ikki tilli', 'Their children are *bilingual*.', 'Ularning bolalari ikki tilli.', 'crossed-flags'],
      ['interpreter', '/ɪnˈtɜːprɪtə/', 'og‘zaki tarjimon', 'The *interpreter* helped us.', 'Og‘zaki tarjimon bizga yordam berdi.', 'speaking-head'],
      ['body language', '/ˈbɒdi ˈlæŋɡwɪdʒ/', 'tana tili', 'Her *body language* shows she is nervous.', 'Uning tana tili asabiy ekanini ko‘rsatadi.', 'person-gesturing-ok'],
      ['tone', '/təʊn/', 'ohang', 'I didn’t like his *tone*.', 'Uning ohangi menga yoqmadi.', 'musical-note']
    ] },
    { g: 'verb', t: 'Fe’llar', w: [
      ['persuade', '/pəˈsweɪd/', 'ishontirmoq', 'I *persuaded* him to come.', 'Men uni kelishga ishontirdim.', 'handshake'],
      ['convince', '/kənˈvɪns/', 'ishontirmoq (fikriga)', 'She *convinced* me she was right.', 'U meni haq ekaniga ishontirdi.', 'light-bulb'],
      ['interrupt', '/ˌɪntəˈrʌpt/', 'gapni bo‘lmoq', 'Don’t *interrupt* me.', 'Gapimni bo‘lmang.', 'raised-hand'],
      ['hint', '/hɪnt/', 'ishora qilmoq', 'He *hinted* that he was leaving.', 'U ketishiga ishora qildi.', 'eyes'],
      ['imply', '/ɪmˈplaɪ/', 'ishora qilmoq (yashirin)', 'Are you *implying* I lied?', 'Yolg‘on aytdim demoqchimisiz?', 'thinking-face'],
      ['translate', '/trænzˈleɪt/', 'tarjima qilmoq', 'Can you *translate* this word?', 'Bu so‘zni tarjima qila olasizmi?', 'speaking-head'],
      ['pronounce', '/prəˈnaʊns/', 'talaffuz qilmoq', 'How do you *pronounce* this?', 'Buni qanday talaffuz qilasiz?', 'speaking-head'],
      ['get across', '/ɡet əˈkrɒs/', 'tushuntirib bermoq', 'I couldn’t *get* my point *across*.', 'Fikrimni tushuntirib bera olmadim.', 'right-arrow']
    ] },
    { g: 'adj', t: 'Sifat va ravishlar', w: [
      ['sarcastic', '/sɑːˈkæstɪk/', 'kinoyali', 'His *sarcastic* comment hurt her.', 'Uning kinoyali izohi uni xafa qildi.', 'face-with-rolling-eyes'],
      ['blunt', '/blʌnt/', 'to‘g‘ridan-to‘g‘ri', 'He is very *blunt*.', 'U juda ochiq gapiradi.', 'speaking-head'],
      ['tactful', '/ˈtæktfl/', 'nozik muomalali', 'She gave a *tactful* answer.', 'U nozik muomalali javob berdi.', 'folded-hands'],
      ['respectful', '/rɪˈspektfl/', 'hurmatli, odobli', 'Please be *respectful* to guests.', 'Iltimos, mehmonlarga hurmat bilan munosabatda bo‘ling.', 'smiling-face'],
      ['aloud', '/əˈlaʊd/', 'ovoz chiqarib', 'Read the text *aloud*.', 'Matnni ovoz chiqarib o‘qing.', 'loudspeaker'],
      ['briefly', '/ˈbriːfli/', 'qisqacha', 'Tell me *briefly* what happened.', 'Nima bo‘lganini qisqacha ayting.', 'stopwatch'],
      ['frankly', '/ˈfræŋkli/', 'ochiqchasiga', '*Frankly*, I don’t agree.', 'Ochig‘i, men rozi emasman.', 'speaking-head'],
      ['bluntly', '/ˈblʌntli/', 'qo‘pol ochiqlik bilan', 'He answered *bluntly*.', 'U qo‘pol ochiqlik bilan javob berdi.', 'speaking-head']
    ] },
    { g: 'idiom', t: 'Iboralar', w: [
      ['small talk', '/ˈsmɔːl tɔːk/', 'bo‘sh suhbat', 'I’m bad at *small talk*.', 'Men bo‘sh suhbatda yomonman.', 'speech-balloon'],
      ['break the ice', '/breɪk ði aɪs/', 'muzni buzmoq', 'A joke can *break the ice*.', 'Hazil muzni buzishi mumkin.', 'ice'],
      ['get the wrong end of the stick', '/ɡet ðə rɒŋ end əv ðə stɪk/', 'noto‘g‘ri tushunmoq', 'You’ve *got the wrong end of the stick*.', 'Siz noto‘g‘ri tushundingiz.', 'cross-mark'],
      ['talk behind someone’s back', '/tɔːk bɪˈhaɪnd ˈsʌmwʌnz bæk/', 'orqasidan gapirmoq', 'Don’t *talk behind people’s backs*.', 'Odamlarning orqasidan gapirmang.', 'zipper-mouth-face'],
      ['beat around the bush', '/biːt əˈraʊnd ðə bʊʃ/', 'aylanib gapirmoq', 'Stop *beating around the bush*.', 'Aylanib gapirishni bas qiling.', 'deciduous-tree']
    ] }
  ],
  A: [{
    k: 'Hikoya', t: 'The Misunderstanding at the Conference', s: 'Ikki tilli konferensiyada tushunmovchilik va uni hal qilish',
    p: [
      ['Samira was an [interpreter] at a big conference. She was [fluent] in three languages and [bilingual] since childhood, so she had a rich [vocabulary]. But today she was nervous. A speaker with a strong [accent] began to [mumble|mumble], and Samira couldn’t hear well. He suddenly [announced|announce] that his firm would [claim|claim] a new prize. People started to [murmur|murmur], and someone in the back began to [yell|yell].',
       'Samira katta konferensiyada og‘zaki tarjimon edi. U uchta tilni ravon bilardi va bolaligidan ikki tilli edi, shuning uchun uning boy lug‘at zaxirasi bor edi. Lekin bugun u asabiy edi. Kuchli aksentli ma’ruzachi duduqlanib gapira boshladi va Samira yaxshi eshitmadi. U to‘satdan firmasi yangi mukofotga da’vo qilishini e’lon qildi. Odamlar shivirlay boshladi va orqadagi kimdir baqira boshladi.'],
      ['Samira had to [translate|translate] the sentence quickly, but she [got the wrong end of the stick|get the wrong end of the stick]. She thought the man [implied|imply] that his rival was dishonest. In a [sarcastic] [tone] she translated it, and the whole room went silent. The man’s [body language] showed he was shocked. “I didn’t [mention|mention] any rival,” he said, [bluntly|bluntly]. “You must have misheard.” Samira blushed and tried to [pronounce|pronounce] an apology.',
       'Samira jumlani tezda tarjima qilishi kerak edi, lekin noto‘g‘ri tushundi. U odam raqibini insofsiz deb ishora qilgan deb o‘yladi. Kinoyali ohangda tarjima qildi va butun zal jim bo‘ldi. Odamning tana tili uning hayratda ekanini ko‘rsatdi. «Men hech qanday raqibni tilga olmadim, — dedi u qo‘pol ochiqlik bilan. — Siz noto‘g‘ri eshitgan bo‘lsangiz kerak.» Samira qizarib ketdi va uzr so‘rashga urindi.'],
      ['The organiser tried to [break the ice|break the ice] with a joke. “Even good interpreters get mixed up,” she said, with a [tactful] smile. Samira [persuaded|persuade] herself not to run away. She took a breath and [briefly|briefly] explained what had happened. The speaker was [respectful] and said, “[Frankly|Frankly], I would have made the same mistake.” People laughed, and the [dialect] and [slang] he had used made them laugh even more.',
       'Tashkilotchi hazil bilan muzni buzishga urindi. «Yaxshi tarjimonlar ham adashadi», dedi u nozik tabassum bilan. Samira o‘zini qochmaslikka ishontirdi. U nafas oldi va nima bo‘lganini qisqacha tushuntirdi. Ma’ruzachi xushmuomala edi va dedi: «Ochig‘i, men ham xuddi shunday xato qilgan bo‘lardim.» Odamlar kuldi, u ishlatgan sheva va jargon esa ularni yana ham ko‘proq kuldirdi.'],
      ['After the break Samira read her notes [aloud|aloud] to check the facts. “I should have asked him to [remind|remind] me of the key words,” she said. She also learned not to [interrupt|interrupt] speakers or [scream] when something goes wrong. A colleague asked if she wanted to [hint|hint] to the next speaker to talk slowly. Samira smiled: “No, I just want to [get my point across|get across] clearly. And no more [small talk|small talk] before I start. Honest talk first!”',
       'Tanaffusdan keyin Samira faktlarni tekshirish uchun yozuvlarini ovoz chiqarib o‘qidi. «Undan asosiy so‘zlarni eslatishni so‘rashim kerak edi», dedi u. U yana ma’ruzachilarning gapini bo‘lmaslikni va nimadir noto‘g‘ri ketganda qichqirmaslikni o‘rgandi. Hamkasbi undan keyingi ma’ruzachiga sekin gapirishi haqida ishora qilmoqchi ekanini so‘radi. Samira jilmaydi: «Yo‘q, men shunchaki fikrimni aniq tushuntirmoqchiman. Va boshlashdan oldin bo‘sh suhbat yo‘q. Avval ochiq gap!»'],
      ['Later, in the corridor, some colleagues started to [talk behind her back|talk behind someone’s back] and [whispering|whisper] about the mistake. The director told them: “Stop [beating around the bush|beat around the bush]. If you have a problem, be [blunt], but kind.” Samira [convinced|convince] herself that nobody was really angry. She promised herself to practise more.',
       'Keyinroq koridorda ba’zi hamkasblar uning orqasidan gapirib, xato haqida pichirlay boshladi. Direktor ularga dedi: «Aylanib gapirishni bas qilinglar. Muammo bo‘lsa, ochiq, lekin mehribon bo‘linglar.» Samira o‘zini hech kim chindan g‘azablanmaganiga ishontirdi. U ko‘proq mashq qilishni o‘ziga va’da qildi.']
    ],
    q: [
      ['What was Samira’s job?', ['An interpreter', 'A teacher', 'A doctor'], 0],
      ['What did she get wrong?', ['She misunderstood what the speaker said.', 'She was late.', 'She forgot her notes.'], 0],
      ['How did the room react?', ['It went silent.', 'It applauded.', 'It left.'], 0],
      ['What did the speaker say?', ['I would have made the same mistake.', 'You are fired.', 'Go away.'], 0],
      ['What did Samira learn?', ['Not to interrupt', 'To scream', 'To leave'], 0]
    ]
  }],
  vt: {
    wf: [
      ['communicate', [['communication', 'muloqot'], ['communicative', 'muloqotga ochiq'], ['uncommunicative', 'jimjit']], 'He is *uncommunicative*.'],
      ['persuade', [['persuasion', 'ishontirish'], ['persuasive', 'ishontiradigan'], ['persuasively', 'ishontirib']], 'She is very *persuasive*.'],
      ['translate', [['translation', 'tarjima'], ['translator', 'tarjimon'], ['mistranslate', 'noto‘g‘ri tarjima qilmoq']], 'The *translator* worked fast.'],
      ['pronounce', [['pronunciation', 'talaffuz'], ['mispronounce', 'noto‘g‘ri talaffuz'], ['pronounced', 'sezilarli']], 'Check your *pronunciation*.']
    ],
    col: [['make a point', 'fikr bildirmoq', 'He *made a* good *point*.'], ['have a chat', 'suhbatlashmoq', 'We *had a chat*.'], ['give a speech', 'nutq so‘zlamoq', 'She *gave a speech*.'], ['spread a rumour', 'mish-mish tarqatmoq', 'Don’t *spread rumours*.']],
    pv: [['get across', 'tushuntirib bermoq', '*Get* your idea *across*.'], ['bring up', 'mavzuni ko‘tarmoq', 'He *brought up* the topic.'], ['talk over', 'muhokama qilmoq', 'Let’s *talk* it *over*.'], ['speak up', 'balandroq gapirmoq', 'Please *speak up*.']],
    use: [['say vs. tell vs. speak vs. talk', 'say — aytmoq; tell — kimgadir aytmoq; speak — til / nutq; talk — suhbat.', ['He *said* hello.', 'I *speak* three languages.']],
          ['hear vs. listen', 'hear — beixtiyor eshitmoq; listen — diqqat bilan.', ['I *heard* a noise.', 'I *listen* to music.']]],
    syn: [['blunt', 'direct', 'tactful'], ['sarcastic', 'ironic', 'sincere'], ['persuade', 'convince', 'dissuade'], ['whisper', 'murmur', 'shout']],
    ex: [['She works as an ___ at conferences. (og‘zaki tarjimon)', 'interpreter'], ['He speaks ___ English — no mistakes. (ravon)', 'fluent'], ['Their kids are ___ — they speak two languages.', 'bilingual'], ['A joke can ___ the ice. (muzni buzmoq)', 'break'], ['Don’t ___ me when I am speaking! (gapni bo‘lmoq)', 'interrupt'], ['I couldn’t get my point ___ . (tushuntirib bermoq)', 'across']]
  }
});

/* ---------------- B1 · 21: Reported questions, commands, reporting verbs ---------------- */
L({
  n: 221, lvl: 'B1', t: 'Reported questions, commands & reporting verbs', ts: 'asked if / told to / suggested -ing', uz: 'asked + if/wh- • told + to V • reporting verbs', topic: 'Work and jobs',
  gi: 'Savol va buyruqlarni ham yetkazish mumkin: «U <b>ishlaysizmi deb so‘radi</b>», «U menga <b>kelishimni aytdi</b>». Bundan tashqari <b>suggest, advise, warn, promise</b> kabi 15 ta maxsus fe’l gapni qisqa va chiroyli yetkazadi.',
  g: [
    { id: 'q', h: 'Reported questions: tartib gapdagiday', f: ['Wh-savol: *asked* + wh- + ega + fe’l (backshift)', 'Yes/No savol: *asked* + *if / whether* + ega + fe’l', '✗ do / did yo‘q   |   ✗ so‘roq belgisi yo‘q'],
      x: '<p>Reported savolda <b class="rd">so‘roq tartibi yo‘qoladi</b> — oddiy gap tartibi ishlatiladi, <b>do / does / did</b> tushib qoladi va <b>? belgisi</b> qo‘yilmaydi.</p><p>«Where <b>do</b> you work?» → He asked me <b class="rd">where I worked</b>. (✗ where did I work)</p><p>Yes/No savol uchun <b class="rd">if / whether</b>: «Do you like coffee?» → She asked <b class="rd">if I liked</b> coffee.</p><p>Backshift (zamon, vaqt so‘zlari) shu yerda ham amal qiladi.</p>',
      key: ['Reported savolda: *oddiy tartib*, do/does/did YO‘Q', 'Yes/No savol → *if / whether*'],
      e: [['“Where do you work?” → He asked me *where I worked*.', 'U mendan qayerda ishlashimni so‘radi.', 'office-building'], ['“Do you like coffee?” → She asked *if I liked* coffee.', 'U mendan qahva yoqtirish-yoqtirmasligimni so‘radi.', 'hot-beverage'], ['“What are you doing?” → He asked *what I was doing*.', 'U nima qilayotganimni so‘radi.', 'thinking-face'], ['“Did you finish?” → She asked *whether I had finished*.', 'U tugatdingmi deb so‘radi.', 'check-mark-button'], ['“When will you start?” → They asked *when I would start*.', 'Ular qachon boshlashimni so‘rashdi.', 'calendar'], ['“Can you drive?” → He asked *if I could drive*.', 'U haydashni bilishimni so‘radi.', 'automobile']],
      tr: [['U mendan qayerda ishlashimni so‘radi.', 'He asked me where I worked.'], ['U mendan kofe yoqtirishimni so‘radi.', 'She asked me if I liked coffee.'], ['Ular qachon boshlashimni so‘rashdi.', 'They asked me when I would start.']] },
    { id: 'cmd', h: 'Reported commands & requests: told / asked + to V', f: ['*told / ordered* + shaxs + *to* + V', 'iltimos :: *asked* + shaxs + *to* + V', 'inkor :: *told* + shaxs + *not to* + V'],
      x: '<p><b class="rd">Buyruq</b> → <b>told + shaxs + to + V</b>: «Sit down!» → He <b>told me to sit down</b>. <b class="rd">Iltimos</b> → <b>asked + shaxs + to + V</b>: «Please help me.» → She <b>asked me to help</b> her.</p><p><b class="rd">Inkor:</b> <b>not to + V</b>: «Don’t be late!» → He <b>told us not to be</b> late.</p><p>Muhim: bu yerda backshift yo‘q, <b>to + V</b> ishlatiladi.</p>',
      key: ['*told / asked + shaxs + to + V*', 'inkor: *not to + V* (✗ to not)'],
      e: [['“Sit down!” → He *told me to sit* down.', 'U menga o‘tirishni buyurdi.', 'chair'], ['“Please help me.” → She *asked me to help* her.', 'U mendan yordam berishimni so‘radi.', 'folded-hands'], ['“Don’t be late!” → He *told us not to be* late.', 'U kech qolmaslikni aytdi.', 'alarm-clock'], ['“Close the door.” → The boss *ordered him to close* the door.', 'Boshliq unga eshikni yopishni buyurdi.', 'door'], ['“Please don’t smoke.” → She *asked him not to smoke*.', 'U undan chekmaslikni so‘radi.', 'no-smoking'], ['“Wait here.” → The guard *told them to wait* there.', 'Qorovul ularga u yerda kutishni aytdi.', 'police-officer']],
      tr: [['U menga o‘tirishni aytdi.', 'He told me to sit down.'], ['U mendan yordam berishimni so‘radi.', 'She asked me to help her.'], ['U bizga kech qolmaslikni aytdi.', 'He told us not to be late.']] },
    { id: 'verbs', h: 'Reporting verbs: suggest, advise, warn, promise…', f: ['*suggest* + V-ing / that …   |   *advise* + shaxs + to V', '*promise / offer / refuse / agree* + to V', '*warn* + shaxs + (not) to V   |   *admit / deny* + V-ing'],
      x: '<p>Reporting fe’llar gapni qisqartiradi va ma’noni aniqroq beradi. Ularning <b class="rd">qolipi</b> turlicha:</p><p><b>+ to V:</b> promise, offer, refuse, agree, threaten. «He <b>promised to call</b>.»<br><b>+ shaxs + to V:</b> advise, warn, invite, remind, persuade. «She <b>warned me not to go</b>.»<br><b>+ V-ing:</b> suggest, admit, deny, apologise for. «He <b>suggested going</b> home.» «She <b>denied stealing</b> it.»</p><p>Eslatma: <b>suggest</b> dan keyin <b>to V</b> yo‘q! ✗ suggest to go.</p>',
      key: ['promise / offer / refuse + *to V*', 'suggest / admit / deny + *V-ing* (✗ suggest to go)'],
      e: [['He *promised to call* me.', 'U menga qo‘ng‘iroq qilishni va’da qildi.', 'telephone-receiver'], ['She *advised me to rest*.', 'U menga dam olishni maslahat berdi.', 'bed'], ['He *warned us not to touch* it.', 'U bizni unga tegmaslikka ogohlantirdi.', 'warning'], ['They *suggested going* home.', 'Ular uyga ketishni taklif qilishdi.', 'house'], ['She *denied stealing* the money.', 'U pulni o‘g‘irlaganini rad etdi.', 'prohibited'], ['He *refused to answer*.', 'U javob berishdan bosh tortdi.', 'zipper-mouth-face']],
      tr: [['U menga qo‘ng‘iroq qilishni va’da qildi.', 'He promised to call me.'], ['U menga dam olishni maslahat berdi.', 'She advised me to rest.'], ['Ular uyga ketishni taklif qilishdi.', 'They suggested going home.']] },
    { id: 'work', h: 'Ish suhbatida gapirish', f: ['*I’m applying for* + lavozim', 'I have experience *in / of* + soha', 'They asked me *if I could* …'],
      x: '<p>Ish haqida gaplashganda: <b>apply for a job</b> (ishga ariza bermoq), <b>have experience in</b> (… sohada tajribasi bor), <b>be responsible for</b> (… uchun javobgar), <b>work as a …</b> (… bo‘lib ishlamoq).</p><p>Suhbatdan keyin: «They <b>asked me if I could</b> start on Monday.» «They <b>told me to send</b> my CV.» «She <b>promised to let</b> me know.»</p><p><b class="rd">Esda tuting:</b> <b>work as</b> (lavozim), <b>work for</b> (kompaniya), <b>work in</b> (soha / joy): «I work <b>as</b> a nurse <b>for</b> a clinic <b>in</b> Tashkent.»</p>',
      key: ['work *as* (lavozim) • work *for* (kompaniya) • work *in* (joy / soha)', 'apply *for* a job   |   experience *in* …'],
      e: [['I’m *applying for* a job as a designer.', 'Dizayner lavozimiga ariza beryapman.', 'envelope'], ['She *has experience in* marketing.', 'Uning marketingda tajribasi bor.', 'bar-chart'], ['I work *as* a nurse *for* a clinic *in* Tashkent.', 'Toshkentda klinikada hamshira bo‘lib ishlayman.', 'stethoscope'], ['They *asked me if I could* start on Monday.', 'Ular dushanba kuni boshlay olishimni so‘rashdi.', 'calendar'], ['He *is responsible for* the team.', 'U jamoa uchun javobgar.', 'busts-in-silhouette'], ['She *promised to let* me know.', 'U menga xabar berishni va’da qildi.', 'bell']],
      tr: [['Men dizayner lavozimiga ariza beryapman.', 'I am applying for a job as a designer.'], ['U hamshira bo‘lib ishlaydi.', 'She works as a nurse.'], ['Ular dushanba kuni boshlay olishimni so‘rashdi.', 'They asked me if I could start on Monday.']] }
  ],
  m: [
    ['He asked me where did I work.', 'He asked me where *I worked*.', 'Reported savolda tartib oddiy.'],
    ['She asked me do I like coffee.', 'She asked me *if I liked* coffee.', 'if / whether.'],
    ['He told me to not be late.', 'He told me *not to be* late.', 'not to V.'],
    ['She suggested to go home.', 'She suggested *going* home.', 'suggest + V-ing.'],
    ['He said me to sit down.', 'He *told me* to sit down.', 'told + shaxs + to V.']
  ],
  s: {
    i: 'Bugun ish suhbati va ish joyi haqida gapirasiz: savollarni, ko‘rsatmalarni va maslahatlarni boshqalarga yetkazasiz.',
    st: [
      ['Savol', 'They asked me *if / where / what* + oddiy tartib', 'They asked me if I had any experience and where I had worked.', 'Ular menda tajriba bor-yo‘qligini va qayerda ishlaganimni so‘rashdi.'],
      ['Buyruq', 'She *told / asked* me *(not) to* + V', 'She asked me to send my CV and told me not to be late.', 'U mendan rezyumeni yuborishni so‘radi va kech qolmaslikni aytdi.'],
      ['Va’da / rad', '*promised / refused / offered to* + V', 'The manager promised to call me and offered to pay for the course.', 'Menejer qo‘ng‘iroq qilishni va’da qildi va kurs pulini to‘lashni taklif qildi.'],
      ['Maslahat', '*advised / suggested* + (shaxs + to V / V-ing)', 'My friend advised me to apply and suggested preparing a presentation.', 'Do‘stim ariza berishni maslahat berdi va taqdimot tayyorlashni taklif qildi.']
    ],
    f: [['Savol', 'They asked me if/where/what ___.'], ['Buyruq', 'She asked/told me (not) to ___.'], ['Va’da', 'He promised/refused/offered to ___.'], ['Maslahat', 'She advised me to ___ / suggested ___ing.']],
    a: [['Namuna', 'Last week I had a job interview. The manager asked me where I had worked and if I could use a computer. She told me to send my CV, and she advised me to prepare a presentation. I promised to do it, and she offered to call me on Friday. My friend suggested practising my answers.']],
    q: ['What questions were you asked at your last interview?', 'What did your boss tell you to do?', 'What did a friend advise you to do?', 'What did someone promise you recently?']
  },
  pod: { q: 'job interview', hint: 'suhbatchi nimani so‘radi va qahramon nima va’da qildi (asked if / promised to)', use: 'Reported questions & reporting verbs', pre: ['Qahramonga qanday savol berildi? Bitta «asked if/where…» gap yozing.'] },
  w: {
    task: 'Ish suhbati haqida do‘stingizga xat yozing (90+ so‘z): asked if / where / what, told me to, advised, promised to, suggested -ing bilan.', min: 90, sents: 9,
    plan: ['Qayerga ariza berdim', 'Mendan nimani so‘rashdi (asked if/where)', 'Menga nima deyishdi (told me to)', 'Va’da / maslahat (promised to / advised)', 'Hozirgi holat'],
    model: 'Last week I had an interview at a design company. The manager asked me where I had studied and if I could use English software. She told me to send my portfolio, and she promised to call me on Friday. My friend advised me to dress smartly and suggested practising my answers. I am waiting for her call now, and I hope she will not refuse to hire me.',
    c: [['asked if/where', '\\basked (me|him|her|them|us)?\\s*(if|whether|where|what|when|why|how)\\b', 1], ['told/asked to', '\\b(told|asked|advised|warned)\\s+\\w+\\s+(not )?to\\b', 1], ['reporting verb', '\\b(promised|suggested|refused|offered|denied|admitted)\\b', 1]],
    sp: { t: 'Imlo: ish so‘zlari.', i: [['colleague', 'colleage', 'col-league: ll, gue.'], ['interview', 'intervew', 'in-ter-view.'], ['experience', 'experiance', 'ex-pe-ri-ence.'], ['qualification', 'qualifiction', 'qual-i-fi-ca-tion.'], ['responsibility', 'responsability', 'res-pon-si-bil-i-ty.'], ['resume', 'resumé', 'rez-yu-mey.']] },
    cv: { sit: 'Ish suhbatida: suhbatchi sizga savol beradi.', who: ['Siz', 'Suhbatchi'],
      phr: [['Tell me about yourself.', 'O‘zingiz haqingizda ayting.'], ['What are your strengths?', 'Kuchli tomonlaringiz?'], ['Do you have any questions?', 'Savollaringiz bormi?'], ['When can you start?', 'Qachon boshlay olasiz?']],
      dlg: [[1, '*Tell me about yourself.*'], [0, 'I’m a graduate in design, and I have worked as an intern for a year.'], [1, '*What are your strengths?*'], [0, 'I’m organised, and I work well in a team.'], [1, '*When can you start?*'], [0, 'I can start next Monday.'], [1, '*Do you have any questions?* '], [0, 'Yes, what will my main responsibilities be?']],
      task: 'Endi o‘zingiz shunday suhbat yozing (6–8 replika), keyin uni reported speech’da yetkazing.' }
  },
  tq: [
    ['q', '“Where do you work?” → He asked me where ___ .', ['I worked', 'did I work', 'I work do'], 0, 'Oddiy tartib.'],
    ['q', '“Do you like coffee?” → She asked me ___ I liked coffee.', ['if', 'what', 'that'], 0, 'if.'],
    ['q', '“When will you start?” → They asked me when I ___ start.', ['will', 'would', 'did'], 1, 'will → would.'],
    ['cmd', '“Sit down!” → He told me ___ sit down.', ['to', 'that', 'for'], 0, 'told + to V.'],
    ['cmd', '“Don’t be late!” → He told us ___ be late.', ['not to', 'to not', 'don’t to'], 0, 'not to V.'],
    ['cmd', '“Please help me.” → She ___ me to help her.', ['asked', 'said', 'told that'], 0, 'asked me to.'],
    ['verbs', 'He ___ to call me. (va’da)', ['promised', 'suggested', 'denied'], 0, 'promise to V.'],
    ['verbs', 'She suggested ___ home.', ['going', 'to go', 'go'], 0, 'suggest + V-ing.'],
    ['verbs', 'He warned us ___ touch it.', ['not to', 'to not', 'don’t'], 0, 'warn not to.'],
    ['work', 'I work ___ a nurse.', ['as', 'for', 'in'], 0, 'work as.'],
    ['work', 'She works ___ a big company.', ['for', 'as', 'at to'], 0, 'work for.'],
    ['work', 'I’m applying ___ a job.', ['for', 'to', 'at'], 0, 'apply for.']
  ]
});
VOC(221, {
  vi: 'Ish va kasb: B1 darajasidagi so‘zlar — ishga qabul, ish haqi, ish muhiti va kasbiy tavsif. A2 dagi job, boss, manager kabi so‘zlar takrorlanmagan.',
  V: [
    { g: 'hire', t: 'Ishga qabul', w: [
      ['vacancy', '/ˈveɪkənsi/', 'bo‘sh ish o‘rni', 'There is a *vacancy* in the marketing team.', 'Marketing jamoasida bo‘sh ish o‘rni bor.', 'door'],
      ['applicant', '/ˈæplɪkənt/', 'ariza beruvchi', 'Fifty *applicants* applied for the job.', 'Ishga ellik nafar ariza beruvchi murojaat qildi.', 'raised-hand'],
      ['candidate', '/ˈkændɪdət/', 'nomzod', 'The best *candidate* got the job.', 'Eng yaxshi nomzod ishni oldi.', 'person'],
      ['qualification', '/ˌkwɒlɪfɪˈkeɪʃn/', 'malaka', 'She has excellent *qualifications*.', 'Uning malakasi a’lo.', 'graduation-cap'],
      ['experience', '/ɪkˈspɪəriəns/', 'tajriba', 'We need someone with *experience*.', 'Bizga tajribali odam kerak.', 'bar-chart'],
      ['résumé', '/ˈrezjumeɪ/', 'rezyume', 'Send your *résumé* by email.', 'Rezyumeingizni elektron pochta orqali yuboring.', 'memo'],
      ['probation', '/prəˈbeɪʃn/', 'sinov muddati', 'The *probation* period is three months.', 'Sinov muddati uch oy.', 'calendar'],
      ['contract', '/ˈkɒntrækt/', 'shartnoma', 'He signed a one-year *contract*.', 'U bir yillik shartnomaga imzo chekdi.', 'writing-hand'],
      ['internship', '/ˈɪntɜːnʃɪp/', 'amaliyot', 'She did an *internship* at a bank.', 'U bankda amaliyot o‘tadi.', 'briefcase']
    ] },
    { g: 'pay', t: 'Ish haqi va lavozim', w: [
      ['wage', '/weɪdʒ/', 'ish haqi (soatbay)', 'The *wage* is ten dollars an hour.', 'Ish haqi soatiga o‘n dollar.', 'dollar-banknote'],
      ['bonus', '/ˈbəʊnəs/', 'mukofot pul', 'Employees got a Christmas *bonus*.', 'Xodimlar Yangi yil mukofotini oldi.', 'money-bag'],
      ['promotion', '/prəˈməʊʃn/', 'lavozim oshishi', 'She got a *promotion* last year.', 'U o‘tgan yili lavozimga ko‘tarildi.', 'up-arrow'],
      ['raise', '/reɪz/', 'maosh oshishi', 'I asked for a *raise*.', 'Maosh oshirilishini so‘radim.', 'chart-increasing'],
      ['overtime', '/ˈəʊvətaɪm/', 'qo‘shimcha ish vaqti', 'We worked *overtime* all week.', 'Butun hafta qo‘shimcha ishladik.', 'alarm-clock'],
      ['shift', '/ʃɪft/', 'smena', 'He works the night *shift*.', 'U tungi smenada ishlaydi.', 'last-quarter-moon'],
      ['workload', '/ˈwɜːkləʊd/', 'ish hajmi', 'My *workload* has doubled.', 'Ish hajmim ikki barobar oshdi.', 'package'],
      ['career', '/kəˈrɪə/', 'kasbiy yo‘l', 'She has a successful *career*.', 'Uning muvaffaqiyatli kasbiy yo‘li bor.', 'chart-increasing'],
      ['teamwork', '/ˈtiːmwɜːk/', 'jamoaviy ish', '*Teamwork* is important here.', 'Bu yerda jamoaviy ish muhim.', 'busts-in-silhouette']
    ] },
    { g: 'verb', t: 'Fe’llar', w: [
      ['hire', '/ˈhaɪə/', 'ishga olmoq', 'They *hired* five new people.', 'Ular besh yangi odamni ishga olishdi.', 'handshake'],
      ['recruit', '/rɪˈkruːt/', 'yollamoq', 'We *recruit* graduates every year.', 'Biz har yili bitiruvchilarni yollaymiz.', 'handshake'],
      ['resign', '/rɪˈzaɪn/', 'iste’foga chiqmoq', 'He *resigned* last week.', 'U o‘tgan hafta iste’foga chiqdi.', 'door'],
      ['dismiss', '/dɪsˈmɪs/', 'ishdan bo‘shatmoq', 'The company *dismissed* ten workers.', 'Kompaniya o‘nta ishchini bo‘shatdi.', 'cross-mark'],
      ['employ', '/ɪmˈplɔɪ/', 'ish bilan ta’minlamoq', 'The factory *employs* 500 people.', 'Zavod 500 kishini ish bilan ta’minlaydi.', 'factory'],
      ['put in for', '/pʊt ɪn fɔː/', 'ariza bermoq (so‘zlashuv)', 'I *put in for* a transfer.', 'Boshqa bo‘limga o‘tish uchun ariza berdim.', 'envelope'],
      ['take on', '/teɪk ɒn/', 'zimmasiga olmoq', 'She *took on* more responsibility.', 'U ko‘proq mas’uliyatni zimmasiga oldi.', 'man-lifting-weights'],
      ['hand in', '/hænd ɪn/', 'topshirmoq', 'He *handed in* his notice.', 'U ishdan ketish arizasini topshirdi.', 'memo']
    ] },
    { g: 'adj', t: 'Sifat va ravishlar', w: [
      ['unemployed', '/ˌʌnɪmˈplɔɪd/', 'ishsiz', 'Many people are *unemployed*.', 'Ko‘p odam ishsiz.', 'empty-nest'],
      ['redundant', '/rɪˈdʌndənt/', 'qisqartirilgan (xodim)', 'He was made *redundant*.', 'U qisqartirildi.', 'cross-mark'],
      ['self-employed', '/ˌself ɪmˈplɔɪd/', 'o‘z ishi bor', 'She is *self-employed*.', 'U o‘z ishi bilan shug‘ullanadi.', 'briefcase'],
      ['full-time', '/ˌfʊl ˈtaɪm/', 'to‘liq stavka', 'It’s a *full-time* job.', 'Bu to‘liq stavkali ish.', 'alarm-clock'],
      ['part-time', '/ˌpɑːt ˈtaɪm/', 'yarim stavka', 'She works *part-time*.', 'U yarim stavkada ishlaydi.', 'alarm-clock'],
      ['high-pressure', '/ˌhaɪ ˈpreʃə/', 'katta bosimli', 'It is a *high-pressure* job.', 'Bu katta bosimli ish.', 'face-screaming-in-fear'],
      ['conscientious', '/ˌkɒnʃiˈenʃəs/', 'vijdonan ishlovchi', 'We need a *conscientious* assistant.', 'Bizga ishonchli yordamchi kerak.', 'check-mark-button'],
      ['enterprising', '/ˈentəpraɪzɪŋ/', 'tashabbuskor', 'He is an *enterprising* young man.', 'U maqsadga intiluvchi yigit.', 'rocket'],
    ] },
    { g: 'idiom', t: 'Iboralar', w: [
      ['climb the career ladder', '/klaɪm ðə kəˈrɪə ˈlædə/', 'martaba pillapoyasidan ko‘tarilmoq', 'She *climbed the career ladder* quickly.', 'U martaba pillapoyasidan tez ko‘tarildi.', 'ladder'],
      ['get the sack', '/ɡet ðə sæk/', 'ishdan haydalmoq', 'He *got the sack* for being late.', 'U kechikkani uchun ishdan haydaldi.', 'cross-mark'],
      ['work your fingers to the bone', '/wɜːk jɔː ˈfɪŋɡəz tə ðə bəʊn/', 'tinmay ishlamoq', 'She *worked her fingers to the bone*.', 'U tinmay ishladi.', 'hammer'],
      ['a nine-to-five job', '/ə ˌnaɪn tə ˈfaɪv dʒɒb/', 'oddiy ish', 'I don’t want *a nine-to-five job*.', 'Men oddiy 9–5 ishni xohlamayman.', 'alarm-clock'],
      ['the rat race', '/ðə ræt reɪs/', 'tinimsiz musobaqa', 'He left *the rat race*.', 'U tinimsiz musobaqadan chiqdi.', 'rat']
    ] }
  ],
  A: [{
    k: 'Hikoya', t: 'Nodir’s Job Interview', s: 'Yigit ish suhbatiga tayyorlandi — va kutilmagan savol oldi',
    p: [
      ['Nodir had been [unemployed] for six months. He saw a [vacancy] at a design company and decided to [put in for|put in for] it. He sent his [résumé] with all his [qualifications|qualification] and some [experience]. Many other [applicants|applicant] wanted the same job, but only one [candidate] could win it. Nodir’s dream was a [full-time] job with a good [wage], and a clear [career] plan. His friend told him not to give up: “You must be [enterprising] and [conscientious].”',
       'Nodir olti oydan beri ishsiz edi. U dizayn kompaniyasida bo‘sh ish o‘rnini ko‘rdi va ariza berishga qaror qildi. U rezyumesini barcha malakalari va biroz tajribasi bilan yubordi. Ko‘p boshqa ariza beruvchilar xuddi shu ishni xohlardi, lekin faqat bitta nomzod yuta olardi. Nodirning orzusi yaxshi ish haqli to‘liq stavkali ish va aniq kasbiy reja edi. Do‘sti uni voz kechmaslikka chaqirdi: «Sen maqsadli va ishonchli bo‘lishing kerak.»'],
      ['At the interview the manager asked him many questions. She asked him where he had worked and if he liked [teamwork]. “We [recruit|recruit] only people who can handle a heavy [workload],” she said. “Our staff sometimes work [overtime] or the night [shift].” She also asked if he could accept a [probation] period. Nodir told her he was ready. She told him to read the [contract] carefully, and she promised to give him a [bonus] after a year.',
       'Suhbatda menejer unga ko‘p savol berdi. U qayerda ishlaganini va jamoaviy ishni yoqtirishini so‘radi. «Biz faqat og‘ir ish hajmini ko‘tara oladigan odamlarni yollaymiz, — dedi u. — Xodimlarimiz ba’zan qo‘shimcha vaqt yoki tungi smenada ishlaydi.» U yana sinov muddatini qabul qila olishini so‘radi. Nodir tayyorligini aytdi. U unga shartnomani diqqat bilan o‘qishni aytdi va bir yildan keyin mukofot pul berishni va’da qildi.'],
      ['Then came the surprising question: “Have you ever been [dismissed|dismiss] or [made redundant|redundant]?” Nodir answered honestly: “Yes, after the factory closed, I was made [redundant]. I didn’t [resign] — it was the company’s decision.” The manager nodded. “Many good people [get the sack|get the sack] because of such things,” she said. “It doesn’t make you less valuable.” She offered an [internship] first, and then a [part-time] position.',
       'Keyin kutilmagan savol keldi: «Siz ishdan bo‘shatilganmisiz yoki qisqartirilganmisiz?» Nodir halol javob berdi: «Ha, zavod yopilgach men qisqartirildim. Men o‘zim iste’foga chiqmadim — bu kompaniyaning qarori edi.» Menejer bosh irg‘adi. «Ko‘p yaxshi odamlar bunday sabablarga ko‘ra ishdan haydaladi, — dedi u. — Bu sizni kamroq qadrli qilmaydi.» U avval amaliyotni, keyin yarim stavkali lavozimni taklif qildi.'],
      ['A week later the company decided to [hire|hire] him. “We will [employ|employ] you for one year,” they said. Nodir didn’t want to be [self-employed] any more. He took on more responsibility than anyone expected, and soon he got a [promotion] and a [raise]. “I didn’t want [a nine-to-five job|a nine-to-five job],” he laughs, “but I did want to [climb the career ladder|climb the career ladder].” And he stays away from [the rat race|the rat race] after work.',
       'Bir haftadan keyin kompaniya uni ishga olishga qaror qildi. «Biz sizni bir yilga ishga olamiz», deyishdi. Nodir endi o‘z ishi bilan shug‘ullanishni xohlamasdi. U hamma kutganidan ko‘proq mas’uliyatni zimmasiga oldi va tez orada lavozim oshishi hamda maosh oshishiga erishdi. «Men oddiy 9–5 ishni xohlamagan edim, — deb kuladi u, — lekin martaba pillapoyasidan ko‘tarilishni xohlardim.» Va ishdan keyin u tinimsiz musobaqadan uzoq turadi.'],
      ['The job was [high-pressure], and Nodir often had to [take on|take on] extra tasks and even [work his fingers to the bone|work your fingers to the bone]. But when the company wanted to cut costs, he did not [hand in|hand in] his notice. He stayed [conscientious] and [enterprising], and the staff trusted him.',
       'Ish katta bosimli edi va Nodir tez-tez qo‘shimcha vazifalarni zimmasiga olishga hatto tinmay ishlashga majbur bo‘lardi. Lekin kompaniya xarajatlarni qisqartirmoqchi bo‘lganda, u ishdan ketish arizasini topshirmadi. U ishonchli va maqsadli bo‘lib qoldi, xodimlar unga ishonishardi.']
    ],
    q: [
      ['How long had Nodir been unemployed?', ['Six months', 'One year', 'Two weeks'], 0],
      ['What did the manager ask first?', ['Where he had worked', 'His age', 'His address'], 0],
      ['What surprising question was asked?', ['Whether he had been dismissed', 'Whether he was married', 'Whether he could sing'], 0],
      ['What did she offer first?', ['An internship', 'A bonus', 'A contract'], 0],
      ['What happened after a year?', ['A promotion and a raise', 'He resigned', 'He was dismissed'], 0]
    ]
  }],
  vt: {
    wf: [
      ['employ', [['employer', 'ish beruvchi'], ['employee', 'xodim'], ['employment', 'bandlik']], 'The *employer* pays on time.'],
      ['apply', [['application', 'ariza'], ['applicant', 'ariza beruvchi'], ['applicable', 'amal qiladigan']], 'Fill in the *application*.'],
      ['qualify', [['qualification', 'malaka'], ['qualified', 'malakali'], ['unqualified', 'malakasiz']], 'She is highly *qualified*.'],
      ['promote', [['promotion', 'lavozim oshishi'], ['promoter', 'targ‘ibotchi'], ['promotional', 'reklama']], 'He got a *promotion*.']
    ],
    col: [['earn a living', 'tirikchilik qilmoq', 'He *earns a living* as a driver.'], ['meet a deadline', 'muddatga ulgurmoq', 'We *meet deadlines*.'], ['work overtime', 'qo‘shimcha ishlamoq', 'They *work overtime*.'], ['take a day off', 'dam olmoq', 'I *took a day off*.']],
    pv: [['apply for', 'ariza bermoq', 'I *applied for* it.'], ['take on', 'zimmasiga olmoq', 'She *took on* a new project.'], ['hand in', 'topshirmoq', '*Hand in* your notice.'], ['carry out', 'bajarmoq', 'They *carry out* inspections.']],
    use: [['job vs. work vs. career', 'job — aniq ish; work — mehnat umuman; career — uzoq muddatli yo‘l.', ['I found a *job*.', 'I have a lot of *work*.']],
          ['salary vs. wage', 'salary — oylik; wage — soatbay yoki haftalik.', ['monthly *salary*', 'hourly *wage*']]],
    syn: [['ambitious', 'determined', 'lazy'], ['reliable', 'dependable', 'unreliable'], ['hire', 'employ', 'dismiss'], ['redundant', 'unnecessary', 'essential']],
    ex: [['There is a ___ for a manager. (bo‘sh ish o‘rni)', 'vacancy'], ['Send your ___ and a cover letter. (rezyume)', 'résumé'], ['He signed a three-year ___ . (shartnoma)', 'contract'], ['She works ___ because she has two children. (yarim stavka)', 'part-time'], ['He was made ___ when the factory closed. (qisqartirildi)', 'redundant'], ['I got a ___ and now earn more. (lavozim oshishi)', 'promotion']]
  }
});

/* ---------------- B1 · 22: Defining relative clauses ---------------- */
L({
  n: 222, lvl: 'B1', t: 'Defining relative clauses', ts: 'who / which / that / whose / where', uz: 'the man who…, the book which/that…', topic: 'City vs country life',
  gi: 'Ot haqida <b>aniqlovchi qo‘shimcha ma’lumot</b> berish: «Men <b>hamma narsani biladigan</b> odamni tanidim». Who / which / that / whose / where — ularni to‘g‘ri tanlash va qachon tushirib qoldirish mumkinligi.',
  g: [
    { id: 'who', h: 'who, which, that: odam va narsa', f: ['*odam* + *who / that* + fe’l', '*narsa* + *which / that* + fe’l', '✗ *what* o‘rniga that / which'],
      x: '<p><b class="rd">who</b> — odam uchun: «The man <b>who</b> lives next door is a doctor.» <b class="rd">which</b> — narsa uchun: «The book <b>which</b> I read was great.» <b class="rd">that</b> — ikkalasi uchun (so‘zlashuvda tez-tez): «The man <b>that</b> lives next door…»</p><p>Muhim: relative pronoun <b>ega vazifasini</b> bajarsa, <b>majburiy</b> (who lives…). <b>Ob’ekt</b> vazifasida bo‘lsa, tushirib qoldirish mumkin: «The book (<b>which / that</b>) I read was great.»</p><p>Hech qachon <b>what</b> ishlatmang: ✗ The book what I read.</p>',
      key: ['*who* = odam   |   *which* = narsa   |   *that* = ikkalasi', '✗ The man what lives…  →  ✓ The man *who* lives…'],
      e: [['The man *who* lives next door is a doctor.', 'Qo‘shnimda yashaydigan odam shifokor.', 'man'], ['The book *which* I read was great.', 'Men o‘qigan kitob ajoyib edi.', 'books'], ['The girl *that* won the race is my sister.', 'Poygani yutgan qiz mening opam.', 'trophy'], ['I like people *who* make me laugh.', 'Meni kuldiradigan odamlarni yoqtiraman.', 'grinning-face-with-smiling-eyes'], ['This is the café *which* sells good cakes.', 'Bu yaxshi tort sotadigan kafe.', 'shortcake'], ['A farmer is someone *who* grows food.', 'Dehqon — oziq-ovqat yetishtiradigan kishi.', 'farmer']],
      tr: [['Qo‘shnimda yashaydigan odam shifokor.', 'The man who lives next door is a doctor.'], ['Men o‘qigan kitob ajoyib edi.', 'The book that I read was great.'], ['Bu yaxshi tort sotadigan kafe.', 'This is the café which sells good cakes.']] },
    { id: 'omit', h: 'Qachon relative pronounni tushirib qoldirish mumkin?', f: ['*ob’ekt* bo‘lsa → ixtiyoriy tushadi', '*ega* bo‘lsa → majburiy', 'the film (*that*) I saw   |   the man *who* called'],
      x: '<p>Savol: relative pronoundan keyin <b>ega</b> (ot yoki olmosh) keladimi? Ha → pronoun <b class="rd">ob’ekt</b>, uni <b>tushirib qoldirsa bo‘ladi</b>: «The film (that) <b>I</b> saw was boring.»</p><p>Yo‘q, <b>fe’l</b> keladimi? → pronoun <b class="rd">ega</b>, uni <b>qoldirish shart</b>: «The man <b>who called</b> was my uncle.» (✗ The man called…)</p><p>Predlog bilan: «The woman <b>I talked to</b> was kind.» (predlog gap oxirida, that tushadi).</p>',
      key: ['pronounDAN KEYIN ega → *tushadi* (ixtiyoriy)', 'pronounDAN KEYIN fe’l → *majburiy*'],
      e: [['The film (*that*) I saw was boring.', 'Men ko‘rgan film zerikarli edi.', 'clapper-board'], ['The man *who* called was my uncle.', 'Qo‘ng‘iroq qilgan odam amakim edi.', 'telephone-receiver'], ['The woman I talked *to* was kind.', 'Men gaplashgan ayol mehribon edi.', 'woman'], ['The shop (*which*) we visited was closed.', 'Biz borgan do‘kon yopiq edi.', 'shopping-bags'], ['The people *who* live here are friendly.', 'Bu yerda yashaydigan odamlar samimiy.', 'busts-in-silhouette'], ['This is the house I grew up *in*.', 'Bu men katta bo‘lgan uy.', 'house']],
      tr: [['Men ko‘rgan film zerikarli edi.', 'The film I saw was boring.'], ['Qo‘ng‘iroq qilgan odam amakim edi.', 'The man who called was my uncle.'], ['Men gaplashgan ayol mehribon edi.', 'The woman I talked to was kind.']] },
    { id: 'whose', h: 'whose, where, when: egalik, joy, vaqt', f: ['kimning :: *whose* + ot', 'joy :: *where*', 'vaqt :: *when*'],
      x: '<p><b class="rd">whose</b> — egalik: «The woman <b>whose</b> car was stolen called the police.» (kimning mashinasi). <b class="rd">where</b> — joy: «That is the town <b>where</b> I was born.» <b class="rd">when</b> — vaqt: «Do you remember the day <b>when</b> we met?»</p><p><b>whose</b> dan keyin doim <b>ot</b> keladi: whose car, whose phone. Uni <b>who’s</b> (= who is) bilan adashtirmang!</p>',
      key: ['*whose* + OT (egalik)   |   *where* joy   |   *when* vaqt', '*whose* ≠ *who’s* (= who is)'],
      e: [['The woman *whose* car was stolen called the police.', 'Mashinasi o‘g‘irlangan ayol politsiyaga qo‘ng‘iroq qildi.', 'police-car-light'], ['That is the town *where* I was born.', 'Bu men tug‘ilgan shahar.', 'house-with-garden'], ['I remember the day *when* we met.', 'Uchrashgan kunimiz esimda.', 'calendar'], ['He’s the boy *whose* father is a pilot.', 'U otasi uchuvchi bo‘lgan bola.', 'airplane'], ['Is this the place *where* you work?', 'Bu siz ishlaydigan joymi?', 'office-building'], ['I know a man *whose* dog can count.', 'It sanay oladigan odamni bilaman.', 'dog']],
      tr: [['Mashinasi o‘g‘irlangan ayol politsiyaga qo‘ng‘iroq qildi.', 'The woman whose car was stolen called the police.'], ['Bu men tug‘ilgan shahar.', 'This is the town where I was born.'], ['Biz uchrashgan kunni eslayman.', 'I remember the day when we met.']] },
    { id: 'life', h: 'Shahar va qishloq hayotini taqqoslash', f: ['The place *where* I live is …', 'People *who* live in cities …', 'A city *which* has lots of … is …'],
      x: '<p>Relative clauses bilan fikr ifodalash: «I prefer places <b>where</b> there is peace and quiet.» «People <b>who</b> live in big cities often have little free time.» «A town <b>which</b> has good transport is easier to live in.»</p><p>Foydali qoliplar: <b>The thing I like most about … is that …</b> «The thing I like most about the countryside is that it’s quiet.» <b>What I dislike is …</b> (mavzu: what = narsa).</p><p><b class="rd">Esda tuting:</b> <b>city dweller</b> (shaharlik), <b>country dweller</b> (qishloq aholisi).</p>',
      key: ['places *where* … • people *who* … • a town *which* …', 'The thing I like most about … *is that* …'],
      e: [['I prefer places *where* there is peace and quiet.', 'Men tinch-osoyishta joylarni afzal ko‘raman.', 'dove'], ['People *who* live in cities have little free time.', 'Shaharda yashaydigan odamlarning bo‘sh vaqti kam.', 'busts-in-silhouette'], ['A town *which* has good transport is easy to live in.', 'Transporti yaxshi shaharda yashash oson.', 'train'], ['The thing I like most about the village *is that* it’s quiet.', 'Qishloqda eng yoqadigani — tinchligi.', 'house-with-garden'], ['Cities *where* nightlife is great attract the young.', 'Tungi hayoti yaxshi shaharlar yoshlarni jalb qiladi.', 'night-with-stars'], ['*What* I dislike is the traffic.', 'Menga yoqmaydigan narsa — tirbandlik.', 'automobile']],
      tr: [['Men tinch joylarni afzal ko‘raman.', 'I prefer places where it is quiet.'], ['Shaharda yashaydigan odamlar band.', 'People who live in cities are busy.'], ['Menga yoqmaydigan narsa — tirbandlik.', 'What I dislike is the traffic.']] }
  ],
  m: [
    ['The man what lives next door is kind.', 'The man *who* lives next door is kind.', 'what yo‘q.'],
    ['The man called me is my uncle.', 'The man *who* called me is my uncle.', 'Ega vazifasida who majburiy.'],
    ['The woman who’s car was stolen is here.', 'The woman *whose* car was stolen is here.', 'whose + ot.'],
    ['The book which I read it was great.', 'The book which I read was great.', 'Ob’ekt takrorlanmaydi.'],
    ['This is the town where I was born in.', 'This is the town *where* I was born.', 'where + in yo‘q.']
  ],
  s: {
    i: 'Bugun shahar va qishloq hayotini taqqoslaysiz: odamlar, joylar va narsalarni tavsiflaysiz.',
    st: [
      ['Odam', 'People *who* + fe’l …', 'People who live in cities have little free time.', 'Shaharda yashaydigan odamlarning bo‘sh vaqti kam.'],
      ['Joy', 'A place *where* + gap …', 'I prefer a place where I can hear birds in the morning.', 'Men ertalab qushlar ovozini eshitadigan joyni afzal ko‘raman.'],
      ['Narsa', 'Something *which / that* + fe’l …', 'A city which has good transport saves time.', 'Transporti yaxshi shahar vaqtni tejaydi.'],
      ['Fikr', 'The thing I like most about … *is that* …', 'The thing I like most about the countryside is that it’s quiet.', 'Qishloqda eng yoqadigani — tinchligi.']
    ],
    f: [['Odam', 'People who ___ ___.'], ['Joy', 'A place where ___.'], ['Narsa', 'A city which ___.'], ['Fikr', 'The thing I like most about ___ is that ___.']],
    a: [['Namuna', 'I grew up in a village where everybody knows each other. People who live in the countryside are friendly. Now I live in a city which has good transport and many jobs, but it is crowded. The thing I like most about the village is that it is quiet. The thing I dislike about the city is the traffic.']],
    q: ['Do you prefer city or country life?', 'What kind of place would you like to live in?', 'What kind of people do you enjoy being with?', 'What is the thing you like most about your town?']
  },
  pod: { q: 'city or village', hint: 'qahramon shahar yoki qishloqni afzal ko‘radimi (who/which/where)', use: 'Relative clauses', pre: ['Qahramon qanday joyda yashashni yoqtiradi? Bitta «where…» gap yozing.'] },
  w: {
    task: 'Shahar va qishloq hayotini taqqoslang (90+ so‘z): who, which, that, where, whose bilan tavsiflang. Qaysi birini afzal ko‘rasiz?', min: 90, sents: 9,
    plan: ['Shahar hayoti (people who…)', 'Qishloq hayoti (a place where…)', 'Afzalliklar (which/that)', 'Kamchiliklar', 'Xulosa (The thing I like most…)'],
    model: 'I was born in a village where everybody knows each other, but now I live in a city that never sleeps. People who live in cities are always in a hurry. A village which is far from the road is very quiet, but a city which has good transport gives you more chances to work. The thing I like most about the countryside is that the air is fresh. I prefer a place where I have both.',
    c: [['who', '\\bwho\\b', 1], ['which/that', '\\b(which|that)\\b', 1], ['where/whose', '\\b(where|whose|when)\\b', 1]],
    sp: { t: 'Imlo: shahar va qishloq so‘zlari.', i: [['countryside', 'contryside', 'coun-try-side.'], ['neighbourhood', 'neigbourhood', 'neigh-bour-hood.'], ['population', 'populaton', 'pop-u-la-tion.'], ['environment', 'enviroment', 'en-vi-ron-ment: n.'], ['entertainment', 'entertainmnet', 'en-ter-tain-ment.'], ['convenient', 'convinient', 'con-ve-nient.']] },
    cv: { sit: 'Yangi tanishingiz bilan qayerda yashashingiz haqida suhbat.', who: ['Siz', 'Tanish'],
      phr: [['Where are you from?', 'Qayerdansiz?'], ['What’s it like there?', 'U yerda qanday?'], ['I’d rather live…', 'Men … yashashni afzal ko‘raman.'], ['It depends.', 'Bog‘liq.']],
      dlg: [[1, '*Where are you from?*'], [0, 'I’m from a small village where everybody knows each other.'], [1, '*What’s it like there?*'], [0, 'It’s a place which is very quiet. The people who live there are kind.'], [1, 'Do you miss it?'], [0, 'Sometimes. *I’d rather live* there, but jobs are in the city. *It depends* on the year.']],
      task: 'Endi o‘zingiz shunday suhbat yozing (6–8 replika), who/which/where bilan.' }
  },
  tq: [
    ['who', 'The man ___ lives next door is a doctor.', ['who', 'which', 'what'], 0, 'who.'],
    ['who', 'The book ___ I read was great.', ['who', 'which', 'whose'], 1, 'which / that.'],
    ['who', 'The girl ___ won the race is my sister.', ['that', 'whose', 'what'], 0, 'that / who.'],
    ['omit', 'The film I saw was boring. (pronoun tushgan)', ['The film that I saw', 'The film who I saw', 'The film what I saw'], 0, 'that tushishi mumkin.'],
    ['omit', 'The man ___ called me is my uncle.', ['who', '(hech narsa)', 'whose'], 0, 'Ega — who majburiy.'],
    ['omit', 'The woman I talked ___ was kind.', ['to', 'with that', 'about'], 0, 'talked to.'],
    ['whose', 'The woman ___ car was stolen called the police.', ['who', 'whose', 'which'], 1, 'whose.'],
    ['whose', 'That is the town ___ I was born.', ['where', 'which', 'whose'], 0, 'where.'],
    ['whose', 'I remember the day ___ we met.', ['when', 'where', 'which'], 0, 'when.'],
    ['life', 'The thing I like most about the village ___ it’s quiet.', ['is that', 'are', 'what'], 0, 'is that.'],
    ['life', 'I prefer places ___ there is peace and quiet.', ['where', 'who', 'whose'], 0, 'where.'],
    ['life', 'People ___ live in cities are busy.', ['who', 'which', 'what'], 0, 'who.']
  ]
});
VOC(222, {
  vi: 'Shahar va qishloq hayoti: B1 darajasidagi so‘zlar — joylashuv, jamiyat, qishloq xo‘jaligi va hayot sifati. Oldingi darslardagi so‘zlar takrorlanmagan.',
  V: [
    { g: 'city', t: 'Shahar hayoti', w: [
      ['skyscraper', '/ˈskaɪskreɪpə/', 'osmono‘par bino', 'Dubai is famous for its *skyscrapers*.', 'Dubay osmono‘par binolari bilan mashhur.', 'office-building'],
      ['downtown', '/ˌdaʊnˈtaʊn/', 'shahar markazi (AQSH)', 'The shops are *downtown*.', 'Do‘konlar shahar markazida.', 'cityscape'],
      ['housing estate', '/ˈhaʊzɪŋ ɪsteɪt/', 'turar-joy massivi', 'We live on a big *housing estate*.', 'Biz katta turar-joy massivida yashaymiz.', 'houses'],
      ['infrastructure', '/ˈɪnfrəstrʌktʃə/', 'infratuzilma', 'The city needs better *infrastructure*.', 'Shaharga yaxshiroq infratuzilma kerak.', 'bridge-at-night'],
      ['amenities', '/əˈmiːnətiz/', 'qulayliklar', 'The flat has many *amenities*.', 'Kvartirada ko‘p qulayliklar bor.', 'house'],
      ['nightlife', '/ˈnaɪtlaɪf/', 'tungi hayot', 'The city has a lively *nightlife*.', 'Shaharning jonli tungi hayoti bor.', 'night-with-stars'],
      ['overcrowding', '/ˌəʊvəˈkraʊdɪŋ/', 'haddan ortiq gavjumlik', '*Overcrowding* is a big problem.', 'Haddan ortiq gavjumlik katta muammo.', 'busts-in-silhouette'],
      ['cost of living', '/ˌkɒst əv ˈlɪvɪŋ/', 'yashash narxi', 'The *cost of living* is high here.', 'Bu yerda yashash narxi baland.', 'money-with-wings'],
      ['rat race', '/ræt reɪs/', 'tinimsiz musobaqa', 'He wants to escape the *rat race*.', 'U tinimsiz musobaqadan qochmoqchi.', 'rat']
    ] },
    { g: 'country', t: 'Qishloq hayoti', w: [
      ['countryside', '/ˈkʌntrisaɪd/', 'qishloq joy', 'They live in the *countryside*.', 'Ular qishloq joyda yashaydi.', 'sunrise-over-mountains'],
      ['farmland', '/ˈfɑːmlænd/', 'ekin yeri', 'The *farmland* stretches for miles.', 'Ekin yerlari milyalar bo‘ylab cho‘zilgan.', 'sheaf-of-rice'],
      ['harvest', '/ˈhɑːvɪst/', 'hosil, hosilni yig‘ish', 'The *harvest* was excellent this year.', 'Bu yil hosil a’lo bo‘ldi.', 'sheaf-of-rice'],
      ['livestock', '/ˈlaɪvstɒk/', 'chorva', 'They keep *livestock* on the farm.', 'Ular fermada chorva boqadi.', 'cow'],
      ['orchard', '/ˈɔːtʃəd/', 'meva bog‘i', 'We picked apples in the *orchard*.', 'Meva bog‘ida olma terdik.', 'red-apple'],
      ['meadow', '/ˈmedəʊ/', 'o‘tloq', 'Flowers grew in the *meadow*.', 'O‘tloqda gullar o‘sgan edi.', 'blossom'],
      ['cottage', '/ˈkɒtɪdʒ/', 'qishloq uychasi', 'They rented a *cottage* by the lake.', 'Ular ko‘l bo‘yida uycha ijaraga olishdi.', 'house-with-garden'],
      ['tractor', '/ˈtræktə/', 'traktor', 'The farmer drove his *tractor*.', 'Dehqon traktorini haydadi.', 'tractor'],
      ['fresh air', '/freʃ eə/', 'toza havo', 'I love the *fresh air* here.', 'Bu yerdagi toza havoni yaxshi ko‘raman.', 'wind-face']
    ] },
    { g: 'verb', t: 'Fe’llar', w: [
      ['settle down', '/ˈsetl daʊn/', 'joylashib qolmoq', 'They *settled down* in a village.', 'Ular qishloqda joylashib qolishdi.', 'house'],
      ['move away', '/muːv əˈweɪ/', 'ko‘chib ketmoq', 'Many young people *move away*.', 'Ko‘p yoshlar ko‘chib ketadi.', 'package'],
      ['relocate', '/ˌriːləʊˈkeɪt/', 'ko‘chib o‘tmoq (ish uchun)', 'Her firm *relocated* to Tashkent.', 'Uning firmasi Toshkentga ko‘chib o‘tdi.', 'package'],
      ['flourish', '/ˈflʌrɪʃ/', 'gullab-yashnamoq', 'Business *flourishes* in the city.', 'Biznes shaharda gullab-yashnaydi.', 'blossom'],
      ['miss out on', '/mɪs aʊt ɒn/', 'imkoniyatdan quruq qolmoq', 'You *miss out on* a lot in the country.', 'Qishloqda ko‘p narsadan quruq qolasiz.', 'cross-mark'],
      ['get away from it all', '/ɡet əˈweɪ frɒm ɪt ɔːl/', 'hamma narsadan uzoqlashmoq', 'I want to *get away from it all*.', 'Hamma narsadan uzoqlashmoqchiman.', 'sunrise-over-mountains'],
      ['bring up', '/brɪŋ ʌp/', 'tarbiyalab katta qilmoq', 'She was *brought up* by her grandparents.', 'Uni bobo-buvisi tarbiyalab katta qilgan.', 'seedling'],
      ['put up with', '/pʊt ʌp wɪð/', 'chidamoq', 'I can’t *put up with* the noise.', 'Shovqinga chidolmayman.', 'ear']
    ] },
    { g: 'adj', t: 'Sifat va ravishlar', w: [
      ['rural', '/ˈrʊərəl/', 'qishloq', 'It’s a *rural* area.', 'Bu qishloq hududi.', 'house-with-garden'],
      ['urban', '/ˈɜːbən/', 'shahar', '*Urban* life is fast.', 'Shahar hayoti tez.', 'cityscape'],
      ['isolated', '/ˈaɪsəleɪtɪd/', 'yakkalangan', 'The village is very *isolated*.', 'Qishloq juda yakkalangan.', 'mountain'],
      ['bustling', '/ˈbʌslɪŋ/', 'gavjum, shov-shuvli', 'We walked through the *bustling* market.', 'Gavjum bozor bo‘ylab yurdik.', 'busts-in-silhouette'],
      ['tranquil', '/ˈtræŋkwɪl/', 'sokin', 'It’s a *tranquil* place.', 'Bu sokin joy.', 'dove'],
      ['cosmopolitan', '/ˌkɒzməˈpɒlɪtən/', 'ko‘p millatli', 'Tashkent is a *cosmopolitan* city.', 'Toshkent ko‘p millatli shahar.', 'globe-showing-europe-africa'],
      ['sparsely', '/ˈspɑːsli/', 'siyrak', 'The region is *sparsely* populated.', 'Mintaqa siyrak joylashgan.', 'desert'],
      ['densely', '/ˈdensli/', 'zich', 'The area is *densely* populated.', 'Hudud zich joylashgan.', 'busts-in-silhouette']
    ] },
    { g: 'idiom', t: 'Iboralar', w: [
      ['the middle of nowhere', '/ðə ˈmɪdl əv ˈnəʊweə/', 'olis yerda', 'They live in *the middle of nowhere*.', 'Ular olis yerda yashaydi.', 'desert'],
      ['a concrete jungle', '/ə ˈkɒŋkriːt ˈdʒʌŋɡl/', 'beton o‘rmon', 'The city is *a concrete jungle*.', 'Shahar beton o‘rmon.', 'office-building'],
      ['the big smoke', '/ðə bɪɡ sməʊk/', 'katta shahar (so‘zlashuv)', 'He moved to *the big smoke*.', 'U katta shaharga ko‘chib ketdi.', 'cityscape'],
      ['out in the sticks', '/aʊt ɪn ðə stɪks/', 'qishloq tubida', 'She lives *out in the sticks*.', 'U qishloq tubida yashaydi.', 'deciduous-tree'],
      ['hustle and bustle', '/ˈhʌsl ənd ˈbʌsl/', 'shovqin-suron', 'I miss the *hustle and bustle*.', 'Shovqin-suronni sog‘inaman.', 'busts-in-silhouette']
    ] }
  ],
  A: [{
    k: 'Hikoya', t: 'Two Brothers, Two Worlds', s: 'Bir oiladan chiqqan ikki aka-uka: biri shaharda, biri qishloqda',
    p: [
      ['Anvar and Bobur grew up in the same family, but their lives were very different. Anvar loved the [rural] life. He lived in a [cottage] in the [countryside], next to an [orchard] and a [meadow]. His neighbours worked on [farmland] and kept [livestock]. At [harvest] time everybody helped, and Anvar drove his father’s [tractor]. “I can breathe [fresh air|fresh air] here,” he said, “and I never feel [isolated].”',
       'Anvar va Bobur bir oilada katta bo‘lishdi, lekin hayotlari juda boshqacha edi. Anvar qishloq hayotini yaxshi ko‘rardi. U qishloq joyda, meva bog‘i va o‘tloq yonidagi uychada yashardi. Qo‘shnilari ekin yerlarida ishlab, chorva boqardi. Hosil vaqtida hamma yordam berar, Anvar esa otasining traktorini haydardi. «Bu yerda toza havodan nafas olaman, — derdi u, — va hech qachon o‘zimni yakkalangan his qilmayman.»'],
      ['His brother Bobur, on the other hand, chose [urban] life. He decided to [move away|move away] and [settle down|settle down] in a [cosmopolitan] city where there were [skyscrapers|skyscraper] and [bustling] streets. He lived in a [housing estate] near [downtown]. “The [nightlife] is amazing,” he said, “and there is always something happening.” But the [cost of living] was high, and [overcrowding] made the metro unbearable at rush hour.',
       'Uning akasi Bobur esa shahar hayotini tanladi. U ko‘chib ketib, osmono‘par binolar va gavjum ko‘chalari bor ko‘p millatli shaharda joylashishga qaror qildi. U shahar markazi yaqinidagi turar-joy massivida yashardi. «Tungi hayot ajoyib, — derdi u, — va doim biror voqea bo‘lib turadi.» Lekin yashash narxi baland edi va haddan ortiq gavjumlik gavjum soatda metroni chidab bo‘lmas qilardi.'],
      ['Bobur had to [relocate] twice for work. He couldn’t [put up with|put up with] the noise, and he sometimes wanted to [get away from it all|get away from it all]. “The city is [a concrete jungle|a concrete jungle],” he complained, “and everyone is in the [rat race|rat race].” But he also knew that business could [flourish] in the city, and that the [infrastructure] and [amenities] gave him many opportunities. In the countryside, he thought, one could [miss out on|miss out on] a lot.',
       'Bobur ish uchun ikki marta ko‘chishga majbur bo‘ldi. U shovqinga chiday olmasdi va ba’zan hamma narsadan uzoqlashishni xohlardi. «Shahar — beton o‘rmon, — shikoyat qildi u, — va hamma tinimsiz musobaqada.» Lekin u biznes shaharda gullab-yashnashi mumkinligini va infratuzilma hamda qulayliklar unga ko‘p imkoniyat berishini ham bilardi. Qishloqda, deb o‘ylardi u, ko‘p narsadan quruq qolish mumkin.'],
      ['One summer Bobur visited Anvar “[out in the sticks]”, as he joked. He found a [tranquil] place where people lived [sparsely] spread across fields, peacefully, and no one was in a hurry. After a week he missed the [hustle and bustle|hustle and bustle], and Anvar missed the library. “We need both,” they decided. So Anvar now visits the city once a month, and Bobur [brought up|bring up] again a little, spending every holiday in the [middle of nowhere|the middle of nowhere].',
       'Bir yozda Bobur Anvarnikiga, o‘zi hazillashganidek, qishloq tubiga bordi. U odamlar dalalar bo‘ylab siyrak, tinch yashaydigan sokin joyni topdi, hech kim shoshmasdi. Bir haftadan keyin u shovqin-suronni sog‘indi, Anvar esa kutubxonani sog‘indi. «Bizga ikkalasi ham kerak», deb qaror qilishdi. Endi Anvar oyiga bir marta shaharga boradi, Bobur esa yana biroz «katta bo‘lib», har bayramni olis yerda o‘tkazadi.'],
      ['Bobur, now a successful businessman, moved to [the big smoke|the big smoke] years ago. The city is [densely] populated, and he works in an office with a view of the river.',
       'Bobur, endi muvaffaqiyatli tadbirkor, yillar oldin katta shaharga ko‘chib ketgan. Shahar zich joylashgan va u daryo ko‘rinib turgan ofisda ishlaydi.']
    ],
    q: [
      ['Where did Anvar live?', ['In a cottage in the countryside', 'In a flat downtown', 'Abroad'], 0],
      ['What did Bobur like about the city?', ['The nightlife', 'The farmland', 'The silence'], 0],
      ['What was Bobur’s problem?', ['The cost of living and overcrowding', 'The animals', 'The weather'], 0],
      ['What did Bobur miss in the village?', ['The hustle and bustle', 'His car', 'His job'], 0],
      ['What did they decide?', ['They need both', 'Anvar will move', 'Bobur will quit'], 0]
    ]
  }],
  vt: {
    wf: [
      ['urban', [['urbanisation', 'urbanizatsiya'], ['suburban', 'shahar chekkasi'], ['urbanise', 'shaharlashtirmoq']], '*Urbanisation* is growing.'],
      ['rural', [['ruralise', 'qishloqlashtirmoq'], ['rurality', 'qishloq xususiyati'], ['rurally', 'qishloq usulida']], 'The area is *rural*.'],
      ['populate', [['population', 'aholi'], ['populated', 'aholi yashaydigan'], ['overpopulated', 'aholi haddan ortiq']], 'The city is *overpopulated*.'],
      ['agriculture', [['agricultural', 'qishloq xo‘jaligi'], ['agriculturalist', 'agronom'], ['agribusiness', 'agrobiznes']], '*Agricultural* land is rich.']
    ],
    col: [['live in the countryside', 'qishloqda yashamoq', 'They *live in the countryside*.'], ['lead a busy life', 'band hayot kechirmoq', 'He *leads a busy life*.'], ['enjoy the peace and quiet', 'tinchlikdan zavqlanmoq', 'I *enjoy the peace and quiet*.'], ['cost a fortune', 'juda qimmatga tushmoq', 'Flats here *cost a fortune*.']],
    pv: [['grow up', 'katta bo‘lmoq', 'I *grew up* in a village.'], ['move away', 'ko‘chib ketmoq', 'She *moved away*.'], ['settle down', 'joylashmoq', 'He wants to *settle down*.'], ['put up with', 'chidamoq', 'I can’t *put up with* it.']],
    use: [['village vs. town vs. city', 'village — qishloq; town — shaharcha; city — katta shahar.', ['a small *village*', 'a big *city*']],
          ['country vs. countryside', 'country — davlat; countryside — qishloq joy.', ['Uzbekistan is a *country*.', 'I live in the *countryside*.']]],
    syn: [['bustling', 'lively', 'quiet'], ['tranquil', 'peaceful', 'chaotic'], ['rural', 'rustic', 'urban'], ['isolated', 'remote', 'central']],
    ex: [['Tall buildings in a city are called ___ . (osmono‘par binolar)', 'skyscrapers'], ['The ___ was good this year — we collected a lot of wheat. (hosil)', 'harvest'], ['Rural areas are in the ___ . (qishloq joy)', 'countryside'], ['The ___ of living in big cities is high. (yashash narxi)', 'cost'], ['I need to ___ from it all. (uzoqlashmoq)', 'get away'], ['The village is far from everything — it is ___ . (yakkalangan)', 'isolated']]
  }
});

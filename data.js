// data.js

const japaneseVerbs = [
                    // --- TOP 50 VERBS ---

        { word: "行く", kana: "いく", meaning: "to go", type: "u-verb (special)", conjugations: { masu: "いきます", te: "いって", ta: "いった", nai: "いかない", masuNegative: "いきません", taNegative: "いかなかった", potential: "いける", volitional: "いこう", passive: "いかれる", causative: "いかせる", ba: "いけば", tara: "いったら", imperative: "いけ", desire: "いきたい", tsumori: "いく" }},

        { word: "食べる", kana: "たべる", meaning: "to eat", type: "ru-verb", conjugations: { masu: "たべます", te: "たべて", ta: "たべた", nai: "たべない", masuNegative: "たべません", taNegative: "たべなかった", potential: "たべられる", volitional: "たべよう", passive: "たべられる", causative: "たべさせる", ba: "たべれば", tara: "たべたら", imperative: "たべろ", desire: "たべたい", tsumori: "たべる" }},

        { word: "飲む", kana: "のむ", meaning: "to drink", type: "u-verb", conjugations: { masu: "のみます", te: "のんで", ta: "のんだ", nai: "のまない", masuNegative: "のみません", taNegative: "のまなかった", potential: "のめる", volitional: "のもう", passive: "のまれる", causative: "のませる", ba: "のめば", tara: "のんだら", imperative: "のめ", desire: "のみたい", tsumori: "のむ" }},

        { word: "する", kana: "する", meaning: "to do", type: "irregular", conjugations: { masu: "します", te: "して", ta: "した", nai: "しない", masuNegative: "しません", taNegative: "しなかった", potential: "できる", volitional: "しよう", passive: "される", causative: "させる", ba: "すれば", tara: "したら", imperative: "しろ", desire: "したい", tsumori: "する" }},

        { word: "来る", kana: "くる", meaning: "to come", type: "irregular", conjugations: { masu: "きます", te: "きて", ta: "きた", nai: "こない", masuNegative: "きません", taNegative: "こなかった", potential: "こられる", volitional: "こよう", passive: "こられる", causative: "こさせる", ba: "くれば", tara: "きたら", imperative: "こい", desire: "きたい", tsumori: "くる" }},

        { word: "書く", kana: "かく", meaning: "to write", type: "u-verb", conjugations: { masu: "かきます", te: "かいて", ta: "かいた", nai: "かかない", masuNegative: "かきません", taNegative: "かかなかった", potential: "かける", volitional: "かこう", passive: "かかれる", causative: "かかせる", ba: "かけば", tara: "かいたら", imperative: "かけ", desire: "かきたい", tsumori: "かく" }},

        { word: "読む", kana: "よむ", meaning: "to read", type: "u-verb", conjugations: { masu: "よみます", te: "よんで", ta: "よんだ", nai: "よまない", masuNegative: "よみません", taNegative: "よまなかった", potential: "よめる", volitional: "よもう", passive: "よまれる", causative: "よませる", ba: "よめば", tara: "よんだら", imperative: "よめ", desire: "よみたい", tsumori: "よむ" }},

        { word: "話す", kana: "はなす", meaning: "to speak", type: "u-verb", conjugations: { masu: "はなします", te: "はなして", ta: "はなした", nai: "はなさない", masuNegative: "はなしません", taNegative: "はなさなかった", potential: "はなせる", volitional: "はなそう", passive: "はなされる", causative: "はなさせる", ba: "はなせば", tara: "はなしたら", imperative: "はなせ", desire: "はなしたい", tsumori: "はなす" }},

        { word: "見る", kana: "みる", meaning: "to see", type: "ru-verb", conjugations: { masu: "みます", te: "みて", ta: "みた", nai: "みない", masuNegative: "みません", taNegative: "みなかった", potential: "みられる", volitional: "みよう", passive: "みられる", causative: "みさせる", ba: "みれば", tara: "みたら", imperative: "みろ", desire: "みたい", tsumori: "みる" }},

        { word: "買う", kana: "かう", meaning: "to buy", type: "u-verb", conjugations: { masu: "かいます", te: "かって", ta: "かった", nai: "かわない", masuNegative: "かいません", taNegative: "かわなかった", potential: "かえる", volitional: "かおう", passive: "かわれる", causative: "かわせる", ba: "かえば", tara: "かったら", imperative: "かえ", desire: "かきたい", tsumori: "かう" }},

        { word: "待つ", kana: "まつ", meaning: "to wait", type: "u-verb", conjugations: { masu: "まちます", te: "まって", ta: "まった", nai: "またない", masuNegative: "まちません", taNegative: "またなかった", potential: "まてる", volitional: "まとう", passive: "またれる", causative: "またせる", ba: "まてば", tara: "まったら", imperative: "まて", desire: "まちたい", tsumori: "まつ" }},

		{ word: "帰る", kana: "かえる", meaning: "to return (home)", type: "u-verb", conjugations: { masu: "かえります", te: "かえって", ta: "かえった", nai: "かえらない", masuNegative: "かえりません", taNegative: "かえらなかった", potential: "かえれる", volitional: "かえろう", passive: "かえられる", causative: "かえらせる", ba: "かえれば", tara: "かえったら", imperative: "かえ", desire: "かえりたい", tsumori: "かえる" }},

        { word: "遊ぶ", kana: "あそぶ", meaning: "to play", type: "u-verb", conjugations: { masu: "あそびます", te: "あそんで", ta: "あそんだ", nai: "あそばない", masuNegative: "あそびません", taNegative: "あそばなかった", potential: "あそべる", volitional: "あそぼう", passive: "あそばれる", causative: "あそばせる", ba: "あそべば", tara: "あそんだら", imperative: "あそべ", desire: "あそびたい", tsumori: "あそぶ" }},

        { word: "急ぐ", kana: "いそぐ", meaning: "to hurry", type: "u-verb", conjugations: { masu: "いそぎます", te: "いそいで", ta: "いそいだ", nai: "いそがない", masuNegative: "いそぎません", taNegative: "いそがなかった", potential: "いそげる", volitional: "いそごう", passive: "いそがれる", causative: "いそがせる", ba: "いそげば", tara: "いそいだら", imperative: "いそげ", desire: "いそぎたい", tsumori: "いそぐ" }},

        { word: "死ぬ", kana: "しぬ", meaning: "to die", type: "u-verb", conjugations: { masu: "しにます", te: "しんで", ta: "しんだ", nai: "しなない", masuNegative: "しにません", taNegative: "しなかった", potential: "しねる", volitional: "しのお", passive: "しなれる", causative: "しなせる", ba: "しねば", tara: "しんだら", imperative: "しね", desire: "しにたい", tsumori: "しぬ" }},

        { word: "立つ", kana: "たつ", meaning: "to stand", type: "u-verb", conjugations: { masu: "たちます", te: "たって", ta: "たった", nai: "たたない", masuNegative: "たちません", taNegative: "たたなかった", potential: "たてる", volitional: "たとう", passive: "たたれる", causative: "たたせる", ba: "たてば", tara: "たったら", imperative: "たて", desire: "たちたい", tsumori: "たつ" }},

        { word: "貸す", kana: "かす", meaning: "to lend", type: "u-verb", conjugations: { masu: "かします", te: "かして", ta: "かした", nai: "かさない", masuNegative: "かしまません", taNegative: "かさなかった", potential: "かせる", volitional: "かそう", passive: "かされる", causative: "かさせる", ba: "かせば", tara: "かしたら", imperative: "かせ", desire: "かしたい", tsumori: "かす" }},

        { word: "教える", kana: "おしえる", meaning: "to teach", type: "ru-verb", conjugations: { masu: "おしえます", te: "おしえて", ta: "おしえた", nai: "おしえない", masuNegative: "おしえません", taNegative: "おしえなかった", potential: "おしえられる", volitional: "おしえよう", passive: "おしえられる", causative: "おしえさせる", ba: "おしえれば", tara: "おしえたら", imperative: "おしえろ", desire: "おしえたい", tsumori: "おしえる" }},

        { word: "寝る", kana: "ねる", meaning: "to sleep", type: "ru-verb", conjugations: { masu: "ねます", te: "ねて", ta: "ねた", nai: "ねない", masuNegative: "ねません", taNegative: "ねなかった", potential: "ねられる", volitional: "ねよう", passive: "ねられる", causative: "ねさせる", ba: "ねれば", tara: "ねたら", imperative: "ねろ", desire: "ねたい", tsumori: "ねる" }},

        { word: "聞く", kana: "きく", meaning: "to listen, to hear", type: "u-verb", conjugations: { masu: "ききます", te: "きいて", ta: "きいた", nai: "きかない", masuNegative: "ききません", taNegative: "きかなかった", potential: "きける", volitional: "きこう", passive: "きかれる", causative: "きかせる", ba: "きけば", tara: "きいたら", imperative: "きけ", desire: "ききたい", tsumori: "きく" }},

        { word: "分かる", kana: "わかる", meaning: "to understand", type: "u-verb", conjugations: { masu: "わかります", te: "わかって", ta: "わかった", nai: "わからない", masuNegative: "わかりません", taNegative: "わからなかった", potential: "わかる", volitional: "わかろう", passive: "わかられる", causative: "わからせる", ba: "わかれば", tara: "わかったら", imperative: "わかれ", desire: "わかりたい", tsumori: "わかる" }},

        { word: "いる", kana: "いる", meaning: "to exist (animate)", type: "ru-verb", conjugations: { masu: "います", te: "いて", ta: "いた", nai: "いない", masuNegative: "いません", taNegative: "いなかった", potential: "いられる", volitional: "いよう", passive: "いられる", causative: "いさせる", ba: "いれば", tara: "いたら", imperative: "いろ", desire: "いたい", tsumori: "いる" }},

        { word: "ある", kana: "ある", meaning: "to exist (inanimate)", type: "u-verb", conjugations: { masu: "あります", te: "あって", ta: "あった", nai: "ない", masuNegative: "ありません", taNegative: "なかった", potential: "ある", volitional: "あろう", passive: "あられる", causative: "あらせる", ba: "あれば", tara: "あったら", imperative: "あれ", desire: "ありたい", tsumori: "ある" }},

        { word: "起きる", kana: "おきる", meaning: "to wake up", type: "ru-verb", conjugations: { masu: "おきます", te: "おきて", ta: "おきた", nai: "おきない", masuNegative: "おきません", taNegative: "おきなかった", potential: "おきられる", volitional: "おきよう", passive: "おきられる", causative: "おきさせる", ba: "おきれば", tara: "おきたら", imperative: "おきろ", desire: "おきたい", tsumori: "おきる" }},

        { word: "働く", kana: "はたらく", meaning: "to work", type: "u-verb", conjugations: { masu: "はたらきます", te: "はたらいて", ta: "はたらいた", nai: "はたらかない", masuNegative: "はたらきません", taNegative: "はたらかかった", potential: "はたらける", volitional: "はたらこう", passive: "はたらかれる", causative: "はたらかせる", ba: "はたらけば", tara: "はたらいたら", imperative: "はたらけ", desire: "はたらきたい", tsumori: "はたらく" }},

        { word: "使う", kana: "つかう", meaning: "to use", type: "u-verb", conjugations: { masu: "つかいます", te: "つかって", ta: "つかった", nai: "つかわない", masuNegative: "つかいません", taNegative: "つかわなかった", potential: "つかえる", volitional: "つかおう", passive: "つかわれる", causative: "つかわせる", ba: "つかえば", tara: "つかったら", imperative: "つかえ", desire: "つかいたい", tsumori: "つかう" }},

        { word: "作る", kana: "つくる", meaning: "to make", type: "u-verb", conjugations: { masu: "つくります", te: "つくって", ta: "つくった", nai: "つくらない", masuNegative: "つくりません", taNegative: "つくらなかった", potential: "つくれる", volitional: "つくろう", passive: "つくられる", causative: "つくらせる", ba: "つくれば", tara: "つくったら", imperative: "つくれ", desire: "つくりたい", tsumori: "つくる" }},

        { word: "出す", kana: "だす", meaning: "to take out", type: "u-verb", conjugations: { masu: "だします", te: "だして", ta: "だした", nai: "ださない", masuNegative: "だしません", taNegative: "ださなかった", potential: "だせる", volitional: "だそう", passive: "だされる", causative: "ださせる", ba: "だせば", tara: "だしたら", imperative: "だせ", desire: "だしたい", tsumori: "だす" }},

        { word: "入る", kana: "はいる", meaning: "to enter", type: "u-verb", conjugations: { masu: "はいります", te: "はいって", ta: "はいった", nai: "はいらない", masuNegative: "はいりません", taNegative: "はいらなかった", potential: "はいれる", volitional: "はいろう", passive: "はいられる", causative: "はいらせる", ba: "はいれば", tara: "はいったら", imperative: "はいれ", desire: "はいりたい", tsumori: "はいる" }},

        { word: "泳ぐ", kana: "およぐ", meaning: "to swim", type: "u-verb", conjugations: { masu: "およぎます", te: "およいで", ta: "およいだ", nai: "およがない", masuNegative: "およぎません", taNegative: "およがなかった", potential: "およげる", volitional: "およごう", passive: "およがれる", causative: "およがせる", ba: "およげば", tara: "およいだら", imperative: "およげ", desire: "およぎたい", tsumori: "およぐ" }},

        { word: "乗る", kana: "のる", meaning: "to ride", type: "u-verb", conjugations: { masu: "のります", te: "のって", ta: "のった", nai: "のらない", masuNegative: "のりません", taNegative: "のらなかった", potential: "のれる", volitional: "のろう", passive: "のられる", causative: "のらせる", ba: "のれば", tara: "のったら", imperative: "のれ", desire: "のりたい", tsumori: "のる" }},

        { word: "撮る", kana: "とる", meaning: "to take (a photo)", type: "u-verb", conjugations: { masu: "とります", te: "とって", ta: "とった", nai: "とらない", masuNegative: "とりません", taNegative: "とらなかった", potential: "とれる", volitional: "とろう", passive: "とられる", causative: "とらせる", ba: "とれば", tara: "とったら", imperative: "とれ", desire: "とりたい", tsumori: "とる" }},

        { word: "始める", kana: "はじめる", meaning: "to begin", type: "ru-verb", conjugations: { masu: "はじめます", te: "はじめて", ta: "はじめた", nai: "はじめない", masuNegative: "はじめません", taNegative: "はじめなかった", potential: "はじめられる", volitional: "はじめよう", passive: "はじめられる", causative: "はじめさせる", ba: "はじめれば", tara: "はじめたら", imperative: "はじめろ", desire: "はじめたい", tsumori: "はじめる" }},

        { word: "終わる", kana: "おわる", meaning: "to end", type: "u-verb", conjugations: { masu: "おわります", te: "おわって", ta: "おわった", nai: "おわらない", masuNegative: "おわりません", taNegative: "おわらなかった", potential: "おわれる", volitional: "おわろう", passive: "おわられる", causative: "おわらせる", ba: "おわれば", tara: "おわったら", imperative: "おわれ", desire: "おわりたい", tsumori: "おわる" }},

        { word: "入れる", kana: "いれる", meaning: "to put in", type: "ru-verb", conjugations: { masu: "いれます", te: "いれて", ta: "いれた", nai: "いれない", masuNegative: "いれません", taNegative: "いれなかった", potential: "いれられる", volitional: "いれよう", passive: "いれられる", causative: "いれさせる", ba: "いれれば", tara: "いれたら", imperative: "いれろ", desire: "いれたい", tsumori: "いれる" }},

        { word: "消す", kana: "けす", meaning: "to turn off", type: "u-verb", conjugations: { masu: "けします", te: "けして", ta: "けした", nai: "けさない", masuNegative: "けしません", taNegative: "けさなかった", potential: "けせる", volitional: "けそう", passive: "けされる", causative: "けさせる", ba: "けせば", tara: "けしたら", imperative: "けせ", desire: "けしたい", tsumori: "けす" }},

        { word: "開ける", kana: "あける", meaning: "to open", type: "ru-verb", conjugations: { masu: "あけます", te: "あけて", ta: "あけた", nai: "あけない", masuNegative: "あけません", taNegative: "あけなかった", potential: "あけられる", volitional: "あけよう", passive: "あけられる", causative: "あけさせる", ba: "あければ", tara: "あけたら", imperative: "あけろ", desire: "あけたい", tsumori: "あける" }},

        { word: "閉める", kana: "しめる", meaning: "to close", type: "ru-verb", conjugations: { masu: "しめます", te: "しめて", ta: "しめた", nai: "しめない", masuNegative: "しめません", taNegative: "しめなかった", potential: "しめられる", volitional: "しめよう", passive: "しめられる", causative: "しめさせる", ba: "しめれば", tara: "しめたら", imperative: "しめろ", desire: "しめたい", tsumori: "しめる" }},

        { word: "住む", kana: "すむ", meaning: "to live, to reside", type: "u-verb", conjugations: { masu: "すみます", te: "すんで", ta: "すんだ", nai: "すまない", masuNegative: "すみません", taNegative: "すまなかった", potential: "すめる", volitional: "すもう", passive: "すまれる", causative: "すませる", ba: "すめば", tara: "すんだら", imperative: "すめ", desire: "すみたい", tsumori: "すむ" }},

        { word: "座る", kana: "すわる", meaning: "to sit", type: "u-verb", conjugations: { masu: "すわります", te: "すわって", ta: "すわった", nai: "すわらない", masuNegative: "すわりません", taNegative: "すわらなかった", potential: "すわれる", volitional: "すわろう", passive: "すわられる", causative: "すわらせる", ba: "すわれば", tara: "すわったら", imperative: "すわれ", desire: "すわりたい", tsumori: "すわる" }},

        { word: "送る", kana: "おくる", meaning: "to send", type: "u-verb", conjugations: { masu: "おくります", te: "おくって", ta: "おくった", nai: "おくらない", masuNegative: "おくりません", taNegative: "おくらなかった", potential: "おくれる", volitional: "おくろう", passive: "おくれる", causative: "おくらさせる", ba: "おくれば", tara: "おくったら", imperative: "おくれ", desire: "おくりたい", tsumori: "おくる" }},

        { word: "払う", kana: "はらう", meaning: "to pay", type: "u-verb", conjugations: { masu: "はらいます", te: "はらって", ta: "はらった", nai: "はらわない", masuNegative: "はらいません", taNegative: "はらわなかった", potential: "はらえる", volitional: "はらおう", passive: "はらわれる", causative: "はらわせる", ba: "はらえば", tara: "はらったら", imperative: "はらえ", desire: "はらいたい", tsumori: "はらう" }},

        { word: "呼ぶ", kana: "よぶ", meaning: "to call", type: "u-verb", conjugations: { masu: "よびます", te: "よんで", ta: "よんだ", nai: "よばない", masuNegative: "よびません", taNegative: "よばなかった", potential: "よべる", volitional: "よぼう", passive: "よばれる", causative: "よばせる", ba: "よべば", tara: "よんだら", imperative: "よべ", desire: "よびたい", tsumori: "よぶ" }},

        { word: "売る", kana: "うる", meaning: "to sell", type: "u-verb", conjugations: { masu: "うります", te: "うって", ta: "うった", nai: "うらない", masuNegative: "うりません", taNegative: "うらなかった", potential: "うれる", volitional: "うろう", passive: "うられる", causative: "うらせる", ba: "うれば", tara: "うったら", imperative: "うれ", desire: "うりたい", tsumori: "うる" }},

        { word: "知る", kana: "しる", meaning: "to know", type: "u-verb", conjugations: { masu: "しります", te: "しって", ta: "しった", nai: "しらない", masuNegative: "しりません", taNegative: "しらなかった", potential: "しれる", volitional: "しろう", passive: "しられる", causative: "しらせる", ba: "しれば", tara: "しったら", imperative: "しれ", desire: "しりたい", tsumori: "しる" }},

        { word: "学ぶ", kana: "まなぶ", meaning: "to learn", type: "u-verb", conjugations: { masu: "まなびます", te: "まなんで", ta: "まなんだ", nai: "まなばない", masuNegative: "まなびません", taNegative: "まなばなかった", potential: "まなべる", volitional: "まなぼう", passive: "まなばれる", causative: "まなばせる", ba: "まなべば", tara: "まなんだら", imperative: "まなべ", desire: "まなびたい", tsumori: "まなぶ" }},

        { word: "忘れる", kana: "わすれる", meaning: "to forget", type: "ru-verb", conjugations: { masu: "わすれます", te: "わすれて", ta: "わすれた", nai: "わすれない", masuNegative: "わすれません", taNegative: "わすれなかった", potential: "わすれられる", volitional: "わすれよう", passive: "わすれられる", causative: "わすれさせる", ba: "わすれれば", tara: "わすれたら", imperative: "わすれろ", desire: "わすれたい", tsumori: "わすれる" }},

        { word: "覚える", kana: "おぼえる", meaning: "to remember", type: "ru-verb", conjugations: { masu: "おぼえます", te: "おぼえて", ta: "おぼえた", nai: "おぼえない", masuNegative: "おぼえません", taNegative: "おぼえなかった", potential: "おぼえられる", volitional: "おぼえよう", passive: "おぼえられる", causative: "おぼえさせる", ba: "おぼえれば", tara: "おぼえたら", imperative: "おぼえろ", desire: "おぼえたい", tsumori: "おぼえる" }},

        { word: "もらう", kana: "もらう", meaning: "to receive", type: "u-verb", conjugations: { masu: "もらいます", te: "もらって", ta: "もらった", nai: "もらわない", masuNegative: "もらいません", taNegative: "もらわなかった", potential: "もらえる", volitional: "もらおう", passive: "もらえる", causative: "もらわせる", ba: "もらえば", tara: "もらった", imperative: "もらえ", desire: "もらいたい", tsumori: "もらう" }},

        { word: "あげる", kana: "あげる", meaning: "to give", type: "ru-verb", conjugations: { masu: "あげます", te: "あげて", ta: "あげた", nai: "あげない", masuNegative: "あげません", taNegative: "あげなかった", potential: "あげられる", volitional: "あげよう", passive: "あげられる", causative: "あげさせる", ba: "あげれば", tara: "あげたら", imperative: "あげろ", desire: "あげたい", tsumori: "あげる" }},



        // --- ADDITIONAL VERBS ---

        { word: "思う", kana: "おもう", meaning: "to think", type: "u-verb", conjugations: { masu: "おもいます", te: "おもって", ta: "おもった", nai: "おもわない", masuNegative: "おもいません", taNegative: "おもわなかった", potential: "おもえる", volitional: "おもおう", passive: "おもわれる", causative: "おもわせる", ba: "おもえば", tara: "おもったら", imperative: "おもえ", desire: "おもいたい", tsumori: "おもう" }},

        { word: "走る", kana: "はしる", meaning: "to run", type: "u-verb", conjugations: { masu: "はしります", te: "はしって", ta: "はしった", nai: "はしらない", masuNegative: "はしりません", taNegative: "はしらなかった", potential: "はしれる", volitional: "はしろう", passive: "はしられる", causative: "はしらせる", ba: "はしれば", tara: "はしったら", imperative: "はしれ", desire: "はしりたい", tsumori: "はしる" }},

        { word: "歩く", kana: "あるく", meaning: "to walk", type: "u-verb", conjugations: { masu: "あるきます", te: "あるいて", ta: "あるいた", nai: "あるかない", masuNegative: "あるきません", taNegative: "あるかなかった", potential: "あるける", volitional: "あるこう", passive: "あるかれる", causative: "あるかせる", ba: "あるけば", tara: "あるいたら", imperative: "あるけ", desire: "あるきたい", tsumori: "ある" }},

        { word: "飛ぶ", kana: "とぶ", meaning: "to fly, to jump", type: "u-verb", conjugations: { masu: "とびます", te: "とんで", ta: "とんだ", nai: "とばない", masuNegative: "とびません", taNegative: "とばなかった", potential: "とべる", volitional: "とぼう", passive: "とばれる", causative: "とばせる", ba: "とべば", tara: "とんだら", imperative: "とべ", desire: "とびたい", tsumori: "とぶ" }},

        { word: "泣く", kana: "なく", meaning: "to cry", type: "u-verb", conjugations: { masu: "なきます", te: "ないて", ta: "ないた", nai: "なかない", masuNegative: "なきません", taNegative: "なかなかった", potential: "なける", volitional: "なこう", passive: "なかれる", causative: "なかせる", ba: "なけば", tara: "ないたら", imperative: "なけ", desire: "なきたい", tsumori: "なく" }},

        { word: "笑う", kana: "わらう", meaning: "to laugh", type: "u-verb", conjugations: { masu: "わらいます", te: "わらって", ta: "わらった", nai: "わらわない", masuNegative: "わらいません", taNegative: "わらわなかった", potential: "わらえる", volitional: "わらおう", passive: "わらわれる", causative: "わらわせる", ba: "わらえば", tara: "わらったら", imperative: "わらえ", desire: "わらいたい", tsumori: "わらう" }},

        { word: "怒る", kana: "おこる", meaning: "to get angry", type: "u-verb", conjugations: { masu: "おこります", te: "おこって", ta: "おこった", nai: "おこらない", masuNegative: "おこりません", taNegative: "おこらなかった", potential: "おこれる", volitional: "おころう", passive: "おこられる", causative: "おこらせる", ba: "おこれば", tara: "おこったら", imperative: "おこれ", desire: "おこりたい", tsumori: "おこる" }},

        { word: "歌う", kana: "うたう", meaning: "to sing", type: "u-verb", conjugations: { masu: "うたいます", te: "うたって", ta: "うたった", nai: "うたわない", masuNegative: "うたいません", taNegative: "うたわなかった", potential: "うたえる", volitional: "うたおう", passive: "うたわれる", causative: "うたわせる", ba: "うたえば", tara: "うたったら", imperative: "うたえ", desire: "うたいたい", tsumori: "うたう" }},

        { word: "踊る", kana: "おどる", meaning: "to dance", type: "u-verb", conjugations: { masu: "おどります", te: "おどって", ta: "おどった", nai: "おどらない", masuNegative: "おどりません", taNegative: "おどらなかった", potential: "おどれる", volitional: "おどろう", passive: "おどられる", causative: "おどらせる", ba: "おどれば", tara: "おどったら", imperative: "おどれ", desire: "おどりたい", tsumori: "おどる" }},

        { word: "洗う", kana: "あらう", meaning: "to wash", type: "u-verb", conjugations: { masu: "あらいます", te: "あらって", ta: "あらった", nai: "あらわない", masuNegative: "あらいません", taNegative: "あらわなかった", potential: "あらえる", volitional: "あらおう", passive: "あらわれる", causative: "あらわせる", ba: "あらえば", tara: "あらったら", imperative: "あらえ", desire: "あらいたい", tsumori: "あらう" }},

        { word: "引く", kana: "ひく", meaning: "to pull", type: "u-verb", conjugations: { masu: "ひきます", te: "ひいて", ta: "ひいた", nai: "ひかない", masuNegative: "ひきません", taNegative: "ひかなかった", potential: "ひける", volitional: "ひこう", passive: "ひかれる", causative: "ひかせる", ba: "ひけば", tara: "ひいたら", imperative: "ひけ", desire: "ひきたい", tsumori: "ひく" }},

        { word: "押す", kana: "おす", meaning: "to push", type: "u-verb", conjugations: { masu: "おします", te: "おして", ta: "おした", nai: "おさない", masuNegative: "おしません", taNegative: "おさなかった", potential: "おせる", volitional: "おそう", passive: "おされる", causative: "おさせる", ba: "おせば", tara: "おしたら", imperative: "おせ", desire: "おしたい", tsumori: "おす" }},

        { word: "切る", kana: "きる", meaning: "to cut", type: "u-verb", conjugations: { masu: "きります", te: "きって", ta: "きった", nai: "きらない", masuNegative: "きりません", taNegative: "きらなかった", potential: "きれる", volitional: "きろう", passive: "きられる", causative: "きらせる", ba: "きれば", tara: "きったら", imperative: "きれ", desire: "きりたい", tsumori: "きる" }},

        { word: "入れる", kana: "いれる", meaning: "to put in", type: "ru-verb", conjugations: { masu: "いれます", te: "いれて", ta: "いれた", nai: "いれない", masuNegative: "いれません", taNegative: "いれなかった", potential: "いれられる", volitional: "いれよう", passive: "いれられる", causative: "いれさせる", ba: "いれれば", tara: "いれたら", imperative: "いれろ", desire: "いれたい", tsumori: "いれる" }},

        { word: "出る", kana: "でる", meaning: "to go out", type: "ru-verb", conjugations: { masu: "でます", te: "でて", ta: "でた", nai: "でない", masuNegative: "でません", taNegative: "でなかった", potential: "でられる", volitional: "でよう", passive: "でられる", causative: "でさせる", ba: "でれば", tara: "でたら", imperative: "でろ", desire: "でたい", tsumori: "でる" }},

        { word: "開く", kana: "ひらく", meaning: "to open (a book, event)", type: "u-verb", conjugations: { masu: "ひらきます", te: "ひらいて", ta: "ひらいた", nai: "ひらかない", masuNegative: "ひらきません", taNegative: "ひらかかった", potential: "ひらける", volitional: "ひらこう", passive: "ひらかれる", causative: "ひらかせる", ba: "ひらけば", tara: "ひらいたら", imperative: "ひらけ", desire: "ひらきたい", tsumori: "ひらく" }},

        { word: "閉まる", kana: "しまる", meaning: "to close (intransitive)", type: "u-verb", conjugations: { masu: "しまります", te: "しまって", ta: "しまった", nai: "しまらない", masuNegative: "しまりません", taNegative: "しまらなかった", potential: "しまれる", volitional: "しまろう", passive: "しまられる", causative: "しまらせる", ba: "しまれば", tara: "しまったら", imperative: "しまれ", desire: "しまりたい", tsumori: "しまる" }},

        { word: "着る", kana: "きる", meaning: "to wear (above waist)", type: "ru-verb", conjugations: { masu: "きます", te: "きて", ta: "きた", nai: "きない", masuNegative: "きません", taNegative: "きなかった", potential: "きられる", volitional: "きよう", passive: "きられる", causative: "きさせる", ba: "きれば", tara: "きたら", imperative: "きろ", desire: "きたい", tsumori: "きる" }},

        { word: "履く", kana: "はく", meaning: "to wear (below waist)", type: "u-verb", conjugations: { masu: "はきます", te: "はいて", ta: "はいた", nai: "はかない", masuNegative: "はきません", taNegative: "はかなかった", potential: "はける", volitional: "はこう", passive: "はかれる", causative: "はかせる", ba: "はけば", tara: "はいたら", imperative: "はけ", desire: "はきたい", tsumori: "はく" }},

        { word: "かぶる", kana: "かぶる", meaning: "to wear (on head)", type: "u-verb", conjugations: { masu: "かぶります", te: "かぶって", ta: "かぶった", nai: "かぶらない", masuNegative: "かぶりません", taNegative: "かぶらなかった", potential: "かぶれる", volitional: "かぶろう", passive: "かぶられる", causative: "かぶらせる", ba: "かぶれば", tara: "かぶったら", imperative: "かぶれ", desire: "かぶりたい", tsumori: "かぶる" }},

        { word: "習う", kana: "ならう", meaning: "to learn (a skill)", type: "u-verb", conjugations: { masu: "ならいます", te: "ならって", ta: "ならった", nai: "ならわない", masuNegative: "ならいません", taNegative: "ならわなかった", potential: "ならえる", volitional: "ならおう", passive: "ならわれる", causative: "ならわせる", ba: "ならえば", tara: "ならったら", imperative: "ならえ", desire: "ならいたい", tsumori: "ならう" }},

        { word: "休む", kana: "やすむ", meaning: "to rest", type: "u-verb", conjugations: { masu: "やすみます", te: "やすんで", ta: "やすんだ", nai: "やすまない", masuNegative: "やすみません", taNegative: "やすまなかった", potential: "やすめる", volitional: "やすもう", passive: "やすまれる", causative: "やすませる", ba: "やすめば", tara: "やすんだら", imperative: "やすめ", desire: "やすみたい", tsumori: "やすむ" }},

        { word: "借りる", kana: "かりる", meaning: "to borrow", type: "ru-verb", conjugations: { masu: "かります", te: "かりて", ta: "かりた", nai: "かりない", masuNegative: "かりません", taNegative: "かりなかった", potential: "かりられる", volitional: "かりよう", passive: "かりられる", causative: "かりさせる", ba: "かりれば", tara: "かりたら", imperative: "かりろ", desire: "かりたい", tsumori: "かりる" }},

        { word: "返す", kana: "かえす", meaning: "to return (an item)", type: "u-verb", conjugations: { masu: "かえします", te: "かえして", ta: "かえした", nai: "かえさない", masuNegative: "かえしません", taNegative: "かえさなかった", potential: "かえせる", volitional: "かえそう", passive: "かえされる", causative: "かえさせる", ba: "かえせば", tara: "かえしたら", imperative: "かえせ", desire: "かえしたい", tsumori: "かえす" }},

        { word: "渡す", kana: "わたす", meaning: "to hand over", type: "u-verb", conjugations: { masu: "わたします", te: "わたして", ta: "わたした", nai: "わたさない", masuNegative: "わたしません", taNegative: "わたさなかった", potential: "わたせる", volitional: "わたそう", passive: "わたされる", causative: "わたさせる", ba: "わたせば", tara: "わたしたら", imperative: "わたせ", desire: "わたしたい", tsumori: "わたす" }},

        { word: "見せる", kana: "みせる", meaning: "to show", type: "ru-verb", conjugations: { masu: "みせます", te: "みせて", ta: "みせた", nai: "みせない", masuNegative: "みせません", taNegative: "みせなかった", potential: "みせられる", volitional: "みせよう", passive: "みせられる", causative: "みせさせる", ba: "みせれば", tara: "みせたら", imperative: "みせろ", desire: "みせたい", tsumori: "みせる" }},

        { word: "集める", kana: "あつめる", meaning: "to collect", type: "ru-verb", conjugations: { masu: "あつめます", te: "あつめて", ta: "あつめた", nai: "あつめない", masuNegative: "あつめません", taNegative: "あつめなかった", potential: "あつめられる", volitional: "あつめよう", passive: "あつめられる", causative: "あつめさせる", ba: "あつめれば", tara: "あつめたら", imperative: "あつめろ", desire: "あつめたい", tsumori: "あつめる" }},

        { word: "終える", kana: "おえる", meaning: "to finish", type: "ru-verb", conjugations: { masu: "おえます", te: "おえて", ta: "おえた", nai: "おえない", masuNegative: "おえません", taNegative: "おえなかった", potential: "おえられる", volitional: "おえよう", passive: "おえられる", causative: "おえさせる", ba: "おえれば", tara: "おえたら", imperative: "おえろ", desire: "おえたい", tsumori: "おえる" }},

        { word: "決める", kana: "きめる", meaning: "to decide", type: "ru-verb", conjugations: { masu: "きめます", te: "きめて", ta: "きめた", nai: "きめない", masuNegative: "きめません", taNegative: "きめなかった", potential: "きめられる", volitional: "きめよう", passive: "きめられる", causative: "きめさせる", ba: "きめれば", tara: "きめたら", imperative: "きめろ", desire: "きめたい", tsumori: "きめる" }},

        { word: "続ける", kana: "つづける", meaning: "to continue", type: "ru-verb", conjugations: { masu: "つづけます", te: "つづけて", ta: "つづけた", nai: "つづけない", masuNegative: "つづけません", taNegative: "つづけなかった", potential: "つづけられる", volitional: "つづけよう", passive: "つづけられる", causative: "つづけさせる", ba: "つづければ", tara: "つづけたら", imperative: "つづけろ", desire: "つづけたい", tsumori: "つづける" }},

        { word: "止める", kana: "とめる", meaning: "to stop (transitive)", type: "ru-verb", conjugations: { masu: "とめます", te: "とめて", ta: "とめた", nai: "とめない", masuNegative: "とめません", taNegative: "とめなかった", potential: "とめられる", volitional: "とめよう", passive: "とめられる", causative: "とめさせる", ba: "とめれば", tara: "とめたら", imperative: "とめろ", desire: "とめたい", tsumori: "とめる" }},

        { word: "止まる", kana: "とまる", meaning: "to stop (intransitive)", type: "u-verb", conjugations: { masu: "とまります", te: "とまって", ta: "とまった", nai: "とまらない", masuNegative: "とまりません", taNegative: "とまらなかった", potential: "とまれる", volitional: "とまろう", passive: "とまられる", causative: "とまらせる", ba: "とまれば", tara: "とまったら", imperative: "とまれ", desire: "とまりたい", tsumori: "とまる" }},

        { word: "受ける", kana: "うける", meaning: "to receive", type: "ru-verb", conjugations: { masu: "うけます", te: "うけて", ta: "うけた", nai: "うけない", masuNegative: "うけません", taNegative: "うけなかった", potential: "うけられる", volitional: "うけよう", passive: "うけられる", causative: "うけさせる", ba: "うければ", tara: "うけたら", imperative: "うけろ", desire: "うけたい", tsumori: "うける" }},

        { word: "見つける", kana: "みつける", meaning: "to find", type: "ru-verb", conjugations: { masu: "みつけます", te: "みつけて", ta: "みつけた", nai: "みつけない", masuNegative: "みつけません", taNegative: "みつけなかった", potential: "みつけられる", volitional: "みつけよう", passive: "みつけられる", causative: "みつけさせる", ba: "みつければ", tara: "みつけたら", imperative: "みつけろ", desire: "みつけたい", tsumori: "みつける" }},

        { word: "見つかる", kana: "みつかる", meaning: "to be found", type: "u-verb", conjugations: { masu: "みつかります", te: "みつかって", ta: "みつかった", nai: "みつからない", masuNegative: "みつかりません", taNegative: "みつからなかった", potential: "みつかれる", volitional: "みつかろう", passive: "みつかれる", causative: "みつからせる", ba: "みつかれば", tara: "みつかったら", imperative: "みつかれ", desire: "みつかりたい", tsumori: "みつかる" }},

        { word: "持つ", kana: "もつ", meaning: "to hold", type: "u-verb", conjugations: { masu: "もちます", te: "もって", ta: "もった", nai: "もたない", masuNegative: "もちません", taNegative: "もたなかった", potential: "もてる", volitional: "もとう", passive: "もたれる", causative: "もたせる", ba: "もてば", tara: "もったら", imperative: "もて", desire: "もちたい", tsumori: "もつ" }},

        { word: "連れてくる", kana: "つれてくる", meaning: "to bring (a person)", type: "irregular", conjugations: { masu: "つれてきます", te: "つれてきて", ta: "つれてきた", nai: "つれてこない", masuNegative: "つれてきません", taNegative: "つれてこなかった", potential: "つれてこられる", volitional: "つれてこよう", passive: "つれてこられる", causative: "つれてこさせる", ba: "つれてくれば", tara: "つれてきたら", imperative: "つれてこい", desire: "つれてきたい", tsumori: "つれてくる" }},

        { word: "持って行く", kana: "もっていく", meaning: "to take (an object)", type: "u-verb", conjugations: { masu: "もっていきます", te: "もっていって", ta: "もっていった", nai: "もっていかない", masuNegative: "もっていきません", taNegative: "もっていかなかった", potential: "もっていける", volitional: "もっていこう", passive: "もっていかれる", causative: "もっていかせる", ba: "もっていけば", tara: "もっていったら", imperative: "もっていけ", desire: "もっていきたい", tsumori: "もっていく" }},

        { word: "持って来る", kana: "もってくる", meaning: "to bring (an object)", type: "irregular", conjugations: { masu: "もってきます", te: "もってきて", ta: "もってきた", nai: "もってこない", masuNegative: "もってきません", taNegative: "もってこなかった", potential: "もってこられる", volitional: "もってこよう", passive: "もってこられる", causative: "もってこさせる", ba: "もってくれば", tara: "もってきたら", imperative: "もってこい", desire: "もってきたい", tsumori: "もってくる" }}

      ];



const japaneseAdjectives = [

        // --- TOP 25 ADJECTIVES ---

        { word: "高い", kana: "たかい", type: "i-adjective", meaning: "expensive, tall, high", conjugations: { iAdjectiveNegative: "たかくない", iAdjectivePast: "たかかった", iAdjectivePastNegative: "たかくなかった" }},

        { word: "安い", kana: "やすい", type: "i-adjective", meaning: "cheap", conjugations: { iAdjectiveNegative: "やすくない", iAdjectivePast: "やすかった", iAdjectivePastNegative: "やすくなかった" }},

        { word: "好き", kana: "すき", type: "na-adjective", meaning: "likable, favorite", conjugations: { naAdjectiveNegative: "すきじゃない", naAdjectivePast: "すきだった", naAdjectivePastNegative: "すきじゃなかった" }},

        { word: "静か", kana: "しずか", type: "na-adjective", meaning: "quiet", conjugations: { naAdjectiveNegative: "しずかじゃない", naAdjectivePast: "しずかだった", naAdjectivePastNegative: "しずかじゃなかった" }},

        { word: "楽しい", kana: "たのしい", type: "i-adjective", meaning: "fun", conjugations: { iAdjectiveNegative: "たのしくない", iAdjectivePast: "たのしかった", iAdjectivePastNegative: "たのしくなかった" }},







{ word: "元気", kana: "げんき", type: "na-adjective", meaning: "healthy, energetic", conjugations: { naAdjectiveNegative: "げんきじゃない", naAdjectivePast: "げんきだった", naAdjectivePastNegative: "げんきじゃなかった" }},

        { word: "忙しい", kana: "いそがしい", type: "i-adjective", meaning: "busy", conjugations: { iAdjectiveNegative: "いそがしくない", iAdjectivePast: "いそがしかった", iAdjectivePastNegative: "いそがしくなかった" }},

        { word: "難しい", kana: "むずかしい", type: "i-adjective", meaning: "difficult", conjugations: { iAdjectiveNegative: "むずかしくない", iAdjectivePast: "むずかしかった", iAdjectivePastNegative: "むずかしくなかった" }},

        { word: "簡単", kana: "かんたん", type: "na-adjective", meaning: "simple, easy", conjugations: { naAdjectiveNegative: "かんたんじゃない", naAdjectivePast: "かんたんだった", naAdjectivePastNegative: "かんたんじゃなかった" }},

        { word: "便利", kana: "べんり", type: "na-adjective", meaning: "convenient", conjugations: { naAdjectiveNegative: "べんりじゃない", naAdjectivePast: "べんりだった", naAdjectivePastNegative: "べんりじゃなかった" }},

        { word: "きれい", kana: "きれい", type: "na-adjective", meaning: "clean, beautiful", conjugations: { naAdjectiveNegative: "きれいじゃない", naAdjectivePast: "きれいだった", naAdjectivePastNegative: "きれいじゃなかった" }},

        { word: "大きい", kana: "おおきい", type: "i-adjective", meaning: "big", conjugations: { iAdjectiveNegative: "おおきくない", iAdjectivePast: "おおきかった", iAdjectivePastNegative: "おおきくなかった" }},

        { word: "小さい", kana: "ちいさい", type: "i-adjective", meaning: "small", conjugations: { iAdjectiveNegative: "ちいさくない", iAdjectivePast: "ちいさかった", iAdjectivePastNegative: "ちいさくなかった" }},

        { word: "新しい", kana: "あたらしい", type: "i-adjective", meaning: "new", conjugations: { iAdjectiveNegative: "あたらしくない", iAdjectivePast: "あたらしいかった", iAdjectivePastNegative: "あたらしくなかった" }},

        { word: "古い", kana: "ふるい", type: "i-adjective", meaning: "old (for things)", conjugations: { iAdjectiveNegative: "ふるくない", iAdjectivePast: "ふるかった", iAdjectivePastNegative: "ふるくなかった" }},

        { word: "おいしい", kana: "おいしい", type: "i-adjective", meaning: "delicious", conjugations: { iAdjectiveNegative: "おいしくない", iAdjectivePast: "おいしかった", iAdjectivePastNegative: "おいしくなかった" }},

        { word: "悪い", kana: "わるい", type: "i-adjective", meaning: "bad", conjugations: { iAdjectiveNegative: "わるくない", iAdjectivePast: "わるかった", iAdjectivePastNegative: "わるくなかった" }},

        { word: "暑い", kana: "あつい", type: "i-adjective", meaning: "hot (weather)", conjugations: { iAdjectiveNegative: "あつくない", iAdjectivePast: "あつかった", iAdjectivePastNegative: "あつくなかった" }},

        { word: "寒い", kana: "さむい", type: "i-adjective", meaning: "cold (weather)", conjugations: { iAdjectiveNegative: "さむくない", iAdjectivePast: "さむかった", iAdjectivePastNegative: "さむくなかった" }},

        { word: "良い", kana: "いい", type: "i-adjective (irregular)", conjugations: { iAdjectiveNegative: "よくない", iAdjectivePast: "よかった", iAdjectivePastNegative: "よくなかった" }},

        { word: "面白い", kana: "おもしろい", type: "i-adjective", meaning: "interesting, funny", conjugations: { iAdjectiveNegative: "おもしろくない", iAdjectivePast: "おもしろかった", iAdjectivePastNegative: "おもしろくなかった" }},

        { word: "つまらない", kana: "つまらない", type: "i-adjective", meaning: "boring", conjugations: { iAdjectiveNegative: "つまらなくない", iAdjectivePast: "つまらなかった", iAdjectivePastNegative: "つまらなくなかった" }},

        { word: "可愛い", kana: "かわいい", type: "i-adjective", meaning: "cute", conjugations: { iAdjectiveNegative: "かわいくない", iAdjectivePast: "かわいかった", iAdjectivePastNegative: "かわいくなかった" }},

        { word: "白い", kana: "しろい", type: "i-adjective", meaning: "white", conjugations: { iAdjectiveNegative: "しろくない", iAdjectivePast: "しろかった", iAdjectivePastNegative: "しろくなかった" }},

        { word: "黒い", kana: "くろい", type: "i-adjective", meaning: "black", conjugations: { iAdjectiveNegative: "くろくない", iAdjectivePast: "くろかった", iAdjectivePastNegative: "くろくなかった" }},

         

        // --- ADDITIONAL ADJECTIVES ---

        { word: "赤い", kana: "あかい", type: "i-adjective", meaning: "red", conjugations: { iAdjectiveNegative: "あかくない", iAdjectivePast: "あかかった", iAdjectivePastNegative: "あかくなかった" }},

        { word: "青い", kana: "あおい", type: "i-adjective", meaning: "blue", conjugations: { iAdjectiveNegative: "あおくない", iAdjectivePast: "あおかった", iAdjectivePastNegative: "あおくなかった" }},

        { word: "嫌い", kana: "きらい", type: "na-adjective", meaning: "dislikable, hated", conjugations: { naAdjectiveNegative: "きらいじゃない", naAdjectivePast: "きらいだった", naAdjectivePastNegative: "きらいじゃなかった" }},

        { word: "上手", kana: "じょうず", type: "na-adjective", meaning: "skillful", conjugations: { naAdjectiveNegative: "じょうずじゃない", naAdjectivePast: "じょうずだった", naAdjectivePastNegative: "じょうずじゃなかった" }},

        { word: "下手", kana: "へた", type: "na-adjective", meaning: "unskillful", conjugations: { naAdjectiveNegative: "へたじゃない", naAdjectivePast: "へただった", naAdjectivePastNegative: "へたじゃなかった" }},

        { word: "暇", kana: "ひま", type: "na-adjective", meaning: "free (not busy)", conjugations: { naAdjectiveNegative: "ひまじゃない", naAdjectivePast: "ひまだった", naAdjectivePastNegative: "ひまじゃなかった" }},

        { word: "賑やか", kana: "にぎやか", type: "na-adjective", meaning: "lively", conjugations: { naAdjectiveNegative: "にぎやかじゃない", naAdjectivePast: "にぎやかだった", naAdjectivePastNegative: "にぎやかじゃなかった" }},

        { word: "温かい", kana: "あたたかい", type: "i-adjective", meaning: "warm", conjugations: { iAdjectiveNegative: "あたたかくない", iAdjectivePast: "あたたかかった", iAdjectivePastNegative: "あたたかくなかった" }},

        { word: "重い", kana: "おもい", type: "i-adjective", meaning: "heavy", conjugations: { iAdjectiveNegative: "おもくない", iAdjectivePast: "おもかった", iAdjectivePastNegative: "おもくなかった" }},

        { word: "軽い", kana: "かるい", type: "i-adjective", meaning: "light (weight)", conjugations: { iAdjectiveNegative: "かるくない", iAdjectivePast: "かるかった", iAdjectivePastNegative: "かるくなかった" }},

        { word: "長い", kana: "ながい", type: "i-adjective", meaning: "long", conjugations: { iAdjectiveNegative: "ながくない", iAdjectivePast: "ながかった", iAdjectivePastNegative: "ながくなかった" }},

        { word: "短い", kana: "みじかい", type: "i-adjective", meaning: "short (length)", conjugations: { iAdjectiveNegative: "みじかくない", iAdjectivePast: "みじかかった", iAdjectivePastNegative: "みじかくなかった" }},

        { word: "速い", kana: "はやい", type: "i-adjective", meaning: "fast", conjugations: { iAdjectiveNegative: "はやくない", iAdjectivePast: "はやかった", iAdjectivePastNegative: "はやくなかった" }},

        { word: "遅い", kana: "おそい", type: "i-adjective", meaning: "slow, late", conjugations: { iAdjectiveNegative: "おそくない", iAdjectivePast: "おそかった", iAdjectivePastNegative: "おそくなかった" }},

        { word: "甘い", kana: "あまい", type: "i-adjective", meaning: "sweet", conjugations: { iAdjectiveNegative: "あまくない", iAdjectivePast: "あまかった", iAdjectivePastNegative: "あまくなかった" }},

        { word: "辛い", kana: "からい", type: "i-adjective", meaning: "spicy", conjugations: { iAdjectiveNegative: "からくない", iAdjectivePast: "からかった", iAdjectivePastNegative: "からくなかった" }},

        { word: "親切", kana: "しんせつ", type: "na-adjective", meaning: "kind", conjugations: { naAdjectiveNegative: "しんせつじゃない", naAdjectivePast: "しんせつだった", naAdjectivePastNegative: "しんせつじゃなかった" }},

        { word: "丈夫", kana: "じょうぶ", type: "na-adjective", meaning: "durable, healthy", conjugations: { naAdjectiveNegative: "じょうぶじゃない", naAdjectivePast: "じょうぶだった", naAdjectivePastNegative: "じょうぶじゃなかった" }},

        { word: "大切", kana: "たいせつ", type: "na-adjective", meaning: "important", conjugations: { naAdjectiveNegative: "たいせつじゃない", naAdjectivePast: "たいせつだった", naAdjectivePastNegative: "たいせつじゃなかった" }},

        { word: "有名", kana: "ゆうめい", type: "na-adjective", meaning: "famous", conjugations: { naAdjectiveNegative: "ゆうめいじゃない", naAdjectivePast: "ゆうめいだった", naAdjectivePastNegative: "ゆうめいじゃなかった" }},

        { word: "安全", kana: "あんぜん", type: "na-adjective", meaning: "safe", conjugations: { naAdjectiveNegative: "あんぜんじゃない", naAdjectivePast: "あんぜんだった", naAdjectivePastNegative: "あんぜんじゃなかった" }},

        { word: "危険", kana: "きけん", type: "na-adjective", meaning: "dangerous", conjugations: { naAdjectiveNegative: "きけんじゃない", naAdjectivePast: "きけんだった", naAdjectivePastNegative: "きけんじゃなかった" }},

        { word: "明るい", kana: "あかるい", type: "i-adjective", meaning: "bright", conjugations: { iAdjectiveNegative: "あかるくない", iAdjectivePast: "あかるかった", iAdjectivePastNegative: "あかるくなかった" }},

        { word: "暗い", kana: "くらい", type: "i-adjective", meaning: "dark", conjugations: { iAdjectiveNegative: "くらくない", iAdjectivePast: "くらかった", iAdjectivePastNegative: "くらくなかった" }}

      ];



      const japaneseParticles = [

        { word: "は", kana: "は", meaning: "Topic Marker", type: "particle", conjugations: { meaning: "topic marker" },

          fillInBlankExamples: [

            { sentence: "わたし＿がくせい です。", correctAnswer: "は", translation: "I am a student." },

            { sentence: "ねこ＿かわいい です。", correctAnswer: "は", translation: "The cat is cute." }

          ]},

        { word: "が", kana: "が", meaning: "Subject Marker", type: "particle", conjugations: { meaning: "subject marker" },

          fillInBlankExamples: [

            { sentence: "だれ＿きましたか。", correctAnswer: "が", translation: "Who came?" },

            { sentence: "いぬ＿います。", correctAnswer: "が", translation: "There is a dog." }

          ]},

        { word: "を", kana: "を", meaning: "Direct Object Marker", type: "particle", conjugations: { meaning: "direct object marker" },

          fillInBlankExamples: [

            { sentence: "パン＿たべます。", correctAnswer: "を", translation: "I eat bread." },

            { sentence: "えいが＿みます。", correctAnswer: "を", translation: "I watch a movie." }

          ]},

        { word: "に", kana: "に", meaning: "Location/Direction/Time Marker", type: "particle", conjugations: { meaning: "location direction time marker" },

          fillInBlankExamples: [

            { sentence: "とうきょう＿いきます。", correctAnswer: "に", translation: "I go to Tokyo." },

            { sentence: "７時＿おきます。", correctAnswer: "に", translation: "I wake up at 7 o'clock." }

          ]},

        { word: "で", kana: "で", meaning: "Location of action/Means/Method", type: "particle", conjugations: { meaning: "location of action means method" },

          fillInBlankExamples: [

            { sentence: "レストラン＿たべます。", correctAnswer: "で", translation: "I eat at the restaurant." },

            { sentence: "バス＿いきます。", correctAnswer: "で", translation: "I go by bus." }

          ]},

        { word: "と", kana: "と", meaning: "And/With", type: "particle", conjugations: { meaning: "and with" },

          fillInBlankExamples: [

            { sentence: "わたし＿ともだち。", correctAnswer: "と", translation: "I and my friend." },

            { sentence: "コーヒー＿パン。", correctAnswer: "と", translation: "Coffee and bread." }

          ]},

        { word: "の", kana: "の", meaning: "Possessive/Noun modifier", type: "particle", conjugations: { meaning: "possessive noun modifier" },

          fillInBlankExamples: [

            { sentence: "わたし＿ほん。", correctAnswer: "の", translation: "My book." },

            { sentence: "がっこう＿せんせい。", correctAnswer: "の", translation: "School's teacher (teacher of the school)." }

          ]},

        { word: "へ", kana: "へ", meaning: "Directional (e)", type: "particle", conjugations: { meaning: "directional e" },

          fillInBlankExamples: [

            { sentence: "がっこう＿いきます。", correctAnswer: "へ", translation: "I go towards school." },

            { sentence: "うち＿かえります。", correctAnswer: "へ", translation: "I return home." }

          ]},

        { word: "も", kana: "も", meaning: "Also/Too", type: "particle", conjugations: { meaning: "also too" },

          fillInBlankExamples: [

            { sentence: "わたし＿がくせいです。", correctAnswer: "も", translation: "I am also a student." },

            { sentence: "これ＿たべません。", correctAnswer: "も", translation: "I won't eat this either." }

          ]},

        { word: "か", kana: "か", meaning: "Question Marker", type: "particle", conjugations: { meaning: "question marker" },

          fillInBlankExamples: [

            { sentence: "これはペンです＿。", correctAnswer: "か", translation: "Is this a pen?" },

            { sentence: "ひらがなをわかります＿。", correctAnswer: "か", translation: "Do you understand Hiragana?" }

          ]}

      ];



      const conjugationForms = [

        { key: "masu", display: "Masu Form (ます)" },

        { key: "masuNegative", display: "Masu Negative (ません)" },

        { key: "te", display: "Te Form (て)" },

        { key: "ta", display: "Past Tense (た)" },

        { key: "nai", display: "Nai Form (ない)" },

        { key: "taNegative", display: "Past Negative (なかった)" },

        { key: "potential", display: "Potential Form (できる)" },

        { key: "volitional", display: "Volitional Form (しよう)" },

        { key: "desire", display: "Desire Form (たい)" },

        { key: "tsumori", display: "Tsumori Form (つもり)" },

        { key: "passive", display: "Passive Form" },

        { key: "causative", display: "Causative Form" },

        { key: "ba", display: "Conditional (ば)" },

        { key: "tara", display: "Conditional (たら)" },

        { key: "imperative", display: "Imperative Form" },

        { key: "iAdjectiveNegative", display: "I-Adjective Negative (くない)" },

        { key: "iAdjectivePast", display: "I-Adjective Past (かった)" },

        { key: "iAdjectivePastNegative", display: "I-Adjective Past Negative (くなかった)" },

        { key: "naAdjectiveNegative", display: "Na-Adjective Negative (じゃない)" },

        { key: "naAdjectivePast", display: "Na-Adjective Past (だった)" },

        { key: "naAdjectivePastNegative", display: "Na-Adjective Past Negative (じゃなかった)" },

        // Particle forms

        { key: "meaning", display: "Meaning", category: "Particles" },

        { key: "fillInBlank", display: "Fill in the Blank", category: "Particles" } // New fill-in-the-blank particle quiz

      ];

const formIntroContent = {
                "masu": {
                    title: "Masu Form (ます)",
                    sections: [
                        { heading: "What is it?", content: "The polite present/future tense in Japanese. Used for general statements, polite requests, and habitual actions." },
                        { heading: "How to Conjugate: Ru-verbs (Group 2)", content: 
                            `•  Remove the final 「る」 (ru), then add 「ます」 (masu).\n    * Example: 食べる (taberu) -> 食べます (tabemasu) - "to eat / eat / will eat"\n    * Example: 見る (miru) -> 見ます (mimasu) - "to see / see / will see"`
                        },
                        { heading: "How to Conjugate: U-verbs (Group 1)", content: 
                            `•  Change the final U-vowel sound to the I-vowel sound, then add 「ます」 (masu).\n    * Example: 読む (yomu) -> 読みます (yomimasu) - "to read / read / will read"\n    * Example: 飲む (nomu) -> 飲みます (nomimasu) - "to drink / drink / will drink"`
                        },
                        { heading: "How to Conjugate: Irregular Verbs", content: 
                            `•  These have unique conjugations.\n    * する (suru) -> します (shimasu) - "to do / do / will do"\n    * 来る (kuru) -> きません (kimasu) - "to come / come / will come"`
                        }
                    ]
                },
@@ -366,10 +548,10 @@
                    sections: [
                        { heading: "What is it?", content: "The polite negative present/future tense. Expresses 'do not' or 'will not' in a polite context." },
                        { heading: "How to Conjugate: Ru-verbs (Group 2)", content: 
                        `•  Remove the final 「る」 (ru), then add 「ません」 (masen).\n    * Example: 食べる (taberu) -> 食べません (tabemasen) - "do not eat / will not eat"\n    * Example: 見る (miru) -> 見ません (mimasu) - "do not see / will not see"`
                        },
                        { heading: "How to Conjugate: U-verbs (Group 1)", content: 
                                                 },
                        { heading: "How to Conjugate: Irregular Verbs", content: 
                            `•  Memorize these!\n    * する (suru) -> しません (shimasen) - "do not do / will not do"\n    * 来る (kuru) -> きません (kimasen) - "do not come / will not come"`
@@ -496,7 +678,7 @@
                    sections: [
                        { heading: "What is it?", content: "Expresses making or letting someone do something. Meaning 'make/let [someone] [do something]'." },
                        { heading: "How to Conjugate: Ru-verbs (Group 2)", content: 
                                                   `•  Remove the final 「る」 (ru), then add 「させる」 (saseru).\n    * Example: 食べる (taberu) -> 食べさせる (tabesaseru) - "make/let eat"\n\n•  **U-verbs (Group 1)**: Change the final U-vowel sound to the A-vowel sound, then add 「せる」 (seru).\n    * Example: 読む (yomu) -> 読ませる (yomaseru) - "make/let read"\n    * Exception for U-verbs ending in 「う」 (u): Change 「우」 to 「わ」 (wa), then add 「せる」 (seru). (e.g., 買う -> 買わせる)`
                        },
                        { heading: "How to Conjugate: Irregular Verbs", content: 
                            `•  Memorize these!\n    * する (suru) -> させる (saseru) - "make/let do"\n    * 来る (kuru) -> こさせる (kosaseru) - "make/let come"`
@@ -544,7 +726,7 @@
                    sections: [
                        { heading: "What is it?", content: "Used to express the negative state of an I-adjective. Meaning 'is not [adjective]'." },
                        { heading: "How to Conjugate:", content: 

                                                    },
                        { heading: "Irregular: いい (Good)", content: `The adjective **いい (ii)** meaning "good" is irregular for its negative form:\n\n•  いい (ii) -> よくない (yokunai) - "is not good"` }
                    ]
@@ -554,7 +736,7 @@
                    sections: [
                        { heading: "What is it?", content: "Used to express the past tense of an I-adjective. Meaning 'was [adjective]'." },
                        { heading: "How to Conjugate:", content: 

                                               },
                        { heading: "Irregular: いい (Good)", content: `The adjective **いい (ii)** meaning "good" is irregular for its past form:\n\n•  いい (ii) -> よかった (yokatta) - "was good"` }
                    ]
@@ -564,17 +746,17 @@
                    sections: [
                        { heading: "What is it?", content: "Used to express the past negative tense of an I-adjective. Meaning 'was not [adjective]'." },
                        { heading: "How to Conjugate:", content: 

                            

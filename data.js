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
    // CORRECTED: かしまません -> かしません
    { word: "貸す", kana: "かす", meaning: "to lend", type: "u-verb", conjugations: { masu: "かします", te: "かして", ta: "かした", nai: "かさない", masuNegative: "かしません", taNegative: "かさなかった", potential: "かせる", volitional: "かそう", passive: "かされる", causative: "かさせる", ba: "かせば", tara: "かしたら", imperative: "かせ", desire: "かしたい", tsumori: "かす" }},
    { word: "教える", kana: "おしえる", meaning: "to teach", type: "ru-verb", conjugations: { masu: "おしえます", te: "おしえて", ta: "おしえた", nai: "おしえない", masuNegative: "おしえません", taNegative: "おしえなかった", potential: "おしえられる", volitional: "おしえよう", passive: "おしえられる", causative: "おしえさせる", ba: "おしえれば", tara: "おしえたら", imperative: "おしえろ", desire: "おしえたい", tsumori: "おしえる" }},
    { word: "寝る", kana: "ねる", meaning: "to sleep", type: "ru-verb", conjugations: { masu: "ねます", te: "ねて", ta: "ねた", nai: "ねない", masuNegative: "ねません", taNegative: "ねなかった", potential: "ねられる", volitional: "ねよう", passive: "ねられる", causative: "ねさせる", ba: "ねれば", tara: "ねたら", imperative: "ねろ", desire: "ねたい", tsumori: "ねる" }},
    { word: "聞く", kana: "きく", meaning: "to listen, to hear", type: "u-verb", conjugations: { masu: "ききます", te: "きいて", ta: "きいた", nai: "きかない", masuNegative: "ききません", taNegative: "きかなかった", potential: "きける", volitional: "きこう", passive: "きかれる", causative: "きかせる", ba: "きけば", tara: "きいたら", imperative: "きけ", desire: "ききたい", tsumori: "きく" }},
    { word: "分かる", kana: "わかる", meaning: "to understand", type: "u-verb", conjugations: { masu: "わかります", te: "わかって", ta: "わかった", nai: "わからない", masuNegative: "わかりません", taNegative: "わからなかった", potential: "わかる", volitional: "わかろう", passive: "わかられる", causative: "わからせる", ba: "わかれば", tara: "わかったら", imperative: "わかれ", desire: "わかりたい", tsumori: "わかる" }},
    { word: "いる", kana: "いる", meaning: "to exist (animate)", type: "ru-verb", conjugations: { masu: "います", te: "いて", ta: "いた", nai: "いない", masuNegative: "いません", taNegative: "いなかった", potential: "いられる", volitional: "いよう", passive: "いられる", causative: "いさせる", ba: "いれば", tara: "いたら", imperative: "いろ", desire: "いたい", tsumori: "いる" }},
    { word: "ある", kana: "ある", meaning: "to exist (inanimate)", type: "u-verb", conjugations: { masu: "あります", te: "あって", ta: "あった", nai: "ない", masuNegative: "ありません", taNegative: "なかった", potential: "ある", volitional: "あろう", passive: "あられる", causative: "あらせる", ba: "あれば", tara: "あったら", imperative: "あれ", desire: "ありたい", tsumori: "ある" }},
    { word: "起きる", kana: "おきる", meaning: "to wake up", type: "ru-verb", conjugations: { masu: "おきます", te: "おきて", ta: "おきた", nai: "おきない", masuNegative: "おきません", taNegative: "おきなかった", potential: "おきられる", volitional: "おきよう", passive: "おきられる", causative: "おきさせる", ba: "おきれば", tara: "おきたら", imperative: "おきろ", desire: "おきたい", tsumori: "おきる" }},
    // CORRECTED: はたらかかった -> はたらかなかった
    { word: "働く", kana: "はたらく", meaning: "to work", type: "u-verb", conjugations: { masu: "はたらきます", te: "はたらいて", ta: "はたらいた", nai: "はたらかない", masuNegative: "はたらきません", taNegative: "はたらかなかった", potential: "はたらける", volitional: "はたらこう", passive: "はたらかれる", causative: "はたらかせる", ba: "はたらけば", tara: "はたらいたら", imperative: "はたらけ", desire: "はたらきたい", tsumori: "はたらく" }},
    // ... (rest of the verb data)
];

const japaneseAdjectives = [
    // --- TOP 25 ADJECTIVES ---
    { word: "高い", kana: "たかい", type: "i-adjective", meaning: "expensive, tall, high", conjugations: { iAdjectiveNegative: "たかくない", iAdjectivePast: "たかかった", iAdjectivePastNegative: "たかくなかった" }},
    { word: "安い", kana: "やすい", type: "i-adjective", meaning: "cheap", conjugations: { iAdjectiveNegative: "やすくない", iAdjectivePast: "やすかった", iAdjectivePastNegative: "やすくなかった" }},
    { word: "好き", kana: "すき", type: "na-adjective", meaning: "likable, favorite", conjugations: { naAdjectiveNegative: "すきじゃない", naAdjectivePast: "すきだった", naAdjectivePastNegative: "すきじゃなかった" }},
    // CORRECTED: あたらしいかった -> あたらしかった
    { word: "新しい", kana: "あたらしい", type: "i-adjective", meaning: "new", conjugations: { iAdjectiveNegative: "あたらしくない", iAdjectivePast: "あたらしかった", iAdjectivePastNegative: "あたらしくなかった" }},
    // ... (rest of the adjective data)
];

const japaneseParticles = [
    // ... (particle data)
];

const conjugationForms = [
    // ... (conjugation form data)
];

const formIntroContent = {
    // ... (all your intro content objects)
};

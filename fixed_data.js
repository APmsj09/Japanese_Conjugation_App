// data.js
'use strict';

const japaneseVerbs = [
    {
        word: "行く",
        kana: "いく",
        meaning: "to go",
        type: "u-verb (special)",
        conjugations: {
            masu: "いきます",
            te: "いって",
            ta: "いった",
            nai: "いかない",
            masuNegative: "いきません",
            taNegative: "いかなかった",
            potential: "いける",
            volitional: "いこう",
            passive: "いかれる",
            causative: "いかせる",
            ba: "いけば",
            tara: "いったら",
            imperative: "いけ",
            desire: "いきたい",
            tsumori: "いく"
        }
    }
];

const japaneseAdjectives = [
    {
        word: "高い",
        kana: "たかい",
        type: "i-adjective",
        meaning: "expensive, tall, high",
        conjugations: {
            iAdjectiveNegative: "たかくない",
            iAdjectivePast: "たかかった",
            iAdjectivePastNegative: "たかくなかった"
        }
    }
];

const japaneseParticles = [
    {
        word: "は",
        kana: "は",
        meaning: "Topic Marker",
        type: "particle",
        conjugations: { meaning: "topic marker" },
        fillInBlankExamples: [
            { sentence: "わたし＿がくせい です。", correctAnswer: "は", translation: "I am a student." },
            { sentence: "ねこ＿かわいい です。", correctAnswer: "は", translation: "The cat is cute." }
        ]
    }
];

const conjugationForms = [
    { key: "masu", display: "Masu Form (ます)" },
    { key: "masuNegative", display: "Masu Negative (ません)" },
    { key: "te", display: "Te Form (て)" },
    { key: "ta", display: "Past Tense (た)" }
];

const formIntroContent = {
    masu: {
        title: "Masu Form (ます)",
        sections: [
            { heading: "What is it?", content: "The polite present/future tense in Japanese. Used for general statements, polite requests, and habitual actions." },
            { heading: "How to Conjugate: Ru-verbs", content: "Remove る and add ます" }
        ]
    }
};

const japaneseGrammar = [
    {
        grammar: "AはBです",
        meaning: "A is B",
        level: "N5",
        explanation: "Basic sentence structure equating two nouns",
        examples: [
            { jp: "私は学生です。", kana: "わたしはがくせいです。", en: "I am a student." }
        ]
    }
];
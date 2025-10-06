const formIntroContent = {
    masu: {
        title: "ます Form (Polite Present/Future)",
        sections: [
            {
                heading: "What is the ます Form?",
                content: `The ます (masu) form is the polite present/future tense form of verbs in Japanese. It's one of the most basic and commonly used verb forms.
                
                • It's used in polite speech when talking to superiors, strangers, or in formal situations
                • Shows respect to the listener
                • Can indicate both present and future actions`
            },
            {
                heading: "How to Conjugate",
                content: `For ru-verbs (Group 2):
                • Remove る and add ます
                * Example: たべる -> たべます
                
                For u-verbs (Group 1):
                • Change the last u sound to i sound and add ます
                * Example: のむ -> のみます
                
                For irregular verbs:
                • する -> します
                • くる -> きます`
            }
        ]
    },
    masen: {
        title: "ません Form (Polite Negative)",
        sections: [
            {
                heading: "What is the ません Form?",
                content: `The ません (masen) form is the polite negative present/future tense form of verbs in Japanese.
                
                • Used to politely say that something does not or will not happen
                • Parallel to the positive ます form
                • Common in daily conversations and formal situations`
            },
            {
                heading: "How to Conjugate",
                content: `For ru-verbs (Group 2):
                • Remove る and add ません
                * Example: たべる -> たべません
                
                For u-verbs (Group 1):
                • Change the last u sound to i sound and add ません
                * Example: のむ -> のみません
                
                For irregular verbs:
                • する -> しません
                • くる -> きません`
            }
        ]
    },
    mashita: {
        title: "ました Form (Polite Past)",
        sections: [
            {
                heading: "What is the ました Form?",
                content: `The ました (mashita) form is the polite past tense form of verbs in Japanese.
                
                • Used to politely describe actions that have already happened
                • The past tense version of the ます form
                • Very common in both spoken and written Japanese`
            },
            {
                heading: "How to Conjugate",
                content: `For ru-verbs (Group 2):
                • Remove る and add ました
                * Example: たべる -> たべました
                
                For u-verbs (Group 1):
                • Change the last u sound to i sound and add ました
                * Example: のむ -> のみました
                
                For irregular verbs:
                • する -> しました
                • くる -> きました`
            }
        ]
    },
    masendeshita: {
        title: "ませんでした Form (Polite Past Negative)",
        sections: [
            {
                heading: "What is the ませんでした Form?",
                content: `The ませんでした (masendeshita) form is the polite past negative form of verbs in Japanese.
                
                • Used to politely say that something did not happen in the past
                • The negative past tense version of the ます form
                • Common in formal conversations about past events`
            },
            {
                heading: "How to Conjugate",
                content: `For ru-verbs (Group 2):
                • Remove る and add ませんでした
                * Example: たべる -> たべませんでした
                
                For u-verbs (Group 1):
                • Change the last u sound to i sound and add ませんでした
                * Example: のむ -> のみませんでした
                
                For irregular verbs:
                • する -> しませんでした
                • くる -> きませんでした`
            }
        ]
    },
    te: {
        title: "て Form (Te-form)",
        sections: [
            {
                heading: "What is the て Form?",
                content: `The て (te) form is one of the most important verb forms in Japanese, used to:
                
                • Connect multiple actions together
                • Make requests ("please do something")
                • Show ongoing actions
                • Create compound verbs`
            },
            {
                heading: "How to Conjugate",
                content: `For ru-verbs (Group 2):
                • Remove る and add て
                * Example: たべる -> たべて
                
                For u-verbs (Group 1):
                • う、つ、る -> って
                * Example: まつ -> まって
                • む、ぶ、ぬ -> んで
                * Example: のむ -> のんで
                • く -> いて
                * Example: かく -> かいて
                • ぐ -> いで
                * Example: およぐ -> およいで
                • す -> して
                * Example: はなす -> はなして
                
                For irregular verbs:
                • する -> して
                • くる -> きて`
            }
        ]
    },
    ta: {
        title: "た Form (Plain Past)",
        sections: [
            {
                heading: "What is the た Form?",
                content: `The た (ta) form is the plain past tense form in Japanese.
                
                • Used to describe completed actions
                • Casual/informal past tense
                • Based on the て form conjugation patterns`
            },
            {
                heading: "How to Conjugate",
                content: `For ru-verbs (Group 2):
                • Remove る and add た
                * Example: たべる -> たべた
                
                For u-verbs (Group 1):
                • う、つ、る -> った
                * Example: まつ -> まった
                • む、ぶ、ぬ -> んだ
                * Example: のむ -> のんだ
                • く -> いた
                * Example: かく -> かいた
                • ぐ -> いだ
                * Example: およぐ -> およいだ
                • す -> した
                * Example: はなす -> はなした
                
                For irregular verbs:
                • する -> した
                • くる -> きた`
            }
        ]
    },
    nai: {
        title: "ない Form (Plain Negative)",
        sections: [
            {
                heading: "What is the ない Form?",
                content: `The ない (nai) form is the plain negative present/future form in Japanese.
                
                • Used to say something does not or will not happen
                • Casual/informal negative form
                • Can be modified further for other grammar patterns`
            },
            {
                heading: "How to Conjugate",
                content: `For ru-verbs (Group 2):
                • Remove る and add ない
                * Example: たべる -> たべない
                
                For u-verbs (Group 1):
                • Change the last u sound to a sound and add ない
                * Example: のむ -> のまない
                
                For irregular verbs:
                • する -> しない
                • くる -> こない`
            }
        ]
    },
    nakatta: {
        title: "なかった Form (Plain Past Negative)",
        sections: [
            {
                heading: "What is the なかった Form?",
                content: `The なかった (nakatta) form is the plain past negative form in Japanese.
                
                • Used to say something did not happen in the past
                • Casual/informal negative past tense
                • Based on the ない form + past tense`
            },
            {
                heading: "How to Conjugate",
                content: `For ru-verbs (Group 2):
                • Remove る and add なかった
                * Example: たべる -> たべなかった
                
                For u-verbs (Group 1):
                • Change the last u sound to a sound and add なかった
                * Example: のむ -> のまなかった
                
                For irregular verbs:
                • する -> しなかった
                • くる -> こなかった`
            }
        ]
    },
    'i-adj-past': {
        title: "I-Adjective Past Form",
        sections: [
            {
                heading: "What is the I-Adjective Past Form?",
                content: `The past form of i-adjectives in Japanese describes how something was in the past.
                
                • Used to describe past states or conditions
                • Ends in かった (katta)
                • Regular and easy to conjugate`
            },
            {
                heading: "How to Conjugate",
                content: `For all i-adjectives:
                • Remove the final い and add かった
                * Example: さむい -> さむかった
                * Example: おいしい -> おいしかった
                
                Exception:
                • いい -> よかった`
            }
        ]
    },
    'i-adj-negative': {
        title: "I-Adjective Negative Form",
        sections: [
            {
                heading: "What is the I-Adjective Negative Form?",
                content: `The negative form of i-adjectives in Japanese describes how something is not.
                
                • Used to negate adjective meanings
                • Ends in くない (kunai)
                • Regular pattern for all i-adjectives`
            },
            {
                heading: "How to Conjugate",
                content: `For all i-adjectives:
                • Remove the final い and add くない
                * Example: さむい -> さむくない
                * Example: おいしい -> おいしくない
                
                Exception:
                • いい -> よくない`
            }
        ]
    },
    'i-adj-past-negative': {
        title: "I-Adjective Past Negative Form",
        sections: [
            {
                heading: "What is the I-Adjective Past Negative Form?",
                content: `The past negative form of i-adjectives describes how something was not in the past.
                
                • Combines past tense and negative meaning
                • Ends in くなかった (kunakatta)
                • Regular pattern based on negative form`
            },
            {
                heading: "How to Conjugate",
                content: `For all i-adjectives:
                • Remove the final い and add くなかった
                * Example: さむい -> さむくなかった
                * Example: おいしい -> おいしくなかった
                
                Exception:
                • いい -> よくなかった`
            }
        ]
    },
    'na-adj-past': {
        title: "Na-Adjective Past Form",
        sections: [
            {
                heading: "What is the Na-Adjective Past Form?",
                content: `The past form of na-adjectives describes how something was in the past.
                
                • Used with だった to show past state
                • Very regular pattern
                • Similar to noun + だった`
            },
            {
                heading: "How to Conjugate",
                content: `For all na-adjectives:
                • Add だった to the base form
                * Example: きれい -> きれいだった
                * Example: しずか -> しずかだった`
            }
        ]
    },
    'na-adj-negative': {
        title: "Na-Adjective Negative Form",
        sections: [
            {
                heading: "What is the Na-Adjective Negative Form?",
                content: `The negative form of na-adjectives describes how something is not.
                
                • Uses ではない to show negation
                • Very regular pattern
                • Similar to noun + ではない`
            },
            {
                heading: "How to Conjugate",
                content: `For all na-adjectives:
                • Add ではない to the base form
                * Example: きれい -> きれいではない
                * Example: しずか -> しずかではない
                
                Note: じゃない is the casual form of ではない`
            }
        ]
    },
    'na-adj-past-negative': {
        title: "Na-Adjective Past Negative Form",
        sections: [
            {
                heading: "What is the Na-Adjective Past Negative Form?",
                content: `The past negative form of na-adjectives describes how something was not in the past.
                
                • Combines past tense and negative meaning
                • Uses ではなかった
                • Regular pattern based on negative form`
            },
            {
                heading: "How to Conjugate",
                content: `For all na-adjectives:
                • Add ではなかった to the base form
                * Example: きれい -> きれいではなかった
                * Example: しずか -> しずかではなかった
                
                Note: じゃなかった is the casual form of ではなかった`
            }
        ]
    }
};
document.addEventListener('DOMContentLoaded', () => {
    // Data loading check with detailed error reporting
    console.log('Debug: Loading data structures...');
    const requiredData = {
        japaneseVerbs,
        japaneseAdjectives,
        conjugationForms,
        japaneseGrammar,
        japaneseParticles,
        formIntroContent
    };
    console.log('Debug: Required data structures:', Object.keys(requiredData).map(key => ({
        name: key,
        loaded: typeof requiredData[key] !== 'undefined',
        type: typeof requiredData[key],
        length: Array.isArray(requiredData[key]) ? requiredData[key].length : null
    })));

    const missingData = Object.entries(requiredData)
        .filter(([key, value]) => typeof value === 'undefined')
        .map(([key]) => key);

    if (missingData.length > 0) {
        document.getElementById('app-container').innerHTML = `
            <h1>Error</h1>
            <p>Could not load the following data:</p>
            <ul>
                ${missingData.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p>Please check the browser console for detailed error messages and refresh the page.</p>`;
        console.error('Missing data objects:', missingData);
        return; // Stop the script from running further
    }

    const wanakana = {
        "a":"あ", "i":"い", "u":"う", "e":"え", "o":"お", "ka":"か", "ki":"き", "ku":"く", "ke":"け", "ko":"こ", "sa":"さ", "shi":"し", "su":"す", "se":"せ", "so":"そ", "ta":"た", "chi":"ち", "tsu":"つ", "te":"て", "to":"と", "na":"な", "ni":"に", "nu":"ぬ", "ne":"ね", "no":"の", "ha":"は", "hi":"ひ", "fu":"ふ", "he":"へ", "ho":"ほ", "ma":"ま", "mi":"み", "mu":"む", "me":"め", "mo":"も", "ya":"や", "yu":"ゆ", "yo":"よ", "ra":"ら", "ri":"り", "ru":"る", "re":"れ", "ro":"ろ", "wa":"わ", "wo":"を", "n":"ん", "ga":"が", "gi":"ぎ", "gu":"ぐ", "ge":"げ", "go":"ご", "za":"ざ", "ji":"じ", "zu":"ず", "ze":"ぜ", "zo":"ぞ", "da":"だ", "di":"ぢ", "du":"づ", "de":"で", "do":"ど", "ba":"ば", "bi":"び", "bu":"ぶ", "be":"べ", "bo":"ぼ", "pa":"ぱ", "pi":"ぴ", "pu":"ぷ", "pe":"ぺ", "po":"ぽ", "kya":"きゃ", "kyu":"きゅ", "kyo":"きょ", "sha":"しゃ", "shu":"しゅ", "sho":"しょ", "cha":"ちゃ", "chu":"ちゅ", "cho":"ちょ", "nya":"にゃ", "nyu":"にゅ", "nyo":"にょ", "hya":"ひゃ", "hyu":"ひゅ", "hyo":"ひょ", "mya":"みゃ", "myu":"みゅ", "myo":"みょ", "rya":"りゃ", "ryu":"りゅ", "ryo":"りょ", "gya":"ぎゃ", "gyu":"ぎゅ", "gyo":"ぎょ", "ja":"じゃ", "ju":"じゅ", "jo":"じょ", "bya":"びゃ", "byu":"びゅ", "byo":"びょ", "pya":"ぴゃ", "pyu":"ぴゅ", "pyo":"ぴょ"
    };
    
    function toHiragana(romaji) {
        let hiragana = '';
        let i = 0;
        // Refined romaji cleaning
        romaji = romaji.toLowerCase()
                       .replace(/n'/, 'n')
                       .replace(/tchi/g, 'cchi'); // Handle edge case like 'matcha'
        while (i < romaji.length) {
            // Handle double consonants (sokuon)
            if (i + 1 < romaji.length && romaji[i] !== 'n' && romaji[i] === romaji[i+1]) {
                hiragana += 'っ';
                i++;
            }
            let found = false;
            // Check for 3-character kana
            if (i + 2 < romaji.length) {
                const tryKana = romaji.slice(i, i + 3);
                if (wanakana[tryKana]) {
                    hiragana += wanakana[tryKana];
                    i += 3;
                    found = true;
                }
            }
            // Check for 2-character kana
            if (!found && i + 1 < romaji.length) {
                const tryKana = romaji.slice(i, i + 2);
                if (wanakana[tryKana]) {
                    hiragana += wanakana[tryKana];
                    i += 2;
                    found = true;
                }
            }
            // Handle 1-character kana
            if (!found) {
                const tryKana = romaji[i];
                if (wanakana[tryKana]) {
                    hiragana += wanakana[tryKana];
                }
                i++;
            }
        }
        return hiragana;
    }

    const dom = {
        kanaDisplay: document.getElementById('kana-display'),
        kanjiDisplay: document.getElementById('kanji-display'),
        formDisplay: document.getElementById('form-display'),
        verbTypeDisplay: document.getElementById('verb-type-display'),
        answerInput: document.getElementById('answer-input'),
        checkButton: document.getElementById('check-button'),
        nextButton: document.getElementById('next-button'),
        feedbackMessage: document.getElementById('feedback-message'),
        correctAnswerDisplay: document.getElementById('correct-answer-display'),
        correctCount: document.getElementById('correct-count'),
        incorrectCount: document.getElementById('incorrect-count'),
        resetButton: document.getElementById('reset-button'),
        topicSelect: document.getElementById('topic-select'),
        introPanel: document.getElementById('introduction-panel'),
        introTitle: document.getElementById('intro-title'),
        introSectionsContainer: document.getElementById('intro-sections-container'),
        startPracticeButton: document.getElementById('start-practice-button'),
        prevIntroSlideButton: document.getElementById('prev-intro-slide-button'),
        nextIntroSlideButton: document.getElementById('next-intro-slide-button'),
        cardPanel: document.querySelector('.card-panel'),
        feedbackArea: document.querySelector('.feedback-area'),
        progressArea: document.querySelector('.progress-area')
    };

    let state = {
        learningQueue: [],
        currentCard: null,
        correctCount: 0,
        incorrectCount: 0,
        currentTopic: "masu",
        currentMode: "introduction",
        currentIntroSlideIndex: 0
    };

    const saveState = () => {
        const stateToSave = { ...state };
        if (state.currentMode !== 'practice') {
            stateToSave.learningQueue = [];
        }
        localStorage.setItem('conjugationPracticeState', JSON.stringify(stateToSave));
    };

    const updateCounts = () => {
        dom.correctCount.textContent = state.correctCount;
        dom.incorrectCount.textContent = state.incorrectCount;
    };

    const loadState = () => {
        const savedState = localStorage.getItem('conjugationPracticeState');
        if (savedState) {
            const loaded = JSON.parse(savedState);
            state.currentTopic = loaded.currentTopic || "masu";
            state.correctCount = loaded.correctCount || 0;
            state.incorrectCount = loaded.incorrectCount || 0;
            state.learningQueue = loaded.learningQueue || [];
            state.currentMode = loaded.currentMode || "introduction";
            state.currentIntroSlideIndex = loaded.currentIntroSlideIndex || 0;
        }
        dom.topicSelect.value = state.currentTopic;
        updateCounts();
    };

    const displayIntroductionUI = () => {
        [dom.cardPanel, dom.answerInput, dom.checkButton, dom.nextButton, dom.feedbackArea, dom.progressArea]
            .forEach(el => el.classList.add('hidden'));

        dom.introPanel.classList.remove('hidden');
        dom.introSectionsContainer.innerHTML = '';

        const topicKey = state.currentTopic;
        const isGrammarTopic = topicKey.startsWith('grammar_');
        
        dom.prevIntroSlideButton.parentElement.style.display = isGrammarTopic ? 'none' : 'flex';
        dom.startPracticeButton.classList.toggle('hidden', isGrammarTopic);

        if (isGrammarTopic) {
            const grammarIndex = parseInt(topicKey.split('_')[1], 10);
            const grammarPoint = japaneseGrammar[grammarIndex];
            
            if (grammarPoint) {
                dom.introTitle.textContent = grammarPoint.grammar;
                let html = `<h3>${grammarPoint.meaning} (JLPT ${grammarPoint.level})</h3>`;
                html += `<p>${grammarPoint.explanation}</p>`;
                
                grammarPoint.examples.forEach(ex => {
                    html += `
                        <div class="grammar-example">
                            <p class="jp">${ex.jp}</p>
                            <p class="kana">${ex.kana}</p>
                            <p class="en">${ex.en}</p>
                        </div>
                    `;
                });
                dom.introSectionsContainer.innerHTML = html;
            }
        } else {
            const introContent = formIntroContent[topicKey];
            if (introContent && introContent.sections) {
                dom.introTitle.textContent = introContent.title;
                const totalSlides = introContent.sections.length;
                const section = introContent.sections[state.currentIntroSlideIndex];
                if (section) {
                    let html = `<h3>${section.heading}</h3>`;
                     html += section.content.split('\n').map(line => {
                         line = line.trim();
                         if (line.startsWith('•')) {
                             return `<ul><li>${line.substring(1).trim().replace(/\* Example: (.*?) -> (.*?)/g, '<b>$1</b> &rarr; <b>$2</b>')}</li></ul>`;
                         }
                         return `<p>${line}</p>`;
                     }).join('');
                     dom.introSectionsContainer.innerHTML = html.replace(/<ul>\s*<\/ul>/g, '');
                }
                dom.prevIntroSlideButton.disabled = state.currentIntroSlideIndex === 0;
                dom.nextIntroSlideButton.style.display = (state.currentIntroSlideIndex === totalSlides - 1) ? 'none' : 'block';
                dom.startPracticeButton.classList.toggle('hidden', state.currentIntroSlideIndex !== totalSlides - 1);
            } else {
                startPractice();
            }
        }
    };
    
    const displayPracticeUI = () => {
        [dom.introPanel, dom.startPracticeButton].forEach(el => el.classList.add('hidden'));
        [dom.cardPanel, dom.answerInput, dom.checkButton, dom.feedbackArea, dom.progressArea]
            .forEach(el => el.classList.remove('hidden'));

        dom.answerInput.value = '';
        dom.answerInput.className = '';
        dom.feedbackMessage.textContent = '';
        dom.correctAnswerDisplay.textContent = '';
        dom.checkButton.classList.remove('hidden');
        dom.nextButton.classList.add('hidden');
        dom.answerInput.focus();
    };

    const startPractice = () => {
        state.currentMode = 'practice';
        generateNewPracticeSession();
        displayNextCard();
    };

    const generateNewPracticeSession = () => {
        const formKey = state.currentTopic;
        let wordPool = [];

        const formInfo = conjugationForms.find(f => f.key === formKey);
        if (!formInfo) return;

        if (formInfo.display.includes('Adjective')) {
            const adjType = formInfo.display.includes('I-Adjective') ? 'i-adjective' : 'na-adjective';
            wordPool = japaneseAdjectives.filter(adj => adj.type.startsWith(adjType) && adj.conjugations[formKey]);
        } else {
            wordPool = japaneseVerbs.filter(verb => verb.conjugations[formKey]);
        }
        
        state.learningQueue = wordPool.map(item => ({ item, formKey }))
                                  .sort(() => Math.random() - 0.5);
    };

    const displayNextCard = () => {
        displayPracticeUI();
        if (state.learningQueue.length === 0) {
            dom.kanaDisplay.textContent = "🎉";
            dom.kanjiDisplay.textContent = "Round Complete!";
            dom.formDisplay.textContent = "Select a new topic or reset.";
            dom.verbTypeDisplay.textContent = "";
            [dom.answerInput, dom.nextButton, dom.checkButton].forEach(el => el.classList.add('hidden'));
            return;
        }

        state.currentCard = state.learningQueue.shift();
        const { item, formKey } = state.currentCard;
        const formInfo = conjugationForms.find(f => f.key === formKey);

        dom.kanaDisplay.textContent = item.kana;
        dom.kanjiDisplay.textContent = item.word === item.kana ? '' : item.word;
        dom.formDisplay.textContent = formInfo ? formInfo.display : '';
        dom.verbTypeDisplay.textContent = item.type;
    };

    const checkAnswer = () => {
        if (!state.currentCard) return;

        const userAnswerRomaji = dom.answerInput.value.trim();
        const userAnswerHiragana = toHiragana(userAnswerRomaji);
        const { item, formKey } = state.currentCard;
        const correctAnswerHiragana = item.conjugations[formKey];

        const isCorrect = userAnswerHiragana === correctAnswerHiragana;

        if (isCorrect) {
            dom.feedbackMessage.textContent = "Correct! 👍";
            dom.feedbackMessage.className = 'correct';
            dom.answerInput.classList.add('correct');
            state.correctCount++;
            userProgress.updateWordProgress(item.word, true);
        } else {
            dom.feedbackMessage.textContent = "Incorrect 👎";
            dom.feedbackMessage.className = 'incorrect';
            dom.answerInput.classList.add('incorrect');
            dom.correctAnswerDisplay.textContent = `Correct: ${correctAnswerHiragana}`;
            state.incorrectCount++;
            userProgress.updateWordProgress(item.word, false);
            state.learningQueue.splice(Math.min(3, state.learningQueue.length), 0, state.currentCard);
        }

        userProgress.updateTopicProgress(formKey, isCorrect);
        userProgress.updateStatistics(isCorrect);

        updateCounts();
        saveState();
        dom.checkButton.classList.add('hidden');
        dom.nextButton.classList.remove('hidden');
        dom.nextButton.focus();
    };
    
    const populateTopicSelect = () => {
        const createOption = (value, text) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = text;
            return option;
        };
        
        const createOptgroup = (label) => {
            const group = document.createElement('optgroup');
            group.label = label;
            return group;
        };

        const conjugationsGroup = createOptgroup('Conjugations');
        conjugationForms.forEach(form => {
            if (form.category !== 'Particles') {
                conjugationsGroup.appendChild(createOption(form.key, form.display));
            }
        });
        dom.topicSelect.appendChild(conjugationsGroup);

        const grammarN5Group = createOptgroup('Grammar (N5)');
        const grammarN4Group = createOptgroup('Grammar (N4)');
        
        japaneseGrammar.forEach((point, index) => {
            const option = createOption(`grammar_${index}`, point.grammar);
            if (point.level === "N5") {
                grammarN5Group.appendChild(option);
            } else if (point.level === "N4") {
                grammarN4Group.appendChild(option);
            }
        });
        
        dom.topicSelect.appendChild(grammarN5Group);
        dom.topicSelect.appendChild(grammarN4Group);
    };

    // Event Listeners
    // Add real-time romaji to hiragana conversion
    dom.answerInput.addEventListener('input', (e) => {
        const romaji = e.target.value;
        const hiragana = toHiragana(romaji);
        if (state.currentCard && state.currentCard.conjugations) {
            dom.kanaDisplay.textContent = hiragana || state.currentCard.kana;
        }
    });

    dom.answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (!dom.checkButton.classList.contains('hidden')) {
                checkAnswer();
            } else if (!dom.nextButton.classList.contains('hidden')) {
                displayNextCard();
            }
        }
    });

    dom.checkButton.addEventListener('click', checkAnswer);
    dom.nextButton.addEventListener('click', displayNextCard);
    dom.startPracticeButton.addEventListener('click', startPractice);

    dom.topicSelect.addEventListener('change', (e) => {
        state.currentTopic = e.target.value;
        state.currentMode = 'introduction';
        state.currentIntroSlideIndex = 0;
        displayIntroductionUI();
        saveState();
    });
    
    dom.prevIntroSlideButton.addEventListener('click', () => {
        if (state.currentIntroSlideIndex > 0) {
            state.currentIntroSlideIndex--;
            displayIntroductionUI();
        }
    });

    dom.nextIntroSlideButton.addEventListener('click', () => {
        const introContent = formIntroContent[state.currentTopic];
        if (introContent && state.currentIntroSlideIndex < introContent.sections.length - 1) {
            state.currentIntroSlideIndex++;
            displayIntroductionUI();
        }
    });

    dom.resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset your session scores?')) {
            state.correctCount = 0;
            state.incorrectCount = 0;
            updateCounts();
            saveState();
        }
    });

    // Initial Load
    populateTopicSelect();
    loadState();
    
    if (state.currentMode === 'practice' && state.learningQueue.length > 0) {
        displayNextCard();
    } else {
        state.currentMode = 'introduction';
        displayIntroductionUI();
    }
});
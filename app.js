// Global variables and state
let conjugationFormsList = null;
let menuItems = null;

// Initialize main app
const initializeApp = () => {
    console.log('Initializing app...');
    
    // Initialize main app elements
    menuItems = document.querySelectorAll('.menu-item');
    conjugationFormsList = document.querySelector('.conjugation-forms');
    selectedSection = 'verbs'; // Default section
    
    // Initialize DOM elements
    Object.assign(dom, {
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
    });

    // Set up sidebar
    setupSidebar();
    // Load saved state
    loadState();
    // Populate topic select
    populateTopicSelect();
    
    // Update conjugation forms for initial section
    updateConjugationForms(selectedSection);
    
    // Check if we should show practice or introduction
    if (state.currentMode === 'practice' && state.learningQueue.length > 0) {
        displayNextCard();
    } else {
        state.currentMode = 'introduction';
        displayIntroductionUI();
    }
};

// Global variables and state
let dom = {};
let selectedSection = 'verbs';
let welcomeScreen, mainApp, newProfileBtn, loadProfileBtn, profileForm, profileList;

const state = {
    learningQueue: [],
    currentCard: null,
    correctCount: 0,
    incorrectCount: 0,
    currentTopic: "masu",
    currentMode: "introduction",
    currentIntroSlideIndex: 0
};

// Core initialization function
function initializeApp() {
    console.log('Initializing app...');
    menuItems = document.querySelectorAll('.menu-item');
    conjugationFormsList = document.querySelector('.conjugation-forms');
    
    dom = {
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

    setupSidebar();
    loadState();
    populateTopicSelect();
    updateConjugationForms(selectedSection);
    
    if (state.currentMode === 'practice' && state.learningQueue.length > 0) {
        displayNextCard();
    } else {
        state.currentMode = 'introduction';
        displayIntroductionUI();
    }
}

// Profile management functions
    const loadExistingProfile = () => {
        const app = window.appState;
        const profile = userProgress.getProgress().profile;
        if (profile && profile.username) {
            app.welcomeScreen.classList.add('hidden');
            app.mainApp.classList.remove('hidden');
            // Ensure initializeApp runs after all declarations
            window.setTimeout(() => {
                try {
                    initializeApp();
                } catch (error) {
                    console.error('Error initializing app:', error);
                    showSection('profile-selection');
                }
            }, 0);
        } else {
            showSection('profile-selection');
        }
    };

// Global app state
window.appState = {
    dom: {},
    selectedSection: 'verbs',
    conjugationFormsList: null,
    menuItems: null,
    welcomeScreen: null,
    mainApp: null,
    newProfileBtn: null,
    loadProfileBtn: null,
    profileForm: null,
    profileList: null,
    state: {
        learningQueue: [],
        currentCard: null,
        correctCount: 0,
        incorrectCount: 0,
        currentTopic: "masu",
        currentMode: "introduction",
        currentIntroSlideIndex: 0
    }
};

// Initialize global app state
const app = {
    dom: {},
    selectedSection: 'verbs',
    conjugationFormsList: null,
    menuItems: null,
    welcomeScreen: null,
    mainApp: null,
    newProfileBtn: null,
    loadProfileBtn: null,
    profileForm: null,
    profileList: null,
    state: {
        learningQueue: [],
        currentCard: null,
        correctCount: 0,
        incorrectCount: 0,
        currentTopic: "masu",
        currentMode: "introduction",
        currentIntroSlideIndex: 0
    }
};

// Make app state globally available
window.app = app;

// Initialize global app state
window.app = {
    dom: {},
    conjugationFormsList: null,
    menuItems: null,
    selectedSection: 'verbs',
    welcomeScreen: null,
    mainApp: null,
    state: {
        learningQueue: [],
        currentCard: null,
        correctCount: 0,
        incorrectCount: 0,
        currentTopic: "masu",
        currentMode: "introduction",
        currentIntroSlideIndex: 0
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('App initializing...');
    
    // Initialize welcome screen elements
    const app = window.appState;
    app.welcomeScreen = document.getElementById('welcome-screen');
    app.mainApp = document.getElementById('main-app');
    app.newProfileBtn = document.getElementById('new-profile-btn');
    app.loadProfileBtn = document.getElementById('load-profile-btn');
    app.profileForm = document.getElementById('profile-form');
    app.profileList = document.getElementById('profile-list');
    
    console.log('Welcome screen elements:', {
        welcomeScreen: !!welcomeScreen,
        mainApp: !!mainApp,
        newProfileBtn: !!newProfileBtn,
        loadProfileBtn: !!loadProfileBtn,
        profileForm: !!profileForm,
        profileList: !!profileList
    });

    // Declare app-wide variables
    let selectedSection = 'verbs'; // Default section
    let conjugationFormsList;
    let menuItems;
    // Profile management functions
    const showSection = (sectionId) => {
        console.log('Showing section:', sectionId);
        document.querySelectorAll('.welcome-section').forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            console.log('Section activated:', sectionId);
        } else {
            console.error('Could not find section:', sectionId);
        }
    };

    const createNewProfile = (profileData) => {
        console.log('Creating new profile with data:', profileData);
        
        try {
            // Initialize a new profile with default settings
            const newProfile = {
                username: profileData.username,
                level: 1,
                totalExp: 0,
                joinDate: new Date().toISOString(),
                avatar: 'default',
                achievements: [],
                currentRank: 'Beginner',
                settings: {
                    dailyGoal: parseInt(profileData.dailyGoal) || 20,
                    studyLevel: profileData.level || 'beginner',
                    reviewInterval: 3,
                    studyReminders: false,
                    notificationTime: '09:00'
                }
            };
            
            // Update profile in userProgress
            userProgress.updateProfile(newProfile);
            
            console.log('Profile data saved:', newProfile);
            
            // Hide welcome screen and show main app
            if (welcomeScreen && mainApp) {
                welcomeScreen.classList.add('hidden');
                mainApp.classList.remove('hidden');
                console.log('Switched from welcome screen to main app');
            } else {
                console.error('Could not find welcome screen or main app elements');
            }
            
            // Start a new session and initialize the app
            userProgress.startSession();
            initializeApp();
            
            return true;
        } catch (error) {
            console.error('Error in createNewProfile:', error);
            return false;
        }
    };

    function loadExistingProfile() {
        const profile = userProgress.getProgress().profile;
        if (profile && profile.username) {
            welcomeScreen.classList.add('hidden');
            mainApp.classList.remove('hidden');
            
            // Initialize main app with timeout to ensure proper order
            window.setTimeout(() => {
                if (typeof initializeApp === 'function') {
                    try {
                        initializeApp();
                    } catch (error) {
                        console.error('Error during app initialization:', error);
                        showSection('profile-selection');
                    }
                } else {
                    console.error('initializeApp is not defined yet');
                    showSection('profile-selection');
                }
            }, 0);
        } else {
            showSection('profile-selection');
        }
    }    // Event Listeners for Welcome Screen
    if (newProfileBtn) {
        newProfileBtn.addEventListener('click', () => {
            console.log('New profile button clicked');
            showSection('create-profile');
        });
    } else {
        console.error('New profile button not found');
    }

    if (loadProfileBtn) {
        loadProfileBtn.addEventListener('click', () => {
            console.log('Load profile button clicked');
            showSection('load-profile');
        });
    } else {
        console.error('Load profile button not found');
    }

    // Handle level and goal button selections
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Handle profile form submission
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Profile form submitted');
            
            const username = document.getElementById('username')?.value?.trim();
            const selectedLevelBtn = document.querySelector('.level-btn.selected');
            const selectedGoalBtn = document.querySelector('.goal-btn.selected');
            const level = selectedLevelBtn?.dataset.level || 'beginner';
            const dailyGoal = selectedGoalBtn?.dataset.goal || '20';
            
            console.log('Profile data:', { username, level, dailyGoal });

            if (!username) {
                console.error('Username is required');
                alert('Please enter a username');
                return;
            }

            if (!selectedLevelBtn) {
                console.error('Level selection is required');
                alert('Please select your level');
                return;
            }

            if (!selectedGoalBtn) {
                console.error('Daily goal selection is required');
                alert('Please select your daily goal');
                return;
            }

            const success = createNewProfile({ username, level, dailyGoal });
            
            if (success) {
                console.log('Profile created successfully');
            } else {
                console.error('Failed to create profile');
                alert('There was an error creating your profile. Please try again.');
            }
        });
    } else {
        console.error('Profile form not found');
    }

    // Check for existing profile after DOM is fully loaded
    setTimeout(() => {
        if (userProgress.getProgress().profile.username) {
            loadExistingProfile();
        }
    }, 0);

    // Initialize main app
    const initializeApp = () => {
        console.log('Initializing app...');
        
        // Initialize main app elements
        menuItems = document.querySelectorAll('.menu-item');
        conjugationFormsList = document.querySelector('.conjugation-forms');
        selectedSection = 'verbs'; // Default section
        
        // Initialize DOM elements
        Object.assign(dom, {
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
        });

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

    // DOM elements are now initialized in initializeApp()

    // State is now declared globally

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

    // Sidebar functionality
    const setupSidebar = () => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // Remove active class from all items
                menuItems.forEach(mi => mi.classList.remove('active'));
                // Add active class to clicked item
                e.currentTarget.classList.add('active');
                
                // Update the selected section and refresh UI
                selectedSection = e.currentTarget.dataset.section;
                updateConjugationForms(selectedSection);
                updateTopicSelectForSection(selectedSection);
            });
        });
    };

    // Update conjugation forms in sidebar based on selected section
        const updateConjugationForms = (section) => {
        if (!conjugationFormsList) {
            console.error('Conjugation forms list element not found');
            return;
        }

        console.log('Updating conjugation forms for section:', section);
        conjugationFormsList.innerHTML = '';

        // Get the appropriate forms for the section
        let forms = [];
        switch(section) {
            case 'verbs':
                forms = conjugationForms.filter(form => 
                    ['masu', 'masuNegative', 'te', 'ta', 'nai', 'potential', 'passive', 'causative'].includes(form.key)
                );
                break;
            case 'adjectives':
                forms = conjugationForms.filter(form => 
                    ['iAdjectiveNegative', 'iAdjectivePast', 'iAdjectivePastNegative'].includes(form.key)
                );
                break;
            case 'particles':
                forms = conjugationForms.filter(form => form.key === 'meaning');
                break;
            default:
                forms = [];
        }

        console.log('Filtered forms for section:', forms);

        // Create and append form items
        forms.forEach(form => {
            const item = document.createElement('div');
            item.classList.add('menu-item');
            item.dataset.form = form.key;
            item.textContent = form.display;
            
            // Highlight if this is the current topic
            if (form.key === state.currentTopic) {
                item.classList.add('active');
            }

            // Add click handler
            item.addEventListener('click', () => {
                // Update active state
                conjugationFormsList.querySelectorAll('.menu-item').forEach(mi => 
                    mi.classList.remove('active')
                );
                item.classList.add('active');

                // Update topic and regenerate practice session
                state.currentTopic = form.key;
                dom.topicSelect.value = form.key;
                generateNewPracticeSession();
            });

            conjugationFormsList.appendChild(item);
        });
    };
        // Get forms based on section
        let forms = [];
        switch(section) {
            case 'verbs':
                forms = conjugationForms.filter(form => 
                    ['masu', 'masuNegative', 'te', 'ta', 'nai', 'potential', 'passive', 'causative'].includes(form.key)
                );
                break;
            case 'adjectives':
                forms = conjugationForms.filter(form => 
                    ['iAdjectiveNegative', 'iAdjectivePast', 'iAdjectivePastNegative'].includes(form.key)
                );
                break;
            case 'particles':
                forms = conjugationForms.filter(form => form.key === 'meaning');
                break;
            default:
                forms = conjugationForms;
        }
        
        if (!conjugationFormsList) {
            console.error('Conjugation forms list element not found');
            return;
        }

        conjugationFormsList.innerHTML = '';  // Clear existing forms
        
        // Create and append form items
        forms.forEach(form => {
            const item = document.createElement('div');
            item.classList.add('menu-item');
            item.dataset.form = form.key;
            item.textContent = form.display;
            item.addEventListener('click', () => {
                // Handle form selection
                document.querySelectorAll('.conjugation-forms .menu-item').forEach(mi => 
                    mi.classList.remove('active')
                );
                item.classList.add('active');
                state.currentTopic = form.key;
                generateNewPracticeSession();
            });
            conjugationFormsList.appendChild(item);
        });
    };    // Update topic select based on selected section
    const updateTopicSelectForSection = (section) => {
        dom.topicSelect.innerHTML = ''; // Clear existing options
        switch(section) {
            case 'verbs':
                const verbForms = conjugationForms.filter(form => form.category === 'Verbs');
                verbForms.forEach(form => {
                    const option = document.createElement('option');
                    option.value = form.key;
                    option.textContent = form.display;
                    dom.topicSelect.appendChild(option);
                });
                break;
            case 'adjectives':
                const adjForms = conjugationForms.filter(form => form.category === 'Adjectives');
                adjForms.forEach(form => {
                    const option = document.createElement('option');
                    option.value = form.key;
                    option.textContent = form.display;
                    dom.topicSelect.appendChild(option);
                });
                break;
            case 'particles':
                const particleForms = conjugationForms.filter(form => form.category === 'Particles');
                particleForms.forEach(form => {
                    const option = document.createElement('option');
                    option.value = form.key;
                    option.textContent = form.display;
                    dom.topicSelect.appendChild(option);
                });
                break;
            case 'grammar':
                const grammarN5 = japaneseGrammar.filter(point => point.level === 'N5');
                const grammarN4 = japaneseGrammar.filter(point => point.level === 'N4');
                
                const n5Group = document.createElement('optgroup');
                n5Group.label = 'JLPT N5';
                grammarN5.forEach((point, index) => {
                    const option = document.createElement('option');
                    option.value = `grammar_${index}`;
                    option.textContent = point.grammar;
                    n5Group.appendChild(option);
                });
                
                const n4Group = document.createElement('optgroup');
                n4Group.label = 'JLPT N4';
                grammarN4.forEach((point, index) => {
                    const option = document.createElement('option');
                    option.value = `grammar_${index + grammarN5.length}`;
                    option.textContent = point.grammar;
                    n4Group.appendChild(option);
                });
                
                dom.topicSelect.appendChild(n5Group);
                dom.topicSelect.appendChild(n4Group);
                break;
        }
        
        // Update state
        state.currentTopic = dom.topicSelect.value;
        saveState();
    };

    // Update sidebar when topic changes
    const oldTopicChangeHandler = dom.topicSelect.onchange;
    dom.topicSelect.addEventListener('change', (e) => {
        if (oldTopicChangeHandler) oldTopicChangeHandler(e);
        updateConjugationForms(selectedSection);
    });

    // Handle section changes
    const handleSectionChange = (section) => {
        selectedSection = section;
        
        // Update UI to reflect selected section
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            if (item.dataset.section === section) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Clear and repopulate topic select based on new section
        const select = dom.topicSelect;
        select.innerHTML = '';
        
        // Get topics for the selected section
        let topics = [];
        switch(section) {
            case 'verbs':
                topics = conjugationForms.filter(form => 
                    ['masu', 'masuNegative', 'te', 'ta', 'nai', 'potential', 'passive', 'causative'].includes(form.key)
                );
                break;
            case 'adjectives':
                topics = conjugationForms.filter(form => 
                    ['iAdjectiveNegative', 'iAdjectivePast', 'iAdjectivePastNegative'].includes(form.key)
                );
                break;
            case 'particles':
                topics = conjugationForms.filter(form => form.key === 'meaning');
                break;
        }
        
        // Populate select with new options
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic.key;
            option.textContent = topic.display;
            select.appendChild(option);
        });

        // Set default selection
        if (topics.length > 0) {
            select.value = topics[0].key;
            state.currentTopic = topics[0].key;
            generateNewPracticeSession();
        }

        // Update conjugation forms display
        updateConjugationForms(section);
    };

    // Initial Load
    populateTopicSelect();
    loadState();
    setupSidebar();
    
    // Set up section change handlers
    document.querySelectorAll('.menu-item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            handleSectionChange(e.target.dataset.section);
        });
    });
    
    if (state.currentMode === 'practice' && state.learningQueue.length > 0) {
        displayNextCard();
    } else {
        state.currentMode = 'introduction';
        displayIntroductionUI();
    }
});
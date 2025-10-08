// app.js (Complete updated file)

// Initialize global app state
window.app = {
    dom: {},  // Contains all DOM element references
    state: {
        learningQueue: [],
        currentCard: null,
        correctAnswer: null,
        correctCount: 0,
        incorrectCount: 0,
        currentTopic: "masu",
        currentMode: "introduction",
        currentPracticeType: "verbs" // NEW: To track if we are practicing verbs or adjectives
    }
};

// Profile management functions (No changes in this section)
function createNewProfile(profileData) {
    try {
        if (!profileData || !profileData.username) { throw new Error('Invalid profile data'); }
        if (!userProgress) { throw new Error('UserProgress not initialized'); }

        const profile = {
            username: profileData.username,
            level: 1, totalExp: 0, joinDate: new Date().toISOString(),
            avatar: 'default', achievements: [], currentRank: 'Beginner',
            settings: {
                dailyGoal: parseInt(profileData.dailyGoal) || 20,
                studyLevel: profileData.level || 'beginner',
                reviewInterval: 3, studyReminders: false, notificationTime: '09:00'
            }
        };
        userProgress.updateProfile(profile);
        
        const welcomeScreen = document.getElementById('welcome-screen');
        const mainApp = document.getElementById('main-app');
        
        if (welcomeScreen && mainApp) {
            welcomeScreen.classList.add('hidden');
            mainApp.classList.remove('hidden');
            userProgress.startSession();
            setTimeout(initializeApp, 0);
            return true;
        } else {
            throw new Error('Welcome screen elements not found');
        }
    } catch (error) {
        console.error('Error creating profile:', error);
        return false;
    }
}

function loadExistingProfile() {
    const profile = userProgress.getProgress().profile;
    if (profile && profile.username) {
        const welcomeScreen = document.getElementById('welcome-screen');
        const mainApp = document.getElementById('main-app');
        if (welcomeScreen && mainApp) {
            welcomeScreen.classList.add('hidden');
            mainApp.classList.remove('hidden');
            setTimeout(initializeApp, 0);
        }
    } else {
        showSection('profile-selection');
    }
}

function initializeWelcomeScreen() {
    app.newProfileBtn = document.getElementById('new-profile-btn');
    app.loadProfileBtn = document.getElementById('load-profile-btn');
    app.profileForm = document.getElementById('profile-form');

    if (app.newProfileBtn) {
        app.newProfileBtn.addEventListener('click', () => showSection('create-profile'));
    }
    if (app.loadProfileBtn) {
        app.loadProfileBtn.addEventListener('click', () => showSection('load-profile'));
    }
    if (app.profileForm) {
        setupProfileForm();
    }
}

function setupProfileForm() {
    document.querySelectorAll('.level-btn, .goal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const groupClass = e.target.classList.contains('level-btn') ? '.level-btn' : '.goal-btn';
            document.querySelectorAll(groupClass).forEach(b => b.classList.remove('selected'));
            e.target.classList.add('selected');
        });
    });
    app.profileForm.addEventListener('submit', handleProfileSubmission);
}

function handleProfileSubmission(e) {
    e.preventDefault();
    const username = document.getElementById('username')?.value?.trim();
    const level = document.querySelector('.level-btn.selected')?.dataset.level;
    const dailyGoal = document.querySelector('.goal-btn.selected')?.dataset.goal;
    
    if (!username || !level || !dailyGoal) {
        alert('Please fill in all required profile information');
        return;
    }
    if (!createNewProfile({ username, level, dailyGoal })) {
        alert('There was an error creating your profile. Please try again.');
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.welcome-section').forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (!window.userProgress) {
        console.error('UserProgress not initialized');
        return;
    }
    initializeWelcomeScreen();
    const profile = userProgress.getProgress().profile;
    if (profile && profile.username) {
        loadExistingProfile();
    } else {
        showSection('profile-selection');
    }
});


// --- UPDATED MAIN APP FUNCTIONS ---

function initializeApp() {
    // Cache all DOM elements needed for the app
    app.dom = {
        mainMenu: document.querySelector('nav > .menu-section:first-child .menu-items'),
        sidebarForms: document.querySelector('.conjugation-forms'),
        introPanel: document.getElementById('introduction-panel'),
        introTitle: document.getElementById('intro-title'),
        introContent: document.getElementById('intro-sections-container'),
        startPracticeBtn: document.getElementById('start-practice-button'),
        checkButton: document.getElementById('check-button'),
        nextButton: document.getElementById('next-button'),
        answerInput: document.getElementById('answer-input'),
        kanaDisplay: document.getElementById('kana-display'),
        kanjiDisplay: document.getElementById('kanji-display'),
        formDisplay: document.getElementById('form-display'),
        verbTypeDisplay: document.getElementById('verb-type-display'),
        feedbackMessage: document.getElementById('feedback-message'),
        correctAnswerDisplay: document.getElementById('correct-answer-display'),
        correctCount: document.getElementById('correct-count'),
        incorrectCount: document.getElementById('incorrect-count'),
        practiceArea: document.getElementById('app-container').querySelector('main') // Main content area
    };
    
    setupMainAppEventListeners();
    populateSidebarMenu();
    loadTopic(app.state.currentTopic);
}

function setupMainAppEventListeners() {
    // NEW: Listener for the main practice type menu (Verbs, Adjectives, etc.)
    app.dom.mainMenu.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('menu-item')) {
            const newPracticeType = e.target.dataset.section;
            if (newPracticeType !== app.state.currentPracticeType) {
                app.state.currentPracticeType = newPracticeType;
                
                // Update active class on main menu
                app.dom.mainMenu.querySelectorAll('.menu-item').forEach(item => {
                    item.classList.toggle('active', item.dataset.section === newPracticeType);
                });
                
                populateSidebarMenu(); // Repopulate the conjugation list
                
                // Automatically load the first topic from the new list
                const firstTopic = app.dom.sidebarForms.querySelector('.menu-item')?.dataset.topic;
                if(firstTopic) loadTopic(firstTopic);
            }
        }
    });

    app.dom.sidebarForms.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('menu-item')) {
            loadTopic(e.target.dataset.topic);
        }
    });

    app.dom.startPracticeBtn.addEventListener('click', startPractice);
    app.dom.checkButton.addEventListener('click', checkAnswer);
    app.dom.nextButton.addEventListener('click', nextCard);

    app.dom.answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (!app.dom.checkButton.classList.contains('hidden')) checkAnswer();
            else if (!app.dom.nextButton.classList.contains('hidden')) nextCard();
        }
    });
}

// UPDATED: Now populates based on the current practice type
function populateSidebarMenu() {
    let formsToShow;
    if (app.state.currentPracticeType === 'verbs') {
        formsToShow = conjugationForms.filter(form => !form.key.includes('Adjective') && form.category !== 'Particles');
    } else if (app.state.currentPracticeType === 'adjectives') {
        formsToShow = conjugationForms.filter(form => form.key.includes('Adjective'));
    } else {
        formsToShow = []; // Handle Particles/Grammar later
    }
        
    app.dom.sidebarForms.innerHTML = '';
    formsToShow.forEach(form => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.dataset.topic = form.key;
        li.textContent = form.display;
        app.dom.sidebarForms.appendChild(li);
    });
}

function loadTopic(topicKey) {
    app.state.currentTopic = topicKey;
    app.state.currentMode = "introduction";

    app.dom.sidebarForms.querySelectorAll('.menu-item').forEach(item => {
        item.classList.toggle('active', item.dataset.topic === topicKey);
    });
    
    const topicIntro = formIntroContent[topicKey];
    if (topicIntro) {
        app.dom.introTitle.textContent = topicIntro.title;
        app.dom.introContent.innerHTML = '';
        topicIntro.sections.forEach(section => {
            app.dom.introContent.innerHTML += `<h3>${section.heading}</h3><p>${section.content.replace(/\n/g, '<br>')}</p>`;
        });
        
        app.dom.introPanel.classList.remove('hidden');
        app.dom.startPracticeBtn.classList.remove('hidden');
        app.dom.practiceArea.classList.add('hidden');
    } else {
        startPractice();
    }
}

function startPractice() {
    app.state.currentMode = "practice";
    app.state.correctCount = 0;
    app.state.incorrectCount = 0;
    app.dom.correctCount.textContent = '0';
    app.dom.incorrectCount.textContent = '0';

    app.dom.introPanel.classList.add('hidden');
    app.dom.startPracticeBtn.classList.add('hidden');
    app.dom.practiceArea.classList.remove('hidden');

    nextCard();
}

// UPDATED: Added a safeguard and dynamic data source
function nextCard(retries = 10) {
    // SAFEGUARD: Prevents infinite loops if no valid card can be found
    if (retries <= 0) {
        console.error("Failed to find a valid card. Aborting.");
        app.dom.kanjiDisplay.textContent = "Error loading question.";
        app.dom.kanaDisplay.textContent = "Please select a different topic.";
        return;
    }

    app.dom.answerInput.value = '';
    app.dom.answerInput.className = '';
    app.dom.answerInput.disabled = false;
    app.dom.feedbackMessage.textContent = '';
    app.dom.correctAnswerDisplay.textContent = '';
    app.dom.checkButton.classList.remove('hidden');
    app.dom.nextButton.classList.add('hidden');
    app.dom.answerInput.focus();

    // DYNAMIC DATA: Choose the correct array based on practice type
    const sourceArray = app.state.currentPracticeType === 'verbs' ? japaneseVerbs : japaneseAdjectives;
    const card = sourceArray[Math.floor(Math.random() * sourceArray.length)];
    const formInfo = conjugationForms.find(f => f.key === app.state.currentTopic);
    const correctAnswer = card.conjugations[app.state.currentTopic];

    if (!correctAnswer) {
        nextCard(retries - 1); // Retry with a decremented counter
        return;
    }

    app.state.currentCard = card;
    app.state.correctAnswer = correctAnswer;

    app.dom.kanaDisplay.textContent = card.kana;
    app.dom.kanjiDisplay.textContent = card.word;
    app.dom.verbTypeDisplay.textContent = card.type;
    app.dom.formDisplay.textContent = `Conjugate to: ${formInfo.display}`;
}

function checkAnswer() {
    const userAnswer = app.dom.answerInput.value.trim().toLowerCase();
    if (!userAnswer) return;

    const isCorrect = userAnswer === app.state.correctAnswer.toLowerCase();

    if (isCorrect) {
        app.dom.answerInput.classList.add('correct');
        app.dom.feedbackMessage.textContent = 'Correct!';
        app.dom.feedbackMessage.className = 'correct';
        app.state.correctCount++;
    } else {
        app.dom.answerInput.classList.add('incorrect');
        app.dom.feedbackMessage.textContent = 'Incorrect!';
        app.dom.feedbackMessage.className = 'incorrect';
        app.dom.correctAnswerDisplay.textContent = `Correct answer: ${app.state.correctAnswer}`;
        app.state.incorrectCount++;
    }
    
    app.dom.correctCount.textContent = app.state.correctCount;
    app.dom.incorrectCount.textContent = app.state.incorrectCount;
    userProgress.updateStatistics(isCorrect);
    userProgress.updateWordProgress(app.state.currentCard.word, isCorrect);

    app.dom.checkButton.classList.add('hidden');
    app.dom.nextButton.classList.remove('hidden');
    app.dom.answerInput.disabled = true;
    app.dom.nextButton.focus();
}

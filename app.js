'use strict';

window.app = {
    dom: {},
    state: { learningQueue: [], currentCard: null, correctAnswer: null, correctCount: 0, incorrectCount: 0, currentTopic: "masu", currentMode: "dashboard", currentPracticeType: "verbs" }
};

// --- Welcome Screen ---
function createNewProfile(data) {
    const profile = { username: data.username, level: 1, totalExp: 0, joinDate: new Date().toISOString(), avatar: 'default', achievements: [], currentRank: 'Beginner', settings: { dailyGoal: parseInt(data.dailyGoal), studyLevel: data.level } };
    userProgress.updateProfile(profile);
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    userProgress.startSession();
    initializeApp();
}
function loadProfile() {
    if (userProgress.getProgress().profile.username) {
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        initializeApp();
    } else {
        showWelcomeSection('profile-selection');
    }
}
function initializeWelcomeScreen() {
    const newBtn = document.getElementById('new-profile-btn'), loadBtn = document.getElementById('load-profile-btn'), form = document.getElementById('profile-form');
    if (newBtn) newBtn.addEventListener('click', () => showWelcomeSection('create-profile'));
    if (loadBtn) loadBtn.addEventListener('click', loadProfile);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username')?.value.trim();
            const level = document.querySelector('.level-btn.selected')?.dataset.level;
            const goal = document.querySelector('.goal-btn.selected')?.dataset.goal;
            if (!username || !level || !goal) { alert('Please complete your profile.'); return; }
            createNewProfile({ username, level, dailyGoal: goal });
        });
        document.querySelectorAll('.level-btn, .goal-btn').forEach(btn => btn.addEventListener('click', (e) => {
            document.querySelectorAll(`.${e.target.className.split(' ')[0]}`).forEach(b => b.classList.remove('selected'));
            e.target.classList.add('selected');
        }));
    }
}
function showWelcomeSection(id) { document.querySelectorAll('.welcome-section').forEach(s => s.classList.toggle('active', s.id === id)); }

// --- Main App ---
function initializeApp() {
    app.dom = {
        mainMenu: document.querySelector('.main-app .menu-items'),
        sidebarForms: document.querySelector('.conjugation-forms'),
        dashboardView: document.getElementById('dashboard-view'),
        practiceView: document.getElementById('practice-view'),
        introPanel: document.getElementById('introduction-panel'),
        quizContainer: document.getElementById('quiz-container'), // UPDATED
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
        incorrectCount: document.getElementById('incorrect-count')
    };

    wanakana.bind(app.dom.answerInput);
    setupEventListeners();
    populateSidebarMenu();
    showDashboard();
}


function setupEventListeners() {
    app.dom.mainMenu.addEventListener('click', (e) => {
        if (!e.target.matches('.menu-item')) return;
        const newSection = e.target.dataset.section;
        app.dom.mainMenu.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        e.target.classList.add('active');
        if (newSection === 'dashboard') { showDashboard(); return; }
        if (newSection !== app.state.currentPracticeType) {
            app.state.currentPracticeType = newSection;
            populateSidebarMenu();
            const firstTopic = app.dom.sidebarForms.querySelector('.menu-item')?.dataset.topic;
            if (firstTopic) loadTopic(firstTopic);
        }
    });
    app.dom.sidebarForms.addEventListener('click', (e) => { if (e.target.matches('.menu-item')) loadTopic(e.target.dataset.topic); });
    app.dom.startPracticeBtn.addEventListener('click', startPractice);
    app.dom.checkButton.addEventListener('click', checkAnswer);
    app.dom.nextButton.addEventListener('click', nextCard);
    app.dom.answerInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { if (!app.dom.checkButton.classList.contains('hidden')) checkAnswer(); else nextCard(); } });
}

function showView(view) {
    app.dom.dashboardView.classList.add('hidden');
    app.dom.practiceView.classList.add('hidden');
    if (view === 'dashboard') app.dom.dashboardView.classList.remove('hidden');
    if (view === 'practice') app.dom.practiceView.classList.remove('hidden');
}

function showDashboard() {
    showView('dashboard');
    const { profile, statistics } = userProgress.getProgress();
    document.getElementById('dashboard-username').textContent = `Welcome, ${profile.username}!`;
    document.getElementById('dashboard-level').textContent = profile.level;
    document.getElementById('dashboard-rank').textContent = profile.currentRank;
    document.getElementById('dashboard-streak').textContent = `${statistics.streakDays} days`;
    document.getElementById('exp-fill').style.width = `${(profile.totalExp % 100)}%`;
    const achContainer = document.getElementById('dashboard-achievements');
    achContainer.innerHTML = '';
    const allAch = userProgress.getAchievementsList();
    Object.values(allAch).forEach(ach => {
        const unlocked = profile.achievements.includes(ach.id);
        achContainer.innerHTML += `<div class="achievement-badge ${unlocked ? 'unlocked' : ''}"><div class="achievement-title">${ach.title}</div><div class="achievement-desc">${unlocked ? 'Unlocked!' : ach.desc}</div></div>`;
    });
}

function loadTopic(topicKey) {
    showView('practice');
    app.state.currentTopic = topicKey;
    
    // UPDATED LOGIC
    app.dom.quizContainer.classList.add('hidden'); // Hide the quiz
    app.dom.introPanel.classList.remove('hidden'); // Show the lesson

    const topicIntro = formIntroContent[topicKey];
    if (topicIntro) {
        app.dom.introTitle.textContent = topicIntro.title;
        app.dom.introContent.innerHTML = topicIntro.sections.map(s => `<h3>${s.heading}</h3><p>${s.content.replace(/\n/g, '<br>')}</p>`).join('');
    }
    app.dom.sidebarForms.querySelectorAll('.menu-item').forEach(i => i.classList.toggle('active', i.dataset.topic === topicKey));
}

function populateSidebarMenu() {
    let forms;
    if (app.state.currentPracticeType === 'verbs') forms = conjugationForms.filter(f => !f.key.includes('Adjective') && !f.category);
    else if (app.state.currentPracticeType === 'adjectives') forms = conjugationForms.filter(f => f.key.includes('Adjective'));
    else forms = [];
    app.dom.sidebarForms.innerHTML = forms.map(f => `<li class="menu-item" data-topic="${f.key}">${f.display}</li>`).join('');
}
function initializeApp() {
    app.dom = {
        // ... all your other dom elements
        answerInput: document.getElementById('answer-input'),
        // ... etc.
    };

function buildLearningQueue() {
    const source = app.state.currentPracticeType === 'verbs' ? japaneseVerbs : japaneseAdjectives;
    const mastered = userProgress.data.masteredWords;
    const now = new Date();
    const due = [], brandNew = [];
    source.forEach(word => {
        const stats = mastered[word.word];
        if (stats) { if (new Date(stats.dueDate) <= now) due.push(word); }
        else brandNew.push(word);
    });
    let queue = due.sort(() => 0.5 - Math.random()).slice(0, 10);
    queue.push(...brandNew.sort(() => 0.5 - Math.random()).slice(0, 5));
    if (queue.length === 0 && source.length > 0) queue = source.sort(() => 0.5 - Math.random()).slice(0, 10);
    app.state.learningQueue = queue;
}

function startPractice() {
    buildLearningQueue();
    if (app.state.learningQueue.length === 0) {
        alert("No items to practice!");
        showDashboard();
        return;
    }
    
    // UPDATED LOGIC
    app.dom.introPanel.classList.add('hidden'); // Hide the lesson
    app.dom.quizContainer.classList.remove('hidden'); // Show the quiz

    app.state.correctCount = 0;
    app.state.incorrectCount = 0;
    app.dom.correctCount.textContent = '0';
    app.dom.incorrectCount.textContent = '0';
    nextCard();
}

function nextCard(retries = 10) {
    if (retries <= 0) { app.dom.kanjiDisplay.textContent = "Error: Could not load a valid question."; return; }
    if (app.state.learningQueue.length === 0) { alert("Session complete! Great job!"); showDashboard(); return; }
    const card = app.state.learningQueue.pop();
    const correctAnswer = card.conjugations[app.state.currentTopic];
    if (!correctAnswer) { nextCard(retries - 1); return; }
    app.state.currentCard = card; app.state.correctAnswer = correctAnswer;
    const formInfo = conjugationForms.find(f => f.key === app.state.currentTopic);
    ['answerInput', 'feedbackMessage', 'correctAnswerDisplay'].forEach(el => app.dom[el].textContent = '');
    app.dom.answerInput.className = '';
    app.dom.answerInput.disabled = false;
    app.dom.checkButton.classList.remove('hidden');
    app.dom.nextButton.classList.add('hidden');
    app.dom.kanaDisplay.textContent = card.kana;
    app.dom.kanjiDisplay.textContent = card.word;
    app.dom.verbTypeDisplay.textContent = card.type;
    app.dom.formDisplay.textContent = `Conjugate to: ${formInfo.display}`;
    app.dom.answerInput.focus();
}

function checkAnswer() {
    const userAnswer = app.dom.answerInput.value.trim().toLowerCase();
    if (!userAnswer) return;
    const isCorrect = userAnswer === app.state.correctAnswer.toLowerCase();
    app.dom.answerInput.classList.add(isCorrect ? 'correct' : 'incorrect');
    app.dom.feedbackMessage.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
    app.dom.feedbackMessage.className = isCorrect ? 'correct' : 'incorrect';
    if (!isCorrect) app.dom.correctAnswerDisplay.textContent = `Correct: ${app.state.correctAnswer}`;
    app.state[isCorrect ? 'correctCount' : 'incorrectCount']++;
    app.dom.correctCount.textContent = app.state.correctCount;
    app.dom.incorrectCount.textContent = app.state.incorrectCount;
    userProgress.updateStatistics(isCorrect);
    userProgress.updateWordProgress(app.state.currentCard.word, isCorrect);
    app.dom.checkButton.classList.add('hidden');
    app.dom.nextButton.classList.remove('hidden');
    app.dom.answerInput.disabled = true;
    app.dom.nextButton.focus();
}

document.addEventListener('DOMContentLoaded', () => {
    if (userProgress.getProgress().profile.username) {
        loadProfile();
    } else {
        initializeWelcomeScreen();
    }
});

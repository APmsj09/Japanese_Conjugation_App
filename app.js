// Initialize global app state
window.app = {
    dom: {},  // Contains all DOM element references
    conjugationFormsList: null,
    menuItems: null,
    selectedSection: 'verbs',
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

// Profile management functions
function createNewProfile(profileData) {
    try {
        if (!profileData || !profileData.username) {
            throw new Error('Invalid profile data');
        }
        console.log('Creating new profile:', profileData);
        if (!userProgress) {
            throw new Error('UserProgress not initialized');
        }

        const profile = {
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

        userProgress.updateProfile(profile);
        
        // Hide welcome screen and show main app
        const welcomeScreen = document.getElementById('welcome-screen');
        const mainApp = document.getElementById('main-app');
        
        if (welcomeScreen && mainApp) {
            welcomeScreen.classList.add('hidden');
            mainApp.classList.remove('hidden');
            
            // Start a new session and initialize the app
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
    console.log('Loading existing profile...');
    const profile = userProgress.getProgress().profile;
    if (profile && profile.username) {
        const welcomeScreen = document.getElementById('welcome-screen');
        const mainApp = document.getElementById('main-app');
        if (welcomeScreen && mainApp) {
            welcomeScreen.classList.add('hidden');
            mainApp.classList.remove('hidden');
            setTimeout(initializeApp, 0);
        } else {
            console.error('Welcome screen or main app elements not found');
        }
    } else {
        showSection('profile-selection');
    }
}

function initializeWelcomeScreen() {
    console.log('Initializing welcome screen...');
    // Initialize elements
    window.app.welcomeScreen = document.getElementById('welcome-screen');
    window.app.mainApp = document.getElementById('main-app');
    window.app.newProfileBtn = document.getElementById('new-profile-btn');
    window.app.loadProfileBtn = document.getElementById('load-profile-btn');
    window.app.profileForm = document.getElementById('profile-form');
    window.app.profileList = document.getElementById('profile-list');

    // Set up event listeners if elements exist
    if (window.app.newProfileBtn) {
        window.app.newProfileBtn.addEventListener('click', () => showSection('create-profile'));
    }

    if (window.app.loadProfileBtn) {
        window.app.loadProfileBtn.addEventListener('click', () => showSection('load-profile'));
    }

    // Set up profile form event listeners
    if (window.app.profileForm) {
        setupProfileForm();
    }
}

function setupProfileForm() {
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

    // Handle form submission
    window.app.profileForm.addEventListener('submit', handleProfileSubmission);
}

function handleProfileSubmission(e) {
    e.preventDefault();
    
    const username = document.getElementById('username')?.value?.trim();
    const selectedLevelBtn = document.querySelector('.level-btn.selected');
    const selectedGoalBtn = document.querySelector('.goal-btn.selected');
    const level = selectedLevelBtn?.dataset.level || 'beginner';
    const dailyGoal = selectedGoalBtn?.dataset.goal || '20';
    
    if (!username || !selectedLevelBtn || !selectedGoalBtn) {
        alert('Please fill in all required profile information');
        return;
    }

    const success = createNewProfile({ username, level, dailyGoal });
    if (!success) {
        alert('There was an error creating your profile. Please try again.');
    }
}

function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    document.querySelectorAll('.welcome-section').forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
}

// Check for existing profile and initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing application...');
    
    // First ensure we have a UserProgress instance
    if (!userProgress) {
        console.error('UserProgress not initialized');
        return;
    }

    // Initialize base app state
    initializeWelcomeScreen();

    // Check for existing profile
    const profile = userProgress.getProgress().profile;
    console.log('Current profile:', profile);
    
    if (profile && profile.username) {
        console.log('Found existing profile, loading...');
        loadExistingProfile();
    } else {
        console.log('No existing profile found, showing welcome screen...');
        showSection('profile-selection');
    }
});
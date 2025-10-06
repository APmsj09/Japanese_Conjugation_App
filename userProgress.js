// userProgress.js

class UserProgress {
    constructor() {
        this.data = this.loadProgress();
    }

    loadProgress() {
        const savedData = localStorage.getItem('japaneseConjugationProgress');
        if (savedData) {
            return JSON.parse(savedData);
        }
        return {
            profile: {
                username: '',
                level: 1,
                totalExp: 0,
                joinDate: new Date().toISOString(),
                avatar: 'default',
                achievements: [],
                currentRank: 'Beginner'
            },
            completedTopics: {},  // {topicKey: {attempts: number, correctCount: number, lastAttempted: date}}
            masteredWords: {},    // {word: {correct: number, incorrect: number, lastPracticed: date}}
            statistics: {
                totalCorrect: 0,
                totalIncorrect: 0,
                streakDays: 0,
                lastPracticeDate: null,
                longestStreak: 0,
                totalPracticeTime: 0,
                sessionCount: 0,
                topicsCompleted: 0
            },
            settings: {
                dailyGoal: 20,    // Number of exercises per day
                reviewInterval: 3,  // Days before reviewing mastered words
                studyReminders: false,
                notificationTime: '09:00'
            }
        };
    }

    saveProgress() {
        localStorage.setItem('japaneseConjugationProgress', JSON.stringify(this.data));
    }

    // Topic Progress Methods
    updateTopicProgress(topicKey, isCorrect) {
        if (!this.data.completedTopics[topicKey]) {
            this.data.completedTopics[topicKey] = {
                attempts: 0,
                correctCount: 0,
                lastAttempted: new Date().toISOString()
            };
        }

        const topic = this.data.completedTopics[topicKey];
        topic.attempts++;
        if (isCorrect) topic.correctCount++;
        topic.lastAttempted = new Date().toISOString();
        
        this.saveProgress();
    }

    // Word Progress Methods
    updateWordProgress(word, isCorrect) {
        if (!this.data.masteredWords[word]) {
            this.data.masteredWords[word] = {
                correct: 0,
                incorrect: 0,
                lastPracticed: new Date().toISOString()
            };
        }

        const wordStats = this.data.masteredWords[word];
        if (isCorrect) {
            wordStats.correct++;
        } else {
            wordStats.incorrect++;
        }
        wordStats.lastPracticed = new Date().toISOString();

        this.saveProgress();
    }

    // Statistics Methods
    updateStatistics(isCorrect) {
        if (isCorrect) {
            this.data.statistics.totalCorrect++;
        } else {
            this.data.statistics.totalIncorrect++;
        }

        // Update streak
        const today = new Date().toDateString();
        const lastPractice = this.data.statistics.lastPracticeDate;
        
        if (!lastPractice) {
            this.data.statistics.streakDays = 1;
        } else {
            const lastDate = new Date(lastPractice).toDateString();
            const dayDiff = Math.floor((new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24));
            
            if (dayDiff === 1) {
                this.data.statistics.streakDays++;
            } else if (dayDiff > 1) {
                this.data.statistics.streakDays = 1;
            }
        }
        
        this.data.statistics.lastPracticeDate = today;
        this.saveProgress();
    }

    // Analytics Methods
    getTopicMasteryPercentage(topicKey) {
        const topic = this.data.completedTopics[topicKey];
        if (!topic || topic.attempts === 0) return 0;
        return (topic.correctCount / topic.attempts) * 100;
    }

    getWordMasteryLevel(word) {
        const wordStats = this.data.masteredWords[word];
        if (!wordStats) return 0;
        
        const total = wordStats.correct + wordStats.incorrect;
        if (total === 0) return 0;
        
        const accuracy = (wordStats.correct / total) * 100;
        if (accuracy >= 90 && total >= 5) return 3;  // Mastered
        if (accuracy >= 70 && total >= 3) return 2;  // Learning
        return 1;  // Needs Practice
    }

    getDailyProgress() {
        const today = new Date().toDateString();
        let todayCorrect = 0;
        let todayTotal = 0;

        // Count today's attempts
        Object.values(this.data.completedTopics).forEach(topic => {
            if (new Date(topic.lastAttempted).toDateString() === today) {
                todayTotal += topic.attempts;
                todayCorrect += topic.correctCount;
            }
        });

        return {
            completed: todayTotal,
            correct: todayCorrect,
            goal: this.data.settings.dailyGoal,
            percentage: (todayTotal / this.data.settings.dailyGoal) * 100
        };
    }

    // Settings Methods
    updateSettings(newSettings) {
        this.data.settings = { ...this.data.settings, ...newSettings };
        this.saveProgress();
    }

    // Reset Methods
    resetDailyProgress() {
        Object.keys(this.data.completedTopics).forEach(key => {
            const topic = this.data.completedTopics[key];
            if (new Date(topic.lastAttempted).toDateString() === new Date().toDateString()) {
                delete this.data.completedTopics[key];
            }
        });
        this.saveProgress();
    }

    resetAllProgress() {
        const oldSettings = this.data.settings;
        const oldProfile = this.data.profile;
        this.data = {
            profile: oldProfile, // Preserve profile
            completedTopics: {},
            masteredWords: {},
            statistics: {
                totalCorrect: 0,
                totalIncorrect: 0,
                streakDays: 0,
                lastPracticeDate: null,
                longestStreak: this.data.statistics.longestStreak, // Preserve record
                totalPracticeTime: 0,
                sessionCount: this.data.statistics.sessionCount,
                topicsCompleted: 0
            },
            settings: oldSettings // Preserve user settings
        };
        this.saveProgress();
    }

    // Profile Management
    updateProfile(profileData) {
        this.data.profile = { ...this.data.profile, ...profileData };
        this.saveProgress();
    }

    calculateLevel() {
        const exp = this.data.profile.totalExp;
        // Simple level calculation: every 100 exp = 1 level
        const newLevel = Math.floor(exp / 100) + 1;
        if (newLevel !== this.data.profile.level) {
            this.data.profile.level = newLevel;
            this.checkAchievements('level');
            this.saveProgress();
        }
        return newLevel;
    }

    addExperience(amount) {
        this.data.profile.totalExp += amount;
        this.calculateLevel();
        this.saveProgress();
    }

    // Achievement System
    checkAchievements(trigger) {
        const achievements = {
            'firstCorrect': {
                id: 'firstCorrect',
                title: 'First Step',
                description: 'Get your first answer correct',
                condition: () => this.data.statistics.totalCorrect > 0
            },
            'tenStreak': {
                id: 'tenStreak',
                title: 'On Fire!',
                description: 'Maintain a 10-day study streak',
                condition: () => this.data.statistics.streakDays >= 10
            },
            'level5': {
                id: 'level5',
                title: 'Rising Star',
                description: 'Reach level 5',
                condition: () => this.data.profile.level >= 5
            },
            'hundredCorrect': {
                id: 'hundredCorrect',
                title: 'Century',
                description: 'Get 100 correct answers',
                condition: () => this.data.statistics.totalCorrect >= 100
            }
        };

        Object.values(achievements).forEach(achievement => {
            if (!this.data.profile.achievements.includes(achievement.id) && achievement.condition()) {
                this.unlockAchievement(achievement);
            }
        });
    }

    unlockAchievement(achievement) {
        this.data.profile.achievements.push(achievement.id);
        this.saveProgress();
        // Return achievement data for UI notification
        return achievement;
    }

    getProgress() {
        return {
            profile: this.data.profile,
            statistics: this.data.statistics,
            settings: this.data.settings,
            masteryLevel: this.calculateMasteryLevel()
        };
    }

    calculateMasteryLevel() {
        const stats = this.data.statistics;
        const accuracy = stats.totalCorrect / (stats.totalCorrect + stats.totalIncorrect) || 0;
        const ranks = [
            { name: 'Beginner', threshold: 0 },
            { name: 'Intermediate', threshold: 0.6 },
            { name: 'Advanced', threshold: 0.75 },
            { name: 'Master', threshold: 0.9 }
        ];
        
        let newRank = ranks[0].name;
        for (const rank of ranks) {
            if (accuracy >= rank.threshold) {
                newRank = rank.name;
            }
        }

        if (newRank !== this.data.profile.currentRank) {
            this.data.profile.currentRank = newRank;
            this.saveProgress();
        }

        return newRank;
    }

    startSession() {
        this.data.statistics.sessionCount++;
        this.sessionStartTime = Date.now();
        this.saveProgress();
    }

    endSession() {
        if (this.sessionStartTime) {
            const sessionDuration = (Date.now() - this.sessionStartTime) / 1000; // Convert to seconds
            this.data.statistics.totalPracticeTime += sessionDuration;
            this.sessionStartTime = null;
            this.saveProgress();
        }
    }
}

// Create a global instance
const userProgress = new UserProgress();
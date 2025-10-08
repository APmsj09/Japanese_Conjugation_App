// userProgress.js

class UserProgress {
    constructor() {
        this.data = this.loadProgress();
    }

    loadProgress() {
        const savedData = localStorage.getItem('japaneseConjugationProgress');
        if (savedData) return JSON.parse(savedData);
        return {
            profile: { username: '', level: 1, totalExp: 0, joinDate: null, avatar: 'default', achievements: [], currentRank: 'Beginner' },
            completedTopics: {},
            masteredWords: {},
            statistics: { totalCorrect: 0, totalIncorrect: 0, streakDays: 0, lastPracticeDate: null, longestStreak: 0, totalPracticeTime: 0, sessionCount: 0 },
            settings: { dailyGoal: 20, reviewInterval: 3, studyReminders: false, notificationTime: '09:00' }
        };
    }

    saveProgress() {
        localStorage.setItem('japaneseConjugationProgress', JSON.stringify(this.data));
    }

    updateProfile(profileData) {
        this.data.profile = { ...this.data.profile, ...profileData };
        this.saveProgress();
    }
    
    // REVISED function for SRS logic
    updateWordProgress(word, isCorrect) {
        if (!this.data.masteredWords[word]) {
            this.data.masteredWords[word] = {
                correct: 0, incorrect: 0, level: 0,
                lastPracticed: null, dueDate: new Date().toISOString()
            };
        }

        const wordStats = this.data.masteredWords[word];
        const now = new Date();
        wordStats.lastPracticed = now.toISOString();

        const intervals = [1, 3, 7, 14, 30, 90];

        if (isCorrect) {
            wordStats.correct++;
            if (wordStats.level < intervals.length) wordStats.level++;
        } else {
            wordStats.incorrect++;
            wordStats.level = Math.max(1, wordStats.level - 1);
        }

        const daysToAdd = intervals[wordStats.level - 1] || 0;
        const dueDate = new Date();
        dueDate.setDate(now.getDate() + daysToAdd);
        wordStats.dueDate = dueDate.toISOString();
        this.saveProgress();
    }

    updateStatistics(isCorrect) {
        if (isCorrect) {
            this.data.statistics.totalCorrect++;
            this.addExperience(10);
        } else {
            this.data.statistics.totalIncorrect++;
        }
        
        const today = new Date();
        const lastPracticeDate = this.data.statistics.lastPracticeDate ? new Date(this.data.statistics.lastPracticeDate) : null;

        if (!lastPracticeDate || today.toDateString() !== lastPracticeDate.toDateString()) {
            const yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);

            if (lastPracticeDate && lastPracticeDate.toDateString() === yesterday.toDateString()) {
                this.data.statistics.streakDays++;
            } else {
                this.data.statistics.streakDays = 1;
            }
            if (this.data.statistics.streakDays > this.data.statistics.longestStreak) {
                this.data.statistics.longestStreak = this.data.statistics.streakDays;
            }
            this.data.statistics.lastPracticeDate = today.toISOString();
        }
        this.saveProgress();
    }

    addExperience(amount) {
        this.data.profile.totalExp += amount;
        this.calculateLevel();
        this.saveProgress();
    }

    calculateLevel() {
        const newLevel = Math.floor(this.data.profile.totalExp / 100) + 1;
        if (newLevel !== this.data.profile.level) {
            this.data.profile.level = newLevel;
            // Future: show level up notification
        }
        return newLevel;
    }

    getAchievementsList() {
        return {
            'firstCorrect': { id: 'firstCorrect', title: 'First Step', desc: 'Get 1 answer right' },
            'tenStreak': { id: 'tenStreak', title: 'On Fire!', desc: '10 day streak' },
            'level5': { id: 'level5', title: 'Rising Star', desc: 'Reach level 5' },
            'hundredCorrect': { id: 'hundredCorrect', title: 'Century', desc: '100 correct answers' }
        };
    }

    checkAchievements() {
        const allAchievements = this.getAchievementsList();
        Object.values(allAchievements).forEach(ach => {
            if (this.data.profile.achievements.includes(ach.id)) return;
            let condition = false;
            if (ach.id === 'firstCorrect') condition = this.data.statistics.totalCorrect >= 1;
            if (ach.id === 'tenStreak') condition = this.data.statistics.streakDays >= 10;
            if (ach.id === 'level5') condition = this.data.profile.level >= 5;
            if (ach.id === 'hundredCorrect') condition = this.data.statistics.totalCorrect >= 100;
            if (condition) this.data.profile.achievements.push(ach.id);
        });
        this.saveProgress();
    }

    getProgress() {
        this.calculateMasteryLevel();
        this.checkAchievements();
        return this.data;
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

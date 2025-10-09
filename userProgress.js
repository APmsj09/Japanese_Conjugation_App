class UserProgress {
    constructor() {
        this.data = this.loadProgress();
    }

    loadProgress() {
        const savedData = localStorage.getItem('japaneseConjugationProgress');
        if (savedData) return JSON.parse(savedData);
        return {
            profile: { username: '', level: 1, totalExp: 0, joinDate: null, avatar: 'default', achievements: [], currentRank: 'Beginner' },
            masteredWords: {},
            statistics: { totalCorrect: 0, totalIncorrect: 0, streakDays: 0, lastPracticeDate: null, longestStreak: 0, sessionCount: 0 },
        };
    }

    saveProgress() {
        localStorage.setItem('japaneseConjugationProgress', JSON.stringify(this.data));
    }

    updateProfile(profileData) {
        this.data.profile = { ...this.data.profile, ...profileData };
        this.saveProgress();
    }

    updateWordProgress(word, isCorrect) {
        if (!this.data.masteredWords[word]) {
            this.data.masteredWords[word] = { correct: 0, incorrect: 0, level: 0, lastPracticed: null, dueDate: new Date().toISOString() };
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
        const lastPractice = this.data.statistics.lastPracticeDate ? new Date(this.data.statistics.lastPracticeDate) : null;
        if (!lastPractice || today.toDateString() !== lastPractice.toDateString()) {
            const yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);
            if (lastPractice && lastPractice.toDateString() === yesterday.toDateString()) {
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
        if (newLevel !== this.data.profile.level) this.data.profile.level = newLevel;
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
        const all = this.getAchievementsList();
        Object.values(all).forEach(ach => {
            if (this.data.profile.achievements.includes(ach.id)) return;
            let condition = false;
            if (ach.id === 'firstCorrect') condition = this.data.statistics.totalCorrect >= 1;
            if (ach.id === 'tenStreak') condition = this.data.statistics.streakDays >= 10;
            if (ach.id === 'level5') condition = this.data.profile.level >= 5;
            if (ach.id === 'hundredCorrect') condition = this.data.statistics.totalCorrect >= 100;
            if (condition) this.data.profile.achievements.push(ach.id);
        });
    }

    calculateMasteryLevel() {
        const { totalCorrect, totalIncorrect } = this.data.statistics;
        const accuracy = totalCorrect / (totalCorrect + totalIncorrect) || 0;
        let newRank = 'Beginner';
        if (accuracy >= 0.9) newRank = 'Master';
        else if (accuracy >= 0.75) newRank = 'Advanced';
        else if (accuracy >= 0.6) newRank = 'Intermediate';
        if (newRank !== this.data.profile.currentRank) this.data.profile.currentRank = newRank;
    }

    getProgress() {
        this.calculateMasteryLevel();
        this.checkAchievements();
        this.saveProgress();
        return this.data;
    }

    startSession() {
        this.data.statistics.sessionCount++;
        this.saveProgress();
    }
}
const userProgress = new UserProgress();

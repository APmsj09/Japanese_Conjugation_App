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
            completedTopics: {},  // {topicKey: {attempts: number, correctCount: number, lastAttempted: date}}
            masteredWords: {},    // {word: {correct: number, incorrect: number, lastPracticed: date}}
            statistics: {
                totalCorrect: 0,
                totalIncorrect: 0,
                streakDays: 0,
                lastPracticeDate: null
            },
            settings: {
                dailyGoal: 20,    // Number of exercises per day
                reviewInterval: 3  // Days before reviewing mastered words
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
        this.data = {
            completedTopics: {},
            masteredWords: {},
            statistics: {
                totalCorrect: 0,
                totalIncorrect: 0,
                streakDays: 0,
                lastPracticeDate: null
            },
            settings: this.data.settings // Preserve user settings
        };
        this.saveProgress();
    }
}

// Create a global instance
const userProgress = new UserProgress();
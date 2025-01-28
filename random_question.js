const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to shuffle options
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

// Route to fetch random questions
app.get('/random-question', async (req, res) => {
    try {
        // Fetch a random question from Open Trivia API
        const apiUrl = 'https://opentdb.com/api.php?amount=1&type=multiple';
        const response = await axios.get(apiUrl);
        const data = response.data.results[0];

        // Structure the question and options
        const question = data.question;
        const correctAnswer = data.correct_answer;
        const incorrectAnswers = data.incorrect_answers;
        const allOptions = shuffleOptions([correctAnswer, ...incorrectAnswers]);

        res.json({
            question: question,
            options: allOptions,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch question', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

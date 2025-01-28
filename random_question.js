const express = require('express');
const axios = require('axios');
const cors = require('cors');
const he = require('he'); // Import the HTML entity decoder

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

// Function to fetch a random question
async function fetchRandomQuestion() {
    const apiUrl = 'https://opentdb.com/api.php?amount=1&type=multiple';
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.results[0];

        // Decode the question and answers
        const question = he.decode(data.question);
        const correctAnswer = he.decode(data.correct_answer);
        const incorrectAnswers = data.incorrect_answers.map((answer) => he.decode(answer));
        const allOptions = shuffleOptions([correctAnswer, ...incorrectAnswers]);

        return {
            question: question,
            options: allOptions,
            correctAnswer: correctAnswer
        };
    } catch (error) {
        return null; // Return null if fetch fails
    }
}

// Function to keep trying until a question is fetched
async function getQuestionUntilSuccess(res) {
    let questionData = null;
    while (!questionData) {
        questionData = await fetchRandomQuestion();
        // If question fetch fails, it will retry
    }
    res.json(questionData); // Send the data once it's successfully fetched
}

// Root route
app.get('/', (req, res) => {
    getQuestionUntilSuccess(res); // Start the retry process
});

// Route to fetch random questions
app.get('/random-question', (req, res) => {
    getQuestionUntilSuccess(res); // Start the retry process
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

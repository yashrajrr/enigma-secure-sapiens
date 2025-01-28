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

// Function to fetch an educational question (General Knowledge, Science, History)
async function fetchEducationalQuestion() {
    const apiUrl = 'https://opentdb.com/api.php?amount=1&type=multiple&category=22'; // Category 22 is for General Knowledge

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

// Function to keep retrying until successful fetch
async function getValidQuestion() {
    let questionData = null;

    // Keep trying to fetch a valid question
    while (!questionData) {
        questionData = await fetchEducationalQuestion();
    }

    return questionData;
}

// Root route
app.get('/', async (req, res) => {
    const questionData = await getValidQuestion();

    // Send the valid question data
    res.json(questionData);
});

// Route to fetch random educational questions
app.get('/random-question', async (req, res) => {
    const questionData = await getValidQuestion();

    // Send the valid question data
    res.json(questionData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

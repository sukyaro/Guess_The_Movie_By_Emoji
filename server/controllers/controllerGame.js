
// importing the database connection
const dataBase = require("../utils/dataBase");

// handing gettign questions
function getNextQuestion(req, res) {
    const { userName } = req.params; // using params cus were getting data drom the URL path

    const user = dataBase.prepare("SELECT * FROM users WHERE userName == ?").get(userName);

    if (!user) {
        return res.status(404).json({ error: "The user has not beed found" });
    }

    // getting the next question depending on the user's score
    const nextQuestionID = user.score + 1;
    const question = dataBase.prepare("SELECT * FROM questions WHERE id=?").get(nextQuestionID);

    if (!question) {
        return res.json({ message: "You have completed the game! Well done!" })
    }

    res.json({
        questionID: question.id,
        emoji: question.emoji,
        questionNum: question.nextQuestionID
    });
}

// checking if the user answered rightly
function checkAnswer(req, res) {
    const { userName } = req.params;
    const { guess } = req.body;

    const user = dataBase.prepare("SELECT * FROM users WHERE userName=?").get(userName);

    if (!user) {
        return res.status(404).json({ error: "The user has not beed found" });
    }

    const questionID = user.score + 1;
    const question = dataBase.prepare("SELECT * FROM questions WHERE id=?").get(questionID);

    if (!question) {
        return res.json({ message: "You have completed the game! Well done!" })
    }

    // case-insensitive comparison
    const correctAnswer = question.answer.toLowerCase() === guess.trim().toLowerCase();

    // if the answer is right, inscresing the user's score
    if (correctAnswer) {
        dataBase.prepare("UPDATE users SET score = score + 1 WHERE userName =?").run(userName);
        return res.json({
            correct: true,
            message: "The answer is Correct✅"
        });
    } else {
        return res.json({
            correct: false,
            message: "Unfortunately your answer is Wrong, try again!"
        });
    }
}

module.exports = { getNextQuestion, checkAnswer };

// importing Express and game controller functions
const express = require("express");
const { getNextQuestion, checkAnswer } = require("../controllers/controllerGame");

// crrating a new router for game-related routes
const router = express.Router()

// route to get the next question
router.get("/:userName/nextQuestion", getNextQuestion);

// route to check if the answer is right
router.post("/:userName/checkAnswer", checkAnswer);

// exporting the router so that it can be used in server.js
module.exports = router;
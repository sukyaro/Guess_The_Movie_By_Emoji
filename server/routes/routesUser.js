
// importing Express and user controller functions
const express = require("express");
const { signingUp, loggingIn } = require("../controllers/controllerUser");

// creating a new router for user routes
const router = express.Router();

// route for user signing up
router.post("/sign-up", signingUp);

// route for user logging in
router.post("/login", loggingIn);

// exporting the router so that it can be used in server.js
module.exports = router;
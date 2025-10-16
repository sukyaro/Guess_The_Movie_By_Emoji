
// importing required packages
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// importing game routes
const routesGame = require("./routes/routesGame");
const routesUser = require("./routes/routesUser");

dotenv.config();

// initialising express app
const app = express();

// enabling CORS for cross-origin requests
app.use(cors());

// middleware to parse incoming JSON data
app.use(express.json());


// Routes
app.use("/api/game", routesGame);
app.use("/api/user", routesUser);

// setting the default route
app.get("/", (req, res) => {
    res.send("The game 'Guess the film by emoji' is running");
});

// setting the port and running the server
const port = 5000;
app.listen(port, () => {
    console.log("The server is running on http://localhost:", port);
})
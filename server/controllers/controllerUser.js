
//  importing database connection and password hashing library
const dataBase = require("../utils/dataBase");
const bcrypt = require("bcrypt");

// handing user sign-up requests
function signingUp(req, res) {
    console.log("Received request", req.body);
    const { userName, password } = req.body;

    // checking if the both fields are filled
    if (!userName || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    try {
        // hashing the password
        const encryptedPassword = bcrypt.hashSync(password, 11);

        // inserting users into the database
        dataBase
            .prepare("INSERT INTO users (userName, password) VALUES (?, ?)")
            .run(userName, encryptedPassword);


        res.status(201).json({
            message: "The user has been succesfully signed up"
        });
    } catch (err) {
        // handing duplicates
        if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return res.status(400).json({
                error: "The username already exists"
            });
        }
        console.error(err);
        res.status(500).json({
            error: "Failed to sign uop the user"
        });
    }
}

// handling user logging in
function loggingIn(req, res) {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    try {
        // looking up for a user in the database
        const stmt = dataBase.prepare("SELECT * FROM users WHERE userName = ?")
        const user = stmt.get(userName);

        if (!user) {
            return res.status(404).json({
                error: "The user is not found"
            });
        }

        // comparing the password
        const valid = bcrypt.compareSync(password, user.password);

        if (!valid) {
            return res.status(401).json({
                error: "The password is not matching"
            });
        }

        res.json({
            message: "The user has been successfully logged in",
            user: { userName: user.userName, score: user.score },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Theres been a problem logging you in"
        })
    }
}

// exporting the methods
module.exports = { signingUp, loggingIn };
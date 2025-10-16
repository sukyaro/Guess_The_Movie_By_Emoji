
// importing SQLite and the path module
const Database = require("better-sqlite3");
const path = require("path");

// defining where the database file should be created and creating it if it doesnt exist
const dbPath = path.join(__dirname, '../questions.db');
const dataBase = new Database(dbPath);

// creating "users" table 
dataBase.prepare(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userName TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  score INTEGER DEFAULT 0
);
`).run();

// creating "questions" table
dataBase.prepare(`
CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  emoji TEXT NOT NULL,
  answer TEXT NOT NULL
);
`).run();

// export the database connection for use in other files
module.exports = dataBase;
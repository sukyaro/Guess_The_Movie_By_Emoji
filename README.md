# 🎬 Guess The Movie By Emoji

A fun and modern full-stack web game where users try to **guess the movie title based on emoji clues**.  
Built with **React**, **Node.js**, and **SQLite**, this project demonstrates a clean, minimalist design and an interactive gameplay experience.

---

## 🧠 Overview

**Guess The Movie By Emoji** challenges users to interpret emojis and identify the correct movie title.  
It features user authentication, score tracking, and smooth transitions — all wrapped in a sleek dark-themed interface.

---

## ✨ Features

- 🧩 **Emoji-based movie questions** — Guess the movie from creative emoji clues.
- 👤 **User Authentication** — Sign up or log in securely with password hashing.
- 🧮 **Score Tracking** — Progress saves in the database; scores update in real-time.
- 💾 **Persistent Login** — Users stay logged in using `localStorage`.
- 🖤 **Modern Dark UI** — Clean and minimalist design with smooth feedback animations.
- 🗄️ **SQLite Database** — Lightweight and easy-to-manage local data store.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Hooks, useState, useEffect), CSS |
| **Backend** | Node.js, Express |
| **Database** | SQLite |
| **Authentication** | bcrypt for password encryption |
| **State Management** | React Hooks |

---

## 📂 Folder Structure
```bash
Guess_The_Movie_By_Emoji/
│
├── server/ # Backend (Express + SQLite)
│ ├── controllers/ # Route logic
│ ├── routes/ # Express routers
│ ├── utils/ # Database setup
│ ├── server.js # Entry point for backend
│ ├── package.json
│ └── package-lock.json
│
├── guess-the-emoji-client/ # Frontend (React)
│ ├── src/
│ │ ├── components/ # AuthForm and Game components
│ │ ├── App.js
│ │ ├── index.js
│ │ ├── styles/ # CSS files
│ │ └── constants/
│ ├── public/
│ ├── package.json
│ └── package-lock.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sukyaro/guess-the-movie-by-emoji.git Guess_The_Movie_Ny_Emoji
cd guess-the-movie-by-emoji
```

### 2️⃣ run seed.js to create the database
cd server
cs data
node seed.js

### 3️⃣ Set up the Backend
cd server
npm install
node server.js

### 4️⃣ Set up the front end
cd guess-the-emoji-client
npm install
npm start

5️⃣ Play the Game 🎮
- Open your browser at http://localhost:3000
- Sign up for a new account.
- Guess the movie from emojis.
- See your score update in real time.
- Log out and return anytime — your progress is saved.

---

💡 Possible Improvements
- Add movie hints for each question 🎥
- Implement leaderboard system 🏆
- Allow users to upload custom emoji quizzes ✨

---

🧾 License
This project is licensed under the MIT License — feel free to use, modify, and share it.

---

🖤 Author
sukyaro
💼 Developer of Guess The Movie By Emoji

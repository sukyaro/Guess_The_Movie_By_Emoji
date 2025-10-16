
// importing the database connection
const dataBase = require("../utils/dataBase")

// list of questions to be inserted into the database
const questions = [
    { emoji: "🧙⚡🏰", answer: "Harry Potter" },
    { emoji: "🦁👑", answer: "The Lion King" },
    { emoji: "🚢❄️", answer: "Titanic" },
    { emoji: "🕷️🧑", answer: "Spider-Man" },
    { emoji: "🧑‍🚀🌕", answer: "Interstellar" },
    { emoji: "💍🌋🚶‍♂️", answer: "The Lord of the Rings" },
    { emoji: "🦇🌃🃏", answer: "The Dark Knight" },
    { emoji: "🤠🚀🧸", answer: "Toy Story" },
    { emoji: "👨‍👩‍👧‍👦🏠😱", answer: "Home Alone" },
    { emoji: "👻🚫", answer: "Ghostbusters" },
    { emoji: "🦖🏝️", answer: "Jurassic Park" },
    { emoji: "🔫🍸🤵", answer: "James Bond" },
    { emoji: "👠🌪️🐕", answer: "The Wizard of Oz" },
    { emoji: "🍫🏭🎫", answer: "Charlie and the Chocolate Factory" },
    { emoji: "👽📞🚲", answer: "E.T. the Extra-Terrestrial" },
    { emoji: "🕰️🚗👴🧑", answer: "Back to the Future" },
    { emoji: "🐠🌊", answer: "Finding Nemo" },
    { emoji: "🔪🛁", answer: "Psycho" },
    { emoji: "👑❄️👸", answer: "Frozen" },
    { emoji: "🏎️💨", answer: "Fast & Furious" },
    { emoji: "🌳🏃‍♂️📦", answer: "Forrest Gump" },
    { emoji: "🧠😠😢", answer: "Inside Out" },
    { emoji: "🇮🇹🚗💰", answer: "The Italian Job" },
    { emoji: "🔪🩸👂", answer: "The Silence of the Lambs" },
    { emoji: "🎩🐰⏱️", answer: "Alice in Wonderland" },
    { emoji: "🍴🙏❤️", answer: "Eat Pray Love" },
    { emoji: "💡✨🧞‍♂️", answer: "Aladdin" },
    { emoji: "🕳️🐇", answer: "The Matrix" },
    { emoji: "🏝️📷", answer: "Shutter Island" },
    { emoji: "🐒👑🌃", answer: "King Kong" },
    { emoji: "🍴🐀👨‍🍳", answer: "Ratatouille" },
    { emoji: "🏹👧🔥", answer: "The Hunger Games" },
    { emoji: "🚢🏴‍☠️🐒", answer: "Pirates of the Caribbean" },
    { emoji: "🇺🇸⭐🚀", answer: "Star Wars" },
    { emoji: "🩸💍🇮🇪", answer: "Blood Diamond" },
    { emoji: "👨‍🏫🏫💀", answer: "Dead Poets Society" },
    { emoji: "😴💭", answer: "Inception" },
    { emoji: "🤵👰🏻‍♀️💔", answer: "Four Weddings and a Funeral" },
    { emoji: "💃🐺", answer: "Dances with Wolves" },
    { emoji: "👱‍♀️👠👗", answer: "Pretty Woman" },
    { emoji: "👴🏻🎈🏠", answer: "Up" },
    { emoji: "🧟‍♂️🌃", answer: "Night of the Living Dead" },
    { emoji: "🦈🛥️", answer: "Jaws" },
    { emoji: "⚔️🐉👸", answer: "Sleeping Beauty" },
    { emoji: "🎤🌧️☂️", answer: "Singin' in the Rain" },
    { emoji: "💵🔫👨‍👧‍👦", answer: "The Godfather" },
    { emoji: "💃🎹🌆", answer: "La La Land" },
    { emoji: "👱‍♀️🎀🛍️", answer: "Barbie" },
    { emoji: "🤖🔫💥", answer: "The Terminator" },
    { emoji: "🔔🎄🚂", answer: "The Polar Express" }
]

// preparing an SQL statement for inserting the data
const insertion = dataBase.prepare("INSERT INTO questions (emoji, answer) VALUES (?, ?)");

// inserting every question into the database
for (const question of questions) {
    insertion.run(question.emoji, question.answer);
}

// logging out once complete
console.log("The database has been seeded");

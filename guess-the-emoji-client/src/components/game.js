
// importing hooks and styles
import { useState, useEffect } from "react";
import "./game.css";


export default function Game({ user, setUser }) {
    // state variables
    const [question, setQuestion] = useState(null); //current questing
    const [guess, setGuess] = useState(""); // user's guess
    const [feedback, setFeedback] = useState(""); // feedback message
    const [loading, setLoading] = useState(false); // loading state

    // this React hook explains when something should be run
    useEffect(() => {
        fetchQuestion();
    }, []) // the empty array means that this should only be run once

    // fetching next questing from backend
    const fetchQuestion = async () => {
        setLoading(true);

        try {
            const res = await fetch(`http://localhost:5000/api/game/${user.userName}/nextQuestion`);
            const data = await res.json();

            // if the game is complited, the server returns a message
            if (data.message) {
                setFeedback(data.message);
                setQuestion(null);
                return;
            }

            setQuestion(data);
            setFeedback('');
            setGuess('');
        } catch (err) {
            console.error(err);
            setFeedback("Could not load the question")
        } finally {
            setLoading(false);
        }
    };

    // submitting user;s guess to the backend
    const handlingSubmit = async (event) => {
        event.preventDefault();
        if (!guess.trim()) {
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`http://localhost:5000/api/game/${user.userName}/checkAnswer`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ guess }),
            })

            const data = await res.json()

            if (data.correct) {
                setFeedback("Your answer is correct, Well done!, moving to the next question");

                // updating user;s score locally
                setUser((prevUser) => ({
                    ...prevUser,
                    score: prevUser.score + 1
                }));
                setTimeout(fetchQuestion, 500);
            } else {
                setFeedback("Unfortunately your answer is wrong try again");
            }

        } catch (err) {
            setFeedback("An Error arrised while checking the answer")
        } finally {
            setLoading(false);
        }
    }

    // handling loging out
    const handlingLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }

    // showing loading state
    if (!question && loading) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="gameContainer">
            <div className="gameCard">
                <header className="gameHeader">
                    <h1 className="gameTitle">Guess the Film 🎥</h1>
                    <button className="logoutButton" onClick={handlingLogout}>
                        Log Out
                    </button>
                </header>
                {question ? (
                    <>
                        <h2 className="emoji">{question.emoji}</h2>
                        <form onSubmit={handlingSubmit} className="guessForm">
                            <input
                                type="text"
                                placeholder="Guess the movie..."
                                value={guess}
                                onChange={(e) => setGuess(e.target.value)}
                                disabled={loading}
                            />
                            <button type="submit" disabled={loading || !guess.trim()}>
                                Submit
                            </button>
                        </form>
                        {feedback && <p className="feedback">{feedback}</p>}
                        <p className="score">🎯 Your score: {user.score} / 50</p>
                    </>
                ) : (
                    <>
                        <p className="completed">{feedback}</p>
                    </>
                )}
            </div>
        </div>
    );
}
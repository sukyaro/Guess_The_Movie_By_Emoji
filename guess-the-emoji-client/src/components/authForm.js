
// importing the required imports
import { useState } from "react";
import "./authForm.css";
import { messages } from "../constants/messages";


export default function AuthForm({ onLogin }) {
    const [userName, setUserName] = useState(""); // store entered username
    const [password, setPassword] = useState(""); // store entered passoword
    const [isLogin, setIsLogin] = useState(""); // toggle login/sign up
    const [error, setError] = useState(""); // store error messages

    // handling submitting the form
    const handlingSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const url = `http://localhost:5000/api/user/${isLogin ? "login" : "sign-up"}`;
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });

            const data = await res.json();
            if (res.ok) {
                if (isLogin) {
                    onLogin(data.user);
                }
                else {
                    onLogin({ userName, score: 0 });
                }
            }
            else {
                setError(data.error || "Something has gone wrong");
            }
        } catch (err) {
            setError("Failed to connect to the server");
        }
    };

    return (
        <div className="authContainer">
            <div className="authCard">
                <h2>{isLogin ? messages.login : messages.signUp}</h2>
                <form onSubmit={handlingSubmit}>
                    <input
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">
                        {isLogin ? messages.login : messages.signUp}
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
                <p className="toggleText">
                    {isLogin ? messages.createAccount : messages.haveAccount}{" "}
                    <span onClick={() => setIsLogin(!isLogin)} className="toggleButton">
                        {isLogin ? "Sign Up" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    );
}
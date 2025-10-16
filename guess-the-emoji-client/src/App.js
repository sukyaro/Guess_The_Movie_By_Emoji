
// importing React hooks and components
import { useEffect, useState } from "react";
import AuthForm from "./components/authForm";
import Game from "./components/game";


function App() {
  // storing users info
  const [user, setUser] = useState(null);

  // loading the user from localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // saving the user to localStorage whenever it changes (login/logout)
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user)); // storing the session
    }
    else {
      localStorage.removeItem("user"); // quiting the session
    }
  }, [user])

  return (
    <div>
      {!user ? (
        <AuthForm onLogin={setUser} />
      ) : (
        <Game user={user} setUser={setUser} />
      )}
    </div>
  )
}

export default App;
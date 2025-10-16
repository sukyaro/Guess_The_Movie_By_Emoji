
// importing ReactDOM to render the React application
import ReactDom from "react-dom/client";

// Importing the main App component
import App from "./App";

// connecting react to the HTML element with id "room"
const root = ReactDom.createRoot(document.getElementById("root"));

// rendering the app component inside the root element
root.render(<App />);
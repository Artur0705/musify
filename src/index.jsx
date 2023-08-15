// Importing necessary modules from React and other libraries
import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM client rendering
import { BrowserRouter as Router } from "react-router-dom"; // For routing
import { Provider } from "react-redux"; // To provide Redux store to the app

// Importing global stylesheet
import "./index.css";
// Importing the main App component
import App from "./App";
// Importing the global Redux store
import { store } from "./redux/store";

// Mounting the main React app to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrapping the app with Redux Provider to make store available */}
    <Provider store={store}>
      {/* Wrapping the app with Router for routing capabilities */}
      <Router>
        {/* The main App component */}
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

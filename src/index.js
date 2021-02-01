import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routes";
import TopBar from "components/topBar";
import { CurrentUserProvider } from "context/currentUser";
import CurrentUserChecker from "components/currentUserChecker";

const App = () => {
  return (
    <div>
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <TopBar />
            <Routes />
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

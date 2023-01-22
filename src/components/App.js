import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BotsPage from "./BotsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <BotsPage />
      </Router>
    </div>
  );
}

export default App;

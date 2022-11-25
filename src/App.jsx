import React from "react";
import Navbar from "./components/Navbar";
import Router from "./router";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./pages/Home/Footer";
import Router from "./router";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

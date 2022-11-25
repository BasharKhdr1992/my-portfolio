import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"} className="link">
        Home
      </Link>
      <Link to={"/about"} className="link">
        About
      </Link>
    </nav>
  );
};

export default Navbar;

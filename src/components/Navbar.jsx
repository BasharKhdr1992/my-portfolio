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
        Who am I
      </Link>
    </nav>
  );
};

export default Navbar;

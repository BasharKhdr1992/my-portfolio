import React from "react";
import "./Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <p>you can find me on</p>
      <div className="social-icons">
        <a href="https://github.com/BasharKhdr1992/">
          <BsGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/bashar-khdr-a07087193/">
          <BsLinkedin className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

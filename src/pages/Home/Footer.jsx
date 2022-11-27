import React from "react";
import "./Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import fem from "../../images/favicon-32x32.png";
const Footer = () => {
  return (
    <footer className="footer">
      <p>you can find me on</p>
      <div className="social-icons">
        <a
          href="https://github.com/BasharKhdr1992/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/bashar-khdr-a07087193/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="icon" />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/BasharKhdr1992"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fem} alt="Frontendmentor" title="frontendmentor profile" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

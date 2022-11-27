import React from "react";
import "./Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
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
      <div className="contact-info">
        <div>
          <MdEmail className="icon" />
          <a href="mailto:bashar.khdr.ds.92@hotmail.com">
            bashar.khdr.ds.92@hotmail.com
          </a>
        </div>
        <div>
          <AiFillPhone className="icon" />
          +31687770045
        </div>
      </div>
    </footer>
  );
};

export default Footer;

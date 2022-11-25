import React from "react";
import me from "../../images/me.jpg";
import "./About.css";
import github from "../../images/GitHub-Mark.png";
import linkedin from "../../images/linkedin.png";
import { skills } from "./../../data/skills";
const About = () => {
  return (
    <div className="about">
      <div className="image-wrapper">
        <img src={me} alt="bashar" title="bashar" />
      </div>
      <div className="bio">
        <h2>Who am I ?</h2>
        <p>
          I am Bashar from Syria, a fullstack web developer with a Bsc in
          computer networking and systems and a Msc in Data science. I have a
          great passion for web development, I have recently graduated from
          HackYourFuture extensive web development program. I do lots of side
          projects to improve my skills, and to get better at solving problems.
          Looking for an opportunity to work with a nice still challenging team
        </p>
        <h2>Where do I live ?</h2>
        <p>The Netherlands, Almelo</p>
        <h2>How to reach out to me ?</h2>
        <p>
          You can call me at +31687770045, or you can send me an email at&nbsp;
          <a href={"mailto:bashar.khdr.ds.92@hotmail.com"}>
            bashar.khdr.ds.92@hotmail.com
          </a>
        </p>
        <h2>Social Links</h2>
        <div className="social-links">
          <a href="https://github.com/BasharKhdr1992/">
            <img src={github} alt="my github" />
          </a>
          <a href="https://www.linkedin.com/in/bashar-khdr-a07087193/">
            <img src={linkedin} alt="my linkedin" />
          </a>
        </div>
        <h2>What am I good at ?</h2>
        <div className="skills">
          {skills.map((skill) => (
            <span className="skill">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

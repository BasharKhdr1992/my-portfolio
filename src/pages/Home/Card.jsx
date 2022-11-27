import React from "react";
import "./Card.css";

const Card = ({ project }) => {
  return (
    <div className="card">
      <img
        src={`${project.img}`}
        alt={`${project.name}`}
        title={`${project.name}`}
      />
      <div className="card-text">
        <h1>{project.name}</h1>
        <div className="project-links">
          <a href={`${project.github}`} target={"_blank"} rel={"noreferrer"}>
            Github
          </a>
          <a href={`${project.demo}`} target={"_blank"} rel={"noreferrer"}>
            Demo
          </a>
        </div>
        <div className="features">
          {project.features.map((feature) => (
            <span className="feature">{feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

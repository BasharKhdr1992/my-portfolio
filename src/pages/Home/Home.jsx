import React from "react";
import "./Home.css";
import { projects } from "../../data/projects";
import Card from "./Card";

const Home = () => {
  return (
    <div className="projects">
      {projects.map((p) => (
        <Card key={p.id} project={p} />
      ))}
    </div>
  );
};

export default Home;

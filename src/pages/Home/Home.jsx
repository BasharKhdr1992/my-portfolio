import React, { useState } from "react";
import "./Home.css";
import { projects } from "../../data/projects";
import Card from "./Card";
import Header from "./Header";
const CARDS_LIMIT = 6;
const Home = () => {
  const [limit, setLimit] = useState(CARDS_LIMIT);

  const handleClick = () => {
    if (limit < projects.length) {
      const diff = projects.length - limit;
      if (diff >= CARDS_LIMIT) {
        setLimit((prev) => prev * 2);
      } else {
        setLimit((prev) => prev + diff);
      }
    } else {
      setLimit(CARDS_LIMIT);
    }
  };

  return (
    <>
      <Header />
      <div className="projects">
        {projects.slice(0, limit).map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
      <div className="center">
        <button onClick={handleClick} className="btn-primary">
          {limit < projects.length ? "load more" : "hide"}
        </button>
      </div>
    </>
  );
};

export default Home;

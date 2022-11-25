import React, { useState } from "react";
import "./Home.css";
import { projects } from "../../data/projects";
import Card from "./Card";

const Home = () => {
  const [limit, setLimit] = useState(6);
  return (
    <>
      <div className="projects">
        {projects.slice(0, limit).map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
      {limit < projects.length ? (
        <div className="center">
          <button
            onClick={() => setLimit((prev) => prev * 2)}
            className="btn-primary"
          >
            load more
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Home;

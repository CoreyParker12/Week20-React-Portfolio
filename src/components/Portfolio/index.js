import React, { useState } from 'react';
import Project from "../Project";


function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'getHAPI-logo',
      description: 'Get HAPI',
      link: "https://coreyparker12.github.io/Project-1-getHAPI/",
      repo: "https://github.com/CoreyParker12/Project-1-getHAPI"
    },
    {
      name: 'led-wall',
      description: 'Stinky Bass',
      link: "http://stinkybass.com/",
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://coreyparker12.github.io/Week6-WeatherAPI-CP/",
      repo: "https://github.com/CoreyParker12/Week6-WeatherAPI-CP"
    },
    {
      name: 'led-wall',
      description: 'Toolin\' Around',
      link: "https://toolin-around.herokuapp.com/",
      repo: "https://github.com/CoreyParker12/Toolin-Around"
    },
    {
      name: 'calculator',
      description: 'Simple Tech',
      link: "https://tech-blog-coreyparker.herokuapp.com/",
      repo: "https://github.com/CoreyParker12/Week14-Tech-Blog"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

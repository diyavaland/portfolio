// src/Projects.js
import React from 'react';

import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <ul>
        <li><div className="project-title">Object Oriented Programming Project</div></li>
        <li><div className="project-title">SQL Injection Prevention</div></li>
        <li><div className="project-title">Real Client Application Development</div></li>
      </ul>
    </div>
  );
}

export default Projects;

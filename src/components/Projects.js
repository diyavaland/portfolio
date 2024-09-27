import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Portfolio Web Programming",
      description: "Created a visually appealing introduction webpage including academic information and three projects.",
      date: "Oct 2023"
    },
    {
      title: "Rental Property Management System Database",
      description: "Developed a website for rental property management.",
      date: "Aug 2023"
    },
    {
      title: "Customer Information Management System",
      description: "Created a customer data organization system.",
      date: "Aug 2023"
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <span>{project.date}</span>
        </div>
      ))}
    </div>
  );
}

export default Projects;

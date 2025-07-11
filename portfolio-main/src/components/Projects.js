import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      
      <div className="project">
        <h2>
          <Link to="/sql-injection-prevention">SQL Injection Prevention</Link>
        </h2>
        <p>Prevented SQL injection using parameterized queries and security testing.</p>
        <span>Security / Database</span>
      </div>

      <div className="project">
        <h2>
          <Link to="/real-client-app">Real Client Application Development</Link>
        </h2>
        <p>Developed a live app with client requirements and agile methodology.</p>
        <span>Team Project / Full Stack</span>
      </div>

      <div className="project">
        <h2>
          <Link to="/other-projects">Object Oriented Programming Project</Link>
        </h2>
        <p>Created a system using OOP principles like inheritance, encapsulation, and polymorphism.</p>
        <span>Java / OOP</span>
      </div>
    </div>
  );
}

export default Projects;

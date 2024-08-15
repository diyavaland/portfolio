import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <section>
        <h2>Education</h2>
        <p>Diploma in Computer Programming, Algonquin College</p>
      </section>
      <section>
        <h2>Experience</h2>
        <p>Night Crew, Loblaw, Ottawa, ON (06/2023 - Present)</p>
        <p>McDonald's, Night Crew (01/2024 - Present)</p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Python, Java, C</li>
          <li>Web Technologies: HTML, CSS, JavaScript, PHP</li>
          <li>Databases: MySQL, Oracle, SQL Server Management
          Studio </li>
          <li>Tools: SQL Workbench, Eclipse, Visual Studio Code,
          Android Studio, Flutter</li>
          <li>Other: Business Intelligence (BI), Cisco, XAMPP,
          VMware, Linux</li>
        </ul>
      </section>
      <section>
        <a href="/path/to/MyResume.pdf" download="MyResume.pdf" className="download-button">
          Download Resume
        </a>
      </section>
    </div>
  );
}

export default Resume;

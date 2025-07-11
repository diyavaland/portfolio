import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Logo or Website Title */}
      <div className="header-logo">
        <img src="./image.png" alt="Logo" />
        <span>Diya Valand Portfolio</span>
      </div>
      
      <nav>
        <ul>
          <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
          <li><Link to="/about"><i className="fas fa-user"></i> About</Link></li>
          <li><Link to="/projects"><i className="fas fa-briefcase"></i> Projects</Link></li>
          <li><Link to="/resume"><i className="fas fa-file-alt"></i> Resume</Link></li>
          <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

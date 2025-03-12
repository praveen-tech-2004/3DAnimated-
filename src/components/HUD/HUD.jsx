import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HUD.css';

function HUD() {
  return (
    <div className="hud">
      <div className="mini-map">
        <h2>Mini-Map</h2>
        {/* You can add a visual representation of the mini-map here */}
      </div>
      
      <div className="text-panels">
        <Link to="/about" className="panel">
          <h3>About</h3>
          <p>Learn more about me.</p>
        </Link>
        <Link to="/projects" className="panel">
          <h3>Projects</h3>
          <p>Explore my projects.</p>
        </Link>
        <Link to="/skills" className="panel">
          <h3>Skills</h3>
          <p>Check out my skills.</p>
        </Link>
        <Link to="/contact" className="panel">
          <h3>Contact</h3>
          <p>Get in touch with me.</p>
        </Link>
      </div>
    </div>
  );
}

export default HUD;
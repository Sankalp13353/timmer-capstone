import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h2>Study Timer</h2>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Timer</a>
        <a href="#">About</a>
      </div>
    </div>
  );
}

export default Navbar;

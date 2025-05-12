import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <h2>Study Timer</h2>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/timer">Timer</Link>
      </div>
    </div>
  );
}

export default Navbar;

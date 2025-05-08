import React from 'react';
import '../styles/navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <div className='left'>
        <h2>Study Timer</h2>
      </div>
      <div className="right">
        <a href="#">Home</a>
        <a href="#">Timer</a>
        <a href="#">About</a>
      </div>
    </div>
  );
}

export default Navbar;

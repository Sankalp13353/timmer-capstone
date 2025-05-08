import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="homePage">
      <div class="navbar">
      <h2>Study Timer</h2>
      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Timer</a>
        <a href="#">About</a>
      </div>
    </div>

    <div class="main">
      <h1>Boost Your Productivity with the Pomodoro Technique</h1>
      <p>Manage your study time efficiently with customized timers and insightful statistics.</p>
      <button>Start a Session</button>
    </div>

    <div class="footer">
      &copy; 2025 Study Timer App. All rights reserved.
    </div>
    </div>
  );
}

export default App;

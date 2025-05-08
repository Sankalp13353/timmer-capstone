import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="homePage">
      <Navbar />

      <div className="main">
        <h1>Boost Your Productivity with the Pomodoro Technique</h1>
        <p>Manage your study time efficiently with customized timers and insightful statistics.</p>
        <button>Start a Session</button>
      </div>

      <div className="footer">
        &copy; 2025 Study Timer App. All rights reserved.
      </div>
    </div>
  );
}

export default App;

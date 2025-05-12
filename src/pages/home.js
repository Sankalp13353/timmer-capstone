import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartSession = () => {
    navigate('/timer');
  };

  return (
    <div className="main">
      <h1>Boost Your Productivity with the Pomodoro Technique</h1>
      <p>Manage your study time efficiently with customized timers and insightful statistics.</p>
      <button onClick={handleStartSession}>Start a Session</button>
    </div>
  );
}

export default Home;

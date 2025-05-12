
import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="about">
      <h1>About the Pomodoro Timer</h1>
      <p>
        The Pomodoro Technique is a time management method developed by Francesco Cirillo.
        It uses a timer to break work into intervals, traditionally 25 minutes in length,
        separated by short breaks. This method helps improve focus and productivity.
      </p>
      <button onClick={handleGoHome}>Go to Home</button> 
    </div>
  );
}

export default About;

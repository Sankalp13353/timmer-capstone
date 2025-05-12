import React, { useEffect, useState } from 'react';

function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, secondsLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="main">
      <h1>Pomodoro Timer</h1>
      <h2>{formatTime(secondsLeft)}</h2>

      {secondsLeft > 0 ? (
        <button onClick={togglePause}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      ) : (
        <p>Time's up! Take a short break.</p>
      )}
    </div>
  );
}

export default Timer;

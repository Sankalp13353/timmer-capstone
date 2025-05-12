import React, { useEffect, useState } from 'react';

function Timer() {
  const initialTime = 25 * 60;

  const [secondsLeft, setSecondsLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && !isPaused && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused, secondsLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setSecondsLeft(initialTime);
  };

  return (
    <div className="main">
      <h1>Pomodoro Timer</h1>
      <h2>{formatTime(secondsLeft)}</h2>

      {!isRunning ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handlePauseResume}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      )}

      <button onClick={handleReset}>Reset</button>

      {secondsLeft === 0 && (
        <p>Time's up! Take a short break.</p>
      )}
    </div>
  );
}

export default Timer;

import React, { useEffect, useState } from 'react';

function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="main">
      <h1>Pomodoro Timer</h1>
      <h2>{formatTime(secondsLeft)}</h2>
      {!isActive && <p>Time's up! Take a short break.</p>}
    </div>
  );
}

export default Timer;

import React, { useEffect, useState } from "react";
import "./Styles/CountDown.css";

const Countdown = () => {
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [time, isRunning]);
  // console.log(time)

  return (
    <div className={`countdown-container`}>
      <p className="time-display">Countdown : {time}</p>
      <div className="button-container">
        <p className="start button" onClick={() => setIsRunning(true)}>
          ▶
        </p>
        <p className="pause button" onClick={() => setIsRunning(false)}>
          ⏸
        </p>
        <p
          className="reset button"
          onClick={() => {
            setIsRunning(false);
            setTime(60);
          }}
        >
          ↩
        </p>
      </div>
    </div>
  );
};

export default Countdown;

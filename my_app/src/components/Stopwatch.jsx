import React, { useEffect, useState } from "react";
import "./Styles/Stopwatch.css"
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (running) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      console.log("Timer Started");
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [running]);
  function convertedTime() {
    let hours = Math.floor(time / 3600);
    let remainingSecs = time % 3600;
    let minutes = Math.floor(remainingSecs / 60);
    let seconds = remainingSecs % 60;

    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
      2,
      "0"
    )} : ${String(seconds).padStart(2, "0")}`;
  }
  return (
    <div className="stop-Watch-Container">
      <h1>Stopwatch</h1>
      <p>Time : {convertedTime()}</p>
      <button
        onClick={() => {
          setRunning(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setRunning(false);
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setRunning(false), setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;

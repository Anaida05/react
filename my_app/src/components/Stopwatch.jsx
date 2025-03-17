import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning ) {
      timer = setInterval(() => setTime((preTime) => preTime + 1), 1000);
    }
    return ()=>clearInterval(timer);
  }, [isRunning]);
  
  function startTime() {
    setIsRunning(true);
  }
  function pauseTime() {
    setIsRunning(false);
  }
  function Reset() {
    setIsRunning(false);
    setTime(0);
  } 

  
  return (
    <div>
      <p>Time : {time}</p>
      <p onClick={startTime}>Start</p>
      <p onClick={pauseTime}>Pause</p>
      <p onClick={Reset}>Reset</p>
    </div>
  );
};

export default Stopwatch;

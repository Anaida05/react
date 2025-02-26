import React, { useState } from "react";
const StopWatch = ()=>{
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);

    useEffect(()=>{
        if (!isRunning) return;

        let interval = setInterval(()=>{
            setTime((prevTime)=>prevTime+1)
        },10)

        return clearInterval(interval)
    },[isRunning])
return(
    <div>
    <h1>{`${Math.floor(time / 60)}:${String(time % 60).padStart(2, "0")}`}</h1>
    <button onClick={() => setIsRunning(true)}>Start</button>
    <button onClick={() => setIsRunning(false)}>Pause</button>
    <button onClick={() => setTime(0)}>Reset</button>
  </div>
)
}
export default StopWatch;
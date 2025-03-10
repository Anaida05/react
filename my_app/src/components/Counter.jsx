// useState
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const router = useNavigate()

  const handleAdd = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const passStateToUseLocation=()=>{
    router("/current",{state:{carName : "Vento",color:"white",company:"Volkswagen"}})
  }
 
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h1>Counter</h1>
      <p>Count is :{counter}</p>
      <button onClick={handleAdd}>Add</button>
      <p onClick={passStateToUseLocation}>Send State to Counter Page</p>
    </div>
  );
};

export default Counter;

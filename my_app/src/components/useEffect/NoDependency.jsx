import React, { useEffect, useState } from "react";

const NoDependency = () => {
  const [counter, setCounter] = useState(0);
  const handleCount = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  useEffect(()=>{console.log("Hi from no dependency")})
  return (
    <div>
      <h1>NoDependency</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={handleCount}>+</button>
    </div>
  );
};

export default NoDependency;

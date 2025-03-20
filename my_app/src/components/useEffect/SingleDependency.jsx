import React, { useEffect, useState } from "react";

const SingleDependency = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount = () => {
    setCount((p) => p + 1);
  };

  const handleCount2 = () => {
    setCount2((p) => p + 1);
  };
  useEffect(() => {
    console.log("Hii from single dependency");
  }, [count]);
  return (
    <div>
      <h1>SingleDependency</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleCount}>+</button>

      <h2>Counter2 : {count2}</h2>
      <button onClick={handleCount2}>+</button>
    </div>
  );
};

export default SingleDependency;

import React, { useRef, useState } from "react";

const UserefEg = () => {
  const count = useRef(0);
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    count.current += 1;
    console.log(count.current); 
  };

  const handleAdd = () => {
    setCounter((prevValue) => prevValue + 1);
  };
  return (
    <div>
      <p>{count.current}</p>
      <button onClick={handleClick}>Click Me</button>;
      <p>Count from state :{counter}</p>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default UserefEg;

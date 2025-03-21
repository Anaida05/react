import React, { useState } from "react";
import SlChild from "./SlChild";

const SlParent = () => {
  const [count, setCount] = useState(0);
  function handleDataFromChild(data) {
    setCount(data);
  }
  return (
    <div>
      <h1>Parent :{count}</h1>
      <SlChild sendData={handleDataFromChild} />
    </div>
  );
};

export default SlParent;

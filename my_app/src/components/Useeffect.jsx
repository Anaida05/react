import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [counter, setCouter] = useState(0);
  const [counter2, setCouter2] = useState(0);
    const handleAdd = ()=>{
        setCouter((prevValue)=>prevValue+1)
    }
    const add2 = ()=>{
        setCouter2((prevValue)=>prevValue+1)
    }
  useEffect(() => {
    console.log("Inside single dependency")
  },[counter]);
  return (
    <div>
      <p>Count:{counter}</p>
      <p>Count:{counter2}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={add2}>+</button>
    </div>
  );
};

export default Useeffect;

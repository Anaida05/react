import React, { useEffect, useState } from "react";

const MultipleDependency = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [text, setText] = useState("");

  const handleCount = () => {
    setCount((p) => p + 1);
  };

  const handleCount2 = () => {
    setCount2((p) => p + 1);
  };
  useEffect(() => {
    console.log("hii from multiple dependency")
  }, [count, text]);
  return (
    <div>
      <h2>MultipleDependency</h2>
      <p>Count:{count}</p>
      <button onClick={handleCount}>+</button>

      <p>Count2:{count2}</p>
      <button onClick={handleCount2}>+</button>
      <p>Text :{text}</p>
      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        name=""
        id=""
        placeholder="type something...."
      />
    </div>
  );
};

export default MultipleDependency;

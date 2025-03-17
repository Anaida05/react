import React, { useMemo, useState } from "react";
import "./Styles/Usememo.css";
const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["Add Task"]);

  let valueFromFn = useMemo(() => heavyCalculation(counter), [counter]);
  const addTodos = () => {
    setTodos([...todos, "Add New Task"]);
  };
  function heavyCalculation(num) {
    console.log("calculation started");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum = sum + i;
    }
    return sum + num;
  }

  return (
    <div className="useMemoParent">
      <h1>useMemo</h1>
      <p>Count with Heavy Calculation :{valueFromFn}</p>
      <p> Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodos}>Add Todo</button>
    </div>
  );
};

export default UseMemo;

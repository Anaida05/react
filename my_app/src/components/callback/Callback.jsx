import React, { useCallback, useState } from "react";
import ChildCompo from "./ChildCompo";

const Callback = () => {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState([]);


const addTodo = useCallback(()=>(
    setTodos([...todos,"my new todo"])
),[todos]) 
  console.log("inside parent component")
  return (
    <div>
      <h1>Callback</h1>
      <p>Counter : {counter}</p>
      <button onClick={()=>(setCounter(counter + 1))}>+</button>
      <ChildCompo addTodo={addTodo} todos={todos} />
    </div>
  );
};

export default Callback;

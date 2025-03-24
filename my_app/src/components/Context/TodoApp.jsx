import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoApp = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: "addTodo", payload: text });
      setText("");
    }
  };

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = axois.get("")
      }catch(error){
        console.log(error,"Error")
      }
    }
  },[dispatch])
  console.log(text);
  return (
    <div>
      <h1>TodoApp</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {state.todos.map((todo, id) => (
          <li key={id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

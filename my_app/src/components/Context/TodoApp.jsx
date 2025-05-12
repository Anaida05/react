import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoApp = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const add = () => {
    if (todo.trim() === "") return;
    dispatch({ type: "AddTodo", payload: todo });
    setTodo("");
  };
  return (
    <div>
      <h2>TodoApp</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        name=""
        id=""
      />
      <button onClick={()=>dispatch({type:"AddTodo",payload:todo})}>Add</button>
      <ul>
      {state.map((todo, id) => (
    <li key={todo.id || id}>
      <p>{todo.title || todo.text}</p>
      <button onClick={() => dispatch({ type: "RemoveTodo", payload: todo.id })}>
        Delete
      </button>
    </li>
  ))}
      </ul>
    </div>
  );
};

export default TodoApp;

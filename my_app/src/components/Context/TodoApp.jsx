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

      <ul>
        {state.map((todo, id) => (
          <li key={id}>
            <p>{todo}</p>
            <button onClick={add}>Add Todo</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const ToDoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;

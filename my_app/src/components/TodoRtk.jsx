import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, fetchTodos } from "./Store/slices/TodoSlice";

const TodoRtk = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addNewTodo = () => {
    if (newTodo.trim()) {
      dispatch(
        addTodos({
          title: newTodo,
          completed: false,
        })
      );
      setNewTodo("");
    }
  };
  return (
    <>
      <h2>Todo</h2>
      {loading && <p>loading...</p>}
      {error && <p>error : {error}</p>}
      <div>
        <input
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          placeholder="Enter Todo"
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoRtk;

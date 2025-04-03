import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos, fetchTodos } from "./Store/slices/TodoSlice";

const TodoRtk = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const [editText,setEditText] = useState("")
  const [editId,setEditId] = useState(null)

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

  const removeTodo = (id) => {
    dispatch(deleteTodos(id));
  };

  const editTodo = (id) =>{
    dispatch(editTodo)
  }

  return (
    <>
      <h2>Todo</h2>
      {loading && todos.length === 0 && <div className="spinner"></div>}
      {error && <p>error : {error}</p>}
      <div>
        <input
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          placeholder="Enter Todo"
          style={{margin:"10px"}}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, id) => (
          <li key={id} style={{display:"flex",gap:"10px",alignItems:"center",marginLeft:"33rem"}}>
            <span>{todo.title}</span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoRtk;

import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const InputForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default InputForm;

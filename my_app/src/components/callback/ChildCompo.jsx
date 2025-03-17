import React, { memo } from "react";

const ChildCompo = ({ todos, addTodo }) => {
  console.log("inside child component");
  return (
    <div>
      <h1>ChildComponent</h1>
      {todos.map((todo,index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};

export default memo(ChildCompo);

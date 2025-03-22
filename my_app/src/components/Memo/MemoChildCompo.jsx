import React, { memo } from "react";

const MemoChildCompo = ({ counter2 }) => {
  console.log("Inside Child Component!");

  return (
    <div>
      <h1>Child Component</h1>
      <p>Child Counter : {counter2}</p>
    </div>
  );
};

export default memo(MemoChildCompo);

import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ add, counter, message }) => {
    // or you can do object destructing
    // const Child = (props)=>{
        // const {add,counter,message} = props
        // }
  console.log("inside child component");
  return (
    <div>
      <h2>Child Component</h2>
      <p style={{ margin: "10px" }}>Counter : {counter}</p>
      <button onClick={add}>+</button>

      <GrandChild message={message} />
    </div>
  );
};

export default Child;

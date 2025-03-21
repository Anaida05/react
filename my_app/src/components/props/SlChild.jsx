import React from "react";

const SlChild = ({ sendData }) => {
  function sendDataToParent() {
    sendData((prev) => prev + 1);
    console.log("hii from child")
  }
  return (
    <div>
      <h1>Child</h1>
      <button onClick={sendDataToParent}>Add</button>
    </div>
  );
};

export default SlChild;

import React from "react";

function StopPropagationExample() {
  const handleParentClick = () => {
    console.log("Parent clicked!");
  };

  const handleChildClick = (e) => {
    e.stopPropagation()
    console.log("Child (Button) clicked!");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{
        padding: "50px",
        backgroundColor: "#cce5ff",
        textAlign: "center",
      }}
    >
      <h2>Parent Div</h2>
      <button onClick={handleChildClick} style={{ padding: "10px 20px" }}>
        Click Me (Child)
      </button>
    </div>
  );
}

export default StopPropagationExample;

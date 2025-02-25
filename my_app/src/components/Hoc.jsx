import React from "react";
import ReactDOM from "react-dom";

const Message = (props) => {
  return <h2>{props.text}</h2>;
};

const withBorder = (WrappedComponent) => {
  return (props) => {
    return (
      <div style={{ border: "2px solid blue", padding: "10px", width: "200px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const BorderedMessage = withBorder(Message);


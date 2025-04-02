import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./Store/slices/CounterSlice";
import "./Styles/RtkCOunter.css"

const CounterRtk = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div className="counter-container-parent">
      <h2>Counter : {count}</h2>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Substract</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add by 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CounterRtk;

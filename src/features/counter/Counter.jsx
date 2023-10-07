import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterSlice";

function Counter() {
  var s = useSelector((state) => state); // complete state comes to useSelector from store.
  var d = useDispatch(); //This hook returns a reference to the dispatch function from the Redux store.
  console.log(s);

  return (
    <div className="counter-card">
      <h1 style={{ marginBottom: "10px" }}>Counter</h1>{" "}
      <h1
        className="counter-heading"
        style={
          s.c.count > 0
            ? { color: "green" }
            : s.c.count < 0
            ? { color: "red" }
            : { color: "black" }
        }
      >
        {s.c.count}
      </h1>
      <button
        className="counter_btns"
        onClick={() => {
          d(dec());
        }}
      >
        -
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        className="counter_btns"
        onClick={() => {
          d(inc());
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;

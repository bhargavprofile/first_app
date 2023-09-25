import React, { useState } from "react";
import { Link } from "react-router-dom";

var a = 0;
const Counter = () => {
  const [count, setCount] = useState(0);

  function Dec() {
    setCount(count - 1);
  }

  function Res() {
    setCount(a);
  }

  function Inc() {
    setCount(count + 1);
  }
  return (
    <>
      <div style={{ textAlign: "right", marginRight: "20px" }}>
        <Link to="/">Back</Link>
      </div>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={Dec}>Decrement</button>&nbsp;&nbsp;
        <button onClick={Res}>Reset</button>&nbsp;&nbsp;
        <button onClick={Inc}>Increment</button>
      </div>
    </>
  );
};

export default Counter;

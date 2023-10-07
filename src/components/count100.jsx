import React from "react";
import { connect } from "react-redux";

const Count100 = (props) => {
  //   console.log(props);
  return (
    <div className="counter-card">
      <h1>Counter100</h1>
      <h1
        className="count"
        style={
          props.b.count === 0
            ? { color: "black" }
            : props.b.count > 0
            ? { color: "green" }
            : { color: "red" }
        }
      >
        {props.b.count}
      </h1>
      <button
        onClick={() => {
          props.dispatch({ type: "dec" });
        }}
      >
        -
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          props.dispatch({ type: "inc" });
        }}
      >
        +
      </button>
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Count100);

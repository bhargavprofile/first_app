import React, { useState } from "react";
import { connect } from "react-redux";

const Todolist = (props) => {
  const [sk, setSk] = useState("");
  console.log(props);
  return (
    <div className="todo-card">
      <h1>TodoList</h1>
      <input
        type="text"
        onChange={(e) => {
          props.dispatch({
            type: "updateTodo",
            payload: setSk(e.target.value),
          });
        }}
      />
      <button
        className="add"
        onClick={(e) => {
          props.dispatch({ type: "addTodo", payload: sk });
        }}
      >
        Add
      </button>
      {props.c &&
        props.c.skills.map((s, i) => {
          return (
            <li>
              {s}
              <button
                className="del"
                onClick={() => {
                  props.dispatch({ type: "deleteSkill", payload: i });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </div>
  );
};

export default connect((store) => store)(Todolist);

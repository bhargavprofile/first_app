import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todolistSlice";

function Todolist() {
  const { todolist } = useSelector((state) => state.t);
  const [newtodo, setNewtodo] = useState("");
  const d = useDispatch();
  console.log(todolist);
  return (
    <div className="todo-card">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewtodo(e.target.value);
        }}
      />
      &nbsp;&nbsp;&nbsp;
      <button
        className="addbtn"
        onClick={() => {
          d(addTodo(newtodo));
        }}
      >
        AddTodo
      </button>
      <ul style={{ padding: "20px", marginLeft: "50px" }}>
        {todolist?.map((todoitem, i) => {
          return (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <li style={{ color: "#fff" }}>{todoitem}</li>
              <button
                className="del"
                onClick={() => {
                  d(deleteTodo(i));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;

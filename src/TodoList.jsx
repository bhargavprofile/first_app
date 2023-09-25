import React, { useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  var [list, setList] = useState([]);

  function add() {
    var inputElement = document.getElementById("inp").value;
    list.push(inputElement);
    setList([...list]);
  }
  console.log(list);

  return (
    <>
      <div style={{ textAlign: "right", marginRight: "20px" }}>
        <Link to="/">Back</Link>
      </div>
      <h1 style={{ textAlign: "center" }}>TodoList</h1>
      <div className="todos">
        <input type="text" id="inp" />
        &nbsp;
        <button
          onClick={() => {
            add();
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {list.map((a, i) => {
          return <li>{a}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;

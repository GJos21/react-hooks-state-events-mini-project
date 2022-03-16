import React from "react";

function Task({ text, category, deleteItem }) {
  return (
    <div className="task">
      <div className="label">{category}}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deleteItem(text) }>X</button>
    </div>
  );
}

export default Task;

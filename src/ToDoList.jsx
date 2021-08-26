import React from "react";
const ToDoList = (props) => {
  return (
    <>
      <div className="todo-style">
        <i
          class="fas fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDoList;

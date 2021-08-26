import React, { useState } from "react";
import "./index.css";
import ToDoList from "./ToDoList";
const ToDo = () => {
  const [items, update] = useState("");
  const [list, updateList] = useState([]);
  const inputChange = (e) => {
    update(e.target.value);
  };
  const addItem = () => {
    updateList((lastList) => {
      return [...lastList, items];
    });
    update("");
  };
  const deleteItems = (id) => {
    updateList((lastList) => {
      return lastList.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="mainDiv">
        <div className="toDoCard">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            onChange={inputChange}
            value={items}
          />
          <button className="addbutton" onClick={addItem}>
            add
          </button>
          <ol>
            {list.map((itemval, index) => {
              return (
                <ToDoList
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default ToDo;

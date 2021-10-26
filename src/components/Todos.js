import React from "react";
import "./Todos.css";
import Todo from "./Todo";

function Todos(props) {
  const deleteItem = (del)=> {
    props.finalDeleteItem(del)
    // console.log(del);
  }
  return (
    <div className="Wrapper">
      {props.todoItem.map((data, index) => {
        return <Todo key={index} index={index} item={data.todo} deleteHandeler={deleteItem} />;
      })}
    </div>
  );
}

export default Todos;

import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [isCheck, setisCheck] = useState(false);

  const ondeleteHandeler = () => {
    const itemIndex = props.index;
    props.deleteHandeler(itemIndex);
    // console.log(itemIndex);
  };

  const onClickedTodo = () => {
    // console.log(isCheck);
    if (isCheck === false) {
      setisCheck(true);
    } else {
      setisCheck(false);
    }
  };

  return (
    <div className="Todo" key={props.key}>
      <input type="radio" className="Todo-check" onClick={onClickedTodo} checked={isCheck} />
      <p className={isCheck === true ? "Checked-Todo-heading" : "Todo-heading"}>
        {props.item}
      </p>
      <button className="Todo-delete" onClick={ondeleteHandeler}>
        X
      </button>
    </div>
  );
}

export default Todo;

import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo(props) {
  const [addTodo, setaddTodo] = useState("");
  const todoChangeHandeler = (event) => {
    setaddTodo(event.target.value);
  };

  const todoData = {
    id: Math.random().toString(),
    todo: addTodo,
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    props.formData(todoData);
    setaddTodo("");
  };
  return (
    <div className="AddTodo">
      <h1 className="AddTodo-heading">Todo</h1>
      <form onSubmit={onSubmitHandeler}>
        <input value={addTodo} onChange={todoChangeHandeler} />
      </form>
    </div>
  );
}

export default AddTodo;

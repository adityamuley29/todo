import React from "react";
import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const INITIAL_DATA = [];

function App() {
  const [finalTodo, setfinalTodo] = useState(INITIAL_DATA);

  const fetchedData = (data) => {
    setfinalTodo((getTodo) => {
      // console.log(finalTodo);
      return setfinalTodo([data, ...getTodo]);
    });
  };

  const onDelete = (deleteIndex) => {
    finalTodo.splice(deleteIndex, 1);

    setfinalTodo((prevUpdatedtem) => {
      return setfinalTodo([...prevUpdatedtem]);
    });
  };

  return (
    <div className="main">
      <AddTodo formData={fetchedData} />
      <Todos todoItem={finalTodo} finalDeleteItem={onDelete} />
    </div>
  );
}

export default App;

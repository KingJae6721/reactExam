import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom"

import TodoList from "./Todolist";
import Clock from "./Timer";
{
  /*
  주석은 중괄호 안에
  */
}
function App() {
  let name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "20px",
  };
   
  return (
    <div className="container">
      
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}

export default App;

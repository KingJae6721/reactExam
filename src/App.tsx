import React from "react";
import logo from "./logo.svg";
import "./App.css";
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
    <div style={style}>
      <h1
        style={{
          backgroundColor: "purple",
          color: "white",
          fontSize: "48px",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        Hello,
        {name === "리액트" ? <h1>YES</h1> : null}
      </h1>
      <p>반갑습니다.</p>
    </div>
  );
}

export default App;

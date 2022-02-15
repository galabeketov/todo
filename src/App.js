import React, { Component, useState } from "react";
import "./App.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main/Main";
import TodoContext from "./context/TodoContext";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <Main />
      {/* <img
        src="https://png.pngtree.com/background/20210711/original/pngtree-website-background-image-red-mystery-picture-image_1146508.jpg"
        alt=""
      /> */}
    </TodoContext.Provider>
  );
}

export default App;

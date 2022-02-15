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
      <img
        src="http://www.freewalldownload.com/natural-mountain-wallpaper/beautiful-mountain-in-night-wallpapers-hd-pictures.jpg"
        alt=""
      />
    </TodoContext.Provider>
  );
}

export default App;

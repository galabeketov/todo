import TodoWrapper from "./TodoWrapper";
import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/TodoContext";
import {
  faCheck,
  faCircleCheck,
  faCircleNotch,
  faCircleXmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Form from "../addTodo/Form";

const Todo = () => {
  const { todo, setTodo } = useContext(TodoContext);
  const [filter, setFilter] = useState([...todo]);
  const Completed = (item, index) => {
    const t = [...todo];
    t[index].completed = !t[index].completed;
    setTodo(t);
  };

  const RemoveTodo = (item, index) => {
    const t = [...todo];
    const a = t.filter((el) => el.id != item.id);
    console.log(a);
    setFilter(a);
    setTodo(a);
  };

  const FiltComp = () => {
    const t = [...todo];
    const a = t.filter((el) => el.completed != false);
    console.log(a);
    setFilter(a);
  };

  const Active = () => {
    const t = [...todo];
    const a = t.filter((el) => el.completed != true);
    console.log(a);
    setFilter(a);
  };

  const FiltUncomp = () => {
    const t = [...todo];
    const a = t.filter((el) => el.completed != true);
    console.log(a);
    setFilter(a);
    setTodo(a);
  };

  const All = () => {
    const t = [...todo];

    console.log(todo);
    setFilter(t);
  };

  // useEffect(() => {
  //   setTodo(filter);
  // }, [filter]);
  return (
    <TodoWrapper className="pt-5 row">
      <div className="col-lg-3 col-md-2 col-sm-1 "></div>
      <div className="col-lg-6 col-md-8 col-sm-10">
        <div className="todo">
          <h1 className="text-left">TODO</h1>
          <Form />
          <ul className="rounded">
            <li className="d-flex justify-content-between align-items-center  border text-dark px-3 py-3">
              <p>{todo.length} todos have </p>
              <button className="btn" onClick={() => All()}>
                Show All
              </button>
              <button className="btn" onClick={() => Active()}>
                Active
              </button>
              <button className="btn" onClick={() => FiltComp()}>
                Completed
              </button>
              <button className="btn" onClick={() => FiltUncomp()}>
                Clear Complited
              </button>
            </li>
            {filter.map((item, index) => (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center  border text-dark px-3 py-3"
              >
                <div className="tasks d-flex gap-2">
                  <div className="completed ">
                    {item.completed == true ? (
                      <span onClick={() => Completed(item, index)}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                    ) : (
                      <span onClick={() => Completed(item, index)}>
                        <FontAwesomeIcon icon={faCircleNotch} />
                      </span>
                    )}
                  </div>
                  <p className={item.completed && "throw"}>{item.title}</p>
                </div>
                <div className="btns">
                  <div className="delete">
                    <button
                      className="btn"
                      onClick={() => RemoveTodo(item, index)}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-2 col-sm-1 "></div>
    </TodoWrapper>
  );
};

export default Todo;

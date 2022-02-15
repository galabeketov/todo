import React, { useContext, useRef } from "react";
import FormWrapper from "./FormWrapper";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TodoContext from "../../context/TodoContext";
const Form = () => {
  const refText = useRef();
  const { todo, setTodo } = useContext(TodoContext);
  // const params = useParams();
  //   console.log(todo[i].id);
  //   const index = params.id;

  const { register, reset, handleSubmit } = useForm({
    // defaultValues: index ? todo[index] : {},
  });

  const submit = (data) => {
    if (data === "") return;
    else {
      const t = [...todo];
      const id = todo.length + 1;
      data.id = id;
      data.completed = false;
      data.title = refText.current.value;
      console.log(data);
      t.push(data);
      setTodo(t);
      refText.current.value = "";
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(submit)}>
        <input
          className="form-control px-3 py-4 mb-5"
          placeholder="Add To Do"
          {...register("title")}
          ref={refText}
        ></input>
      </form>
    </FormWrapper>
  );
};

export default Form;

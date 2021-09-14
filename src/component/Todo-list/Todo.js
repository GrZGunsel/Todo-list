import React, { useState } from "react";
import "./todo.css";
import Edit from "../../Svg/edit.svg";
import Detele from "../../Svg/delete.svg";
import Todoform from "../TodoForm/Todoform";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className="list-items" key={index}>
      <div
        className="list-item "
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        <p> {todo.text}</p>
      </div>
      <img
        src={Edit}
        alt="sad"
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
      />
      <img src={Detele} alt="sad" onClick={() => removeTodo(todo.id)} />
    </div>
  ));
};

export default Todo;

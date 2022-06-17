import React from "react";
import closeImg from "../../images/icon-cross.svg";
import checkImg from "../../images/icon-check.svg";

import Todo from "../interfaces/Todo";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (task: string) => void;
  toggleDone: (todo: Todo) => void;
}

function TodoItem({ todo, deleteTodo, toggleDone }: TodoItemProps) {
  function handleDelete() {
    deleteTodo(todo.task);
  }

  function hadnleDone() {
    toggleDone(todo);
  }

  return (
    <li className={`todo__item ${todo.done ? "done" : ""}`}>
      <div onClick={hadnleDone} className="todo__check">
        <div className="todo__check--inner">
          {todo.done ? <img src={checkImg} alt="check icon" /> : ""}
        </div>
      </div>
      <p onClick={hadnleDone} className="todo__text">
        {todo.task}
      </p>
      <button
        onClick={handleDelete}
        aria-label="delete item"
        className="todo__del"
      >
        <img src={closeImg} alt="cross icon" />
      </button>
    </li>
  );
}

export default TodoItem;

import React, { FormEvent, useState } from "react";

interface FormProps {
  addTodo: (todo: string) => void;
}

function Form({ addTodo }: FormProps) {
  const [newTodo, setNewTodo] = useState("");

  function handleChage(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newTodo !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__rnd"></div>
      <input
        placeholder="Create a new todo..."
        type="text"
        className="form__input"
        value={newTodo}
        onChange={handleChage}
      />
    </form>
  );
}

export default Form;

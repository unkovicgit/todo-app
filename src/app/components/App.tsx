import React, { useEffect, useState } from "react";

import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

import Todo from "../interfaces/Todo";
import todoList from "../data/todoList";

export enum DisplayState {
  All,
  Active,
  Completed,
}

function App() {
  let temp;

  if (localStorage["todos"]) {
    temp = JSON.parse(localStorage["todos"]) as Todo[];
  } else {
    temp = todoList;
  }

  const [todos, setTodos] = useState(temp);
  const [display, setDisplay] = useState(todos);
  const [displayState, setDisplayState] = useState(DisplayState.All);

  useEffect(() => {
    changeDisplay();
  }, [todos, displayState]);

  function addTodo(task: string) {
    if (!todos.map((t) => t.task).includes(task)) {
      const newTodos = [...todos, { task, done: false }];
      setTodos(newTodos);
      localStorage["todos"] = JSON.stringify(newTodos);
    }
  }

  function deleteTodo(task: string) {
    const newTodos = todos.filter((todo) => todo.task !== task);
    setTodos(newTodos);
    localStorage["todos"] = JSON.stringify(newTodos);
  }

  function toggleDone(todo: Todo) {
    const newTodos = todos.map((item) => {
      if (item.task === todo.task) {
        return {
          task: todo.task,
          done: !todo.done,
        };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    localStorage["todos"] = JSON.stringify(newTodos);
  }

  function clearCompleted() {
    console.log(1);
    const newTodos = todos.filter(({ done }) => !done);
    setTodos(newTodos);
    localStorage["todos"] = JSON.stringify(newTodos);
  }

  function changeDisplay() {
    if (displayState === DisplayState.All) {
      setDisplay(todos);
    } else if (displayState === DisplayState.Active) {
      setDisplay(todos.filter(({ done }) => !done));
    } else if (displayState === DisplayState.Completed) {
      setDisplay(todos.filter(({ done }) => done));
    }
  }

  function changeDisplayState(state: DisplayState) {
    setDisplayState(state);
  }

  return (
    <>
      <Header></Header>
      <Form addTodo={addTodo}></Form>
      <TodoList
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
        todos={display}
        clearCompleted={clearCompleted}
        changeDisplayState={changeDisplayState}
        displayState={displayState}
      ></TodoList>
      <footer className="footer">
        <p className="footer__text">Drag and drop to reorder list</p>
      </footer>
    </>
  );
}

export default App;

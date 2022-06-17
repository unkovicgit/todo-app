import React from "react";
import Todo from "../interfaces/Todo";
import { DisplayState } from "./App";
import Footer from "./Footer";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (task: string) => void;
  toggleDone: (todo: Todo) => void;
  clearCompleted: () => void;
  changeDisplayState: (state: DisplayState) => void;
  displayState: DisplayState;
}

function TodoList({
  todos,
  deleteTodo,
  toggleDone,
  clearCompleted,
  changeDisplayState,
  displayState,
}: TodoListProps) {
  return (
    <ul className="todo">
      {todos.map((todo) => (
        <TodoItem
          key={todo.task}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
          todo={todo}
        ></TodoItem>
      ))}
      <Footer
        changeDisplayState={changeDisplayState}
        displayState={displayState}
        clearCompleted={clearCompleted}
        todos={todos}
      ></Footer>
    </ul>
  );
}

export default TodoList;

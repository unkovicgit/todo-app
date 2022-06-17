import React from "react";
import Todo from "../interfaces/Todo";
import { DisplayState } from "./App";

interface FooterProps {
  todos: Todo[];
  clearCompleted: () => void;
  changeDisplayState: (state: DisplayState) => void;
  displayState: DisplayState;
}

function Footer({
  todos,
  clearCompleted,
  changeDisplayState,
  displayState,
}: FooterProps) {
  return (
    <li className="todo__footer">
      <div className="todo__left">
        {todos.filter(({ done }) => !done).length} items left
      </div>
      <ul className="todo__filter">
        <li className="todo__filter--item">
          <button
            className={`${displayState === DisplayState.All ? "active" : ""}`}
            onClick={() => changeDisplayState(DisplayState.All)}
          >
            All
          </button>
        </li>
        <li className="todo__filter--item">
          <button
            className={`${
              displayState === DisplayState.Active ? "active" : ""
            }`}
            onClick={() => changeDisplayState(DisplayState.Active)}
          >
            Active
          </button>
        </li>
        <li className="todo__filter--item">
          <button
            className={`${
              displayState === DisplayState.Completed ? "active" : ""
            }`}
            onClick={() => changeDisplayState(DisplayState.Completed)}
          >
            Completed
          </button>
        </li>
      </ul>
      <button onClick={clearCompleted} className="todo__clr">
        Clear Completed
      </button>
    </li>
  );
}

export default Footer;

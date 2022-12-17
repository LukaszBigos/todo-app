import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { todo } from "../../types/todo";

type todoListProps = {
  todos: todo[] | [];
};

export const TodoList = ({ todos }: todoListProps) => {
  return (
    <>
      {todos?.map((todo) => (
        <ul
          key={todo.id}
          className="list-group list-group-flush d-flex flex-row justify-content-between align-items-center border-bottom mt-3 mr-3 w-75"
        >
          {/* <li className="list-group-item border-0">{todo.id}</li> */}
          <li className="list-group-item border-0">{todo.title}</li>
          <FontAwesomeIcon icon={solid("trash")} style={{ color: "#f74f39" }} />
        </ul>
      ))}
    </>
  );
};

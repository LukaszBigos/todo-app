import React from "react";
import { todo } from "../../types/todo";

type todoListProps = {
  todos: todo[] | [];
};

export const TodoList = ({ todos }: todoListProps) => {
  return (
    <>
      {todos?.map((todo) => (
        <ul key={todo.id} className="list-group list-group-flush">
          <li className="list-group-item">{todo.id}</li>
          <li className="list-group-item">{todo.title}</li>
        </ul>
      ))}
    </>
  );
};

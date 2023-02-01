import React from "react";

import { todo } from "../../types/todo";
import { SingleTodo } from "../SingleTodo/SingleTodo";

type TodoListProps = {
  todos: todo[] | [];
  removeTodoHandler: (id: number) => void;
};

export const TodoList = ({ todos, removeTodoHandler }: TodoListProps) => {
  return (
    <>
      {todos?.map((todo) => (
        <ul key={todo.id} className="list-group list-group-flush">
          <SingleTodo
            id={todo.id}
            removeTodo={() => removeTodoHandler(todo.id)}
            title={todo.title}
          />
        </ul>
      ))}
    </>
  );
};

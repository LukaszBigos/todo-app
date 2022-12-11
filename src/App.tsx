import React, { useState } from "react";

import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { todo } from "./types/todo";

const App = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  const handleTodo = (todo: string, id: number) => {
    setTodos((todos) => [...todos, { id: id, title: todo }]);
  };

  return (
    <div className="container">
      <AddTodo handleTodo={handleTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

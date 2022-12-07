import React, { useId, useState } from "react";

import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { todo } from "./types/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>([]);
  const id = useId();

  const handleTodo = (todo: string) => {
    setTodos((prevTodos) => [{ id: id, title: todo }]);
  };

  return (
    <div className="container">
      <AddTodo handleTodo={handleTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

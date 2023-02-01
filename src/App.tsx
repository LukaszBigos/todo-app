import React, { useState } from "react";

import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { todo } from "./types/todo";

const App = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  const handleAddingTodo = (todo: string, id: number) => {
    setTodos((todos) => [...todos, { id: id, title: todo }]);
  };

  const removeTodoHandler = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <AddTodo handleAddingTodo={handleAddingTodo} />
      <TodoList todos={todos} removeTodoHandler={removeTodoHandler} />
    </div>
  );
};

export default App;

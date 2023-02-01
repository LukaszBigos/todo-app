import React, { ChangeEvent, KeyboardEvent, useState } from "react";

type addTodoProps = {
  handleAddingTodo: (todo: string, id: number) => void;
};

export const AddTodo = ({ handleAddingTodo }: addTodoProps) => {
  const [todo, setTodo] = useState<string>("");
  const [id, setId] = useState<number>(1);
  const handleSubmit = (todo: string, id: number) => {
    if (todo) {
      handleAddingTodo(todo, id);
      setTodo("");
      setId((prevId) => prevId + 1);
    }
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === "Enter") {
      handleSubmit(todo, id);
    }
    return;
  };

  return (
    <div className="container-fluid d-flex flex-row justify-content-around align-items-center	mt-4">
      <input
        className="form-control form-control-md w-50 "
        type="text"
        placeholder="Enter new todos"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        value={todo || ""}
      />
      <button
        disabled={todo === ""}
        type="button"
        className="btn btn-primary "
        onClick={() => handleSubmit(todo, id)}
      >
        Add Todo
      </button>
    </div>
  );
};

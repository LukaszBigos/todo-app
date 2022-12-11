import React, { ChangeEvent, useState } from "react";

type addTodoProps = {
  handleTodo: (todo: string, id: number) => void;
};

export const AddTodo = ({ handleTodo }: addTodoProps) => {
  const [todo, setTodo] = useState<string>("");
  const [id, setId] = useState<number>(1);
  const handleSubmit = (todo: string, id: number) => {
    if (todo) {
      handleTodo(todo, id);
      setTodo("");
      setId((prevId) => prevId + 1);
    }
  };
  return (
    <div className="container-fluid d-flex flex-row justify-content-around align-items-center	mt-4">
      <input
        className="form-control form-control-md w-50 "
        type="text"
        placeholder="Enter new todos"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
        value={todo || "	"}
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

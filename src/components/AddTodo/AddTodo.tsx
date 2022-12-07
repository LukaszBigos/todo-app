import React, { ChangeEvent } from "react";

type addTodoProps = {
  handleTodo: (todo: string) => void;
};

export const AddTodo: React.FC<addTodoProps> = ({ handleTodo }) => {
  return (
    <div className="container-fluid d-flex flex-row justify-content-around align-items-center	mt-4">
      <input
        className="form-control form-control-md w-50 "
        type="text"
        placeholder="Enter new todos"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleTodo(e.target.value)
        }
      />
      <button type="button" className="btn btn-primary ">
        Add Todo
      </button>
    </div>
  );
};

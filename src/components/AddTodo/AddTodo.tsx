import React from "react";
import styles from "./AddTodo.module.scss";

export const AddTodo = () => {
  return (
    <div className="container-fluid d-flex flex-row justify-content-around align-items-center	mt-4">
      <input
        className="form-control form-control-md w-50 "
        type="text"
        placeholder="Enter new todos"
      />
      <button type="button" className="btn btn-primary ">
        Add Todo
      </button>
    </div>
  );
};

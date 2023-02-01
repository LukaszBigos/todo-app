import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type SingleTodoProps = {
  id: number;
  removeTodo: (id: number) => void;
  title: string;
};

export const SingleTodo = ({ id, removeTodo, title }: SingleTodoProps) => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center border-bottom mt-3 mr-3 w-75">
      <li className="list-group-item border-0">{title}</li>
      <section className="icons-wrapper">
        <EditIcon
          color="primary"
          sx={{
            cursor: "pointer",
          }}
        />
        <DeleteIcon
          onClick={() => removeTodo(id)}
          color="error"
          sx={{
            cursor: "pointer",
          }}
        />
      </section>
    </div>
  );
};

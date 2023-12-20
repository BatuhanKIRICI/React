import React from "react";
import { todoType } from "./appTypes";

type PropsType = {
  task: todoType;
  deleteTask(name: string): void;
};

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div className="card">
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskName)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;

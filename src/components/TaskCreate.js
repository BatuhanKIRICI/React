import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Please edit task!</h3>
          <form className="task-form">
            <label className="task-label">Edit header</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Edit task!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Add Task!</h3>
          <form className="task-form">
            <label className="task-label">Header</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Add Task!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;

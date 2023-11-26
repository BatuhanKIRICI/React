import { useState } from "react";

function TaskCreate({
  onAdd,
  titleUpdate,
  taskDescUpdate,
  taskUpdate,
  taskId,
  onUpdate,
}) {
  const [title, setTitle] = useState(titleUpdate ? titleUpdate : "");
  const [taskDesc, setTaskDesc] = useState(
    taskDescUpdate ? taskDescUpdate : ""
  );

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeTask(e) {
    setTaskDesc(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (taskUpdate) {
      onUpdate(title, taskDesc, taskId);
    } else {
      onAdd(title, taskDesc);
    }
    setTitle((p) => (p = ""));
    setTaskDesc((p) => (p = ""));
  }

  return (
    <div>
      {taskUpdate ? (
        <div className="task-update">
          <h3>Please add task again!</h3>
          <form className="task-create-form">
            <label className="task-label">Update Title</label>
            <input
              value={title}
              onChange={handleChangeTitle}
              className="task-input"
            />
            <label className="task-label">Please update task again!</label>
            <textarea
              value={taskDesc}
              onChange={handleChangeTask}
              className="task-input"
              rows={7}
            />
            <button className="task-button update-button" onClick={handleClick}>
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please add task!</h3>
          <form className="task-create-form">
            <label className="task-label">Title</label>
            <input
              value={title}
              onChange={handleChangeTitle}
              className="task-input"
            />
            <label className="task-label">Enter Task</label>
            <textarea
              value={taskDesc}
              onChange={handleChangeTask}
              className="task-input"
              rows={7}
            />
            <button className="task-button" onClick={handleClick}>
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;

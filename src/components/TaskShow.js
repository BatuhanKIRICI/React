import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ title, taskDesc, id, onDelete, onEdit }) {
  const [update, setUpdate] = useState(false);

  function handleUpdate() {
    setUpdate(!update);
  }

  function handleDelete() {
    onDelete(id);
  }

  function handleOnUpdate(updatedTitle, updatedTaskDesc, taskId) {
    setUpdate(false);
    onEdit(updatedTitle, updatedTaskDesc, taskId);
  }

  return (
    <div className="task-show">
      {update ? (
        <TaskCreate
          titleUpdate={title}
          taskDescUpdate={taskDesc}
          taskUpdate={true}
          taskId={id}
          onUpdate={handleOnUpdate}
        />
      ) : (
        <div>
          <h3 className="task-title">Your Task</h3>
          <p>{title}</p>
          <h3 className="task-title">To Do</h3>
          <p>{taskDesc}</p>
          <div>
            <button className="button-update" onClick={handleUpdate}>
              Update
            </button>
            <button className="button-delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;

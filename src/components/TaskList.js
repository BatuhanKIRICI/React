import TaskShow from "./TaskShow";
function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div className="task-list">
      {tasks.map((item) => {
        return (
          <TaskShow
            key={item.id}
            id={item.id}
            title={item.title}
            taskDesc={item.taskDesc}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
}

export default TaskList;

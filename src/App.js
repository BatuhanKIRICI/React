import { useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);

  function handleAdd(title, taskDesc) {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  }

  function handleDeleteId(id) {
    const afterDelete = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDelete);
  }

  function handleEditTaskById(updatedTitle, updatedTaskDesc, taskId) {
    const afterUpdate = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          id: taskId,
          title: updatedTitle,
          taskDesc: updatedTaskDesc,
        };
      }
      return task;
    });
    setTasks(afterUpdate);
  }

  return (
    <div className="App">
      <TaskCreate onAdd={handleAdd} />
      <h1>Tasks</h1>
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteId}
        onEdit={handleEditTaskById}
      />
    </div>
  );
}

export default App;

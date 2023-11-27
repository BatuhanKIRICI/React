import { useEffect, useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";
function App() {
  const [tasks, setTasks] = useState([]);

  const handleAdd = async (title, taskDesc) => {
    const responseAdd = await axios.post("http://localhost:3002/tasks", {
      title,
      taskDesc,
    });
    const createdTasks = [
      [...tasks, responseAdd.data],
      {
        id: Math.round(Math.random() * 99999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const responseUpdate = await axios.get("http://localhost:3002/tasks");
    setTasks(responseUpdate.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDeleteId = async (id) => {
    await axios.delete(`http://localhost:3002/tasks/${id}`);
    const afterDelete = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDelete);
  };

  const handleEditTaskById = async (updatedTitle, updatedTaskDesc, taskId) => {
    await axios.put(`http://localhost:3002/tasks/${taskId}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
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
  };

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

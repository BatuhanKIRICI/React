<<<<<<< HEAD
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3002/tasks", {
      title,
      taskDesc,
    });
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3002/tasks");
    setTasks(response.data);
  };

=======
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

>>>>>>> 2e7811b364c4ac1687cdf7f2ec683a4f064068ad
  useEffect(() => {
    fetchTasks();
  }, []);

<<<<<<< HEAD
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3002/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
=======
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
>>>>>>> 2e7811b364c4ac1687cdf7f2ec683a4f064068ad
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;

import React, { ChangeEvent, FC } from "react";
import { useState } from "react";
import { todoType } from "./appTypes";
import TodoItem from "./TodoItem.tsx";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === "task"
      ? setTask(e.target.value)
      : setWorkDay(+e.target.value);
  };

  const handleAdd = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  const handleDelete = (name: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== name));
  };

  return (
    <div className="App">
      <div className="main">
        <input
          className="mainInput"
          type="text"
          value={task}
          name="task"
          placeholder="Enter your task..."
          onChange={handleChange}
        />
        <input
          className="mainInput"
          type="number"
          value={workDay}
          name="workDay"
          placeholder="How many days to finish?..."
          onChange={handleChange}
        />
        <button className="mainButton" onClick={handleAdd}>
          Add New Task
        </button>
      </div>
      <div className="todoCard">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={handleDelete} />;
        })}
      </div>
    </div>
  );
};

export default App;

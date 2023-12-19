import React, { ChangeEvent, FC } from "react";
import { useState } from "react";
import { todoType } from "./appTypes";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === "task"
      ? setTask(e.target.value)
      : setWorkDay(+e.target.value);
  };

  const handleAdd = () => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          name="task"
          placeholder="Enter your task..."
          onChange={handleChange}
        />
        <input
          type="number"
          value={workDay}
          name="workDay"
          placeholder="How many days to finish?..."
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add New Task</button>
      </div>
    </div>
  );
};

export default App;

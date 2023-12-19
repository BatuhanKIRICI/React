import React, { FC } from "react";
import { useState } from "react";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);

  const handleChange = () => {};

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter your task..."
          onChange={handleChange}
        />
        <input
          type="number"
          value={workDay}
          placeholder="How many days to finish?..."
          onChange={handleChange}
        />
        <button>Add New Task</button>
      </div>
    </div>
  );
};

export default App;

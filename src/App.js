import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepPlus = () => setStep((s) => s + 1);
  const handleStepMinus = () => setStep((s) => s - 1);
  const handleCountPlus = () => setCount((c) => c + step);
  const handleCountMinus = () => setCount((c) => c - step);

  return (
    <div className="main">
      <div className="step">
        <button onClick={handleStepMinus}>-</button>
        <span>{`Step : ${step}`}</span>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div className="count">
        <button onClick={handleCountMinus}>-</button>
        <span>{`Count : ${count}`}</span>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count !== 0
            ? `${Math.abs(count)} days from today's date. `
            : ""}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;

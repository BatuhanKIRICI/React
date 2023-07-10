import React from "react";
import "./style.css";
import * as calculate from "./Calculate";

function App() {
  return (
    <div>
      <ul>
        <li>{calculate.Add(10, 2)}</li>
        <li>{calculate.Subtract(10, 2)}</li>
        <li>{calculate.Multiply(10, 2)}</li>
        <li>{calculate.Divide(10, 2)}</li>
      </ul>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [inputText, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}

export default App;

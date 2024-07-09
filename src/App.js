import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading firstName="Bob" />
      <Heading firstName="Tom" />
    </div>
  );
}

export default App;

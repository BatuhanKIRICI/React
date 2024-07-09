import "./App.css";
import React from "react";
// import ReactDOM from "react-dom/client";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <p>
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
      </p>
    </div>
  );
}

export default App;

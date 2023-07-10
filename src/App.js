import React from "react";
import "./style.css";
import List from "./List";
import * as head from "./Heading";

function App() {
  return (
    <div>
      <head.Heading />
      <List />
      <p>{head.hour}</p>
    </div>
  );
}

export default App;

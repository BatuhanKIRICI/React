import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provide } from "./context/task";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provide>
    <App />
  </Provide>
);

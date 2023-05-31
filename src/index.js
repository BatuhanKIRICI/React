import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const type = "number";
  const minVal = 5;
  const maxVal = 10;

  return <input type="number" min={minVal} max={maxVal} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

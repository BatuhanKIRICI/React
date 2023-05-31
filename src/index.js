import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const obj = { color: "red" };

  return (
    <div>
      <input
        type="number"
        style={{
          color: "red",
          backgroundColor: "yellow",
          border: "3px solid green",
          fontSize: "25px",
        }}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

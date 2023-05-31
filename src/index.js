/* import React from "react";
import ReactDOM from "react-dom/client";
import HemisphereDisplay from "./HemisphereDisplay";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  );
  return (
    <div>
      <HemisphereDisplay />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client"; */

const App = () => {
  const nameOfMine = "Batuhan";

  return (
    <div>
      My name is:
      <h1>{nameOfMine}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

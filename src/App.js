import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  useEffect(() => {
    document.title = toggle ? "Welcome to React" : "Using useEffect";
  }, [toggle]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Using the useEffect hook</h1>
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <h2>Welcome to React</h2>}
    </div>
  );
}

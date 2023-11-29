import React, { useEffect, useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  // const [render, setRender] = useState(0);

  const render = useRef(0);
  const inputRef = useRef();

  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.value = "Mike";
  };

  useEffect(() => {
    // setRender((e) => e + 1);
    render.current = render.current + 1;
  }, []);

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>My name is {name}</p>
        <p>{render.current}</p>
        <button onClick={handleFocus}>Focus</button>
      </div>
    </div>
  );
}

export default App;

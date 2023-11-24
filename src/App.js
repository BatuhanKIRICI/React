import { useState } from "react";

function App() {
  const [palette, setPalette] = useState("gray");

  const handleColor = () => {
    setPalette((p) =>
      p === "gray" || p === "red" ? (p = "green") : (p = "red")
    );
  };

  return (
    <div>
      <div
        onClick={handleColor}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          justifyContent: "center",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: palette,
          color: "white",
          width: "450px",
          height: "250px",
          fontSize: "50px",
          fontFamily: "Arial",
          border: "15px solid black",
          borderRadius: "15px",
        }}
      ></div>
    </div>
  );
}

export default App;

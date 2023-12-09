import React from "react";
import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";

function App() {
  const instructor = {
    firstName: "Miguel",
    lastName: "Verdugo",
  };

  const instructorList = [
    {
      firstName: "Nathan",
      lastName: "Mann",
    },
    {
      firstName: "Zachary",
      lastName: "Kyle",
    },
    {
      firstName: "Alfred",
      lastName: "O'Neal",
    },
  ];

  return (
    <div className="App">
      <Home name="Miguel" number={25} isGood={false} />
      <Instructor instructorInfo={instructor} />
      <InstructorList instructorList={instructorList} />
    </div>
  );
}

export default App;

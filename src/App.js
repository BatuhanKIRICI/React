import "./App.css";
import React from "react";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
      for each web dev skill that you have,
      customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="./photos/batuhan_kirici.jpg"
      alt="My Profile"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Batuhan Kirici</h1>
      <p>
        Frontend Developer. In free times, I like to make sport and listen
        music. And I do not see reading books as a free-time activity!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="purple" />
      <Skill skill="HTML+CSS" emoji="💪" color="green" />
      <Skill skill="JavaScript" emoji="💪" color="red" />
      <Skill skill="Git+GitHub" emoji="👍" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
      {props.emoji}
    </div>
  );
}

export default App;

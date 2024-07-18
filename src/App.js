import "./App.css";
import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default App;

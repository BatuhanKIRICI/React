import React from "react";
import "./style.css";
import { Heading } from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <div className="header">
        <Heading />
      </div>
      <div className="note">
        <Note />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

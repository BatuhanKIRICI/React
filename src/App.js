import React from "react";
import "./style.css";
import { Heading } from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";

function App() {
  return (
    <div>
      <div className="header">
        <Heading />
      </div>
      <div className="note">
        {notes.map((noteItem) => {
          return (
            <div>
              <Note
                key={noteItem.key}
                title={noteItem.title}
                content={noteItem.content}
              />
            </div>
          );
        })}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;

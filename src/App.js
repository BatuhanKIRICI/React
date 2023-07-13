import React from "react";
import "./style.css";
import Divs from "./Divs";
import emojipedia from "./Emojipedia";

const createDiv = (emojiTerm) => {
  return (
    <div>
      <Divs
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
      />
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createDiv)}</dl>
    </div>
  );
}

export default App;

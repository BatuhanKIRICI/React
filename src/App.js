import { useState } from "react";
import Images from "./Images";

const App = () => {
  function getRandomPicture() {
    const pictureArray = ["first", "second", "third", "fourth"];
    return pictureArray[Math.floor(Math.random() * pictureArray.length)];
  }
  const [picture, setPicture] = useState([]);

  function handleClick() {
    setPicture([...picture, getRandomPicture()]);
  }

  const pictureList = picture.map((pic, index) => {
    return <Images key={index} pic={pic} />;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          //
          width: "30%",
          height: "75px",
          fontSize: "35px",
          backgroundColor: "blue",
          color: "white",
          border: "1px solid blue",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
      >
        Add Picture
      </button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {pictureList}
      </div>
    </div>
  );
};

export default App;

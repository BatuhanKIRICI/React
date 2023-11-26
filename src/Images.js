import First from "./images/1.jpg";
import Second from "./images/2.jpg";
import Third from "./images/3.jpg";
import Fourth from "./images/4.png";

const pictureMap = {
  first: First,
  second: Second,
  third: Third,
  fourth: Fourth,
};

function Images({ pic }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "3px solid black",
        borderRadius: "15px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <img src={pictureMap[pic]} alt="" style={{ width: "350px" }} />
    </div>
  );
}

export default Images;

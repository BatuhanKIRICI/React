import "./AnimalShow.css";
import { useState } from "react";
import Bird from "./svg/bird.svg";
import Cat from "./svg/cat.svg";
import Cow from "./svg/cow.svg";
import Dog from "./svg/dog.svg";
import Gator from "./svg/gator.svg";
import Heart from "./svg/heart.svg";
import Horse from "./svg/horse.svg";

const svgMap = {
  bird: Bird,
  cat: Cat,
  cow: Cow,
  dog: Dog,
  gator: Gator,
  horse: Horse,
};
function AnimalShow(props) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[props.type]} alt="Animal" />
      <img
        className="heart"
        src={Heart}
        alt="Heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;

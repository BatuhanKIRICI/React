import React from "react";

type Data = {
  name: string;
  number: number;
  isGood: boolean;
};
function Home(props: Data) {
  return (
    <div>
      {props.isGood ? (
        <p>
          {props.name} {props.number}
        </p>
      ) : (
        <h1>Go home!</h1>
      )}
    </div>
  );
}

export default Home;

import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const numberContext = useContext(NumberContext);

  return (
    <>
      <div>
        <div>Number: {numberContext.countObj}</div>
        <button onClick={() => numberContext.dispatchObj("increment")}>
          Increase
        </button>
        <button onClick={() => numberContext.dispatchObj("decrement")}>
          Decrease
        </button>
        <button onClick={() => numberContext.dispatchObj("reset")}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Calculate;

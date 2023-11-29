import React, { useEffect, useReducer } from "react";
import Calculate from "./Calculate";

export const NumberContext = React.createContext();
function App() {
  const initialValue = 0;

  const reducer = (state, action) => {
    /* switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialValue;
      default:
        return state;
    } */
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else if (action === "reset") {
      return initialValue;
    } else {
      return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    console.log("Rendered");
  }, [count]);

  return (
    <NumberContext.Provider value={{ countObj: count, dispatchObj: dispatch }}>
      <Calculate />
    </NumberContext.Provider>
  );
}

export default App;

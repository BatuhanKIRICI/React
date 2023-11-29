import { useState } from "react";

function useCounter() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((p) => p + 1);
  };

  const decrement = () => {
    setNumber((p) => p - 1);
  };

  const reset = () => {
    setNumber((p) => 0);
  };

  return [number, increment, decrement, reset];
}

export default useCounter;

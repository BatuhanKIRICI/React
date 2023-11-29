import useCounter from "./useCounter";

function Counter() {
  const [number, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

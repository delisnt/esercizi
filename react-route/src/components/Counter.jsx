/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";
import { useHookCounter } from "./useHookCounter";

function Counter() {
  const { counter, increment, decrement, reset } = useHookCounter();

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h2>{counter}</h2>
      <CounterDisplay counterValue={counter} />
      <Button label={"Increment"} onClick={increment} />
      <Button label={"Decrement"} onClick={decrement} />
      <Button label={"Reset"} onClick={reset} />
    </div>
  );
}

export default Counter;

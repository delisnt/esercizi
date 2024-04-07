/* eslint-disable react-hooks/rules-of-hooks */
import Button from './Button'
import CounterDisplay from './CounterDisplay';
import { useHookCounter } from './useHookCounter';

function Counter() {

    const {counter, increment, decrement, reset} = useHookCounter()

  return (
    <div>
        <h2>{counter}</h2>
        <CounterDisplay counterValue={counter}/>
        <Button label={"Increment"} onClick={increment}/>
        <Button label={"Decrement"} onClick={decrement}/>
        <Button label={"Reset"} onClick={reset}/>
    </div>
  )
}

export default Counter
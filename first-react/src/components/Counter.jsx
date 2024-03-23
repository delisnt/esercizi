import React, { useState } from 'react'
import Button from './Button'
import CounterDisplay from './CounterDisplay';

function Counter( { initialValue = 0, amount = 1}) {

    const [counter, useCounter] = useState(initialValue);

    function handleIncrementButton() {
        useCounter((c) => c + amount)
    }

    function handleDecrementButton() {
        useCounter((c) => c - amount)
    }

    function handleResetButton() {
        useCounter(initialValue)
    }
  return (
    <div>
        <CounterDisplay counterValue={counter}/>
        <Button label={"Increment"} onClick={handleIncrementButton}/>
        <Button label={"Decrement"} onClick={handleDecrementButton}/>
        <Button label={"Reset"} onClick={handleResetButton}/>
    </div>
  )
}

export default Counter
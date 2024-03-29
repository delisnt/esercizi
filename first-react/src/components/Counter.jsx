/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from 'react';
import Button from './Button'
import CounterDisplay from './CounterDisplay';
import { useRef } from 'react';

function Counter( { initialValue = 0, amount = 1}) {

    const [counter, useCounter] = useState(initialValue);
    const prevCount = useRef(initialValue)
    const directionRef = useRef(null)

    useEffect(() => {
        if (prevCount.current < counter){
            directionRef.current = "Up" 
            console.log(directionRef.current);
        } else if (prevCount.current > counter) {
            directionRef.current = "Down"
            console.log(directionRef.current);
        }
        prevCount.current = counter;
    }, [counter])

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
        <h2>{counter}</h2>
        <CounterDisplay counterValue={counter}/>
        <Button label={"Increment"} onClick={handleIncrementButton}/>
        <Button label={"Decrement"} onClick={handleDecrementButton}/>
        <Button label={"Reset"} onClick={handleResetButton}/>
    </div>
  )
}

export default Counter
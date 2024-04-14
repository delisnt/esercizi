import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useHookCounter(initialValue = 0, amount = 1) {
  const [counter, setCounter] = useState(initialValue);
  const prevCounterRef = useRef(initialValue);
  const directionRef = useRef(null);


  useEffect(() => {
    if (counter > prevCounterRef.current) {
      directionRef.current = 'up';
    } else if (counter < prevCounterRef.current) {
      directionRef.current = 'down';
    } else {
      directionRef.current = null;
    }
    prevCounterRef.current = counter;
    console.log(directionRef.current);
  }, [counter]);

  function handleIncrementButton() {
    setCounter((c) => c + amount);
  }

  function handleDecrementButton() {
    setCounter((c) => c - amount);
  }

  function handleResetButton() {
    setCounter(initialValue);
  }

  return {
    counter,
    increment: handleIncrementButton,
    decrement: handleDecrementButton,
    reset: handleResetButton,
  };

  
}

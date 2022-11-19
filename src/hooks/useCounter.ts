import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const decrement = (value = 1) => {
    const result = counter - value;
    if (result < 1) {
      setCounter(1);
    } else {
      setCounter(result);
    }
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

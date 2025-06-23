import { useState } from "react";
type counterData = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export default function useCounter(initialValue = 0): counterData {
  const [count, setCount] = useState<number>(initialValue);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}

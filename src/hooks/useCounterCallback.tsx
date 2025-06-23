import { useCallback, useState } from "react";
type CounterData = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export default function useCounterCallback(initialValue = 0): CounterData {
  const [count, setCount] = useState(0);
  /* The function updater form setCount((c) => ...) does not depend on any external variables, 
  only the update function argument (c) */
  const increment = useCallback(() => {
    console.log("[useCounterCallback] increment called");
    setCount((c) => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}

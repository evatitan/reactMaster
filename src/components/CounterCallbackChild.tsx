import React from "react";
type CounterCallbackChildProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
/*useCallback hooks lets you cache a function definition between re-renders until
its dependencies changes. alongside with memo.*/
const CounterCallbackChild = React.memo((Props: CounterCallbackChildProps) => {
  console.log("[CounterCallbackChild] component");
  const { count, increment, decrement, reset } = Props;
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
});

export default CounterCallbackChild;

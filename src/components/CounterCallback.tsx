import useCounterCallback from "../hooks/useCounterCallback";

export default function CounterCallback() {
  /*useCallback hooks lets you cache a function definition between re-renders until
   its dependencies changes. alongside with memo.*/
  const { count, increment, decrement, reset } = useCounterCallback();

  return (
    <>
      <p>Count:{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

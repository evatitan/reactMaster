import useCounterCallback from "../hooks/useCounterCallback";
import CounterCallbackChild from "./CounterCallbackChild";

export default function CounterCallback() {
  /*useCallback hooks lets you cache a function definition between re-renders until
   its dependencies changes. alongside with memo.*/
  const { count, increment, decrement, reset } = useCounterCallback();

  return (
    <>
      <CounterCallbackChild
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </>
  );
}

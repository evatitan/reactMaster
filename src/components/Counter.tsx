import useCounter from "../hooks/useCounter";
import CounterChild from "./CounterChild";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <CounterChild
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </>
  );
}

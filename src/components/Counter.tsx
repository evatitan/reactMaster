import useCounter from "../hooks/useCounter";
export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <p>Count:{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

type CounterChildProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export default function CounterChild(Props: CounterChildProps) {
  const { count, increment, decrement, reset } = Props;
  console.log("[CounterChild] component");
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

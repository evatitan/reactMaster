import useToggle from "./../hooks/useToggle";

export default function Toggle() {
  const [value, toggle] = useToggle();
  return <button onClick={toggle}>{value ? "Open" : "Closed"}</button>;
}

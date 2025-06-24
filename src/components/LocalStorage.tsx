import useLocalStorage from "./../hooks/useLocalStorage";

export default function LocalStorage() {
  const [value, setName] = useLocalStorage("username", "Guest");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{value}</h1>
    </>
  );
}

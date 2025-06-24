import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function Debounce() {
  const [text, setText] = useState("");
  const debounceValue = useDebounce(text, 300);
  return (
    <>
      <label htmlFor="">Type something : {""}</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type here..."
      />
      <p>Immediate value : {text}</p>
      <p>Debounced value: {debounceValue}</p>
    </>
  );
}

import { useState } from "react";

export default function useToggle(): [boolean, () => void] {
  const [value, setValue] = useState(false);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}

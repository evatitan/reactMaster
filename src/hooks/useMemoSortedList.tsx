import { useMemo } from "react";
/* useMemo is a hook that lets you memorizer or cache the result of 
an expensive calculation between re-renders, until dependencies change.  */
export default function SortedList(list: number[]) {
  return useMemo(() => [...list].sort((a, b) => a - b), [list]);
}

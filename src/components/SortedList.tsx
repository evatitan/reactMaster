import { useState, memo } from "react";
import useMemoSortedList from "../hooks/useMemoSortedList";

type ListProps = {
  items: number[];
};

// memoized descendant component
const List = memo(function List({ items }: ListProps) {
  return (
    <ul>
      {items.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  );
});

export default function SortedList() {
  const [numbers] = useState([5, 6, 3, 4, 2, 1, 9, 8, 0, 7]);
  /* Memoize the sorted list*/
  const sortedNumbers = useMemoSortedList(numbers);
  return (
    <>
      <h2>Original List: {numbers.join(",")} </h2>
      <h2>Sorted List: {sortedNumbers.join(",")}</h2>
      <List items={sortedNumbers} />
    </>
  );
}

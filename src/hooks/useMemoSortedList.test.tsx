import { renderHook } from "@testing-library/react";
import useSortedList from "./useMemoSortedList";

describe("useSortedList", () => {
  test("should handle empty array", () => {
    const { result } = renderHook(() => useSortedList([]));
    expect(result.current).toStrictEqual([]);
  });

  test("should handle duplicate values", () => {
    const { result } = renderHook(() => useSortedList([3, 2, 2, 1]));
    expect(result.current).toStrictEqual([1, 2, 2, 3]);
  });

  test("should return sorted array", () => {
    const { result } = renderHook(() => useSortedList([3, 2, 1]));
    expect(result.current).toStrictEqual([1, 2, 3]);
  });

  test("should not mutate the original array", () => {
    const arr = [3, 2, 1];
    renderHook(() => useSortedList(arr));
    expect(arr).toStrictEqual([3, 2, 1]);
  });
});

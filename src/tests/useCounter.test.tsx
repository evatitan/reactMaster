import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("should have initial count as 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
  test("should increment the value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test("should decrement the value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });

  test("should reset the value after decrement or increment value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.decrement();
      result.current.reset();
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});

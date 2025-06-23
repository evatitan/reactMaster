import { renderHook, act } from "@testing-library/react";
import useToggle from "./useToggle";

describe("useToggle hook", () => {
  test("should have initial value as false", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  test("should toggle the value", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);
  });
});

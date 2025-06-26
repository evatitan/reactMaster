import { renderHook, act } from "@testing-library/react";
import useDebounce from "../hooks/useDebounce";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("useDebounce", () => {
  test("should return the value after delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "test", delay: 300 },
      }
    );
    expect(result.current).toBe("test");
    rerender({ value: "test2", delay: 300 });
    expect(result.current).toBe("test");
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(result.current).toBe("test2");
  });
});

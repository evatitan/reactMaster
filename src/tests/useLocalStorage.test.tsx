import { act } from "react";
import useLocalStorage from "./useLocalStorage";
import { renderHook } from "@testing-library/react";

describe("useLocalStorage", () => {
  test("should initialize with default value", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "defaultValue")
    );
    expect(result.current[0]).toBe("defaultValue");
  });
  test("should update value and localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "defaultValue")
    );
    const [, setValue] = result.current;
    act(() => {
      setValue("newValue");
    });
    /* window.localStorage.getItem("testKey")!
       here ! is the TS non-null assertion operator, value is string, not string | null
      */
    expect(JSON.parse(window.localStorage.getItem("testKey")!)).toBe(
      "newValue"
    );
  });
});

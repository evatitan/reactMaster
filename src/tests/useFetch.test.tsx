import { renderHook, act } from "@testing-library/react";
import useFetch from "./useFetch";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: "Test" }]),
  })
) as jest.Mock;

describe("useFetch", () => {
  test("should fetch data successfully", async () => {
    const { result } = renderHook(() => useFetch());
    await act(async () => {
      await result.current.fetchData();
    });
    const { data, loading, error } = result.current;
    expect(loading).toBe(false);
    expect(error).toBeNull();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

  test("should handle fetch error", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Network error"))
    );
    const { result } = renderHook(() => useFetch());
    await act(async () => {
      await result.current.fetchData();
    });
    const { data, loading, error } = result.current;
    expect(loading).toBe(false);
    expect(data).toBeUndefined();
    expect(error).toBe("Failed to fetch data");
  });
});

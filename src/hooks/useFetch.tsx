import { useState, useCallback } from "react";

type Data = {
  id: number;
  title: string;
};

export default function useFetch() {
  const [data, setData] = useState<Data[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("fetched data:", data);
      if (!data || !data.length)
        throw new Error("Data is not available or empty");
      setData(data);
    } catch (error) {
      console.log("error fetching data:", error);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, [url]);
  return { data, loading, error, fetchData };
}

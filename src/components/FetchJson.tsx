import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

type DataItem = {
  id: number;
  title: string;
};
export default function FetchJson() {
  const { data, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <button onClick={fetchData}>use fetch</button>
      {data &&
        data.map((d: DataItem) => {
          return (
            <li key={d.id}>
              <ul>{d.title}</ul>
            </li>
          );
        })}
    </>
  );
}

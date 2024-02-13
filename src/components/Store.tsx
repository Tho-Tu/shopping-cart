import Card from "./Card";
import { useState, useEffect, Key } from "react";
import { Link } from "react-router-dom";

type CardItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  [key: string]: unknown;
};

const useCardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=15",
          { mode: "cors" }
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        console.log(data);
        setData(data);
        setError(null);
      } catch (error) {
        let message;
        if (error instanceof Error) {
          message = error.message;
        } else {
          message = String(error);
        }
        setError(message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return { data, loading, error };
};

function Store() {
  const { data, loading, error } = useCardData();

  return (
    <div className="flex-1 flex flex-col gap-6 py-24 px-28">
      <h1>Fake Store API</h1>
      {loading && <div>Items loading...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul className="flex flex-wrap gap-4">
        {data &&
          (data as CardItem[]).map(
            (item: {
              id: Key | null | undefined;
              title: string;
              description: string;
              image: string;
              price: number;
            }) => (
              <li
                key={item.id}
                className="border-4 border-solid border-r-indigo-500 border-b-indigo-500 p-4 w-80 rounded-xl"
              >
                <Link
                  to={`/store/${item.id}`}
                  className="flex flex-col gap-4 justify-between"
                >
                  <Card
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                  />
                </Link>
              </li>
            )
          )}
      </ul>
    </div>
  );
}

export default Store;

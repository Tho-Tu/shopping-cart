import Card from "./Card";
import shoppingCart from "../assets/data";
import { useState, useEffect } from "react";

type Item = {
  id: number;
  title: string;
  [key: string]: unknown;
};

function Store() {
  const [data, setData] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex-1">
      <div className="flex flex-col gap-6 py-24 px-28">
        Testing Store
        <h1>Fake Store API</h1>
        {loading && <div>Item loading...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {data && data.title}
          {/* {data &&
            data.map(({ id, title }) => (
              <li key={id}>
                <h3>{title}</h3>
              </li>
            ))} */}
        </ul>
      </div>
      {/* {shoppingCart.map((items) => (
        <Card itemName={items} />
      ))} */}
    </div>
  );
}

export default Store;

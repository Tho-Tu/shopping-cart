/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Form } from "react-router-dom";
import { useState, useEffect } from "react";

type itemType = {
  [key: string]: any;
};

export default function Item() {
  const { itemIndex } = useParams();
  const [item, setItem] = useState<itemType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${itemIndex}`,
          { mode: "cors" }
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const item = await response.json();
        console.log(item);
        setItem(item);
        setError(null);
      } catch (error) {
        let message;
        if (error instanceof Error) {
          message = error.message;
        } else {
          message = String(error);
        }
        setError(message);
        setItem(null);
      } finally {
        setLoading(false);
      }
    }
    getItem();
  }, [itemIndex]);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex-1 flex gap-8 py-24 px-28">
      <div className="flex flex-col gap-10 w-3/5">
        {loading && <div>Item loading...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <h3 className="font-bold text-2xl">{item && item.title}</h3>
        <div className="text-xl">
          {item && capitalizeFirstLetter(item.description)}
        </div>
        {!loading && (
          <div>
            <div className="flex justify-between">
              <div className="self-center text-xl">${item && item.price}</div>
              <Form method="post" className="flex gap-3">
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5"
                  placeholder="0"
                  required
                ></input>
                <button type="submit" className="button-blue min-w-fit">
                  Add to cart
                </button>
              </Form>
            </div>
          </div>
        )}
      </div>
      <div className="w-2/5">
        <img
          src={item && item.image}
          alt={item && item.title}
          draggable="false"
          className="w-3/5 rounded-xl"
        ></img>
      </div>
    </div>
  );
}

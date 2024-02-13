/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
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

  return (
    <div className="flex-1 flex flex-col gap-6 py-24 px-28">
      {loading && <div>Item loading...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <h3 className="font-bold">{item && item.title}</h3>
      <div className="text-sm">{item && item.description}</div>
      <img
        src={item && item.image}
        alt={item && item.title}
        draggable="false"
        className="w-40 rounded-xl self-center"
      ></img>
      <div className="font-bold">
        ${item && item.price}
        <br></br>
        <button type="button" className="button-blue ">
          Add to cart
        </button>
      </div>
    </div>
  );
}

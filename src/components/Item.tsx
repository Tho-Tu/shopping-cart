/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Form, redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import shoppingCartData from '../assets/data';

type requestObject = {
  [key: string]: any;
};
// eslint-disable-next-line react-refresh/only-export-components
export async function itemAction({ request }: requestObject) {
  const data = await request.formData();
  const submission = {
    itemId: +data.get('itemId'),
    itemName: data.get('itemName'),
    quantity: +data.get('quantity'),
    price: data.get('price'),
    itemImage: data.get('itemImage'),
  };

  shoppingCartData.addItems(
    submission.itemId,
    submission.itemName,
    submission.quantity,
    submission.price,
    submission.itemImage
  );

  return redirect('/store');
}

type itemType = {
  [key: string]: any;
};

export default function Item() {
  const { itemId } = useParams();
  const [item, setItem] = useState<itemType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${itemId}`,
          { mode: 'cors' }
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const item = await response.json();
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
  }, [itemId]);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex flex-1 gap-8 px-28 py-24">
      <div className="flex w-3/5 flex-col gap-10">
        {loading && <div>Item loading...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <h3 className="text-2xl font-bold">{item && item.title}</h3>
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
                  name="quantity"
                  className="block w-full rounded-lg border border-gray-300 
                  bg-gray-50 p-2.5 text-sm text-gray-900 
                  focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={1}
                  required
                ></input>
                <input type="hidden" name="itemId" value={itemId}></input>
                <input
                  type="hidden"
                  name="itemName"
                  value={item && item.title}
                ></input>
                <input
                  type="hidden"
                  name="price"
                  value={item && item.price}
                ></input>
                <input
                  type="hidden"
                  name="itemImage"
                  value={item && item.image}
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

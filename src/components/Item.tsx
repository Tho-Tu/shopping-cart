import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Item() {
  const { itemIndex } = useParams();
  console.log(itemIndex);
  const [item, setItem] = useState(null);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h3 className="font-bold">{item.title}</h3>
      <div className="text-sm">{item.description}</div>
      <img
        src={item.image}
        alt={item.title}
        draggable="false"
        className="w-40 rounded-xl self-center"
      ></img>
      <div className="font-bold">
        ${item.price}
        <br></br>
        <button
          type="button"
          className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

// export async function loader({ params }) {
//   const itemIndex = fetch(`https://fakestoreapi.com/products/${params.itemIndex}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           `This is an HTTP error: The status is ${response.status}`
//         );
//       }
//       return response.json();
//     })
//     .then((actualData) => actualData)
//     .catch((err) => {
//       return err.message;
//     });

//   return itemIndex;
// }

import { Form } from "react-router-dom";

type cardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  [key: string]: unknown;
};

export default function Card({ title, image, price }: cardProps) {
  return (
    <>
      <h3 className="font-bold">{title}</h3>
      <img
        src={image}
        alt={title}
        draggable="false"
        className="w-40 rounded-xl self-center"
      ></img>
      <div className="font-bold">
        ${price}
        <br></br>
        <Form>
          <button
            type="button"
            className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </Form>
      </div>
    </>
  );
}

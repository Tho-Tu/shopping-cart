// import { Form } from "react-router-dom";

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
      <h3 className="text-center font-bold">{title}</h3>
      <img
        src={image}
        alt={title}
        draggable="false"
        className="w-40 self-center rounded-xl"
      ></img>
      <div className="flex justify-between font-bold">
        <button type="button" className="button-blue">
          More details
        </button>
        <div className="self-center">${price}</div>
      </div>
    </>
  );
}

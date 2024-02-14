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
      <h3 className="font-bold text-center">{title}</h3>
      <img
        src={image}
        alt={title}
        draggable="false"
        className="w-40 rounded-xl self-center"
      ></img>
      <div className="font-bold flex justify-between">
        <button type="button" className="button-blue">
          More details
        </button>
        <div className="self-center">${price}</div>
      </div>
    </>
  );
}

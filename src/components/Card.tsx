type cardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  [key: string]: unknown;
};

export default function Card({ title, description, image, price }: cardProps) {
  return (
    <>
      <h3 className="font-bold">{title}</h3>
      {/* <div className="text-sm">{description}</div> */}
      <img
        src={image}
        alt={title}
        draggable="false"
        className="w-2/3 rounded-xl"
      ></img>
      <div className="font-bold">${price}</div>
      <button
        type="button"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
      </button>
    </>
  );
}

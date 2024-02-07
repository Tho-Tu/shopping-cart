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
      <div>{description}</div>
      <img src={image}></img>
      <div>{price}</div>
    </>
  );
}

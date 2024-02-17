type shoppingCartProps = {
  isVisible: boolean;
  handleShowModal: (isVisible: boolean) => void;
};

function ShoppingCart({ isVisible, handleShowModal }: shoppingCartProps) {
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 flex justify-end bg-black bg-opacity-25 
    backdrop-blur-sm"
    >
      <div className="w-[600px]">
        <div className="rounded bg-white p-2">
          <button
            className="blue-button z-10"
            onClick={() => {
              handleShowModal(!isVisible);
            }}
          >
            X
          </button>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          laborum repellendus ipsam suscipit. Veritatis at consectetur unde
          doloribus nesciunt esse! Vero mollitia fugit a exercitationem libero
          asperiores veritatis optio nihil? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Voluptates, quis dolore nesciunt
          cupiditate consequatur ea ad magni consectetur vel laudantium natus
          dignissimos nostrum expedita earum, delectus architecto odio, dolores
          eaque.
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

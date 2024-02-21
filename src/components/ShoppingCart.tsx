import shoppingCartData, { type ItemsObject } from '../assets/data';

type shoppingCartProps = {
  isVisible: boolean;
  onClose: () => void;
};

function ShoppingCart({ isVisible, onClose }: shoppingCartProps) {
  if (!isVisible) return null;

  const handleClose: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex h-screen justify-end bg-black bg-opacity-25 
    backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[450px] text-black">
        <div
          className="flex h-full flex-col justify-between gap-4 
        rounded bg-white p-4"
        >
          <div className="flex justify-between">
            <h1 className="text-2xl font-extrabold">Shopping Cart</h1>
            <button
              className="button-blue w-min bg-red-400"
              onClick={() => {
                onClose();
              }}
            >
              Close
            </button>
          </div>
          <ul className="flex-auto overflow-auto">
            {shoppingCartData.getItems().map((item: ItemsObject) => (
              <li key={item.itemId}>
                <CartItems
                  itemName={item.itemName}
                  quantity={item.quantity}
                  price={item.price}
                  itemImage={item.itemImage}
                />
              </li>
            ))}
          </ul>
          <div>
            Total Price: $
            {Math.round(shoppingCartData.totalPrice() * 100) / 100}
          </div>
          <button className="button-blue">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

function CartItems({ itemName, quantity, price, itemImage }: ItemsObject) {
  return (
    <>
      <div className="mb-1 flex min-h-36 gap-8 bg-slate-100 p-1">
        <div className="flex w-28">
          <img
            src={itemImage}
            alt={itemName && itemName}
            draggable="false"
            className="w-24 self-center rounded-xl"
          ></img>
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-bold">{itemName}</div>
          <div>${price * quantity}</div>
          <div>
            <span className="italic">Quantity:</span> {quantity}
          </div>
        </div>
      </div>
    </>
  );
}

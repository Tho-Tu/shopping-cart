import { type ItemsObject, type shoppingCartDataObject } from '../assets/data';
import DeleteIcon from './icons/DeleteIcon';
import AddIcon from './icons/AddIcon';
import RemoveIcon from './icons/RemoveIcon';
import { useContext } from 'react';
import { CartContext } from '../Root';
import { useLoaderData } from 'react-router-dom';

type shoppingCartProps = {
  isVisible: boolean;
  onClose: () => void;
};

function ShoppingCart({ isVisible, onClose }: shoppingCartProps) {
  const { shoppingCartData } = useLoaderData() as {
    shoppingCartData: shoppingCartDataObject;
  };

  const handleClose: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') {
      onClose();
    }
  };
  if (!isVisible) return null;
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
            <h1 className="text-2xl font-extrabold">
              Shopping Cart ({shoppingCartData.totalItems()})
            </h1>
            <button
              className="button-blue w-min bg-red-400 hover:bg-red-500"
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
                  itemId={item.itemId}
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

function CartItems({
  itemId,
  itemName,
  quantity,
  price,
  itemImage,
}: ItemsObject) {
  const { handleCartUpdate } = useContext(CartContext);
  const { shoppingCartData } = useLoaderData() as {
    shoppingCartData: shoppingCartDataObject;
  };

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
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <div className="self-center font-bold">{itemName}</div>
            <button
              type="submit"
              className="self-center"
              onClick={() => {
                shoppingCartData.removeItems(itemId);
                handleCartUpdate();
              }}
            >
              <DeleteIcon color={'red'} />
            </button>
          </div>
          <div>${price * quantity}</div>
          <div className="flex gap-4">
            <span className="italic">Quantity: {quantity}</span>
            <div>
              <button
                className="mr-2 rounded-2xl bg-slate-300 p-[2px] 
              hover:bg-slate-400 active:ring-2 active:ring-black"
                onClick={() => {
                  shoppingCartData.adjustQuantity(itemId, 1);
                  handleCartUpdate();
                }}
              >
                <AddIcon color={'green'} />
              </button>
              <button
                className="rounded-2xl bg-slate-300 p-[2px] 
              hover:bg-slate-400 active:ring-2 active:ring-black"
                onClick={() => {
                  shoppingCartData.adjustQuantity(itemId, -1);
                  handleCartUpdate();
                }}
              >
                <RemoveIcon color={'red'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

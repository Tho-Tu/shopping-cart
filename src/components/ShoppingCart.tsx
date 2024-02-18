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
        <div className="flex h-full flex-col justify-between gap-4 rounded bg-white p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <button
              className="button-blue w-min bg-red-400"
              onClick={() => {
                onClose();
              }}
            >
              Close
            </button>
          </div>
          <div className="flex-auto">Shopping contents</div>
          <button className="button-blue">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

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
      className="fixed inset-0 flex justify-end bg-black bg-opacity-25 
    backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[450px] text-black">
        <div className="h-full rounded bg-white p-2">
          <button
            className="button-blue z-10"
            onClick={() => {
              onClose();
            }}
          >
            X
          </button>
          <h1>Shopping Cart</h1>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SearchInput from './SearchInput.tsx';
import ShoppingCart from './ShoppingCart.tsx';
import shoppingCartData from '../assets/data.tsx';

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
  const totalItems = shoppingCartData.totalItems();
  return { totalItems };
}

function Header() {
  const [showModal, setShowModal] = useState(false);
  const { totalItems } = useLoaderData() as { totalItems: number };

  return (
    <header
      className="z-10 flex justify-between gap-2 bg-cyan-500 px-12 
    py-4 shadow-[0_2px_16px_8px_rgba(0,0,0,0.3)]"
    >
      <Link to="/" className="min-w-max self-center text-2xl text-white">
        🏖️ OpenBeach
      </Link>
      <nav className="flex gap-6 text-lg text-white">
        <SearchInput />
        <Link
          to="/sef"
          className="self-center underline-offset-2 hover:underline"
        >
          Error
        </Link>
        <Link
          to="/store"
          className="self-center underline-offset-2 hover:underline"
        >
          Store
        </Link>
        <button
          type="button"
          className="min-w-max self-center underline-offset-2 hover:underline"
          onClick={() => {
            setShowModal(!showModal);
            document.body.style.overflow = showModal ? 'auto' : 'hidden';
          }}
        >
          Shopping Cart ({totalItems})
        </button>
        <ShoppingCart
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
            document.body.style.overflow = showModal ? 'auto' : 'hidden';
          }}
        />
      </nav>
    </header>
  );
}

export default Header;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput.tsx';
import ShoppingCart from './ShoppingCart.tsx';

function Header() {
  const [showModal, setShowModal] = useState(false);

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
        <Link to="/sef" className="self-center">
          Error
        </Link>
        <Link to="/store" className="self-center">
          Store
        </Link>
        <button
          type="button"
          className="min-w-max self-center"
          onClick={() => {
            setShowModal(!showModal);
            document.body.style.overflow = showModal ? 'auto' : 'hidden';
          }}
        >
          Shopping Cart
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

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartUpdated: false,
  handleCartUpdate: () => {},
});

function Root() {
  const [cartUpdated, setCartUpdated] = useState(false);

  const handleCartUpdate = () => {
    setCartUpdated(!cartUpdated);
  };

  return (
    <CartContext.Provider
      value={{
        cartUpdated,
        handleCartUpdate,
      }}
    >
      <div className="flex min-h-screen flex-col justify-between font-custom">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default Root;

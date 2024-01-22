import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between py-4 px-8 bg-cyan-500">
      <Link to="/" className="min-w-max text-white text-xl">
        Open Beach
      </Link>
      <nav className="flex gap-4 text-white">
        <Link to="/home">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/shopping-cart" className="min-w-max">
          Shopping Cart
        </Link>
      </nav>
    </div>
  );
}

export default Header;

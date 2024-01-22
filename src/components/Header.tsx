import { Link } from "react-router-dom";
import SearchInput from "./SearchInput.tsx";

function Header() {
  return (
    <div className="flex justify-between py-6 px-12 bg-cyan-500">
      <Link to="/" className="min-w-max text-white text-2xl">
        🏖️ OpenBeach
      </Link>
      <div>
        <SearchInput />
      </div>
      <nav className="flex gap-6 text-white text-lg">
        <Link to="/sef">Error</Link>
        <Link to="/store">Store</Link>
        <Link to="/shopping-cart" className="min-w-max">
          Shopping Cart
        </Link>
      </nav>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";
import SearchInput from "./SearchInput.tsx";

function Header() {
  return (
    <header className="flex justify-between gap-2 py-4 px-12 bg-cyan-500">
      <Link to="/" className="min-w-max self-center text-white text-2xl">
        🏖️ OpenBeach
      </Link>
      <nav className="flex gap-6 text-white text-lg">
        <SearchInput />
        <Link to="/sef" className="self-center">
          Error
        </Link>
        <Link to="/store" className="self-center">
          Store
        </Link>
        <Link to="/shopping-cart" className="min-w-max self-center">
          Shopping Cart
        </Link>
      </nav>
    </header>
  );
}

export default Header;

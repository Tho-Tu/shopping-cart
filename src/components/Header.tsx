import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between py-4 px-8 bg-cyan-500">
      <div className="min-w-max">Open Beach</div>
      <nav className="flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="" className="min-w-max">
          Shopping Cart
        </Link>
      </nav>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="header">
      <h2>GreenLeaf</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 {totalItems}</Link>
      </nav>
    </header>
  );
}

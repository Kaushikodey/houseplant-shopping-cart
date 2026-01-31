import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(
    state => state.cart
  );

  const cartArray = Object.values(items);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ₹{totalPrice}</p>

      {cartArray.map(item => (
        <div className="cart-item" key={item.id}>
          <span>{item.image}</span>
          <span>{item.name}</span>
          <span>₹{item.price}</span>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <br /><br />
      <Link to="/products">Continue Shopping</Link>
    </div>
  );
}

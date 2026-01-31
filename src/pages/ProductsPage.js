import { plants } from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="grid">
            {plants
              .filter(p => p.category === category)
              .map(plant => (
                <div className="card" key={plant.id}>
                  <div className="img">{plant.image}</div>
                  <h4>{plant.name}</h4>
                  <p>₹{plant.price}</p>
                  <button
                    disabled={cartItems[plant.id]}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

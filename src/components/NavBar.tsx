import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function NavBar() {
  const { openCart, cartItemsQuantity } = useShoppingCart();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
      {cartItemsQuantity === 0 ? null : (
        <button onClick={openCart} className="rounded-full">
          Cart
          <div className="rounded-full">{cartItemsQuantity}</div>
        </button>
      )}
    </nav>
  );
}

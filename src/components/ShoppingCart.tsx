import storeItems from '../data/items';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import QuantityButtons from '../components/QuantityButtons';

export default function ShoppingCart() {
  const { isOpen, cartItems, closeCart, clearCart } = useShoppingCart();

  const total = cartItems.reduce((total, item) => {
    const price = storeItems.find((i) => i.id === item.id)?.price;
    if (price === undefined) return total;

    return total + price * item.quantity;
  }, 0);

  return !isOpen ? null : (
    <div className="flex flex-col">
      <button onClick={closeCart}>Close</button>
      <button onClick={clearCart}>Clear Cart</button>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div>Total: {formatCurrency(total)}</div>
    </div>
  );
}

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === undefined) return null;

  return (
    <div className="flex">
      <img src={item.imgUrl} alt={item.name} />
      <div>{item.name}</div>
      <div>{formatCurrency(item.price)}</div>
      <QuantityButtons id={item.id} />
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}

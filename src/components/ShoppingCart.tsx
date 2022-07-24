import storeItems from '../data/items';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import ItemButtons from './ItemButtons';
import closeIcon from '../icons/close.svg';
import { useState } from 'react';
import StoreItemPreview from './StoreItemPreview';
import { NavLink } from 'react-router-dom';

export default function ShoppingCart() {
  const { isCartOpen, cartItems, closeCart, clearCart } = useShoppingCart();

  const total = cartItems.reduce((total, item) => {
    const price = storeItems.find((i) => i.id === item.id)?.price;
    if (price === undefined) return total;

    return total + price * item.quantity;
  }, 0);

  return (
    <div
      className={
        'flex flex-col transition-opacity duration-300 overflow-hidden fixed top-12 right-0 w-80 bg-slate-400' +
        (isCartOpen ? ' p-2 h-auto opacity-100' : ' h-0 opacity-0 ')
      }
    >
      {cartItems.length === 0 ? (
        <>
          <button onClick={closeCart} className="w-4 h-4 ml-auto">
            <img src={closeIcon} width="16" height="16" alt="" />
          </button>
          <p>Your cart is empty</p>
        </>
      ) : (
        <>
          <div className="flex">
            <button onClick={clearCart}>Clear</button>
            <button onClick={closeCart} className="w-4 h-4 ml-auto">
              <img src={closeIcon} width="16" height="16" alt="" />
            </button>
          </div>
          <h2 className="text-lg font-bold text-center">Shopping Cart</h2>
          <div className="overflow-y-scroll h-100">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="flex justify-between">
            <span>
              Total Amount:<small className="block">(shipping included)</small>
            </span>
            {formatCurrency(total)}
          </div>
          <NavLink to="/Basket">Checkout</NavLink>
        </>
      )}
    </div>
  );
}

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === undefined) return null;

  return (
    <div className="flex flex-col border-b border-b-slate-800 mb-2">
      <img
        src={item.paths[0]}
        alt={item.name}
        className="h-20 w-full object-cover"
      />
      <div>{item.name}</div>
      <button onClick={() => setIsPreviewOpen(true)}>View</button>
      <div className="flex justify-between">
        <button onClick={() => removeItem(item.id)}>Remove</button>
        {<ItemButtons id={item.id} className="inline-flex" />}{' '}
        {formatCurrency(item.price)}
      </div>
      {isPreviewOpen && (
        <StoreItemPreview closeMenu={() => setIsPreviewOpen(false)} {...item} />
      )}
    </div>
  );
}

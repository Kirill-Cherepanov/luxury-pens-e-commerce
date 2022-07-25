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
        'z-10 flex flex-col transition-opacity duration-300 overflow-hidden fixed top-12 right-0 w-80 bg-slate-300' +
        (isCartOpen
          ? ' h-auto max-h-[100%] opacity-100 border-t border-opacity-70 border-t-slate-500'
          : ' h-0 opacity-0 ')
      }
    >
      {cartItems.length === 0 ? (
        <div>
          <button onClick={closeCart} className="w-4 h-4 ml-auto">
            <img src={closeIcon} width="16" height="16" alt="" />
          </button>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="flex h-16 p-3 py-5 bg-slate-400">
            <button onClick={clearCart}>Clear</button>
            <button
              onClick={closeCart}
              className="ml-auto flex justify-center items-center"
            >
              <img src={closeIcon} width="16" height="16" alt="" />
            </button>
          </div>
          <ul className="cart-scrollbar overflow-y-scroll max-h-100">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ul>
          <div className="bg-slate-400 p-2">
            <div className="flex justify-between font-bold">
              <span>
                TOTAL AMOUNT:
                <small className="block italic">(shipping included)</small>
              </span>
              {formatCurrency(total)}
            </div>
            <NavLink to="/Basket">Checkout</NavLink>
          </div>
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
    <li className="border-b border-opacity-70 border-b-slate-500 last-of-type:border-b-0">
      <div className="pr-3 pl-5 py-4 flex flex-col">
        <img
          src={item.paths[0]}
          alt={item.name}
          className="h-20 w-full object-cover"
        />
        <div className="flex justify-center items-center gap-4 my-3">
          <div className="text-[15px] font-bold">{item.name}</div>
          <div>{formatCurrency(item.price)}</div>
        </div>
        <div className="flex justify-between">
          <button onClick={() => removeItem(item.id)}>Remove</button>
          <ItemButtons id={item.id} className="inline-flex" />
          <button onClick={() => setIsPreviewOpen(true)}>View</button>
        </div>
        {isPreviewOpen && (
          <StoreItemPreview
            closeMenu={() => setIsPreviewOpen(false)}
            {...item}
          />
        )}
      </div>
    </li>
  );
}

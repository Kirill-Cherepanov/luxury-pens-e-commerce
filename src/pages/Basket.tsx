import { useShoppingCart } from '../context/ShoppingCartContext';
import ItemButtons from '../components/ItemButtons';
import { formatCurrency } from '../utilities/formatCurrency';
import closeIcon from '../icons/close.svg';
import StoreItemPreview from '../components/StoreItemPreview';
import storeItems from '../data/items';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Basket() {
  const { closeCart, cartItems, toggleIsRemoveOnZero } = useShoppingCart();

  useEffect(() => {
    closeCart();
    toggleIsRemoveOnZero();

    return () => toggleIsRemoveOnZero();
  }, [closeCart, toggleIsRemoveOnZero]);

  const total = cartItems.reduce((total, item) => {
    const price = storeItems.find((i) => i.id === item.id)?.price;
    if (price === undefined) return total;

    return total + price * item.quantity;
  }, 0);

  if (cartItems.length === 0) return null;

  return (
    <div className="px-6 pt-4">
      <div className="flex align-center border-b border-b-slate-400 pb-2 mb-2">
        <NavLink to="/Store" className="flex flex-col justify-end basis-1/3">
          Continue shopping
        </NavLink>
        <h1 className="text-center font-bold text-xl basis-1/3">BASKET</h1>
      </div>
      <ul>
        {cartItems.map((item) => (
          <BasketItem key={item.id} {...item} />
        ))}
      </ul>
      <div>
        <div>
          <p>
            Please, check carefully your order and your contact information
            before clicking on the "Order" button. No alteration will be
            accepted afterward.
          </p>
        </div>
        <div className="ORDER-SUMMARY">
          <h3>Order summary</h3>
          <div>
            <span>Total item cost:</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div>
            <span>Shipping charge:</span>
            <span>{formatCurrency(0)}</span>
          </div>
          <div>
            <div>
              <span>Total amount:</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <button>Confirm my order</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>DELIVERY</h4>
          <p>Free delivery across the globe. Possible return under 14 days.</p>
        </div>
        <div>
          <h4>SECURE PAYMENT</h4>
          <p>
            Visa, Mastercard, Post Finance, Paypal, Twint, WebMoney, CIPS,
            EasyPay, etc.
          </p>
        </div>
        <div>
          <h4>CUSTOMER SERVICE</h4>
          <p>
            Monday to Friday from 10am to 7pm and Saturday from 10am to 5pm.
          </p>
          <div>+1 (213) 123-4567</div>
          <p>
            <small>
              (Calls from USA : at local rate. Calls from abroad : at telecom
              provider's international rate.)
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

type BaksetItemProps = {
  id: number;
};

function BasketItem({ id }: BaksetItemProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === undefined) return null;

  return (
    <div className="flex flex-col border-b border-b-slate-800 mb-2">
      <button onClick={() => removeItem(id)} className="ml-auto mb-4">
        <img src={closeIcon} width="16" height="16" alt="" />
      </button>
      <div className="flex">
        <img
          src={item.paths[0]}
          alt={item.name}
          className="h-20 w-full object-cover"
        />
        <div>{item.name}</div>
      </div>
      <button onClick={() => setIsPreviewOpen(true)}>View</button>
      <div className="flex justify-between">
        {<ItemButtons id={item.id} className="inline-flex" />}{' '}
        {formatCurrency(item.price)}
      </div>
      {isPreviewOpen && (
        <StoreItemPreview closeMenu={() => setIsPreviewOpen(false)} {...item} />
      )}
    </div>
  );
}

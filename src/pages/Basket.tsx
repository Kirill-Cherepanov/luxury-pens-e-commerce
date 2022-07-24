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
    <div className="pt-4">
      <div className="px-6">
        <div className="flex align-center border-b-2 border-b-slate-400 pb-4">
          <NavLink to="/Store" className="flex flex-col justify-end basis-1/3">
            Continue shopping
          </NavLink>
          <h1 className="text-center font-bold text-xl basis-1/3">BASKET</h1>
        </div>
      </div>
      <ul className="px-6 mb-10">
        {cartItems.map((item) => (
          <BasketItem
            className=" my-4 border-b border-b-slate-600"
            key={item.id}
            {...item}
          />
        ))}
      </ul>
      <div>
        <div className="px-6 mb-10">
          <p className="text-red-500 text-justify">
            Please, check carefully your order and your contact information
            before clicking on the "Order" button. No alteration will be
            accepted afterward.
          </p>
        </div>
        <div className="ORDER-SUMMARY bg-slate-200 mb-8">
          <div className="px-6 py-8">
            <h3 className="text-lg font-bold mb-4">Order summary</h3>
            <div className="flex justify-between">
              <span className="text-sm">Total item cost:</span>
              <span className="font-bold">{formatCurrency(total)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Shipping charge:</span>
              <span className="font-bold">{formatCurrency(0)}</span>
            </div>
          </div>
          <div className="px-6 py-5 bg-slate-600 text-white">
            <div className="flex justify-between mb-4">
              <span className="">TOTAL AMOUNT:</span>
              <span className="font-bold">{formatCurrency(total)}</span>
            </div>
            <button className="block mx-auto bg-white text-slate-600 rounded-full px-4 py-2">
              Confirm my order
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 pb-8">
        <div className="mb-8 w-3/4 mx-auto text-center">
          <h4 className="mb-1 font-bold text">DELIVERY</h4>
          <p className="text-sm">
            Free delivery across the globe. Possible return under 14 days.
          </p>
        </div>
        <div className="mb-8 w-3/4 mx-auto text-center">
          <h4 className="mb-1 font-bold text">SECURE PAYMENT</h4>
          <p className="text-sm">
            Visa, Mastercard, Post Finance, Paypal, Twint, WebMoney, CIPS,
            EasyPay, etc.
          </p>
        </div>
        <div className=" w-3/4 mx-auto text-center">
          <h4 className="mb-1 font-bold text">CUSTOMER SERVICE</h4>
          <p className="text-sm">
            Monday to Friday from 10am to 7pm and Saturday from 10am to 5pm.
          </p>
          <div className="my-2">+1 (213) 123-4567</div>
          <p>
            <small className="italic">
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
  className: string;
};

function BasketItem({ id, className }: BaksetItemProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === undefined) return null;

  return (
    <div className={'flex flex-col ' + className}>
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

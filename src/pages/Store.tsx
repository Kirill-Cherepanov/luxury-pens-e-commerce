import React from 'react';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartProvider';
import QuantityButtons from '../components/QuantityButtons';

export default function Store() {
  return (
    <div>
      <h1>Store</h1>
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseItemQuantity, removeItem } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="bg-white rounded-md shadow-sm">
      <img
        src={imgUrl}
        alt={name}
        className="rounded-t-md h-48 w-full object-cover"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <h4>{name}</h4>
          <span>{formatCurrency(price)}</span>
        </div>
        <div>
          {quantity === 0 ? (
            <button onClick={() => increaseItemQuantity(id)} className="w-full">
              + Add to Cart
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <QuantityButtons id={id} />
              <button onClick={() => removeItem(id)} className="">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

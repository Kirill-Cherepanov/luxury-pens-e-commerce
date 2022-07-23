import React from 'react';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type Props = {};

export default function Store({}: Props) {
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
  const quantity = 1;
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div>
        <img
          src={imgUrl}
          alt={name}
          className="rounded-t-md h-48 w-full object-cover"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between">
          <h4>{name}</h4>
          <span>{formatCurrency(price)}</span>
        </div>
        <div>
          {
            // @ts-ignore
            quantity === 0 ? (
              <button className="w-full">+ Add to Cart</button>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <button onClick={() => {}}>+</button>
                  <div>{quantity} in cart</div>
                  <button onClick={() => {}}>-</button>
                </div>
                <button className="">Remove</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

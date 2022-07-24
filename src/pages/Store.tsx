import storeItems from '../data/items';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import ItemButtons from '../components/ItemButtons';
import StoreItemPreview from '../components/StoreItemPreview';
import { useState } from 'react';

export default function Store() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold">Store</h1>
      <ul className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  desc: string;
  paths: string[];
};

function StoreItem({ id, name, price, desc, paths }: StoreItemProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const openPreview = () => setIsPreviewOpen(true);
  const closePreview = () => setIsPreviewOpen(false);
  const { getItemQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <li className="bg-white rounded-md shadow-sm">
      <img
        src={paths[0]}
        alt={name}
        className="rounded-t-md h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
        onClick={openPreview}
      />
      <div className="p-2">
        <div className="flex justify-between">
          <h4 onClick={openPreview}>{name}</h4>
          <span onClick={openPreview}>{formatCurrency(price)}</span>
        </div>
        <div>
          {quantity === 0 ? (
            <ItemButtons id={id} type="add" className="w-full" />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <ItemButtons id={id} />
              <ItemButtons id={id} type="remove" />
            </div>
          )}
        </div>
      </div>{' '}
      {isPreviewOpen && (
        <StoreItemPreview
          id={id}
          name={name}
          price={price}
          paths={paths}
          desc={desc}
          closeMenu={closePreview}
        />
      )}
    </li>
  );
}

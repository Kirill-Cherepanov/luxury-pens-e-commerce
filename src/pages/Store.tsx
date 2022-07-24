import storeItems from '../data/items';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import ItemButtons from '../components/ItemButtons';

export default function Store() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold">Store</h1>
      <ul className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </ul>
      <StoreItemPreview {...storeItems[0]} />
    </div>
  );
}

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  paths: string[];
};

function StoreItem({ id, name, price, paths }: StoreItemProps) {
  const { getItemQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <li className="bg-white rounded-md shadow-sm">
      <img
        src={paths[1]}
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
            <ItemButtons id={id} type="add" className="w-full" />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <ItemButtons id={id} />
              <ItemButtons id={id} type="remove" />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
type StoreItemPreviewProps = {
  id: number;
  name: string;
  price: number;
  paths: string[];
  desc: string;
};

function StoreItemPreview({
  id,
  name,
  price,
  paths,
  desc
}: StoreItemPreviewProps) {
  const { getItemQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div>
      <div className="GALLERY">
        <div className="MAGIC-SCROLL hidden md:flex md:flex-col">
          {paths.map((path) => (
            <img src={path} alt={name} />
          ))}
        </div>
        <div className="SWIPER-SLIDER flex md:hidden">
          {paths.map((path) => (
            <img src={path} alt={name} />
          ))}
        </div>
        <div>{name}</div>
        <div>{price}</div>
        <div>
          {quantity === 0 ? (
            <ItemButtons id={id} type="add" />
          ) : (
            <ItemButtons id={id} />
          )}
        </div>
        <div>{desc}</div>
      </div>
    </div>
  );
}

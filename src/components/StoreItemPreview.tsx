import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import ItemButtons from '../components/ItemButtons';
import closeIcon from '../icons/close.svg';
import { createPortal } from 'react-dom';

type StoreItemPreviewProps = {
  id: number;
  name: string;
  price: number;
  paths: string[];
  desc: string;
  closeMenu: () => void;
};

export default function StoreItemPreview({
  id,
  name,
  price,
  paths,
  desc,
  closeMenu
}: StoreItemPreviewProps) {
  const { getItemQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return createPortal(
    <div className="flex backdrop-blur-md justify-center items-center fixed top-0 w-full h-full z-10">
      <div className="flex flex-col w-80 h-5/6 bg-slate-400 p-4 shadow-md overflow-y-scroll">
        <button onClick={closeMenu} className="ml-auto mb-4">
          <img src={closeIcon} width="16" height="16" alt="" />
        </button>
        <div className="GALLERY mb-2 bg-slate-500">
          <div className="MAGIC-SCROLL hidden md:flex md:flex-col">
            {paths.map((path, index) => (
              <img key={index} src={path} alt={name} />
            ))}
          </div>
          <div className="SWIPER-SLIDER overflow-x-hidden flex md:hidden">
            {paths.map((path, index) => (
              <img key={index} src={path} alt={name} />
            ))}
          </div>
        </div>
        <div className="font-bold text-lg">{name}</div>
        <div className="font-bold text-lg pb-4 border-b border-slate-800">
          {formatCurrency(price)}
        </div>
        <div className="py-4">
          {quantity === 0 ? (
            <ItemButtons id={id} type="add" />
          ) : (
            <ItemButtons id={id} />
          )}
        </div>
        <div className="italic text-justify">{desc}</div>
      </div>
    </div>,
    document.getElementById('pop-up')!
  );
}

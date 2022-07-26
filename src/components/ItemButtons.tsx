import { useShoppingCart } from '../context/ShoppingCartContext';
import Icon from './Icon';
type QuantityButtonsProps = {
  id: number;
  type?: string;
  className?: string;
};

export default function ItemButtons({
  id,
  type = 'increase',
  className = ''
}: QuantityButtonsProps) {
  const {
    getItemQuantity,
    decreaseItemQuantity,
    increaseItemQuantity,
    removeItem
  } = useShoppingCart();

  if (type === 'remove') {
    return (
      <button onClick={() => removeItem(id)} className={className}>
        Remove
      </button>
    );
  }

  if (type === 'add')
    return (
      <button onClick={() => increaseItemQuantity(id)} className={className}>
        Add to Cart
      </button>
    );

  return (
    <div
      className={
        'flex justify-center items-center text-lg font-medium h-10 w-32 ' +
        className
      }
    >
      <button
        onClick={() => decreaseItemQuantity(id)}
        className="group grow-1 basis-1/2 h-full transition-colors duration-200 hover:bg-primary-600 border-y-2 border-l-2 border-primary-600 rounded-l-full"
      >
        <Icon
          type="minus"
          className="mx-auto w-auto h-6 select-none transition-all duration-200 group-hover:text-white"
        />
      </button>
      <span className="flex justify-center items-center basis-6 text-center h-full border-y-2 border-primary-600">
        {getItemQuantity(id)}
      </span>
      <button
        onClick={() => increaseItemQuantity(id)}
        className="group grow-1 basis-1/2 h-full transition-colors duration-200 hover:bg-primary-600 border-y-2 border-r-2 border-primary-600 rounded-r-full"
      >
        <Icon
          type="plus"
          className="mx-auto w-auto h-6 select-none transition-all duration-200 group-hover:text-white "
        />
        {/* <img
          src={plusIcon}
          alt="increase"
          className="mx-auto w-auto h-6 select-none transition-all duration-200 group-hover:filter-white"
        /> */}
      </button>
    </div>
  );
}

import { useShoppingCart } from '../context/ShoppingCartContext';

import plusIcon from '../icons/plus.svg';
import minusIcon from '../icons/minus.svg';

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
        'border-2 border-primary-700 flex gap-1 justify-center items-center text-lg font-medium h-10 w-32 rounded-full ' +
        className
      }
    >
      <button onClick={() => decreaseItemQuantity(id)}>
        <img
          src={minusIcon}
          alt="decrease"
          className="w-auto h-6 select-none"
        />
      </button>
      <span className="inline-block w-8 text-center">
        {getItemQuantity(id)}
      </span>
      <button onClick={() => increaseItemQuantity(id)}>
        <img src={plusIcon} alt="increase" className="w-auto h-6" />
      </button>
    </div>
  );
}

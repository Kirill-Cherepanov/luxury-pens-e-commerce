import { useShoppingCart } from '../context/ShoppingCartContext';

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
        + Add to Cart
      </button>
    );

  return (
    <div className={'flex gap-2 justify-center ' + className}>
      <button onClick={() => decreaseItemQuantity(id)}>-</button>
      <div>{getItemQuantity(id)}</div>
      <button onClick={() => increaseItemQuantity(id)}>+</button>
    </div>
  );
}

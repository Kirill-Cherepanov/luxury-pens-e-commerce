import { useShoppingCart } from '../context/ShoppingCartContext';

type QuantityButtonsProps = {
  id: number;
  className?: string;
};

export default function QuantityButtons({
  id,
  className = ''
}: QuantityButtonsProps) {
  const { decreaseItemQuantity, increaseItemQuantity, getItemQuantity } =
    useShoppingCart();

  return (
    <div className={'flex gap-2 ' + className}>
      <button onClick={() => decreaseItemQuantity(id)}>-</button>
      <div>{getItemQuantity(id)}</div>
      <button onClick={() => increaseItemQuantity(id)}>+</button>
    </div>
  );
}

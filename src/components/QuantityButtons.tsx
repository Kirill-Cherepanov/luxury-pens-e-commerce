import { useShoppingCart } from '../context/ShoppingCartProvider';

type QuantityButtonsProps = {
  id: number;
};

export default function QuantityButtons({ id }: QuantityButtonsProps) {
  const { decreaseItemQuantity, increaseItemQuantity, getItemQuantity } =
    useShoppingCart();

  return (
    <div className="flex gap-2">
      <button onClick={() => decreaseItemQuantity(id)}>-</button>
      <div>{getItemQuantity(id)} in cart</div>
      <button onClick={() => increaseItemQuantity(id)}>+</button>
    </div>
  );
}

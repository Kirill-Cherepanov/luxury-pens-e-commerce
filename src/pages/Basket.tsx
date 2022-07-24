import { useShoppingCart } from '../context/ShoppingCartContext';
import ItemButtons from '../components/ItemButtons';
import { formatCurrency } from '../utilities/formatCurrency';
import closeIcon from '../icons/close.svg';
import StoreItemPreview from '../components/StoreItemPreview';
import storeItems from '../data/items';

export default function Basket() {
  const { cartItems } = useShoppingCart();

  const total = cartItems.reduce((total, item) => {
    const price = storeItems.find((i) => i.id === item.id)?.price;
    if (price === undefined) return total;

    return total + price * item.quantity;
  }, 0);

  return (
    <div>
      <div>
        <button>Continue shopping</button>
        <h1>BASKET</h1>
      </div>
      <ul>
        {cartItems.map((item) => (
          <BasketItem key={item.id} {...storeItems[item.id]} />
        ))}
      </ul>
      <div>
        <div>
          <p>
            Please, check carefully your order and your contact information
            before clicking on the "Order" button. No alteration will be
            accepted afterward.
          </p>
        </div>
        <div className="ORDER-SUMMARY">
          <h3>Order summary</h3>
          <div>
            <span>Total item cost:</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div>
            <span>Shipping charge:</span>
            <span>{formatCurrency(0)}</span>
          </div>
          <div>
            <div>
              <span>Total amount:</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <button>Confirm my order</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>DELIVERY</h4>
          <p>Free delivery across the globe. Possible return under 14 days.</p>
        </div>
        <div>
          <h4>SECURE PAYMENT</h4>
          <p>
            Visa, Mastercard, Post Finance, Paypal, Twint, WebMoney, CIPS,
            EasyPay, etc.
          </p>
        </div>
        <div>
          <h4>CUSTOMER SERVICE</h4>
          <p>
            Monday to Friday from 10am to 7pm and Saturday from 10am to 5pm.
          </p>
          <div>+1 (213) 123-4567</div>
          <p>
            <small>
              (Calls from USA : at local rate. Calls from abroad : at telecom
              provider's international rate.)
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

type BaksetItemProps = {
  id: number;
  price: number;
  name: string;
  paths: string[];
};

function BasketItem({ id, price, name, paths }: BaksetItemProps) {
  return null;
}

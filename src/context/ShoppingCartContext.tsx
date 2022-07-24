import { createContext, useContext, ReactNode, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  cartItemsQuantity: number;
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemsQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsCartOpen(true);

  const closeCart = () => {
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.quantity > 0);
    });
    setIsCartOpen(false);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) === undefined) {
        return [...cartItems, { id, quantity: 1 }];
      }
      return cartItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, quantity: item.quantity + 1 };
      });
    });
  };

  const decreaseItemQuantity = (id: number) => {
    setCartItems((cartItems) => {
      if (
        !isCartOpen &&
        cartItems.find((item) => item.id === id)?.quantity === 1
      ) {
        return cartItems.filter((item) => item.id !== id);
      }
      if (cartItems.find((item) => item.id === id)?.quantity === 0) {
        return cartItems;
      }
      return cartItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, quantity: item.quantity - 1 };
      });
    });
  };

  const removeItem = (id: number) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        clearCart,
        cartItemsQuantity,
        cartItems,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}

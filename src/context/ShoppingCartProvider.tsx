import { createContext, useContext, ReactNode, useState } from 'react';

type ShoppingCartContext = {
  getQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  remove: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) === null) {
        return [...cartItems, { id, quantity: 1 }];
      }
      return cartItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, quantity: item.quantity + 1 };
      });
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id)?.quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
      }
      return cartItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, quantity: item.quantity - 1 };
      });
    });
  };

  const remove = (id: number) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        remove
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

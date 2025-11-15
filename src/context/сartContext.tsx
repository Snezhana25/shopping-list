import { createContext, useState, ReactNode, FC, useEffect } from "react";
import type { ICartContextType } from "../models/сartContext";
import type { ICartItem } from "../models/сartItem";
import type { IProduct } from "../models/products";

export const CartContext = createContext<ICartContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    const saved = localStorage.getItem("basket");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: IProduct) => {
    setCartItems((prev) => {
      const itemIndex = prev.findIndex(
        (item) => item.product.id === product.id
      );

      if (itemIndex > -1) {
        const newCart = [...prev];
        newCart[itemIndex] = {
          ...newCart[itemIndex],
          quantity: newCart[itemIndex].quantity + 1,
        };
        return newCart;
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      setCartItems((prev) =>
        prev.filter((item) => item.product.id !== productId)
      );
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

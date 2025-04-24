import { useContext } from "react";
import { CartContext } from "../contexts/CartContext.ts";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must to be between a CartProvider');
  }
  return context;
}
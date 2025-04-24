import { createContext } from "react";
import { ICartState, IDessert } from "../lib/types.definitions.ts";

interface ICartContext {
  cartState: ICartState;
  addToCart: (product: IDessert) => void;
  removeToCart: (product: IDessert) => void;
}

export const CartContext = createContext<ICartContext | undefined>(undefined)
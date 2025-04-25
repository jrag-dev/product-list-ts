import React, { useCallback, useEffect, useState } from "react"
import { ICart, ICartState, IDessert } from "../lib/types.definitions.ts";
import { CartContext } from "./CartContext.ts";

interface ICartProviderProps {
  children: React.ReactNode;
}

const initialCartState: ICartState = {
  cart: [] as unknown as ICart[],
  total: 0
}


const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartState, setCartState] = useState<ICartState>(initialCartState);
  
  const getTotalCart = useCallback(
    (cart: ICart[]) => {
      const totalCart = cart.reduce( (acc, item) => acc + item.subTotal, 0);
      setCartState(prevState => (
        {
          ...prevState,
          total: totalCart
        }
      ))
    },
    []
  )
  
  useEffect(() => {
    getTotalCart(cartState.cart)
  }, [getTotalCart, cartState.cart])

  const addToCart = (product: IDessert) => {
    const productInCartIndex = cartState.cart.findIndex( item => item.product.name === product.name);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cartState);
      newCart.cart[productInCartIndex].quantity += 1;
      newCart.cart[productInCartIndex].subTotal = newCart.cart[productInCartIndex].quantity * newCart.cart[productInCartIndex].product.price;
      return setCartState(newCart);
    }

    setCartState( prevState => (
      {
        ...prevState,
        cart: [
          ...prevState.cart,
          {
            product: {...product},
            quantity: 1,
            subTotal: product.price,
          }
        ]
      }
    ))

  }

  const removeToCart = (product: IDessert) => {
    const newCart = cartState.cart.filter( item => item.product.name !== product.name);
    setCartState({
      ...cartState,
      cart: [...newCart]
    })
  }

  const increaseQuantityOfProduct = (product: IDessert) => {
    const productInCartIndex = cartState.cart.findIndex( item => item.product.name === product.name);
    const newCart = structuredClone(cartState);
    newCart.cart[productInCartIndex].quantity += 1;
    newCart.cart[productInCartIndex].subTotal = newCart.cart[productInCartIndex].quantity * newCart.cart[productInCartIndex].product.price;
    return setCartState(newCart);
  }

    const decreaseQuantityOfProduct = (product: IDessert) => {
    const productInCartIndex = cartState.cart.findIndex( item => item.product.name === product.name);
    const newCart = structuredClone(cartState);
    if (newCart.cart[productInCartIndex].quantity >= 2) {
      newCart.cart[productInCartIndex].quantity -= 1;
      newCart.cart[productInCartIndex].subTotal = newCart.cart[productInCartIndex].quantity * newCart.cart[productInCartIndex].product.price;
      return setCartState(newCart);
    }

    if (newCart.cart[productInCartIndex].quantity === 1) {
      newCart.cart[productInCartIndex].quantity -= 1;
      newCart.cart[productInCartIndex].subTotal = newCart.cart[productInCartIndex].quantity * newCart.cart[productInCartIndex].product.price;
      return setCartState(prevState => (
        {
          ...prevState,
          cart: [...newCart.cart.filter(item => item.quantity > 0)]
        }
      ))
    }

    setCartState(prevState => (
      {
        ...prevState,
        cart: [...newCart.cart.filter(item => item.quantity > 0)]
      }
    ))
  }

  const data = {
    cartState,
    addToCart,
    removeToCart,
    increaseQuantityOfProduct,
    decreaseQuantityOfProduct
  }

  return (
    <CartContext.Provider value={data}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider
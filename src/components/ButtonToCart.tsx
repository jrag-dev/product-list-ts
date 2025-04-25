import { useCallback } from 'react';
import IconAddToCart from '../assets/images/icon-add-to-cart.svg'
import IconIncrementToCart from '../assets/images/icon-increment-quantity.svg'
import IconDecrementToCart from '../assets/images/icon-decrement-quantity.svg'
import { useCartContext } from '../hooks/useCartContext.ts';
import { IDessert } from '../lib/types.definitions.ts';

interface IProps {
  product: IDessert;
}

const ButtonToCart = ({ product }: IProps) => {
  const { cartState, addToCart, increaseQuantityOfProduct, decreaseQuantityOfProduct } = useCartContext();

  const handleClickSaveToCart = (product: IDessert) => {
    addToCart(product)
  }

  const isProductInCart = useCallback(
    (product: IDessert) => {
      const productIndex = cartState.cart.findIndex( item => item.product.name === product.name);
      return productIndex
    },
    [cartState]
  )
  

  return (
    <>
      {
        isProductInCart(product) >= 0  
          ? (
            <div className="w-[50%] bg-custom-red px-6 py-2 absolute inset-x-1/4 md:inset-x-5 lg:inset-x-1/4  -bottom-5 flex items-center justify-between rounded-full border border-custom-rose-400 text-white text-sm font-600-custom cursor-pointer">
              <button 
                className="border border-white rounded-full w-5 h-5 flex items-center p-1 cursor-pointer"
                onClick={() => decreaseQuantityOfProduct(product)}
              >
                <img className='font-700-custom' src={IconDecrementToCart} alt="Icon Add To Cart" />
              </button>
              <span>{cartState.cart.find(item => item.product.name === product.name)?.quantity}</span>
              <button 
                className="border border-white rounded-full w-5 h-5 flex items-center p-1 cursor-pointer"
                onClick={() => increaseQuantityOfProduct(product)}
              >
                <img src={IconIncrementToCart} alt="Icon Add To Cart" />
              </button>
            </div>
          ): (
          <button 
            className="bg-white w-max px-6 py-2 absolute inset-x-1/4 md:inset-x-5 lg:inset-x-1/4 -bottom-5 flex items-center gap-2 rounded-full border border-custom-rose-400 hover:border-custom-red text-sm font-600-custom cursor-pointer hover:text-custom-red"
            onClick={() => handleClickSaveToCart(product)}
          >
            <img src={IconAddToCart} alt="Icon Add To Cart" />
            <span className="text-custom-rose-900 hover:text-custom-red">Add to Cart</span>
          </button>
          )
      }
    </>
  )
}

export default ButtonToCart

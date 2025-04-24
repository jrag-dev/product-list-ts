import IconAddToCart from '../assets/images/icon-add-to-cart.svg'
import { useCartContext } from '../hooks/useCartContext.ts';
import { IDessert } from '../lib/types.definitions.ts';

interface IProps {
  product: IDessert;
}

const ButtonToCart = ({ product }: IProps) => {
  const { addToCart } = useCartContext();

  const handleClickSaveToCart = (product: IDessert) => {
    addToCart(product)
  }
  return (
    <button 
      className="bg-white w-max px-6 py-3 absolute inset-x-1/4 -bottom-5 flex items-center gap-2 rounded-full border border-custom-rose-400 hover:border-custom-red text-sm font-600-custom cursor-pointer hover:text-custom-red"
      onClick={() => handleClickSaveToCart(product)}
    >
      <img src={IconAddToCart} alt="Icon Add To Cart" />
      <span className="text-custom-rose-900 hover:text-custom-red">Add to Cart</span>
    </button>
  )
}

export default ButtonToCart

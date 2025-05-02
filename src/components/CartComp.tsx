import illustrationEmptyCart from "../assets/images/illustration-empty-cart.svg"
import iconRemoveItem from "../assets/images/icon-remove-item.svg"
import iconCarbonNeutralItem from "../assets/images/icon-carbon-neutral.svg"
import { useCartContext } from "../hooks/useCartContext.ts"
import { formatterUSD } from "../lib/formatterMoney.ts";

interface ICartCompProps {
  handlerOpenModalOrder: () => void;
}

const CartComp = ({ handlerOpenModalOrder }: ICartCompProps) => {
const { cartState, removeToCart } = useCartContext();

  return (
    <section className="w-full px-6 py-10 bg-white rounded-xl grid gap-6">
      <h2 className="text-3xl font-700-custom text-custom-red self-start">Your Cart({cartState.cart.reduce((acc, item) => acc + (item.quantity), 0)})</h2>
      {
        cartState.cart.length > 0
          ? (
            <div className="w-full grid grid-cols-1 gap-5">
              {
                cartState.cart.map( item => {
                  return (
                    <div key={item.product.name} className="relative w-full pb-4 flex items-center justify-between">
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-custom-rose-100"></div>
                      <div className="w-full flex flex-col gap-2">
                        <h3 className="text-custom-rose-900 font-600-custom">{item.product.name}</h3>
                        <div className="w-full flex items-center justify-between">
                          <div className="w-full flex items-center gap-4">
                            <span className="text-custom-red font-600-custom">{item.quantity}x</span>
                            <span className="text-custom-rose-500 font-400-custom">{formatterUSD.format(item.product.price)}</span>
                            <span className="text-custom-rose-500 font-600-custom">{formatterUSD.format(item.subTotal)}</span>
                          </div>
                        </div>
                      </div>
                        <button
                          className="border-2 border-custom-rose-400 rounded-full p-1 w-6 h-6 flex items-center cursor-pointer"
                          onClick={() => removeToCart(item.product)}
                        >
                          <img className="w-6 h-6" src={iconRemoveItem} alt={'delete' + item.product.name} />
                        </button>
                    </div>
                  )
                })
              }
              <div className="w-full py-2">
                <p className="w-full flex items-center justify-between">
                  <span className="text-custom-rose-900">Order total:</span>
                  <span className="text-custom-rose-900 font-700-custom text-2xl">{formatterUSD.format(cartState.total)}</span>
                </p>
              </div>
              <div className="w-full px-4 py-4 bg-custom-rose-50 rounded-2xl flex items-center gap-2">
                <img src={iconCarbonNeutralItem} alt="Icon Carbon neutral" />
                <p className="text-custom-rose-900">
                  This is a <span className="font-700-custom">carbon-neutral</span> delivery
                </p>
              </div>
              <button 
                className="w-full px-4 py-3 bg-custom-red rounded-full text-center font-600-custom text-white cursor-pointer"
                onClick={handlerOpenModalOrder}
              >Confirm Order</button>
            </div>
          ) : (
            <div className="w-full grid place-items-center gap-6">
              <img src={illustrationEmptyCart} alt="Illustration empty cart" />
              <p className="text-custom-rose-400 text-sm font-700-custom">Your added items will appear here</p>
            </div>
          )
      }
    </section>
  )
}

export default CartComp

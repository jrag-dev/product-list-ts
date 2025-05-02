import iconOrderConfirmed from '../assets/images/icon-order-confirmed.svg'
import { useCartContext } from '../hooks/useCartContext.ts'
import { formatterUSD } from '../lib/formatterMoney.ts'

const OrderConfirmed = () => {
  const { cartState } = useCartContext()
  return (
    <div className='w-full grid gap-8 p-4'>
      <img className='w-10' src={iconOrderConfirmed} alt="Icon order Confirmed" />
      <div>
        <h2 className='text-4xl font-700-custom'>Order Confirmed</h2>
        <p className='text-custom-rose-500 font-400-custom'>We hope you enjoy your food!</p>
      </div>
      <div className='bg-custom-rose-100 rounded-lg'>
        {
          cartState.cart.map((item) => (
            <div className="w-full flex items-center justify-between border-b border-gray-200 p-4">
              <div className='flex items-center gap-4'>
                <img className='w-12 h-12 rounded-md object-cover' src={item.product.image.mobile} alt={item.product.name} />
                <div className='flex flex-col gap-2'>
                  <h3 className='text-sm font-600-custom text-custom-rose-900'>{item.product.name}</h3>
                  <div className="w-full flex items-center gap-4 text-sm">
                    <span className="text-custom-red font-600-custom">{item.quantity}x</span>
                    <span className="text-custom-rose-500 font-400-custom">{formatterUSD.format(item.product.price)}</span>
                  </div>
                </div>
              </div>
              <p className='font-600-custom'>{formatterUSD.format(item.subTotal)}</p>
            </div>
          ))
        }
        <div className='w-full flex items-center justify-between py-5 px-4'>
          <p className='font-400-custom'>Order total</p>
          <p className='text-2xl font-700-custom'>{formatterUSD.format(cartState.total)}</p>
        </div>
      </div>
      <button
        className="bg-custom-red text-center text-white font-600-custom w-full py-3 rounded-full"
        onClick={() => console.log('Order sent')}
      >Start New Order</button>
    </div>
  )
}

export default OrderConfirmed

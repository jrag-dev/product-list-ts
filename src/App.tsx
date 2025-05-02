import CartComp from "./components/CartComp.tsx"
import DessertContainer from "./components/DessertContainer.tsx"
import OrderConfirmedContainer from "./components/OrderConfirmedContainer.tsx"
import { useModal } from "./hooks/useModal.ts"

function App() {
  const { isOpen: isOpenOrder, handlerOpenModal: handlerOpenModalOrder, handlerCloseModal: handlerCloseModalOrder } = useModal()

  return (
    <section className="w-full min-h-screen grid grid-cols-1 items-center my-20">
      {
        isOpenOrder && <OrderConfirmedContainer handler={handlerCloseModalOrder} />
      }
      <section className="w-full max-w-[1400px] mx-auto px-6 py-10 min-h-screen grid grid-cols-1 gap-8 items-center md:items-start md:grid-cols-7">
        <main className="md:col-span-4 xl:col-span-5">
          <DessertContainer />
        </main>
        <aside className="w-full md:col-span-3 xl:col-span-2">
          <CartComp handlerOpenModalOrder={handlerOpenModalOrder} />
        </aside>
      </section>
    </section>
  )
}

export default App

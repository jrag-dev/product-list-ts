import CartComp from "./components/CartComp.tsx"
import DessertContainer from "./components/DessertContainer.tsx"

function App() {

  return (
    <section className="relative w-full min-h-screen grid grid-cols-1 items-center my-20">
      <div className="absolute top-0 left-0 right-0 bg-white h-0.5"></div>
      <section className="w-full max-w-[1400px] mx-auto px-6 py-10 min-h-screen grid grid-cols-1 gap-8 items-center md:items-start md:grid-cols-7">
        <main className="md:col-span-4 xl:col-span-5">
          <DessertContainer />
        </main>
        <aside className="w-full md:col-span-3 xl:col-span-2">
          <CartComp/>
        </aside>
      </section>
    </section>
  )
}

export default App

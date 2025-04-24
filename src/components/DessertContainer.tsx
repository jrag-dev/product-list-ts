import { useDesserts } from "../hooks/useDesserts.ts";
import DessertCard from "./DessertCard.tsx";

const DessertContainer = () => {
  const { desserts, isLoading, error } = useDesserts()

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max xl:grid-cols-3">
      <h1 className="text-4xl font-700-custom text-custom-rose-900 h-10 md:col-span-2 xl:col-span-3">Desserts</h1>
      {
        desserts && desserts.map( dessert => {
          return (
            <DessertCard
              key={dessert.name}
              dessert={dessert}
            />
          )
        })
      }
    </div>
  )
}

export default DessertContainer

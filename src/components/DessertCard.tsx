import { useEffect, useState } from "react";
import { formatterUSD } from "../lib/formatterMoney.ts";
import { IDessert } from "../lib/types.definitions.ts"
import ButtonToCart from "./ButtonToCart.tsx";

interface IProps {
  dessert: IDessert;
}

const DessertCard = ({ dessert }: IProps) => {
  const { category, image, name, price } = dessert;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="w-full grid gap-8">
      <div className="relative">
        <img className="rounded-lg" src={`${isMobile ? image.mobile : image.desktop}`} alt={name} />
        <ButtonToCart product={dessert}/>
      </div>
      <div>
        <p className="text-custom-rose-500 text-sm font-400-custom">{category}</p>
        <h3 className="text-custom-rose-900 font-600-custom">{name}</h3>
        <p className="text-custom-red font-600-custom">{formatterUSD.format(price)}</p>
      </div>
    </div>
  )
}

export default DessertCard

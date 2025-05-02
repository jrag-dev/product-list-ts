import React from "react"

interface IProps {
  children: React.ReactNode;
  handler: () => void;
}

const Modal = ({ children, handler }: IProps) => {
  const handleModalContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }
  return (
    <section onClick={handler} className="fixed top-0 left-0 right-0 bottom-0 bg-linear-to-b from-black/70 to-gray-500/10 z-10 h-full grid place-items-center">
      <article onClick={handleModalContainerClick} className="bg-custom-rose-50 p-5 w-full max-w-[600px] rounded-xl">
        {children}
      </article>
    </section>
  )
}

export default Modal

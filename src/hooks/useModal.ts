import { useState } from "react";

interface IUseModal {
  isOpen: boolean;
  handlerOpenModal: () => void;
  handlerCloseModal: () => void;
}

export function useModal(): IUseModal {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handlerOpenModal = () => setIsOpen(true);

  const handlerCloseModal = () => setIsOpen(false);

  return {
    isOpen,
    handlerOpenModal,
    handlerCloseModal
  }
}
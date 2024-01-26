import { createContext, useContext, useState } from "react";
import type { ModalContextProviderProps } from "../models/modal";

export const ModalContext = createContext<any | null>(null);

export function useModalContext() {
  return useContext(ModalContext);
}

export default function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const ModalContextValue = {
    openModal,
    setOpenModal,
  };
  return (
    <ModalContext.Provider value={ModalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

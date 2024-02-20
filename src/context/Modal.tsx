import { createContext, useContext, useState } from "react";
import type { ModalContextProviderProps } from "../models/layout/modal";

export const ModalContext = createContext<any | null>(null);

export function useModalContext() {
  return useContext(ModalContext);
}

export default function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const [openSignOutModal, setOpenSignOutModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const ModalContextValue = {
    openSignOutModal,
    setOpenSignOutModal,
    openDeleteModal, setOpenDeleteModal
  };
  return (
    <ModalContext.Provider value={ModalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

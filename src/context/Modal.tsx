/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
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
  const [openDeleteProfileImageModal, setOpenDeleteProfileImageModal] =
    useState<boolean>(false);
  const [openEditProfileModal, setOpenEditProfileModal] = useState<boolean>(false);

  const ModalContextValue = {
    openSignOutModal,
    setOpenSignOutModal,
    openDeleteModal,
    setOpenDeleteModal,
    openDeleteProfileImageModal,
    setOpenDeleteProfileImageModal,
    openEditProfileModal,
    setOpenEditProfileModal,
  };
  return (
    <ModalContext.Provider value={ModalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

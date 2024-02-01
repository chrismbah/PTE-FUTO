import { FC } from "react";
import { AppProviderProps } from "../models/provider";
import GPAContextProvider from "../context/GPAContext";
import ModalContextProvider from "../context/Modal";
import CourseOutlineContextProvider from "../context/CourseOutline";
const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <ModalContextProvider>
      <GPAContextProvider>
        <CourseOutlineContextProvider>{children}</CourseOutlineContextProvider>
      </GPAContextProvider>
    </ModalContextProvider>
  );
};

export default AppProvider;

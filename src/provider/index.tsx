import { FC } from "react";
import { AppProviderProps } from "../models/provider/provider";
import GPAContextProvider from "../context/GPA";
import ModalContextProvider from "../context/Modal";
import CourseOutlineContextProvider from "../context/CourseOutline";
import LearningResourcesContextProvider from "../context/LearningResources";

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <ModalContextProvider>
      <LearningResourcesContextProvider>
        <GPAContextProvider>
          <CourseOutlineContextProvider>
            {children}
          </CourseOutlineContextProvider>
        </GPAContextProvider>
      </LearningResourcesContextProvider>
    </ModalContextProvider>
  );
};

export default AppProvider;

import { createContext, useContext, useState } from "react";
import type { CourseOutlineContextProviderProps } from "../models/courseOutline";

export const CourseOutlineContext = createContext<any | null>(null);

export function useCourseOutlineContext() {
  return useContext(CourseOutlineContext);
}

export default function CourseOutlineContextProvider({
  children,
}: CourseOutlineContextProviderProps) {

  const [semester, setSemester] = useState<string>("First")

  const CourseOutlineContextValue = {semester, setSemester};
  return (
    <CourseOutlineContext.Provider value={CourseOutlineContextValue}>
      {children}
    </CourseOutlineContext.Provider>
  );
}

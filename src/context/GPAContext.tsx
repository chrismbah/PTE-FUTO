import { createContext, useContext, useState } from "react";
import type { GPAContextProviderProps, CourseGrades } from "../models/gpa";

export const GPAContext = createContext<any | null>(null);

export function useGPAContext() {
  return useContext(GPAContext);
}

export default function GPAContextProvider({
  children,
}: GPAContextProviderProps) {
  const [level, setLevel] = useState<string>("");
  const [semester, setSemester] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [courseGrades, setCourseGrades] = useState<CourseGrades[] | null>([]);
  const [totalUnits, setTotalUnits] = useState<number>(0);
  const [totalGradePoints, setTotalGradePoints] = useState<number>(0);
  const [studentGPA, setStudentGPA] = useState<number>(0);
  const [editing, setEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<string>("");

  const GPAContextValue = {
    level,
    setLevel,
    semester,
    setSemester,
    unit,
    setUnit,
    course,
    setCourse,
    grade,
    setGrade,
    courseGrades,
    setCourseGrades,
    totalUnits,
    setTotalUnits,
    totalGradePoints,
    setTotalGradePoints,
    studentGPA,
    setStudentGPA,
    editing,
    setEditing,
    editID,
    setEditID,
  };
  return (
    <GPAContext.Provider value={GPAContextValue}>
      {children}
    </GPAContext.Provider>
  );
}

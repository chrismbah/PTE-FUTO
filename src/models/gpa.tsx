import { ReactNode } from "react";

export interface GPAContextProviderProps {
  children: ReactNode;
}

export interface GPAContextValueProps {
  level: string;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
  semester: string;
  setSemester: React.Dispatch<React.SetStateAction<string>>;
}

export type LevelCourses = {
  [level: string]: {
    [semester: string]: {
      courses: { course: string; unit: number }[];
    };
  };
};

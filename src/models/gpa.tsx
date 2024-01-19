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

export interface CourseGrades {
  course: string;
  unit: number;
  grade: string;
}
export interface CourseSelectedProps {
  courseInfo: CourseGrades;
}

// export type GradeValues = {
//   string: number;
// };
export type GradeValues = Record<string, number>;

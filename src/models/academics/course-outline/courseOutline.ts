import { ReactNode } from "react";
export interface CourseOutlines {
  icon: string;
  level: string;
  title: string;
}

export interface CourseOutlineContextProviderProps {
  children: ReactNode;
}

export interface CourseInfo {
  courseCode: string;
  courseTitle: string;
  creditUnit: number;
  id: string;
  option: string;
}
  
export interface CourseOutline {
    [semester: string]: {
      courseInfo: CourseInfo[];
    };
  }
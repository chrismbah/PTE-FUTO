import { ReactNode } from "react";
export interface CourseOutlines {
  icon: string;
  level: string;
  route: string;
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
}
  
export interface CourseOutline {
    [semester: string]: {
      courseInfo: CourseInfo[];
    };
  }
import { ReactNode } from "react";
export interface LearningResourcesContextProviderProps {
  children: ReactNode;
}
export interface LevelCard {
  level: string;
  title: string;
  desc: string;
}
export interface CourseCard {
  id: string;
  courseCode: string;
  courseTitle: string;
}

export interface Course {
  courseCode: string;
  courseTitle: string;
  id: string;
}
  
export interface Courses {
  [level: string]:{
    [semester: string]: {
      courseInfo: Course[];
    };
  }
  }
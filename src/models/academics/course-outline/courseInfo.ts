export interface CourseContent {
  heading: string | null;
  content: string | null;
}

export interface CourseInfo {
  [semester: string]:{
    [id: string ]: {
      courseCode: string;
      courseTitle: string;
      creditUnit: number;
      creditUnits: string;
      preRequisite: string | null;
      info: CourseContent[];
    };
  }
}

export interface ICourseInfo {
  courseCode: string;
  courseTitle: string;
  creditUnit: number;
  creditUnits: string;
  preRequisite: string | null;
  info: CourseContent[];
  
}

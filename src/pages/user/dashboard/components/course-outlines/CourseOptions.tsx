import { FC } from "react";
import { levelCourses } from "../../../../../data/academics/cgpa/courses";

interface CourseOptionsProp {
  level: string ;
  semester: string ;
}
export const CourseOptions: FC<CourseOptionsProp> = ({ level, semester }) => {
  switch (`${level}-${semester}`) {
    case "100-1st":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "100-2nd":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "200-1st":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "200-2nd":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "300-1st":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "300-2nd":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "400-1st":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "400-2nd":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "500-1st":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    case "500-2nd":
      return levelCourses[level][semester].courses.map(({ course }, index) => (
        <option value={course} key={index}>
          {course}
        </option>
      ));
    default:
      return <option disabled>Choose Level and Semester</option>; // Handling unmatched cases
  }
};

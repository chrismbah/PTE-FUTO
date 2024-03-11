/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { courses } from "../../../../../data/academics/course-outlines/courses";
interface CourseOptionsProp {
  level: string;
  semester: string;
}
export const CourseOptions: FC<CourseOptionsProp> = ({ level, semester }) => {
  switch (`${level}-${semester}`) {
    case "100-First":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "100-Second":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "200-First":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "200-Second":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "300-First":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "300-Second":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "400-First":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "400-Second":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "500-First":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    case "500-Second":
      return courses[level][semester].courses.map(
        ({ course, courseID }, index) => (
          <option value={courseID} key={index}>
            {course}
          </option>
        )
      );
    default:
      console.log(level, semester);
      return <option disabled>Choose Level and Semester</option>; // Handling unmatched cases
  }
};

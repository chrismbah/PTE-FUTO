import { useGPAContext } from "../../../../../context/GPAContext";
import {
  level100,
  level200,
  level300,
  level400,
  level500,
} from "../../../../../utils/academics/cgpa/courses";
export default function CourseOptions() {
  const { level, semester } = useGPAContext();
  switch (`${level}-${semester}`) {
    case "100-1st":
      return level100[0].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "100-2nd":
      return level100[1].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "200-1st":
      return level200[0].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "200-2nd":
      return level200[1].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "300-1st":
      return level300[0].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "300-2nd":
      return level300[1].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "400-1st":
      return level400[0].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "400-2nd":
      return level400[1].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "500-1st":
      return level500[0].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    case "500-2nd":
      return level500[1].courses.map(({ course }) => (
        <option value={course}>{course}</option>
      ));
    default:
      return <option value="">No courses found</option>; // Handling unmatched cases
  }

  // if(level === "100" && semester=="1st"){
  //   level100[0].courses.map(({course})=>{
  //     return <option value={course}>{course}</option>
  //   })
  // }
  // else if(level === "100" && semester=="2nd"){
  //   level100[0].courses.map(({course})=>{
  //     return <option value={course}>{course}</option>
  //   })
  // }
  // else if(level === "200" && semester=="1nd"){
  //   level200[0].courses.map(({course})=>{
  //     return <option value={course}>{course}</option>
  //   })
  // }
  return <></>;
}

import { useGPAContext } from "../context/GPAContext";
import { levelCourses } from "../utils/academics/cgpa/courses";
import { useToast } from "./useToast";

export const useComputeGPA = () => {
  const {
    setLevel,
    level,
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
  } = useGPAContext();

  const handleCourseChange = (e: any) => {
    const selectedCourse = e.target.value;
    setCourse(selectedCourse);
    const selectedUnit =
      levelCourses[level][semester].courses.find(
        (courseInfo) => courseInfo.course === selectedCourse
      )?.unit || "";
    setUnit(selectedUnit);
    e.target.value = "";
  };
  const handleUnitChange = (e: any) => {
    setUnit(e.target.value);
    e.target.value = "";
  };
  const handleGradeChange = (e: any) => {
    setGrade(e.target.value);
    e.target.value = "";
  };

  const addCourseGrade = () => {
    if (course && unit && grade) {
      setCourseGrades([...courseGrades, { course, unit, grade }]);
      console.log(courseGrades);
      setCourse("");
      setUnit("");
      setGrade("");
      useToast("success", "Course Added Successfully");
    } else {
      switch (true) {
        case course === "":
          useToast("error", "Please select a course from the list.");
          break;

        case unit === "":
          useToast("error", "Please specify the course unit.");
          break;
        case grade === "":
          useToast(
            "error",
            "Please enter the grade you received for this course."
          );
          break;
      }
    }
  };

  return {
    handleCourseChange,
    handleUnitChange,
    handleGradeChange,
    addCourseGrade,
    level,
    setLevel,
    setSemester,
    courseGrades,
    course,
    setCourse,
    grade,
    unit,
    setUnit,
  };
};

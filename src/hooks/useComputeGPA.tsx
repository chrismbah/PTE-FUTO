import { useGPAContext } from "../context/GPAContext";
import { levelCourses } from "../utils/academics/cgpa/courses";
import { useToast } from "./useToast";
import { CourseGrades, GradeValues } from "../models/gpa";
import {v4 as uuid} from "uuid"

export const useComputeGPA = () => {
  const {
    level,
    setLevel,
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
    totalUnits,
    setTotalUnits,
    totalGradePoints,
    setTotalGradePoints,
    studentGPA,
    setStudentGPA,
  } = useGPAContext();

  const gradeValues: GradeValues = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
  };

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

  const computeGPA = () => {
    const totalUnits = courseGrades.reduce(
      (acc: number, courseGrade: CourseGrades) => {
        return acc + Number(courseGrade.unit);
      },
      0
    );

    const totalGradePoints = courseGrades.reduce(
      (acc: number, courseGrade: CourseGrades) => {
        return acc + courseGrade.unit * gradeValues[courseGrade.grade];
      },
      0
    );

    const GPA = (totalGradePoints / totalUnits).toFixed(2);

    setTotalUnits(totalUnits);
    setTotalGradePoints(totalGradePoints);
    setStudentGPA(GPA);
  };

  const addCourseGrade = () => {
    if (course && unit && grade) {
      setCourseGrades([...courseGrades, { course, unit, grade }]);
      console.log(courseGrades);
      useToast(
        "success",
        `${course} with credit unit ${unit} and grade "${grade}" Added Successfully`
      );
      setCourse("");
      setUnit("");
      setGrade("");
      computeGPA();
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
    computeGPA,
    level,
    setLevel,
    setSemester,
    courseGrades,
    course,
    setCourse,
    grade,
    unit,
    setUnit,
    totalUnits,
    totalGradePoints,
    studentGPA,
  };
};

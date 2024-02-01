import { useGPAContext } from "../context/GPAContext";
import { levelCourses } from "../utils/academics/cgpa/courses";
import { useToast } from "./useToast";
import { CourseGrades, GradeValues } from "../models/academics/gpa";
import { v4 as uuid } from "uuid";

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
    editing,
    setEditing,
    editID,
    setEditID,
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
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
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
    if (course && unit > 0 && grade) {
      if (editing) {
        const updatedCourseGrades: CourseGrades[] = courseGrades.map(
          (courseGrade: CourseGrades) => {
            return courseGrade.id === editID
              ? { ...courseGrade, course, grade, unit }
              : courseGrade;
          }
        );
        setCourseGrades(updatedCourseGrades);
        setEditing(false);
        setCourse("");
        setGrade("");
        setUnit("");
        useToast("success", "Course Edited");
      } else {
        const newCourseGrades = { id: uuid(), course, unit, grade };
        setCourseGrades([...courseGrades, newCourseGrades]);
        useToast(
          "success",
          `${course} with credit unit ${unit} and grade "${grade}" Added Successfully`
        );
        setCourse("");
        setUnit("");
        setGrade("");
      }
    } else {
      switch (true) {
        case course === "":
          useToast("error", "Please select a course from the list.");
          break;

        case unit === "":
          useToast("error", "Please specify the course unit.");
          break;
        case unit < 0:
          useToast("error", "Unit must be greater than 0.");
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

  const deleteCourseGrade = (id: string) => {
    const newCourseGrades = courseGrades.filter((courseGrade: CourseGrades) => {
      return courseGrade.id !== id;
    });
    setCourseGrades(newCourseGrades);
    useToast("success", "Course Deleted");
    setUnit("");
    setGrade("");
    setCourse("");
    setEditing(false);
  };

  const editCourseGrade = (id: string) => {
    const editingCourseGrade: CourseGrades = courseGrades.find(
      (courseGrade: CourseGrades) => {
        return courseGrade.id === id;
      }
    );
    const { course, grade, unit } = editingCourseGrade;
    setEditID(id);
    setCourse(course);
    setGrade(grade);
    setUnit(unit);
    setEditing(true);
  };

  const clearCourseGrades = () => {
    if (courseGrades.length <= 0) {
      useToast("error", "No Courses To Clear");
    } else if (courseGrades.length === 1) {
      setCourseGrades([]);
      useToast("success", "Course Cleared.");
    } else {
      setCourseGrades([]);
      useToast("success", "Courses Cleared.");
    }
  };

  return {
    handleCourseChange,
    handleUnitChange,
    handleGradeChange,
    addCourseGrade,
    deleteCourseGrade,
    editCourseGrade,
    clearCourseGrades,
    computeGPA,
    level,
    setLevel,
    setSemester,
    courseGrades,
    course,
    setCourse,
    grade,
    setGrade,
    unit,
    setUnit,
    totalUnits,
    totalGradePoints,
    studentGPA,
    editID,
    editing,
  };
};

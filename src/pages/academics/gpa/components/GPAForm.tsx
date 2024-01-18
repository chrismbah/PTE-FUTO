import { useGPAContext } from "../../../../context/GPAContext";
import CourseOptions from "./course-options/CourseOptions";
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../../../themes/customButtton";
import { levelCourses } from "../../../../utils/academics/cgpa/courses";
export default function GPAForm() {
  const values = useGPAContext();
  const {
    setLevel,
    level,
    semester,
    setSemester,
    unit,
    setUnit,
    course,
    setCourse,
  } = values;
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

  return (
    <div>
      <div className="grid xxss:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="level"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Level
          </label>
          <select
            id="level"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-1.5 xss:p-2.5"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option defaultValue="">Select Level</option>
            <option value="100">100 Level</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
            <option value="500">500 Level</option>
          </select>
        </div>
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose Semester
          </label>
          <select
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-1.5 xss:p-2.5"
            onChange={(e) => setSemester(e.target.value)}
          >
            <option defaultValue="">Select Semester</option>
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
          </select>
        </div>
      </div>

      <div className="grid xxss:grid-cols-4 gap-2 xss:gap-4">
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Course
          </label>
          <select
            id=""
            className="bg-gray-50 border border-gray-300 border-b-0 text-gray-900 text-sm rounded-t-lg focus:ring-gray-50 focus:border-gray-300 block w-full p-1.5 xss:p-2.5"
            onChange={handleCourseChange}
          >
            <option value="" disabled selected>
              Select Course
            </option>
            <CourseOptions />
          </select>
          <input
            className="placeholder:text-xss xss:placeholder:text-sm bg-gray-50 border border-gray-300 border-t-0 text-gray-900 text-sm rounded-b-lg focus:ring-gray-50 focus:border-gray-300 block w-full p-1.5 xss:p-2.5"
            type="text"
            placeholder="eg. PTE 304"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>{" "}
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Unit
          </label>
          <select
            id=""
            className="bg-gray-50 border border-gray-300 border-b-0 text-gray-900 text-sm rounded-t-lg focus:ring-gray-50 focus:border-gray-300 block w-full p-1.5 xss:p-2.5"
            onChange={handleUnitChange}
          >
            <option value="" disabled selected>
              Select Unit
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <input
            className="placeholder:text-xss xss:placeholder:text-sm bg-gray-50 border border-gray-300 border-t-0 text-gray-900 text-sm rounded-b-lg focus:ring-gray-50 focus:border-gray-300 block w-full p-1.5 xss:p-2.5"
            type="text"
            placeholder="eg. 4"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Grade
          </label>
          <select
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-50 focus:border-gray-300 block w-full p-2.5"
          >
            <option defaultValue="">Select Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="xxss:pt-7">
          <Button
            theme={customButtonTheme}
            color="primary"
            size="sm"
            className="p-1.5 w-full"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

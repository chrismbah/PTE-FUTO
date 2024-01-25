import { useCourseOutlineContext } from "../../../../../context/CourseOutline";
import { courseOutline400 } from "../../../../../utils/academics/course-outlines/levels/courseOutline400";
import { CourseOutline400Card } from "./CourseOutline400Card";
export default function CourseOutline400() {
  const { semester400L, setSemester400L } = useCourseOutlineContext();
  return (
    <div className="box-width">
      <div className="course-outline-section">
        <div className="w-full flex items-center justify-center mb-6 flex-col">
          <h2 className="text-green1 text-center">Courses Offered for 400 Level</h2>
          <p className="text-center text-xs xsm:text-base font-[500]">
            The details for 400 Level{" "}
            <span className="text-green1 text-capitalize">{semester400L}</span>{" "}
            Semester courses are as follows
          </p>
          <div className="flex items-center justify-center my-2">
          <button
              className={`p-2 text-sm rounded-l-lg ${
                semester400L === "First" ? "bg-green1 text-white" : "bg-gray-50"
              } border-r-2 border-green1`}
              onClick={() => setSemester400L("First")}
            >
              {" "}
              1st Semester{" "}
            </button>{" "}
            <button
              className={`p-2 text-sm rounded-r-lg ${
                semester400L === "Second" ? "bg-green1 text-white" : "bg-gray-50"
              }`}
              onClick={() => setSemester400L("Second")}
            >
              {" "}
              Second Semester{" "}
            </button>
          </div>
        </div>
        <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
          {courseOutline400[semester400L].courseInfo.map((info, index) => (
            <CourseOutline400Card key={index} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
}

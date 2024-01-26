import { useCourseOutlineContext } from "../../../../../context/CourseOutline";
import { courseOutline200 } from "../../../../../utils/academics/course-outlines/levels/courseOutline200";
import { CourseOutline200Card } from "./CourseOutline200Card";
export default function CourseOutline200() {
  const { semester200L, setSemester200L } = useCourseOutlineContext();
  return (
    <div className="box-width">
      <div className="course-outline-section">
        <div className="w-full flex items-center justify-center mb-6 flex-col">
          <h2 className="text-green1 text-center">
            Courses Offered for 200 Level
          </h2>
          <p className="text-center text-xs xsm:text-base font-[500]">
            The details for 200 Level{" "}
            <span className="text-green1 text-capitalize">
              {semester200L === "First" ? "Harmattan" : "Rain"}
            </span>{" "}
            Semester courses are as follows
          </p>
          <div className="flex items-center justify-center my-2">
            <button
              className={`p-2 text-sm rounded-l-lg ${
                semester200L === "First" ? "bg-green1 text-white" : "bg-gray-50"
              } border-r-2 border-green1`}
              onClick={() => setSemester200L("First")}
            >
              {" "}
              1st Semester{" "}
            </button>{" "}
            <button
              className={`p-2 text-sm rounded-r-lg ${
                semester200L === "Second"
                  ? "bg-green1 text-white"
                  : "bg-gray-50"
              }`}
              onClick={() => setSemester200L("Second")}
            >
              {" "}
              Second Semester{" "}
            </button>
          </div>
        </div>
        <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {courseOutline200[semester200L].courseInfo.map((info, index) => (
            <CourseOutline200Card key={index} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { useCourseOutlineContext } from "../../../../../context/CourseOutline";
import { courseOutline500 } from "../../../../../utils/academics/course-outlines/levels/courseOutline500";
import { CourseOutline500Card } from "./CourseOutline500Card";
export default function CourseOutline500() {
  const { semester500L, setSemester500L } = useCourseOutlineContext();
  return (
    <div className="box-width">
      <div className="course-outline-section">
        <div className="w-full flex items-center justify-center mb-6 flex-col">
          <h2 className="text-green1 text-center">
            Courses Offered for 500 Level
          </h2>
          <p className="text-center text-xs xsm:text-base font-[500]">
            The details for 500 Level{" "}
            <span className="text-green1 text-capitalize">
              {semester500L === "First" ? "Harmattan" : "Rain"}
            </span>{" "}
            Semester courses are as follows
          </p>
          <div className="flex items-center justify-center my-2">
            <button
              className={`p-2 text-sm rounded-l-lg ${
                semester500L === "First" ? "bg-green1 text-white" : "bg-gray-50"
              } border-r-2 border-green1`}
              onClick={() => setSemester500L("First")}
            >
              {" "}
              1st Semester{" "}
            </button>{" "}
            <button
              className={`p-2 text-sm rounded-r-lg ${
                semester500L === "Second"
                  ? "bg-green1 text-white"
                  : "bg-gray-50"
              }`}
              onClick={() => setSemester500L("Second")}
            >
              {" "}
              Second Semester{" "}
            </button>
          </div>
        </div>
        <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {courseOutline500[semester500L].courseInfo.map((info, index) => (
            <CourseOutline500Card key={index} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
}

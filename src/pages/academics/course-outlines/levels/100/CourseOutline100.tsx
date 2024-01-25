import { courseOutline100 } from "../../../../../utils/academics/course-outlines/levels/courseOutline100";
import { useCourseOutlineContext } from "../../../../../context/CourseOutline";
import { CourseOutline100Card } from "./CourseOutline100Card";

export default function CourseOutline100() {
  const { semester100L, setSemester100L } = useCourseOutlineContext();
  return (
    <div className="box-width">
      <div className="course-outline-section">
        <div className="w-full flex items-center justify-center mb-6 flex-col">
          <h2 className="text-green1">Courses Offered for 100 Level</h2>
          <p className="text-center text-xs xsm:text-base font-[500]">
            The details for 100 Level {" "} 
            <span className="text-green1 text-capitalize">{semester100L}</span>{" "}
            Semester courses are as follows
          </p>
          <div className="flex items-center justify-center mt-2">
            <button
              className={`p-3  rounded-l-lg ${
                semester100L === "First" ? "bg-green1 text-white" : "bg-gray-50"
              } border-r-2 border-green1`}
              onClick={() => setSemester100L("First")}
            >
              {" "}
              1st Semester{" "}
            </button>{" "}
            <button
              className={`p-3 rounded-r-lg ${
                semester100L === "Second" ? "bg-green1 text-white" : "bg-gray-50"
              }`}
              onClick={() => setSemester100L("Second")}
            >
              {" "}
              Second Semester{" "}
            </button>
          </div>
        </div>
        <div 
        className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-4 max-w-[1200px] mx-auto"
        >
          {courseOutline100[semester100L].courseInfo.map((info, index) => (
            <CourseOutline100Card key={index} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
}

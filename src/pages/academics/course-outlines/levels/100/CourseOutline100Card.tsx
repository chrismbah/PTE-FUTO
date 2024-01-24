import { FC } from "react";
import { CourseInfo } from "../../../../../models/courseOutline";
import { Link } from "react-router-dom";
// import { Button } from "flowbite-react";
// import { customButtonTheme } from "../../../../../themes/customButtton";

export const CourseOutline100Card: FC<CourseInfo> = ({
  courseCode,
  courseTitle,
  creditUnit,
  id,
}) => {
  return (
    <div className="relative max-w-auto xsm:max-w-[400px] h-[220px] p-6 border border-gray-200 rounded-lg shadow-lg">
      <div className="relative h-full">
        <h4 className="font-semibold text-xl">
          {courseTitle}
          {/* <span className="capitalize font-normal"></span>{" "} */}
        </h4>
       
        <h4 className="font-semibold mb-4">
          CREDIT UNIT:{" "}
          <span className="capitalize font-normal">{creditUnit}</span>{" "}
        </h4>

        <button
          className="transition-colors duration-150 ease-in-out absolute bottom-0 w-full rounded-lg 
         bg-green1 hover:bg-green1 text-white font-bold p-3"
        >
          <Link to={`/course-outlines/100-level/${id}`}>
            View Course Outline
          </Link>
        </button>
      </div>
          <span className="absolute text-sm rounded-tr-lg rounded-bl-lg top-0 right-0 font-semibold px-2 py-1 bg-green1/10">{courseCode}</span>{" "}
    </div>
    
  );
};

import { FC } from "react";
import { CourseInfo } from "../../../../../models/courseOutline";
// import { Button } from "flowbite-react";
// import { customButtonTheme } from "../../../../../themes/customButtton";

export const CourseOutline100Card: FC<CourseInfo> = ({
  courseCode,
  courseTitle,
  creditUnit,
}) => {
  return (
    <div className=" max-w-auto xsm:max-w-[400px] h-[200px] p-4 border border-gray-200 rounded-lg shadow-lg">
      <div className="relative h-full">
        <h4 className="font-semibold text-xl">
          {courseTitle}
          {/* <span className="capitalize font-normal"></span>{" "} */}
        </h4>
        <h4 className="font-semibold">
          COURSE CODE:{" "}
          <span className="capitalize font-normal">{courseCode}</span>{" "}
        </h4>
        <h4 className="font-semibold mb-4">
          CREDIT UNIT:{" "}
          <span className="capitalize font-normal">{creditUnit}</span>{" "}
        </h4>

        <button className="absolute inset-x-0 bottom-0 w-full rounded-lg text-green1  bg-green1/10 hover:bg-green1 hover:text-white font-semibold border-t-2 p-3">
          View Course Outline
        </button>
      </div>
    </div>
  );
};

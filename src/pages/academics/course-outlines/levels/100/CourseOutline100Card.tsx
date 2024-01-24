import { FC } from "react";
import { CourseInfo } from "../../../../../models/courseOutline";
export const CourseOutline100Card: FC<CourseInfo> = ({
  courseCode,
  courseTitle,
  creditUnit,
}) => {
  return (
    <div className="max-w-auto xsm:max-w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h4 className="font-semibold text-md">
        COURSE TITLE:{" "}
        <span className="capitalize font-normal">{courseTitle}</span>{" "}
      </h4>
      <h4 className="font-semibold text-md">
        COURSE CODE:{" "}
        <span className="capitalize font-normal">{courseCode}</span>{" "}
      </h4>
      <h4 className="font-semibold text-md">
        CREDIT UNIT:{" "}
        <span className="capitalize font-normal">{creditUnit}</span>{" "}
      </h4>

      <button>
        View Course Outline
      </button>
    </div>
  );
};

import { FC } from "react";
import { CourseInfo } from "../../../models/academics/courseOutline";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../../themes/customButtton";

export const CourseOutlineCard: FC<CourseInfo> = ({
  courseCode,
  courseTitle,
  id,
  option,
}) => {
  const { level } = useParams();
  return (
    <div 
    className="bg-white shadow-md hover:shadow-md transition duration-200 ease-in py-6 px-4 h-[230px] sm:max-w-full mmd:max-w-[360px] relative shadow-1"
    >
      <div className="">
        <h4 className="font-semibold text-md ss:text-lg">{courseTitle}</h4>
        <div className="mb-6">
          <h4>
            Course Code:{" "}
            <span className="capitalize font-semibold">{courseCode}</span>{" "}
          </h4>
          {option === "ELECTIVE" && (
            <span className="py-1 px-2 bg-gray-100 text-black rounded-md text-xss font-bold">
              {option}
            </span>
          )}
        </div>

        <Button
          theme={customButtonTheme}
          color={"primary"}
          className="absolute bottom-6 left-4"
        >
          <Link to={`/course-outlines/${level}/${id}`}>Course Outline</Link>
        </Button>
      </div>
    </div>
  );
};

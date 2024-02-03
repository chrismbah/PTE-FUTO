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
    <Link to={`/course-outlines/${level}/${id}`}>
      <div
        className="bg-white hover:shadow-lg transition duration-200 ease-in py-6 
          px-4 h-[230px] sm:max-w-full mmd:max-w-[360px] relative shadow-2 border-2 border-gray-200"
      >
        <div className="">
          <h4 className="font-semibold text-md ss:text-lg">{courseTitle}</h4>
          <div className="mb-6">
            <h4>
              Course Code:{" "}
              <span className="capitalize font-semibold">{courseCode}</span>{" "}
            </h4>
            <span className="py-1 px-2 bg-gray-500 text-green1 text-xss font-[900] shadow-3">
              {option}
            </span>
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
    </Link>
  );
};

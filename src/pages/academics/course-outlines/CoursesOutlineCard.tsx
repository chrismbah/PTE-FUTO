import { FC } from "react";
import { CourseInfo } from "../../../models/academics/course-outline/courseOutline";
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
        className="bg-white hover:shadow-md transition duration-200 ease-in py-6 
          px-4 h-[230px] sm:max-w-full mmd:max-w-[360px] relative shadow-4 rounded-lg"
      >
        <div className="">
          <h4 className="font-semibold text-md ss:text-lg">{courseTitle}</h4>
          <div className="mb-6">
            <h4 className="font-[500]">
              Course Code:{" "}
              <span className="capitalize font-semibold">{courseCode}</span>{" "}
            </h4>
            <span className=" text-green1 text-xss font-[900] ">{option}</span>
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

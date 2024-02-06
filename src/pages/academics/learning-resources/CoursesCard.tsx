import { FC } from "react";
import { CourseCard } from "../../../models/academics/learning-resources";
import files from "../../../assets/icons/learning-resources/files2.png";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CoursesCard: FC<CourseCard> = ({
  id,
  courseCode,
  courseTitle,
}) => {
  const { level } = useParams();
  return (
    <Link to={`/learning-resources/${level}/${id}/${courseTitle}`}>
          <div
      className="max-w-[300px] ss:max-w-[900px] py-2 flex items-center justify-center flex-col rounded-lg
       hover:bg-gray-100 transition duration-300 cursor-pointer"
    >
      { files ? <img src={files} alt={courseCode} className=" w-24 ss:w-28 sm:w-32" /> : <Skeleton /> }
      <p className="text-center font-[500] text-base sm:text-md">
        {courseCode}
        {/* <div className="bar-style" /> */}
      </p>
    </div>
    </Link>

  );
};

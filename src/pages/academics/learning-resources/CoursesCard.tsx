import { FC } from "react";
import { CourseCard } from "../../../models/academics/learning-resources";
import { Link } from "react-router-dom";
import file from "../../../assets/icons/learning-resources/files2.png";
import { useParams } from "react-router-dom";

export const CoursesCard: FC<CourseCard> = ({ courseCode, id }) => {
  const { level } = useParams();
  return (
    <Link to={`/learning-resources/${level}/${id}`}>
      <div className="flex items-center justify-center flex-col rounded-lg hover:bg-gray-100 hover:scale-110 transition duration-300">
        <img src={file} alt={courseCode} className="w-28 sm:w-32" />
        <p className="text-center font-[500] text-base sm:text-md">
          {courseCode}
        </p>
      </div>
    </Link>
  );
};

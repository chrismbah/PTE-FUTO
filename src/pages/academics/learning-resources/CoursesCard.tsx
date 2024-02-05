import { FC } from "react";
import { CourseCard } from "../../../models/academics/learning-resources";
import { Link } from "react-router-dom";
import folder from "../../../assets/icons/learning-resources/folder2.png";
import { useParams } from "react-router-dom";

export const CoursesCard: FC<CourseCard> = ({ courseCode, id }) => {
  const { level } = useParams();
  return (
    <Link to={`/learning-resources/${level}/${id}`}>
      <div className="flex items-center justify-center flex-col hover:scale-110 transition-transform duration-300">
        <img src={folder} alt={courseCode} />
        <p className="text-center font-semibold text-md">{courseCode}</p>
      </div>
    </Link>
  );
};

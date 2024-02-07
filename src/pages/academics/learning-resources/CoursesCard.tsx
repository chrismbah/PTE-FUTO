import { FC } from "react";
import { CourseCard } from "../../../models/academics/learning-resources";
import file from "../../../assets/svg/icons/file.svg";
import { Link, useParams } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import Lottie from "lottie-react";
// import fileAnimation from "../../../utils/animation/file.json";
export const CoursesCard: FC<CourseCard> = ({
  id,
  courseCode,
  courseTitle,
}) => {
  const { level } = useParams();
  return (
    <Link to={`/learning-resources/${level}/${id}/${courseTitle}`}>
      <div
        className="w-full py-2 flex items-center justify-center flex-col rounded-lg
        hover:bg-gray-100 border-2 border-transparent hover:border-green1"
      >
        <div className="w-[35%] xxss:w-[50%] sm:w-[30%]">
          {/* <Lottie loop={false} animationData={fileAnimation} /> */}

          <img src={file} alt="file" className="w-full" />
        </div>
        <p className="text-center font-[500] text-base sm:text-base">
          {courseCode}
        </p>
      </div>
    </Link> 
  );
};

import { FC } from "react";
import { CourseCard } from "../../../models/academics/learning-resources";
import file from "../../../assets/svg/icons/file.svg";
import {  useParams } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import Lottie from "lottie-react";
// import fileAnimation from "../../../utils/animation/file.json";
import { useLearningResourcesContext } from "../../../context/LearningResources";
import { useNavigate } from "react-router-dom";

export const CoursesCard: FC<CourseCard> = ({
  id,
  courseCode,
  courseTitle,
  tip,
}) => {
  const { level } = useParams();
  const { setStudyTip } = useLearningResourcesContext();
  const navigate = useNavigate();

  const goToCourse = () => {
    setStudyTip(tip);
    navigate(`/learning-resources/${level}/${id}/${courseTitle}`);
  };

  return (
      <div
        onClick={goToCourse}
        className="w-full py-2 flex items-center justify-center flex-col rounded-lg
        hover:bg-gray-100 border-2 border-transparent hover:border-green1 cursor-pointer"
      >
        <div className="w-[45px] sm:w-[60px]">
          {file ? <img src={file} alt="file" className="w-full" /> : <div className="bg-gray-200 w-full"></div> }
        </div>
        <p className="text-center font-[500] text-base sm:text-base">
          {courseCode}
        </p>
      </div>
  );
};

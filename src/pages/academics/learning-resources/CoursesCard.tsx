import { FC } from "react";
import { CourseCard } from "../../../models/academics/learning-resources";
import file from "../../../assets/svg/icons/file.svg";
import { useParams } from "react-router-dom";
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
      className="w-full h-[160px] p-4 flex items-center justify-center flex-col rounded-lg
        hover:bg-gray-100 border-2 border-transparent hover:border-green1 cursor-pointer"
    >
      <div className="h-2/3 mb-1 flex flex-col items-center justify-center">
        {file ? (
          <img src={file} alt="file" className="w-[45px] xsm:w-[60px]" />
        ) : (
          <div className="bg-gray-400 w-full h-full"></div>
        )}
        <p className="text-center font-[500] text-base sm:text-base">
          {courseCode}
        </p>
      </div>
      <div className="flex items-center justify-center h-1/3">
        <p className="text-center font-medium text-ss sm:text-sm text-gray-700">
          {courseTitle}
        </p>
      </div>
    </div>
  );
};

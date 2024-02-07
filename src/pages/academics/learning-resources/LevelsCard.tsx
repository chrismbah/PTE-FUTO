import { FC } from "react";
import folder from "../../../assets/svg/icons/folder.svg";
import { LevelCard } from "../../../models/academics/learning-resources";
import { Link } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import Lottie from "lottie-react";
// import folderAnimation from "../../../utils/animation/folder.json";

export const LevelsCard: FC<LevelCard> = ({ level, title, desc }) => {
  return (
    <Link to={`/learning-resources/${level}`}>
      <div className="w-full mx-auto hover:bg-gray-100 border-2 border-transparent hover:border-green1 rounded-lg p-2">
        <div className="flex items-center justify-center">
          <div className="w-[50%] sm:w-[80px]">
            {/* <Lottie loop={false} animationData={folderAnimation} /> */}
          <img src={folder} alt="folder" className="w-full" />
          </div>
        </div>
        <h4 className=" flex items-center justify-center mb-2 text-center
           font-semibold text-ss md:text-xs">
          <div className="h-[3px] w-[30%] bg-green1"/> {title.toUpperCase()}
        </h4>
        <p className="text-center font-medium text-xss sm:text-sm text-gray-700">{desc}</p>
      </div>
    </Link>
  );
};

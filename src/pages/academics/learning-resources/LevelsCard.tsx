import { FC } from "react";
import folder from "../../../assets/icons/learning-resources/folder1.png";
import { LevelCard } from "../../../models/academics/learning-resources";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Lottie from "lottie-react";
import folderAnimation from "../../../utils/animation/folder.json";

export const LevelsCard: FC<LevelCard> = ({ level, title, desc }) => {
  return (
    <Link to={`/learning-resources/${level}`}>
      <div className="w-full mx-auto hover:bg-gray-100 rounded-lg p-2">
        <div className="flex items-center justify-center">
          {/* <img src={folder} alt="folder" className=" w-28 md:w-32" /> */}
          <div className="w-[40%] sm:w-[40%]">
            <Lottie loop={false} animationData={folderAnimation} />
          </div>
        </div>
        <h4 className="text-center font-semibold sm:text-md md:text-lg">
          {title.toUpperCase()}
        </h4>
        <p className="text-center font-medium text-xss sm:text-sm">{desc}</p>
      </div>
    </Link>
  );
};

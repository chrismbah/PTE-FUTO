import { FC } from "react";
import folder from "../../../assets/icons/learning-resources/folder1.png";
import { LevelCard } from "../../../models/academics/learning-resources";
import { Link } from "react-router-dom";

export const LevelsCard: FC<LevelCard> = ({ level, title }) => {
  return (
    <div
      className=""
    >
      <Link to={`/learning-resources/${level}`}>
        <div className="flex items-center justify-center">
          <img src={folder} alt="folder" className="w-36" />
        </div>
        <h4 className="text-center font-semibold text-2xl">{title}</h4>
      </Link>
    </div>
  );
};

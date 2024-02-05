import { FC } from "react";
import folder from "../../../assets/icons/learning-resources/folder1.png";
import { LevelCard } from "../../../models/academics/learning-resources";
import { Link } from "react-router-dom";

export const LevelsCard: FC<LevelCard> = ({ level, title, desc }) => {
  return (
    <div
      className="hover:scale-110 p-4 transition-transform duration-300 h-[300px]"
    >
      <Link to={`/learning-resources/${level}`}>
        <div className="flex items-center justify-center">
          <img src={folder} alt="folder" className="w-36" />
        </div>
        <h4 className="text-center font-semibold text-2xl">{title}</h4>
        <p className="text-center font-medium">{desc}</p>
      </Link>
    </div>
  );
};

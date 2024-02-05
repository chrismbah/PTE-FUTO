import { FC } from "react";
import folder from "../../../assets/icons/learning-resources/folder1.png";
import { LevelCard } from "../../../models/academics/learning-resources";
import { Link } from "react-router-dom";

export const LevelsCard: FC<LevelCard> = ({ level, title, desc }) => {
  return (
    <Link to={`/learning-resources/${level}`}>
      <div className=" hover:bg-gray-100 rounded-lg ease-in p-2 hover:scale-105 transition duration-200">
        <div className="flex items-center justify-center">
          <img src={folder} alt="folder" className="w-32" />
        </div>
        <h4 className="text-center font-semibold text-2xl">{title}</h4>
        <p className="text-center font-medium">{desc}</p>
      </div>
    </Link>
  );
};

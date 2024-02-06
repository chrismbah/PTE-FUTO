// import {FC} from "react"
import { convertBytesToMB } from "../../../helpers/convertBytesToMb";

export const ContentCard = ({ name, size }) => {
  return (
    <div className="w-[350px] h-[100px] bg-white shadow-md rounded-md py-5 px-4 ">
      <div className="relative h-full">
        <p className="text-sm ">{name}</p>
        <span className="text-ss font-bold absolute bottom-0 left-0">
          {convertBytesToMB(size)} MB
        </span>
      </div>
    </div>
  );
};

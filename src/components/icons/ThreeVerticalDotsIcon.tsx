/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { StyleProp } from "../../models/style";

export const ThreeVerticalDotsIcon: FC<StyleProp> = ({ className, color }) => {
  return (
    <svg
      className={className}
      fill="#000000"
      width="113px"
      height="113px"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      stroke-width="6.656000000000001"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M136,192a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,192ZM128,72a8,8,0,1,0-8-8A8.00917,8.00917,0,0,0,128,72Zm0,48a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,128,120Z"></path>{" "}
      </g>
    </svg>
  );
};

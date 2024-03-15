/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { StyleProp } from "../../../models/style";

export const ProfileIcon: FC<StyleProp> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <circle cx="12" cy="6" r="4" fill="#00875a"></circle>{" "}
        <path
          d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
          fill="#00875a"
        ></path>{" "}
      </g>
    </svg>
  );
};

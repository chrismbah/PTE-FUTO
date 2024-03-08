/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { StyleProp } from "../../../models/style";

export const FilesIcon: FC<StyleProp> = ({ className, color }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
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
        <g clip-path="url(#clip0_901_1141)">
          {" "}
          <path
            d="M12 13H15M12 16H20M12 20H20M12 24H20M21 7V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V24C1 24 1 25 2 25H3M26 27H30C30.553 27 31 26.553 31 26V4C31 3.447 30.553 3 30 3H24M26 30C26 30.553 25.553 31 25 31H7C6.447 31 6 30.553 6 30V8C6 7.447 6.447 7 7 7H25C25.553 7 26 7.447 26 8V30Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="clip0_901_1141">
            {" "}
            <rect width="32" height="32" fill="white"></rect>{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
};

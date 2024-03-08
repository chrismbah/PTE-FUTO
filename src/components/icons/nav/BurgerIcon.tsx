import { FC } from "react";
import { StyleProp } from "../../../models/style";

export const BurgerIcon: FC<StyleProp> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      enable-background="new 0 0 12 12"
      id="Слой_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <rect
            fill="#000000"
            height="1"
            width="11"
            x="0.5"
            y="5.5"
          ></rect>{" "}
          <rect fill="#000000" height="1" width="11" x="0.5" y="2.5"></rect>{" "}
          <rect fill="#000000" height="1" width="11" x="0.5" y="8.5"></rect>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

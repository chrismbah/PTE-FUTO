import {FC} from "react";
import { StyleProp } from "../../../models/style";
export const GreenTickIcon:FC<StyleProp> = ({className}) => {
  return (
    <svg
    className={className}
      viewBox="-2.4 -2.4 28.80 28.80"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      transform="rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title></title>{" "}
        <g id="Complete">
          {" "}
          <g id="tick">
            {" "}
            <polyline
              fill="none"
              points="3.7 14.3 9.6 19 20.3 5"
              stroke="#00875a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polyline>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

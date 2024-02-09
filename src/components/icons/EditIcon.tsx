import { FC } from "react";
import { StyleProp } from "../../models/style";

export const EditIcon: FC<StyleProp> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#00875a"
      stroke="#00875a"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Complete">
          {" "}
          <g id="edit">
            {" "}
            <g>
              {" "}
              <path
                d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                fill="none"
                stroke=""
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>{" "}
              <polygon
                fill="none"
                points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                stroke=""
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

import { FC } from "react";
import { StyleProp } from "../../models/style";

export const WriteIcon:FC<StyleProp> = ({className}) => {
  return (
    <svg
      className={className}
      fill="#00875a"
    //   height="200px"
    //   width="200px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 511.999 511.999"
      xmlSpace="preserve"
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
          <g>
            {" "}
            <path d="M489.194,474.529h-377.58l55.961-23.531c2.258-0.903,4.648-2.525,6.251-4.133l332.686-332.686 c7.315-7.314,7.315-19.174,0-26.49L424.316,5.493c-7.314-7.314-19.175-7.314-26.49,0C391.77,11.549,74.956,328.364,65.14,338.179 c-1.696,1.693-3.284,4.12-4.132,6.247L1.527,485.883c-5.281,12.299,3.787,26.109,17.218,26.109h470.449 c10.345,0,18.731-8.387,18.731-18.731S499.538,474.529,489.194,474.529z M411.071,45.226l55.707,55.707l-40.787,40.787 l-55.707-55.707L411.071,45.226z M343.795,112.503l55.707,55.707L160.582,407.13l-55.707-55.707L343.795,112.503z M84.848,384.376 l42.78,42.781l-73.82,31.04L84.848,384.376z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

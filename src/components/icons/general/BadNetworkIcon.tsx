import { FC } from "react";
import { StyleProp } from "../../../models/style";

export const BadNetworkIcon: FC<StyleProp> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="System / Wifi_Problem">
          {" "}
          <path
            id="Vector"
            d="M8.34277 14.5898C8.80861 14.0902 9.37187 13.6914 9.9978 13.418C10.6237 13.1445 11.2995 13.0024 11.9826 13C12.6656 12.9976 13.3419 13.1353 13.9697 13.4044C14.5975 13.6734 15.1637 14.0682 15.633 14.5645M6.14941 11.5439C6.89312 10.7464 7.79203 10.1093 8.79091 9.67188C9.7898 9.23441 10.8678 9.00575 11.9583 9M3.22363 8.81649C4.34177 7.61743 5.69376 6.66021 7.19618 6.00391C8.69859 5.3476 10.3198 5.00558 11.9593 5M16 8.99997L18 6.99998M18 6.99998L20 5M18 6.99998L16 5M18 6.99998L20 8.99997M12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19Z"
            stroke="#00875a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

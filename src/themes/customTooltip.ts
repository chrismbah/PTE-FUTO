import type { CustomFlowbiteTheme } from "flowbite-react";

export const customTooltipTheme: CustomFlowbiteTheme["tooltip"] = {
    target: "w-fit",
    base: "absolute inline-block z-10 rounded-md py-2 px-3 text-sm font-medium shadow-sm",
    style: {
        "dark": "bg-gray-900 text-white",
        "light": "border border-gray-200 bg-white text-gray-900",
        "auto": "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
      },
  };
  
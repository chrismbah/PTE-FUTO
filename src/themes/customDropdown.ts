import type { CustomFlowbiteTheme } from "flowbite-react";

export const customDropdownTheme: CustomFlowbiteTheme["dropdown"] = {
  arrowIcon: "ml-0.5 h-4 w-4",
  floating: {
    item: {
      container: "",
      base: "flex items-center justify-start px-4 py-2 ss:px-4 ss:text-sm text-ss text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4",
    },
  },
};

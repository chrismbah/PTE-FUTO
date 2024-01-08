import type { CustomFlowbiteTheme } from "flowbite-react";

export const customNavTheme: CustomFlowbiteTheme["navbar"] = {
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0 ",
    active: {
      on: "text-sm ss:text-base border-b md:border-none border-gray-100 bg-cyan-700 text-green1 dark:text-green1 md:bg-transparent md:text-green1",
      off: "text-sm ss:text-base border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-green1 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
  },
};


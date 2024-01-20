import type { CustomFlowbiteTheme } from 'flowbite-react';

export const customButtonTheme: CustomFlowbiteTheme['button'] = {
  color: {
    primary: 'bg-green1 hover:bg-green2 text-white font-semibold'
  },
  size: {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1",
    // md: "text-base px-4 py-2",
    md: "ss:text-base ss:px-4 text-sm px-3 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3"
  }
};
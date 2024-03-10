/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DashboardNavbar } from "./DashboardNavbar";
import { GeneralNavbar } from "./GeneralNavbar";
// import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let navbarComponent;
  if (
    currentPath === "/dashboard" ||
    currentPath === "/profile" ||
    currentPath === "/gpa-calculator"
  ) {
    navbarComponent = <DashboardNavbar />;
  } else {
    navbarComponent = <GeneralNavbar />;
  }
  return <>{navbarComponent}</>;
};

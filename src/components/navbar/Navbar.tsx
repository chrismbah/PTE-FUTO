import { DashboardNavbar } from "./DashboardNavbar";
import { GeneralNavbar } from "./GeneralNavbar";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let navbarComponent;
  if (
    currentPath === "/dashboard" ||
    // currentPath === "/profile" ||
    currentPath.startsWith("/u")
  ) {
    navbarComponent = <DashboardNavbar />;
  } else {
    navbarComponent = <GeneralNavbar />;
  }
  return <>{navbarComponent}</>;
};

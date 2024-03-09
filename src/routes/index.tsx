/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import AuthenticatedRoutes from "./AuthRoutes";
import GeneralRoutes from "./GeneralRoutes";
// import { Navbar } from "../components/navbar/Navbar";

// import DashboardRoutes from "./DashboardRoutes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
// import { useLocation } from "react-router-dom";
// import { DashboardNavbar } from "../components/navbar/DashboardNavbar";
// import { GeneralNavbar } from "../components/navbar/GeneralNavbar";

const AppRoutes = () => {
  // const [user] = useAuthState(auth);
  // const isDashboardRoute = location.pathname.startsWith("/dashboard");
  const [user] = useState(true);

  return <>{user ? <AuthenticatedRoutes /> : <GeneralRoutes />}</>;
};
export default AppRoutes;

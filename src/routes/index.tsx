/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
// import Nav from "../components/navbar/Navbar";
import AuthenticatedRoutes from "./AuthRoutes";
import GeneralRoutes from "./GeneralRoutes";
// import { useAuthState } from "react-firebase-hooks/auth";
// import {auth} from "../config/firebase"
// import { useLocation } from "react-router-dom";
import DashboardNavbar from "../components/navbar/DashboardNavbar";

const AppRoutes = () => {
  // const [user] = useAuthState(auth);
  // const isDashboardRoute = location.pathname.startsWith("/dashboard");
  const [user] = useState(true);
  return (
    <>
      <DashboardNavbar />
      {user ? <AuthenticatedRoutes /> : <GeneralRoutes />}
    </>
  );
};
export default AppRoutes;

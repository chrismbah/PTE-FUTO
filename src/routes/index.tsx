import { useState } from "react";
import Nav from "../components/navbar/Navbar";
import AuthenticatedRoutes from "./AuthRoutes";
import GeneralRoutes from "./GeneralRoutes";
// import { useAuthState } from "react-firebase-hooks/auth";
// import {auth} from "../config/firebase"

const AppRoutes = () => {
  // const [user] = useAuthState(auth);
  const [user] = useState(true);
  return (
    <>
      <Nav />
      {user ? <AuthenticatedRoutes /> : <GeneralRoutes />}
    </>
  );
};
export default AppRoutes;

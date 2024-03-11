/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, FC } from "react";
import { Navigate } from "react-router-dom";
// import { useGetUserInfo } from "../hooks/auth/useGetUserInfo";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  // const { user, loading } = useGetUserInfo();
  const user = false

  if (!user) {
    console.log("User exists");
    return <Navigate to="/login" />;
  } else {
    console.log("User dont exist");
    return children
  }
};

export default ProtectedRoute;

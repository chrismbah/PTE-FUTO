/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, FC } from "react";
import { Navigate } from "react-router-dom";
import { useGetUserInfo } from "../hooks/auth/useGetUserInfo";
import LogoSpinner from "../components/loaders/FullLogoSpinner";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useGetUserInfo();

  if (!user && !loading) {
    return <Navigate to="/login" />;
  } else if (loading) {
    return <LogoSpinner />;
  } else {
    return children;
  }
};

export default ProtectedRoute;

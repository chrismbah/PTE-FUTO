import { Outlet, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../hooks/auth/useGetUserInfo";

export const PrivateRoute = () => {
  const { user } = useGetUserInfo();
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  return <Outlet />;
};

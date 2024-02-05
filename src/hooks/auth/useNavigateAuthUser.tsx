import { useGetUserInfo } from "./useGetUserInfo";
import { useNavigate } from "react-router-dom";
import { useToast } from "../notification/useToast";

export const useNavigateAuthUser = () => {
  const { user } = useGetUserInfo();
  const navigate = useNavigate();
  const navigateAuthUser = (route: string) => {
    if (user) {
      navigate(route);
    } else {
      navigate("/login");
      useToast("error", "Please login to access this feature");
    }
  };

  return { navigateAuthUser };
};

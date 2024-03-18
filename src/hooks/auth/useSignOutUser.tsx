import { useState } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { notifyUser } from "../../helpers/notifyUser";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../context/Modal";
export const useSignOutUser = () => {
  const navigate = useNavigate();
  const [signOutLoading, setSignOutLoading] = useState(false);
  const { setOpenSignOutModal } = useModalContext();

  const signOutUser = async () => {
    setSignOutLoading(true);
    try {
      await signOut(auth);
      setOpenSignOutModal(false);
      setSignOutLoading(false);
      navigate("/");
      notifyUser("success", "Signed out successfully. Until next time 🚀");
    } catch (err) {
      console.error("Sign-out error:", err);
      notifyUser("error", "Someting went wrong. Please try again");
      setOpenSignOutModal(false);
    }
  };

  return { signOutLoading, signOutUser };
};

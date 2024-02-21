import { useState } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "../../helpers/useToast";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../context/Modal";
export const useSignOutUser = () => {
  const navigate = useNavigate();
  const [signOutLoading, setLoading] = useState(false);
  const { setOpenSignOutModal } = useModalContext();

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setOpenSignOutModal(false);
      setLoading(false);
      navigate("/login");
      useToast("success", "Signed out successfully. Until next time 🚀");
    } catch (err) {
      console.error("Sign-out error:", err);
      useToast("error", "Someting went wrong. Please try again");
      setOpenSignOutModal(false);
    }
  };

  return { signOutLoading, signOutUser };
};

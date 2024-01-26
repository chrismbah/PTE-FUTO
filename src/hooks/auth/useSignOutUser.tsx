import { useState } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "../useToast";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../context/Modal";
export const useSignOutUser = () => {
  const navigate = useNavigate();
  const [signOutLoading, setLoading] = useState(false);
  const { setOpenModal } = useModalContext();

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setOpenModal(false);
      setLoading(false);
      useToast("success","Signed out successfully. Until next time 🚀");
      navigate("/login");
    } catch (err) {
      console.error("Sign-out error:", err);
      useToast("error", "Someting went wrong. Please try again");
    }
  };

  return { signOutLoading, signOutUser };
};

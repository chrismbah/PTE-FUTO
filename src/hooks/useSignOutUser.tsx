import { useState } from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "./useToast";
import { useNavigate } from "react-router-dom";

export const useSignOutUser = () => {
    const navigate = useNavigate()
    const [signOutLoading, setLoading] = useState(false)
    const signOutUser = async()=>{
        setLoading(true)
        try{
          await signOut(auth)
          setLoading(false)
          useToast("success", "Sign Out Successful")
          navigate("/login")
        }
        catch(err){
            console.error("Sign-out error:", err);
            useToast("error", "Someting went wrong. Please try again")
        }
    }

  return {signOutLoading, signOutUser}
}

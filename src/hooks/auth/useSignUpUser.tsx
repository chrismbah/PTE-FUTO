import { useState } from "react";
import { ISignUpForm } from "../../models/form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "../useToast";

export default function useSignUpUser() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const userInfoRef = collection(db, "userInfo");

  const { reset } = useForm<ISignUpForm>({
    resolver: yupResolver(signUpSchema),
  });

  const signUpUser = async (data: ISignUpForm) => {
    setLoading(true);
    try {
      const { email, password, regNo, firstName, lastName, level } = data;

      //*Stores user info in firestore database
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const userID = user.user.uid;

      await addDoc(userInfoRef, {
        userID: userID,
        firstName: firstName,
        lastName: lastName,
        email: email,
        regNo: regNo,
        level: level,
      });
      setLoading(false);
      reset();
      navigate("/");
      useToast("success", "Registeration Successful. Explore, learn, and enjoy your stay.");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        useToast("error", "Email Account already in use");
      } else {
        useToast("error", "Something went wrong. Please try again");
      }
      setLoading(false);
    }
  };

  return {signUpUser, loading};
}

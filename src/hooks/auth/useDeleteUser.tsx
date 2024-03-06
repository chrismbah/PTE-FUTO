/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteUser } from "firebase/auth";
import { notifyUser } from "../../helpers/notifyUser";
import { useGetUserInfo } from "./useGetUserInfo";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../../config/firebase";

export const useDeleteUser = () => {
  const [deletingUserAcct, setDeletingUserAcct] = useState(false);
  const [deletingUserAcctError, setDeletingUserAcctError] = useState(false);
  const navigate = useNavigate();
  const { user, userID } = useGetUserInfo();
  const deleteUserAccount = async () => {
    if (!user || !userID) {
      throw new Error("No user currently signed in.");
      return;
    }
    setDeletingUserAcct(true);
    try {
      await deleteUser(user);
      await deleteDoc(doc(db, "userInfo", userID));
      setDeletingUserAcct(false);
      navigate("/");
      notifyUser("success", "Account deleted successfully");
    } catch (err: any) {
      notifyUser("error", "Something went wrong. Please try again");
      setDeletingUserAcct(false);
      setDeletingUserAcctError(err);
      console.log(err);
    }
  };
  return { deleteUserAccount, deletingUserAcct, deletingUserAcctError };
};

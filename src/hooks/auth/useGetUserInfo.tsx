/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { StudentDetails } from "../../models/auth/studentDetails";
import { getCurrentDate } from "../../helpers/formatDate";
import { getCurrentTime } from "../../helpers/getCurrentTime";
export const useGetUserInfo = () => {
  const [studentDetails, setStudentDetails] = useState<StudentDetails | null>(
    null
  );
  const [gettingStudentDetails, setGettingStudentDetails] = useState(false);
  const [gettingStudentDetailsErr, setGettingStudentDetailsErr] =
    useState(false);
  const [user, loading, error] = useAuthState(auth);
  const userID = user?.uid;
  const userInfoRef = collection(db, "userInfo");

  const getUserInfo = async () => {
    if (userID) {
      setGettingStudentDetails(true);
      try {
        const userInfoDoc = query(userInfoRef, where("userID", "==", userID));
        const userInfo = await getDocs(userInfoDoc);
        const userFields = userInfo?.docs[0].data();
        const {
          firstName,
          lastName,
          regNo,
          email,
          level,
          registeredDate,
          registeredTime,
          profileImageURL,
          profileImageID,
        } = userFields;
        setStudentDetails({
          userID,
          firstName,
          lastName,
          regNo,
          email,
          level,
          loginDate: getCurrentDate(),
          loginTime: getCurrentTime(),
          registeredDate,
          registeredTime,
          profileImageURL,
          profileImageID,
        });
        setGettingStudentDetails(false);
      } catch (err: any) {
        setGettingStudentDetails(false);
        setGettingStudentDetailsErr(err);
      }
    }
  };

  useEffect(() => {
    //!Important
    getUserInfo();
  }, [user, studentDetails]);

  return {
    user,
    userID,
    loading,
    error,
    getUserInfo,
    studentDetails,
    gettingStudentDetails,
    gettingStudentDetailsErr,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import {
  collection,
  query,
  where,
  // getDocs,
  onSnapshot,
} from "firebase/firestore";
import { StudentDetails } from "../../models/auth/studentDetails";
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

  // const getUserInfo = async () => {
  //   if (userID) {
  //     setGettingStudentDetails(true);
  //     try {
  //       const userInfoDoc = query(userInfoRef, where("userID", "==", userID));
  //       const userInfo = await getDocs(userInfoDoc);
  //       const userFields = userInfo?.docs[0].data();
  //       const {
  //         firstName,
  //         lastName,
  //         regNo,
  //         email,
  //         level,
  //         profileImageURL,
  //         profileImageID,
  //         registeredTimeStamp,
  //         registeredDate,
  //         registeredTime,
  //         loginDate,
  //         loginTime,
  //       } = userFields;
  //       setStudentDetails({
  //         userID,
  //         firstName,
  //         lastName,
  //         regNo,
  //         email,
  //         level,
  //         profileImageURL,
  //         profileImageID,
  //         registeredDate,
  //         registeredTime,
  //         registeredTimeStamp,
  //         loginDate,
  //         loginTime,
  //       });
  //       setGettingStudentDetails(false);
  //     } catch (err: any) {
  //       setGettingStudentDetails(false);
  //       setGettingStudentDetailsErr(err);
  //     }
  //   }
  // };
  useEffect(() => {
    if (userID) {
      setGettingStudentDetails(true)
      const unsubscribe = onSnapshot(
        query(userInfoRef, where("userID", "==", userID)),
        (snapshot) => {
          const userDoc = snapshot.docs[0];
          if (userDoc.exists()) {
            const userFields = userDoc.data();
            const {
              firstName,
              lastName,
              regNo,
              email,
              level,
              profileImageURL,
              profileImageID,
              registeredTimeStamp,
              registeredDate,
              registeredTime,
              loginDate,
              loginTime,
            } = userFields;
            setStudentDetails({
              userID,
              firstName,
              lastName,
              regNo,
              email,
              level,
              profileImageURL,
              profileImageID,
              registeredDate,
              registeredTime,
              registeredTimeStamp,
              loginDate,
              loginTime,
            });
            setGettingStudentDetails(false)
          } else {
            console.error("User document not found");
          }
        },
        (error: any) => {
          // Handle errors
          console.error("Error fetching user details:", error);
          setGettingStudentDetails(false)
          setGettingStudentDetailsErr(error);
        }
      );
      return () => unsubscribe();
    }
    // Cleanup function to detach the listener on component unmount
  }, [userID]);

  return {
    user,
    userID,
    loading,
    error,
    // getUserInfo,
    studentDetails,
    gettingStudentDetails,
    gettingStudentDetailsErr,
  };
};

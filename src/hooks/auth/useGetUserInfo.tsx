import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { StudentDetails } from "../../models/auth/studentDetails";
import { getCurrentDate } from "../../helpers/formatDate";
import { getCurrentTime } from "../../helpers/getCurrentTime";
export const useGetUserInfo = () => {
  const [studentDetails, setStudentDetails] = useState<StudentDetails | null>(
    null
  );
  const [user, loading] = useAuthState(auth);
  const userID = user?.uid;

  const userInfoRef = collection(db, "userInfo");

  const userInfoDoc = userID
    ? query(userInfoRef, where("userID", "==", userID))
    : null;

  const getUserInfo = async () => {
    if (userInfoDoc) {
      const userInfo = await getDocs(userInfoDoc);
      const userFields = userInfo?.docs[0].data(); // Expecting a single field in the array
      const { firstName, lastName, regNo, email, level, registeredDate, registeredTime } = userFields;
      setStudentDetails({
        firstName: firstName,
        lastName: lastName,
        regNo: regNo,
        email: email,
        level: level,
        loginDate: getCurrentDate(),
        loginTime: getCurrentTime(),
        registeredDate: registeredDate,
        registeredTime: registeredTime
      });
    }
    else{
      console.log("Couldnt find user")
    }
  };

  return { user, userID, loading, getUserInfo, studentDetails };
};

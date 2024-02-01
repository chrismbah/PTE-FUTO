import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  //   deleteDoc,
  //   doc,
} from "firebase/firestore";
import { StudentDetails } from "../../models/academics/studentDetails";

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
      const userFields = userInfo.docs[0].data();
      const { firstName, lastName, regNo, email, level } = userFields;
      setStudentDetails({
        firstName: firstName,
        lastName: lastName,
        regNo: regNo,
        email: email,
        level: level,
      });
    }
  };

  return { user, loading, getUserInfo, studentDetails };
};

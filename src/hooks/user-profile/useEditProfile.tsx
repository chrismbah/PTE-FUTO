// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState } from "react";
// import { updateDoc, doc } from "firebase/firestore";
// import { useGetUserInfo } from "../auth/useGetUserInfo";
// import { notifyUser } from "../../helpers/notifyUser";
// import { IEditProfileForm } from "../../models/student/editProfile";
// import { db } from "../../config/firebase";
// import { useUploadProfileImage } from "./useUploadProfileImage";
// import { useModalContext } from "../../context/Modal";
// import { useForm } from "react-hook-form";
// import { editProfileSchema } from "../../validation";
// import { yupResolver } from "@hookform/resolvers/yup";

// export const useEditProfile = () => {
//   const [editingProfile, setEditingProfile] = useState(false);
//   const { userID } = useGetUserInfo();
//   const { setOpenEditProfileModal } = useModalContext();
//   const { updateUserProfileLink, setImageURL, setImageFile, setImageFileID } =
//     useUploadProfileImage();
//   const { reset } = useForm<IEditProfileForm>({
//     resolver: yupResolver(editProfileSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       regNo: "",
//       level: "",
//     },
//   });

//   const editUserProfile = async (data: IEditProfileForm) => {
//     setEditingProfile(true);
//     notifyUser("loading", "Updating user profile...");
//     const { firstName, lastName, regNo, level } = data;
//     if (userID) {
//       try {
//         const userInfoRef = doc(db, "userInfo", userID);
//         await updateDoc(userInfoRef, {
//           firstName,
//           lastName,
//           regNo,
//           level,
//         });
//         await updateUserProfileLink();
//         setEditingProfile(false);
//         setOpenEditProfileModal(false);
//         setImageURL(null);
//         setImageFile(null);
//         setImageFileID(null);
//         reset();
//         notifyUser("success", "User profile updated successfully...");
//       } catch (err: any) {
//         console.log(err);
//         setEditingProfile(false);
//         notifyUser("error", "Something went wrong. Please try again.");
//       }
//     } else {
//       console.log("error");
//     }
//   };

//   return { editUserProfile, editingProfile };
// };

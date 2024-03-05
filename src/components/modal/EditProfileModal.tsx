/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useModalContext } from "../../context/Modal";
import { CancelIcon } from "../icons/CancelIcon";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
import Lottie from "lottie-react";
import { Spinner } from "../../components/loaders/Spinner";
import avatar from "../../json/animation/avatar1.json";
import { useUploadProfileImage } from "../../hooks/user-profile/useUploadProfileImage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../validation";
import { IEditProfileForm } from "../../models/student/editProfile";
// import { deleteUser } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { notifyUser } from "../../helpers/notifyUser";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const EditProfileModal = () => {
  const { openEditProfileModal, setOpenEditProfileModal } = useModalContext();
  const { studentDetails, getUserInfo, userID } = useGetUserInfo();
  // const [deletingUserAcct, setDeletingUserAcct] = useState(false);
  // const [deletingUserAcctError, setDeletingUserAcctError] = useState(false);
  const [editingProfile, setEditingProfile] = useState(false);
  // const [editingProfileError, setEditingProfileError] = useState(false);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (openEditProfileModal) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "visible";
  //   }
  // }, [openEditProfileModal]);

  useEffect(() => {
    getUserInfo();
  }, [studentDetails]);

  const {
    imageFile,
    imageURL,
    uploadProfileImage,
    handleFileChange,
    updateUserProfileLink,
    setImageURL,
    setImageFile,
  } = useUploadProfileImage();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditProfileForm>({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      regNo: "",
      level: "",
    },
  });
  useEffect(() => {
    const defaults = {
      firstName: studentDetails?.firstName,
      lastName: studentDetails?.lastName,
      level: studentDetails?.level,
      regNo: studentDetails?.regNo,
    };
    reset(defaults);
  }, [reset, openEditProfileModal]);

  const closeEditProfileModal = () => {
    setOpenEditProfileModal(false);
    reset();
    setImageURL(null);
    setImageFile(null);
  };

  const editProfile = async (data: IEditProfileForm) => {
    setEditingProfile(true);
    notifyUser("loading", "Updating user profile...");
    const { firstName, lastName, regNo, level } = data;
    if (userID) {
      try {
        const userInfoRef = doc(db, "userInfo", userID);
        await updateDoc(userInfoRef, {
          firstName,
          lastName,
          regNo,
          level,
        });
        await updateUserProfileLink();
        setEditingProfile(false);
        setOpenEditProfileModal(false);
        setImageURL(null);
        setImageFile(null);
        reset();
        notifyUser("success", "User profile updated successfully...");
      } catch (err) {
        console.log(err);
        setEditingProfile(false);
        notifyUser("error", "Something went wrong. Please try again.");
      }
    } else {
      console.log("error");
    }
  };
  // const deleteUserAccount = async () => {
  //   if (!user || !userID) {
  //     throw new Error("No user currently signed in.");
  //     return;
  //   }
  //   setDeletingUserAcct(true);
  //   try {
  //     await deleteUser(user);
  //     await deleteDoc(doc(db, "userInfo", userID));
  //     setDeletingUserAcct(false);
  //     navigate("/");
  //     notifyUser("success", "Account deleted successfully");
  //   } catch (err: any) {
  //     notifyUser("error", "Something went wrong. Please try again");
  //     setDeletingUserAcct(false);
  //     setDeletingUserAcctError(err);
  //     console.log(err);
  //   }
  // };

  const renderProfileImage = () => {
    if (studentDetails) {
      if (studentDetails.profileImageURL.length > 0 || imageURL) {
        return (
          <div>
            <div
              className="relative w-[80px] h-[80px] xss:w-[90px] xss:h-[90px] sss:w-[120px] bg-gray-100
                sss:h-[120px] sm:h-[140px] sm:w-[140px] rounded-full"
            >
              <img
                src={imageURL ? imageURL : studentDetails.profileImageURL}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        );
      } else {
        return (
          <Lottie
            animationData={avatar}
            loop={false}
            className="w-[120px] xss:w-[150px] sss:w-[180px]
              sm:w-[200px]"
          />
        );
      }
    } else {
      return (
        <Lottie
          animationData={avatar}
          loop={false}
          className="w-[120px] xss:w-[150px] sss:w-[180px]
            sm:w-[200px]"
        />
      );
    }
  };
  return (
    <>
      {/* {studentDetails && ( */}
      <div
        className={`${
          openEditProfileModal ? "block" : "hidden"
        } z-[99] bg-black/50 backdrop-blur-sm fixed top-0 right-0 left-0  min-h-screen overflow-y-auto overflow-x-hidden flex items-center justify-center`}
      >
        {/* <form onSubmit={handleSubmit(editProfile)}> */}
        <div className="bg-white rounded-lg  text-center relative shadow-4 w-[90%] xsm:w-[700px]">
          <div className="w-full flex justify-between items-center p-4 border-b border-b-gray-300">
            <h3 className="text-base sm:text-md md:text-lg font-semibold ">
              Edit Your Profile
            </h3>
            <button
              className="font-bold p-2 rounded-lg hover:bg-gray-50"
              onClick={closeEditProfileModal}
            >
              <CancelIcon className="w-4 h-4" />
            </button>
          </div>

          <div>
            <div className="flex flex-col sss:flex-row items-center gap-3 w-full mmd:w-fit py-4 px-3 ss:px-5 sss:px-7 ">
              {renderProfileImage()}
              <div className="flex items-center justify-between flex-col w-full ">
                <p className="w-full text-left block text-xss ss:text-ss sm:text-sm font-medium text-gray-900">
                  Upload Profile Picture
                </p>
                <div className="flex items-center gap-1 ss:gap-4 w-full flex-col ss:flex-row justify-start">
                  <div className="flex items-center justify-start w-full ss:w-fit">
                    <div className="">
                      <input
                        type="file"
                        id="profile-input"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e)}
                        hidden
                      />
                      <label
                        htmlFor="profile-input"
                        className="block text-slate-500 py-2 px-4
                          border border-gray-700 text-ss ss:text-sm font-medium bg-gray-700
                        text-white hover:bg-gray-700/80 transition hover:border-gray-700/80 cursor-pointer rounded-l-lg"
                      >
                        Choose Image
                      </label>
                    </div>
                    <label className="text-ss ss:text-sm text-slate-500 font-medium py-2 px-4 border border-gray-400 rounded-r-lg">
                      {imageFile ? imageFile.name : "No file chosen"}
                    </label>
                  </div>
                  <div className="w-full ss:w-fit">
                    <button
                      onClick={uploadProfileImage}
                      className="xxss:min-w-[110px] ss:min-w-fit  flex items-center justify-center rounded-lg bg-green1
                       font-semibold text-white border-2 border-transparent hover:bg-transparent hover:border-green1 transition duration-200 ease-in-out p-2 hover:text-black text-ss sm:text-sm"
                    >
                      <span>Upload</span>
                    </button>
                  </div>
                </div>
                <p
                  className="my-1 w-full text-left text-sss ss:text-xss text-gray-500 "
                  id="file_input_help"
                >
                  PNG, JPG or WEBP Potrait Image.
                </p>
              </div>
            </div>
            <div className="px-3 ss:px-5 sss:px-7 mb-4">
              <form onSubmit={handleSubmit(editProfile)}>
                <div className="flex items-center justify-between flex-col sss:flex-row gap-4 sss:gap-7 mb-2 sss:mb-3">
                  <div className="w-full sss:basis-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm text-left font-semibold text-gray-900 "
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 "
                      placeholder="eg. Chris"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="form-error-message">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full sss:basis-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm text-left font-semibold text-gray-900 "
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 "
                      placeholder="eg. Mbah"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="form-error-message">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between flex-col sss:flex-row gap-4 sss:gap-7 mb-2 sss:mb-3">
                  <div className="w-full sss:basis-1/2">
                    <label
                      htmlFor="regNo"
                      className="text-left block text-sm font-semibold text-gray-900 "
                    >
                      Matric No.
                    </label>
                    <input
                      type="number"
                      id=""
                      placeholder="eg. 20191129201"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("regNo")}
                    />
                  </div>
                  <div className="w-full sss:basis-1/2">
                    <label
                      htmlFor="level"
                      className="text-left block text-sm font-semibold text-gray-900 "
                    >
                      Level
                    </label>
                    <select
                      id="underline_select"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("level")}
                    >
                      <option selected disabled>
                        Select Your Level
                      </option>
                      <option value="aspirant">Aspirant</option>
                      <option value="100L">100L</option>
                      <option value="200L">200L</option>
                      <option value="300L">300L</option>
                      <option value="400L">400L</option>
                      <option value="500L">500L</option>
                      <option value="Visitor">Visitor</option>
                    </select>
                    {errors.level && (
                      <p className="form-error-message">
                        {errors.level.message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="px-3 ss:px-5 sss:px-7 mb-3">
              <h3 className="text-left text-base sm:text-md md:text-lg font-semibold ">
                Delete your account
              </h3>
              <p className="text-gray-700 text-sss sm:text-xss md:text-ss text-left mb-3">
                Deleting your account will remove all your access to
                authenticated users. This action cannot be undone.
              </p>
              <div className="w-full text-left">
                <button
                  onClick={deleteUserAccount}
                  className="w-[150px] transition duration-200 ease-in-out rounded-lg text-red-500 hover:text-white border border-red-500 bg-red-100 hover:bg-red-500 p-2 font-semibold text-sm"
                >
                  {deletingUserAcct ? (
                    <Spinner className="w-6 h-6 fill-red-500" />
                  ) : (
                    "Delete your account"
                  )}
                </button>
              </div>
            </div> */}
          <div className="w-full flex items-center flex-col sss:flex-row justify-between gap-2 p-3 ss:p-5 sss:p-7">
            <button
              onClick={closeEditProfileModal}
              className="w-full border border-gray-300 rounded-lg font-semibold font-xs p-2 hover:bg-gray-100"
            >
              Close
            </button>
            <button
              type="submit"
              onClick={handleSubmit(editProfile)}
              className="w-full bg-green1 rounded-lg font-semibold font-xs p-2 text-white"
            >
              {editingProfile ? (
                <Spinner className="w-5 h-5 fill-white" />
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

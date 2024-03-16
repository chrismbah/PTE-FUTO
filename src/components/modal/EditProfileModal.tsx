/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useModalContext } from "../../context/Modal";
import { CancelIcon } from "../icons/general/CancelIcon";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
import Lottie from "lottie-react";
import { Spinner } from "../../components/loaders/Spinner";
import avatar from "../../json/animation/avatar1.json";
import { useUploadProfileImage } from "../../hooks/user-profile/useUploadProfileImage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../validation";
import { IEditProfileForm } from "../../models/student/editProfile";
import { notifyUser } from "../../helpers/notifyUser";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const EditProfileModal = () => {
  const { openEditProfileModal, setOpenEditProfileModal } = useModalContext();
  const { studentDetails, userID, user, getUserInfo } = useGetUserInfo();
  const [editingProfile, setEditingProfile] = useState(false);

  useEffect(() => {
    //!Important
    getUserInfo();
  }, [user, studentDetails]);

  useEffect(() => {
    if (openEditProfileModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openEditProfileModal]);

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
      } catch (err: any) {
        console.log(err);
        setEditingProfile(false);
        notifyUser("error", "Something went wrong. Please try again.");
      }
    } else {
      console.log("error");
    }
  };

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
      <div
        className={`${
          openEditProfileModal ? "block" : "hidden"
        } z-[99] bg-black/50 sss:py-0 backdrop-blur-sm w-full overflow-y-auto min-h-screen fixed top-0 left-0  flex items-center justify-center`}
      >
        <div className=" bg-white rounded-lg text-center relative shadow w-[95%] xsm:w-[700px] overflow-y-auto max-h-[85vh]">
          <div className=" sticky top-0 right-0 z-[999] bg-white rounded-t-lg w-full flex justify-between items-center p-4 border-b border-b-gray-300">
            <h3 className="font-bold text-base sm:text-md ">
              Edit Your Profile
            </h3>
            <button
              className="font-bold p-2 rounded-lg hover:bg-gray-50"
              onClick={closeEditProfileModal}
            >
              <CancelIcon className="h-3 w-3 xss:w-3 xss:h-3" />
            </button>
          </div>

          <div>
            <div className="flex flex-col sss:flex-row items-center gap-3 w-full mmd:w-fit py-4 px-3 ss:px-5 sss:px-7 ">
              {renderProfileImage()}
              <div className="flex items-center justify-between flex-col w-full ">
                <div className="flex items-center flex-wrap gap-1 ss:gap-1 w-full  justify-center sss:justify-start">
                  <div className="flex items-center justify-start">
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
                        className="block text-slate-500 p-1.5 xss:py-2 xss:px-4
                          border border-gray-700 text-sss xss:text-xss sm:text-sm font-medium bg-gray-700
                        text-white hover:bg-gray-700/80 transition hover:border-gray-700/80 cursor-pointer rounded-l-md xss:rounded-l-lg"
                      >
                        Choose Image
                      </label>
                    </div>
                    <label className="text-sss xss:text-xss sm:text-sm text-slate-500 font-medium p-1.5 xss:py-2 xss:px-4 border border-gray-400 rounded-r-md xss:rounded-r-lg">
                      {imageFile ? imageFile.name : "No file chosen"}
                    </label>
                  </div>
                  <div className="">
                    <button
                      onClick={uploadProfileImage}
                      className="min-w-fit  flex items-center justify-center rounded-md xss:rounded-lg bg-green1
                       font-semibold text-white border-2 border-transparent hover:bg-green1/90 transition duration-200 ease-in-out p-1.5 xss:py-2 xss:px-4 text-sss xss:text-xss sm:text-sm"
                    >
                      <span>Upload</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 ss:px-5 sss:px-7 mb-4 sm:mb-7">
              <form onSubmit={handleSubmit(editProfile)}>
                <div className="flex items-center justify-between flex-col xxss:flex-row gap-4 sm:gap-7 mb-4 sm:mb-3">
                  <div className="w-full sss:basis-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-xss ss:text-ss sm:text-sm text-left font-semibold text-gray-900 "
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xss ss:text-ss sm:text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-1.5 sm:p-2.5 "
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
                      className="block text-xss ss:text-ss sm:text-sm text-left font-semibold text-gray-900 "
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xss ss:text-ss sm:text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-1.5 sm:p-2.5 "
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
                <div className="flex items-center justify-between flex-col xxss:flex-row gap-4 sm:gap-7 mb-4 sm:mb-3">
                  <div className="w-full sss:basis-1/2">
                    <label
                      htmlFor="regNo"
                      className="text-left block text-xss ss:text-ss sm:text-sm font-semibold text-gray-900 "
                    >
                      Matric No.
                    </label>
                    <input
                      type="number"
                      id=""
                      placeholder="eg. 20191129201"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xss ss:text-ss sm:text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("regNo")}
                    />
                  </div>
                  <div className="w-full sss:basis-1/2">
                    <label
                      htmlFor="level"
                      className="text-left block text-xss ss:text-ss sm:text-sm font-semibold text-gray-900 "
                    >
                      Level
                    </label>
                    <select
                      id="underline_select"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xss ss:text-ss sm:text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("level")}
                    >
                      <option selected disabled>
                        Select Your Level
                      </option>
                      <option value="Aspirant">Aspirant</option>
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
          <div className="w-full flex items-center flex-row justify-end gap-2 px-3 ss:px-5 sss:px-7 pb-9 ss:pb-7 sss:pb-7">
            <button
              type="submit"
              onClick={handleSubmit(editProfile)}
              className=" bg-green1 rounded-lg font-semibold text-ss sm:text-sm px-4 py-2 text-white"
            >
              {editingProfile ? (
                <Spinner className="w-5 h-5 fill-white" />
              ) : (
                "Save Changes"
              )}
            </button>
            <button
              onClick={closeEditProfileModal}
              className=" text-gray-900 bg-gray-50 border border-gray-300 hover:bg-gray-200/90 rounded-lg 
                font-semibold text-ss sm:text-sm px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
import Lottie from "lottie-react";
import avatar from "../../json/animation/avatar.json";
import { CalenderIcon } from "../../components/icons/CalenderIcon";
import { EmailIcon } from "../../components/icons/socials/EmailIcon";
import { GraduateCapIcon } from "../../components/icons/GraduateCapIcon";
import { ClockIcon } from "../../components/icons/ClockIcon";
import { RegisterIcon } from "../../components/icons/RegisterIcon";
import { useUploadProfileImage } from "../../hooks/user-profile/useUploadProfileImage";
import { ThreeVerticalDotsIcon } from "../../components/icons/ThreeVerticalDotsIcon";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { DeleteProfileImage } from "../../components/modal/DeleteProfileImage";
import { useModalContext } from "../../context/Modal";


export default function Profile() {
  const { getUserInfo, studentDetails } = useGetUserInfo();
  const {
    imageFile,
    uploadProfileImage,
    handleFileChange,
  } = useUploadProfileImage();
  const { setOpenDeleteProfileImageModal } = useModalContext()

  useEffect(() => {
    getUserInfo();
  }, [studentDetails]);

  const renderProfileImage = () => {
    if (studentDetails) {
      if (studentDetails.profileImageURL.length > 1) {
        return (
          <div>
            <div
              className="relative w-[120px] h-[120px] xss:w-[150px] xss:h-[150px] sss:w-[180px] bg-gray-100
                sss:h-[180px] sm:h-[200px] sm:w-[200px] rounded-full border-[3px] border-green1 p-0.5"
            >
              <img
                src={studentDetails.profileImageURL}
                alt="Profile"
                className="w-full h-full rounded-full"
              />

              <Popover
                placement="right"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <button
                    className="z-4 absolute top-5 -right-1 xss:top-6 xss:right-1 sss:top-7 
                    sss:right-1 sm:top-8 sm:right-1 bg-gray-50 hover:bg-gray-100 rounded-full 
                    p-0.5 border border-gray-200"
                  >
                    <ThreeVerticalDotsIcon
                      className="h-3 w-3 sss:h-4 sss:w-4 sm:w-5 sm:h-5"
                      color="#0f172a"
                    />
                  </button>
                </PopoverHandler>
                <PopoverContent
                  onClick={()=>setOpenDeleteProfileImageModal(true)}
                  placeholder={""}
                  className={` cursor-pointer shadow font-dmSans p-2 text-[10px] bg-gray-50 sm:text-ss hover:bg-gray-100 rounded-lg`}
                >
                  Delete
                </PopoverContent>
              </Popover>
            </div>
          </div>
        );
      } else {
        return (
          <Lottie
            animationData={avatar}
            loop={false}
            className="w-[150px]  xss:w-[180px] sss:w-[200px]
              sm:w-[230px]"
          />
        );
      }
    } else {
      return (
        <Lottie
          animationData={avatar}
          loop={false}
          className="w-[150px] xss:w-[180px] sss:w-[200px]
            sm:w-[230px]"
        />
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="px-3 sm:px-14 sm:py-[105px] py-20">
          <div className="w-full flex items-center justify-between flex-col mmd:flex-row gap-4">
            <div className="flex flex-col xss:flex-row items-center gap-3 w-full mmd:w-fit">
              {renderProfileImage()}

              <div className="flex flex-col justify-center xss:justify-start mmd:w-full ">
                <p className="text-xl sm:text-2xl xsm:text-3xl font-bold text-center xss:text-left">
                  {studentDetails?.firstName} {studentDetails?.lastName}
                </p>
                <p className="text-sm xsm:text-xs font-semibold capitalize  text-center xss:text-left">
                  Polymer and Textile Engineering ·{" "}
                  <span className="text-green1">{studentDetails?.level}</span>
                </p>
                <div className="flex items-center justify-center xss:justify-start gap-1 sm:gap-2 sm:mt-2">
                  <div className="rounded-lg bg-gray-200 p-1 sm:p-2">
                    <CalenderIcon className="w-3 sm:w-5" />
                  </div>
                  <p className="text-ss xsm:text-sm mmd:text-xs text-gray-700 font-[500] capitalize">
                    Joined {studentDetails?.registeredDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mmd:w-fit">
              <div className="flex items-center justify-between flex-col w-full ">
                <p className="w-full text-left block text-xss ss:text-ss sm:text-sm font-medium text-gray-900">
                  Upload Profile Picture
                </p>
                <div className="flex items-center gap-1 ss:gap-4 w-full flex-col ss:flex-row justify-start mmd:justify-center">
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
                      <span>Update</span>
                    </button>
                  </div>
                </div>
                <p
                  className="my-1 w-full text-left text-xss ss:text-ss text-gray-500 "
                  id="file_input_help"
                >
                  PNG, JPG or WEBP Potrait Image.
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <h1 className="text-base xsm:text-mmd mmd:text-lg font-bold mb-2 sm:mb-3">
              Contact Information
            </h1>
            <div className="flex items-center gap-2 sm:gap-4 ">
              <div className="rounded-lg bg-gray-200 p-2">
                <EmailIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs sm:text-base mmd:text-mmd font-semibold text-left w-full">
                  Email
                </p>
                <p className="text-sm sm:text-xs mmd:text-base font-[500] text-gray-600 break-all">
                  {studentDetails?.email}
                </p>
              </div>
            </div>{" "}
            <h1 className="text-base xsm:text-mmd mmd:text-lg font-bold mb-2 sm:mb-3 sm:mt-6 mt-9">
              Academic Information
            </h1>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <GraduateCapIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs sm:text-base mmd:text-mmd font-semibold text-left w-full">
                  Department
                </p>
                <p className="text-sm sm:text-xs mmd:text-base font-[500] text-gray-600">
                  Polymer and Textile Engineering
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <ClockIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs sm:text-base mmd:text-mmd font-semibold text-left w-full">
                  Level
                </p>
                <p className="text-sm sm:text-xs mmd:text-base font-[500] text-gray-600 text-left">
                  {studentDetails?.level}
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <RegisterIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs sm:text-base mmd:text-mmd font-semibold text-left w-full">
                  Matriculation Number
                </p>
                <p className="text-sm sm:text-xs mmd:text-base font-[500] text-gray-600 text-left">
                  {studentDetails?.regNo || "None"}
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="flex items-center w-full justify-end">
            <button className="p-3 rounded-lg bg-green1 text-xs font-semibold text-white border-2 border-transparent hover:bg-transparent hover:border-green1 transition duration-200 ease-in-out hover:text-black">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <DeleteProfileImage />
    </div>
  );
}

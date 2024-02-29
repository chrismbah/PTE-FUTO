/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Lottie from "lottie-react";
import avatar from "../../json/animation/avatar.json";
import { CalenderIcon } from "../../components/icons/CalenderIcon";
import { EmailIcon } from "../../components/icons/socials/EmailIcon";
import { GraduateCapIcon } from "../../components/icons/GraduateCapIcon";
import { ClockIcon } from "../../components/icons/ClockIcon";
import { RegisterIcon } from "../../components/icons/RegisterIcon";
import { notifyUser } from "../../helpers/notifyUser";
import { UploadIcon } from "../../components/icons/UploadIcon";

export default function Profile() {
  const { getUserInfo, studentDetails } = useGetUserInfo();
  useEffect(() => {
    getUserInfo();
  }, []);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setImageFile(selectedFile);
    } else {
      notifyUser("error", "Please choose a valid image file (PNG or JPG).");
      e.target.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="page-section">
          <div className="w-full flex items-center justify-between flex-col xss:flex-row">
            <div className="flex flex-col xss:flex-row items-center gap-3">
              <Lottie
                animationData={avatar}
                loop={false}
                className="w-32 sm:w-32 xsm:w-40 md:w-48 mr-3"
              />
              <div className="flex flex-col justify-center xss:justify-start w-full ">
                <p className="text-lg sm:text-xl xsm:text-2xl md:text-3xl font-bold text-center xss:text-left">
                  {studentDetails?.firstName} {studentDetails?.lastName}
                </p>
                <p className="text-ss sm:text-xs xsm:text-base md:text-lg font-semibold capitalize  text-center xss:text-left">
                  Polymer and Textile Engineering ·{" "}
                  <span className="text-green4">{studentDetails?.level}</span>
                </p>
                <div className="flex items-center justify-center xss:justify-start gap-1 sm:gap-2 sm:mt-2">
                  <div className="rounded-lg bg-gray-200 p-1 sm:p-2">
                    <CalenderIcon className="w-3 sm:w-5" />
                  </div>
                  <p className="text-ss sm:text-sm xsm:text-xs md:text-base text-gray-700 font-[500] capitalize">
                    Joined {studentDetails?.registeredDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-col">
              <p className="w-full text-left block text-sm font-medium text-gray-900">
                Update Profile Picture
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <div>
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
                          border-0 text-xs font-medium bg-black
                        text-white hover:bg-black/70 cursor-pointer rounded-l-lg"
                    >
                      Choose Image
                    </label>
                  </div>
                  <label className="text-sm text-slate-500 font-medium py-2 px-4 border border-gray-400 rounded-r-lg">
                    {imageFile ? imageFile.name : "No file chosen"}
                  </label>
                </div>
                <button className="py-2 px-4 rounded-lg bg-green1 text-sm font-semibold text-white">
                  Upload
                  <UploadIcon className="w-2 sm:w-4 inline ml-2" />
                </button>
              </div>
              <p
                className="mt-1 w-full text-left text-ss text-gray-500 "
                id="file_input_help"
              >
                PNG, JPG, WEBP Image.
              </p>
            </div>
          </div>
          <div className="ss:pl-4 sm:pl-[15px] md:pl-4 mt-5">
            <h1 className="text-sm ss:text-xs xsm:text-base md:text-lg font-bold mb-2 sm:mb-3">
              Contact Information
            </h1>
            <div className="flex items-center gap-2 sm:gap-4 ">
              <div className="rounded-lg bg-gray-200 p-2">
                <EmailIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm sm:text-base md:text-md font-semibold text-left w-full">
                  Email
                </p>
                <p className="text-ss sm:text-sm md:text-xs font-[500] text-gray-600 break-all">
                  {studentDetails?.email}
                </p>
              </div>
            </div>{" "}
            <h1 className="text-sm ss:text-xs xsm:text-base md:text-lg font-bold mb-2 sm:mb-3 sm:mt-6 mt-9">
              Academic Information
            </h1>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <GraduateCapIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm sm:text-base md:text-md font-semibold text-left w-full">
                  Department
                </p>
                <p className="text-ss sm:text-sm md:text-xs font-[500] text-gray-600">
                  Polymer and Textile Engineering
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <ClockIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm sm:text-base md:text-md font-semibold text-left w-full">
                  Level
                </p>
                <p className="text-ss sm:text-sm md:text-xs font-[500] text-gray-600 text-left">
                  {studentDetails?.level}
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <RegisterIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm sm:text-base md:text-md font-semibold text-left w-full">
                  Registeration Number
                </p>
                <p className="text-ss sm:text-sm md:text-xs font-[500] text-gray-600 text-left">
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
    </div>
  );
}

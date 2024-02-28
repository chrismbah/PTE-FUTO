/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import userAvatar from "../../assets/svg/icons/userProfile.svg";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Lottie from "lottie-react";
import avatar from "../../json/animation/avatar.json";
import { CalenderIcon } from "../../components/icons/CalenderIcon";

export default function Profile() {
  const { getUserInfo, studentDetails } = useGetUserInfo();
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="page-section">
          <div className="w-full flex items-center justify-between flex-row">
            <div className="flex items-center">
              <Lottie
                animationData={avatar}
                loop={false}
                className="w-48 mr-3"
              />
              <div>
                <p className="text-4xl font-bold">
                  {studentDetails?.firstName} {studentDetails?.lastName}
                </p>
                <p className="text-lg font-semibold capitalize">
                  Polymer and Textile Engineering · {studentDetails?.level}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="rounded-lg bg-gray-200 p-2">
                    <CalenderIcon className="w-5" />
                  </div>
                  <p className="text-base text-gray-800 font-[500] capitalize">
                    Joined {studentDetails?.registeredDate}
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <h1 className="text-md font-bold ">Contact Information</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

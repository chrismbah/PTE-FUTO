/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardNavbar from "../../../components/navbar/DashboardNavbar";
import { useGetUserInfo } from "../../../hooks/auth/useGetUserInfo";
import Lottie from "lottie-react";
import profile from "../../../json/animation/avatar1.json";
import { Link } from "react-router-dom";
import { Spinner } from "../../../components/loaders/Spinner";
import { BadNetworkIcon } from "../../../components/icons/BadNetworkIcon";
import search from "../../../assets/svg/search.svg";
import notif from "../../../assets/svg/notifications.svg";
export default function Dashboard() {
  const { studentDetails, gettingStudentDetails, gettingStudentDetailsErr } =
    useGetUserInfo();

  return (
    <>
      <DashboardNavbar />

      {studentDetails ? (
        <div className="bg-gray-50 min-h-screen">
          <div className="max-w-[1720px] w-full mx-auto">
            <div className="pt-[90px] sm:pt-[105px] pb-6">
              <div className="grid lg:grid-cols-7">
                <div className="w-full lg:col-span-2 px-4 grid sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-none gap-4 mb-4">
                  <div className="shadow rounded-lg bg-white w-full row-span-1">
                    <div className="px-4">
                      <div className="flex items-center justify-center py-4">
                        {studentDetails &&
                        studentDetails?.profileImageURL.length > 0 ? (
                          <img
                            src={studentDetails?.profileImageURL}
                            alt={studentDetails?.firstName}
                            className="w-36 h-36 rounded-full object-cover"
                          />
                        ) : (
                          <Lottie
                            animationData={profile}
                            loop={false}
                            className="w-28 h-28 md:w-32 md:h-32 sm:w-36 sm:h-36 rounded-full object-cover"
                          />
                        )}
                      </div>
                      <div className="mt-4 mb-8">
                        <p className="text-center text-xs sm:text-base md:text-xll uppercase font-semibold text-gray-900 break-all">
                          {studentDetails?.firstName +
                            " " +
                            studentDetails?.lastName}
                        </p>
                        <p className="text-center text-xss sm:text-ss md:text-sm uppercase font-semibold text-gray-600">
                          {studentDetails?.level === "Visitor"
                            ? "VISITOR"
                            : studentDetails?.level === "Aspirant"
                              ? "ASPIRANT"
                              : studentDetails?.level.slice(
                                  0,
                                  studentDetails?.level.length - 1
                                ) + " LEVEL"}
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center justify-center"
                    >
                      <button className="w-full text-sm sm:text-xs transition duration-200 ease-in-out rounded-b-lg bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 font-semibold">
                        Check Profile
                      </button>
                    </Link>
                  </div>
                  <div className="details bg-white shadow px-4 py-6 rounded-lg w-full lg:h-fit ">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <p className="uppercase text-gray-500 font-bold text-sm">
                          Registered Date
                        </p>
                        <p className="text-gray-800 text-xs font-medium">
                          {studentDetails?.registeredDate}
                        </p>
                      </div>
                      <div>
                        <p className="uppercase text-gray-500 font-bold text-sm">
                          Registered Time
                        </p>
                        <p className="text-gray-800 text-xs font-medium">
                          {studentDetails?.registeredTime}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="uppercase text-gray-500 font-bold text-sm">
                        Email
                      </p>
                      <p className="text-gray-800 text-xs font-medium">
                        {studentDetails?.email}
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="uppercase text-gray-500 font-bold text-sm">
                        Department
                      </p>
                      <p className="text-gray-800 text-xs font-medium">
                        {studentDetails?.level !== "Aspirant" &&
                        studentDetails?.level !== "Visitor"
                          ? "Polymer and Textile Engineering "
                          : "None"}
                      </p>
                    </div>
                    <div className="">
                      <p className="uppercase text-gray-500 font-bold text-sm">
                        Matric No.
                      </p>
                      <p className="text-gray-800 text-xs font-medium">
                        {studentDetails?.regNo ? studentDetails?.regNo : "None"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 px-4 h-full">
                  <div className="mb-4">
                    <div className="grid sss:grid-cols-2 lg:grid-cols-3 gap-4 ">
                      <Link to="/calculate-gpa">
                        <div className="w-full h-[215px] border-2 border-transparent hover:bg-transparent transition duratin-200 ease-in-out hover:border-yellow-200 rounded-lg p-4 bg-yellow-200 flex gap-6 flex-col items-center justify-center">
                          <i className="fa-solid fa-calculator text-yellow-500 text-[40px]"></i>
                          <p className="uppercase text-yellow-500 text-lg font-semibold text-center ">
                            GPA Calculator
                          </p>
                        </div>
                      </Link>
                      <Link to="/course-outlines">
                        <div className="w-full h-[215px] border-2 border-transparent hover:bg-transparent transition duratin-200 ease-in-out hover:border-green-200  rounded-lg p-4 bg-green-300 flex gap-6 flex-col items-center justify-center">
                          <i className="fa-solid fa-book text-green1 text-[40px]"></i>
                          <p className="uppercase text-green1 text-lg font-semibold text-center ">
                            Course Outlines
                          </p>
                        </div>
                      </Link>
                      <Link to="/learning-resources">
                        <div className="w-full h-[210px] border-2 border-transparent hover:bg-transparent transition duratin-200 ease-in-out hover:border-blue-200 rounded-lg p-4 bg-blue-200 flex gap-6 flex-col items-center justify-center">
                          <i className="fa-solid fa-book-open text-blue-500 text-[40px]"></i>
                          <p className="uppercase text-blue-500 text-lg font-semibold text-center ">
                            Learning Resources
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 mmd:gap-4">
                    <div className="shadow rounded-lg w-full py-2 bg-white">
                      <div className="p-2 border-b border-gray-300 font-bold text-gray-800">
                        Recent Activities
                      </div>
                      <div className="w-full flex items-center justify-center py-6 flex-col">
                        <img
                          src={search}
                          alt="Recent Activities"
                          className="w-[220px]"
                        />
                        <p className="text-base text-gray-800 font-bold">
                          No Activities right now.
                        </p>
                      </div>
                    </div>{" "}
                    <div className="shadow rounded-lg w-full py-2 bg-white">
                      <div className="p-2 border-b border-gray-300 font-bold text-gray-800">
                        Notifications
                      </div>
                      <div className="w-full flex items-center justify-center py-6 flex-col">
                        <img
                          src={notif}
                          alt="Notifications"
                          className="w-[220px]"
                        />
                        <p className="text-base text-gray-800 font-bold">
                          No Notifications right now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : gettingStudentDetails ? (
        <div className="w-full h-screen flex items-center justify-center flex-col">
          <Spinner className="w-8 sm:w-10" />
          <p className=" text-sm sm:text-xs md:text-base font-semibold text-gray-800">
            Please wait...
          </p>
        </div>
      ) : (
        gettingStudentDetailsErr && (
          <div className="w-full h-[100vh] flex items-center justify-center flex-col">
            <BadNetworkIcon className="w-6 sm:w-10 md:w-16" />
            <p className=" text-sm sm:text-xs md:text-xs text-gray-800 font-semibold">
              Something went wrong.{" "}
              <button
                className="underline hover:no-underline text-green1"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </p>
          </div>
        )
      )}
    </>
  );
}

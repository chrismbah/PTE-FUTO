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
import { CalculatorIcon } from "../../../components/icons/dashboard/CalculatorIcon";
import { BooksIcon } from "../../../components/icons/dashboard/BooksIcon";
import { FilesIcon } from "../../../components/icons/dashboard/FilesIcon";

export default function Dashboard() {
  const { studentDetails, gettingStudentDetails, gettingStudentDetailsErr } =
    useGetUserInfo();

  return (
    <>
      <DashboardNavbar />

      {studentDetails ? (
        <div className="bg-gray-50 min-h-screen">
          <div className="max-w-[1720px] w-full mx-auto">
            <div className="pt-[80px] ss:pt-[90px] sm:pt-[105px] pb-6">
              <div className="grid lg:grid-cols-7">
                <div className="w-full lg:col-span-2 px-4 grid sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-none gap-4 mb-4">
                  <div className="shadow rounded-lg bg-white w-full row-span-1">
                    <div className="px-4">
                      <div className="flex items-center justify-center pt-4">
                        {studentDetails &&
                        studentDetails?.profileImageURL.length > 0 ? (
                          <img
                            src={studentDetails?.profileImageURL}
                            alt={studentDetails?.firstName}
                            className="border-[2px] border-green1 p-0.5 w-24 h-24 xxss:h-28 xxss:w-28 sm:w-36 sm:h-36 md:w-32 md:h-32 rounded-full object-cover"
                          />
                        ) : (
                          <Lottie
                            animationData={profile}
                            loop={false}
                            className="w-28 h-28 md:w-32 md:h-32 sm:w-36 sm:h-36 rounded-full object-cover"
                          />
                        )}
                      </div>
                      <div className="mt-4 mb-5 sm:mb-8">
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
                    <div className="flex items-center justify-between flex-col h-full">
                      <div className="flex items-center justify-between gap-4 xxss:gap-2 mb-4 w-full flex-col xxss:flex-row">
                        <div className="w-full">
                          <p className="uppercase text-gray-500 font-bold text-ss ss:text-sm">
                            Registered Date
                          </p>
                          <p className="text-gray-800 text-sm ss:text-xs font-medium">
                            {studentDetails?.registeredDate}
                          </p>
                        </div>
                        <div className="w-full xxss:text-right">
                          <p className="uppercase  text-gray-500 font-bold text-ss ss:text-sm">
                            Registered Time
                          </p>
                          <p className="text-gray-800 text-sm ss:text-xs font-medium">
                            {studentDetails?.registeredTime}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 w-full">
                        <p className="uppercase text-gray-500 font-bold text-ss ss:text-sm">
                          Email
                        </p>
                        <p className="text-gray-800 text-sm ss:text-xs font-medium">
                          {studentDetails?.email}
                        </p>
                      </div>
                      <div className="mb-4 w-full">
                        <p className="uppercase text-gray-500 font-bold text-ss ss:text-sm">
                          Department
                        </p>
                        <p className="text-gray-800 text-sm ss:text-xs font-medium">
                          {studentDetails?.level !== "Aspirant" &&
                          studentDetails?.level !== "Visitor"
                            ? "Polymer and Textile Engineering "
                            : "None"}
                        </p>
                      </div>
                      <div className="w-full">
                        <p className="uppercase text-gray-500 font-bold text-ss ss:text-sm">
                          Matric No.
                        </p>
                        <p className="text-gray-800 text-sm ss:text-xs font-medium">
                          {studentDetails?.regNo
                            ? studentDetails?.regNo
                            : "None"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 px-4 h-full">
                  <div className="mb-4">
                    <div className="grid sss:grid-cols-2 lg:grid-cols-3 gap-4 ">
                      <Link to="/calculate-gpa">
                        <div className="w-full min-h-[195px] sss:h-[215px] border-2 border-transparent hover:bg-transparent transition duration-200 ease-in-out hover:border-[#f0abfc] rounded-lg p-4 bg-[#f0abfc] flex gap-6 flex-col items-center justify-center">
                          <CalculatorIcon
                            className=" w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                            color="#a21caf"
                          />
                          <p className="  uppercase text-[#a21caf]  text-base sm:text-md md:text-lg lg:text-base font-semibold text-center ">
                            GPA Calculator
                          </p>
                        </div>
                      </Link>
                      <Link to="/course-outlines">
                        <div className="w-full min-h-[195px] sss:h-[215px] border-2 border-transparent hover:bg-transparent transition duration-200 ease-in-out hover:border-[#bef264]  rounded-lg p-4 bg-[#bef264] flex gap-6 flex-col items-center justify-center">
                          <BooksIcon
                            className=" w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                            color="#00875a"
                          />
                          <p className="  uppercase text-[#00875a] text-base sm:text-md md:text-lg lg:text-base font-semibold text-center ">
                            Course Outlines
                          </p>
                        </div>
                      </Link>
                      <Link to="/learning-resources">
                        <div className="w-full min-h-[195px] sss:h-[215px] border-2 border-transparent hover:bg-transparent transition duration-200 ease-in-out hover:border-[#93c5fd] rounded-lg p-4 bg-[#93c5fd] flex gap-6 flex-col items-center justify-center">
                          <FilesIcon
                            className=" w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                            color="#1d4ed8"
                          />
                          <p className="  uppercase text-[#1d4ed8] text-base sm:text-md md:text-lg lg:text-base font-semibold text-center ">
                            Learning Resources
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 mmd:gap-4">
                    <div className="shadow rounded-lg w-full py-2 bg-white">
                      <div className=" text-sm sm:text-xs md:text-base p-2 border-b border-gray-300 font-bold text-gray-800">
                        Recent Activities
                      </div>
                      <div className="w-full flex items-center justify-center py-6 flex-col">
                        <img
                          src={search}
                          alt="Recent Activities"
                          className="w-[90%] xxss:w-[220px]"
                        />
                        <p className="text-center text-sm sm:text-xs md:text-base text-gray-800 font-bold">
                          No Activities right now.
                        </p>
                      </div>
                    </div>{" "}
                    <div className="shadow rounded-lg w-full py-2 bg-white">
                      <div className=" text-sm sm:text-xs md:text-base p-2 border-b border-gray-300 font-bold text-gray-800">
                        Notifications
                      </div>
                      <div className="w-full flex items-center justify-center py-6 flex-col">
                        <img
                          src={notif}
                          alt="Notifications"
                          className="w-[90%] xxss:w-[220px]"
                        />
                        <p className="text-center text-sm sm:text-xs md:text-base text-gray-800 font-bold">
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
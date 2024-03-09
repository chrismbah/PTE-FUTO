/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dropdown, Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
import { useModalContext } from "../../context/Modal";
import { SignOutModal } from "../modal/SignOutModal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Lottie from "lottie-react";
import avatar from "../../json/animation/avatar1.json";
import { SignOutIcon } from "../icons/nav/SignOutIcon";
import { DashboardIcon } from "../icons/nav/DashboardIcon";
import { ProfileIcon } from "../icons/nav/ProfileIcon";
import { useEffect, useState } from "react";
import { BurgerIcon } from "../icons/nav/BurgerIcon";
import { NavLink } from "react-router-dom";

export const DashboardNavbar = () => {
  const {
    studentDetails,
    user,
    loading,
    gettingStudentDetails,
    gettingStudentDetailsErr,
  } = useGetUserInfo();
  const firstName = studentDetails?.firstName;
  const lastName = studentDetails?.lastName;
  const email = studentDetails?.email;

  const { setOpenSignOutModal } = useModalContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isNavOpen]);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);
  return (
    <>
      <nav className="dashboard w-full fixed top-0 left-0 px-2 py-4 xsm:p-4 bg-white shadow-sm z-10">
        <div className="max-w-[1720px] w-full mx-auto">
          <div className="flex items-center flex-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleMenu}
                className="focus:outline-none bg-transparent mr-2"
              >
                <BurgerIcon className="w-6 h-6" />
              </button>

              <a href="/">
                <div className="logo flex xsss:pr-4 sm:pr-8 z-[109990]">
                  <img
                    src={logo}
                    className="mr-2 w-8 h-8 ss:w-10 ss:h-10 sm:w-12 sm:h-12"
                    alt="PTE Logo"
                  />
                  <div className="mr-2 text-black w-[100%] hidden xsss:block sm:block sm:w-[70%] self-center whitespace-wrap text-xss ss:text-ss lg:text-sm font-[900]">
                    Polymer and Textile <br /> Engineering, FUTO
                  </div>
                </div>
              </a>

              <div className="border-l-2 border-gray-500">
                <p className=" text-ss sm:text-xs ml-2 font-semibold text-black">
                  Dashboard
                </p>
              </div>
            </div>
            <div
              onClick={toggleMenu}
              className={`fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm transition duration-500 transform ${isNavOpen ? "block" : "hidden opacity-0"} z-[3]  `}
            ></div>
            <div
              className={`dashboard-links px-2 py-4 sm:p-4 fixed top-0 left-0 w-[240px] sm:w-[270px] h-screen bg-white shadow z-[6] transition duration-500 ease-in-out transform ${
                isNavOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justfiy-start gap-2 mb-6">
                <button
                  onClick={toggleMenu}
                  className="focus:outline-none bg-transparent"
                >
                  <BurgerIcon className="w-6 h-6" />
                </button>
                <div className="">
                  <a href="/">
                    <div className="logo flex">
                      <img
                        src={logo}
                        className="mr-2 w-8 h-8 ss:w-10 ss:h-10"
                        alt="PTE Logo"
                      />
                      <div className="mr-2 text-black w-[100%] sm:w-[70%] self-center whitespace-wrap text-xss ss:text-ss lg:text-sm font-[900]">
                        Polymer and Textile <br /> Engineering, FUTO
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-bold text-gray-700 uppercase text-ss ss:text-sm sm:text-xs">
                  Links
                </p>
              </div>
              <div className="flex flex-col justify-start gap-2 text-ss ss:text-sm sm:text-xs font-bold text-gray-700">
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  to="/dashboard"
                  className={
                    "w-full p-3 hover:text-green1 hover:bg-gray-100 rounded-md transition"
                  }
                >
                  Dashboard
                </NavLink>{" "}
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  to="/calculate-gpa"
                  className={
                    "w-full p-3 hover:text-green1 hover:bg-gray-100 rounded-md transition"
                  }
                >
                  GPA Calculator
                </NavLink>{" "}
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  to="/course-outlines"
                  className={
                    "w-full p-3 hover:text-green1 hover:bg-gray-100 rounded-md transition"
                  }
                >
                  Course Outlines
                </NavLink>
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  to="/learning-resources"
                  className={
                    "w-full p-3 hover:text-green1 hover:bg-gray-100 rounded-md transition"
                  }
                >
                  Learning Resources
                </NavLink>{" "}
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  to="/profile"
                  className={
                    "w-full p-3 hover:text-green1 hover:bg-gray-100 rounded-md transition"
                  }
                >
                  Profile
                </NavLink>
              </div>
            </div>
            {loading ? (
              <Skeleton
                circle={true}
                className="h-[34px] w-[34px] md:h-[36px] md:w-[36px]"
              />
            ) : user ? (
              <Dropdown
                arrowIcon={false}
                inline
                className="z-[9999] "
                label={
                  <>
                    {studentDetails &&
                    studentDetails.profileImageURL.length > 0 ? (
                      <div
                        className="h-[30px] w-[30px] sm:h-[33px] sm:w-[33px]  md:h-[36px] md:w-[36px]
                       rounded-full border bg-gray-100"
                      >
                        <img
                          src={studentDetails.profileImageURL}
                          alt="Profile"
                          loading="lazy"
                          onLoad={() => console.log("Loaded")}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    ) : (
                      studentDetails && (
                        <Lottie
                          animationData={avatar}
                          loop={false}
                          className="h-[32px] w-[32px] md:h-[34px] md:w-[34px]"
                        />
                      )
                    )}
                  </>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm sm:text-xs font-bold text-gray-700">
                    {studentDetails && firstName} {studentDetails && lastName}
                  </span>
                  <span className="block truncate text-ss sm:text-sm text-gray-700 font-medium">
                    {studentDetails && email}
                  </span>
                </Dropdown.Header>
                <Link to={"/dashboard"}>
                  <Dropdown.Item className="group transition duration-200 ease-in-out">
                    <div className="flex items-center justify-start gap-1">
                      <DashboardIcon className="w-5 group-hover:scale-110 transition duration-200 ease-in-out " />{" "}
                      <span className="text-ss sm:text-sm font-medium text-gray-700 group-hover:font-semibold">
                        Dashboard
                      </span>
                    </div>
                  </Dropdown.Item>
                </Link>
                <Link to="/profile">
                  <Dropdown.Item className="group transition duration-200 ease-in-out">
                    <div className="flex items-center justify-start gap-1">
                      <ProfileIcon className="w-5 group-hover:scale-110 transition duration-200 ease-in-out " />{" "}
                      <span className="text-ss sm:text-sm font-medium text-gray-700 group-hover:font-semibold">
                        Profile
                      </span>
                    </div>{" "}
                  </Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => setOpenSignOutModal(true)}
                  className="group transition duration-200 ease-in-out"
                >
                  <div className="flex items-center justify-start gap-1">
                    <SignOutIcon className=" w-5 group-hover:scale-110 transition duration-200 ease-in-out " />{" "}
                    <span className="text-ss sm:text-sm font-medium text-gray-700 group-hover:font-semibold">
                      Sign Out
                    </span>
                  </div>
                </Dropdown.Item>
              </Dropdown>
            ) : gettingStudentDetails || gettingStudentDetailsErr ? (
              <Skeleton
                circle={true}
                className="h-[34px] w-[34px] md:h-[36px] md:w-[36px]"
              />
            ) : (
              <Button
                theme={customButtonTheme}
                color="primary"
                size="md"
                className="focus:outline-none"
              >
                <Link to={"/login"}>Login</Link>
              </Button>
            )}{" "}
          </div>
        </div>
      </nav>
      <SignOutModal />
    </>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Dropdown, Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { customDropdownTheme } from "../../themes/customDropdown";
import { NavLink, Link } from "react-router-dom";
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
import { useState, useEffect } from "react";
import { BurgerIcon } from "../icons/nav/BurgerIcon";

export default function Nav() {
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
      <nav className="w-full fixed top-0 left-0 px-2 py-4 xsm:p-4 bg-white shadow-sm z-10">
        <div className="max-w-[1520px] w-full mx-auto">
          <div className="flex items-center flex-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleMenu}
                className="focus:outline-none bg-transparent mr-2 xsm:hidden"
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
                  <div className="mr-2 text-black w-[100%] sm:w-[70%] self-center whitespace-wrap text-xss ss:text-ss lg:text-sm font-[900]">
                    Polymer and Textile <br /> Engineering, FUTO
                  </div>
                </div>
              </a>

              <div
                className={`inline-nav border-l-2 border-gray-500 items-center gap-2 hidden xsm:flex ${isNavOpen && "xsm:hidden"}`}
              >
                <NavLink
                  to={"/"}
                  className=" text-sm md:text-xs ml-2 font-semibold text-gray-700 px-2"
                >
                  Home
                </NavLink>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <p className="pt-1 md:pt-0.5 text-sm md:text-xs ml-0 font-semibold text-gray-700 px-2">
                      About
                    </p>
                  }
                  theme={customDropdownTheme}
                >
                  <NavLink to={"/about/about-us"}>
                    <Dropdown.Item>
                      <p className="text-ss md:text-sm font-semibold text-gray-700">
                        About Us
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/about/philosophy-and-objectives"}>
                    <Dropdown.Item>
                      <p className="text-ss md:text-sm font-semibold text-gray-700">
                        Philosophy and Objectives
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/about/admission"}>
                    <Dropdown.Item>
                      <p className="text-ss md:text-sm font-semibold text-gray-700">
                        Admission
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                </Dropdown>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <p className="pt-1 md:pt-0.5 text-sm md:text-xs ml-0 font-semibold text-gray-700 px-2">
                      Academics
                    </p>
                  }
                  theme={customDropdownTheme}
                >
                  <NavLink to={"/calculate-gpa"}>
                    <Dropdown.Item>
                      <p className="text-ss md:text-sm font-semibold text-gray-700">
                        GPA Calculator
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/learning-resources"}>
                    <Dropdown.Item>
                      <p className="text-ss md:text-sm font-semibold text-gray-700">
                        Learning Resources
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/course-outlines"}>
                    <Dropdown.Item>
                      <p className="text-ss md:text-sm font-semibold text-gray-700">
                        Course Outlines
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                </Dropdown>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <p className="pt-1 md:pt-0.5 text-sm md:text-xs font-semibold text-gray-700">
                      Students
                    </p>
                  }
                  theme={customDropdownTheme}
                >
                  <NavLink to={"/students/class-representatives"}>
                    <Dropdown.Item>
                      <p className="text-ss md:text-sm font-semibold text-gray-700">
                        Class Representatives
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/students/project-team"}>
                    <Dropdown.Item>
                      <p className="text-ss md:text-sm font-semibold text-gray-700">
                        Project Team
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                </Dropdown>
                <NavLink
                  to={"/blog"}
                  className=" text-sm md:text-xs font-semibold text-gray-700 px-2 pt-0.5 md:pt-1"
                >
                  Blog
                </NavLink>
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
              <div className="mobile-nav flex items-center justfiy-start gap-2 mb-6">
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
              <div className="w-full flex flex-col justify-start gap-2 text-sm font-bold text-gray-700">
                <NavLink
                  to={"/"}
                  className="rounded-md hover:bg-gray-100 w-full p-2 hover:text-green1 "
                >
                  Home
                </NavLink>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <p className="text-left rounded-md hover:bg-gray-100 w-full p-2 hover:text-green1 ">
                      About
                    </p>
                  }
                  theme={customDropdownTheme}
                >
                  <NavLink to={"/about/about-us"}>
                    <Dropdown.Item>
                      <p className="rounded-md hover:bg-gray-100 w-full text-left hover:text-green1  ">
                        About Us
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/about/philosophy-and-objectives"}>
                    <Dropdown.Item>
                      <p className=" rounded-md hover:bg-gray-100 w-full text-left hover:text-green1 ">
                        Philosophy and Objectives
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/about/admission"}>
                    <Dropdown.Item>
                      <p className="rounded-md hover:bg-gray-100 w-full text-left hover:text-green1  ">
                        Admission
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                </Dropdown>

                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <p className="text-left rounded-md hover:bg-gray-100 w-full p-2 hover:text-green1">
                      Academics
                    </p>
                  }
                  theme={customDropdownTheme}
                >
                  <NavLink to={"/calculate-gpa"}>
                    <Dropdown.Item>
                      <p className=" rounded-md hover:bg-gray-100 w-full text-left hover:text-green1 ">
                        GPA Calculator
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/learning-resources"}>
                    <Dropdown.Item>
                      <p className="rounded-md hover:bg-gray-100 w-full text-left hover:text-green1  ">
                        Learning Resources
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/course-outlines"}>
                    <Dropdown.Item>
                      <p className="rounded-md hover:bg-gray-100 w-full text-left hover:text-green1  ">
                        Course Outlines
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                </Dropdown>

                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <p className="rounded-md hover:bg-gray-100 w-full p-2 hover:text-green1 text-left ">
                      Students
                    </p>
                  }
                  theme={customDropdownTheme}
                >
                  <NavLink to={"/students/class-representatives"}>
                    <Dropdown.Item>
                      <p className="rounded-md hover:bg-gray-100 w-full text-left hover:text-green1  ">
                        Class Representatives
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                  <NavLink to={"/students/project-team"}>
                    <Dropdown.Item>
                      <p className="rounded-md hover:bg-gray-100 w-full text-left hover:text-green1 ">
                        Project Team
                      </p>
                    </Dropdown.Item>
                  </NavLink>
                </Dropdown>

                <NavLink
                  to={"/blog"}
                  className="rounded-md hover:bg-gray-100 w-full p-2 hover:text-green1 "
                >
                  Blog
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
            )}
          </div>
        </div>
      </nav>
      <SignOutModal />
    </>
  );
}

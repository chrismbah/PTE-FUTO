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

export default function DashboardNavbar() {
  const { studentDetails, user, loading, getUserInfo } = useGetUserInfo();
  const firstName = studentDetails?.firstName;
  const lastName = studentDetails?.lastName;
  const email = studentDetails?.email;

  const { setOpenSignOutModal } = useModalContext();
  useEffect(() => {
    getUserInfo();
  }, [studentDetails, user]);
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
        <div className="max-w-[1720px] w-full mx-auto">
          <div className="flex items-center flex-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleMenu}
                className="text-gray-500 w-10 h-10 relative focus:outline-none bg-transparent"
              >
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${isNavOpen ? "rotate-45" : "-translate-y-1.5"}`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${isNavOpen && "opacity-0"}`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-6 bg-black transform  transition duration-500 ease-in-out ${isNavOpen ? "-rotate-45" : "translate-y-1.5"}`}
                  ></span>
                </div>
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
              className={`dashboard-links p-4 fixed top-0 left-0 w-[250px] sm:w-[280px] h-screen bg-white shadow z-[4] transition duration-500 ease-in-out transform ${
                isNavOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justfiy-start gap-2">
                <button
                  onClick={toggleMenu}
                  className="text-gray-500 w-10 h-10 relative focus:outline-none bg-transparent z-[5]"
                >
                  <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                      aria-hidden="true"
                      className={`block absolute h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${isNavOpen ? "rotate-45" : "-translate-y-1.5"}`}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={`block absolute  h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${isNavOpen && "opacity-0"}`}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={`block absolute  h-0.5 w-6 bg-black transform  transition duration-500 ease-in-out ${isNavOpen ? "-rotate-45" : "translate-y-1.5"}`}
                    ></span>
                  </div>
                </button>
                <div className="">
                  <a href="/">
                    <div className="logo flex">
                      <img
                        src={logo}
                        className="mr-2 w-8 h-8 ss:w-10 ss:h-10"
                        alt="PTE Logo"
                      />
                      <div className="mr-2 text-black w-[100%] hidden xsss:block sm:block sm:w-[70%] self-center whitespace-wrap text-xss ss:text-ss lg:text-sm font-[900]">
                        Polymer and Textile <br /> Engineering, FUTO
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="font-semibold text-gray-700 uppercase text-sm">
                <p>Links</p>
              </div>
            </div>

            {loading ? (
              <Skeleton
                circle={true}
                className="h-[34px] w-[34px] md:h-[36px] md:w-[36px]"
              />
            ) : user ? (
              studentDetails && studentDetails.profileImageURL.length > 0 ? (
                <Dropdown
                  arrowIcon={false}
                  inline
                  className="z-[9999] "
                  label={
                    <>
                      <div
                        className="h-[29px] w-[29px] sm:h-[33px] sm:w-[33px]  md:h-[36px] md:w-[36px]
                       rounded-full border border-green1 p-[1px] bg-gray-50"
                      >
                        <img
                          src={studentDetails.profileImageURL}
                          alt="Profile"
                          loading="lazy"
                          onLoad={() => console.log("Loaded")}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </>
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm font-[600]">
                      {studentDetails && firstName} {studentDetails && lastName}
                    </span>
                    <span className="block truncate text-sm">
                      {studentDetails && email}
                    </span>
                  </Dropdown.Header>
                  <Link to={"/dashboard"}>
                    <Dropdown.Item>
                      <div className="flex items-center justify-start">
                        <DashboardIcon className=" -ml-0.5 w-5" />{" "}
                        <span>Dashboard</span>
                      </div>
                    </Dropdown.Item>
                  </Link>
                  <Link to="/profile">
                    <Dropdown.Item>
                      <div className="flex items-center justify-start gap-1">
                        <ProfileIcon className=" ml-0.5  w-3 -mt-0.5" />{" "}
                        <span>Profile</span>
                      </div>{" "}
                    </Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => setOpenSignOutModal(true)}>
                    <div className="flex items-center justify-start gap-0.5">
                      <SignOutIcon className=" w-4" /> <span>Sign Out</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown>
              ) : studentDetails ? (
                <Dropdown
                  arrowIcon={false}
                  inline
                  className="z-[9999999]"
                  label={
                    <Lottie
                      animationData={avatar}
                      loop={false}
                      className="h-[32px] w-[32px] md:h-[34px] md:w-[34px]"
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm font-[600]">
                      {studentDetails && firstName} {studentDetails && lastName}
                    </span>
                    <span className="block truncate text-sm">
                      {studentDetails && email}
                    </span>
                  </Dropdown.Header>
                  <Link to={"/dashboard"}>
                    <Dropdown.Item>
                      <div className="flex items-center justify-start">
                        <DashboardIcon className=" -ml-0.5 w-5" />{" "}
                        <span>Dashboard</span>
                      </div>
                    </Dropdown.Item>
                  </Link>
                  <Link to="/profile">
                    <Dropdown.Item>
                      <div className="flex items-center justify-start gap-1">
                        <ProfileIcon className=" ml-0.5  w-3 -mt-0.5" />{" "}
                        <span>Profile</span>
                      </div>{" "}
                    </Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => setOpenSignOutModal(true)}>
                    <div className="flex items-center justify-start gap-0.5">
                      <SignOutIcon className=" w-4" /> <span>Sign Out</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown>
              ) : (
                <Skeleton
                  circle={true}
                  className="h-[34px] w-[34px] md:h-[36px] md:w-[36px]"
                />
              )
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

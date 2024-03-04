/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { Dropdown, Navbar, Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { customNavTheme } from "../../themes/customNav";
import { customDropdownTheme } from "../../themes/customDropdown";
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

export default function Nav() {
  const { getUserInfo, studentDetails, user, loading } = useGetUserInfo();
  const firstName = studentDetails?.firstName;
  const lastName = studentDetails?.lastName;
  const email = studentDetails?.email;

  const { setOpenSignOutModal } = useModalContext();
  useEffect(() => {
    getUserInfo();
  }, [user, studentDetails]);

  return (
    <nav className="">
      <Navbar
        fluid
        // rounded
        theme={customNavTheme}
        className="fixed w-full shadow-sm z-[9]"
      >
        <Navbar.Brand href="/" className="md:w-[30%] w-[50%]">
          <div className="flex ">
            <img
              src={logo}
              className="mr-1 sm:mr-3 h-10 ss:h-14 sm:h-16"
              alt="PTE Logo"
            />
            <div className="text-black w-[100%] sm:w-[70%] self-center whitespace-wrap text-[10px] xss:text-[13px] ss:text-base lg:text-lg font-[900]">
              Polymer and Textile Engineering, FUTO
            </div>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {loading ? (
            <Skeleton
              circle={true}
              className="h-[34px] w-[34px] md:h-[36px] md:w-[36px]"
            />
          ) : user ? (
            studentDetails && studentDetails.profileImageURL.length > 1 ? (
              <Dropdown
                arrowIcon={false}
                inline
                className="z-[9999999] "
                label={
                  <>
                    <div
                      className="h-[34px] w-[34px] md:h-[36px] md:w-[36px] bg-gray-200 
                       rounded-full border border-green1 p-[1px]"
                    >
                      <img
                        src={studentDetails.profileImageURL}
                        alt="Profile"
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
                    Dashboard <DashboardIcon className="ml-1 w-5" />
                  </Dropdown.Item>
                </Link>
                <Link to="/profile">
                  <Dropdown.Item>
                    {" "}
                    Profile <ProfileIcon className="ml-1 w-3 -mt-0.5" />
                  </Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setOpenSignOutModal(true)}>
                  Sign out <SignOutIcon className="ml-1 w-4" />
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
                    Dashboard <DashboardIcon className="ml-1 w-5" />
                  </Dropdown.Item>
                </Link>
                <Link to="/profile">
                  <Dropdown.Item>
                    {" "}
                    Profile <ProfileIcon className="ml-1 w-3 -mt-0.5" />
                  </Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setOpenSignOutModal(true)}>
                  Sign out <SignOutIcon className="ml-1 w-4" />
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

          <Navbar.Toggle className="ml-2 focus:outline-green1 w-9 h-9" />
        </div>
        <Navbar.Collapse className="xmd:block xmd:w-auto z-[99999999]">
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown
              arrowIcon={true}
              inline
              label={"About"}
              theme={customDropdownTheme}
            >
              <Link to={"/about/about-us"}>
                <Dropdown.Item>About Us</Dropdown.Item>
              </Link>
              <Link to={"/about/philosophy-and-objectives"}>
                <Dropdown.Item>Philosophy and Objectives</Dropdown.Item>
              </Link>
              <Link to={"/about/admission"}>
                <Dropdown.Item>Admission</Dropdown.Item>
              </Link>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown
              arrowIcon={true}
              inline
              label={"Academics"}
              theme={customDropdownTheme}
            >
              <Link to={"/calculate-gpa"}>
                <Dropdown.Item>GPA Calculator</Dropdown.Item>
              </Link>
              <Link to={"/course-outlines"}>
                <Dropdown.Item>Course Outlines</Dropdown.Item>
              </Link>
              <Link to={"/learning-resources"}>
                <Dropdown.Item>Learning Resources</Dropdown.Item>
              </Link>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown
              arrowIcon={true}
              inline
              label={"Students"}
              theme={customDropdownTheme}
            >
              <Link to={"students/class-representatives"}>
                <Dropdown.Item>Class Representatives</Dropdown.Item>
              </Link>
              <Link to={"/students/project-team"}>
                <Dropdown.Item>Project Team</Dropdown.Item>
              </Link>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <SignOutModal />
    </nav>
  );
}

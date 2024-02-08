"use client";
import { useEffect } from "react";
import { Dropdown, Navbar, Button, Avatar } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { customNavTheme } from "../../themes/customNav";
import { customDropdownTheme } from "../../themes/customDropdown";
import { customAvatar } from "../../themes/customAvatar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import userProfileIcon from "../../assets/svg/icons/userProfile.svg";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
import { useModalContext } from "../../context/Modal";
import { SignOutModal } from "../modal/SignOutModal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Nav() {
  const { getUserInfo, studentDetails, user, loading } = useGetUserInfo();
  const firstName = studentDetails?.firstName;
  const lastName = studentDetails?.lastName;
  const email = studentDetails?.email;

  const { setOpenModal } = useModalContext();
  useEffect(() => {
    getUserInfo();
  }, [user]);

  return (
    <nav className="">
      <Navbar
        fluid
        rounded
        theme={customNavTheme}
        className="fixed w-full shadow-sm z-[9999]"
      >
        <Navbar.Brand href="/" className="md:w-[30%] w-[50%]">
          <div className="flex ">
            <img
              src={logo}
              className="mr-1 sm:mr-3 h-10 ss:h-14 sm:h-16"
              alt="PTE Logo"
            />
            <div className=" w-[100%] sm:w-[70%] self-center whitespace-wrap text-[10px] xss:text-[13px] ss:text-base md:text-lg font-[800] dark:text-white">
              Polymer and Textile Engineering, FUTO
            </div>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              className="z-[9999999] "
              label={
                <Avatar
                  alt="User"
                  img={userProfileIcon}
                  rounded
                  theme={customAvatar}
                  size={"md"}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {/* {loading ? "Loading..." : firstName? firstName   + lastName : "Sorry could not get student info."} */}
                  {studentDetails ? firstName : "Loading..."}{" "}
                  {studentDetails && lastName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {studentDetails && email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => setOpenModal(true)}>
                Sign Out
              </Dropdown.Item>
            </Dropdown>
          ) : loading ? (
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
              <Dropdown.Item>About Us</Dropdown.Item>
              <Dropdown.Item>Our Mission</Dropdown.Item>
              <Dropdown.Item>Our Vision</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown
              arrowIcon={true}
              inline
              label={"Academics"}
              theme={customDropdownTheme}
            >
              <Dropdown.Item>
                <Link to={"/course-outlines"}> Course Outlines</Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/learning-resources"}>Learning Resources</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/calculate-gpa"}>GPA Calculator</Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>Student Bodies</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown
              arrowIcon={true}
              inline
              label={"Students"}
              theme={customDropdownTheme}
            >
              <Dropdown.Item>About Us</Dropdown.Item>
              <Dropdown.Item>Our Mission</Dropdown.Item>
              <Dropdown.Item>Our Vision</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Student Bodies</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/">Blog</Navbar.Link>
          <Navbar.Link href="/">Events</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <SignOutModal />
    </nav>
  );
}

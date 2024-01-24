"use client";
import { useEffect } from "react";
import { Dropdown, Navbar, Button, Avatar } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { customNavTheme } from "../../themes/customNav";
import { customDropdownTheme } from "../../themes/customDropdown";
import { customAvatar } from "../../themes/customAvatar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import userProfileIcon from "../../assets/svg/profile/userProfile.svg";
import NavSpinner from "../loaders/NavSpinner";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useSignOutUser } from "../../hooks/useSignOutUser";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  const { signOutLoading, signOutUser } = useSignOutUser();
  const { getUserInfo, studentDetails } = useGetUserInfo();
  useEffect(() => {
    getUserInfo();
  }, [user]);

  return (
    <nav className="">
      <Navbar
        fluid
        rounded
        theme={customNavTheme}
        className="fixed w-full shadow-sm z-[99999999]"
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
              className="z-[99999999999]"
              label={
                <Avatar
                  alt="User Profile"
                  img={userProfileIcon}
                  rounded
                  theme={customAvatar}
                  size={"md"}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {" "}
                  {studentDetails?.firstName} {studentDetails?.lastName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {studentDetails?.email},
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={signOutUser}>
                {signOutLoading ? "Signing Out...." : "SignOut"}
              </Dropdown.Item>
            </Dropdown>
          ) : loading ? (
            <NavSpinner />
          ) : (
            <Button
              theme={customButtonTheme}
              color="primary"
              size="md"
              className="focus:outline-none"
            >
              <Link to={"/login"}>Log In</Link>
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
              {/* <Dropdown.Divider /> */}
              {/* <Dropdown.Item>Student Bodies</Dropdown.Item> */}
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
                <Link to={"/calculate-gpa"}>GPA Calculator</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <Link to={"/course-outlines"}> Course Outlines</Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>Our Vision</Dropdown.Item>
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
    </nav>
  );
}

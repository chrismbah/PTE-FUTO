"use client";
import { Dropdown, Navbar, Button } from "flowbite-react";
import { customButtonTheme } from "../themes/customButtton";
import { customNavTheme } from "../themes/customNav";
import { customDropdownTheme } from "../themes/customDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png"

export default function Nav() {
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
          <Button
            theme={customButtonTheme}
            color="primary"
            size="md"
            className="focus:outline-none"
          >
            <Link to={"/login"}>Log In</Link>
          </Button>
          <Navbar.Toggle className="ml-2 focus:outline-green1" />
        </div>
        <Navbar.Collapse className="xmd:block xmd:w-auto z-[99999999]">
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="#">
            <Dropdown
              arrowIcon={true}
              inline
              label={"Alumini"}
              theme={customDropdownTheme}
            >
              <Dropdown.Item>About Us</Dropdown.Item>
              <Dropdown.Item>Our Mission</Dropdown.Item>
              <Dropdown.Item>Our Vision</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Student Bodies</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

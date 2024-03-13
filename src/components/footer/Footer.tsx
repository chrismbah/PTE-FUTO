import logo from "../../assets/logo/logo.png";
import { WebIcon } from "../icons/socials/WebIcon";
import { XIcon } from "../icons/socials/XIcon";
import { FacebookIcon } from "../icons/socials/FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-green1 text-white">
      <div className="box-width p-4 py-6 lg:py-8 xsm:px-14">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={logo} className="w-8 sm:w-10 mr-2" alt="PTE Logo" />
              <span className="self-center text-xs xsm:text-base font-semibold whitespace-wrap">
                Polymer and Textile Engineering,{" "}
                <br className="hidden md:block" /> FUTO
              </span>
            </a>
          </div>
          <div className="grid xxss:grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-2 sm:mb-3 text-ss sm:text-sm md:text-xs font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-white font-medium text-xss sm:text-ss md:text-sm ">
                <li className=" mb-1 sm:mb-2">
                  <a href="https://futo.edu.ng/" className="hover:underline">
                    FUTO Portal
                  </a>
                </li>
                <li>
                  <a href="https://futo.edu.ng/" className="hover:underline">
                    FUTO Website
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 sm:mb-3 text-ss sm:text-sm md:text-xs font-semibold text-white uppercase">
                Academics
              </h2>
              <ul className="text-white font-medium text-xss sm:text-ss md:text-sm">
                <li className=" mb-1 sm:mb-2">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    GPA Calculator
                  </a>
                </li>
                <li className=" mb-1 sm:mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Course Outlines
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Learning Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 sm:mb-3 text-ss sm:text-sm md:text-xs font-semibold text-white uppercase">
                Useful Links
              </h2>
              <ul className="text-white font-medium text-xss sm:text-ss md:text-sm">
                <li className=" mb-1 sm:mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className=" mb-1 sm:mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Class Representatives
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col justify-start items-start">
            <span className="text-xss ss:text-ss md:text-sm text-white sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="/" className="hover:underline">
                PTE-FUTO.
              </a>
            </span>
            <span className="text-xss ss:text-ss md:text-sm text-white sm:text-center">
              Created and Designed by{" "}
              <a
                href="https://chrismbah.vercel.app/"
                target="_"
                className="hover:underline"
              >
                Christian Mbah.
              </a>{" "}
              All Rights Reserved.
            </span>
          </div>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <FacebookIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 fill-white" />
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-2"
            >
              <XIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-2"
            >
              <WebIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

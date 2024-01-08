import {Link} from "react-router-dom"
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import logo from "../../assets/logo/logo.png"


export default function LoginForm() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center sm:justify-start section ">
      <div className="">
        <form className="p-3 ss:p-7 max-w-lg sm:min-w-[35rem] bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-center mb-1 ">
                <img src={logo} alt="PTE Logo" className=" w-[65px] xss:w-[80px] h-auto " />
            </div>
            <div className="text-center mb-3">
                <p className="font-bold text-sm text-wrap">Welcome to Polymer and Textile Engineering Department</p>
                <p className="font-bold text-sm ">FUTO</p>
            </div>
          <div className="mb-5">
            <label className="block mb-2 text-base ss:text-md font-semibold dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-200  text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="mbahchris22@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="text-base ss:text-md font-semibold block mb-2  dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start mb-5">
           
            <p className="text-sm">New Student ? <Link to={"/signup"} className="text-green1 hover:underline">Sign Up</Link> </p>
          </div>
          <Button
            theme={customButtonTheme}
            color="primary"
            size="md"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

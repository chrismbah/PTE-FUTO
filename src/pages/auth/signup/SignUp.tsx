import { useState } from "react";
import logo from "../../../assets/logo/logo.png";
import ButtonSpinner from "../../../components/loaders/ButtonSpinner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignUpForm } from "../../../models/form";
import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "../../../validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useToast } from "../../../hooks/useToast";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUpForm>({ resolver: yupResolver(signUpSchema) });

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const userInfoRef = collection(db, "userInfo");

  const signUpUser = async (data: ISignUpForm) => {
    setLoading(true);
    try {
      const { email, password, regNo, firstName, lastName, level } = data;

      //*Stores user info in firestore database
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const userID = user.user.uid;
      // console.log(userID)

      await addDoc(userInfoRef, {
        userID: userID,
        firstName: firstName,
        lastName: lastName,
        email: email,
        regNo: regNo,
        level: level,
      });
      setLoading(false);
      navigate("/");
      reset();

      //! Notifying user of registeration
      useToast("success", "Registeration Successful");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        useToast("error", "Email Account already in use");
      } else {
        useToast("error", "Something went wrong. Please try again");
      }
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-50 w-full min-h-screen flex items-center justify-center auth-section pt-20">
      <div className=" bg-white rounded-lg shadow my-10 md:mt-0 w-[32rem] px-6 py-4 sm:px-8 sm:py-4">
        <form onSubmit={handleSubmit(signUpUser)}>
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="PTE LOGO" className="w-14 h-14" />
            <div className="text-center mb-4">
              <p className="font-bold text-sm text-wrap">
                Welcome to Polymer and Textile Engineering Department
              </p>
              <p className="font-bold text-sm ">FUTO</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green1 peer"
                placeholder=" "
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="form-error-message">{errors.firstName.message}</p>
              )}
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green1 peer"
                placeholder=" "
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="form-error-message">{errors.lastName.message}</p>
              )}

              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last Name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="number"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green1 peer"
                placeholder=" "
                {...register("regNo")}
              />
              <label
                htmlFor="floating_regNo"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reg No. ( optional )
              </label>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <label htmlFor="underline_select" className="sr-only">
                Level
              </label>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-green1 peer"
                {...register("level")}
              >
                <option selected value="" disabled>
                  Select Your Level
                </option>
                <option value="aspirant">Aspirant</option>
                <option value="100L">100L</option>
                <option value="200L">200L</option>
                <option value="300L">300L</option>
                <option value="400L">400L</option>
                <option value="500L">500L</option>
                <option value="other">Other</option>
              </select>
              {errors.level && (
                <p className="form-error-message">{errors.level.message}</p>
              )}
            </div>
          </div>
          <div className="relative z-0 w-full mb-4 group">
            <input
              type="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green1 peer"
              placeholder=" "
              {...register("email")}
            />
            {errors.email && (
              <p className="form-error-message">{errors.email.message}</p>
            )}

            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green1 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green1 peer"
                placeholder=" "
                {...register("password")}
              />
              {errors.password && (
                <p className="form-error-message">{errors.password.message}</p>
              )}

              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green1 peer"
                placeholder=" "
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="form-error-message">
                  {errors.confirmPassword.message}
                </p>
              )}

              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mb-4 text-white bg-green1 hover:bg-green2  font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center"
          >
            {loading ? <ButtonSpinner /> : "Sign Up"}
          </button>
          <div className="pt-3 ">
            <p className="text-sm font-light text-gray-500">
              Already have an account ?{" "}
              <Link
                className="font-medium text-green1 hover:underline "
                to="/login"
              >
                Login
              </Link>
            </p>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

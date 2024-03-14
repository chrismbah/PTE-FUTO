import logo from "../../../assets/logo/logo.png";
import ButtonSpinner from "../../../components/loaders/ButtonSpinner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignUpForm } from "../../../models/auth/form";
import { Link } from "react-router-dom";
import { signUpSchema } from "../../../validation";
import useSignUpUser from "../../../hooks/auth/useSignUpUser";

export default function SignUp() {
  const { loading, signUpUser } = useSignUpUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({ resolver: yupResolver(signUpSchema) });

  return (
    <div className="bg-gray-50">
      <div className=" w-full min-h-screen flex items-center justify-center px-3 sm:px-10 pt-10">
        <div className=" bg-white rounded-lg shadow sm:min-w-[600px]">
          <form
            onSubmit={handleSubmit(signUpUser)}
            className=" px-6 py-4 sm:px-8 sm:py-4"
          >
            <div className="flex flex-col items-center justify-center">
              <img src={logo} alt="PTE LOGO" className="w-14 h-14" />
              <div className="text-center mb-6 mt-2">
                <p className="font-bold text-xs text-wrap">
                  Welcome to Polymer and Textile Engineering Department
                </p>
                <p className="font-bold text-xs">FUTO</p>
              </div>
            </div>
            <div className="grid xxss:grid-cols-2 xxss:gap-6">
              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="text"
                  id="floating_first_name"
                  className="block py-2.5 px-1.5 w-full font-semibold text-ss sm:text-sm text-gray-900  bg-transparent border rounded-lg border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green1 peer"
                  placeholder=""
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="form-error-message">
                    {errors.firstName.message}
                  </p>
                )}
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-semibold font-semibold absolute text-ss sm:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-1.5 -z-10 origin-[0] peer-focus:start-1.5 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="text"
                  id="floating_last_name"
                  className="block py-2.5 px-1.5 w-full font-semibold text-ss sm:text-sm text-gray-900  bg-transparent border rounded-lg border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green1 peer"
                  placeholder=" "
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="form-error-message">
                    {errors.lastName.message}
                  </p>
                )}

                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-semibold font-semibold absolute  text-ss sm:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-1.5 -z-10 origin-[0] peer-focus:start-1.5 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className="grid xxss:grid-cols-2 xxss:gap-6">
              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="number"
                  id="floating_phone"
                  className="block py-2.5 px-1.5 w-full font-semibold text-ss sm:text-sm text-gray-900  bg-transparent border rounded-lg border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green1 peer"
                  placeholder=" "
                  {...register("regNo")}
                />
                <label
                  htmlFor="floating_regNo"
                  className="peer-focus:font-semibold font-semibold absolute  text-ss sm:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-1.5 -z-10 origin-[0] peer-focus:start-1.5 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Matric No. ( optional )
                </label>
              </div>
              <div className="relative z-0 w-full mb-4 group">
                <label htmlFor="underline_select" className="sr-only">
                  Level
                </label>
                <select
                  id="underline_select"
                  className="block py-2.5 px-1.5 w-full font-semibold text-ss sm:text-sm text-gray-900  bg-transparent border rounded-lg border-gray-300 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-green1 peer"
                  {...register("level")}
                >
                  <option selected disabled>
                    Select Your Level
                  </option>
                  <option value="Aspirant">Aspirant</option>
                  <option value="100L">100L</option>
                  <option value="200L">200L</option>
                  <option value="300L">300L</option>
                  <option value="400L">400L</option>
                  <option value="500L">500L</option>
                  <option value="Visitor">Visitor</option>
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
                className="block py-2.5 px-1.5 w-full font-semibold text-ss sm:text-sm text-gray-900  bg-transparent border rounded-lg border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green1 peer"
                placeholder=" "
                {...register("email")}
              />
              {errors.email && (
                <p className="form-error-message">{errors.email.message}</p>
              )}

              <label
                htmlFor="floating_email"
                className="peer-focus:font-semibold font-semibold absolute  text-ss sm:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-1.5 -z-10 origin-[0] peer-focus:start-1.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="grid xxss:grid-cols-2 xxss:gap-6">
              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="password"
                  id="floating_password"
                  className="block py-2.5 px-1.5 w-full font-semibold text-ss sm:text-sm text-gray-900  bg-transparent border rounded-lg border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green1 peer"
                  placeholder=" "
                  {...register("password")}
                />
                {errors.password && (
                  <p className="form-error-message">
                    {errors.password.message}
                  </p>
                )}

                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-semibold font-semibold absolute  text-ss sm:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-1.5 -z-10 origin-[0] peer-focus:start-1.5 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="password"
                  id="floating_repeat_password"
                  className="block py-2.5 px-1.5 w-full font-semibold text-ss sm:text-sm text-gray-900  bg-transparent border rounded-lg border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green1 peer"
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
                  className="peer-focus:font-semibold font-semibold absolute  text-ss sm:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-1.5 -z-10 origin-[0] peer-focus:start-1.5 rtl:peer-focus:translate-x-1/4 peer-focus:text-green1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mb-3 text-white bg-green1 hover:bg-green1/90  font-semibold rounded-lg text-sm sm:text-xs w-fit px-5 py-2.5"
            >
              {loading ? <ButtonSpinner /> : "Sign Up"}
            </button>
          </form>
          <div className="border-t border-t-gray-300 px-6 py-4 sm:px-8">
            <p className=" text-ss sm:text-sm font-semibold text-gray-700">
              Already have an account ?{" "}
              <Link
                className=" text-ss sm:text-sm font-semibold text-green1 hover:underline "
                to="/login"
              >
                Login
              </Link>
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

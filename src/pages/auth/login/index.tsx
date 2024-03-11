import logo from "../../../assets/logo/logo.png";
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../../themes/customButtton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInSchema } from "../../../validation";
import { ILoginForm } from "../../../models/auth/form";
import ButtonSpinner from "../../../components/loaders/ButtonSpinner";
import useLoginUser from "../../../hooks/auth/useLoginUser";

export default function Login() {
  const { loading, loginUser } = useLoginUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(logInSchema) });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border mt-16 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-center flex-col">
              <a className="flex items-center mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                <img
                  className="w-14 h-14 sm:w-20 sm:h-20"
                  src={logo}
                  alt="logo"
                />
              </a>
              <h1 className="text-md font-[800] leading-tight tracking-tight text-gray-900 md:text-[21px] dark:text-white">
                Login to your account
              </h1>
            </div>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(loginUser)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm sm:text-xs font-bold text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 font-medium text-gray-700 border border-gray-300  text-sm sm:text-xs rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 "
                  placeholder="eg. name@gmail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="form-error-message">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm sm:text-xs font-bold text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border font-medium border-gray-300 text-gray-700 sm text-sm sm:text-xs rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="form-error-message">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button
                theme={customButtonTheme}
                color="primary"
                size={"md"}
                type="submit"
              >
                {loading ? <ButtonSpinner /> : "Login"}
              </Button>
            </form>
          </div>
          <div className="border border-t-gray-300 px-6 py-4 sm:px-8">
            <p className="text-sm font-semibold text-gray-500">
              New Student ?{" "}
              <a
                href="/signup"
                className="font-medium text-green1 hover:underline dark:text-primary-500"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

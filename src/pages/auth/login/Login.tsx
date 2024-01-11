import logo from "../../../assets/logo/logo.png";
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../../themes/customButtton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInSchema } from "../../../validation";
import { ILoginForm } from "../../../models/form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import ButtonSpinner from "../../../components/loaders/ButtonSpinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginForm>({ resolver: yupResolver(logInSchema) });

  const handleLoginSubmit = async (data: ILoginForm) => {
      setLoading(true)
      try {
        console.log(data);
        const { email, password } = data;
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential;
        console.log(user);
        navigate("/");
        reset();
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-center flex-col">
              <a
                href="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img className="w-14 h-14" src={logo} alt="logo" />
              </a>
              <h1 className="text-md font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login into your account
              </h1>
            </div>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLoginSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green1 focus:border-green1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                // className="w-[100px] text-white bg-green1 hover:bg-green2 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? <ButtonSpinner /> : "Login"}
              </Button>
              <p className="text-sm font-light text-gray-500">
                New Student ?{" "}
                <a
                  href="/signup"
                  className="font-medium text-green1 hover:underline dark:text-primary-500"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

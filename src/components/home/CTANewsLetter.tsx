/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import newsLetter from "../../json/animation/newsletter.json";
import Lottie from "lottie-react";
import { EmailIcon } from "../icons/EmailIcon";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
import { useForm } from "react-hook-form";
import { suscribeSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SuscribeForm,
  ISuscribedUser,
} from "../../models/misc/newsletter/suscribed";
import { db } from "../../config/firebase";
import {
  collection,
  setDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { notifyUser } from "../../helpers/notifyUser";
import Spinner from "../loaders/Spinner";
import { useNavigate } from "react-router-dom";

export default function CTANewsLetter() {
  const [subscribing, setSubscribing] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(suscribeSchema) });
  const { getUserInfo, studentDetails, userID, user } = useGetUserInfo();
  const navigate = useNavigate();
  useEffect(() => {
    getUserInfo();
  }, [user]);

  const suscribeUser = async (data: SuscribeForm) => {
    setSubscribing(true);
    try {
      if (studentDetails && userID) {
        const { firstName, lastName, regNo, level } = studentDetails;

        const uniqueDocId = `sub-${userID}`;
        const querySnapshot = await getDocs(
          query(
            collection(db, "suscribedUsers"),
            // where("userID", "==", userID),
            where("email", "==", data)
          )
        );
        if (querySnapshot.empty) {
          const suscribedUserInfo: ISuscribedUser = {
            userID,
            firstName,
            lastName,
            email: data,
            regNo,
            level,
            timeStamp: new Date(),
          };
          await setDoc(
            doc(db, "suscribedUsers", uniqueDocId),
            suscribedUserInfo
          );
          setSubscribing(false);
          reset();
          notifyUser("success", "Thank you for subscribing!");
        } else {
          setSubscribing(false);
          notifyUser("info", "Email is already subscribed");
        }
      } else {
        reset();
        notifyUser("error", "Please login to subscribe to out newsletter");
        navigate("/login");
      }
    } catch (err: any) {
      setSubscribing(false);
      notifyUser("error", "Couldnt subscribe user. Something went wrong");
      console.log(err)
    }
  };
  return (
    <div>
      <div className="box-width">
        <div className="px-3 xsm:px-14 xsm:py-32 py-8">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col xsm:flex-row gap-4 shadow-4 mt-4 rounded-lg border border-gray-100 bg-white py-3 px-8 xss:py-4 w-full max-w-[900px]">
                <Lottie
                  loop={true}
                  animationData={newsLetter}
                  className="w-[230px] xsm:w-[300px]"
                />
              <div className="flex items-center flex-col w-full p-4">
                <h2 className="text-center text-lg sm:text-xl md:text-2xl font-[600]">
                  Get involved and stay informed
                </h2>
                <p className="text-gray-700 font-[500] text-ss ss:text-sm xlg:text-xs mb-3 text-center">
                  Subscribe to our newletter and never miss and update from us
                </p>
                <form
                  onSubmit={handleSubmit(suscribeUser)}
                  className="w-full xsm:w-fit"
                >
                  <div className="flex items-center flex-col gap-6 w-full">
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center">
                        <EmailIcon className="w-5 xss:w-7 mr-2 xss:mr-3" />
                        <div className="w-full">
                          <input
                            type="text"
                            className="w-full p-0 f0cus:py-2 focus:outline-none outline-none ring-0 border-0 focus:border-green2 focus:ring-0 placeholder:font-[500] font-[500] placeholder:text-sm xss:placeholder:text-xs text-gray-900 text-sm xss:text-xs border-b-transparent border-b-2 placeholder:text-gray-400"
                            placeholder="Enter Your Email"
                            {...register("email")}
                          />
                          {errors.email && (
                            <p className="form-error-message">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      type={!subscribing ? "submit" : "button"}
                      className=" w-full font-semibold text-white bg-green1 border-0 outline-none p-3 rounded-lg text-sm xss:text-base"
                    >
                      {subscribing ? <Spinner /> : "Suscribe"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

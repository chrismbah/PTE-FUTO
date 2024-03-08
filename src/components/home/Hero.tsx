/* eslint-disable react-hooks/exhaustive-deps */
// import hero from "../../assets/svg/home/hero.svg";
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
import heroAnimation from "../../json/animation/read.json";
import Lottie from "lottie-react";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";

export default function Hero() {
  const { user, studentDetails } = useGetUserInfo();

  return (
    <div className="home-gray-bg">
      <div className="px-3 xsm:px-14 sm:pt-24 mmd:pt-28 sm:pb-36 py-20 box-width">
        <div className="section-flex-between gap-4">
          <div className="w-full">
            <h1 className="text-green1 xl:text-5xl lg:text-4xl text-3xl  font-[700]">
              Polymer and Textile Engineering Department
            </h1>
            <h2 className="mb-2 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-[500]">
              Federal University of Technology, Owerri
            </h2>
            <p className="section-p mb-4">
              Explore detailed course outlines, access engaging learning
              materials, <br /> Calculate your GPA, stay ahead of the curve with
              the latest news, <br className="hidden ss:block" /> and join a
              thriving community of fellow learners.
            </p>
            <Link to={user && studentDetails ? "/dashboard" : "/signup"}>
              <Button theme={customButtonTheme} color="primary" size={"lg"}>
                {user && studentDetails ? "Go to Dashboard" : "Get Started"}
              </Button>
            </Link>
          </div>
          <div className="max-w-[500px] mmd:max-w-[700px] xlg:w-[800px]">
            <Lottie loop={false} animationData={heroAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
}

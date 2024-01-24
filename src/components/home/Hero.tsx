// import hero from "../../assets/svg/home/hero.svg";
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
import heroAnimation from "../../utils/animation/hero.json";
import Lottie from "lottie-react";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export default function Hero() {
  const { user } = useGetUserInfo();
  return (
    <div className="hero-section box-width">
      <div className="section-flex-between gap-4">
        <div className="w-full">
          <h1 className="text-green1 xl:text-5xl lg:text-4xl text-3xl  font-semibold">
            Polymer and Textile Engineering, FUTO
          </h1>
          <h2 className="mb-3 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-[500]">
            Federal University of Technology, Owerri
          </h2>
          <p className="xl:text-lg text-base md:mb-7 mb-4">
            Here, you can access course outlines, learning materials, calculate{" "}
            <br />
            your CGPA, stay updated with the latest news, and connect with a{" "}
            <br />
            thriving community.
          </p>
          <Button theme={customButtonTheme} color="primary" size={"lg"}>
            <Link to={user ? "/dashboard" : "/signup"}>
              {user ? "Go to Dashboard" : "Get Started"}
            </Link>
          </Button>
        </div>
        <div className="max-w-[500px] mmd:max-w-[1000px] xlg:w-[900px]">
          <Lottie loop={true} animationData={heroAnimation} />
          {/* <img src={hero} alt="School Image" className="w-[500px] xmd:w-[900px] xmd:min-w-[600px]" /> */}
        </div>
      </div>
    </div>
  );
}

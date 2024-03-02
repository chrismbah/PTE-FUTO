import Lottie from "lottie-react";
import location from "../../../json/animation/location.json";
import work from "../../../json/animation/work.json";
import link from "../../../json/animation/link.json";
import git from "../../../json/animation/git.json";
import mail from "../../../json/animation/mail.json";
import chris from "../../../assets/img/team/img6.jpg";
import { Link } from "react-router-dom";

export default function ProjectTeam() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="px-3 sm:px-14 sm:py-[115px] py-20">
          <div className="flex items-center justify-center flex-col">
            <h2>
              <div className="bar-style" />
              Our Team
            </h2>
            <h3 className="text-gray-700 font-[500] text-ss ss:text-sm xlg:text-xs mb-3">
              The team of developers responsible for this project
            </h3>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className=" w-[450px]  border border-gray-100 mt-20  bg-white shadow-4 rounded-lg text-gray-900">
              <div className="mx-auto w-28 h-28 sm:w-36 sm:h-36 md:w-36 md:h-36 relative -mt-16 border-4 border-green1 rounded-full overflow-hidden">
                <img
                  className="object-cover object-center w-full"
                  src={chris}
                  alt="Chris Mbah"
                />
              </div>
              <div className="text-center mt-2 rounded-lg">
                <h4 className="font-bold text-2xl">Christian Mbah</h4>
                <div className="flex items-center justify-center w-full gap-1">
                  <Lottie
                    animationData={location}
                    loop={true}
                    className="w-3"
                  />
                  <p className="text-gray-700 text-ss font-semibold ">
                    Owerri · Imo State
                  </p>
                </div>
                <p className="text-gray-700 text-sm font-semibold mb-4">
                  Polymer and Textile Engineering Department · 400 Level
                </p>
                <div className="flex items-center justify-center mb-2 w-full gap-1.5">
                  <Lottie
                    animationData={work}
                    loop={true}
                    className="w-[20px] -mt-1"
                  />
                  <p className="text-gray-900 font-semibold">
                    Software Engineer · Web Developer
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 pb-8">
                  <Link to="">
                    <div className="flex gap-1 items-center">
                      <Lottie animationData={mail} className="w-6" />
                      <p className="text-gray-900 font-semibold text-sm">
                        Email
                      </p>
                    </div>
                  </Link>
                  <Link to="">
                    <div className="flex gap-1 items-center">
                      <Lottie animationData={link} className="w-6" />
                      <p className="text-gray-900 font-semibold text-sm">
                        Portfolio
                      </p>
                    </div>
                  </Link>
                  <Link to="">
                    <div className="flex gap-1 items-center">
                      <Lottie animationData={git} className="w-6" />
                      <p className="text-gray-900 font-semibold text-sm">
                        Github
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

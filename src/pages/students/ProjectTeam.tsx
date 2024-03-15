import Lottie from "lottie-react";
import location from "../../json/animation/location.json";
import work from "../../json/animation/work.json";
import link from "../../json/animation/link.json";
import git from "../../json/animation/git.json";
import mail from "../../json/animation/mail.json";
import dev from "../../json/animation/dev.json";
import chris from "../../assets/img/team/img6.jpg";
import { Link } from "react-router-dom";
import futo from "../../assets/img/gallery/front-gate2.jpg";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
import { fadeInVariants3 } from "../../animation/variants";
import { useEffect } from "react";
export default function ProjectTeam() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="px-3 py-20 sm:px-10 lg:px-12 sm:py-24">
          <div className="flex items-center justify-center flex-col">
            <h2>
              <div className="bar-style" />
              Meet the Team
            </h2>
            <h3 className="text-gray-700 font-[500] text-ss ss:text-sm xlg:text-xs">
              The Creative Mind Behind This Project
            </h3>
          </div>
          <div className="w-full flex items-center justify-center">
            <motion.div
              variants={fadeInVariants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" w-[400px] sss:w-[450px] mt-6  bg-white shadow hover:shadow-xl rounded-lg text-gray-900"
            >
              <div className="rounded-t-lg h-32 w-full overflow-hidden bg-gray-100">
                <img
                  src={futo}
                  alt="futo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mx-auto w-28 h-28 sm:w-36 sm:h-36 md:w-36 md:h-36 relative -mt-12 sm:-mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center w-full bg-gray-100"
                  src={chris}
                  alt="Chris Mbah"
                />
              </div>
              <div className="text-center mt-2 rounded-lg px-4">
                <motion.h4
                  variants={fadeInVariants3}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={2}
                  className="font-bold text-md ss:text-xl sm:text-2xl"
                >
                  Christian Endwell Mbah
                </motion.h4>
                <motion.div
                  variants={fadeInVariants3}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={3}
                  className="flex items-center justify-center w-full gap-1 -mt-1.5 mb-2"
                >
                  <Lottie
                    animationData={location}
                    loop={false}
                    className="w-3"
                  />
                  <p className="text-gray-700 text-ss font-semibold ">
                    Owerri · Imo State
                  </p>
                </motion.div>
                <motion.p
                  variants={fadeInVariants3}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={4}
                  className="text-black text-ss sm:text-sm font-semibold"
                >
                  Polymer and Textile Engineering Department
                </motion.p>
                <motion.p
                  variants={fadeInVariants3}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={5}
                  className="text-black text-ss sm:text-sm font-semibold mb-4"
                >
                  400 Level
                </motion.p>
                <motion.p
                  variants={fadeInVariants3}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={6}
                  className=" font-semibold text-ss ss:text-sm sm:text-xs mb-2"
                >
                  <Lottie
                    animationData={dev}
                    loop={false}
                    className="w-[17px] ss:w-[20px] -mb-1 inline-block"
                  />{" "}
                  Software Engineer · Web Developer
                </motion.p>
                <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 pb-12 sm:pb-8">
                  <Link to="mailto:mbahchris46@gmail.com">
                    <motion.div
                      variants={fadeInVariants3}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={8}
                      className="flex gap-1 items-center"
                    >
                      <Lottie
                        loop={false}
                        animationData={mail}
                        className="w-4 ss:w-5 sm:w-6"
                      />
                      <p className=" font-semibold text-xss ss:text-ss sm:text-sm">
                        Email
                      </p>
                    </motion.div>
                  </Link>
                  <Link to="https://chrismbah.vercel.app">
                    <motion.div
                      variants={fadeInVariants3}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={9}
                      className="flex gap-1 items-center"
                    >
                      <Lottie
                        loop={false}
                        animationData={link}
                        className="w-4 ss:w-5 sm:w-6"
                      />
                      <p className=" font-semibold text-xss ss:text-ss sm:text-sm">
                        Portfolio
                      </p>
                    </motion.div>
                  </Link>
                  <Link to="https://github.com/chrismbah">
                    <motion.div
                      variants={fadeInVariants3}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={10}
                      className="flex gap-1 items-center"
                    >
                      <Lottie
                        loop={false}
                        animationData={git}
                        className="w-4 ss:w-5 sm:w-6"
                      />
                      <p className=" font-semibold text-xss ss:text-ss sm:text-sm">
                        Github
                      </p>
                    </motion.div>
                  </Link>{" "}
                  <Link to="https://linkedin.com/in/mbah-chris">
                    <motion.div
                      variants={fadeInVariants3}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={11}
                      className="flex gap-1 items-center"
                    >
                      <Lottie
                        loop={false}
                        animationData={work}
                        className="w-3 ss:w-4 sm:w-5"
                      />
                      <p className=" font-semibold text-xss ss:text-ss sm:text-sm">
                        LinkedIn
                      </p>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

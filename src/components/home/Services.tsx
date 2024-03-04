import { useEffect } from "react";
import { services } from "../../data/home/services";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0, },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="home-gray-bg">
      <div className="box-width">
        <div className="section">
          <div className="mmd:flex items-center justify-center flex-col">
            <h2>
              {" "}
              <div className="bar-style" />
              Our Services
            </h2>
            <h3 className="text-gray-700 font-[500] text-ss ss:text-sm xlg:text-xs mb-3">
              What We Offer Our Students
            </h3>
          </div>

          <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-5">
            {services.map(({ link, desc, icon, color, title }, i) => (
              // <motion.div
              //   ref={ref}
              //   variants={boxVariant}
              //   initial="hidden"
              //   animate={control}
              //   className="w-[300px] h-[300px]"
              // >
                <Link to={link} key={i} className="w-full">
                  <motion.div    
                    ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
               className="bg-white rounded-lg shadow-4 hover:shadow-md transition-shadow duration-250 ease-in-out p-12 h-[270px] sm:h-[300px] flex flex-col justify-center items-center">
                    <div
                      className={`${color === "dark-green" ? "bg-green1" : "bg-green5"} bg-green1 rounded-full p-3 mb-2`}
                    >
                      <img src={icon} alt={title} className="w-[25px]" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-center text-base sm:text-md">
                      {title}
                    </h3>
                    <p className="text-gray-700 text-xss ss:text-ss sm:text-sm text-center">
                      {desc}
                    </p>
                  </motion.div>
                </Link>
              // </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

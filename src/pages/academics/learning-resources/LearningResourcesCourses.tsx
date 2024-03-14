import { courses } from "../../../data/academics/learning-resources/courses";
import { useParams } from "react-router-dom";
import { CoursesCard } from "./CoursesCard";
import Footer from "../../../components/footer/Footer";
import { motion } from "framer-motion";
import { fadeInVariants1 } from "../../../animation/variants";

export default function LearningResourcesCourses() {
  const { level } = useParams();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width2">
        <div className="page-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <h5 className=" text-center font-bold text-xl ss:text-xll uppercase text-gray-900">
              {level} Level Learning Resources
            </h5>
            <p className="heading-p">
              {`Download textbooks, handouts, notes and past questions, and study tips compiled just for ${level === "100" ? "Freshers" : level === "500" ? "Final year students" : `${level} level students`}`}{" "}
            </p>
          </div>
          <h4 className="text-base font-bold mb-2 sm:text-md">
            First Semester <div className="bar-style" />
          </h4>
          <div className="mb-16  grid items-center grid-cols-2 xss:grid-cols-3 sss:grid-cols-4 mmd:grid-cols-5 gap-4">
            {level &&
              courses[level]["First"].courseInfo.map((info, i) => (
                <motion.div
                  variants={fadeInVariants1}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={i}
                >
                  <CoursesCard key={i} {...info} />
                </motion.div>
              ))}
          </div>
          {level && courses[level]["Second"].courseInfo.length > 0 ? (
            <>
              <h4 className="text-base font-bold mb-2 sm:text-md">
                Second Semseter <div className="bar-style" />
              </h4>
              <div className="mb-16 grid items-center grid-cols-2 xss:grid-cols-3 sss:grid-cols-4 mmd:grid-cols-5 gap-4 ">
                {courses[level]["Second"].courseInfo.map((info, i) => (
                  <motion.div
                    variants={fadeInVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={i}
                  >
                    <CoursesCard key={i} {...info} />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

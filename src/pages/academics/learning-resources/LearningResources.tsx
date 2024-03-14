import Footer from "../../../components/footer/Footer";
import { LevelsCard } from "./LevelsCard";
import { learningResourcesLevels } from "../../../data/academics/learning-resources/levels";
import { motion } from "framer-motion";
import { fadeInVariants1 } from "../../../animation/variants";

export default function LearningResources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width ">
        <div className="page-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <h2 className=" text-center font-bold text-xl ss:text-xll uppercase text-gray-900">
              Learning Resources
            </h2>
            <p className="heading-p">
              Find textbooks,lecturers handouts, past questions, lecture notes,
              and study tips organized by level for easy access.
            </p>
          </div>
          <div className="grid items-center ss:grid-cols-2 md:grid-cols-3 gap-6">
            {learningResourcesLevels.map((info, index) => (
              <motion.div
                variants={fadeInVariants1}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <LevelsCard key={index} {...info} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

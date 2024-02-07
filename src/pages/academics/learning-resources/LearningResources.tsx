import Footer from "../../../components/footer/Footer";
import { LevelsCard } from "./LevelsCard";
import { learningResourcesLevels } from "../../../utils/academics/learning-resources/levels";
export default function LearningResources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width ">
        <div className="page-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <h2 className="text-green1 text-center font-semibold">Learning Resources</h2>
            <p className="text-center text-xs xsm:text-base">
            Explore essential study resources compiled just for you! <br />
            Find textbooks, handouts, past questions, and study tips organized by level for easy access.
            </p>
          </div>
          <div className="grid items-center grid-cols-2 ss:grid-cols-3 md:grid-cols-4 gap-6">
            {learningResourcesLevels.map((info, index) => (
              <LevelsCard key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

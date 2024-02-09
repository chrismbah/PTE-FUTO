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
            <p className="heading-p">
            Find textbooks,lecturers handouts, past questions, lecture notes, and study tips organized by level for easy access.
            </p>
          </div>
          <div className="grid items-center ss:grid-cols-2 md:grid-cols-3 gap-6">
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

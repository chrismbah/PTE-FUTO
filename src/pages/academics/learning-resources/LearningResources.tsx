import Footer from "../../../components/footer/Footer"
import { LevelsCard } from "./LevelsCard"
import { learningResourcesLevels } from "../../../utils/academics/learning-resources"
export default function LearningResources() {
  return (
    <div className="min-h-screen">
    <div className="box-width ">
      <div className="page-section">
        <div className="w-full flex items-center justify-center mb-6 flex-col">
          <h2 className="text-green1 text-center">Learning Resources</h2>
          <p className="text-center text-xs xsm:text-base">
            Discover the depth and focus of our courses through detailed
            descriptions of curriculum <br />
            and learning objectives, presented by level for your convenience.
          </p>
        </div>
        <div className="grid items-center grid-cols-3 gap-6">
          {learningResourcesLevels.map((info, index)=> <LevelsCard key={index} {...info} /> )}
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

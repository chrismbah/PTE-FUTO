import { useParams } from "react-router-dom";
import { useLearningResourcesContext } from "../../../context/LearningResources";
import Content from "./Content";
export default function LearningResourcesContent() {
  const { id, courseTitle } = useParams();
  const {  resourcesType, setResourcesType } = useLearningResourcesContext();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width2">
        <div className="page-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <h2 className="text-green1 text-center font-semibold">
              {id} E-BOOK DOWNLOAD
            </h2>
            <p className="text-center">
              Checkout all Textbooks, Handouts , Lecture Notes and Past Questions relating to <br />{" "}
              <span className="font-semibold">
                {id} ( {courseTitle} )
              </span>{" "}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setResourcesType("handouts")}
              className={`  ${resourcesType === "handouts" ? "bg-green1 text-white" : "bg-gray-100"} 
                p-3 rounded-md font-semibold hover:bg-green1 hover:text-white transition duration-100`}
            >
              Handouts
            </button>
            <button
              onClick={() => setResourcesType("textbooks")}
              className={`${resourcesType === "textbooks" ? "bg-green1 text-white" : "bg-gray-100"} 
                p-3 rounded-md  font-semibold hover:bg-green1 hover:text-white transition duration-100`}
            >
              Textbooks
            </button>
            <button
              onClick={() => setResourcesType("pastquestions")}
              className={`${resourcesType === "pastquestions" ? "bg-green1 text-white" : "bg-gray-100"} 
                p-3 rounded-md  font-semibold hover:bg-green1 hover:text-white transition duration-100`}
            >
              Past Questions
            </button>
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";

export default function LearningResourcesContent() {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width2">
        <div className="page-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <h2 className="text-green1 text-center font-semibold">
              {id} E-Book Download
            </h2>
            <p className="text-center">Download all Textbooks, Lecturers Handouts, Past Questions and Materials relating to {id}</p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

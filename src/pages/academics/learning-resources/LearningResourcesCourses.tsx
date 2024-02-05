import { courses } from "../../../utils/academics/learning-resources/levels/courses";
import { useParams } from "react-router-dom";
import { CoursesCard } from "./CoursesCard";
import Footer from "../../../components/footer/Footer";

export default function LearningResourcesCourses() {
  const { level } = useParams();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width2">
        <div className="page-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <h2 className="text-green1 text-center">
              {level} Level Learning Resources
            </h2>
            <p className="text-center text-sm xsm:text-base">
              {`Download essential study resources compiled just for ${level === "100" ? "Freshers" : level === "500" ? "Final year students" : `${level} level students`}`}{" "}
              <br />
              Find textbooks, handouts, notes and past questions, and study tips
              organized by level for easy access.
     
            </p>
          </div>
          <h4 className="text-base font-bold mb-4 sm:text-md">
            First Semester <div className="bar-style" />
          </h4>
          <div className="mb-16 grid items-center xxss:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 mmd:grid-cols-5 gap-4 ">
            {level &&
              courses[level]["First"].courseCodes.map((info, i) => (
                <CoursesCard key={i} {...info} />
              ))}
          </div>
          {level && courses[level]["Second"].courseCodes.length > 0 ? (
            <>
              <h4 className="text-md font-bold mb-2">
                Second Semseter <div className="bar-style" />
              </h4>
              <div className="grid items-center xxss:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 mmd:grid-cols-5 gap-3 ">
                {courses[level]["Second"].courseCodes.map((info, i) => (
                  <CoursesCard key={i} {...info} />
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

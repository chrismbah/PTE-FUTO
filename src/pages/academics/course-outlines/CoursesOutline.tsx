import { useCourseOutlineContext } from "../../../context/CourseOutline";
import { courseOutline100 } from "../../../utils/academics/course-outlines/levels/100/courseOutline100";
import { courseOutline200 } from "../../../utils/academics/course-outlines/levels/200/courseOutline200";
import { courseOutline300 } from "../../../utils/academics/course-outlines/levels/300/courseOutline300";
import { courseOutline400 } from "../../../utils/academics/course-outlines/levels/400/courseOutline400";
import { courseOutline500 } from "../../../utils/academics/course-outlines/levels/500/courseOutline500";
import { CourseOutlineCard } from "./CoursesOutlineCard";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";

export default function CoursesOutline() {
  const { level } = useParams();
  const { semester, setSemester } = useCourseOutlineContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="course-outline-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <h2 className="text-green1 text-center">
              Courses Offered for {level} Level
            </h2>
            <p className="text-center text-xs xsm:text-base font-[500]">
              The details for 100 Level{" "}
              <span className="text-green1 text-capitalize">
                {semester === "First" ? "Harmattan" : "Rain"}
              </span>{" "}
              Semester courses are as follows
            </p>
            <div className="flex items-center justify-center my-2">
              <button
                className={`p-2 text-sm shadow-1 ${
                  semester === "First" ? "bg-gray-50 border-2 border-green1 shadow-1 font-semibold" : "bg-gray-50"
                }`}
                onClick={() => setSemester("First")}
              >
                {" "}
                1st Semester{" "}
              </button>{" "}
              <button
                className={`p-2 text-sm shadow-1  ${
                  semester === "Second" ? "bg-gray-50 border-2 border-green1 shadow-1 font-semibold" : "bg-gray-50"
                }`}
                onClick={() => setSemester("Second")}
              >
                {" "}
                Second Semester{" "}
              </button>
            </div>
          </div>
          <div className="grid items-center ss:px-8 sm:px-0 sm:grid-cols-2 mmd:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {level === "100"
              ? courseOutline100[semester].courseInfo.map((info, index) => (
                  <CourseOutlineCard key={index} {...info} />
                ))
              : level === "200"
                ? courseOutline200[semester].courseInfo.map((info, index) => (
                    <CourseOutlineCard key={index} {...info} />
                  ))
                : level === "300"
                  ? courseOutline300[semester].courseInfo.map((info, index) => (
                      <CourseOutlineCard key={index} {...info} />
                    ))
                  : level === "400"
                    ? courseOutline400[semester].courseInfo.map(
                        (info, index) => (
                          <CourseOutlineCard key={index} {...info} />
                        )
                      )
                    : level === "500"
                      ? courseOutline500[semester].courseInfo.map(
                          (info, index) => (
                            <CourseOutlineCard key={index} {...info} />
                          )
                        )
                      : ""}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

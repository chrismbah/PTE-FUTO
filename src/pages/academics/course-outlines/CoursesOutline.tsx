import { useCourseOutlineContext } from "../../../context/CourseOutline";
import { courseOutline100 } from "../../../data/academics/course-outlines/levels/100/courseOutline100";
import { courseOutline200 } from "../../../data/academics/course-outlines/levels/200/courseOutline200";
import { courseOutline300 } from "../../../data/academics/course-outlines/levels/300/courseOutline300";
import { courseOutline400 } from "../../../data/academics/course-outlines/levels/400/courseOutline400";
import { courseOutline500 } from "../../../data/academics/course-outlines/levels/500/courseOutline500";
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
            <h2 className="text-green1 text-center font-semibold">
              Courses Offered for {level} Level
            </h2>
            <p className="heading-p">
              The details for{" "}
              <span className="text-green1 font-semibold">
                {semester === "First" ? "Harmattan" : "Rain"}
              </span>{" "}
              Semester courses are as follows
            </p>
            <div className="flex items-center justify-center my-2 gap-1">
              <button
                onClick={() => setSemester("First")}
                className={`p-2 text-ss sm:text-xs rounded-md ${semester === "First" ? "bg-green1 text-white" : "bg-gray-100"} font-semibold transition duration-100`}
              >
                1st Semester
              </button>
              <button
                onClick={() => setSemester("Second")}
                className={`p-2 text-ss sm:text-xs rounded-md ${semester === "Second" ? "bg-green1 text-white" : "bg-gray-100"} font-semibold transition duration-100`}
              >
                2nd Semester
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { CourseOptions } from "./CourseOptions";
import { ICourseInfo } from "../../../../../models/academics/course-outline/courseInfo";
import { courseInfo100 } from "../../../../../data/academics/course-outlines/levels/100/info/courseInfo100";
import { courseInfo200 } from "../../../../../data/academics/course-outlines/levels/200/info/courseInfo200";
import { courseInfo300 } from "../../../../../data/academics/course-outlines/levels/300/info/courseInfo300";
import { courseInfo400 } from "../../../../../data/academics/course-outlines/levels/400/info/courseInfo400";
import { courseInfo500 } from "../../../../../data/academics/course-outlines/levels/500/info/courseInfo500";
import { OutlineIcon } from "../../../../../components/icons/dashboard/Outline";

export default function CourseOutlines() {
  const [semester, setSemester] = useState<string | null>();
  const [level, setLevel] = useState<string | null>();
  const [course, setCourse] = useState<string | null>();
  const [courseInfo, setCourseInfo] = useState<ICourseInfo | null>();

  useEffect(() => {
    if (semester && course) {
      if (level === "100") {
        setCourseInfo(courseInfo100[semester][course]);
        console.log(courseInfo);
      } else if (level === "200") {
        setCourseInfo(courseInfo200[semester][course]);
        console.log(courseInfo);
      } else if (level === "300") {
        setCourseInfo(courseInfo300[semester][course]);
        console.log(courseInfo);
      } else if (level === "400") {
        setCourseInfo(courseInfo400[semester][course]);
        console.log(courseInfo);
      } else if (level === "500") {
        setCourseInfo(courseInfo500[semester][course]);
        console.log(courseInfo);
      }
    }
  }, [level, course, semester, courseInfo]);
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="box-width">
        <div className="course-outline-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold uppercase text-gray-900">
                {" "}
                Check out course outlines
              </h1>
              <p className="section-p text-center">
                Select your level, semester and course
              </p>
            </div>
            <div className="flex gap-3 mb-4">
              <div>
                <select
                  onChange={(e) => setLevel(e.target.value)}
                  id="underline_select"
                  defaultValue="Select Level"
                  className="bg-white cursor-pointer border-none shadow text-gray-900 text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
                >
                  <option selected disabled>
                    Select Level
                  </option>
                  <option value="100">100L</option>
                  <option value="200">200L</option>
                  <option value="300">300L</option>
                  <option value="400">400L</option>
                  <option value="500">500L</option>
                </select>
              </div>{" "}
              <div>
                <select
                  onChange={(e) => setSemester(e.target.value)}
                  id="underline_select"
                  className="bg-white cursor-pointer border-none shadow text-gray-900 text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
                >
                  <option selected value={"Select Semester"} disabled>
                    Select Semester
                  </option>
                  <option value="First">First Semester</option>
                  <option value="Second">Second Semester</option>
                </select>
              </div>{" "}
              <div>
                <select
                  id="underline_select"
                  onChange={(e) => setCourse(e.target.value)}
                  className="bg-white cursor-pointer border-none shadow text-gray-900 text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
                >
                  <option selected disabled>
                    Select Course
                  </option>
                  {level && semester && (
                    <CourseOptions semester={semester} level={level} />
                  )}
                </select>
              </div>
            </div>
            {courseInfo && (
              <div className="course-info rounded-lg bg-white shadow p-6 max-w-2xl relative">
                <div className="relative">
                  <OutlineIcon className="fill-green1 w-6 h-6 absolute top-0 right-0" />
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 text-md ">
                      {courseInfo.courseTitle}
                    </h4>
                    <p className="text-gray-800 font-semibold text-xs ">
                      Course Code:{" "}
                      <span className="font-medium">
                        {courseInfo.courseCode}
                      </span>
                    </p>
                    <p className="text-gray-800 font-semibold text-xs ">
                      Credit Unit:{" "}
                      <span className="font-medium">
                        {courseInfo.creditUnit}
                      </span>
                    </p>
                  </div>

                  {courseInfo.info.map(({ heading, content }) => (
                    <div className="mb-4">
                      <p className="font-semibold text-gray-900">{heading}</p>
                      <p className="text-xs text-gray-700 font-medium">
                        {content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

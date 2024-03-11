import { useState } from "react";
import { CourseOptions } from "./CourseOptions";

export default function CourseOutlines() {
  const [semester, setSemester] = useState<string | null>();
  const [level, setLevel] = useState<string | null>();

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="box-width">
        <div className="course-outline-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold uppercase text-gray-800">
                {" "}
                Check out your course outlines
              </h1>
              <p className="section-p text-center">
                Select your level, semester and course
              </p>
            </div>

            <div className="flex gap-3">
              <div>
                <select
                  onChange={(e) => setLevel(e.target.value)}
                  id="underline_select"
                  className="bg-white border-none shadow text-gray-900 text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
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
                  className="bg-white border-none shadow text-gray-900 text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
                >
                  <option selected disabled>
                    Select Semester
                  </option>
                  <option value="1st">First Semester</option>
                  <option value="2nd">Second Semester</option>
                </select>
              </div>{" "}
              <div>
                <select
                  id="underline_select"
                  className="bg-white border-none shadow text-gray-900 text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
                >
                  <option selected disabled>
                    Select Course
                  </option>
                  {level && semester && (
                    <CourseOptions semester={level} level={level} />
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

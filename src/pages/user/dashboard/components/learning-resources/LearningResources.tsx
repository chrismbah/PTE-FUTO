/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CourseOptions } from "./CourseOptions";
import { useLearningResources } from "../../../../../hooks/academics/useLearningResources";
import { Spinner } from "../../../../../components/loaders/Spinner";
import fileSearch from "../../../../../assets/svg/fileSearch.svg";
import checkResources from "../../../../../assets/svg/search-files.svg";
import { notifyUser } from "../../../../../helpers/notifyUser";
import { FileCard } from "./FileCard";
import { Content } from "./Content";

export default function LearningResources() {
  const [semester, setSemester] = useState<string | null>();
  const [level, setLevel] = useState<string | null>();
  const [course, setCourse] = useState<string | null>();
  const [resourcesType, setResourcesType] = useState<string | null>(null);

  const { getLearningResources, files, gettingResources, error } =
    useLearningResources();
  useEffect(() => {
    console.log(semester, course, level, resourcesType, files, error);
  }, [semester, course, level, resourcesType, files, error]);
  useEffect(() => {
    if (level && course && resourcesType) {
      getLearningResources(level, course, resourcesType);
      console.log(files);
    }
  }, [resourcesType, course]);

  const getCourseResources = async () => {
    if (level && course && resourcesType) {
      getLearningResources(level, course, resourcesType);
    } else {
      if (!level && !course) {
        notifyUser("info", "Please select a level and a course");
        return;
      }
      if (!level) {
        notifyUser("info", "Please select a level");
        return;
      }
    }
  };
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="box-width">
        <div className="px-3 ss:px-8 sm:px-14 sm:py-24 py-20">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <div className="mb-4">
              <h1 className="text-md sm:text-xll md:text-2xl font-semibold uppercase text-gray-900 text-center">
                {" "}
                Learning Resources
              </h1>
              <p className="section-p text-center">
                Select your level, semester and course code
              </p>
            </div>
            <div className="flex gap-1 ss:gap-5 mb-4">
              <div>
                <select
                  onChange={(e) => {
                    setLevel(e.target.value);
                  }}
                  id="underline_select"
                  className="bg-white cursor-pointer border-none shadow text-gray-900 text-xss xss:text-ss ss:text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
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
                  onChange={(e) => {
                    setSemester(e.target.value);
                  }}
                  id="underline_select"
                  className="bg-white cursor-pointer border-none shadow text-gray-900 text-xss xss:text-ss ss:text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
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
                  onChange={(e) => setCourse(e.target.value)}
                  id="underline_select"
                  className="bg-white cursor-pointer border-none shadow text-gray-900 text-xss xss:text-ss ss:text-sm font-medium rounded-lg border border-transparent focus:ring-green1 focus:border-gray-500 block w-full p-1.5 sm:p-2 "
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
            <div className="flex items-center justify-center flex-wrap xxss:flex-nowrap gap-1 xss:gap-3 relative">
              <button
                onClick={() => {
                  setResourcesType("handouts");
                  getCourseResources();
                }}
                className={`${resourcesType === "handouts" ? "bg-green1 text-white" : "bg-white shadow"} 
                sss:p-2 p-1 text-gray-900 text-xss xss:text-ss ss:text-sm rounded-md font-medium hover:bg-green1 hover:text-white transition duration-100`}
              >
                Handouts
              </button>
              <button
                onClick={() => {
                  setResourcesType("textbooks");
                  getCourseResources();
                }}
                className={`${resourcesType === "textbooks" ? "bg-green1 text-white" : "bg-white shadow"} 
                sss:p-2 p-1 text-gray-900 text-xss xss:text-ss ss:text-sm rounded-md font-medium hover:bg-green1 hover:text-white transition duration-100`}
              >
                Textbooks
              </button>
              <div className="relative">
                <button
                  onClick={() => {
                    setResourcesType("pastquestions");
                    getCourseResources();
                  }}
                  className={`${resourcesType === "pastquestions" ? "bg-green1 text-white" : "bg-white shadow"} 
                    sss:p-2 p-1 text-gray-900 text-xss xss:text-ss ss:text-sm rounded-md font-medium hover:bg-green1 hover:text-white transition duration-100`}
                >
                  Past Questions
                </button>
              </div>
            </div>
            <div className="w-full h-full mt-6 px-5 md:px-3 ">
              <Content />
            </div>
            <div className="mt-5">
              {!files && !gettingResources && !error && (
                <div className="flex items-center justify-center flex-col gap-3">
                  <img
                    src={checkResources}
                    alt="Check out your learning resources"
                    className=" w-full ss:w-[250px]"
                  />
                  <p className="text-sm ss:text-xs text-gray-700 font-medium text-center">
                    Select a level, course and resource type to get learning
                    resources.
                  </p>
                </div>
              )}
              {gettingResources && !error && (
                <div className="mt-10 flex items-center justify-center ">
                  <Spinner className="fill-green1 w-8 " />
                </div>
              )}
              {error && !gettingResources && (
                <div className="flex items-center justfiy-center flex-col mt-3">
                  <p className="text-sm ss:text-xs text-gray-700 font-medium text-center ">
                    Oops, something went wrong. Please try again.
                  </p>
                </div>
              )}
              {files && files.length === 0 && !gettingResources && !error && (
                <div className="flex items-center justify-center flex-col">
                  <img
                    src={fileSearch}
                    alt="File not available"
                    className=" w-full ss:w-[400px]"
                  />
                  <p className="text-sm ss:text-xs text-gray-700 font-medium text-center ">
                    Sorry, {course}{" "}
                    {resourcesType === "textbooks"
                      ? "Textbooks"
                      : resourcesType === "pastquestions"
                        ? "Past Questions"
                        : "Handouts"}{" "}
                    are not available.
                  </p>
                </div>
              )}
              {files && files.length > 0 && !gettingResources && !error && (
                <div className="grid items-center xss:grid-cols-2 sm:grid-cols-3 gap-4">
                  {files.map((info, i) => (
                    <FileCard key={i} {...info} />
                  ))}
                </div>
              )}
              {/* {gettingResources ? (
                <div className="mt-10 flex items-center justify-center ">
                  <Spinner className="fill-green1 w-8 " />
                </div>
              ) : files && files.length === 0 ? (
                error ? (
                  <div className="flex items-center justfiy-center flex-col">
                    <p className="text-sm ss:text-xs text-gray-700 font-medium text-center ">
                      Oops, something went wrong. Please try again.
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center flex-col">
                    <img
                      src={fileSearch}
                      alt="File not available"
                      className=" w-full ss:w-[400px]"
                    />
                    <p className="text-sm ss:text-base text-gray-700 font-medium text-center ">
                      Sorry, {course}{" "}
                      {resourcesType === "textbooks"
                        ? "Textbooks"
                        : resourcesType === "pastquestions"
                          ? "Past Questions"
                          : "Handouts"}{" "}
                      are not available.
                    </p>
                  </div>
                )
              ) : (
                files && files.length > 0 && "Files fetced"
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

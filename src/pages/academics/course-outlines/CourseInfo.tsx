import { useState, useEffect } from "react";
import { courseInfo100 } from "../../../utils/academics/course-outlines/levels/100/info/courseInfo100";
import { courseInfo200 } from "../../../utils/academics/course-outlines/levels/200/info/courseInfo200";
import { courseInfo300 } from "../../../utils/academics/course-outlines/levels/300/info/courseInfo300";
import { courseInfo400 } from "../../../utils/academics/course-outlines/levels/400/info/courseInfo400";
import { courseInfo500 } from "../../../utils/academics/course-outlines/levels/500/info/courseInfo500";
import { useParams } from "react-router-dom";
import file from "/icons/course-outline/levels/file.png";
import { useCourseOutlineContext } from "../../../context/CourseOutline";
import { ICourseInfo } from "../../../models/academics/course-outline/courseInfo";
import { BounceLoader } from "../../../components/loaders/FullBounceLoader";

export default function CourseInfo() {
  const { id, level } = useParams<string>();
  const { semester } = useCourseOutlineContext();
  const [courseInfo, setCourseInfo] = useState<ICourseInfo | null>();

  useEffect(() => {
    if (id) {
      if (level === "100") {
        setCourseInfo(courseInfo100[semester][id]);
      } else if (level === "200") {
        setCourseInfo(courseInfo200[semester][id]);
      } else if (level === "300") {
        setCourseInfo(courseInfo300[semester][id]);
      } else if (level === "400") {
        setCourseInfo(courseInfo400[semester][id]);
      } else if (level === "500") {
        setCourseInfo(courseInfo500[semester][id]);
      }
    }
  }, [level, id]);

  return (
    <div className="bg-gray-50">
      <div className="flex items-center justify-center min-h-screen">
        {courseInfo ? (
          <div className="max-w-[950px] px-3 pt-20 pb-8 xsm:px-10 xsm:pt-24 xsm:pb-10">
            <div className=" shadow-2 px-3 pt-10 pb-8 xsm:px-10 border-2 border-gray-200">
              <div className="flex-center gap-0 ss:gap-3 flex-wrap">
                <div className="flex-center">
                  <img src={file} alt="Book" className="w-10 sm:w-12 sm:mr-0" />
                  <h3 className="text-lg xss:text-xl sm:text-2xl font-[600] text-center">
                    {courseInfo.courseTitle}
                  </h3>{" "}
                </div>
                <h3 className="text-md xss:text-lg sm:text-2xl font-[600]">
                  ({courseInfo.courseCode})
                </h3>
              </div>
              <div className="flex-center gap-3 font-[400] text-xs sm:text-lg mb-1 sm:mb-2">
                <p>
                  Credit Unit - {courseInfo.creditUnit}{" "}
                  {Number(courseInfo.creditUnit) > 1 ? "Units" : "Unit"}
                </p>
                {"  "}
                <span>{courseInfo.creditUnits}</span>
              </div>
              <h4 className="text-center font-semibold text-md xss:text-lg sm:text-2xl">
                COURSE OUTLINE
              </h4>
              {courseInfo.preRequisite && (
                <>
                  <h4 className="text-base sm:text-md font-semibold">
                    {" "}
                    Pre-requisite: <div className="bar-style2" />
                  </h4>
                  <p className="mb-1 sm:mb-3 font-[300] text-sm sm:text-xs text-gray-600">
                    {courseInfo.preRequisite}
                  </p>
                </>
              )}
              {courseInfo.info.map(({ heading, content }, index) => (
                <div
                  key={index}
                  className="py-2 mb-2 border-b-2 border-gray-200"
                >
                  {heading && heading === "General" ? (
                    <div className="text-base sm:text-md font-semibold">
                      {heading}
                      <div className="bar-style2 mb-2 font-normal" />
                    </div>
                  ) : (
                    <div className="text-base sm:text-md font-semibold">
                      {heading}
                    </div>
                  )}
                  <div className="text-sm sm:text-base"> {content}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <BounceLoader />
        )}
      </div>
    </div>
  );
}

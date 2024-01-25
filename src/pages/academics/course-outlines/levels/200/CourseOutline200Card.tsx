import { FC } from "react"
import { CourseInfo } from "../../../../../models/courseOutline"
import { Link } from "react-router-dom"

export const CourseOutline200Card:FC<CourseInfo> = ({courseCode, courseTitle, id, creditUnit}) => {
  return (
    <Link to={`/course-outlines/200-level/${id}`}>
    <div className=" relative max-w-auto xsm:max-w-[400px] h-[220px] p-7 shadow-1 rounded-lg hover:-translate-y-px">
      <div className="h-full">
        <h4 className="font-bold text-md ss:text-xl">{courseTitle}</h4>
        <h4 className="font-semibold mb-4">
          CREDIT UNIT:{" "}
          <span className="capitalize font-semibold">{creditUnit}</span>{" "}
        </h4>
        <button
          className="transition-colors duration-150 ease-in-out absolute inset-x-0 bottom-0 w-full
       text-green1 font-bold p-3 border-t-2 border-t-gray-300 "
        >
          <Link to={`/course-outlines/200-level/${id}`}>
            View Course Outline
          </Link>
        </button>
      </div>
      <span className="absolute text-sm rounded-tr-lg rounded-bl-lg top-0 right-0 font-semibold px-2 py-1 bg-green1 text-white">
        {courseCode}
      </span>{" "}
    </div>
  </Link>

  )
}

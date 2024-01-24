import { FC } from "react";
import { CourseOutlines } from "../../../models/courseOutline";
import { Link } from "react-router-dom";
import hsh from "../../../assets/icons/course-outline/levels/book1.png"
export const CourseOutlineCard: FC<CourseOutlines> = ({
  // icon,
  title,
  level,
  route,
}) => {
  return (
    <Link to={route}>
        <div className="max-w-auto xsm:max-w-[460px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <img src={hsh} alt="Book" className="w-16 h-16" />
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-[500] text-gray-500 text-xs">
        We have compiled a collection of course outlines tailored for {level} Level
        students ensuring they have necessary information needed to make
        informed decisions about your academic journey.
      </p>
      <a
        href={route}
        className="font-[600] inline-flex items-center text-green2 hover:underline"
      >
        Check Course Outline 
      </a>
    </div>
    </Link>

  );
};

import { FC } from "react";
import { CourseSelectedProps } from "../../../../../models/gpa";

export const CourseSelected: FC<CourseSelectedProps> = ({ courseInfo }) => {
  const { course, unit, grade } = courseInfo;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {course}
      </th>
      <td className="px-6 py-4">{unit}</td>
      <td className="px-6 py-4">{grade}</td>
      <td className="px-6 py-4 text-right">
        <a href="#" className="font-medium text-green1 hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};

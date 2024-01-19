import { FC } from "react";
import { CourseSelectedProps } from "../../../../models/gpa";

export const CourseSelected: FC<CourseSelectedProps> = ({ courseInfo }) => {
  const { course, unit, grade } = courseInfo;
  return (
    <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {course}
      </th>
      <td className="px-6 py-0">{unit}</td>
      <td className="px-6 py-0">{grade}</td>
      <td className="px-6 py-0 text-right">
        <a href="#" className="font-medium text-green1 hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};

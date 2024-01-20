import { FC } from "react";
import { CourseSelectedProps } from "../../../../models/gpa";
import { useComputeGPA } from "../../../../hooks/useComputeGPA";
import TrashIcon from "../../../../assets/svg/icons/trash.svg";
import EditIcon from "../../../../assets/svg/icons/edit.svg";

export const CourseSelected: FC<CourseSelectedProps> = ({ courseInfo }) => {
  const { id, course, unit, grade } = courseInfo;
  const { deleteCourseGrade, editCourseGrade } = useComputeGPA();

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
      <td className="ss:px-6 py-0 text-right">
        <div className="flex items-center justify-between">
          <button
            className="font-medium text-green1 hover:underline"
            onClick={() => editCourseGrade(id)}
          >
            <span className="hidden ss:block">Edit</span>{" "}
            <img src={EditIcon} alt="Edit" className="w-4 block ss:hidden" />
          </button>
          <button
            className="font-medium text-red-600 hover:underline"
            onClick={() => deleteCourseGrade(id)}
          >
            <span className="hidden ss:block">Delete</span>{" "}
            <img src={TrashIcon} alt="Delete" className="w-4 block ss:hidden" />
          </button>
        </div>
      </td>
    </tr>
  );
};

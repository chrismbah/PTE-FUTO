import { FC } from "react";
import { CourseSelectedProps } from "../../../../models/academics/gpa";
import { useComputeGPA } from "../hooks/useComputeGPA";
import { EditIcon } from "../../../../components/icons/general/EditIcon";
import { TrashIcon } from "../../../../components/icons/general/TrashIcon";
export const CourseSelected: FC<CourseSelectedProps> = ({ courseInfo }) => {
  const { id, course, unit, grade } = courseInfo;
  const { deleteCourseGrade, editCourseGrade } = useComputeGPA();

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap text-ss sm:text-sm"
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
            <div className="hover:scale-90 w-4 rounded-full">
              <EditIcon className="w-4 block ss:hidden" />
            </div>
          </button>
          <button
            className="font-medium text-red-600 hover:underline"
            onClick={() => deleteCourseGrade(id)}
          >
            <span className="hidden ss:block">Delete</span>{" "}
            <div className="hover:scale-90 w-4 rounded-full">
              <TrashIcon className="block ss:hidden" />
            </div>
          </button>
        </div>
      </td>
    </tr>
  );
};

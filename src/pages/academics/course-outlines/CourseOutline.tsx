import { CourseOutlineCard } from "./CourseOutlineCard";
import { courseOutlineLevels } from "../../../utils/academics/course-outlines/courseOutlineLevels";
import { CourseOutlines } from "../../../models/courseOutline";

export default function CourseOutline() {
  return (
    <div className="box-width">
      <div className="page-section">
        <div className="w-full flex items-center justify-center mb-4 flex-col">
          <h2>Course Outlines</h2>
          <p className="text-center">
            Here, you will find detailed information about the courses offered{" "}
            <br />
            at the each level, providing you with a clear understanding of the{" "}
            <br />
            curriculum and learning objectives for each subject.
          </p>
        </div>
        <>
          {courseOutlineLevels.map(
            (levelInfo: CourseOutlines, index: number) => {
              return <CourseOutlineCard key={index} {...levelInfo}  />;
            }
          )}
        </>
      </div>
    </div>
  );
}

import { CourseOutlineCard } from "./CourseOutlineCard";
import { courseOutlineLevels } from "../../../data/academics/course-outlines";
import Footer from "../../../components/footer/Footer";

export default function CourseOutline() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width ">
        <div className="page-section">
          <div className="w-full flex items-center justify-center mb-6 flex-col">
            <h2 className="text-green1 text-center font-bold text-xl ss:text-xll">Course Outlines</h2>
            <p className="heading-p">
              Discover the depth and focus of our courses through detailed
              descriptions of curriculum <br />
              and learning objectives, presented by level for your convenience.
            </p>
          </div>
          <div className="grid items-center xsm:grid-cols-2 xlg:grid-cols-3 gap-6">
            {courseOutlineLevels.map((levelInfo, index) => {
              return <CourseOutlineCard key={index} {...levelInfo} />;
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

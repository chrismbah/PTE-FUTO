import { useCourseOutlineContext } from "../../../../../context/CourseOutline";

export default function courseOutline200() {
  const { semester200L, setSemester200L } = useCourseOutlineContext();
  return (
    <div className="box-width">
      <div className="course-outline-section">
        <div className="w-full flex items-center justify-center mb-6 flex-col">
          <h2 className="text-green1">Courses Offered for 200 Level</h2>
          <p className="text-center text-xs xsm:text-base font-[500]">
            The details for 100 Level{" "}
            <span className="text-green1 text-capitalize">{semester200L}</span>{" "}
            Semester courses are as follows
          </p>
          <div className="flex items-center justify-center mt-2">
            <button
              className={`p-3  rounded-l-lg ${
                semester200L === "First" ? "bg-green1 text-white" : "bg-gray-50"
              } border-r-2 border-green1`}
              onClick={() => setSemester200L("First")}
            >
              {" "}
              1st Semester{" "}
            </button>{" "}
            <button
              className={`p-3 rounded-r-lg ${
                semester200L === "Second"
                  ? "bg-green1 text-white"
                  : "bg-gray-50"
              }`}
              onClick={() => setSemester200L("Second")}
            >
              {" "}
              Second Semester{" "}
            </button>
          </div>
        </div>
        <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
          {/* {courseOutline200[semester].courseInfo.map((info, index) => (
            <CourseOutline100Card key={index} {...info} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

import Footer from "../../components/footer/Footer";

export default function Admission() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-center px-2">
        <div className="px-2 sm:px-14 sm:py-10 py-6 my-16 ss:mt-20 sm:my-24 bg-white shadow rounded-lg">
          <h2 className="">
            <div className="bar-style" />
            Programme Structure
          </h2>
          <p className="text-gray-700 font-semibold text-ss ss:text-sm xlg:text-xs mb-4">
            Students spend a total of five years to obtain the B.Eng. (Polymer
            and Textile Engineering) Degree
          </p>
          <p className="text-sm sm:text-xs text-gray-700 leading-7 mb-1">
            The Programme is structured as follows:
          </p>
          <ol className=" space-y-2 list-disc list-inside text-sm sm:text-xs text-gray-700 leading-7 mb-4">
            <li>
              Common University courses of the first year which include the
              basic sciences of Mathematics, Physics, Chemistry and Biology; the
              Basic Engineering Courses of Engineering drawing and Workshop
              practice; and General Studies courses of Use of English and Social
              Sciences.
            </li>
            <li>
              The first-year courses are accomplished through the formal
              University lectures, tutorials, practicals, assignments and
              examinations.
            </li>
            <li>
              Polymer and Textile Engineering Courses actually start with the
              second year PTE 202 (Introduction to Polymer and Textile
              Engineering), in the Rain Semester. The remaining 2nd-year courses
              are the Common School of Engineering Courses taken through the
              formal University lectures, tutorials, practicals, assignments and
              examination, followed by a 3-months industrial attachment period
              during the long vacation (SIW 200). Thereafter, an Industrial
              training (IT) report is submitted and defended by each student and
              graded.
            </li>{" "}
            <li>
              In the 3rd year, some common School of Engineering courses
              embracing formal University lectures, tutorials, practicals,
              assignments and examinations, followed by a 3-months industrial
              attachment period during the long vacation (SIW 300). Thereafter
              an Industrial Training (IT) report is submitted and defended by
              each student and graded. The remaining courses are Polymer and
              Textile Engineering.
            </li>{" "}
            <li>
              In-depth studies in Polymer and Textile Engineering comes as
              specialization courses, experimental and design projects and
              laboratory practices are in the fourth and final year.
            </li>
            <li>
              In the 4th year, core Polymer and Textile Engineering Courses,
              including some electives are taken during the 1st semester. A four
              months industrial attachment period follows in the second semester
              (SIW400). This is also followed by a 2-months industrial
              attachment during the long vacation period (SIW400/401).
              Therefore, a combined Industrial Training report (SIW 400/401) is
              submitted and defended by each student and graded. One common
              engineering course ENG 405 is also taken in the Harmattan
              semester.
            </li>
            <li>
              In the 5th year, 500 level courses including electives, projects,
              seminars etc. are taken, and a B.Eng. Project Report is submitted
              and defended by each student.
            </li>
          </ol>
          <p className="text-sm sm:text-xs text-gray-700 leading-7">
            The following standard terminology shall be used for different
            categories of courses:
          </p>
          <p className="text-sm sm:text-xs text-gray-700 leading-7">
            <span className="font-semibold text-gray-900">Compulsory:</span> Courses specified
            by the Department which a student must take and pass;
          </p>
          <p className="text-sm sm:text-xs text-gray-700 leading-7">
            <span className="font-semibold text-gray-900">Required:</span> Courses specified
            by the Department which a student must take but not necessarily
            pass. Where there is a group of such courses, the department must
            state the minimum number of units to be passed.
          </p>
          <p className="text-sm sm:text-xs text-gray-700 leading-7">
            <span className="font-semibold text-gray-900">Elective:</span> Courses specified
            by the Department from which a student can take in order to make up
            the required additional units for the award of the degree;
          </p>
          <p className="text-sm sm:text-xs text-gray-700 leading-7">
            <span className="font-semibold text-gray-900">Pre-requisite:</span> A course whose
            knowledge is essential prior to take other specified courses;
          </p>
          <p className="text-sm sm:text-xs text-gray-700 leading-7">
            <span className="font-semibold text-gray-900">Concurrent:</span> Specified courses
            which must be taken within the same semester, usually pre-requisite
            courses.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

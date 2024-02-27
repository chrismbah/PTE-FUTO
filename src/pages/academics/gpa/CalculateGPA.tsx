import GPAForm from "./components/GPAForm";
import { useComputeGPA } from "./hooks/useComputeGPA";
import { GPAMessage } from "./components/GPAMessage";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../../../components/icons/ArrowLeftIcon";
export default function CalculateGPA() {
  const { studentGPA } = useComputeGPA();
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="  w-full min-h-[95vh] flex items-center justify-center px-3 sm:px-10 py-10 pt-20">
        <div className="relative bg-white p-5 sm:p-8 shadow-4 rounded-lg max-w-[700px] ">
          <div className="flex justify-between items-center mb-2 flex-col xxss:flex-row xxss:gap-2 mt-4 sm:mt-2">
            <h3 className="flex items-center justify-start w-full ">
              {" "}
              <Link to="/">
                <ArrowLeftIcon className="w-5 sm:w-7 mr-1" />
              </Link>{" "}
              GPA Calculator
            </h3>
            <div className="w-full xxss:w-auto">
              {" "}
              <div className="text-sm font-semibold">
                Your GPA:{" "}
                <span className="text-green1 text-lg font-semibold">
                  {studentGPA >= 0 ? studentGPA : "0.00"}
                </span>
              </div>{" "}
              <GPAMessage />
            </div>
          </div>
          <p className="mb-4 text-sm sm:text-base">
            Track your progress, strategize your efforts, and conquer your
            coursework.{" "}
          </p>
          <div>
            <GPAForm />
          </div>
        </div>
      </div>
    </div>
  );
}

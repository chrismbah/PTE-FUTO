import GPAForm from "./components/GPAForm";
import { useComputeGPA } from "./hooks/useComputeGPA";
import { GPAMessage } from "./components/GPAMessage";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../../../components/icons/general/ArrowLeftIcon";
export default function CalculateGPA() {
  const { studentGPA } = useComputeGPA();
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="  w-full min-h-[95vh] flex items-center justify-center px-3 sm:px-10 py-10 pt-20 sm:pt-28">
        <div className="relative bg-white p-5 sm:p-8 shadow-4 rounded-lg max-w-[700px] ">
          <div className="flex justify-between items-center mb-2 flex-col xxss:flex-row xxss:gap-2 mt-4 sm:mt-2">
            <h3 className=" w-full ss:w-fit flex items-center justify-start font-semibold ">
              {" "}
              <Link to="/">
                <ArrowLeftIcon className="w-5 sm:w-7 -ml-2" />
              </Link>{" "}
              GPA Calculator
            </h3>
            <div className="w-full xxss:w-fit">
              {" "}
              <div className="text-sm font-semibold flex items-center gap-1">
                <span className="xxss:w-full ss:w-fit text-left">GPA:</span>
                <span className="text-green1 text-base sm:text-lg font-semibold xxss:w-full ss:w-fit text-left">
                  {studentGPA >= 0 ? studentGPA : "0.00"}
                </span>
              </div>{" "}
              <GPAMessage />
            </div>
          </div>
          <div>
            <GPAForm />
          </div>
        </div>
      </div>
    </div>
  );
}

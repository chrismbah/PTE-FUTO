import GPAForm from "./components/GPAForm";
// import page from "../../../assets/svg/background/page-turner.svg"
import { useComputeGPA } from "../../../hooks/useComputeGPA";
import { GPAMessage } from "./components/GPAMessage";
import Footer from "../../../components/footer/Footer";
export default function CalculateGPA() {
  const { studentGPA } = useComputeGPA();
  return (
    <div className="bg-[url('../../../assets/svg/background/page-turner.svg')] min-h-screen w-full">
      <div className="bg-gray-50 w-full min-h-[95vh] flex items-center justify-center px-3 sm:px-10 py-10 pt-20">
        <div className="bg-white p-5 sm:p-8 shadow-sm max-w-[700px] ">
          <div className="flex justify-between items-center mb-2 flex-col xxss:flex-row xxss:gap-2">
            <h3 className="w-full xxss:w-auto">GPA Calculator</h3>
            <div className="w-full xxss:w-auto">
              {" "}
              <div className="text-xs">
                Your GPA:{" "}
                <span className="text-green1 text-md font-semibold">
                  {studentGPA >= 0 ? studentGPA : "0.00"}
                </span>
              </div>{" "}
              <GPAMessage />
            </div>
          </div>
          <p className="mb-4 text-xs sm:text-base">
            Track your progress, strategize your efforts, and conquer your
            coursework.{" "}
          </p>
          <div>
            <GPAForm />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

import GPAForm from "./components/GPAForm";
// import page from "../../../assets/svg/background/page-turner.svg"
export default function CalculateGPA() {
  return (
    <div className="bg-[url('../../../assets/svg/background/page-turner.svg')] min-h-screen w-full">
      <div className="bg-gray-50 w-full min-h-screen flex items-center justify-center px-3 sm:px-10 py-10 pt-20">
        <div className="bg-white p-5 sm:p-14 shadow-sm">
          <h2>GPA Calculator</h2>
          <p className="mb-4">
            Our GPA Calculator is here to empower you on your academic journey
          </p>
          <div>
            <GPAForm />
          </div>
        </div>
      </div>
    </div>
  );
}

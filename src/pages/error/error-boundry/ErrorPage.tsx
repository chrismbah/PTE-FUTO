import error from "../../../assets/svg/illustrations/error.svg";
export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <img src={error} alt="Error" className="w-[80%] ss:w-[350px]" />
      <p className="text-md ss:text-xl sm:text-2xl font-bold text-gray-900 text-center">
        Yikes! Something went wrong
      </p>
      <p className="text-ss ss:text-sm sm:text-base text-gray-700 text-center">
        Brace yourself till we get the error fixed
      </p>
      <p className="text-ss ss:text-sm sm:text-base text-gray-700 text-center">
        You may also{" "}
        <button
          className="text-green1 font-medium"
          onClick={() => window.location.reload()}
        >
          refresh
        </button>{" "}
        the page or try again later.
      </p>
    </div>
  );
}

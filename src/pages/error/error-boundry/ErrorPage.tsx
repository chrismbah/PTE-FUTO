import error from "../../../assets/svg/illustrations/error.svg";
// import error2 from "../../../assets/svg/illustrations/error2.svg";
export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <img src={error} alt="Error" className="w-[400px]" />
    </div>
  );
}

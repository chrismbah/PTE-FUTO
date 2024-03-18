import logo from "/logo.png";

export default function LogoSpinner() {
  return (
    <div className="relative flex justify-center items-center h-screen w-full">
      <div className="absolute animate-spin rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 border-[3px] border-solid border-current border-e-transparent border-green1"></div>
      <img
        src={logo}
        className="rounded-full h-[56px] w-[56px] sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px]"
      />
    </div>
  );
}

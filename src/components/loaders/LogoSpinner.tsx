// import logo1 from "../../assets/logo/logo.png"
// import logo2 from "../../assets/svg/logo/logo2.svg"
import logo3 from "../../assets/svg/logo/logo3.svg"

export default function LogoSpinner() {
    return (
        <div className="relative flex justify-center items-center h-screen w-full">
        <div className="absolute animate-spin rounded-full h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 border-t-4 border-b-4 border-green2"></div>
        <img src={logo3}  className="rounded-full h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24"/>
    </div>
    );
  }
  
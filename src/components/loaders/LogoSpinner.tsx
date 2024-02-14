import logo from "../../assets/logo/logo.png"
export default function LogoSpinner() {
    return (
        <div className="relative flex justify-center items-center h-screen w-full">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green2"></div>
        <img src={logo}  className="rounded-full h-24 w-24"/>
    </div>
    );
  }
  
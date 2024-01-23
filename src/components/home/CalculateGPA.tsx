// import calculateGP from "../../assets/svg/home/calculateGP.svg";
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import calculator from "../../utils/animation/calculator.json";

export default function CalculateGP() {
  return (
    <div className="box-width">
      <div className="section section-flex-between">
        <div className="w-full">
          <div className="bar-style" />
          <h2 className="mb-5">Calculate Your GPA</h2>
          <p className="mb-5">
            Here you can track your academic progress and plan your journey at{" "}
            <br />
            Polymer and Textile Engineering FUTO. Your CGPA is key, reflecting
            your academic <br />
            performance and commitment to excellence.
          </p>
          <Button theme={customButtonTheme} size={"lg"} color="primary">
            <Link to="/calculate-gpa">Calculate Here</Link>
          </Button>
        </div>
        <div className="max-w-[500px] mmd:max-w-[700px] xlg:w-[1000px]">
            <Lottie loop={true} animationData={calculator} />
          </div>
        {/* <div>
          <img
            src={calculateGP}
            alt="Calculate Your GP"
            className="w-[500px] xmd:w-[800px] xmd:min-w-[300px]"
          />
        </div> */}
      </div>
    </div>
  );
}

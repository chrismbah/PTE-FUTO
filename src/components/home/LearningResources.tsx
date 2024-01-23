import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
// import learning from "../../assets/svg/home/learning.svg";
import Lottie from "lottie-react";
import learningAnimation from "../../utils/animation/learning.json";

export default function LearningResources() {
  return (
    <div className="bg-gray-50">
      <div className="box-width">
        <div className="section section-flex-between-reverse md:gap-6">
          <div className="max-w-[500px] mmd:max-w-[500px] xlg:w-[1000px]">
            <Lottie loop={true} animationData={learningAnimation} />
          </div>
          <div className="w-full">
            <div className="bar-style" />
            <h2 className="mb-5">Learning Resources</h2>
            <p className="mb-5">
              Explore expert-curated learning materials, including textbooks, <br />
              notes, and handouts. Enhance understanding with immersive <br />
              experiences and reinforce knowledge. Your go-to resource for
              comprehensive learning.
            </p>
            <Button theme={customButtonTheme} size={"lg"} color="primary">
              <Link to="/calculate-gp">Get Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

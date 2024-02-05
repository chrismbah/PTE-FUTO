import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import Lottie from "lottie-react";
import learningAnimation from "../../utils/animation/learning.json";
import { useNavigateAuthUser } from "../../hooks/auth/useNavigateAuthUser";

export default function LearningResources() {
  const { navigateAuthUser } = useNavigateAuthUser();
  return (
    <div className="">
      <div className="box-width">
        <div className="section section-flex-between">
          <div className="w-full">
            <div className="bar-style" />
            <h2 className="mb-1 md:mb-4">Learning Resources</h2>
            <p className="section-p mb-5">
              Download and explore compiled learning materials, including textbooks,
              notes, and handouts. <br /> Enhance understanding with immersive
              experiences and reinforce knowledge. <br /> Your go-to resource
              for comprehensive learning.
            </p>
            <Button
              theme={customButtonTheme}
              size={"lg"}
              color="primary"
              onClick={() => navigateAuthUser("/learning-resources")}
            >
              Get Resources
            </Button>
          </div>
          <div className="max-w-[400px] mmd:w-[700px] mmd:min-w-[400px]">
            <Lottie loop={true} animationData={learningAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
}

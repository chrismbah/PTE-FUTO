import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
import learning from "../../assets/svg/home/learning.svg";

export default function LearningResources() {
  return (
    <div className="bg-gray-50">
      <div className="box-width">
        <div className="section section-flex-between-reverse">
          <div>
            <img
              src={learning}
              alt="Learning Resources"
              className="w-[500px] xmd:w-[800px] xmd:min-w-[300px]"
            />
          </div>
          <div className="w-full">
            <h2 className="mb-5">Learning Resources</h2>
            <p className="mb-5">
              Explore expert-curated learning materials, including textbooks,
              notes, and handouts. Enhance understanding with immersive
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

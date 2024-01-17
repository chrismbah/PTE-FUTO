import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
import courseOutline from "../../assets/svg/home/courseOutline.svg";

export default function CourseOutline() {
  return (
    <div className="box-width">
      <div className="section section-flex-between">
        <div className="w-full">
          <h2 className="mb-5">Course Outlines</h2>
          <p className="mb-5">
            Our commitment to FUTO's Polymer and Textile Engineering students includes{" "}
            <br />
            providing a carefully curated collection of course outlines. <br />
            These materials are specifically designed to empower students with
            the <br />
            information they need to make well-informed decisions about their
            academic journey.
          </p>
          <Button theme={customButtonTheme} size={"lg"} color="primary">
            <Link to="/calculate-gp">Get Course Outline</Link>
          </Button>
        </div>
        <div>
          <img
            src={courseOutline}
            alt="Course Outline"
            className="w-[500px] xmd:w-[800px] xmd:min-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

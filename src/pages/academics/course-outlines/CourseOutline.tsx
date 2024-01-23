// import { useEffect, useRef } from "react"
import { CourseOutlineCard } from "./CourseOutlineCard";
import { courseOutlineLevels } from "../../../utils/academics/course-outlines/courseOutlineLevels";
import { CourseOutlines } from "../../../models/courseOutline";
import circle from "../../../utils/animation/hero.json"
import Lottie from "lottie-react"

export default function CourseOutline() {
  // const container = useRef(null)
  // useEffect(()=>{
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("../../../utils/animation/circle.json")
  //   })
  // }, [])

  return (
    <div className="box-width">
      <div className="page-section">
        <div className="w-full flex items-center justify-center mb-6 flex-col">
          <h2 className="text-green1">Course Outlines</h2>
          <p className="text-center text-xs xsm:text-base">
            Discover the depth and focus of our courses through detailed
            descriptions of curriculum <br />
            and learning objectives, presented by level for your convenience.
          </p>
        </div>
        {/* <div className="" ref={container} >
        </div> */}
        <div className="w-[400px] h-[400px]">

        <Lottie loop={true} animationData={circle}  />
        </div>

        <div className="grid items-center xsm:grid-cols-2 xlg:grid-cols-3 gap-6">
          {courseOutlineLevels.map(
            (levelInfo: CourseOutlines, index: number) => {
              return <CourseOutlineCard key={index} {...levelInfo} />;
            }
          )}
        </div>
      </div>
    </div>
  );
}

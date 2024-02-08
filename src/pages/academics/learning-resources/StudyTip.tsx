import { useState } from "react";
import { useLearningResourcesContext } from "../../../context/LearningResources";
import { InfoIcon } from "../../../components/icons/InfoIcon";

export default function StudyTip() {
  const { studyTip } = useLearningResourcesContext();
  const [toggleTip, setToggleTip] = useState(false);

  return (
    <>
      <div className="">
        <div onClick={() => setToggleTip(!toggleTip)} className="relative">
          <InfoIcon style="w-5 h-5 ms-2  cursor-pointer text-gray-400 hover:text-gray-500" />
        </div>
        <div
          className={`${toggleTip ? "opacity-100 z-50" : "opacity-0 z-[-9]"} 
          rounded-lg border border-gray-300 absolute top-8 right-[] xsm:-left-[360%] transition duration-300 ease-in-out `}
        >
          <div className="w-40 xsm:w-64 text-sm">
            <div className=" rounded-t-lg px-3 py-2 bg-gray-100">
              <h4 className="font-semibold text-ss  sss:text-sm xsm:text-base text-gray-900">
                Learning Tip
              </h4>
            </div>
            <div className="px-3 py-2 bg-white rounded-b-lg ">
              <p className="text-ss font-medium text-gray-600">{studyTip}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import { useLearningResourcesContext } from "../../../context/LearningResources";
import { InfoIcon } from "../../../components/icons/InfoIcon";

export default function StudyTip() {
  const { studyTip } = useLearningResourcesContext();
  const [toggleTip, setToggleTip] = useState(false);

  return (
    <>
      <div>
        <div onClick={() => setToggleTip(!toggleTip)} className="relative">
          <InfoIcon />
        </div>
        <div
          className={`${toggleTip ? "hidden" : "block"} absolute -right-[350%] transition duration-300 ease-in-out `}
        >
          <div className="flex items-center justify-center w-full">
            <div
              className={`font-dmSans w-64 text-sm border-4 border-gray-600 text-gray-500 dark:text-gray-40`}
            >
              <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Learning Tip
                </h4>
              </div>
              <div className="px-3 py-2">
                <p>{studyTip}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

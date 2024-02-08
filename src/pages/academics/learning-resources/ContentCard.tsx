import { FC, useState } from "react";
import { convertBytesToMB } from "../../../helpers/convertBytesToMb";
import { storage } from "../../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { Content } from "../../../models/academics/learning-resources";
import { useToast } from "../../../hooks/notification/useToast";
import fileDownloadIcon from "../../../assets/svg/icons/fileDownload.svg";
import Spinner from "../../../components/loaders/Spinner";
import { Tooltip } from "flowbite-react";
import { customTooltipTheme } from "../../../themes/customTooltip";

export const ContentCard: FC<Content> = ({ name, size, path }) => {
  const [fileLoading, setFileLoading] = useState(false);
  const storageRef = ref(storage);
  const learningResourcesRef = ref(storageRef, path);

  const downloadFile = async () => {
    try {
      setFileLoading(true);
      const url = await getDownloadURL(learningResourcesRef);
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log(blob);
      setFileLoading(false);
    } catch (error) {
      console.error("Error downloading file:", error);
      setFileLoading(false);
    }
  };

  const downloadResources = () => {
    useToast("promise", null, downloadFile(), {
      loadingMsg: "Downloading...",
      successMsg: "File Downloaded. Happy Learning!",
      errorMsg: "Something went wrong. Please try again",
    });
  };
  return (
    <div className="w-full h-[75px] sss:h-[105px] shadow-md bg-white hover:shadow-lg transition duration-150 rounded-md p-2 ss:p-4 ">
      <div className="relative h-full">
        <p className="text-ss  sss:text-sm xsm:text-base font-semibold ">{name}</p>
        <span className="text-ss font-[500] absolute bottom-0 left-0 text-gray-700">
          {convertBytesToMB(size)} MB
        </span>
        <div className="absolute bottom-0 right-0">
          {fileLoading ? (
            <Spinner />
          ) : (
            <Tooltip
              content="Download"
              animation="duration-500"
              theme={customTooltipTheme}
            >
              <button onClick={downloadResources}>
                <img
                  src={fileDownloadIcon}
                  alt="Download"
                  className="mt-1 w-5 md:w-6"
                />
              </button>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

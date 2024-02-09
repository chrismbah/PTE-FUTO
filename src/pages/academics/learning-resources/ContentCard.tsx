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
import { FileDownloadIcon } from "../../../components/icons/FileDownloadIcon";

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
      setFileLoading(false);
      useToast("error", "Something went wrong. Pease try again", null, null)
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
    <div className="w-full h-[100px] sss:h-[140px] border bg-gray-100 border-gray-300
      hover:bg-gray-100 hover:border-green1 transition duration-150 rounded-md p-2 ss:p-4 ">
      <div className="relative h-full w-full">
        <p className="text-ss  sss:text-sm xsm:text-base font-semibold text-wrap ">{name}</p>
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
                <FileDownloadIcon className="mt-1 w-5 md:w-6" />
              </button>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

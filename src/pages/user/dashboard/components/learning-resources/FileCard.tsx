import { FC, useState } from "react";
import { convertBytes } from "../../../../../helpers/convertBytes";
import { storage } from "../../../../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { Content } from "../../../../../models/academics/learning-resources";
import { notifyUser } from "../../../../../helpers/notifyUser";
import { Spinner } from "../../../../../components/loaders/Spinner";
import { Tooltip } from "flowbite-react";
import { customTooltipTheme } from "../../../../../themes/customTooltip";
import { FileDownloadIcon } from "../../../../../components/icons/FileDownloadIcon";
import { useGetUserInfo } from "../../../../../hooks/auth/useGetUserInfo";

export const FileCard: FC<Content> = ({ name, size, path }) => {
  const [fileLoading, setFileLoading] = useState(false);
  const storageRef = ref(storage);
  const learningResourcesRef = ref(storageRef, path);
  const dataSize = convertBytes(size);
  const { user } = useGetUserInfo();

  const downloadFile = async () => {
    if (!user) {
      notifyUser("info", "Please login to access this feature.");
      return;
    }
    try {
      setFileLoading(true);
      notifyUser("loading", "Please wait...");
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
      notifyUser("success", "File Downloading...");
    } catch (error) {
      setFileLoading(false);
      notifyUser("error", "Something went wrong. Pease try again");
    }
  };

  return (
    <div
      className="w-full h-[100px] sss:h-[140px]  shadow bg-white
       hover:shadow-lg transition duration-150 rounded-md p-2 ss:p-4 "
    >
      <div className="relative h-full w-full">
        <p className="text-ss  sss:text-sm xsm:text-base font-semibold text-wrap ">
          {name}
        </p>
        <span className="text-ss font-[500] absolute bottom-0 left-0 text-gray-700">
          {dataSize}
        </span>
        <div className="absolute bottom-0 right-0">
          {fileLoading ? (
            <Spinner className="w-4 sm:w-6" />
          ) : (
            <Tooltip
              content="Download"
              animation="duration-500"
              theme={customTooltipTheme}
            >
              <button onClick={downloadFile}>
                <FileDownloadIcon className="mt-1 w-5 md:w-6" />
              </button>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

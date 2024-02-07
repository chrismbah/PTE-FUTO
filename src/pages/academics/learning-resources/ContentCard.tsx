import { FC, useState } from "react";
import { convertBytesToMB } from "../../../helpers/convertBytesToMb";
import { storage } from "../../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { Content } from "../../../models/academics/learning-resources";
import { useToast } from "../../../hooks/notification/useToast";
import ButtonSpinner from "../../../components/loaders/ButtonSpinner";
import fileDownloadIcon from "../../../assets/svg/icons/fileDownload.svg";
import Spinner from "../../../components/loaders/Spinner";

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
      loadingMsg: "File downloading...",
      successMsg: "File Downloaded. Happy Learning!",
      errorMsg: "Error downloading file. Please try again",
    });
  };
  return (
    <div className="w-full h-[100px] bg-white shadow-md rounded-md p-4 ">
      <div className="relative h-full">
        <p className="text-basee font-semibold ">{name}</p>
        <span className="text-ss font-bold absolute bottom-0 left-0">
          {convertBytesToMB(size)} MB
        </span>
        <button
          onClick={downloadResources}
          className="p-2 rounded-lg text-white absolute bottom-0 right-0"
        >
          {fileLoading ? (
            <Spinner />
          ) : (
            <img src={fileDownloadIcon} alt="Download" className="w-8" />
          )}
        </button>
      </div>
    </div>
  );
};

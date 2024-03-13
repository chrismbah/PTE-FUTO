/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { storage } from "../../../config/firebase";
import { ref, listAll, getMetadata } from "firebase/storage";
import { useParams } from "react-router-dom";
import { useLearningResourcesContext } from "../../../context/LearningResources";
import { Spinner } from "../../../components/loaders/Spinner";
import { ContentCard } from "./ContentCard";
import fileSearch from "../../../assets/svg/illustrations/fileSearch.svg";
import { FileMetadata } from "../../../models/academics/learning-resources";
import book from "../../../assets/svg/illustrations/reading.svg";
export default function Content() {
  const { level, id } = useParams();
  const { resourcesType } = useLearningResourcesContext();

  const storageRef = ref(storage);
  const learningResourcesRef = ref(
    storageRef,
    `learning-resources/levels/${level}/${id}/${resourcesType}`
  );
  const [files, setFiles] = useState<FileMetadata[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchFiles = async () => {
    try {
      setError(false);
      setLoading(true);
      const res = await listAll(learningResourcesRef);
      const fileList = await Promise.all(
        res.items.map(async (itemRef) => {
          const metadata = await getMetadata(itemRef);
          return {
            name: metadata.name,
            path: metadata.fullPath,
            size: metadata.size,
          };
        })
      );
      setFiles(fileList);
      setLoading(false);
      console.log(files);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [resourcesType]);

  if (loading) {
    return (
      <div className="mt-10 flex items-center justify-center ">
        <Spinner className="fill-green1 w-8 " />
      </div>
    );
  } else if (files.length === 0) {
    if (error) {
      return (
        <div className="flex items-center justfiy-center flex-col">
          <img
            src={book}
            alt="File not available"
            className=" w-full ss:w-[300px]"
          />
          <p className="text-sm ss:text-xs text-gray-700 font-[500] text-center ">
            Oops, something went wrong. Please try again.
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center flex-col">
          <img
            src={fileSearch}
            alt="File not available"
            className=" w-full ss:w-[400px]"
          />
          <p className="text-sm ss:text-base text-gray-500 font-[500] text-center ">
            Sorry, {id}{" "}
            {resourcesType === "textbooks"
              ? "Textbooks"
              : resourcesType === "pastquestions"
                ? "Past Questions"
                : "Handouts"}{" "}
            are not available.
          </p>
        </div>
      );
    }
  } else if (files.length > 0) {
    return (
      <div className="grid items-center xss:grid-cols-2 sm:grid-cols-3 gap-4">
        {files.map((info, i) => (
          <ContentCard key={i} {...info} />
        ))}
      </div>
    );
  }
}

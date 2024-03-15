/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from "react";
// import { useLearningResources } from "../../../../../hooks/academics/useLearningResources";
import checkResources from "../../../../../assets/svg/search-files.svg";
import { Spinner } from "../../../../../components/loaders/Spinner";
import fileSearch from "../../../../../assets/svg/fileSearch.svg";
import { FileCard } from "./FileCard";
import { getMetadata, listAll, ref } from "firebase/storage";
import { storage } from "../../../../../config/firebase";
import { FileMetadata } from "../../../../../models/academics/learning-resources";
interface ContentProp {
  course: string;
  resourcesType: string;
  level: string;
}
export const Content: FC<ContentProp> = ({ course, resourcesType, level }) => {
  const storageRef = ref(storage);
  const learningResourcesRef = ref(
    storageRef,
    `learning-resources/levels/${level}/${course}/${resourcesType}`
  );
  const [files, setFiles] = useState<FileMetadata[] | null>(null);
  const [gettingResources, setGettingResources] = useState(false);
  const [error, setError] = useState(false);
  const fetchFiles = async () => {
    try {
      setError(false);
      setGettingResources(true);
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
      setGettingResources(false);
      console.log(files);
    } catch (error) {
      setError(true);
      setGettingResources(false);
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    if (resourcesType && level && course) {
      fetchFiles();
    }
  }, [resourcesType, level, course]);
  if (!files && !course && !level && !resourcesType) {
    return (
      <div className="flex items-center justify-center flex-col gap-3">
        <img
          src={checkResources}
          alt="Check out your learning resources"
          className=" w-full ss:w-[250px]"
        />
        <p className="text-sm ss:text-xs text-gray-700 font-medium text-center">
          Select a level, course and resource type to get learning resources.
        </p>
      </div>
    );
  } else if (gettingResources && !error) {
    <div className="mt-10 flex items-center justify-center ">
      <Spinner className="fill-green1 w-8 " />
    </div>;
  } else if (error && !gettingResources) {
    return (
      <div className="flex items-center justfiy-center flex-col mt-3">
        <p className="text-sm ss:text-xs text-gray-700 font-medium text-center ">
          Oops, something went wrong. Please try again.
        </p>
      </div>
    );
  } else if (files && files.length === 0) {
    <div className="flex items-center justify-center flex-col">
      <img
        src={fileSearch}
        alt="File not available"
        className=" w-full ss:w-[400px]"
      />
      <p className="text-sm ss:text-xs text-gray-700 font-medium text-center ">
        Sorry, {course}{" "}
        {resourcesType === "textbooks"
          ? "Textbooks"
          : resourcesType === "pastquestions"
            ? "Past Questions"
            : "Handouts"}{" "}
        are not available.
      </p>
    </div>;
  } else if (files && files.length > 0) {
    <div className="grid items-center xss:grid-cols-2 sm:grid-cols-3 gap-4">
      {files.map((info, i) => (
        <FileCard key={i} {...info} />
      ))}
    </div>;
  }
};

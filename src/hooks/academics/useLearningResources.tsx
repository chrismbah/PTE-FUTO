/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { storage } from "../../config/firebase";
import { ref, listAll, getMetadata } from "firebase/storage";
import { FileMetadata } from "../../models/academics/learning-resources";

export const useLearningResources = () => {
  const storageRef = ref(storage);

  const [files, setFiles] = useState<FileMetadata[]>([]);
  const [gettingResources, setGettingResources] = useState(false);
  const [error, setError] = useState(false);

  const getLearningResources = async (
    level: string,
    course: string,
    resourcesType: string
  ) => {
    const learningResourcesRef = ref(
      storageRef,
      `learning-resources/levels/${level}/${course}/${resourcesType}`
    );
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
    } catch (error: any) {
      setError(error);
      setGettingResources(false);
      console.error("Error fetching files:", error);
    }
  };
  return { getLearningResources, files, gettingResources, error };
};

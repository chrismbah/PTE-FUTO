import { useState, useEffect } from "react";
import { storage } from "../../../config/firebase";
import { ref, listAll, getMetadata } from "firebase/storage";
import { useParams } from "react-router-dom";
import { useLearningResourcesContext } from "../../../context/LearningResources";
import { BounceLoader } from "../../../components/loaders/BounceLoader";
import { ContentCard } from "./ContentCard";

interface FileMetadata {
  name: string;
  path: string;
  size: number;
}
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

  const fetchFiles = async () => {
    try {
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
      setLoading(false);
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [resourcesType]);

  return (
    <div className="mt-6">
      {loading ? (
        <div className="mt-10 w-full h-full flex items-center justify-center">
          <BounceLoader />
        </div>
      ) : files.length === 0 ? (
        <p className="w-full text-sm ss:text-base text-gray-500 font-[400] text-center mt-4 uppercase">
          Sorry, {id}{" "}
          {resourcesType === "textbooks"
            ? "Textbooks"
            : resourcesType === "pastquestions"
              ? "Past Questions"
              : "Handouts"}{" "}
          are not available now.
        </p>
      ) : (
        files.length > 0 && (
          <div className="grid items-center xss:grid-cols-2 sm:grid-cols-3 gap-4">
            {files.map((info, i) => (
              <ContentCard key={i} {...info} />
            ))}
          </div>
        )
      )}
    </div>
  );
}

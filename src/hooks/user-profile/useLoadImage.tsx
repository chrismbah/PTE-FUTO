/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGetUserInfo } from "../auth/useGetUserInfo";

export const useLoadImage = () => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);
  const { studentDetails } = useGetUserInfo();
  useEffect(() => {
    if (studentDetails && studentDetails.profileImageURL.length > 0) {
      setIsImageLoading(true);
    }
  }, []);

  const LoadingPlaceholder = () => (
    <div className="w-full h-full bg-gray-200 animate-pulse rounded-full" />
  );
  return { isImageLoading, setIsImageLoading, LoadingPlaceholder };
};

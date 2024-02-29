/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { notifyUser } from "../../helpers/notifyUser";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
import { updateDoc, doc } from "firebase/firestore";

export const useUploadProfileImage = () => {
  const { getUserInfo, studentDetails, userID } = useGetUserInfo();
  useEffect(() => {
    getUserInfo();
  }, []);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<Error | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  useEffect(() => {
    if (imageURL) {
      updateUserProfileLink();
    }
  }, [imageURL]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setImageFile(selectedFile);
      setUploadProgress(0);
    } else {
      notifyUser("error", "Please choose a valid image file (PNG or JPG).");
      e.target.value = "";
    }
  };

  const uploadProfileImage = async () => {
    if (!imageFile) {
      notifyUser("error", "Please select an image to upload.");
      return;
    }
    if (userID) {
      try {
        notifyUser("success", "Uploading Image");
        const storageRef = ref(
          storage,
          `profile-pictures/${studentDetails?.email}-${userID}/${imageFile.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percentage = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setUploadProgress(percentage);
          },
          (err) => {
            setUploadError(err);
            console.log(err);
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL) => {
                setImageURL(downloadURL);
              }
            );
          }
        );
        updateUserProfileLink();
        notifyUser("success", "File Uploaded");
        setImageFile(null);
        console.log("Image Uploaded");
      } catch (error) {
        console.error("Error uploading image:", error);
        notifyUser("error", "Failed to upload image. Please try again.");
      }
    }
  };
  const updateUserProfileLink = async () => {
    if (userID && imageURL && imageURL.length > 1) {
      await updateDoc(doc(db, "userInfo", userID), {
        profileImageURL: imageURL,
      });
      console.log("Done");
      console.log(imageURL);
    } else {
      console.log("Oops somethings wrong");
    }
  };

  return {
    setImageFile,
    imageFile,
    imageURL,
    uploadProgress,
    uploadError,
    setUploadProgress,
    uploadProfileImage,
    handleFileChange,
    updateUserProfileLink,
  };
};

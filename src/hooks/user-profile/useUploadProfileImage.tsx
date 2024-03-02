/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { notifyUser } from "../../helpers/notifyUser";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../../config/firebase";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
import { updateDoc, doc } from "firebase/firestore";
import { useModalContext } from "../../context/Modal";

export const useUploadProfileImage = () => {
  const { getUserInfo, studentDetails, userID } = useGetUserInfo();
  const { setOpenDeleteProfileImageModal } = useModalContext();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<Error | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [imageFileID, setImageFileID] = useState<string | null>(null);
  const [deletingProfileImage, setDeletingProfileImage] = useState(false);

  useEffect(() => {
    if (imageURL) {
      updateUserProfileLink();
    }
    getUserInfo();
  }, [imageURL]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setImageFile(selectedFile);
      setUploadProgress(0);
      console.log(imageFile);
    } else {
      notifyUser(
        "error",
        "Please choose a valid image file (PNG, JPG or WEBP)."
      );
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
        const userImageRef = ref(
          storage,
          `profile-pictures/${studentDetails?.email}-${userID}/${imageFile.name}`
        );
        setImageFileID(imageFile.name);
        const uploadTask = uploadBytesResumable(userImageRef, imageFile);
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
        console.log("Image Uploaded");
      } catch (error) {
        console.error("Error uploading image:", error);
        notifyUser("error", "Failed to upload image. Please try again.");
      }
    }
  };
  const updateUserProfileLink = async () => {
    if (userID && imageURL && imageURL.length > 1) {
      try {
        await updateDoc(doc(db, "userInfo", userID), {
          profileImageURL: imageURL,
          profileImageID: imageFileID,
        });
        console.log("Done");
        console.log(imageURL);
        setImageFile(null);
      } catch (err) {
        console.log("Error updating doc");
        notifyUser("error", "Sorry couldn't update profile picture");
      }
    } else {
      console.log("COULDN'T UPDATE DOC");
      console.log(imageFile, imageURL?.length, imageURL);
    }
  };
  const deleteUserProfileImage = async () => {
    if (userID && studentDetails) {
      const userImageRef = ref(
        storage,
        `profile-pictures/${studentDetails.email}-${userID}/${studentDetails.profileImageID}`
      );
      try {
        setDeletingProfileImage(true);
        await deleteObject(userImageRef);
        await updateDoc(doc(db, "userInfo", userID), {
          profileImageURL: "",
          profileImageID: "",
        });
        setDeletingProfileImage(false);
        setOpenDeleteProfileImageModal(false)
        notifyUser("success", "Profile picture deleted");
      } catch (err) {
        console.log(err);
        notifyUser("error", "Something went wrong. Please try again");
      }
    } else {
      console.log("Bug!!");
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
    deleteUserProfileImage, deletingProfileImage
  };
};

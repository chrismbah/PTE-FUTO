/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGetUserInfo } from "../../hooks/auth/useGetUserInfo";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Lottie from "lottie-react";
import avatar from "../../json/animation/avatar.json";
import { CalenderIcon } from "../../components/icons/CalenderIcon";
import { EmailIcon } from "../../components/icons/socials/EmailIcon";
import { GraduateCapIcon } from "../../components/icons/GraduateCapIcon";
import { ClockIcon } from "../../components/icons/ClockIcon";
import { RegisterIcon } from "../../components/icons/RegisterIcon";
import { notifyUser } from "../../helpers/notifyUser";
import { UploadIcon } from "../../components/icons/UploadIcon";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebase";
export default function Profile() {
  const { getUserInfo, studentDetails, userID } = useGetUserInfo();
  useEffect(() => {
    getUserInfo();
  }, []);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  // const [uploadError, setUploadError] = useState<Error | null>(null);
  // const [imageURL, setImageURL] = useState<string>("");

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
    try {
      const storageRef = ref(
        storage,
        `profile-pictures/${studentDetails?.email}-${userID}/${imageFile.name}`
      );
      // Use the uploadBytesResumable function to upload the file to the storageRef
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      // listen to the state_changed event of the uploadTask
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // calculate the percentage of upload
          const percentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // set the progress state with the percentage
          setUploadProgress(percentage);
        },
        // Error callback
        (err) => {
          // setUploadError(err);
          console.log(err);
        },
        // Success callback
        async () => {
          // get the download URL from the uploadTask's snapshot reference and set the url state
          // await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //   // setImageURL(downloadURL);
          // });
        }
      );
      console.log("Image Uploaded");
    } catch (error) {
      console.error("Error uploading image:", error);
      notifyUser("error", "Failed to upload image. Please try again.");
    }
  };

  const renderProgressBar = () => {
    if (imageFile) {
      return (
        <div className="progress-bar w-full ">
          <div className="w-fit">
            <p className="text-xs text-left font-semibold text-gray-700">
              {uploadProgress} % Uploaded
            </p>
            <div className="h-1.5 w-full bg-gray-400 transition duration-300 ease-linear rounded-full">
              <div className={`bg-green1 h-full block rounded-full`}></div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="page-section">
          <div className="w-full flex items-center justify-between flex-col md:flex-row gap-4">
            <div className="flex flex-col xss:flex-row items-center gap-3 w-full">
              <Lottie
                animationData={avatar}
                loop={false}
                className="w-32 sm:w-32 xsm:w-40 md:w-48 mr-3"
              />
              <div className="flex flex-col justify-center xss:justify-start w-full ">
                <p className="text-lg sm:text-xl xsm:text-2xl md:text-3xl font-bold text-center xss:text-left">
                  {studentDetails?.firstName} {studentDetails?.lastName}
                </p>
                <p className="text-ss sm:text-xs xsm:text-base md:text-lg font-semibold capitalize  text-center xss:text-left">
                  Polymer and Textile Engineering ·{" "}
                  <span className="text-green4">{studentDetails?.level}</span>
                </p>
                <div className="flex items-center justify-center xss:justify-start gap-1 sm:gap-2 sm:mt-2">
                  <div className="rounded-lg bg-gray-200 p-1 sm:p-2">
                    <CalenderIcon className="w-3 sm:w-5" />
                  </div>
                  <p className="text-ss sm:text-sm xsm:text-xs md:text-base text-gray-700 font-[500] capitalize">
                    Joined {studentDetails?.registeredDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-col w-full md:w-fit">
              <p className="w-full text-left block text-ss sm:text-sm font-medium text-gray-900">
                Update Profile Picture
              </p>
              <div className="flex items-center gap-1 ss:gap-4 w-full flex-col ss:flex-row justify-start">
                <div className="flex items-center justify-start w-full ss:w-fit ">
                  <div className="">
                    <input
                      type="file"
                      id="profile-input"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e)}
                      hidden
                    />
                    <label
                      htmlFor="profile-input"
                      className="block w-[150px] text-slate-500 py-2 px-4
                          border-0 text-sm font-medium bg-black
                        text-white hover:bg-black/70 cursor-pointer rounded-l-lg"
                    >
                      Choose Image
                    </label>
                  </div>
                  <label className="text-sm text-slate-500 font-medium py-2 px-4 border border-gray-400 rounded-r-lg">
                    {imageFile ? imageFile.name : "No file chosen"}
                  </label>
                </div>
                <div className="w-full">
                  <button
                    onClick={uploadProfileImage}
                    className="flex items-center group py-2 px-2 ss:px-4 transition duration-300 rounded-lg bg-green1 text-xss ss:text-ss sm:text-sm font-semibold text-white"
                  >
                    <span>Upload</span>
                    <UploadIcon className="w-2 sm:w-4 group-hover:animate-bounce inline ml-2 mb-1" />
                  </button>
                </div>
              </div>
              <p
                className="my-1 w-full text-left text-ss text-gray-500 "
                id="file_input_help"
              >
                PNG, JPG or WEBP Image.
              </p>
              {renderProgressBar()}
            </div>
          </div>
          <div className="md:pl-4 mt-5">
            <h1 className="text-sm ss:text-xs xsm:text-base md:text-lg font-bold mb-2 sm:mb-3">
              Contact Information
            </h1>
            <div className="flex items-center gap-2 sm:gap-4 ">
              <div className="rounded-lg bg-gray-200 p-2">
                <EmailIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm sm:text-base md:text-md font-semibold text-left w-full">
                  Email
                </p>
                <p className="text-ss sm:text-sm md:text-xs font-[500] text-gray-600 break-all">
                  {studentDetails?.email}
                </p>
              </div>
            </div>{" "}
            <h1 className="text-sm ss:text-xs xsm:text-base md:text-lg font-bold mb-2 sm:mb-3 sm:mt-6 mt-9">
              Academic Information
            </h1>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <GraduateCapIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm sm:text-base md:text-md font-semibold text-left w-full">
                  Department
                </p>
                <p className="text-ss sm:text-sm md:text-xs font-[500] text-gray-600">
                  Polymer and Textile Engineering
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <ClockIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm sm:text-base md:text-md font-semibold text-left w-full">
                  Level
                </p>
                <p className="text-ss sm:text-sm md:text-xs font-[500] text-gray-600 text-left">
                  {studentDetails?.level}
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="rounded-lg bg-gray-200 p-2">
                <RegisterIcon className="w-5 sm:w-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm sm:text-base md:text-md font-semibold text-left w-full">
                  Registeration Number
                </p>
                <p className="text-ss sm:text-sm md:text-xs font-[500] text-gray-600 text-left">
                  {studentDetails?.regNo || "None"}
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="flex items-center w-full justify-end">
            <button className="p-3 rounded-lg bg-green1 text-xs font-semibold text-white border-2 border-transparent hover:bg-transparent hover:border-green1 transition duration-200 ease-in-out hover:text-black">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Creating a reference to the upload location in Firebase Storage
// const storageRef = ref(
//   storage,
//   `profile-pictures/${userID}/${imageFile.name}`
// );
// // Add `onUploadProgress` callback to update progress bar
// const uploadTask = uploadBytes(storageRef, imageFile, {
//   onUploadProgress: (snapshot) => {
//     const progress = Math.round(
//       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//     );
//     setUploadProgress(progress);
//   },
// });
// // Uploading the selected image using `put`
// await uploadTask;
// // Getting the download URL for the uploaded image
// const downloadURL = await getDownloadURL(storageRef);

// // Update user profile with the download URL (logic specific to your authentication provider)
// // ... (This code will depend on your authentication system)

// notifyUser("success", "Profile picture uploaded successfully!");

// // Optionally, reset image selection state
// setImageFile(null);

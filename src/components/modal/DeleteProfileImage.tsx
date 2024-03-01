/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useModalContext } from "../../context/Modal";
import SignOutSpinner from "../loaders/SignOutSpinner";
import { CancelIcon } from "../icons/CancelIcon";
import { useUploadProfileImage } from "../../hooks/user-profile/useUploadProfileImage";

export const DeleteProfileImage = () => {
  const { openDeleteProfileImageModal, setOpenDeleteProfileImageModal } = useModalContext();
  const { deleteUserProfileImage, deletingProfileImage } = useUploadProfileImage();
  useEffect(() => {
    if (openDeleteProfileImageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openDeleteProfileImageModal]);
  return (
    <>
      <div
        className={`${
          openDeleteProfileImageModal ? "block" : "hidden"
        } z-[999999] bg-black/50 backdrop-blur-sm fixed top-0 right-0 left-0  min-h-screen overflow-y-auto overflow-x-hidden flex items-center justify-center`}
      >
        <div className="bg-white rounded-lg px-5 py-7 ss:p-7 md:p-16 text-center relative">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 xmd:h-16 xmd:w-16  text-gray-400" />
          <h3 className="mb-5 text-[14px] sm:text-xs md:text-base font-normal text-gray-800">
            Are you sure you want to delete your profile picture?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={deleteUserProfileImage}>
              {deletingProfileImage ? <SignOutSpinner /> : "Yes, I'm sure"}
            </Button>
            <Button color="gray" onClick={() => setOpenDeleteProfileImageModal(false)}>
              No, cancel
            </Button>
          </div>
          <button
            className="font-bold p-3 rounded-lg absolute top-1 right-1 xsm:top-2 xsm:right-2 hover:bg-gray-50"
            onClick={() => setOpenDeleteProfileImageModal(false)}
          >
            <CancelIcon className="w-4 h-4 " />
          </button>
        </div>
      </div>
    </>
  );
};

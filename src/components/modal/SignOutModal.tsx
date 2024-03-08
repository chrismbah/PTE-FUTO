import { useEffect } from "react";
import { Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useModalContext } from "../../context/Modal";
import { useSignOutUser } from "../../hooks/auth/useSignOutUser";
import SignOutSpinner from "../loaders/SignOutSpinner";
import { CancelIcon } from "../icons/CancelIcon";

export const SignOutModal = () => {
  const { openSignOutModal, setOpenSignOutModal } = useModalContext();
  const { signOutUser, signOutLoading } = useSignOutUser();
  useEffect(() => {
    if (openSignOutModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openSignOutModal]);
  return (
    <>
      <div
        onClick={() => setOpenSignOutModal(false)}
        className={`${
          openSignOutModal ? "block" : "hidden"
        } z-[999999] bg-black/50 backdrop-blur-sm fixed top-0 right-0 left-0  min-h-screen overflow-y-auto overflow-x-hidden flex items-center justify-center`}
      >
        <div className="bg-white rounded-lg px-5 py-7 ss:p-7 md:p-16 text-center relative shadow-4  xsm:w-[500px]">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 xmd:h-16 xmd:w-16  text-gray-400" />
          <h3 className="mb-5 text-[14px] sm:text-xs md:text-xs font-normal text-gray-800">
            Are you sure you want to sign out?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={signOutUser}>
              {signOutLoading ? <SignOutSpinner /> : "Yes, I'm sure"}
            </Button>
            <Button color="gray" onClick={() => setOpenSignOutModal(false)}>
              No, cancel
            </Button>
          </div>
          <button
            className="font-bold p-3 rounded-lg absolute top-1 right-1 xsm:top-2 xsm:right-2 hover:bg-gray-50"
            onClick={() => setOpenSignOutModal(false)}
          >
            <CancelIcon className="w-4 h-4 " />
          </button>
        </div>
      </div>
    </>
  );
};

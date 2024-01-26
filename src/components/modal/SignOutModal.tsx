import {useEffect} from "react"
import { Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useModalContext } from "../../context/Modal";
import { useSignOutUser } from "../../hooks/auth/useSignOutUser";
import SignOutSpinner from "../loaders/SignOutSpinner";
// import cancel from "../../../svg/icons/cancel.svg"

export const SignOutModal = () => {
  const { openModal, setOpenModal } = useModalContext();
  const { signOutUser, signOutLoading } = useSignOutUser();
   useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [openModal]);
  return (
    <>
      <div className={`${openModal?"block" : "hidden"} z-[999999] bg-black/50 fixed top-0 right-0 left-0 z-50 h-screen overflow-y-auto overflow-x-hidden flex items-center justify-center`}>
        <div className="bg-white rounded-lg p-16 text-center relative">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
          <h3 className="mb-5 text-md font-normal text-gray-500">
            Are you sure you want to sign out?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={signOutUser}>
              {signOutLoading ? <SignOutSpinner /> : "Yes, I'm sure"}
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              No, cancel
            </Button>
          </div>
          <button className="font-bold p-3 rounded-sm absolute top-0 right-0 hover:bg-gray-50">
            {/* <img src={cancel} alt="X" className="w-8 h-8" /> */}
          </button>
        </div>
      </div>
    </>
  );
};

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useModalContext } from "../../context/Modal";
import { useSignOutUser } from "../../hooks/auth/useSignOutUser";
import SignOutSpinner from "../loaders/SignOutSpinner";

export const SignOutModal = () => {
  const { openModal, setOpenModal } = useModalContext();
  const { signOutUser, signOutLoading } = useSignOutUser();
  return (
    <Modal
      show={openModal}
      size="md"
      onClose={() => setOpenModal(false)}
      popup
      className="z-[99999] font-dmSans"
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500">
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
        </div>
      </Modal.Body>
    </Modal>
  );
};

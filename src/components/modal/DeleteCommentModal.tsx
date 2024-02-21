import { useEffect, FC } from "react";
import { Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useModalContext } from "../../context/Modal";
import SignOutSpinner from "../loaders/SignOutSpinner";
import { CancelIcon } from "../icons/CancelIcon";
import { useBlogComments } from "../../pages/misc/blog/hooks/useBlogComments";

interface ModalProp {
  commentID: string
  commentUserID: string
}

export const DeleteCommentModal:FC<ModalProp> = ({commentID, commentUserID}) => {
  const { openDeleteModal, setOpenDeleteModal } = useModalContext();
  const { deleteUserComment, deleteCommentLoading } = useBlogComments()
  useEffect(() => {
    if (openDeleteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openDeleteModal]);

  return (
     <>
     <div
       className={`${
         openDeleteModal ? "block" : "hidden"
       } z-[999999] bg-black/50 backdrop-blur-sm fixed top-0 right-0 left-0  min-h-screen overflow-y-auto overflow-x-hidden flex items-center justify-center`}
     >
       <div className="bg-white rounded-lg px-5 py-7 ss:p-7 md:p-16 text-center relative">
         <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 xmd:h-16 xmd:w-16  text-gray-400" />
         <h3 className="mb-5 text-[14px] sm:text-xs md:text-base font-normal text-gray-800">
           Are you sure you want to delete this comment?
         </h3>
         <div className="flex justify-center gap-4">
           <Button color="failure" onClick={()=>deleteUserComment(commentID, commentUserID)}>
             {deleteCommentLoading ? <SignOutSpinner /> : "Delete"}
           </Button>
           <Button color="gray" onClick={() => setOpenDeleteModal(false)}>
             Cancel
           </Button>
         </div>
         <button
           className="font-bold p-3 rounded-lg absolute top-1 right-1 xsm:top-2 xsm:right-2 hover:bg-gray-50"
           onClick={() => setOpenDeleteModal(false)}
         >
           <CancelIcon className="w-4 h-4" />
         </button>
       </div>
     </div>
   </>

  );
};

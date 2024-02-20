import { FC } from "react";
import { PostCommentsProp } from "../../../../../models/misc/blog/postComments";
import userProfile from "../../../../../assets/svg/icons/userProfile.svg";
import { ThreeVerticalDotsIcon } from "../../../../../components/icons/ThreeVerticalDotsIcon";
import { useGetUserInfo } from "../../../../../hooks/auth/useGetUserInfo";
import { useModalContext } from "../../../../../context/Modal";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { DeleteCommentModal } from "../../../../../components/modal/DeleteCommentModal";

export const Comments: FC<PostCommentsProp> = ({ postComments }) => {
  const { userID } = useGetUserInfo();
  const { setOpenDeleteModal, openDeleteModal } = useModalContext();

  return (
    <div>
      {postComments.map(
        (
          {
            firstName,
            lastName,
            comment,
            time,
            date,
            commentUserID,
            commentID,
          },
          i
        ) => {
          return (
            <div key={i} className="flex items-start pb-1 w-full gap-1 mb-2">
              <img src={userProfile} alt="profile" className="w-10 sm:w-12" />
              <div className="flex flex-col border-b border-gray-100 pb-2 w-[90%] overflow-x-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3 items-center sm:mt-0">
                    <div className="">
                      <p className="text-xss xxss:text-sm sm:text-xs md:text-[12px]  text-green3">
                        {firstName} {lastName}
                      </p>
                    </div>
                    <span className="text-xss xxss:text-ss sm:text-sm font-[300] md:text-xss lg:text-ss text-gray-500 pt-[2px] sm:pt-0">
                      • {time}, {date}
                    </span>
                  </div>
                  {commentUserID === userID && (
                    <>
                      <Popover
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <PopoverHandler>
                          <button className="p-[1.5px] hover:bg-gray-100 rounded-full relative">
                            <ThreeVerticalDotsIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                          </button>
                        </PopoverHandler>
                        <PopoverContent
                          onClick={() => setOpenDeleteModal(true)}
                          placeholder={""}
                          className={` ${openDeleteModal ? "hidden" : "block"} cursor-pointer shadow font-dmSans p-2 md:p-3 text-[10px] sm:text-sm hover:bg-gray-100 rounded-lg`}
                        >
                          Delete
                        </PopoverContent>
                      </Popover>
                    </>
                  )}
                </div>

                <div className="w-full">
                  <p className="text-xss xxss:text-sm sm:text-xs md:text-[12px] break-all ">
                    {comment}
                  </p>
                </div>
              </div>
              <DeleteCommentModal commentID={commentID} />
            </div>
          );
        }
      )}
    </div>
  );
};

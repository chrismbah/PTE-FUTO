/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import userProfile from "../../../../../assets/svg/icons/userProfile.svg";
import { PaperPlaneIcon } from "../../../../../components/icons/PaperPlaneIcon";
import { useBlogComments } from "../../hooks/useBlogComments";
import { Tooltip } from "flowbite-react";
import { customTooltipTheme } from "../../../../../themes/customTooltip";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CommentSection() {
  const { postID } = useParams();
  const {
    addUserComment,
    userComment,
    setUserComment,
    postComments,
    getPostComments,
    postCommentsLoading,
    postCommentsError,
  } = useBlogComments();
  useEffect(() => {
    getPostComments();
  }, [postID]);

  return (
    <div className="mb-4 bg-white shadow rounded-lg p-4 md:sticky md:top-24">
      <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
        Comments
      </h2>
      <div className="flex justify-between items-start gap-1">
        <div className="w-10 h-10 sm:w-14 sm:h-14 -ml-1">
          <img
            src={userProfile}
            alt="user"
            className="h-full w-full "
          />
        </div>
        <textarea
          maxLength={180}
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          className="w-full h-10 sm:h-12 p-1 sm:px-2 focus:outline-none leading-relaxed text-gray-800 my-2 text-[12px]
             focus:border-green2 border border-gray-400 placeholder:text-gray-300 focus:ring-0  
             placeholder:font-normal placeholder:text-ss sm:placeholder:text-sm rounded-lg resize-none"
          placeholder="Write your thoughts here..."
        ></textarea>

        <Tooltip
          content="Comment"
          animation="duration-0"
          theme={customTooltipTheme}
        >
          <button
            onClick={addUserComment}
            type="submit"
            className=" inline-flex justify-center mt-2 p-1 sm:p-2 text-green1 rounded-md cursor-pointer hover:bg-green1/10 pr-1"
          >
            <PaperPlaneIcon className="w-[15px] sm:w-5 sm:h-5 ml-1" />
          </button>
        </Tooltip>
      </div>
      {!postCommentsLoading &&
        !postCommentsError &&
        postComments &&
        postComments.length > 0 && <Comments postComments={postComments} />}
      {postCommentsLoading && (
        <div className="flex items-start pb-1 w-full gap-2 mb-2 px-1 sm:px-2">
          <Skeleton circle={true} className="h-7 w-7 sm:h-9 sm:w-9" />
          <div className="flex flex-col border-b border-gray-100 pb-2 w-[90%] overflow-x-hidden">
            <div className="flex gap-4 items-center justify-start">
              <Skeleton className="w-[60px] h-[6px] sm:w-[100px] md:h-[8px]" />
              <Skeleton className="w-[30px] h-[6px] sm:w-[50px] md:h-[8px]" />
            </div>
            <div className="w-full">
              <Skeleton className="w-[70%] h-[6px] sm:h-[8px]" />
            </div>
          </div>
        </div>
      )}
      {postCommentsError && !postCommentsLoading && (
        <p className="text-gray-500 w-full text-center text-ss sm:text-sm">
          Error loading comments...
        </p>
      )}
    </div>
  );
}

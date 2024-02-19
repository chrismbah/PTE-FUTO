import { useEffect } from "react";
import userProfile from "../../../../../assets/svg/icons/userProfile.svg";
import { PaperPlaneIcon } from "../../../../../components/icons/PaperPlaneIcon";
import { useBlogComments } from "../../hooks/useBlogComments";
import { Tooltip } from "flowbite-react";
import { customTooltipTheme } from "../../../../../themes/customTooltip";
import { Comments } from "./Comments";
import {useParams} from "react-router-dom"

export default function CommentSection() {
  const { postID } = useParams();
  const { 
    addUserComment,
    userComment, 
    setUserComment, 
    postComments, 
    getPostComments, 
    postCommentsLoading, 
    postCommentsError
   } = useBlogComments();
  useEffect(()=>{
    getPostComments();
  }, [postID])

  return (
    <div className="mb-4 bg-white shadow rounded-lg p-4 md:sticky md:top-24">
      <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
        Comments
      </h2>
      <div className="flex justify-start items-start gap-1">
        <img src={userProfile} alt="user" className="w-10 sm:w-12" />
        <textarea
          maxLength={180}
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          className="w-full h-12 sm:h-16 p-1 sm:px-2 focus:outline-none leading-relaxed text-gray-800 my-2 text-sm sm:text-xs
             focus:border-green2 border border-gray-400 placeholder:text-gray-300 focus:ring-0  
             placeholder:font-light placeholder:text-ss sm:placeholder:text-sm rounded-lg resize-none"
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
      {
        !postCommentsLoading && !postCommentsError && postComments &&  postComments.length > 0 && 
        <Comments postComments={postComments}/>
      }
      {
        postCommentsLoading && <p className="w-full text-xs text-gray-500 text-center py-2">Loading Comments...</p>
      }   {
        postCommentsError && !postCommentsLoading && <p>Error loading Comments...</p>
      }
    </div>
  );
}

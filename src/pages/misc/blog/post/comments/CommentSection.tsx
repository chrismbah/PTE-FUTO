import { useEffect } from "react";
import { useGetUserInfo } from "../../../../../hooks/auth/useGetUserInfo";
import userProfile from "../../../../../assets/svg/icons/userProfile.svg";
import { PaperPlaneIcon } from "../../../../../components/icons/PaperPlaneIcon";
import { useBlogComments } from "../../hooks/useBlogComments";
import { Tooltip } from "flowbite-react";
import { customTooltipTheme } from "../../../../../themes/customTooltip";
// import { Comments } from "./Comments";

export default function CommentSection() {
  const {
    addUserComment,
    userComment,
    setUserComment,
    getPostComments,
    // blogComments,
  } = useBlogComments();
  const { getUserInfo } = useGetUserInfo();
  useEffect(() => {
    getUserInfo();
    getPostComments();
  }, []);

  return (
    <div className="mb-4 bg-white shadow rounded-lg p-4 sticky top-24">
      <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
        Comments
      </h2>
      <div className="flex justify-start items-start gap-1">
        <img src={userProfile} alt="user" className="w-10 sm:w-12" />
        <textarea
          maxLength={120}
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          className="w-full h-12 sm:h-16 p-1 sm:px-2 focus:outline-none leading-relaxed text-gray-800 my-2 text-sm sm:text-base
             focus:border-green2 border border-gray-400 placeholder:text-gray-300 focus:ring-0  
             placeholder:font-light placeholder:text-ss sm:placeholder:text-xs rounded-lg resize-none"
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
      {/* {
        blogComments && <Comments blogComments={blogComments}/>
      } */}
    </div>
  );
}

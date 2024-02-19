import { FC } from "react";
import { PostCommentsProp } from "../../../../../models/misc/blog/postComments";
import userProfile from "../../../../../assets/svg/icons/userProfile.svg";

export const Comments: FC<PostCommentsProp> = ({ postComments }) => {
  return (
    <div>
      {postComments.map(({ firstName, lastName, comment, time, date }, i) => {
        return (
          <div key={i} className="flex items-start pb-1 w-full gap-1 mb-1">
            <img src={userProfile} alt="profile" className="w-10 sm:w-12" />
            <div className="flex flex-col border-b border-gray-100 pb-2 w-[90%]">
              <div className="flex gap-3 items-center justify-start">
                <div className="">
                  <p className="text-[11px] sm:text-[12px] text-gray-900">
                    {firstName} {lastName}
                  </p>  
                </div>
                <span className="text-sss sm:text-ss md:text-sss lg:text-ss text-gray-500">• {time}, {date}</span>
              </div>
              <div className="w-full">
              <p className="text-[13px] sm:text-sm break-all">
                {comment}               
              </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

import { FC } from "react";
import { PostCommentsProp } from "../../../../../models/misc/blog/postComments";
import userProfile from "../../../../../assets/svg/icons/userProfile.svg";

export const Comments: FC<PostCommentsProp> = ({ postComments }) => {
  return (
    <>
      {postComments.map(({ firstName, lastName, comment, time }, i) => {
        return (
          <div key={i} className="flex items-start py-2 w-full gap-1 min-h-20">
            <img src={userProfile} alt="profile" className="w-10 sm:w-12" />
            <div className="flex flex-col border-b border-gray-100 pb-2 w-[90%]">
              <div className="flex gap-3 items-center justify-start">
                <div className="">
                  <p className="text-[12px] text-gray-900">
                    {firstName} {lastName}
                  </p>
                </div>
                <span className="text-ss text-gray-500">• {time}</span>
              </div>
              <p className="text-sm break-words">
                {comment}               
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

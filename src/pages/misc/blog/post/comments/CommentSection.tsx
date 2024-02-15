import { useGetUserInfo } from "../../../../../hooks/auth/useGetUserInfo";
import userProfile from "../../../../../assets/svg/icons/userProfile.svg"
export default function CommentSection() {
    const {user} = useGetUserInfo()
  return (
    <div className="mb-4 bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4 text-green1">
        Top Comments
      </h2>
      <div className="flex justify-start items-start gap-1">
        <img src={userProfile} alt="user" className="w-10" />
        <textarea name="" id="" className="w-full min-h-24 max-h-36 focus:outline-none
             focus:border-none border border-gray-300 placeholder:text-gray-400   
             placeholder:font-light placeholder:text-xs rounded-lg" placeholder="Enter your comment..."></textarea>
      </div>
    </div>
  );
}

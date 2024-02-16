// import { useGetUserInfo } from "../../../../../hooks/auth/useGetUserInfo";
import userProfile from "../../../../../assets/svg/icons/userProfile.svg";
import { PaperPlaneIcon } from "../../../../../components/icons/PaperPlaneIcon";
export default function CommentSection() {
  //   const { user } = useGetUserInfo();
  return (
    <div className="mb-4 bg-white shadow rounded-lg p-4">
      <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
        Comments
      </h2>
      <div className="flex justify-start items-start gap-1">
        <img src={userProfile} alt="user" className="w-10 sm:w-12" />
        <textarea
          className="w-full h-12 sm:h-16 p-1 sm:px-2 focus:outline-none leading-relaxed text-gray-800 my-2 text-sm sm:text-base
             focus:border-green2 border border-gray-200 placeholder:text-gray-400 focus:ring-0  
             placeholder:font-light placeholder:text-sm sm:placeholder:text-xs rounded-lg resize-none"
          placeholder="Write your thoughts here..."
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-green1 rounded-full cursor-pointer hover:bg-blue-100 pr-1"
        >
          <PaperPlaneIcon />
        </button>
      </div>
    </div>
  );
}

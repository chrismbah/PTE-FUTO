import { useEffect } from "react";
import { useFetchBlogPosts } from "../hooks/useFetchBlogPosts";
import { useParams } from "react-router-dom";
import { PostContent } from "./PostContent";
import { PopularPosts } from "./cards/Popular";
import { RelatedPosts } from "./cards/Related";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../../../../components/footer/Footer";
import CommentSection from "./comments/CommentSection";
import { WriteIcon } from "../../../../components/icons/WriteIcon";
import { useGetUserInfo } from "../../../../hooks/auth/useGetUserInfo";
import { useBlogComments } from "../hooks/useBlogComments";
// import { DeleteCommentModal } from "../../../../components/modal/DeleteCommentModal";
import { useModalContext } from "../../../../context/Modal";
import PostSkeleton from "./skeleton/PostSkeleton";

export default function BlogPost() {
  const {
    fetchBlogPost,
    fetchPopularPosts,
    fetchRelatedPosts,
    blogPost,
    popularPosts,
    relatedPosts,
    blogPostLoading,
    blogPostError,
    popularPostsLoading,
    popularPostsError,
    relatedPostsLoading,
    relatedPostsError,
  } = useFetchBlogPosts();
  const { getUserInfo } = useGetUserInfo();
  const { postID, postType } = useParams();
  const { getPostComments, fetchPostComments } = useBlogComments();
  const { openDeleteModal } = useModalContext();

  useEffect(() => {
    if (postID && postType) {
      try {
        fetchBlogPost(postID);
        fetchPopularPosts(postID, postType);
        fetchRelatedPosts(postID, postType);
        getPostComments();
      } finally {
        window.scroll(0, 0);
      }
    }
    getPostComments();
    console.log("Debugging");
  }, [postID]);

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    fetchPostComments();
    console.log("Hello There");
  }, [openDeleteModal]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width2">
        <div className="px-3 py-20 sm:px-10 lg:px-12 sm:py-24">
          <div className="sticky grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              {blogPostLoading && (
                <div className="bg-white shadow rounded-lg p-4">
                  <PostSkeleton/>
                </div>
              )}
              {blogPostError && "Something went wrong!"}
              {!blogPostLoading && !blogPostError && blogPost && (
                <div className="bg-white shadow rounded-lg p-4">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 w-full">
                    {blogPost?.title}
                  </h1>
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={blogPost?.sampleImg}
                      alt={blogPost?.title}
                      className="w-[550px] mb-3 rounded-lg"
                    />
                  </div>
                  <PostContent contents={blogPost.contents} />
                  <div className="mt-6">
                    <div className="flex items-center gap-1">
                      <WriteIcon className="text-green2 w-4 h-4" />
                      <p className="font-satisfy md:text-md mt-1 text-gray-500">
                        {blogPost?.author}
                      </p>
                    </div>
                    <p className="text-gray-500 font-inter text-xss sm:text-sm md:text-xs font-[400]">
                      {blogPost?.date}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className=" md:col-span-2 flex flex-col-reverse md:flex-col">
              <div className="mb-4 bg-white shadow rounded-lg p-4">
                <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
                  Related Posts
                </h2>
                {relatedPostsLoading && (
                  <Skeleton
                    className="mb-4 h-[110px] sm:h-[130px] md:h-[100px] w-full rounded-lg "
                    count={2}
                  />
                )}
                {relatedPostsError ||
                  (relatedPosts &&
                    relatedPosts?.length < 1 &&
                    "Something went wrong. Please try again.")}
                {!relatedPostsLoading &&
                  !relatedPostsError &&
                  relatedPosts &&
                  relatedPosts?.length > 0 && (
                    <RelatedPosts blogPosts={relatedPosts} />
                  )}
              </div>
              <div className="mb-4 bg-white shadow rounded-lg p-4">
                <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
                  Popular Posts
                </h2>
                {popularPostsLoading && (
                  <Skeleton
                    className="mb-4 h-[110px] sm:h-[130px] md:h-[100px] w-full rounded-lg "
                    count={2}
                  />
                )}
                {popularPostsError ||
                  (popularPosts &&
                    popularPosts?.length < 1 &&
                    "Something went wrong. Please try again.")}
                {!popularPostsLoading &&
                  !popularPostsError &&
                  popularPosts &&
                  popularPosts?.length > 0 && (
                    <PopularPosts blogPosts={popularPosts} />
                  )}
              </div>
              <CommentSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <DeleteCommentModal /> */}
    </div>
  );
}

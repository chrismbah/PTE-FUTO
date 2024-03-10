/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
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
// import { useGetUserInfo } from "../../../../hooks/auth/useGetUserInfo";
import { useBlogComments } from "../hooks/useBlogComments";
import PostSkeleton from "./skeleton/PostSkeleton";

export default function BlogPost() {
  const {
    fetchBlogPost,
    blogPost,
    fetchBlogPosts,
    blogPosts,
    blogPostsLoading,
    blogPostsError,
    blogPostLoading,
    blogPostError,
  } = useFetchBlogPosts();
  const { postID, postType } = useParams();
  const { getPostComments } = useBlogComments();

  useEffect(() => {
    if (postID && postType) {
      try {
        fetchBlogPost(postID);
        getPostComments();
        fetchBlogPosts();
      } finally {
        window.scroll(0, 0);
      }
    }
  }, [postID]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width2">
        <div className="px-3 py-20 sm:px-10 lg:px-12 sm:py-24">
          <div className="sticky grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              {blogPostLoading && (
                <div className="bg-white shadow rounded-lg p-4">
                  <PostSkeleton />
                </div>
              )}
              {blogPostError && "Something went wrong!"}
              {!blogPostLoading && !blogPostError && blogPost && (
                <div className="bg-white shadow rounded-lg p-4">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold w-full">
                    {blogPost?.title}
                  </h1>
                  <div className="mb-3">
                    <div className="flex items-center gap-1">
                      <WriteIcon className="text-green2 w-4 h-4" />
                      <p className="font-satisfy md:text-md mt-1 text-gray-500">
                        {blogPost?.author}
                      </p>
                    </div>
                    <p className="text-gray-500 font-inter text-xss sm:text-sm md:text-xs font-[400]">
                      Last Updated: {blogPost?.date}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={blogPost?.sampleImg}
                      alt={blogPost?.title}
                      className="w-full mb-3 rounded-lg"
                    />
                  </div>
                  <PostContent contents={blogPost.contents} />
                </div>
              )}
            </div>
            <div className=" md:col-span-2 flex flex-col-reverse md:flex-col">
              <div className="mb-4 bg-white shadow rounded-lg p-4">
                <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
                  Related Posts
                </h2>
                {blogPostsLoading && (
                  <Skeleton
                    className="mb-4 h-[110px] sm:h-[130px] md:h-[100px] w-full rounded-lg "
                    count={2}
                  />
                )}
                {blogPostsError ||
                  (blogPosts && blogPosts?.length < 1 && (
                    <p>Something went wrong. Please try again.</p>
                  ))}
                {!blogPostsLoading &&
                  !blogPostsError &&
                  blogPosts &&
                  blogPosts?.length > 0 &&
                  postID &&
                  postType && (
                    <RelatedPosts
                      blogPosts={blogPosts}
                      postID={postID}
                      postType={postType}
                    />
                  )}
              </div>
              <div className="mb-4 bg-white shadow rounded-lg p-4">
                <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
                  Popular Posts
                </h2>
                {blogPostsLoading && (
                  <Skeleton
                    className="mb-4 h-[110px] sm:h-[130px] md:h-[100px] w-full rounded-lg "
                    count={2}
                  />
                )}
                {blogPostsError ||
                  (blogPosts &&
                    blogPosts?.length < 1 &&
                    "Something went wrong. Please try again.")}
                {!blogPostsLoading &&
                  !blogPostsError &&
                  blogPosts &&
                  blogPosts?.length > 0 &&
                  postID &&
                  postType && (
                    <PopularPosts
                      blogPosts={blogPosts}
                      postID={postID}
                      postType={postType}
                    />
                  )}
              </div>
              <CommentSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

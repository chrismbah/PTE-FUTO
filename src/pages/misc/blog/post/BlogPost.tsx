import { useEffect } from "react";
import { useFetchBlogPosts } from "../../../../hooks/misc/blog/useFetchBlogPosts";
import { useParams } from "react-router-dom";
import { PostContent } from "./PostContent";
import { PopularPosts } from "./cards/Popular";
import { RelatedPosts } from "./cards/Related";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../../../../components/footer/Footer";
import CommentSection from "./comments/CommentSection";
// import { useNetworkNotifications } from "../../../../hooks/network/useNetworkNotifications";
// import { useToast } from "../../../../helpers/useToast";

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
  const { postID, postType } = useParams();
  // const { isOffline } = useNetworkNotifications()

  useEffect(() => {
    if (postID && postType) {
      try {
        fetchBlogPost(postID);
        fetchPopularPosts(postID, postType);
        fetchRelatedPosts(postID, postType);
      } finally {
        window.scroll(0, 0);
      }
    }
  }, [postID]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width2">
        <div className="px-3 py-20 sm:px-10 lg:px-12 sm:py-24">
          {/* <p>{blogPost.author}</p>
              <p>{blogPost.title}</p> */}
          {/* <p>{blogPost.no}</p> */}
          <div className="sticky grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              {blogPostLoading && (
                <>
                  <Skeleton className="h-[12px] w-[75%] md:w-36" />
                  <Skeleton
                    count={3}
                    className=" h-[10px] rounded-lg w-full md:w-[80%]"
                  />
                  <Skeleton className=" w-[85%] h-[12px] md:w-40" />
                  <Skeleton
                    count={1}
                    className="h-[10px] rounded-lg w-[80%] md:w-[75%]"
                  />
                  <Skeleton
                    count={3}
                    className="h-[10px] rounded-lg w-[90%] md:w-[85%]"
                  />
                  <Skeleton
                    count={2}
                    className="h-[10px] rounded-lg w-[92%] md:w-[90%]"
                  />
                  <Skeleton className=" w-[70%] md:w-32 h-[12px]" />
                  <Skeleton
                    count={3}
                    className="h-[10px] rounded-lg w-full md:w-[65%]"
                  />{" "}
                  <Skeleton className=" w-[80%] md:w-16 h-[12px]" />
                  <Skeleton
                    count={3}
                    className="h-[10px] rounded-lg w-full md:w-[70%]"
                  />{" "}
                  <Skeleton
                    count={1}
                    className="h-[10px] rounded-lg w-full md:w-[60%]"
                  />{" "}
                  <Skeleton
                    count={3}
                    className="h-[10px] rounded-lg w-full md:w-[75%]"
                  />
                </>
              )}
              {blogPostError && "Something went wrong!"}
              {!blogPostLoading && !blogPostError && blogPost && (
                <div className="bg-white shadow rounded-lg p-4">
                  <h1 className="text-base sm:text-xl md:text-2xl font-semibold mb-3">{blogPost?.title}</h1>
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={blogPost?.sampleImg}
                      alt={blogPost?.title}
                      className="w-[450px] h-72 mb-3 rounded-lg"
                    />
                  </div>
                  <PostContent contents={blogPost.contents} />
                  <div className="mt-4 flex items-center gap-2">
                    <p className="font-[500] text-green2 text-xs md:text-md">{blogPost?.author},</p>
                    <p className="text-gray-500 text-xs font-light">{blogPost?.date}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              <CommentSection />
              <div className="mb-4 bg-white shadow rounded-lg p-4">
                <h2 className="text-base sm:text-md md:text-lg font-semibold mb-2 text-green1">
                  Related Posts
                </h2>
                {relatedPostsLoading && (
                  <Skeleton
                    className="mb-4 h-[100px] sm:h-[160px] md:h-[140px] w-full rounded-lg "
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
                    className="mb-4 h-[100px] sm:h-[160px] md:h-[140px] w-full rounded-lg "
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

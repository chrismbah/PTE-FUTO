/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useFetchBlogPosts } from "./hooks/useFetchBlogPosts";
import { TopPosts } from "./cards/Top";
import { OthersPosts } from "./cards/Others";
import { FeaturedPosts } from "./cards/Featured";
import Footer from "../../../components/footer/Footer";
import { Spinner } from "../../../components/loaders/Spinner";
import { BadNetworkIcon } from "../../../components/icons/BadNetworkIcon";

export default function Blog() {
  const { blogPosts, blogPostsLoading, blogPostsError, fetchBlogPosts } =
    useFetchBlogPosts();
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="blog-section">
          <h2 className="py-3 text-green2 border-b border-b-gray-200 w-full font-semibold text-lg ss:text-xll md:text-2xl mb-4">
            Top Articles
          </h2>
          {blogPosts && blogPosts.length > 0 && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <TopPosts blogPosts={blogPosts} />
                <OthersPosts blogPosts={blogPosts} />
              </div>
              <h2 className="text-green2 py-3 border-b border-b-gray-200 w-full font-semibold text-lg ss:text-xll md:text-2xl mb-4">
                Don't Miss
              </h2>
              <FeaturedPosts blogPosts={blogPosts} />
            </>
          )}
          {blogPostsLoading && !blogPosts && !blogPostsError && (
            <div className="w-full h-[70vh] flex items-center justify-center flex-col">
              <Spinner className="w-8 sm:w-8 md:w-10" />
              <p className="font-[500] text-sm sm:text-xs md:text-base text-gray-700 mt-2">
                Loading posts...
              </p>
            </div>
          )}{" "}
          {blogPostsError && !blogPostsLoading && !blogPosts && (
            <div className="w-full h-[70vh] flex items-center justify-center flex-col">
              <BadNetworkIcon className="w-10 sm:w-12 md:w-16" />
              <p className=" font-[500] text-ss sm:text-sm mmd:text-xs text-center">
                Sorry, could'nt load posts at the moment.{" "}
                <button
                  className="underline hover:no-underline text-green1"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </p>
            </div>
          )}
          {blogPosts && blogPosts.length < 1 && (
            <div className="w-full h-[70vh] flex items-center justify-center flex-col">
              <BadNetworkIcon className="w-10 sm:w-12 md:w-16" />
              <p className=" font-[500] text-ss sm:text-sm mmd:text-xs text-center">
                Sorry, could'nt load posts at the moment.{" "}
                <button
                  className="underline hover:no-underline text-green1"
                  onClick={() => fetchBlogPosts()}
                >
                  Retry
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

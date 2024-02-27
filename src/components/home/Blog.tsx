/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "flowbite-react";
import { customButtonTheme } from "../../themes/customButtton";
import { Link } from "react-router-dom";
import { useFetchBlogPosts } from "../../pages/misc/blog/hooks/useFetchBlogPosts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useEffect } from "react";
export default function Blog() {
  const { blogPosts, blogPostsLoading, blogPostsError, fetchBlogPosts } =
    useFetchBlogPosts();

  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="home-gray-bg">
      <div className="box-width">
        <div className="section">
          <div className="mmd:flex items-center justify-center flex-col mb-3">
            <h2>
              <div className="bar-style" /> Blog
            </h2>
            <p className="text-gray-700 font-[500] text-ss ss:text-sm xlg:text-xs mb-4">
              Check out our Latest Articles and Blogs.
            </p>
          </div>
          <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-5 mb-4">
            {blogPosts &&
              blogPosts.filter((post)=>post.postType !== "featured")
              .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map(({ title, sampleImg, contents, postType, id }) => {
                  return (
                    <Link to={`/blog/posts/${title}/${id}/${postType}`}>
                      <div className="w-full flex flex-col justify-start h-[350px] ss:h-[360px] md:h-[340px] relative">
                        <div className="w-full h-[230px] rounded-lg overflow-hidden mb-4">
                          <img
                            src={sampleImg}
                            alt={title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h5 className="mb-2 text-xs md:text-ss lg:text-xs font-bold tracking-tight text-gray-900 dark:text-white">
                          {title}
                        </h5>
                        <p className="mb-1 font-normal text-gray-900 text-ss ss:text-sm md:text-ss xmd:text-ss xl:text-sm">
                          {typeof contents[0].content === "string" &&
                            contents[0].content
                              .split(" ")
                              .slice(0, 8)
                              .join(" ")}
                          ...
                        </p>
                        <Link
                          to={`/blog/posts/${title}/${id}/${postType}`}
                          className="font-[500] absolute bottom-0 left-0 underline text-ss ss:text-sm md:text-ss xmd:text-ss xl:text-sm hover:text-green1"
                        >
                          Read More...
                        </Link>
                      </div>
                    </Link>
                  );
                })}
          </div>
          {blogPosts && blogPosts.length > 0 && (
            <div className="w-full flex items-center justify-center mt-12">
              <Link to={"/blog"}>
                <Button theme={customButtonTheme} size={"lg"} color="primary">
                  View All Blogs
                </Button>
              </Link>
            </div>
          )}
          {blogPostsLoading && (
            <div className="grid items-center sm:grid-cols-2 mmd:grid-cols-3 gap-5 px-3 sm:px-0 mb-4">
              <div>
                <Skeleton className="h-[230px] mb-3 rounded-lg w-full" />
                <Skeleton className="h-[10px] md:h-[16px] w-full md:w-[85%]" />
                <Skeleton className="h-[8px] md:h-[12px] w-[80%] md:w-[65%] mb-1 sm:mb-3" />
                <Skeleton className="h-[6px] md:h-[10px] w-[100px]" />
              </div>{" "}
              <div>
                <Skeleton className="h-[230px] mb-3 rounded-lg w-full" />
                <Skeleton className="h-[10px] md:h-[16px] w-full md:w-[85%]" />
                <Skeleton className="h-[8px] md:h-[12px] w-[80%] md:w-[65%] mb-1 sm:mb-3" />
                <Skeleton className="h-[6px] md:h-[10px] w-[100px]" />
              </div>{" "}
              <div>
                <Skeleton className="h-[230px] mb-3 rounded-lg w-full" />
                <Skeleton className="h-[10px] md:h-[16px] w-full md:w-[85%]" />
                <Skeleton className="h-[8px] md:h-[12px] w-[80%] md:w-[65%] mb-1 sm:mb-3" />
                <Skeleton className="h-[6px] md:h-[10px] w-[100px]" />
              </div>
            </div>
          )}

          {
            blogPostsError && <p className="text-gray-800 font-[500] text-sm sm:text-xs mmd:text-base">Sorry, Could'nt load posts at the moment</p>
          }
        </div>
      </div>
    </div>
  );
}

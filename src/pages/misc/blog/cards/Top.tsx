"use client";
import { Carousel } from "flowbite-react";
import { FC } from "react";
import { BlogPostProp } from "../../../../models/misc/blog";
import { Link } from "react-router-dom";

export const TopPosts: FC<BlogPostProp> = ({ blogPosts }) => {
  return (
    <>
      {blogPosts.length > 0 && (
        <div className=" overflow-hidden h-[460px] xxss:h-[480px] ss:h-[460px] md:h-[512.5px] w-full bg-white border border-gray-200 rounded-lg shadow">
          <Carousel slideInterval={2000} indicators={false}>
            {blogPosts
              .filter((post) => post.postType === "top")
              .map(({ title, sampleImg, contents, date, author, id }, i) => (
                <Link to={`/blog/posts/${title}/${id}`}>
                  <div key={i} className="h-full">
                  <img
                    className="rounded-t-lg xxss:h-3/5 w-full"
                    src={sampleImg}
                    alt={title}
                  />
                  <div className="p-5 xxss:h-2/5 w-full flex flex-col justify-between">
                    <div>
                      <h5 className="mb-2 text-base md:text-lg lg:text-xl xlg:text-xll font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h5>
                      <p className="mb-3 font-normal text-ss xl:text-xs text-gray-700 dark:text-gray-400">
                        {typeof contents[0].content === "string" &&
                          contents[0].content.split(" ").slice(0, 20).join(" ")}
                        ...
                      </p>{" "}
                    </div>
                    <p className="font-normal text-gray-500 text-ss lg:text-xs flex items-end">
                      {author} on {date}
                    </p>
                  </div>
                </div>

                </Link>
                              ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

"use client";
import { Carousel } from "flowbite-react";
import { FC } from "react";
import { BlogPostProp } from "../../../../models/misc/blog";
export const TopPosts: FC<BlogPostProp> = ({ blogPosts }) => {
  return (
    <>
      {blogPosts.length > 0 && (
        <div className="group overflow-hidden h-[520px] md:h-[513px] w-full bg-white border border-gray-200 rounded-lg shadow">
          <Carousel slideInterval={2000} indicators={false}>
            {blogPosts
              .filter((post) => post.postType === "top")
              .map(({ title, sampleImg, contents, date, author }, i) => (
                <div key={i} className="h-full">
                  <img
                    className="object-cover rounded-t-lg h-3/5 w-full duration-300 ease-in-out transform group-hover:scale-105"
                    src={sampleImg}
                    alt={title}
                  />
                  <div className="p-5 h-2/5 w-full flex flex-col justify-between">
                    <div>
                      <h5 className="mb-2 text-base md:text-lg lg:text-xl xlg:text-xll font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h5>
                      <p className="mb-3 font-normal text-sm xl:text-xs text-gray-700 dark:text-gray-400">
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
              ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

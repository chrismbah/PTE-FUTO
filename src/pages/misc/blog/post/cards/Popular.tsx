import { Link } from "react-router-dom";
import { FC } from "react";
import { BlogPostProp } from "../../../../../models/misc/blog";

export const PopularPosts:FC<BlogPostProp> = ({blogPosts}) => {
  return (
    <div>
        {
          blogPosts.map(
            ({ title, sampleImg, date, author, postType, id }, i) => {
              return (
                <Link to={`/blog/posts/${title}/${id}/${postType}`} key={i}>
                  <div
                    key={i}
                    className="overflow-hidden cursor-pointer group mb-4 h-[120px] sm:h-[160px] md:h-[140px] flex  items-center bg-white border border-gray-200 rounded-lg shadow flex-row w-full hover:bg-gray-100 "
                  >
                    <div className="flex items-start flex-col justify-between p-2 sm:p-4 leading-normal w-2/3 h-full">
                      <div>
                        <h5 className="mb-2 text-sm md:text-ss lg:text-xs font-bold tracking-tight text-gray-900 ">
                          {title}
                        </h5>
                      </div>
                      <p className="font-normal text-gray-500 text-xss lg:text-[10px] flex items-end">
                        {author} on {date}
                      </p>
                    </div>
                    <img
                      className="object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105  overflow-hidden h-full rounded-none rounded-r-lg w-1/3"
                      src={sampleImg}
                      alt={title}
                    />
                  </div>
                </Link>
              );
            }
          )}
  
      </div>
  );
};

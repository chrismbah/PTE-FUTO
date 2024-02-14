import { FC } from "react";
import { BlogPostProp } from "../../../../models/misc/blog";
import { Link } from "react-router-dom";

export const FeaturedPosts: FC<BlogPostProp> = ({ blogPosts }) => {
  return (
    <>
      {blogPosts.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {blogPosts
            .filter((post) => post.postType === "featured")
            .map(({ title, sampleImg, contents, date, author, id, postType }, i) => (
              <Link to={`/blog/posts/${title}/${id}/${postType}`} key={i}>
                <div
                className="group overflow-hidden h-[150px] flex items-center flex-row md:flex-col md:h-[500px] w-full bg-white border border-gray-200 rounded-lg shadow"
              >
                <img
                  className="object-cover rounded-none rounded-l-lg md:rounded-t-lg md:rounded-none h-full w-1/3 md:h-3/5 md:w-full duration-300 ease-in-out transform group-hover:scale-105"
                  src={sampleImg}
                  alt={title}
                />
                <div className="p-2 sm:p-3 h-full w-2/3 md:h-2/5 md:w-full flex flex-col justify-between">
                  <div>
                    <h5 className="mb-2 text-ss xss:text-sm md:text-lg lg:text-xl xlg:text-xll font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                    <p className="mb-3 font-normal hidden md:block text-ss xl:text-xs text-gray-700 dark:text-gray-400">
                      {typeof contents[0].content === "string" &&
                        contents[0].content.split(" ").slice(0, 25).join(" ")}
                      ...
                    </p>{" "}
                    <p className="mb-3 font-normal block md:hidden text-sss ss:text-xss xl:text-xs text-gray-700 dark:text-gray-400">
                      {typeof contents[0].content === "string" &&
                        contents[0].content.split(" ").slice(0, 20).join(" ")}
                      ...
                    </p>{" "}
                  </div>
                  <p className="font-normal text-gray-500 text-sss sm:text-xss lg:text-sm flex items-end">
                    {author} on {date}
                  </p>
                </div>
              </div>

              </Link>
                          ))}
        </div>
      )}
    </>
  );
};

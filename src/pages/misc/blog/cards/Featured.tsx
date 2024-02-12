import { FC } from "react";
import { BlogPostProp } from "../../../../models/misc/blog";

export const FeaturedPosts: FC<BlogPostProp> = ({ blogPosts }) => {
  return (
    <div>
      {blogPosts
        ?.filter((post) => post.postType === "featured")
        .map(({ title, sampleImg, contents, date, author }, i) => (
          <div
            key={i}
            className="mb-4 md:h-[200px] flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 "
          >
            <div className="flex items-start flex-col justify-between p-4 leading-normal w-full md:w-2/3 md:h-full">
              <div>
                <h5 className="mb-2 text-md md:text-base lg:text-lg xlg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 md:text-sm xl:text-xs">
                  {typeof contents[0].content === "string" &&
                    contents[0].content.split(" ").slice(0, 15).join(" ")}
                  ...
                </p>
              </div>

              <p className="font-normal text-gray-500 text-ss lg:text-sm flex items-end">
                {author} on {date}
              </p>
            </div>
            <img
              className="object-cover h-full overflow-hidden rounded-t-lg md:rounded-none md:rounded-r-lg md:w-1/3"
              src={sampleImg}
              alt={title}
            />
          </div>
        ))}
    </div>
  );
};
{
}

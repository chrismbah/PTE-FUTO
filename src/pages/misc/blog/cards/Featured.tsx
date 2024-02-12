import { FC } from "react";
import { BlogPostProp } from "../../../../models/misc/blog";

export const FeaturedPosts: FC<BlogPostProp> = ({ blogPosts }) => {
  return (
    <div>
      {blogPosts
        ?.filter((post) => post.postType === "featured")
        .map(({ title, sampleImg, contents, date, author }, i) => (
          <div key={i}>
            <div className="mb-4 md:h-[200px] flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 ">
              <div className="flex items-start flex-col justify-between p-4 leading-normal w-full md:w-2/3 h-full">
                <div>
                <h5 className="mb-2 text-md lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 text-sm">
                  {typeof contents[0].content === "string" &&
                    contents[0].content.split(" ").slice(0, 20).join(" ")}
                  ...
                </p>
                </div>
               
                <p className="mb-3 font-normal text-gray-700 text-sm">
                 {author} on {date}
                </p>
              </div>
              <img
                className="object-cover h-full overflow-hidden rounded-t-lg md:rounded-none md:rounded-r-lg md:w-1/3"
                src={sampleImg}
                alt={title}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
{
  /* <a
href="#"
className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 "
> 
<img
  className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
  src={sampleImg}
  alt={title}
/>
<div className="flex flex-col justify-between p-4 leading-normal">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
  </h5>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    {typeof contents[0].content === "string" &&
      contents[0].content.split(" ").slice(0, 20).join(" ")}
    ...
  </p>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    {date}
  </p>
</div>
</a> */
}

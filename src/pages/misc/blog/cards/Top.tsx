"use client";
import { Carousel } from "flowbite-react";
import { FC } from "react";
import { BlogPostProp } from "../../../../models/misc/blog";
export const TopPosts: FC<BlogPostProp> = ({ blogPosts }) => {
  return (
    <div className=" h-[500px] md:h-[632px] w-full bg-white border border-gray-200 rounded-lg shadow">
      <Carousel slideInterval={2000} indicators={false}>
        {blogPosts
          ?.filter((post) => post.postType === "top-stories")
          .map(({ title, sampleImg, contents, date, author }, i) => (
            <div key={i} className="h-full">
              <img
                className="rounded-t-lg ss:h-3/5  w-full"
                src={sampleImg}
                alt={title}
              />
              <div className="p-5 ss:h-2/5 w-full flex flex-col justify-between">
                <div>
                  <h5 className="mb-2 text-md md:text-lg lg:text-xl xlg:text-xll font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                  <p className="mb-3 font-normal md:text-sm xl:text-xs text-gray-700 dark:text-gray-400">
                    {typeof contents[0].content === "string" &&
                      contents[0].content.split(" ").slice(0, 15).join(" ")}
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
  );
};
// {blogPosts
//   ?.filter((post) => post.postType === "top-stories")
//   .map(({ title, sampleImg, contents, date, author }, i) => (
//     <div
//       key={i}
//       className="mb-4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//     >
//       <a href="#">
//         <img className="rounded-t-lg" src={sampleImg} alt={title} />
//       </a>
//       <div className="p-5">
//         <a href="#">
//           <h5 className="mb-2 text-md md:text-lg lg:text-xl xlg:text-xll font-bold tracking-tight text-gray-900 dark:text-white">
//             {title}
//           </h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           {typeof contents[0].content === "string" &&
//             contents[0].content.split(" ").slice(0, 20).join(" ")}
//           ...
//         </p>{" "}
//         <p className="font-normal text-gray-500 text-ss lg:text-xs flex items-end">
//           {author} on {date}
//         </p>
//       </div>
//     </div>
//   ))}

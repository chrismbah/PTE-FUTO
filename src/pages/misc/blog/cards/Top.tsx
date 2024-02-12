// import { useGetPosts } from "../../../../hooks/misc/blog/useGetPosts";
import {FC} from "react"
import { BlogPostProp } from "../../../../models/misc/blog";
export const TopPosts:FC<BlogPostProp> = ({blogPosts})=> {
  return (
    <div>
      {blogPosts
        ?.filter((post) => post.postType === "top-stories")
        .map(({ title, sampleImg, contents, date, author }, i) => (
            <div key={i} className="mb-4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={sampleImg} alt={title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {typeof contents[0].content === "string" &&
                    contents[0].content.split(" ").slice(0, 20).join(" ")}
                  ...
                </p>{" "}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {author} on {date}
                </p>
              </div>
            </div>
        ))}
    </div>
  );
}

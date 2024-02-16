import { FC } from "react";
import { ContentBlockProp } from "../../../../models/misc/blog/blogPosts";
export const PostContent: FC<ContentBlockProp> = ({ contents }) => {
  return contents.map(({ type, content }, i) => {
    if (type === "h1" && typeof content === "string") {
      return (
        <h1 key={i} className="text-md sm:text-lg md:text-xl font-semibold">
          {content}
        </h1>
      );
    } else if (type === "h2" && typeof content === "string") {
      return (
        <h2 key={i} className="text-base font-semibold">
          {content}
        </h2>
      );
    } else if (type === "p" && typeof content === "string") {
      return (
        <p key={i} className="leading-relaxed text-gray-800  text-sm sm:text-base mb-2">
          {content}
        </p>
      );
    } else if (type === "p-bold" && typeof content === "string") {
      return (
        <p
          key={i}
          className=" font-semibold  text-gray-800 text-sm sm:text-base mb-2"
        >
          {content}
        </p>
      );
    } else if (type === "img" && typeof content === "string") {
      return (
        <img key={i} src={content} alt="NO IMAGE OHHHHH" className="my-4 w-full sm:w-[350px] rounded-md" />
      );
    } else if (type === "list" && typeof content != "string") {
      return (
        <ul>
          {content.map(({ type, content }, i) => {
            return (
              <li key={i}>
                {type === "h2" ? 
                  <h2 className="text-xs sm:text-md font-semibold">-{content}</h2>
                 : 
                  type === "p" ? 
                    <p className=" text-gray-800 text-sm sm:text-base mb-2">
                      {content}
                    </p>
                  : type === "img" && <img src={content} className="my-3 w-full sm:w-[350px] rounded-md" />
                }
              </li>
            );
          })}
        </ul>
      );
    }
  });
};

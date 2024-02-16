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
        <div className="w-full flex items-center justify-center">
        <img key={i} src={content} alt="no-img" className="my-4 w-full sm:w-[400px] rounded-md" />

        </div>
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
                    <p className=" text-gray-800 text-ss sm:text-xs mb-2">
                      -{content}
                    </p>
                  : type === "img" && <div className="w-full flex items-center justify-center">
                  <img key={i} src={content} alt="no-img" className="my-4 w-full sm:w-[400px] rounded-md" />
          
                  </div>
                }
              </li>
            );
          })}
        </ul>
      );
    }
  });
};

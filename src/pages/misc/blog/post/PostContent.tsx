import { FC } from "react";
import { ContentBlockProp } from "../../../../models/misc/blog/blogPosts";
export const PostContent: FC<ContentBlockProp> = ({ contents }) => {
  return contents.map(({ type, content }, i) => {
    if (type === "h1" && typeof content === "string") {
      return (
        <h1 key={i} className="text-base sm:text-md md:text-lg font-semibold">
          {content}
        </h1>
      );
    } else if (type === "h2" && typeof content === "string") {
      return (
        <h2 key={i} className="text-xs sm:text-base font-semibold">
          {content}
        </h2>
      );
    } else if (type === "p" && typeof content === "string") {
      return (
        <p
          key={i}
          className=" text-gray-600 leading-relaxed text-sm sm:text-xs font-medium mb-2"
        >
          {content}
        </p>
      );
    } else if (type === "p-bold" && typeof content === "string") {
      return (
        <p key={i} className=" text-gray-800 text-sm sm:text-xs font-bold mb-2">
          {content}
        </p>
      );
    } else if (type === "img" && typeof content === "string") {
      return (
        <div className="w-full flex items-center justify-center">
          <img
            key={i}
            src={content}
            alt="no-img"
            className="my-4 w-full sm:w-[400px] rounded-md"
          />
        </div>
      );
    } else if (type === "list" && typeof content !== "string") {
      return (
        <ul key={i}>
          {content.map(({ type, content }, i) => {
            return (
              <li key={i}>
                {type === "h2" ? (
                  <h2 className="text-xs sm:text-base font-semibold">
                    {content}
                  </h2>
                ) : type === "p" ? (
                  <p className=" text-gray-600 leading-relaxed text-sm sm:text-xs font-medium mb-2">
                    {content}
                  </p>
                ) : (
                  type === "img" && (
                    <div className="w-full flex items-center justify-center">
                      <img
                        key={i}
                        src={content}
                        alt="no-img"
                        className="my-4 w-full sm:w-[400px] rounded-md"
                      />
                    </div>
                  )
                )}
              </li>
            );
          })}
        </ul>
      );
    }
  });
};

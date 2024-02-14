import { FC } from "react";
import { ContentBlockProp } from "../../../../models/misc/blog";
export const PostContent: FC<ContentBlockProp> = ({ contents }) => {
  return contents.map(({type, content}, i) => {
    if (type === "h1" && typeof content === "string") {
      return <h1 key={i} className="text-xl font-semibold my-2">{content}</h1>;
    } else if (type === "h2" && typeof content === "string") {
      return <h2 key={i} className="text-xl font-semibold my-2">{content}</h2>;
    } else if (type === "p" && typeof content === "string") {
      return <p  key={i}className="leading-relaxed text-gray-800 my-2">{content}</p>;
    } else if (type === "p-bold" && typeof content === "string") {
      return <p  key={i}className=" font-semibold leading-relaxed text-gray-800 my-2">{content}</p>;
    } else if (type === "img" && typeof content === "string") {
      return <img key={i} src={content} alt="NO IMAGE OHHHHH" className="my-2" />;
    } else if (type === "list" && typeof content != "string") {
      return (
        <ul>
          {content.map(({ type, content }, i) => {
            return (
              <li key={i}>
                {type === "h2" ? (
                  <h2 className="text-lg font-semibold">{content}</h2>
                ) : (
                  type === "p" && <p className="font-[500] leading-relaxed text-gray-800 my-3">-{content}</p>
                )}
              </li>
            );
          })}
        </ul>
      );
    }
  });
};

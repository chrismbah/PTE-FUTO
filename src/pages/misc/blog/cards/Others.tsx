import { FC } from "react";
import { BlogPostProp } from "../../../../models/misc/blog/blogPosts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInVariants7 } from "../../../../animation/variants";

export const OthersPosts: FC<BlogPostProp> = ({ blogPosts }) => {
  return (
    <div>
      {blogPosts.length > 0 &&
        blogPosts
          .filter((post) => post.postType === "others")
          .map(
            ({ title, sampleImg, contents, date, postType, author, id }, i) => (
              <Link to={`/blog/posts/${title}/${id}/${postType}`}>
                <motion.div
                  variants={fadeInVariants7}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={i}
                  key={i}
                  className="overflow-hidden cursor-pointer group mb-4 max-h-[400px] md:h-[160px] flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 "
                >
                  <div className="flex items-start flex-col justify-between p-4 leading-normal w-full md:w-2/3 md:h-full">
                    <div>
                      <h5 className="mb-2 text-base md:text-ss lg:text-xs font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-900 text-sm md:text-ss xmd:text-ss xl:text-sm">
                        {typeof contents[0].content === "string" &&
                          contents[0].content.split(" ").slice(0, 15).join(" ")}
                        ...
                      </p>
                    </div>

                    <p className="font-medium text-gray-700 text-ss lg:text-[10px] flex items-end">
                      {author} on {date}
                    </p>
                  </div>
                  <img
                    className="object-cover h-full w-full transition-all duration-300 ease-in-out transform group-hover:scale-105  overflow-hidden rounded-t-lg md:h-full md:rounded-none md:rounded-r-lg md:w-1/3"
                    src={sampleImg}
                    alt={title}
                  />
                </motion.div>
              </Link>
            )
          )}
    </div>
  );
};

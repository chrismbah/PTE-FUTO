import { useParams } from "react-router-dom";
import { useFetchBlogPosts } from "../../../../../hooks/misc/blog/useFetchBlogPosts";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PopularPosts = () => {
  const { postID, postType } = useParams();
  const { fetchPopularPosts, popularPosts } = useFetchBlogPosts();

  useEffect(() => {
    if (postID && postType) {
      fetchPopularPosts(postID);
    }
  }, [postID]);

  return (
    <>
      {popularPosts && (
        <div>
            <h2 className="text-lg font-semibold mb-4 text-green1">Popular Posts</h2>
          {popularPosts.map(
            ({ title, sampleImg, date, author, postType, id }, i) => {
              return (
                <Link to={`/blog/posts/${title}/${id}/${postType}`} key={i}>
                  <div
                    className="overflow-hidden cursor-pointer group mb-4 h-[160px] md:h-[140px] flex  items-center bg-white border border-gray-200 rounded-lg shadow flex-row w-full hover:bg-gray-100 "
                  >
                    <div className="flex items-start flex-col justify-between p-4 leading-normal w-2/3 h-full">
                      <div>
                        <h5 className="mb-2 text-base md:text-ss lg:text-xs font-bold tracking-tight text-gray-900 ">
                          {title}
                        </h5>
                      </div>
                      <p className="font-normal text-gray-500 text-ss lg:text-[10px] flex items-end">
                        {author} on {date}
                      </p>
                    </div>
                    <img
                      className="object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105  overflow-hidden h-full rounded-none rounded-r-lg w-1/3"
                      src={sampleImg}
                      alt={title}
                    />
                  </div>
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

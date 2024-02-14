import { useParams } from "react-router-dom";
import { useFetchBlogPosts } from "../../../../../hooks/misc/blog/useFetchBlogPosts";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const RelatedPosts = () => {
  const { postID, postType } = useParams();
  const { fetchRelatedPosts, relatedPosts } = useFetchBlogPosts();

  useEffect(() => {
    if (postID && postType) {
      fetchRelatedPosts(postID, postType);
    }
  }, []);

  return (
    <>
      {relatedPosts && (
        <div>
            <h2 className="text-lg font-semibold mb-4">Related Posts</h2>
          {relatedPosts?.map(
            ({ title, sampleImg, date, author, postType, id }, i) => {
              return (
                <Link to={`/blog/posts/${title}/${id}/${postType}`}>
                  <div
                    key={i}
                    className="overflow-hidden cursor-pointer group mb-4 max-h-[300px] md:h-[130px] flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 "
                  >
                    <div className="flex items-start flex-col justify-between p-4 leading-normal w-full md:w-2/3 md:h-full">
                      <div>
                        <h5 className="mb-2 text-base md:text-ss lg:text-xs font-bold tracking-tight text-gray-900 dark:text-white">
                          {title}
                        </h5>
                      </div>
                      <p className="font-normal text-gray-500 text-ss lg:text-[10px] flex items-end">
                        {author} on {date}
                      </p>
                    </div>
                    <img
                      className="object-cover h-full w-full transition-all duration-300 ease-in-out transform group-hover:scale-105  overflow-hidden rounded-t-lg md:h-full md:rounded-none md:rounded-r-lg md:w-1/3"
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

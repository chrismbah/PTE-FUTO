import { useEffect } from "react";
import { useGetPosts } from "../../../hooks/misc/blog/useGetPosts";
import { TopPosts } from "./cards/Top";
import { FeaturedPosts } from "./cards/Featured";

export default function Blog() {
  const { blogPosts, getPosts, addPosts } = useGetPosts();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="box-width ">
        <div className="page-section">
          <h2 className="py-4 border-b border-b-gray-200 w-full font-semibold text-xl ss:text-xll mb-4">
            Latest Articles
          </h2>
          {blogPosts && (
            <div className="grid md:grid-cols-2 gap-4">
              <TopPosts blogPosts={blogPosts} />
              <FeaturedPosts blogPosts={blogPosts} />
            </div>
          )}
        </div>
        <button
          className="bg-green1 text-white rounded-md p-4 hover:p-6"
          onClick={addPosts}
        >
          Add Posts
        </button>
      </div>
    </div>
  );
}

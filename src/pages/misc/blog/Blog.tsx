import { useEffect } from "react";
import { useFetchBlogPosts } from "./hooks/useFetchBlogPosts";
import { TopPosts } from "./cards/Top";
import { OthersPosts } from "./cards/Others";
import { FeaturedPosts } from "./cards/Featured";
import Footer from "../../../components/footer/Footer";

export default function Blog() {
  const { blogPosts, fetchBlogPosts, addPosts } = useFetchBlogPosts();
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="box-width">
        <div className="blog-section">
          <h2 className="py-3 text-green2 border-b border-b-gray-200 w-full font-semibold text-lg ss:text-xll md:text-2xl mb-4">
            Top Articles
          </h2>
          {blogPosts && blogPosts.length > 0 && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <TopPosts blogPosts={blogPosts} />
                <OthersPosts blogPosts={blogPosts} />
              </div>
              <h2 className="text-green2 py-3 border-b border-b-gray-200 w-full font-semibold text-lg ss:text-xll md:text-2xl mb-4">
                Featured
              </h2>
              <FeaturedPosts blogPosts={blogPosts} />
            </>
          )}
        </div>
        <button
          className="bg-green1 text-white rounded-md p-4 hover:p-6"
          onClick={addPosts}
        >
          Add Posts
        </button>{" "}
      </div>
      <Footer />
    </div>
  );
}

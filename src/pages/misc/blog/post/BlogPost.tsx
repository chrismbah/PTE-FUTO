import { useEffect } from "react";
import { useFetchBlogPosts } from "../../../../hooks/misc/blog/useFetchBlogPosts";
import { useParams } from "react-router-dom";
import { PostContent } from "./PostContent";
import { PopularPosts } from "./cards/Popular";
import { RelatedPosts } from "./cards/Related";
import Footer from "../../../../components/footer/Footer";

export default function BlogPost() {
  const { fetchBlogPost, blogPost } = useFetchBlogPosts();
  const { postID, postType } = useParams();

  useEffect(() => {
    if (postID && postType) {
      fetchBlogPost(postID);
    }
  }, [postID]);

  return (
    <div className="min-h-screen">
      <div className="box-width">
        <div className="px-3 py-20 sm:px-16 md:px-30 sm:py-24">
          {blogPost && (
            <div>
              {/* <img
                src={blogPost.sampleImg}
                alt={blogPost.title}
                className="w-[350px] mb-3 rounded-lg"
              /> */}
              {/* <p>{blogPost.author}</p>
              <p>{blogPost.title}</p> */}
              {/* <p>{blogPost.no}</p> */}
              <div className=" sticky grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <PostContent contents={blogPost.contents} />
                </div>
                <div className="md:col-span-2">
                  <RelatedPosts />
                  <PopularPosts />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />

    </div>
  );
}

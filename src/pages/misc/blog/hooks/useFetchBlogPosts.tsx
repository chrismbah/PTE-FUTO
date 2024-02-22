import { useState } from "react";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { IBlogPost, TBlogPost } from "../../../../models/misc/blog/blogPosts";
import { post } from "../../../../data/misc/blog/posts";
import { db } from "../../../../config/firebase";
import { getCurrentDate } from "../../../../helpers/formatDate";
// import { useNetworkNotifications } from "../../network/useNetworkNotifications";
import { useToast } from "../../../../helpers/useToast";

export const useFetchBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[] | null>(null);
  const [blogPost, setBlogPost] = useState<TBlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<IBlogPost[] | null>(null);
  const [popularPosts, setPopularPosts] = useState<IBlogPost[] | null>(null);
  const [blogPostsLoading, setBlogPostsLoading] = useState(true);
  const [blogPostsError, setBlogPostsError] = useState(false);
  const [blogPostLoading, setBlogPostLoading] = useState(true);
  const [popularPostsLoading, setPopularPostsLoading] = useState(true);
  const [relatedPostsLoading, setRelatedPostsLoading] = useState(true);
  const [blogPostError, setBlogPostError] = useState(false);
  const [popularPostsError, setPopularPostsError] = useState(false);
  const [relatedPostsError, setRelatedPostsError] = useState(false);

  const postsRef = collection(db, "blogPosts");

  const addPosts = async () => {
    try {
        await addDoc(postsRef, { ...post, date: getCurrentDate() });
        console.log("Post added");
    } catch (err) {
      console.error("Error adding posts:", err);
    } finally {
      fetchBlogPosts();
    }
  };
  const fetchBlogPosts = async () => {
    setBlogPostsLoading(true);
    try {
      const data = await getDocs(postsRef);
      const list = data.docs
      .sort(() => 0.5 - Math.random())
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IBlogPost[];
      setBlogPostsLoading(false);
      setBlogPosts(list);
      console.log("Blogs fetched");
    } catch (err) {
      setBlogPostsError(true);
      console.log(err);
    }
  };
  const fetchBlogPost = async (id: string) => {
    const postRef = doc(db, "blogPosts", id);
    setBlogPostLoading(true);
    try {
      const postSnap = await getDoc(postRef);
      if (postSnap.exists()) {
        const postData = postSnap.data() as TBlogPost;
        setBlogPost(postData);
        setBlogPostLoading(false);
      } else {
        setBlogPost(null);
        console.log("Doc doesnt exist");
      }
    } catch (error: any) {
      setBlogPostLoading(false);
      setBlogPostError(true);
      if (error.code === "unavailable") {
        useToast(
          "error",
          "Sorry, an error occured. Please check your network connection."
        );
      }
      console.log(error);
    }
  };
  const fetchRelatedPosts = async (id: string, postType: string) => {
    setRelatedPostsLoading(true);
    try {
      const data = await getDocs(postsRef);
      const relatedPostList = data.docs
        .filter((doc) => doc.id !== id && doc.data().postType === postType)
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as IBlogPost[];
      setRelatedPosts(relatedPostList);
      setRelatedPostsLoading(false);
      console.log("Blogs fetched");
    } catch (err) {
      setRelatedPostsLoading(false);
      setRelatedPostsError(true);
      console.log("Couldnt fetch related posts");
    }
  };
  const fetchPopularPosts = async (id: string, postType: string) => {
    setPopularPostsLoading(true);
    try {
      const data = await getDocs(postsRef);
      const popularList = data.docs
        .filter((doc) => doc.id !== id && doc.data().postType !== postType)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as IBlogPost[];
      setPopularPosts(popularList);
      setPopularPostsLoading(false);
      console.log("Blogs fetched");
    } catch (err) {
      setPopularPostsLoading(false);
      setPopularPostsError(true);
      console.log("Couldnt fetch related posts");
    }
  };

  return {
    blogPosts,
    blogPost,
    relatedPosts,
    popularPosts,
    addPosts,
    fetchBlogPosts,
    fetchBlogPost,
    fetchPopularPosts,
    fetchRelatedPosts,
    blogPostsLoading,
    blogPostLoading,
    popularPostsLoading,
    relatedPostsLoading,
    blogPostsError,
    blogPostError,
    popularPostsError,
    relatedPostsError,
  };
};

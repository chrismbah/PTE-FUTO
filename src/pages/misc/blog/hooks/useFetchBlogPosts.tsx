/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { IBlogPost, TBlogPost } from "../../../../models/misc/blog/blogPosts";
import { db } from "../../../../config/firebase";
import { notifyUser } from "../../../../helpers/notifyUser";

export const useFetchBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[] | null>(null);
  const [homeBlogPosts, setHomeBlogPosts] = useState<IBlogPost[] | null>(null);
  const [blogPost, setBlogPost] = useState<TBlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<IBlogPost[] | null>(null);
  const [popularPosts, setPopularPosts] = useState<IBlogPost[] | null>(null);
  const [blogPostsLoading, setBlogPostsLoading] = useState(true);
  const [homeBlogPostsLoading, setHomeBlogPostsLoading] = useState(true);
  const [blogPostsError, setBlogPostsError] = useState(false);
  const [homeBlogPostsError, setHomeBlogPostsError] = useState(false);
  const [blogPostLoading, setBlogPostLoading] = useState(true);
  const [popularPostsLoading, setPopularPostsLoading] = useState(true);
  const [relatedPostsLoading, setRelatedPostsLoading] = useState(true);
  const [blogPostError, setBlogPostError] = useState(false);
  const [popularPostsError, setPopularPostsError] = useState(false);
  const [relatedPostsError, setRelatedPostsError] = useState(false);

  const postsRef = collection(db, "blogPosts");

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
      notifyUser("error", "An error occured. Please try again");
      setBlogPostsLoading(false);

    }
  };
  const fetchHomeBlogPosts = async () => {
    setHomeBlogPostsLoading(true);
    try {
      const data = await getDocs(postsRef);
      const list = data.docs
        .sort(() => 0.5 - Math.random())
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as IBlogPost[];
      setHomeBlogPostsLoading(false);
      setHomeBlogPosts(list);

    } catch (err) {
      setHomeBlogPostsLoading(false);
      setHomeBlogPostsError(true);
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
    } catch (error) {
      setBlogPostLoading(false);
      setBlogPostError(true);
      notifyUser("error", "An error occured. Please try again");
      console.log(error);
    }
  };
  // const fetchRelatedPosts = async (id: string, postType: string) => {
  //   setRelatedPostsLoading(true);
  //   try {
  //     const data = await getDocs(postsRef);
  //     const relatedPostList = data.docs
  //       .filter((doc) => doc.id !== id && doc.data().postType === postType)
  //       .map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       })) as IBlogPost[];
  //     setRelatedPosts(relatedPostList);
  //     setRelatedPostsLoading(false);
  //     console.log("Blogs fetched");
  //   } catch (err) {
  //     setRelatedPostsLoading(false);
  //     setRelatedPostsError(true);
  //     console.log("Couldnt fetch related posts");
  //   }
  // };
  // const fetchPopularPosts = async (id: string, postType: string) => {
  //   setPopularPostsLoading(true);
  //   try {
  //     const data = await getDocs(postsRef);
  //     const popularList = data.docs
  //       .filter((doc) => doc.id !== id && doc.data().postType !== postType)
  //       .sort(() => 0.5 - Math.random())
  //       .slice(0, 3)
  //       .map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       })) as IBlogPost[];
  //     setPopularPosts(popularList);
  //     setPopularPostsLoading(false);
  //     console.log("Blogs fetched");
  //   } catch (err) {
  //     setPopularPostsLoading(false);
  //     setPopularPostsError(true);
  //     console.log("Couldnt fetch related posts");
  //   }
  // };

  return {
    blogPosts,
    blogPost,
    // relatedPosts,
    // popularPosts,
    fetchBlogPosts,
    fetchBlogPost,
    // fetchPopularPosts,
    // fetchRelatedPosts,
    fetchHomeBlogPosts,
    homeBlogPosts,
    homeBlogPostsError,
    homeBlogPostsLoading,
    blogPostsLoading,
    blogPostLoading,
    // popularPostsLoading,
    // relatedPostsLoading,
    blogPostsError,
    blogPostError,
    // popularPostsError,
    // relatedPostsError,
  };
};

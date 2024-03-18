/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  collection,
  getDoc,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";
import { IBlogPost, TBlogPost } from "../../../../models/misc/blog/blogPosts";
import { db } from "../../../../config/firebase";
import { notifyUser } from "../../../../helpers/notifyUser";

export const useFetchBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[] | null>(null);
  const [homeBlogPosts, setHomeBlogPosts] = useState<IBlogPost[] | null>(null);
  const [blogPost, setBlogPost] = useState<TBlogPost | null>(null);
  const [blogPostsLoading, setBlogPostsLoading] = useState(true);
  const [homeBlogPostsLoading, setHomeBlogPostsLoading] = useState(true);
  const [blogPostsError, setBlogPostsError] = useState(false);
  const [homeBlogPostsError, setHomeBlogPostsError] = useState(false);
  const [blogPostLoading, setBlogPostLoading] = useState(true);
  const [blogPostError, setBlogPostError] = useState(false);

  const postsRef = collection(db, "blogPosts");

  const fetchBlogPosts = async () => {
    const postsQuery = query(postsRef);
    setBlogPostsLoading(true);
    onSnapshot(
      postsQuery,
      (querySnapshot) => {
        const list: IBlogPost[] = [];
        querySnapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id } as IBlogPost);
        });
        setBlogPosts(list);
        setBlogPostsLoading(false);
      },
      (error: any) => {
        setBlogPostsLoading(false);
        setBlogPostsError(error);
      }
    );
  };
  const fetchHomeBlogPosts = async () => {
    const postsQuery = query(postsRef);
    setHomeBlogPostsLoading(true);
    onSnapshot(
      postsQuery,
      (querySnapshot) => {
        const list: IBlogPost[] = [];
        querySnapshot.forEach((doc) => {
          list
            .sort(() => 0.5 - Math.random())
            .push({ ...doc.data(), id: doc.id } as IBlogPost);
        });
        setHomeBlogPosts(list);
        setHomeBlogPostsLoading(false);
      },
      (error: any) => {
        setHomeBlogPostsLoading(false);
        setHomeBlogPostsError(error);
      }
    );
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

  return {
    blogPosts,
    blogPost,
    fetchBlogPosts,
    fetchBlogPost,
    fetchHomeBlogPosts,
    homeBlogPosts,
    homeBlogPostsError,
    homeBlogPostsLoading,
    blogPostsLoading,
    blogPostLoading,
    blogPostsError,
    blogPostError,
  };
};

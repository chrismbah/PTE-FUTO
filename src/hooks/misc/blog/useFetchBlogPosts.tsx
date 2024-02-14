import { useState } from "react";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { IBlogPost, BlogPost } from "../../../models/misc/blog";
import { posts } from "../../../data/misc/blog/posts";
import { db } from "../../../config/firebase";
import { getCurrentDate } from "../../../helpers/formatDate";

export const useFetchBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[] | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<IBlogPost[] | null>(null);
  const [popularPosts, setPopularPosts] = useState<IBlogPost[] | null>(null);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const postsRef = collection(db, "blogPosts");

  const addPosts = async () => {
    try {
      for (const post of posts) {
        await addDoc(postsRef, { ...post, date: getCurrentDate() });
        console.log("Post added");
      }
    } catch (err) {
      console.error("Error adding posts:", err);
    } finally {
      fetchBlogPosts();
    }
  };

  const fetchBlogPosts = async () => {
    try {
      const data = await getDocs(postsRef);
      const list = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IBlogPost[];
      setBlogPosts(list);
      setLoading(false);
      console.log("Blogs fetched");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  const fetchRelatedPosts = async (id:string, postType:string) => {
    try {
      const data = await getDocs(postsRef);
      const list = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IBlogPost[];

      const relatedList = list.filter((post)=>post.id != id && post.postType === postType)
      setRelatedPosts(relatedList)
      setLoading(false);
      console.log("Blogs fetched");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  const fetchPopularPosts = async (id: string) => {
    try {
      const data = await getDocs(postsRef);
      const list = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IBlogPost[];
      const popularList = list.filter((post)=>post.id != id).slice(0, 3)
      setPopularPosts(popularList)
      setLoading(false);
      console.log("Blogs fetched");
    } catch (err) {
      setLoading(false)
      setError(true);
      console.log(err);
    }
  };

  const fetchBlogPost = async (id: string) => {
    const postRef = doc(db, "blogPosts", id);
    try {
      const postSnap = await getDoc(postRef);
      if (postSnap.exists()) {
        const postData = postSnap.data() as BlogPost;
        setBlogPost(postData);
      } else {
        setBlogPost(null);
        console.log("Doc doesnt exist");
      }
    } catch (err) {
      console.log("Error fetching post");
    }
  };

  return {
    loading,
    error,
    blogPosts,
    blogPost,
    relatedPosts, popularPosts,
    addPosts,
    fetchBlogPosts,
    fetchBlogPost,
    fetchPopularPosts, fetchRelatedPosts
  };
};

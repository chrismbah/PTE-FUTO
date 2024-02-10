import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { IBlogPost } from "../../../models/misc/blog";
import { posts } from "../../../utils/misc/blog/posts";
import { db } from "../../../config/firebase";

export const  useGetPosts =()=> {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[] | null>(null);
  const postsRef = collection(db, "blogPosts");

  const addPosts = async () => {
    try {
      for (const post of posts) {
        await addDoc(postsRef, post);
        console.log("Post added")
      }
    } catch (err) {
      console.error("Error adding posts:", err);
    }
    finally{
      getPosts();

    }
  };

  const getPosts = async () => {
    try {
      const data = await getDocs(postsRef);
      const list = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IBlogPost[]
      setBlogPosts(list);
      console.log("Blogs fetched")
    } catch (err) {
      console.log(err)
    }
  };

  return {blogPosts, addPosts, getPosts};
}
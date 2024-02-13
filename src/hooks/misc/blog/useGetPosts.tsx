import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { IBlogPost } from "../../../models/misc/blog";
import { posts } from "../../../data/misc/blog/posts";
import { db } from "../../../config/firebase";
import { getCurrentDate } from "../../../helpers/formatDate";

export const  useGetPosts =()=> {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[] | null>(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const postsRef = collection(db, "blogPosts");

  const addPosts = async () => {
    try {
      for (const post of posts) {
        await addDoc(postsRef, {...post, date: getCurrentDate()});
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
      setLoading(false)
      console.log("Blogs fetched")
    } catch (err) {
      setError(true)
      console.log(err)
    }
  };

  return {loading, error, blogPosts, addPosts, getPosts, };
}
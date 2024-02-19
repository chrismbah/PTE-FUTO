import { useState } from "react";
import { useGetUserInfo } from "../../../../hooks/auth/useGetUserInfo";
import { getCurrentTime } from "../../../../helpers/getCurrentTime";
import { useParams } from "react-router-dom";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { IBlogComment } from "../../../../models/misc/blog/blogComments";
import { useToast } from "../../../../helpers/useToast";
// import { getCurrentDate } from "../../../../helpers/formatDate";

export const useBlogComments = () => {
  const { postID } = useParams();
  const commentsRef = collection(db, "postsComments");
  const [userComment, setUserComment] = useState<string>("");
  const [blogComments, setBlogComments] = useState<IBlogComment[] | null>(null);
  const currentTime = getCurrentTime();
  const { userID, studentDetails } = useGetUserInfo();

  const getPostComments = async () => {
    try {
      if (postID) {
        const postCommentsRef = query(
          commentsRef,
          where("postID", "==", postID)
        );
        const data = await getDocs(postCommentsRef);
        const comments = data.docs.map((doc) => ({
          ...doc.data(),
        })) as IBlogComment[];
        setBlogComments(comments);
        console.log(comments);
      }
    } catch (err) {
      console.log("Couldnt get comments");
    }
  };

  const addUserComment = async () => {
    try {
      if (studentDetails && postID && userID) {
        if (userComment !== "") {
          const { firstName, lastName } = studentDetails;
          const commentInfo: IBlogComment = {
            postID: postID,
            userID: userID,
            firstName: firstName,
            lastName: lastName,
            comment: userComment,
            time: currentTime,
          };
          await addDoc(commentsRef, commentInfo);
          useToast("success", "Comment added successfully!");
          setUserComment("");
        } else {
          useToast("error", "Please add a comment");
          console.log(userID, studentDetails, postID);
        }
      } else {
        useToast("error", "Something went wrong");
        console.log(userID, studentDetails, postID);
      }
    } catch (err) {
      console.log("Error adding comment");
      useToast("error", "Something went wrong. Please try again");
    }
    finally{
        getPostComments()
    }
  };

  return {
    setUserComment,
    userComment,
    blogComments,
    addUserComment,
    getPostComments,
  };
};

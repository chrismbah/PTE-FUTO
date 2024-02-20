import { useState } from "react";
import { useGetUserInfo } from "../../../../hooks/auth/useGetUserInfo";
import { getCurrentTime } from "../../../../helpers/getCurrentTime";
import { useParams } from "react-router-dom";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { IPostComment } from "../../../../models/misc/blog/postComments";
import { useToast } from "../../../../helpers/useToast";
// import { getCurrentDate } from "../../../../helpers/formatDate";
import { v4 as uuid } from "uuid";
import { getCurrentDateInShortFormat } from "../../../../helpers/formatDate";

export const useBlogComments = () => {
  const { postID } = useParams();
  const commentsRef = collection(db, "postsComments");
  const [userComment, setUserComment] = useState<string>("");
  const [postComments, setPostComments] = useState<IPostComment[] | null>(null);
  const [postCommentsLoading, setPostCommentsLoading] = useState<boolean>(true);
  const [postCommentsError, setPostCommentsError] = useState<boolean>(false);
  const currentTime = getCurrentTime();
  const currentDate = getCurrentDateInShortFormat()
  const { userID, studentDetails } = useGetUserInfo();

  const getPostComments = async () => {
    setPostCommentsLoading(true)
    try {
      if (postID) {
        const postCommentsRef = query(
          commentsRef,
          where("postID", "==", postID)
        );
        const data = await getDocs(postCommentsRef);
        const comments = data.docs.map((doc) => ({
          ...doc.data(),
        }))as IPostComment[];
        setUserComment("")
        setPostComments(comments);
        setPostCommentsLoading(false)
        console.log(comments);
      }
    } catch (err) {
      setPostCommentsError(true)
      console.log("Couldnt get comments");
    }
  };

  
  const quickGetPostComments = async () => {
    try {
      if (postID) {
        const postCommentsRef = query(
          commentsRef,
          where("postID", "==", postID)
        );
        const data = await getDocs(postCommentsRef);
        const comments = data.docs.map((doc) => ({
          ...doc.data(),
        })) as IPostComment[];
        // const sortedComments = comments
        setPostComments(comments);
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
          const { firstName, lastName, email } = studentDetails;
          const commentInfo: IPostComment = {
            postID: postID,
            userID: userID,
            commentID: uuid(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            comment: userComment,
            time: currentTime,
            date:  currentDate, 
            timeStamp: new Date()
          };
          await addDoc(commentsRef, commentInfo);
          useToast("success", "Comment added successfully!");
          setUserComment("");
          quickGetPostComments();
          console.log(userID, studentDetails, postID);
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
  };

  return {
    setUserComment,
    userComment,
    postComments,
    addUserComment,
    getPostComments,
    postCommentsLoading, postCommentsError
  };
};

import { useState } from "react";
import { useGetUserInfo } from "../../../../hooks/auth/useGetUserInfo";
import { getCurrentTime } from "../../../../helpers/getCurrentTime";
import { useParams } from "react-router-dom";
import {
  collection,
  setDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { IPostComment } from "../../../../models/misc/blog/postComments";
import { useToast } from "../../../../helpers/useToast";
import { v4 as uuid } from "uuid";
import { getCurrentDateInShortFormat } from "../../../../helpers/formatDate";
import { useModalContext } from "../../../../context/Modal";

export const useBlogComments = () => {
  const {setOpenDeleteModal } = useModalContext();
  const { postID } = useParams();
  const commentsRef = collection(db, "postsComments");
  const [userComment, setUserComment] = useState<string>("");
  const [postComments, setPostComments] = useState<IPostComment[] | null>(null);
  const [postCommentsLoading, setPostCommentsLoading] = useState<boolean>(true);
  const [postCommentsError, setPostCommentsError] = useState<boolean>(false);
  const [deleteCommentLoading, setDeleteCommentLoading] =
    useState<boolean>(false);
  const [deleteCommentError, setDeleteCommentError] = useState<boolean>(false);
  const currentTime = getCurrentTime();
  const currentDate = getCurrentDateInShortFormat();
  const { userID, studentDetails } = useGetUserInfo();

  const getPostComments = async () => {
    setPostCommentsLoading(true);
    try {
      if (postID) {
        const postCommentsRef = query(
          commentsRef,
          where("commentPostID", "==", postID)
        );
        const data = await getDocs(postCommentsRef);
        const comments = data.docs.map((doc) => ({
          ...doc.data(),
        })) as IPostComment[];
        setUserComment("");
        setPostComments(comments);
        setPostCommentsLoading(false);
        console.log(comments);
      }
    } catch (err) {
      setPostCommentsError(true);
      console.log("Couldnt get comments");
    }
  };

  const updatePostComments = async () => {
    try {
      if (postID) {
        const postCommentsRef = query(
          commentsRef,
          where("commentPostID", "==", postID)
        );
        const data = await getDocs(postCommentsRef);
        const comments = data.docs.map((doc) => ({
          ...doc.data(),
        })) as IPostComment[];
        setPostComments(comments);
        console.log(comments);
      }
    } catch (err) {
      console.log("Couldn't get comments");
    }
  };

  const addUserComment = async () => {
    try {
      if (studentDetails && postID && userID) {
        if (userComment !== "") {
          const { firstName, lastName, email } = studentDetails;
          const commentID = uuid()
          const commentInfo: IPostComment = {
            commentPostID: postID,
            commentUserID: userID,
            commentID: commentID,
            firstName: firstName,
            lastName: lastName,
            email: email,
            comment: userComment,
            time: currentTime,
            date: currentDate,
            timeStamp: new Date(),
          };
          await setDoc(doc(db, "postsComments", commentID ), commentInfo);
          setUserComment("");
          useToast("success", "Comment added successfully!");
          updatePostComments();
        } else {
          useToast("error", "Please add a comment");
        }
      } else {
        useToast("error", "Something went wrong");
      }
    } catch (err) {
      console.log("Error adding comment");
      useToast("error", "Something went wrong. Please try again");
    }
  };

  const deleteUserComment = async (commentID: string) => {
    setDeleteCommentLoading(true);
    try {
      await deleteDoc(doc(commentsRef, commentID));
      useToast("success", "Comment Deleted successfully!");
      console.log("Done !!!!");
      setDeleteCommentLoading(false)
    } catch (err) {
      setDeleteCommentLoading(false)
      setDeleteCommentError(true)
      console.log("Error deleting comment");
    } finally {
      setOpenDeleteModal(false)
      // getPostComments();
      console.log("Updated comments");
    }
  };

  return {
    setUserComment,
    userComment,
    postComments,
    addUserComment,
    getPostComments,
    postCommentsLoading,
    postCommentsError,
    deleteUserComment, deleteCommentLoading, deleteCommentError, updatePostComments
  };
};

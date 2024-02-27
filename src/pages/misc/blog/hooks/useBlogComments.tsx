/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
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
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { IPostComment } from "../../../../models/misc/blog/postComments";
import { notifyUser } from "../../../../helpers/notifyUser";
import { v4 as uuid } from "uuid";
import { getCurrentDateInShortFormat } from "../../../../helpers/formatDate";
import { useNavigate } from "react-router-dom";

export const useBlogComments = () => {
  const { postID } = useParams();
  const navigate = useNavigate();
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
  const fetchPostComments = async () => {
    const commentsRef = collection(db, "postsComments");
    const commentsQuery = query(
      commentsRef,
      where("commentPostID", "==", postID)
    );
    onSnapshot(commentsQuery, (querySnapshot) => {
      const updatedComments: IPostComment[] = [];
      querySnapshot.forEach((doc) => {
        updatedComments.push({ ...doc.data() } as IPostComment);
      });
      setPostComments(updatedComments);
    });
  };

  const addUserComment = async () => {
    if (userID) {
      if (studentDetails && postID) {
        if (userComment !== "") {
          try {
            const { firstName, lastName, email } = studentDetails;
            const commentID = uuid();
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
            await setDoc(doc(db, "postsComments", commentID), commentInfo);
            setUserComment("");
            notifyUser("success", "Comment added successfully!");
            
          } catch (err) {
            notifyUser(
              "error",
              "Couldn't post comment. Please check your network connection and try again."
            );
          }
        } else {
          notifyUser("error", "Please add a comment");
        }
      } else {
        notifyUser("error", "Something went wrong. Please try again");
      }
    } else {
      navigate("/login");
      notifyUser("success", "Please login to comment on this post");
    }
  };

  const deleteUserComment = async (
    commentID: string,
    commentUserID: string
  ) => {
    if (commentUserID === userID) {
      setDeleteCommentLoading(true);
      console.log(commentUserID, userID);
      console.log(commentID);
      try {
        await deleteDoc(doc(commentsRef, commentID));
        notifyUser("success", "Comment deleted.");
        getPostComments()
        setDeleteCommentLoading(false);
      } catch (err) {
        notifyUser("error", "Could'nt delete comment");
        setDeleteCommentLoading(false);
        setDeleteCommentError(true);
      }
    }
  };

  useEffect(() => {
    const commentsQuery = query(
      commentsRef,
      where("commentPostID", "==", postID)
    );
    const unsubscribe = onSnapshot(commentsQuery, (querySnapshot) => {
      const updatedComments: IPostComment[] = [];
      querySnapshot.forEach((doc) => {
        updatedComments.push({ ...doc.data() } as IPostComment);
      });
      setPostComments(updatedComments);
    });

    return () => unsubscribe();
  }, []);

  return {
    setUserComment,
    userComment,
    postComments,
    addUserComment,
    getPostComments,
    postCommentsLoading,
    postCommentsError,
    deleteUserComment,
    deleteCommentLoading,
    deleteCommentError,
    fetchPostComments,
  };
};

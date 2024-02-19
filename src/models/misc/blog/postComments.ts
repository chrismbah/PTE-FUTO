export interface IPostComment {
    postID : string,
    userID: string,
    commentID: string;
    firstName: string,
    lastName: string,
    email: string;
    comment: string,
    time: string 
    date: string;
    timeStamp: Date
}export interface PostCommentsProp {
    postComments: IPostComment[]
}
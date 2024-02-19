export interface IPostComment {
    postID : string,
    userID: string,
    commentID: string;
    firstName: string,
    lastName: string,
    comment: string,
    time: string 
    // date: string;
}export interface PostCommentsProp {
    postComments: IPostComment[]
}
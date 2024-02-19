export interface IBlogComment {
    postID : string,
    userID: string,
    firstName: string,
    lastName: string,
    comment: string,
    time: string 
    // date: string;
}export interface BlogCommentProps {
    blogComments: IBlogComment[]
}
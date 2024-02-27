export interface ISuscribedUser {
  userID: string;
  firstName: string;
  lastName: string;
  email: SuscribeForm;
  regNo?: string;
  level: string;
  timeStamp: Date;
}
export interface SuscribeForm {
  email: string;
}

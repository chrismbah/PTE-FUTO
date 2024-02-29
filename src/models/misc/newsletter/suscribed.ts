export interface ISuscribedUser {
  userID: string;
  firstName: string;
  lastName: string;
  email: string;
  regNo?: string | number | null;
  level: string;
  timeStamp: Date;
}


export interface StudentDetails{
    userID: string;
    firstName: string;
    lastName: string;
    regNo?: string | null | number;
    level: string;
    email: string;
    loginDate: string;
    loginTime: string;
    registeredDate: string,
    registeredTime: string,
    profileImageURL: string
}
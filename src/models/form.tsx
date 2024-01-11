export interface ISignUpForm {
  firstName: string;
  lastName: string;
  regNo?: number | null;
  level: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginForm{
  email: string;
  password: string;
}

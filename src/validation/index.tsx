import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    firstName: yup.string().required("Please input your first name"),
    lastName: yup.string().required("Please input your last name"),
    level: yup.string().required("Please select your level"),
    email: yup.string().email("Please input a correct email").required("Please input your email"),
    password: yup
      .string()
      .min(6)
      .max(20)
      .required("Please input a strong password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords dont match")
      .required("Please put in your password"),
  });

export const logInSchema = yup.object().shape({
    email: yup.string().email("Please input a correct email").required("Please input your email"),
    password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password should not be more than 20 characters")
    .required("Please input your password"),
})

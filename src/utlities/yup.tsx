import * as yup from "yup";
export const schema = yup.object().shape({
  userName: yup.string().required("UserName is required"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  password: yup.string().min(3, "Must have at least 3 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});





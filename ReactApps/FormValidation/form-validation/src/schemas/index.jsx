import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string().min(5).max(25).required("Please Enter A Name"),
  email: Yup.string().email().required("Please Enter A Valid Email"),
  password: Yup.string().min(8)
  .required("Password Must Be 8 Characters Long")
  .matches(/[0-9]/,'Password Requires A Number')
  .matches(/[a-z]/,'Password Requires A Lowercase Letter')
  .matches(/[A-Z]/,'Password Requires A Uppercase Letter')
  .matches(/[^\w]/,'Password Requires a Symbol')
  ,
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password Doesn't match"),
});

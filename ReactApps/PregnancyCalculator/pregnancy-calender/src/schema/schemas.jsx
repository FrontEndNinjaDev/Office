import * as Yup from "yup";

export const ValidateSchema = Yup.object({
  name: Yup.string()
    .required("Name Is Required")
    .matches(/[a-z]/, "Please Type A Valid Name")
    .matches(/[A-Z]/, "Please Type A Valid Name"),
  age: Yup.number()
    .min(18, "Age Must Be 18")
    .max(60, "Age Must Be 60 can't Upto"),
  pMonth: Yup.number()
    .min(0.1, "Pregnancy Month Must Be 0.1")
    .max(9, "Pregnancy Month can't Upto 9"),
  discription: Yup.string().min(10).required("Discription Is Required"),
});

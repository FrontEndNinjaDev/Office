
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({onLogin}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      email:"",
    },
    validationSchema: validationSchema,
    onSubmit: async (values,action) => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users?user_name=${values.username}&password=${values.password}`
        );
        if (response.data.length > 0) {
          console.log("Signin successful!");
          action.resetForm();
          onLogin();
        } else {
          setErrors({
            username: "Invalid username or password",
            password: "Invalid username or password",
          });
        }
      } catch (err) {
        setErrors({
          username: "Error during signin",
          password: "Error during signin",
        });
      }
    },
  });

  return (
    <div className="signup-container">
      <h2>Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <label>Username Or Email </label>
        <input
          type="text"
          placeholder="Username  Or Email..."
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username && (
          <p style={{ color: "red" }}>{errors.username}</p>
        )}
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}

        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Login;


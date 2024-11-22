import { useFormik } from "formik";
import { SignUpSchema } from "../Schemas/SignUpSchema";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Signup = (onSignup) => {
  const initialValues = {
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [error, setError] = useState("");

  const { values, handleBlur, handleSubmit, touched, errors, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      validateOnChange: false,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            `http://localhost:5000/users?user_name=${values.user_name}&password=${values.password}`
          );
          if (response.data.length > 0) {
            setError("User Alrerdy Exist");
          } else {
            await axios.post("http://localhost:5000/users", {
              user_name: values.user_name,
              email: values.email,
              password: values.password,
              first_name: values.first_name,
              last_name: values.last_name,
            });
            setError("SignUp Successfull");
            action.resetForm();
            onSignup();
          }
        } catch (err) {
          setError("Error During Signup");
        }
      },
    });

  return (
    <div className="signup-container">
      <form className="form" onSubmit={handleSubmit}>
        <tr>
          <td>
            <label>First Name</label>
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Firstname..."
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.first_name && touched.first_name ? (
              <p
                style={{
                  color: "red",
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "left",
                }}
              >
                {errors.first_name}
              </p>
            ) : null}
          </td>
        </tr>
        <tr>
          <td>
            <label>Last Name</label>
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Lastname..."
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.last_name && touched.last_name ? (
              <p
                style={{
                  color: "red",
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "left",
                }}
              >
                {errors.last_name}
              </p>
            ) : null}
          </td>
        </tr>
        <tr>
          <td>
            <label>User Name</label>
          </td>
          <td>
            <input
              type="text"
              placeholder="Make A User Name..."
              name="user_name"
              value={values.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.user_name && touched.user_name ? (
              <p
                style={{
                  color: "red",
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "left",
                }}
              >
                {errors.user_name}
              </p>
            ) : null}
          </td>
        </tr>
        <tr>
          <td>
            <label>Email</label>
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Email..."
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p
                style={{
                  color: "red",
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "left",
                }}
              >
                {errors.email}
              </p>
            ) : null}
          </td>
        </tr>
        <tr>
          <td>
            <label>Password</label>
          </td>
          <td>
            <input
              type="password"
              placeholder="Enter Password..."
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p
                style={{
                  color: "red",
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "left",
                }}
              >
                {errors.password}
              </p>
            ) : null}
          </td>
        </tr>
        <tr>
          <td>
            <label>Confirm Password</label>
          </td>
          <td>
            <input
              type="password"
              placeholder="Confirm The Password..."
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p
                style={{
                  color: "red",
                  marginTop: "2px",
                  marginBottom: "2px",
                  textAlign: "left",
                }}
              >
                {errors.confirm_password}
              </p>
            ) : null}
          </td>
        </tr>
        <div className="login-btn">
          <button type="submit">Let's Go SignUp</button>
          {error && <p>{error}</p>}
          <h3>
            Have An Account <NavLink to="/login">login</NavLink>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Signup;


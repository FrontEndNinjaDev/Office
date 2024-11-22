import React from "react";
import { useFormik } from "formik";
import { SignUpSchema } from "./schemas";

const Registration = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, handleSubmit, handleBlur, touched, handleChange } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      validateOnChange: false,
      onSubmit: (values,action) => {
        console.log(
          "🚀 ~ file: Registration.jsx:19 ~ Registration ~ onSubmit:",
          values
        );
        action.resetForm();
      },

      

    });
  console.log(
    "🚀 ~ file: Registration.jsx:25 ~ Registration ~ errors:",
    errors
  );

  return (
    <div className="box">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="title">Register</h2>
          <p className="title-message">
            Signup now and get full access to our app.
          </p>
          <div className="flex">
            <label>
              <input
                type="text"
                placeholder="first Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p
                  style={{
                    color: "red",
                    marginTop: "2px",
                    marginBottom: "2px",
                    textAlign: "left",
                  }}
                >
                  {errors.name}
                </p>
              ) : null}
            </label>
          </div>
          <label>
            <input
              type="text"
              placeholder="Email"
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
          </label>
          <label>
            <input
              type="text"
              placeholder="Password"
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
          </label>
          <label>
            <input
              type="text"
              placeholder="Confirm password"
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
          </label>
          <button className="submit" type="submit">
            Submit
          </button>
          <p className="sign-in">
            Already have an account ?
            <a href="#" style={{ color: "#43c7e8" }}>
              Signin
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;

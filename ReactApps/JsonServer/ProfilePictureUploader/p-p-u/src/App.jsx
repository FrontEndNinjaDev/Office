// src/App.js

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const App = () => {
  const formik = useFormik({
    initialValues: { username: "", profilePicture: null },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      profilePicture: Yup.mixed().required("A file is required"),
    }),
    onSubmit: async ({ username, profilePicture }) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const newUser = { username, profilePicture: reader.result };
        try {
          await axios.post("http://localhost:5000/users", newUser);
          alert("Profile uploaded successfully!"); // Show success message
        } catch (error) {
          console.error("Upload error:", error);
        }
      };
      if (profilePicture) reader.readAsDataURL(profilePicture);
    },
  });

  return (
    <div>
      <h1>Upload Profile Picture</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <input
          type="file"
          name="profilePicture"
          accept="image/*"
          onChange={(e) =>
            formik.setFieldValue("profilePicture", e.currentTarget.files[0])
          }
        />
        <button type="submit">Upload</button>
        {formik.values.profilePicture && (
          <img
            src={URL.createObjectURL(formik.values.profilePicture)}
            alt="Preview"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
          />
        )}
      </form>
    </div>
  );
};

export default App;

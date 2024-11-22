import { useFormik } from "formik";
import React, { useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState('');

  const initialValues = {
    id: "",
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
  };

  const { values, handleSubmit, handleBlur } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const response =  await axios.get("http://localhost:5000/users", {
            user_name: values.user_name,
            email: values.email,
            password: values.password,
            first_name: values.first_name,
            last_name: values.last_name,
          });
        console.log("🚀 ~ file: UserProfile.jsx:27 ~ onSubmit: ~ response:", response)
        if (response.data.length > 0) {
          console.log(
            "🚀 ~ file: UserProfile.jsx:24 ~ onSubmit:async ~ response.data.length:",
            response.data
          );
          setUserData({
            id: userData.id,
            first_name: userData.first_name,
            last_name: userData.last_name,
            user_name: userData.user_name,
            email: userData.email,
          });
        } else {
            setError('error')

        }
      } catch (error) {
        setError("false")
      }
    },
  });

  return (
  <div className="signup-container">

    <h1>{values.user_name}</h1>
    <h1>{values.first_name}</h1>
    <h1>{values.last_name}</h1>
    <h1>{values.id}</h1>
    <h1>{values.email}</h1>
   

  </div>
  )
};

export default UserProfile;

import React, { useState, useEffect } from "react";
import uploadPic from "../assets/upload.png"; // Ensure this path is correct
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const passwordMatch = formData.password === formData.confirmPassword;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  useEffect(() => {
    let objectUrl = null;
    if (formData.profileImage) {
      objectUrl = URL.createObjectURL(formData.profileImage);
    }
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [formData.profileImage]);

  return (
    <div className="max-w-lg mx-auto p-3 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl text-center my-7 font-semibold text-slate-800">
        Sign Up
      </h1>

      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <input
          id="image"
          type="file"
          name="profileImage"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
          required
        />

        <label
          htmlFor="image"
          className="flex items-center gap-3 mt-2 mb-2 cursor-pointer hover:bg-slate-100 p-2 rounded-lg">
          {formData.profileImage ? (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile"
              style={{ maxWidth: "80px" }}
            />
          ) : (
            <img
              src={uploadPic}
              alt="Upload Profile"
              className="w-8 h-8"
            />
          )}
          <p className="text-lg text-slate-700">Upload Your Photo</p>
        </label>

        <button
          className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95 disabled:opacity-80"
          disabled={!passwordMatch}
        >
          Register
        </button>
      </form>

      <div className="mt-5 flex gap-2 justify-center">
        <p>Already have an account?</p>
        <Link to="/login">
          <span className="text-blue-700 hover:underline">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;

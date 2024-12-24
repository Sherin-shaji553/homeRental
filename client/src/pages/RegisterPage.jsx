import React, { useEffect, useState } from "react";
import uploadProfilePic from "../assets/upload.png";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setPasswordMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === ""
    );
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerForm = new FormData();

      for (var key in formData) {
        registerForm.append(key, formData[key]);
      }

      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        body: registerForm,
      });

      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg mt-10 border border-gray-200">
      <h1 className="text-4xl text-center my-7 font-bold text-gray-800">Sign Up</h1>

      <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500  shadow-sm"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500  shadow-sm"
          required
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500  shadow-sm"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500  shadow-sm"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {!passwordMatch && (
          <p className="text-sm text-red-500">Passwords do not match</p>
        )}

        <input
          id="image"
          type="file"
          name="profileImage"
          accept="image/*"
          className="hidden"
          required
          onChange={handleChange}
        />

        <label
          htmlFor="image"
          className="flex items-center gap-3 mt-2 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition ease-in-out duration-200"
        >
          {formData.profileImage ? (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              className="w-16 h-16 object-cover rounded-full border border-gray-300"
            />
          ) : (
            <img
              src={uploadProfilePic}
              alt="add profile photo"
              className="w-10 h-10"
            />
          )}

          <p className="text-lg text-gray-700">Upload Your Photo</p>
        </label>

        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition ease-in-out duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={!passwordMatch}
        >
          Register
        </button>
      </form>

      <div className="mt-6 flex gap-2 justify-center">
        <p className="text-gray-600">Already have an account?</p>

        <Link to={"/login"}>
          <span className="text-blue-600 hover:underline font-medium">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;

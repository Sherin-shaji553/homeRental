import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl text-center my-8 font-bold text-gray-800">Welcome Back</h1>
      
      <form className="flex flex-col gap-6">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 shadow-sm"
          required
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 shadow-sm"
          required
          value={password}
          onChange={(e)=> setEmail(e.target.value)}
        />

        <button
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out shadow-md"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">Don't have an account?</p>
        <Link to="/register">
          <span className="text-blue-600 hover:underline font-semibold">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

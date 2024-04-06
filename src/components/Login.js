import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm , setIsSignInForm] =  useState(true);
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner"
        />
      </div>
      <form className="w-3/12 absolute bg-black mx-auto right-0 left-0 my-36 p-12 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 my-4 rounded-lg bg-gray-700"
        />
        }
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-4 my-4 rounded-lg bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 rounded-lg bg-gray-700"
        />
        <button className="w-full bg-red-700 p-4 rounded-lg my-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          { isSignInForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;

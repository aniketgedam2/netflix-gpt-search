import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile   } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, User_Avetar } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = () => {
    // check validation
    if (isSignInForm) {
      //sign In logic
      const message = checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);
      if (message) return;
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    } else {
      // signUp logic
      const message = checkValidData(email.current.value, password.current.value, name.current.value);
      setErrorMessage(message);
      if (message) return;

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: User_Avetar
          }).then(() => {
            const {uid , email , displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            }))
          }).catch((error) => {
            setErrorMessage(error)
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND_IMAGE}
          alt="banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black mx-auto right-0 left-0 my-36 p-12 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 rounded-lg bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-4 my-4 rounded-lg bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 rounded-lg bg-gray-700"
        />
        <p className="text-red-500 font-bold text-xl">{errorMessage}</p>
        <button
          onClick={handleSubmit}
          className="w-full bg-red-700 p-4 rounded-lg my-6"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix? Sign Up Now"
            : "Already Registered? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;

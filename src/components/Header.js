import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
const Header = () => {
  
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch(() => {
      navigate("/error")
    });
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between z-50">
      <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
      />
      {
        user &&
        <div className="flex p-2 m-2 justify-between">
          <p className="p-2 font-bold">{user.displayName}</p>
          <img
            className="w-10 h-10 m-1 cursor-pointer rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="iconuser"
          />
          <button className="bg-red-600 p-1 rounded-xl font-bold" onClick={handleSignOut}>Sign Out</button>
        </div>
      }

    </div>

  )
}

export default Header
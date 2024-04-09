import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSearchSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  const gptSearchShow = useSelector((store)=>store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch(() => {
      navigate("/error")
    });
  }
  const handleToggle = ()=>{
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    // unsubscribe the component in componentWillUnmount
    return ()=> unsubscribe();
  }, [])

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between z-50">
      <img className="w-44" src={LOGO}
        alt='logo'
      />
      {
        user &&
        <div className="flex p-2 m-2 justify-between">
          {gptSearchShow && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifire} value={lang.identifire}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button className='mt-2 px-4 py-2 bg-purple-500 rounded-lg' onClick={handleToggle}>{showGptSearch ? "Homepage":"Gpt Search"}</button>
          <p className="p-2 font-bold">{user.displayName}</p>
          <img
            className="w-10 h-10 m-1 cursor-pointer rounded-lg"
            src={user.photoURL}
            alt="iconuser"
          />
          <button className="bg-red-600 p-1 rounded-xl font-bold" onClick={handleSignOut}>Sign Out</button>
        </div>
      }

    </div>

  )
}

export default Header
import React, { useRef } from 'react';
import {useSelector} from "react-redux";
import lang from '../utils/languageConstants';
// import openAI from "../utils/openAI"
import { API_OPTIONS } from '../utils/constant';
import {useDispatch} from "react-redux"
import { addGptMovieResult } from '../utils/gptSearchSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store)=>store.config.lang);
  const searchText = useRef(null);

  const searchTmdbMovie = async(movie)=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await data.json()
    return json.results;
  }

  const handleGptSearchClick = async()=>{
    // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : "+searchText.current.value+". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, DOn , Golmal, Koi Mil Gaya."
    // console.log(gptQuery)
    // const gptResults = await openAI.chat.completions.create({
    //   messages:[{role:"user", content: gptQuery}],
    //   model:"gpt-3.5-turbo"
    // });
    // console.log(gptResults)

    const getTmbdSearchedResults = await searchTmdbMovie(searchText.current.value);
    dispatch(addGptMovieResult({movieNames:searchText.current.value , movieResults:getTmbdSearchedResults}))
    console.log(getTmbdSearchedResults);
  }

  return (
    <div className='pt-[50%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={lang[language].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGptSearchClick}>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
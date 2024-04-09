import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-[100%]" src={BACKGROUND_IMAGE} alt="banner" />
      </div>
      <div className="">
      <GptSearchBar />
      <GptMovieSuggestions/>
    </div>
    </>
  );
};

export default GptSearch;

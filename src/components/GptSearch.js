import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMAGE} alt="banner" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;

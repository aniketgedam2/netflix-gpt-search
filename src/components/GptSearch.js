import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="banner" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;

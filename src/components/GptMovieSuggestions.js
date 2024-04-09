import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const  {movieNames,gptMovies} = useSelector(store=>store.gpt);
    if(!gptMovies) return null;

  return (
    <div className="p-4 m-4 text-white bg-black  bg-opacity-50">
        {movieNames &&  <MovieList title={movieNames} movies={gptMovies} />}
    </div>
  )
}

export default GptMovieSuggestions
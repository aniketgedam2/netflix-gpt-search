import { API_OPTIONS } from "../utils/constant";
import {useDispatch, useSelector} from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovie = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movie.topRatedMovies)
    const getTopRatedMovie = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
      !topRatedMovies && getTopRatedMovie();
    }, [])
    
}

export default useTopRatedMovie;
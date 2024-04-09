import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector(store=>store.movie.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS)
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results))
    }

    useEffect(() => {
        !nowPlaying && getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;
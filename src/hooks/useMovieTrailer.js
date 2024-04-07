import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const getPlayVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const mainData = await data.json();
      const filterData = mainData.results.filter((video) => video.type == "Trailer");
      const trailer = filterData.length ? filterData[0] : mainData.results[0];
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getPlayVideo();
    }, []);
}

export default useMovieTrailer;
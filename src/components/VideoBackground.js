import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector} from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store)=>store.movie.trailerVideo)
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
      className="w-screen aspect-video overflow-y:hidden"
        src={`https://www.youtube.com/embed/${trailer?.key}?si=Hhf4MIzzxbek0Dud`+"&autoplay=1&mute=1"}
        title="YouTube video player"
        autoPlay="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

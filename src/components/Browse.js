import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovies();
  
    return (
    <div className="">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        mainContainer
          - video title
          - video background
        secondaryContainer
          - movies * n
          - cards * n
      
      */}
    </div>
  );
};

export default Browse;

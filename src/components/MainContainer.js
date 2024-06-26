import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import {useSelector} from "react-redux"
const MainContainer = () => {
    const movies = useSelector(store=>store.movie.nowPlayingMovies)
    if(!movies) return;
    const {original_title, overview , id} = movies[0];
    
  return (
    <div className='pt-[30%] md:pt-0 bg-black'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
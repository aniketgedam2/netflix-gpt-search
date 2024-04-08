import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {

  return (
    <div className='w-48 pr-3'>
        <img src={IMG_CDN_URL+posterPath} alt='poster-image'/>
    </div>
  )
}

export default MovieCard
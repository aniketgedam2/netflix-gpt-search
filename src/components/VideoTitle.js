import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='w-screen pt-[15%] px-6 md:px-24 absolute  aspect-video bg-gradient-to-r from-black text-white'>
      <h1 className='text-2xl md:text-4xl font-bold md:w-1/3'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4 md:my-0'>
        <button className='bg-white text-black py-1 md:py-4 px-4 md:px-12 text-xl rounded-lg'>Play</button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
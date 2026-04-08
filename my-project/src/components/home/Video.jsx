import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
        className='h-full w-full rounded-xl object-cover'
        autoPlay
        loop
        muted
        playsInline
        src="/video.mp4"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
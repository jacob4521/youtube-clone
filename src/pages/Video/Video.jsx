import React from 'react';
import './Video.css';
import PlayVideo from '../../components/PlayVideo/PlayVideo';
import Recmommended from '../../components/Recommended/Recommended';

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recmommended />
    </div>
  )
}

export default Video

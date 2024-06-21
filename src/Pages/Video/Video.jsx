import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoID,categoryId}=useParams();
  
  return (
    <div className='play-container'>
      <PlayVideo videoID={videoID}/>
      <Recommended/>
    </div>
  )
}

export default Video
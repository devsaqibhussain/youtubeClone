import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player"
import {fetchFromAPI} from "../utils/fetchFromAPI"
import { SuggestVideos } from './'
import { CheckCircle, ThumbUp} from "@mui/icons-material"


const VideoDetail = () => {

  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet&id=${id}`)
    .then((data)=>{
      setVideoDetail(data.items[0])})
  },[id])
  console.log(videoDetail)
  return (
    <section className='p-2 sm:p-4'>
      <div className=' grid grid-cols-1 lg:grid-cols-6 gap-4'>

        <div className=' col-span-1 lg:col-span-4 lg:pt-4 overflow-y-auto'>
          <div className='player-wrapper'>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`} 
              controls={true}
              width="100%"
              height="100%"
              className = "react-player"
            />
          </div>
          
          <h4 className=' text-lg font-bold text-white p-2'>{videoDetail?.snippet?.title}</h4>
          
          <div className=' flex justify-between'>
            <div className=' flex flex-row items-center'>
              <h2 className=' text-xl font-bold text-white ml-2'>{videoDetail?.snippet?.channelTitle}</h2>
              <CheckCircle sx={{ml:"8px", fontSize:"16px", color:"white"}} />
            </div>
            
            <p className=' text-white font-semibold px-4'><ThumbUp/><span className=' ml-4 font-normal'>{videoDetail?.statistics?.likeCount}</span></p>
          </div>
            <div className=' rounded-[30px] bg-[#272727] hover:bg-[#363636] mt-4 p-4 text-white'>
              <h4>Description:</h4>
              <p className=' text-[11px] sm:text-[16px]'>{videoDetail?.snippet?.description}</p>
            </div>
          
          
        </div>

        <div className='col-span-1 lg:col-span-2'>
          <h4 className='text-lg font-bold text-white p-4'>Suggested Videos</h4>
          <div className='h-screen overflow-y-scroll'>
            <SuggestVideos relatedTo={id} grid={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoDetail
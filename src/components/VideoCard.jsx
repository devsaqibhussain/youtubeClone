import React from 'react'
import { CheckCircle} from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { demoThumbnailUrl ,demoVideoUrl , demoChannelUrl ,demoChannelTitle , demoVideoTitle} from "../utils/constants"

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <div
        className=' w-full  flex flex-col justify-start '
    >
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <img 
                className='w-full object-contain rounded-[10px]'
                src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            />
        </Link>
        <div
            className=' ml-2 mt-4'
        >
            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
                <h4 className=' text-white font-semibold'>
                    {snippet?.title.slice(0,60)||demoVideoTitle}
                </h4>
            </Link>
            <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
                <p className=' text-gray-500 font-normal'>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle 
                        fontSize='14px'
                        sx={{ml:"5px"}}
                    />
                </p>
            </Link>
        </div>
    </div>
  )
}

export default VideoCard
import React from 'react'
import { CheckCircle} from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { demoProfilePicture , demoChannelUrl, demoChannelTitle } from "../utils/constants"

const ChannelCard = ({channelDetail}) => {
  console.log(channelDetail)
  return (
    <div
        className=' w-full flex my-10 flex-wrap gap-4 flex-col justify-center items-center '
    >
        <Link to={channelDetail?.id?.channelId?`/channel/${channelDetail?.id?.channelId}`:demoChannelUrl}>
            <img
                className='w-[100px] object-contain rounded-full'
                src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            />
        </Link>
        <div className='flex flex-col items-center'>
          <h2 className='text-white text-xl font-bold'>{channelDetail?.snippet?.channelTitle||channelDetail?.snippet?.title || demoChannelTitle}<CheckCircle fontSize='5px' className='ml-2 text-blue-500'/></h2>
          {channelDetail?.statistics
            ? <p className='text-white lg:text-center text-sm mt-5 font-normal'>
                {channelDetail?.statistics?.subscriberCount} Subscribers
              </p>
            :<p className='text-white lg:text-center text-sm font-normal lg:max-w-[260px] md:max-w-[500px] max-w-[320px] mt-2'>
              {channelDetail?.snippet?.description.slice(0,60)+`...`}
            </p>}
          {!channelDetail?.statistics&&<Link to={channelDetail?.id?.channelId?`/channel/${channelDetail?.id?.channelId}`:demoChannelUrl}>
              <p className=' bg-gray-300 w-fit mt-4 rounded-[20px] p-2 font-semibold text-sm'>Go to Channel</p>
          </Link>}
        </div>
        

    </div>
  )
}

export default ChannelCard
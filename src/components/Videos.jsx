import React from 'react'
import {VideoCard, ChannelCard} from './'
const Videos = ({videos, grid}) => {
  return (
      // <div className=' flex flex-wrap gap-4 lg:justify-start justify-center'>
      <div className={`${grid? "grid grid-cols-1":"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4" } `}>
          {videos.map((item,index)=>{
            return !item.id.playlistId &&(
              <div key={index}>
                  {item.id.videoId && <VideoCard video={item}/>}
                  {item.id.channelId && <ChannelCard channelDetail={item}/>}
              </div>
          )})}
      </div>

  )
}

export default Videos
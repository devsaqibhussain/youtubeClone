import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {fetchFromAPI} from '../utils/fetchFromAPI'
import { ChannelCard,Videos } from './'

const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState([])
  const [videos, setVideos] = useState([])

  
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>{setChannelDetail(data?.items[0])})

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{setVideos(data?.items)})

  },[id])
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <ChannelCard channelDetail={ channelDetail}/>
      <div className='px-4'>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default ChannelDetail
import React, {useState, useEffect} from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {Sidebar ,Videos} from './'


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])
  return (
    <div className='flex md:flex-row flex-col'>

      <div
        className=' border-r-2 border-[#3f3f3f] pr-2 md:h-screen'
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>

      <div
        className=' flex flex-col px-4 py-2 overflow-y-auto h-screen'>
        <h4 className=' text-2xl font-bold text-white p-4'>
          {selectedCategory} <span style={{color:"#F31503"}}>Videos</span>
        </h4>
        <div className=' flex w-full justify-center'>
          <Videos videos={videos}/>
        </div>
      </div>

    </div>
  )
}

export default Feed
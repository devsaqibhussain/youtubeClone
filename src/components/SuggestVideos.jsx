import React, {useEffect,useState} from 'react'
import {fetchFromAPI} from "../utils/fetchFromAPI.js"
import {Videos} from "./"

const SuggestVideos = ({relatedTo, grid}) => {

    const [videos, setVideos] = useState([])

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${relatedTo}`)
        .then((data)=>setVideos(data.items))
    },[relatedTo])
  return (
    <div><Videos videos={videos} grid={grid}/></div>
  )
}

export default SuggestVideos
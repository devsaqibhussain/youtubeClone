import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
    }
  }

  return (
    <form
        onSubmit={handleSubmit}
        className=' rounded-[20px] border-2 border-[#2c2c2c] flex flex-1 h-[50px] max-w-[1024px]'
    >
        <input
            className='search-bar bg-[#0F0F0F] placeholder-[#2c2c2c] text-white ml-2 my-2 flex-1 flex-shrink'
            value={searchTerm}
            placeholder='Search...'
            onChange={(e)=>setSearchTerm(e.target.value)} 
        />
        <IconButton type="submit" sx={{p:"10px",color:"white",background:"#222222",borderRadius:"0 20px 20px 0",width:"60px"}}>
            <Search />
        </IconButton>
    </form>
  )
}

export default SearchBar
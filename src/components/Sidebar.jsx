import React from 'react'
import { categories } from '../utils/constants'

const Sidebar = ({selectedCategory, setSelectedCategory}) => { 
  return (
    <div
        className=' flex flex-row md:flex-col md:h-[90vh] overflow-y-auto'
    >
        {categories.map((category)=>(
            <button 
                key={category.name} 
                onClick={()=>setSelectedCategory(category.name)}
                className="category-btn "
                style={{color:"white", background: category.name === selectedCategory && "#272727"}}
            >
                <span style={{color:category.name === selectedCategory? "white" : "red", marginRight:"15px"}}>{category.icon}</span>
                <span style={{opacity: category.name===selectedCategory? 1:0.8}}>{category.name}</span>
            </button>
        ))}
    </div>
  )
}

export default Sidebar
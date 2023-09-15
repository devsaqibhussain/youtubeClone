import { ytLogo } from '../assets'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const NavBar = () => (
  <nav className='relative h-[60px] '>
    <div
      className='fixed z-[5] top-0 flex w-full py-2 px-2 2xl:px-4 bg-[#0f0f0f]'
    >
      <Link to={"/youtubeClone/"} className=' flex items-center justify-center'>
        <img src={ytLogo} alt='logo' className=' flex-shrink-0 h-[50px] object-contain'/>
      </Link>

      <div className='flex-1 flex-shrink max-w-[50px] md:max-w-[120px] lg:max-w-[200px]'/>

      <SearchBar />
    </div>
  </nav>
  )


export default NavBar
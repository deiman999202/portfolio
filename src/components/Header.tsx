import {Link} from 'react-router-dom'
import myPhoto from '../assets/portfolio-main.png'

const Header = () => {
  return (
    <header className='py-3 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-white'>
      <Link to={"/"} className="logo-and-name flex items-center gap-4">
        <img src={myPhoto} alt="my pic" className='w-8 md:w-12' />
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Dmytro Voloshyn</h1>
      </Link>
      <nav className='flex items-center gap-4 text-md md:text-lg lg:text-xl font-bold mt-0.5'>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/about"}>About</Link>
      </nav>
    </header>
  )
}

export default Header